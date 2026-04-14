import React from "react";
import { WhatsAppIcon } from "./icons";
import type { WhatsAppActivity } from "../types/activity";
import { parseDateTime } from "../utils/dateMapper";
import Tooltip from "./common/Tooltip";
import ActivityBooleanBadges from "./common/ActivityBooleanBadges";
import { useActivityConfig } from "../context/ActivityContext";

interface ChatActivityProps {
  activity: WhatsAppActivity;
}

const ChatActivity: React.FC<ChatActivityProps> = ({ activity }) => {
  const { renderChatMessageList } = useActivityConfig();
  const { date, time } = parseDateTime(activity.creation || "");
  const isOutbound = activity.type === "Outgoing" || activity.is_outbound === 1;

  const chatIcon = (
    <Tooltip content="Chat" align={isOutbound ? "right" : "left"}>
      <div className="activity-icon-wrapper">
        <WhatsAppIcon size={20} color={isOutbound ? "#175353" : "#666"} />
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
        {renderChatMessageList ? (
          renderChatMessageList({ activity, icon: chatIcon, showIcon: false, enableScroll: false })
        ) : (
          <div className="chat-activity-bubble">
            <span className="chat-message-text">{activity.message || ""}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatActivity;
