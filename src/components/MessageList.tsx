import React, { useRef, useEffect, useMemo } from "react";
import { formatTimeLocale, parseMessageWithLinks, renderMessageStatusIcon } from "../utils/WhatsApp";
import { WhatsAppActivity } from "../types/activity";

interface MessageListProps {
  activity?: WhatsAppActivity;
  icon?: React.ReactNode;
  showIcon?: boolean;
  enableScroll?: boolean;
  apiBaseUrl?: string;
}

export const MessageList: React.FC<MessageListProps> = ({
  activity,
  icon,
  showIcon = false,
  enableScroll = true,
  apiBaseUrl = "",
}) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  const transformedMessage = useMemo(() => {
    if (!activity) return null;
    const creation = activity.creation || new Date().toISOString();
    const isOutbound = activity.type === "Outgoing" || activity.is_outbound === 1;
    
    return {
      name: activity.name || `activity-${creation}`,
      message: activity.message || "",
      sender: isOutbound ? "You" : "Customer",
      creation: creation,
      is_outbound: isOutbound ? 1 : 0,
      attach: activity.attach,
      content_type: activity.content_type,
      status: activity.status,
      message_type: activity.message_type,
    };
  }, [activity]);

  useEffect(() => {
    if (enableScroll) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [transformedMessage, enableScroll]);

  if (!transformedMessage) return null;

  const m = transformedMessage;
  const isOutbound = m.is_outbound === 1;

  return (
    <div className="whatsapp-message-list">
      <div className={`message-bubble ${isOutbound ? "sent" : "received"}`}>
        {showIcon && icon && <div className="message-icon-wrapper">{icon}</div>}
        <div className="message-content">
          {parseMessageWithLinks(m.message) || m.message}
          {m.attach && (
            <div className="message-attachment">
              {m.content_type === "image" ? (
                <img 
                  src={m.attach.startsWith("http") ? m.attach : `${apiBaseUrl}/${m.attach}`} 
                  alt="attachment" 
                  style={{ maxWidth: "200px", borderRadius: "4px", marginTop: "8px" }} 
                />
              ) : (
                <a
                  href={m.attach.startsWith("http") ? m.attach : `${apiBaseUrl}/${m.attach}`}
                  target="_blank"
                  rel="noreferrer"
                  className="message-attachment-link"
                >
                  {m.attach.split("/").pop() || "Attachment"}
                </a>
              )}
            </div>
          )}
          <div className="message-time">
            {formatTimeLocale(m.creation)}
            {isOutbound ? renderMessageStatusIcon(m.status, 1) : null}
          </div>
        </div>
      </div>
      <div ref={bottomRef} />
    </div>
  );
};
