import { default as React } from 'react';
interface ActivityFilterProps {
    initialFilters: {
        field: string;
        value: string;
    }[];
    onApply: (filters: {
        field: string;
        value: string;
    }[]) => void;
    onClear: () => void;
    valueOptions: Record<string, {
        label: string;
        value: string;
    }[]>;
}
declare const ActivityFilter: React.FC<ActivityFilterProps>;
export default ActivityFilter;
