import { useEffect } from "react";
import type { ActivityItem } from "../types/activity";

/**
 * Returns a stable id for an activity used as data-activity-id.
 */
export function getActivityElementId(activity: ActivityItem, index: number): string {
  const a = activity as Record<string, unknown>;
  const raw = a.name ?? a.creation;
  if (raw !== null && raw !== undefined) return String(raw);
  return `i-${index}`;
}

/**
 * Scrolls to the activity element when activityId is provided and activities have loaded.
 */
export function useScrollToActivity(activityId: string | null, activities: ActivityItem[]) {
  useEffect(() => {
    if (!activityId || activities.length === 0) return;
    const timer = setTimeout(() => {
      requestAnimationFrame(() => {
        const el = document.querySelector(
          `.activity-timeline [data-activity-id="${CSS.escape(activityId)}"]`
        );
        // Use 'nearest' to avoid jumping if the element is already comfortably in view
        el?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      });
    }, 100);
    return () => clearTimeout(timer);
  }, [activities, activityId]);

  return { getActivityElementId };
}
