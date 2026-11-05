/** Shape of filter objects. */
interface TableFilterItem<T extends string> {
    field: T;
    value: string;
}
export declare const ACTIVITY_TYPE_LABELS: {
    label: string;
    value: string;
}[];
export interface UseFilterManagerOptions<T extends string> {
    initialParameters?: Partial<Record<T, string | string[]>>;
}
/**
 * Hook for managing filter state and API transformations for Activities.
 */
export declare function useFilterState<T extends string = string>({ initialParameters, }?: UseFilterManagerOptions<T>): {
    filtersPayload: Record<string, string | string[]>;
    initialFilters: {
        field: T;
        value: string;
    }[];
    handleApplyFilters: (filters: TableFilterItem<T>[]) => void;
    handleClearFilters: () => void;
};
export {};
