import { default as React } from 'react';
import { ActivityItem } from '../types/activity';
export type { ActivityItem };
interface ActivityProps {
    activity: ActivityItem;
}
export declare const Activity: React.FC<ActivityProps>;
