import { default as React } from 'react';
import { ActivityItem } from '../types/activity';
interface ActivityDateGroupProps {
    activities: ActivityItem[];
    scrollId?: string;
}
declare const ActivityDateGroup: React.FC<ActivityDateGroupProps>;
export default ActivityDateGroup;
