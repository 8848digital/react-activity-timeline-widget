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
