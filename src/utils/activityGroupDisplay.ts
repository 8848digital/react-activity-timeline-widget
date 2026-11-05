import type { ActivityItem, ActivityNode } from "../types/activity";
import { getDateKeyFromActivity } from "./dateMapper";

/** Extracts the activity_type string from an ActivityItem. */
function getActivityType(a: ActivityItem): string {
  return (a as { activity_type?: string }).activity_type ?? "";
}

/** Chat-like types that should display in chronological order (oldest first) within a group */
const CHAT_TYPES = new Set(["whatsapp", "raven"]);

/**
 * Group consecutive activities by same date (YYYY-MM-DD) AND same activity_type.
 * For chat-type activities, reverse order within the group so conversations read top-to-bottom.
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

    // Reverse chat groups so conversations read chronologically (oldest first)
    const orderedGroup = CHAT_TYPES.has(activityType) ? [...group].reverse() : group;

    if (orderedGroup.length === 1) {
      nodes.push({ type: "single", activity: orderedGroup[0], index: i - 1 });
    } else {
      nodes.push({ type: "date-group", activities: orderedGroup, firstIndex: i - orderedGroup.length });
    }
  }
  return nodes;
}

