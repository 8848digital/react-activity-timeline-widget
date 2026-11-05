import { default as React } from 'react';
import { ActivityWidgetConfig } from '../types/activity';
export declare function useActivityConfig(): ActivityWidgetConfig;
interface ActivityProviderProps extends ActivityWidgetConfig {
    children: React.ReactNode;
}
export declare const ActivityProvider: React.FC<ActivityProviderProps>;
export {};
