import React from "react";
import { NoteIcon } from "./icons";
import Tooltip from "./common/Tooltip";
import { parseDateTime } from "../utils/dateMapper";
import { sanitizeHtmlLight } from "../utils/htmlSanitizer";
import type { NotesActivityType, CreationActivity } from "../types/activity";
import ActivityBooleanBadges from "./common/ActivityBooleanBadges";
import { useExpandableContent } from "../hooks/useExpandableContent";
import { ViewMoreButton } from "./common/ViewMoreButton";

const NOTES_ICON_COLOR = "#1C73E7";

interface NotesActivityProps {
  activity: NotesActivityType | CreationActivity;
}

const NotesActivity: React.FC<NotesActivityProps> = ({ activity }) => {
  let date: string;
  let time: string;
  let content: string | undefined;
  let activityName: string;

  if (activity.activity_type === "notes") {
    const creation = (activity as { creation?: string }).creation ?? "";
    const parsed = parseDateTime(creation);
    date = parsed.date;
    time = parsed.time;
    content = activity.content;
    activityName = activity.title || "Note";
  } else {
    const parsed = parseDateTime(activity.creation || "");
    date = parsed.date;
    time = parsed.time;
    content = typeof activity.data === "string" ? activity.data : undefined;
    activityName = "Creation";
  }

  const { isExpanded, toggleExpanded, shouldShowExpanded, showOverflow, wrapperRef } = useExpandableContent([content]);

  return (
    <div className="activity-item notes-activity">
      <div className="activity-header">
        <Tooltip content={`${activity.activity_type === "notes" ? "Note" : "Creation"}`} align="left">
          <div className="activity-icon-wrapper">
            <NoteIcon size={20} color={NOTES_ICON_COLOR} />
          </div>
        </Tooltip>
        <div className="activity-date-time" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span>
            {date} - {time}
          </span>
          <ActivityBooleanBadges activity={activity} />
        </div>
      </div>
      <div className="activity-content">
        <div className="notes-activity-card">
          <div className="notes-activity-card-header">
            <h3 className="notes-activity-title">{activityName}</h3>
          </div>
          {content && (
            <>
              <div
                ref={wrapperRef}
                className={`notes-activity-body-wrapper ${shouldShowExpanded ? "notes-activity-body-wrapper--expanded" : ""}`}
              >
                <div className="notes-item rich-html-content" dangerouslySetInnerHTML={{ __html: sanitizeHtmlLight(content) }} />
              </div>
              {showOverflow && (
                <div style={{ textAlign: "right", marginTop: "4px" }}>
                  <ViewMoreButton isExpanded={isExpanded} onToggle={toggleExpanded} label="View More" />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotesActivity;
