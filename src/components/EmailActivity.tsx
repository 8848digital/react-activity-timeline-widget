import React from "react";
import { EnvelopeIcon, PaperclipIcon } from "./icons";
import { sanitizeHtmlLight } from "../utils/htmlSanitizer";
import type { CommunicationActivity } from "../types/activity";
import { useExpandableContent } from "../hooks/useExpandableContent";
import { ViewMoreButton } from "./common/ViewMoreButton";
import { EmailRecipientRow } from "./EmailRecipientRow";
import Tooltip from "./common/Tooltip";
import StatusBadge from "./common/StatusBadge";
import { useActivityConfig } from "../context/ActivityContext";
import { parseDateTime } from "../utils/dateMapper";
import ActivityBooleanBadges from "./common/ActivityBooleanBadges";

const EMAIL_ICON_COLOR = "#FB2828";

interface EmailActivityProps {
  activity: CommunicationActivity | (CommunicationActivity & { data?: never; [key: string]: unknown });
}

interface Attachment {
  name?: string;
  file_name?: string;
  file_url: string;
  file_size?: number;
}

const EmailActivity: React.FC<EmailActivityProps> = ({ activity }) => {
  const { apiBaseUrl, onEmailReply, onEmailReplyAll } = useActivityConfig();

  // Extract data
  const rawData = activity.data && typeof activity.data === "object" ? activity.data : activity;
  const dataObj = rawData as Record<string, unknown>;
  const communicationDate = (activity as { communication_date?: string }).communication_date || "";
  const creation = (activity as { creation?: string }).creation || "";
  const dateStr = communicationDate || creation;
  const { date, time } = parseDateTime(dateStr);
  const personName = (dataObj.sender_full_name as string) || (dataObj.sender as string) || "";
  const to = (dataObj.recipients as string) || "";
  const cc = (dataObj.cc as string) || null;
  const bcc = (dataObj.bcc as string) || null;
  const subject = (dataObj.subject as string) || "";
  const content = (dataObj.content as string) || "";
  const attachments = (dataObj.attachments as Attachment[]) || [];

  const sentOrReceived = ((dataObj.sent_or_received as string) || "").toLowerCase();
  const emailDirectionKey = sentOrReceived === "received" ? "email_received" : "email_sent";

  const EMAIL_BODY_COLLAPSED_HEIGHT = 110;
  const { isExpanded, toggleExpanded, shouldShowExpanded, showOverflow, wrapperRef } = useExpandableContent(
    [content, attachments],
    EMAIL_BODY_COLLAPSED_HEIGHT
  );

  const getAttachmentUrl = (fileUrl: string) => {
    if (fileUrl.startsWith("http://") || fileUrl.startsWith("https://")) return fileUrl;
    return `${apiBaseUrl || ""}${fileUrl}`;
  };

  const handleReply = () => {
    onEmailReply?.({
      name: activity.name,
      subject,
      content,
      recipients: (dataObj.sender as string) || "",
      cc: null,
      bcc: null,
      sender: (dataObj.sender as string) || "",
      senderFullName: personName,
    });
  };

  const handleReplyAll = () => {
    onEmailReplyAll?.({
      name: activity.name,
      subject,
      content,
      recipients: to,
      cc,
      bcc,
      sender: (dataObj.sender as string) || "",
      senderFullName: personName,
      isReplyAll: true,
    });
  };

  return (
    <div className="activity-item email-activity">
      <div className="activity-header">
        <Tooltip content="Email" align="left">
          <div className="activity-icon-wrapper">
            <EnvelopeIcon size={20} color={EMAIL_ICON_COLOR} />
          </div>
        </Tooltip>
        <div className="activity-date-time" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span>
            {date} - {time}
          </span>
          <StatusBadge
            statusKey={emailDirectionKey}
            shape="pill"
            showIcon={false}
            style={{ fontSize: "11px", padding: "1px 8px", lineHeight: "16px" }}
          />
          <ActivityBooleanBadges activity={activity} />
        </div>
      </div>
      <div className="activity-content">
        <div
          className="email-activity-card"
          style={sentOrReceived === "received" ? { borderLeft: "3px solid #1565C0" } : undefined}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <h5 className="atw-email-from-label">
                From: <span className="atw-email-from-value">{personName && `${personName}`}</span>
              </h5>
              <EmailRecipientRow label="To" value={to} />
              <EmailRecipientRow label="Cc" value={cc} />
              <EmailRecipientRow label="Bcc" value={bcc} />
            </div>
            {(onEmailReply || onEmailReplyAll) && (
              <div style={{ display: "flex", gap: "8px" }}>
                {onEmailReply && (
                  <button type="button" onClick={handleReply} className="atw-email-reply-btn">
                    Reply
                  </button>
                )}
                {onEmailReplyAll && (
                  <button type="button" onClick={handleReplyAll} className="atw-email-reply-btn">
                    Reply All
                  </button>
                )}
              </div>
            )}
          </div>
          <hr className="atw-email-divider" />
          <h4>Subject: {subject && <span className="email-activity-subject">{subject}</span>}</h4>
          {(content || attachments.length > 0) && (
            <>
              <div
                ref={wrapperRef}
                className={`email-activity-body-wrapper ${shouldShowExpanded ? "email-activity-body-wrapper--expanded" : ""}`}
              >
                {content && (
                  <div className="email-activity-body rich-html-content" dangerouslySetInnerHTML={{ __html: sanitizeHtmlLight(content) }} />
                )}
                {attachments.length > 0 && (
                  <div className="email-activity-attachments">
                    <div className="email-activity-attachments-header">
                      <PaperclipIcon size={16} color="#666" />
                      <span>Attachments ({attachments.length})</span>
                    </div>
                    <div className="email-activity-attachments-list">
                      {attachments.map((attachment: Attachment, index: number) => (
                        <a
                          key={attachment.name || index}
                          href={getAttachmentUrl(attachment.file_url)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="email-activity-attachment-item"
                        >
                          <PaperclipIcon size={14} color={EMAIL_ICON_COLOR} />
                          <span>{attachment.file_name || attachment.file_url.split("/").pop() || "Attachment"}</span>
                          {attachment.file_size && (
                            <span className="email-activity-attachment-size">({(attachment.file_size / 1024).toFixed(2)} KB)</span>
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
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

export default EmailActivity;
