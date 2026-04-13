import { useState, useCallback, useMemo, useRef, useEffect } from "react";
import type { ActivityItem, ActivityResponse, SocketMessage } from "../types/activity";
import { getActivityDate, getActivityTimestamp } from "../utils/activityUtilities";
import { useActivityConfig } from "../context/ActivityContext";

const ACTIVITIES_PAGE_SIZE = 20;

/**
 * Transform socket event data to ActivityItem format based on event type
 */
const transformSocketEventToActivity = (event: string, data: unknown): ActivityItem | null => {
  if (!data || typeof data !== "object") return null;
  const eventData = data as Record<string, unknown>;

  switch (event) {
    case "whatsapp_message":
      return { ...eventData, activity_type: "whatsapp" } as unknown as ActivityItem;
    case "communication":
      return { ...eventData, activity_type: "communication" } as ActivityItem;
    case "fcrm_note":
      return { ...eventData, activity_type: "notes" } as ActivityItem;
    case "crm_task": {
      const taskType = (eventData.task_type as string) || (eventData.type as string) || "Schedule";
      const activityType = taskType === "Reminder" ? "Reminder" : "Schedule";
      return { ...eventData, activity_type: activityType } as ActivityItem;
    }
    case "crm_lead":
      return { ...eventData, activity_type: "lead" } as ActivityItem;
    case "crm_call_log": {
      const isIncoming = eventData.type === "Incoming";
      return { ...eventData, activity_type: isIncoming ? "incoming_call" : "outgoing_call" } as ActivityItem;
    }
    default:
      return null;
  }
};

interface UseActivitiesResult {
  activities: ActivityItem[];
  isLoading: boolean;
  error: Error | null;
  isFetchingNextPage: boolean;
  hasNextPage: boolean;
  fetchNextPage: () => void;
  refetch: () => void;
}

/**
 * Custom hook to fetch activities with infinite scroll and socket updates.
 * Uses the adapter pattern via ActivityContext.
 */
export function useActivities(contactName: string | null, filters?: Record<string, string | string[]>): UseActivitiesResult {
  const { fetchActivities, onSocketMessage } = useActivityConfig();
  const [pages, setPages] = useState<ActivityResponse[]>([]);
  const [socketActivities, setSocketActivities] = useState<ActivityItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [isFetchingNextPage, setIsFetchingNextPage] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(false);
  const prevContactNameRef = useRef<string | null>(null);
  const currentPageRef = useRef(0);

  // Fetch first page
  const fetchPage = useCallback(async (pageIndex: number, isFirstPage: boolean) => {
    if (!contactName) return;
    if (isFirstPage) setIsLoading(true);
    else setIsFetchingNextPage(true);

    try {
      const apiFilters: Record<string, string[]> = {};
      if (filters) {
        Object.entries(filters).forEach(([key, value]) => {
          if (Array.isArray(value)) {
            if (value.length > 0) apiFilters[key] = value;
          } else if (value) {
            apiFilters[key] = [value];
          }
        });
      }

      const result = await fetchActivities({
        contactName,
        limit_start: pageIndex,
        limit_page_length: ACTIVITIES_PAGE_SIZE,
        filters: Object.keys(apiFilters).length > 0 ? apiFilters : undefined,
      });

      setPages((prev) => isFirstPage ? [result] : [...prev, result]);

      const msg = result.message;
      const nextPageIndex = msg.page + 1;
      setHasNextPage(nextPageIndex * msg.page_size < msg.total_count);
      currentPageRef.current = nextPageIndex;
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to fetch activities"));
    } finally {
      setIsLoading(false);
      setIsFetchingNextPage(false);
    }
  }, [contactName, filters, fetchActivities]);

  // Initial fetch & refetch on contact/filter change
  useEffect(() => {
    if (prevContactNameRef.current !== contactName) {
      prevContactNameRef.current = contactName;
      setSocketActivities([]);
    }
    setPages([]);
    currentPageRef.current = 0;
    fetchPage(0, true);
  }, [contactName, filters, fetchPage]);

  const fetchNextPage = useCallback(() => {
    if (!isFetchingNextPage && hasNextPage) {
      fetchPage(currentPageRef.current, false);
    }
  }, [isFetchingNextPage, hasNextPage, fetchPage]);

  const refetch = useCallback(() => {
    setPages([]);
    currentPageRef.current = 0;
    fetchPage(0, true);
  }, [fetchPage]);

  // Socket message handling
  useEffect(() => {
    if (!onSocketMessage) return;
    const unsubscribe = onSocketMessage((data: SocketMessage) => {
      const eventName = data.event;
      if (["whatsapp_message", "communication", "fcrm_note", "crm_task", "crm_lead", "crm_call_log"].includes(eventName)) {
        const transformedActivity = transformSocketEventToActivity(eventName, data.message);
        if (transformedActivity) {
          setSocketActivities((prev) => {
            const activityKey = "name" in transformedActivity ? transformedActivity.name : getActivityDate(transformedActivity);
            const existingIndex = prev.findIndex((act) => {
              const actKey = "name" in act ? act.name : getActivityDate(act);
              return actKey === activityKey;
            });
            if (existingIndex >= 0) {
              const next = [...prev];
              next[existingIndex] = transformedActivity;
              return next;
            }
            return [...prev, transformedActivity];
          });
        }
      }
    });
    return unsubscribe;
  }, [onSocketMessage]);

  // Dedupe & sort
  const activities = useMemo(() => {
    const fetched = pages.flatMap((p) => p.message.activities);

    let filteredSocketActivities = socketActivities;
    if (filters && filters.activity_type && Array.isArray(filters.activity_type) && filters.activity_type.length > 0) {
      const allowedTypes = new Set(filters.activity_type);
      filteredSocketActivities = socketActivities.filter(a => {
        const item = a as any;
        const type = item.activity_type;

        // Map PDA/DC internal flags
        if (allowedTypes.has("pd") && item.is_pd) return true;
        if (allowedTypes.has("dc") && item.is_dc) return true;

        if (!type) return false;
        if (allowedTypes.has(type)) return true;
        if (allowedTypes.has("call") && (type === "outgoing_call" || type === "incoming_call")) return true;
        if (allowedTypes.has("brief") && type === "brief") return true;
        return false;
      });
    }

    const socketNames = new Set(
      filteredSocketActivities
        .map((a) => ("name" in a && a.name != null ? String(a.name) : null))
        .filter((n): n is string => n != null)
    );

    const fetchedDeduped =
      socketNames.size > 0
        ? fetched.filter((a) => !("name" in a && a.name != null && socketNames.has(String(a.name))))
        : fetched;

    const merged = [...filteredSocketActivities, ...fetchedDeduped];
    return [...merged].sort((a, b) => getActivityTimestamp(b) - getActivityTimestamp(a));
  }, [pages, socketActivities, filters]);

  return {
    activities,
    isLoading,
    error,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    refetch,
  };
}

export default useActivities;
