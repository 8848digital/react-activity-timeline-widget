import type { ActivityItem, ActivityNode } from "../types/activity";
import { getDateKeyFromActivity } from "./dateMapper";

/** Extracts the activity_type string from an ActivityItem. */
function getActivityType(a: ActivityItem): string {
  return (a as { activity_type?: string }).activity_type ?? "";
}

/**
 * Group consecutive activities by same date (YYYY-MM-DD) AND same activity_type.
 */
export function buildActivityNodes(visibleActivities: ActivityItem[]): ActivityNode[] {
  const nodes: ActivityNode[] = [];
  let i = 0;
  while (i < visibleActivities.length) {
    const a = visibleActivities[i];
    const dateKey = getDateKeyFromActivity(a);
    const activityType = getActivityType(a);
    const group: ActivityItem[] = [a];
    i += 1;
    while (i < visibleActivities.length) {
      const next = visibleActivities[i];
      if (getDateKeyFromActivity(next) !== dateKey || getActivityType(next) !== activityType) break;
      group.push(next);
      i += 1;
    }
    if (group.length === 1) {
      nodes.push({ type: "single", activity: group[0], index: i - 1 });
    } else {
      nodes.push({ type: "date-group", activities: group, firstIndex: i - group.length });
    }
  }
  return nodes;
}
