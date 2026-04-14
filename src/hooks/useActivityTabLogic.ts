import { useMemo, useRef, useEffect, type RefObject } from "react";
import { useActivities } from "./useActivities";
import { useScrollToActivity, getActivityElementId } from "./useScrollToActivity";
import { buildActivityNodes } from "../utils/activityGroupDisplay";
import { useFilterState, ACTIVITY_TYPE_LABELS } from "./useFilterState";
import { useActivityConfig } from "../context/ActivityContext";
import type { ActivityNode, ActivityItem } from "../types/activity";

export interface UseActivityTabLogicReturn {
  activityNodes: ActivityNode[];
  initialFilters: { field: string; value: string }[];
  isLoading: boolean;
  error: Error | null;
  isFetchingNextPage: boolean;
  valueOptions: Record<string, { label: string; value: string }[]>;
  refetch: () => void;
  handleApplyFilters: (filters: { field: string; value: string }[]) => void;
  handleClearFilters: () => void;
  getActivityElementId: (activity: ActivityItem, index: number) => string;
  loadMoreRef: RefObject<HTMLDivElement | null>;
  includes_pd: boolean;
  includes_dc: boolean;
}

/**
 * Main hook for the Activity tab — handles filters, API data, infinite scroll, and activity grouping.
 * Uses adapter-based context for data fetching.
 */
export function useActivityTabLogic(): UseActivityTabLogicReturn {
  const { contactName, searchParams, fetchLeads } = useActivityConfig();

  const activityId = searchParams?.activityId ?? null;

  // Filter Logic
  const initialParameters = useMemo(() => {
    const commType = searchParams?.comm_type ?? null;
    if (commType === "communication") {
      return { activity_type: "Emails" };
    }
    return {};
  }, [searchParams]);

  const { filtersPayload, initialFilters, handleApplyFilters, handleClearFilters } = useFilterState<string>({
    initialParameters,
  });

  // Data Fetching
  const { activities, isLoading, error, fetchNextPage, hasNextPage, isFetchingNextPage, refetch, includes_pd, includes_dc } = useActivities(contactName, filtersPayload);

  // Data Processing
  const visibleActivities = activities.filter((a) => (a as { activity_type?: string }).activity_type !== "attachment_log");
  const activityNodes = useMemo(() => buildActivityNodes(visibleActivities), [visibleActivities]);

  // Scroll
  const { getActivityElementId } = useScrollToActivity(activityId, visibleActivities);

  // Infinite Scroll
  const loadMoreRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = loadMoreRef.current;
    if (!el || !hasNextPage || isFetchingNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) fetchNextPage();
      },
      { root: null, rootMargin: "100px", threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  // Filter Options
  const leads = fetchLeads?.() ?? { leads: [] };
  const valueOptions = useMemo(
    () => ({
      activity_type: ACTIVITY_TYPE_LABELS.map((opt) => ({ label: opt.label, value: opt.label })),
      lead_id: leads.leads.map((lead) => ({ label: lead.name, value: lead.name })),
    }),
    [leads.leads]
  );

  return {
    activityNodes,
    initialFilters,
    isLoading,
    error,
    isFetchingNextPage,
    valueOptions,
    refetch,
    handleApplyFilters,
    handleClearFilters,
    getActivityElementId,
    loadMoreRef,
    includes_pd,
    includes_dc,
  };
}
