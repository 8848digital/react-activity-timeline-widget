import { default as React } from 'react';
import { ActivityItem } from '../types/activity';
interface CallNotesActivityProps {
    activity: ActivityItem & {
        date?: string;
        time?: string;
        personName?: string;
        notes?: string[];
    };
}
declare const CallNotesActivity: React.FC<CallNotesActivityProps>;
export default CallNotesActivity;
