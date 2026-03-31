import { ActivityItem, ActivityNode } from '../types/activity';
/**
 * Group consecutive activities by same date (YYYY-MM-DD) AND same activity_type.
 */
export declare function buildActivityNodes(visibleActivities: ActivityItem[]): ActivityNode[];
