import { default as React } from 'react';
interface TooltipProps {
    content: string;
    children: React.ReactNode;
    align?: "left" | "right" | "center";
}
declare const Tooltip: React.FC<TooltipProps>;
export default Tooltip;
