import React from "react";
import { FileText } from "./icons";
import { parseDateTime } from "../utils/dateMapper";
import type { BriefActivityType } from "../types/activity";
import Tooltip from "./common/Tooltip";
import StatusBadge from "./common/StatusBadge";
import ActivityBooleanBadges from "./common/ActivityBooleanBadges";

interface BriefActivityProps {
  activity: BriefActivityType;
}

const BriefActivity: React.FC<BriefActivityProps> = ({ activity }) => {
  const creationDateTime = parseDateTime(activity.creation);
  const title = activity.title || "Brief";
  const status = activity.status || "";
  const assignedTo = activity.assigned_to || "";
  const customerCode = activity.customer_code || "";

  return (
    <div className="activity-item brief-activity">
      <div className="activity-header">
        <Tooltip content="Brief">
          <div className="activity-icon-wrapper">
            <FileText size={20} color="#7C3AED" />
          </div>
        </Tooltip>
        <div className="activity-date-time" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span>
            {creationDateTime.date} - {creationDateTime.time}
          </span>
          <ActivityBooleanBadges activity={activity} />
        </div>
      </div>
      <div className="activity-content">
        <div className="brief-activity-card">
          <div className="brief-activity-card-header">
            <h4 className="brief-activity-title">
              <a href={activity.href} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
            </h4>
          </div>
          <div className="brief-activity-card-content">
            <div className="brief-activity-meta">
              {status && (
                <div className="brief-activity-meta-row">
                  <div className="brief-activity-label-cell">
                    <span className="brief-activity-label">Status</span>
                    <span className="brief-activity-colon">:</span>
                  </div>
                  <StatusBadge statusKey={status} showIcon={false} shape="square" />
                </div>
              )}
              {assignedTo && (
                <div className="brief-activity-meta-row">
                  <div className="brief-activity-label-cell">
                    <span className="brief-activity-label">Assigned to</span>
                    <span className="brief-activity-colon">:</span>
                  </div>
                  <span className="brief-activity-value">{assignedTo}</span>
                </div>
              )}
              {customerCode && (
                <div className="brief-activity-meta-row">
                  <div className="brief-activity-label-cell">
                    <span className="brief-activity-label">Customer code</span>
                    <span className="brief-activity-colon">:</span>
                  </div>
                  <span className="brief-activity-value">{customerCode}</span>
                </div>
              )}
              {activity.href && (
                <div className="brief-activity-meta-row">
                  <div className="brief-activity-label-cell">
                    <span className="brief-activity-label">Link</span>
                    <span className="brief-activity-colon">:</span>
                  </div>
                  <a href={activity.href} target="_blank" rel="noopener noreferrer" className="brief-activity-value brief-activity-link">
                    View Brief
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BriefActivity;
