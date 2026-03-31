import { default as React } from 'react';
import { WhatsAppActivity } from '../types/activity';
interface MessageListProps {
    activity?: WhatsAppActivity;
    icon?: React.ReactNode;
    showIcon?: boolean;
    enableScroll?: boolean;
    apiBaseUrl?: string;
}
export declare const MessageList: React.FC<MessageListProps>;
export {};
