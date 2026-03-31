import React from "react";
import { CalendarIcon } from "./icons";
import { parseDateTime } from "../utils/dateMapper";
import { sanitizeHtmlLight } from "../utils/htmlSanitizer";
import type { ScheduleActivityType } from "../types/activity";
import Tooltip from "./common/Tooltip";
import StatusBadge from "./common/StatusBadge";

interface ScheduleActivityProps {
  activity: ScheduleActivityType;
}

const ScheduleActivity: React.FC<ScheduleActivityProps> = ({ activity }) => {
  const creationDateTime = parseDateTime(activity.creation);
  const dueDateTime = activity.due_date ? parseDateTime(activity.due_date) : null;
  const title = activity.title || "Schedule";
  const description = activity.description || "";
  const priority = activity.priority || "";
  const taskType = activity.task_type || activity.activity_type || "";
  const type = activity.type || "";

  return (
    <div className="activity-item schedule-activity">
      <div className="activity-header">
        <Tooltip content="Schedule">
          <div className="activity-icon-wrapper">
            <CalendarIcon size={20} color="#0DBFFF" />
          </div>
        </Tooltip>
        <div className="activity-date-time">
          {creationDateTime.date} - {creationDateTime.time}
        </div>
      </div>
      <div className="activity-content">
        <div className="schedule-activity-card">
          <div className="schedule-activity-card-header">
            <h4 className="schedule-activity-title">{title}</h4>
          </div>
          <div className="schedule-activity-card-content">
            <div className="schedule-activity-meta">
              {type && (
                <div className="schedule-activity-meta-row">
                  <div className="schedule-activity-label-cell">
                    <span className="schedule-activity-label">Type</span>
                    <span className="schedule-activity-colon">:</span>
                  </div>
                  <span className="schedule-activity-value">{type}</span>
                </div>
              )}
              <div className="schedule-activity-meta-row">
                <div className="schedule-activity-label-cell">
                  <span className="schedule-activity-label">Due date</span>
                  <span className="schedule-activity-colon">:</span>
                </div>
                <span className="schedule-activity-value">{dueDateTime ? `${dueDateTime.date} - ${dueDateTime.time}` : "—"}</span>
              </div>
              {priority && (
                <div className="schedule-activity-meta-row">
                  <div className="schedule-activity-label-cell">
                    <span className="schedule-activity-label">Priority</span>
                    <span className="schedule-activity-colon">:</span>
                  </div>
                  <StatusBadge statusKey={priority} showIcon={false} shape="square" />
                </div>
              )}
              {taskType && (
                <div className="schedule-activity-meta-row">
                  <div className="schedule-activity-label-cell">
                    <span className="schedule-activity-label">Task type</span>
                    <span className="schedule-activity-colon">:</span>
                  </div>
                  <span className="schedule-activity-value">{taskType}</span>
                </div>
              )}
            </div>
            {description && (
              <div className="schedule-activity-description-wrapper">
                <div className="schedule-activity-meta-row">
                  <div className="schedule-activity-label-cell">
                    <span className="schedule-activity-label">Description</span>
                    <span className="schedule-activity-colon">:</span>
                  </div>
                  <div className="schedule-activity-description rich-html-content" dangerouslySetInnerHTML={{ __html: sanitizeHtmlLight(description) }} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleActivity;
