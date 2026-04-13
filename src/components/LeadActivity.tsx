import React from "react";
import { UserIcon } from "./icons";
import Tooltip from "./common/Tooltip";
import { parseDateTime } from "../utils/dateMapper";
import type { LeadActivityType } from "../types/activity";
import StatusBadge from "./common/StatusBadge";
import ActivityBooleanBadges from "./common/ActivityBooleanBadges";
import { sanitizeHtmlLight } from "../utils/htmlSanitizer";

interface LeadActivityProps {
  activity: LeadActivityType;
}

const LeadActivity: React.FC<LeadActivityProps> = ({ activity }) => {
  const { date, time } = parseDateTime(activity.creation);

  return (
    <div className="activity-item lead-activity">
      <div className="activity-header">
        <Tooltip content="Lead Created">
          <div className="activity-icon-wrapper">
            <UserIcon size={20} color="darkgreen" />
          </div>
        </Tooltip>
        <div className="activity-date-time" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span>{date} - {time}</span>
          <ActivityBooleanBadges activity={activity} />
        </div>
      </div>
      <div className="activity-content">
        <div className="lead-activity-card">
          <div className="lead-activity-card-header">
            <h4 className="lead-activity-title">Lead ID: {activity.name}</h4>
          </div>
          <div className="lead-activity-card-content">
            <div className="lead-activity-meta">
              <div className="lead-activity-meta-row">
                <div className="lead-activity-label-cell">
                  <span className="lead-activity-label">Title</span>
                  <span className="lead-activity-colon">:</span>
                </div>
                <span className="lead-activity-value">{activity.title}</span>
              </div>
              <div className="lead-activity-meta-row">
                <div className="lead-activity-label-cell">
                  <span className="lead-activity-label">Initiator</span>
                  <span className="lead-activity-colon">:</span>
                </div>
                <span className="lead-activity-value">{activity.initiator}</span>
              </div>
              {activity.priority && (
                <div className="lead-activity-meta-row">
                  <div className="lead-activity-label-cell">
                    <span className="lead-activity-label">Priority</span>
                    <span className="lead-activity-colon">:</span>
                  </div>
                  <StatusBadge statusKey={activity.priority} showIcon={false} shape="square" />
                </div>
              )}
              <div className="lead-activity-meta-row">
                <div className="lead-activity-label-cell">
                  <span className="lead-activity-label">Status</span>
                  <span className="lead-activity-colon">:</span>
                </div>
                <StatusBadge statusKey={activity.status} showIcon={false} shape="square" />
              </div>
              <div className="lead-activity-meta-row">
                <div className="lead-activity-label-cell">
                  <span className="lead-activity-label">Lead Owner</span>
                  <span className="lead-activity-colon">:</span>
                </div>
                <span className="lead-activity-value">{(activity.lead_owner || activity.owner) as string}</span>
              </div>
            </div>
            {activity.description && (
              <div className="lead-activity-description-wrapper">
                <div className="lead-activity-meta-row">
                  <div className="lead-activity-label-cell">
                    <span className="lead-activity-label">Description</span>
                    <span className="lead-activity-colon">:</span>
                  </div>
                  <div className="lead-activity-description rich-html-content" dangerouslySetInnerHTML={{ __html: sanitizeHtmlLight(activity.description) }} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadActivity;
