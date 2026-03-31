import { ActivityItem } from '../types/activity';
interface UseActivitiesResult {
    activities: ActivityItem[];
    isLoading: boolean;
    error: Error | null;
    isFetchingNextPage: boolean;
    hasNextPage: boolean;
    fetchNextPage: () => void;
    refetch: () => void;
}
/**
 * Custom hook to fetch activities with infinite scroll and socket updates.
 * Uses the adapter pattern via ActivityContext.
 */
export declare function useActivities(contactName: string | null, filters?: Record<string, string | string[]>): UseActivitiesResult;
export default useActivities;
