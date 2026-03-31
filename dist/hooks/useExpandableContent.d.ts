import { DependencyList } from 'react';
/**
 * Hook for expandable content that shows "View More" only when the content
 * overflows a collapsed height.
 */
export declare function useExpandableContent(deps: DependencyList, collapsedHeight?: number): {
    isExpanded: boolean;
    toggleExpanded: () => void;
    hasOverflow: boolean | null;
    showOverflow: boolean;
    shouldShowExpanded: boolean;
    wrapperRef: import('react').RefObject<HTMLDivElement | null>;
};
