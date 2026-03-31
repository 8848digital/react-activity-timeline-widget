import { ActivityItem } from '../types/activity';
/**
 * Canonical date string for an activity, used for sorting and display logic.
 */
export declare function getActivityDate(activity: ActivityItem): string;
/**
 * Numeric timestamp for comparing and sorting activities.
 */
export declare function getActivityTimestamp(activity: ActivityItem): number;
