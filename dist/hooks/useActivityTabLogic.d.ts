import { RefObject } from 'react';
import { ActivityNode, ActivityItem } from '../types/activity';
export interface UseActivityTabLogicReturn {
    activityNodes: ActivityNode[];
    initialFilters: {
        field: string;
        value: string;
    }[];
    isLoading: boolean;
    error: Error | null;
    isFetchingNextPage: boolean;
    valueOptions: Record<string, {
        label: string;
        value: string;
    }[]>;
    refetch: () => void;
    handleApplyFilters: (filters: {
        field: string;
        value: string;
    }[]) => void;
    handleClearFilters: () => void;
    getActivityElementId: (activity: ActivityItem, index: number) => string;
    loadMoreRef: RefObject<HTMLDivElement | null>;
    includes_pd: boolean;
    includes_dc: boolean;
}
/**
 * Main hook for the Activity tab — handles filters, API data, infinite scroll, and activity grouping.
 * Uses adapter-based context for data fetching.
 */
export declare function useActivityTabLogic(): UseActivityTabLogicReturn;
