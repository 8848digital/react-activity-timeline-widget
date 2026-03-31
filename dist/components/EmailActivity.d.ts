import { default as React } from 'react';
import { CommunicationActivity } from '../types/activity';
interface EmailActivityProps {
    activity: CommunicationActivity | (CommunicationActivity & {
        data?: never;
        [key: string]: unknown;
    });
}
declare const EmailActivity: React.FC<EmailActivityProps>;
export default EmailActivity;
