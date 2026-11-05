import React, { useMemo } from "react";
import type { ActivityItem } from "../types/activity";
import { useExpandableContent } from "../hooks/useExpandableContent";
import { ViewMoreButton } from "./common/ViewMoreButton";
import { Activity } from "./Activity";

const ACTIVITY_GROUP_COLLAPSED_HEIGHT = 0;

/** Plural label for "View N {label}" */
function getActivityTypeLabel(activity: ActivityItem): string {
  const type = (activity as { activity_type?: string }).activity_type ?? "";
  const map: Record<string, string> = {
    whatsapp: "Chats",
    communication: "Emails",
    notes: "Notes",
    creation: "Notes",
    Schedule: "Schedules",
    Task: "Tasks",
    Reminder: "Reminders",
    outgoing_call: "Calls",
    incoming_call: "Calls",
    lead: "Leads",
    brief: "Briefs",
    raven: "Raven Chats",
    quotation: "Quotations",
  };
  return map[type] ?? "Items";
}

interface ActivityDateGroupProps {
  activities: ActivityItem[];
}

const ActivityDateGroup: React.FC<ActivityDateGroupProps> = ({ activities }) => {
  const first = activities[0];
  const rest = useMemo(() => activities.slice(1), [activities]);
  const hasMore = rest.length > 0;

  const { isExpanded, toggleExpanded, shouldShowExpanded, wrapperRef } = useExpandableContent(
    [activities.length],
    ACTIVITY_GROUP_COLLAPSED_HEIGHT
  );

  if (activities.length === 0) return null;
  if (activities.length === 1) {
    return (
      <div>
        <Activity activity={first} />
      </div>
    );
  }

  return (
    <div className="activity-date-group">
      <Activity activity={first} />
      <div
        ref={wrapperRef}
        className={`activity-date-group-rest ${shouldShowExpanded ? "activity-date-group-rest--expanded" : ""}`}
        aria-hidden={!isExpanded}
      >
        {rest.map((activity, i) => (
          <Activity key={`${(activity as { name?: string | number }).name ?? "activity"}-${i}`} activity={activity} />
        ))}
      </div>
      <div className="activity-date-group-view-more-wrapper">
        {hasMore && (
          <>
            <span className="activity-date-group-view-more-line" aria-hidden="true" />
            <ViewMoreButton
              isExpanded={isExpanded}
              onToggle={toggleExpanded}
              label={`View ${rest.length} ${getActivityTypeLabel(first)}`}
              className="activity-date-group-view-more-btn"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ActivityDateGroup;
