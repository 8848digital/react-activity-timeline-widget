import React from "react";
import type { ActivityItem } from "../types/activity";
import EmailActivity from "./EmailActivity";
import NotesActivity from "./NotesActivity";
import ScheduleActivity from "./ScheduleActivity";
import TaskActivity from "./TaskActivity";
import ReminderActivity from "./ReminderActivity";
import ChatActivity from "./ChatActivity";
import CallActivity from "./CallActivity";
import LeadActivity from "./LeadActivity";
import BriefActivity from "./BriefActivity";

export type { ActivityItem };

interface ActivityProps {
  activity: ActivityItem;
}

export const Activity: React.FC<ActivityProps> = ({ activity }) => {
  if (activity.activity_type === "whatsapp") {
    return <ChatActivity activity={activity} />;
  }
  if (activity.activity_type === "communication") {
    return <EmailActivity activity={activity} />;
  }
  if (activity.activity_type === "notes") {
    return <NotesActivity activity={activity} />;
  }
  if (activity.activity_type === "creation") {
    return <NotesActivity activity={activity} />;
  }
  if (activity.activity_type === "Schedule") {
    return <ScheduleActivity activity={activity} />;
  }
  if (activity.activity_type === "Task") {
    return <TaskActivity activity={activity} />;
  }
  if (activity.activity_type === "Reminder") {
    return <ReminderActivity activity={activity} />;
  }
  if (activity.activity_type === "outgoing_call") {
    return <CallActivity activity={activity} />;
  }
  if (activity.activity_type === "incoming_call") {
    return <CallActivity activity={activity} />;
  }
  if (activity.activity_type === "lead") {
    return <LeadActivity activity={activity} />;
  }
  if (activity.activity_type === "brief") {
    return <BriefActivity activity={activity} />;
  }
  return null;
};
