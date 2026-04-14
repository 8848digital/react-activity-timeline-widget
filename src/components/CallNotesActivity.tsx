import React from "react";
import { NoteIcon } from "./icons";
import type { ActivityItem } from "../types/activity";
import { parseDateTime } from "../utils/dateMapper";
import Tooltip from "./common/Tooltip";

interface CallNotesActivityProps {
  activity: ActivityItem & {
    date?: string;
    time?: string;
    personName?: string;
    notes?: string[];
  };
}

const CallNotesActivity: React.FC<CallNotesActivityProps> = ({ activity }) => {
  const creation = (activity as { creation?: string }).creation;
  const dateTime = creation ? parseDateTime(creation) : { date: "Unknown", time: "" };
  const personName = activity.personName || "Unknown";
  const notes = activity.notes || [];

  return (
    <div className="activity-item call-notes-activity">
      <div className="activity-header">
        <Tooltip content="Call Notes" align="left">
          <div className="activity-icon-wrapper">
            <NoteIcon size={20} color="#175353" />
          </div>
        </Tooltip>
        <div className="activity-date-time">
          {dateTime.date} - {dateTime.time}, {personName}
        </div>
      </div>
      <div className="activity-content">
        <div className="call-notes-activity-card">
          {notes.map((note: string, index: number) => (
            <div key={index} className="call-notes-item">
              {note}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CallNotesActivity;
