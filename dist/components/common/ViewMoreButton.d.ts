import { default as React } from 'react';
interface ViewMoreButtonProps {
    isExpanded: boolean;
    onToggle: () => void;
    label?: string;
    expandedLabel?: string;
    className?: string;
}
export declare const ViewMoreButton: React.FC<ViewMoreButtonProps>;
export {};
