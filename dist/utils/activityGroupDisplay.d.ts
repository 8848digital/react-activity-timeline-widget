import { ActivityItem, ActivityNode } from '../types/activity';
/**
 * Group consecutive activities by same date (YYYY-MM-DD) AND same activity_type.
 * For chat-type activities, reverse order within the group so conversations read top-to-bottom.
 */
export declare function buildActivityNodes(visibleActivities: ActivityItem[]): ActivityNode[];
