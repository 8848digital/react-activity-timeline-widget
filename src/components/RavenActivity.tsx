import React from "react";
import { ChatIcon } from "./icons";
import type { RavenActivityType } from "../types/activity";
import { parseDateTime } from "../utils/dateMapper";
import { sanitizeHtmlLight } from "../utils/htmlSanitizer";
import Tooltip from "./common/Tooltip";
import ActivityBooleanBadges from "./common/ActivityBooleanBadges";
import { useActivityConfig } from "../context/ActivityContext";

interface RavenActivityProps {
  activity: RavenActivityType;
}

const RavenActivity: React.FC<RavenActivityProps> = ({ activity }) => {
  const { currentUserEmail, apiBaseUrl } = useActivityConfig();
  const { date, time } = parseDateTime(activity.creation || "");

  // Determine if outbound (Sent by me) or inbound (Received by me)
  const isOutbound = currentUserEmail && activity.from === currentUserEmail;
  const messageContent = activity.text || activity.content || "";
  const isImage = activity.message_type === "Image";

  // Construct absolute file URL
  const fileUrl = activity.file ? (activity.file.startsWith("http") ? activity.file : `${apiBaseUrl}${activity.file}`) : null;

  const chatIcon = (
    <Tooltip content="Raven Chat" align={isOutbound ? "right" : "left"}>
      <div className="activity-icon-wrapper">
        <ChatIcon size={20} color={isOutbound ? "#175353" : "#666"} />
      </div>
    </Tooltip>
  );

  return (
    <div className={`activity-item chat-activity mt-3 ${isOutbound ? "chat-outbound" : "chat-incoming"}`}>
      <div className={`activity-header chat-activity-header ${isOutbound ? "chat-header-outbound" : "chat-header-incoming"}`}>
        {!isOutbound && chatIcon}
        <div className="activity-date-time" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span>
            {date} - {time}
          </span>
          <ActivityBooleanBadges activity={activity} />
        </div>
        {isOutbound && chatIcon}
      </div>
      <div className={`activity-content ${isOutbound ? "chat-content-outbound" : "chat-content-incoming"}`}>
        <div className="chat-activity-bubble">
          {isImage && fileUrl ? (
            <div className="chat-image-preview" style={{ marginBottom: "8px" }}>
              <a href={fileUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={fileUrl}
                  alt="Attachment"
                  className="message-attachment-image"
                  style={{
                    maxWidth: "100%",
                    borderRadius: "8px",
                    display: "block",
                    cursor: "pointer",
                  }}
                />
              </a>
            </div>
          ) : null}

          {messageContent && (!isImage || activity.text) && (
            <div className="chat-message-text" dangerouslySetInnerHTML={{ __html: sanitizeHtmlLight(messageContent) }} />
          )}

          {activity.file && !isImage && (
            <div className="chat-attachment" style={{ marginTop: "4px" }}>
              <a
                href={fileUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "12px", color: isOutbound ? "white" : "#175353", textDecoration: "underline" }}
              >
                View Attachment
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RavenActivity;
