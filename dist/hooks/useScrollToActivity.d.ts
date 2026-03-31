import { ActivityItem } from '../types/activity';
/**
 * Returns a stable id for an activity used as data-activity-id.
 */
export declare function getActivityElementId(activity: ActivityItem, index: number): string;
/**
 * Scrolls to the activity element when activityId is provided and activities have loaded.
 */
export declare function useScrollToActivity(activityId: string | null, activities: ActivityItem[]): {
    getActivityElementId: typeof getActivityElementId;
};
