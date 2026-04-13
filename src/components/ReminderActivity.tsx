import React from "react";
import { BellIcon } from "./icons";
import { parseDateTime } from "../utils/dateMapper";
import { sanitizeHtmlLight } from "../utils/htmlSanitizer";
import type { ReminderActivityType } from "../types/activity";
import Tooltip from "./common/Tooltip";
import StatusBadge from "./common/StatusBadge";
import ActivityBooleanBadges from "./common/ActivityBooleanBadges";

interface ReminderActivityProps {
  activity: ReminderActivityType;
}

const ReminderActivity: React.FC<ReminderActivityProps> = ({ activity }) => {
  const creationDateTime = parseDateTime(activity.creation);
  const dueDateTime = activity.due_date ? parseDateTime(activity.due_date) : null;
  const title = activity.title || "Reminder";
  const description = activity.description || "";
  const priority = activity.priority || "";
  const taskType = activity.task_type || activity.activity_type || "";
  const type = activity.type || "";

  return (
    <div className="activity-item reminder-activity">
      <div className="activity-header">
        <Tooltip content="Reminder">
          <div className="activity-icon-wrapper">
            <BellIcon size={20} color="#FF3434" />
          </div>
        </Tooltip>
        <div className="activity-date-time" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span>{creationDateTime.date} - {creationDateTime.time}</span>
          <ActivityBooleanBadges activity={activity} />
        </div>
      </div>
      <div className="activity-content">
        <div className="reminder-activity-card">
          <div className="reminder-activity-card-header">
            <h4 className="reminder-activity-title">{title}</h4>
          </div>
          <div className="reminder-activity-card-content">
            <div className="reminder-activity-meta">
              {type && (
                <div className="reminder-activity-meta-row">
                  <div className="reminder-activity-label-cell">
                    <span className="reminder-activity-label">Type</span>
                    <span className="reminder-activity-colon">:</span>
                  </div>
                  <span className="reminder-activity-value">{type}</span>
                </div>
              )}
              <div className="reminder-activity-meta-row">
                <div className="reminder-activity-label-cell">
                  <span className="reminder-activity-label">Due date</span>
                  <span className="reminder-activity-colon">:</span>
                </div>
                <span className="reminder-activity-value">{dueDateTime ? `${dueDateTime.date} - ${dueDateTime.time}` : "—"}</span>
              </div>
              {priority && (
                <div className="reminder-activity-meta-row">
                  <div className="reminder-activity-label-cell">
                    <span className="reminder-activity-label">Priority</span>
                    <span className="reminder-activity-colon">:</span>
                  </div>
                  <StatusBadge statusKey={priority} showIcon={false} shape="square" />
                </div>
              )}
              {taskType && (
                <div className="reminder-activity-meta-row">
                  <div className="reminder-activity-label-cell">
                    <span className="reminder-activity-label">Task type</span>
                    <span className="reminder-activity-colon">:</span>
                  </div>
                  <span className="reminder-activity-value">{taskType}</span>
                </div>
              )}
            </div>
            {description && (
              <div className="reminder-activity-description-wrapper">
                <div className="reminder-activity-meta-row">
                  <div className="reminder-activity-label-cell">
                    <span className="reminder-activity-label">Description</span>
                    <span className="reminder-activity-colon">:</span>
                  </div>
                  <div className="reminder-activity-description rich-html-content" dangerouslySetInnerHTML={{ __html: sanitizeHtmlLight(description) }} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReminderActivity;
