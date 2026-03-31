import { default as React } from 'react';
import { NotesActivityType, CreationActivity } from '../types/activity';
interface NotesActivityProps {
    activity: NotesActivityType | CreationActivity;
}
declare const NotesActivity: React.FC<NotesActivityProps>;
export default NotesActivity;
