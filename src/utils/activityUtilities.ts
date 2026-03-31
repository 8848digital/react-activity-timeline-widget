import type { ActivityItem } from "../types/activity";

/**
 * Canonical date string for an activity, used for sorting and display logic.
 */
export function getActivityDate(activity: ActivityItem): string {
  if ("communication_date" in activity && typeof activity.communication_date === "string") {
    return activity.communication_date;
  }
  if ("creation" in activity && typeof activity.creation === "string") {
    return activity.creation;
  }
  if ("modified" in activity && typeof activity.modified === "string") {
    return activity.modified;
  }
  if ("date" in activity && typeof activity.date === "string") {
    const time = "time" in activity && typeof activity.time === "string" ? ` ${activity.time}` : "";
    return `${activity.date}${time}`;
  }
  return new Date(0).toISOString();
}

/**
 * Numeric timestamp for comparing and sorting activities.
 */
export function getActivityTimestamp(activity: ActivityItem): number {
  return new Date(getActivityDate(activity)).getTime() || 0;
}
