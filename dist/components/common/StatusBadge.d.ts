import { default as React } from 'react';
interface StatusBadgeProps {
    statusKey?: string;
    label?: string;
    bgColor?: string;
    textColor?: string;
    borderColor?: string;
    variant?: "filled" | "outlined";
    shape?: "pill" | "square";
    showIcon?: boolean;
    style?: React.CSSProperties;
    className?: string;
}
declare const StatusBadge: React.FC<StatusBadgeProps>;
export default StatusBadge;
