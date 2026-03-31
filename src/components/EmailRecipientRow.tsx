import React from "react";
import { useExpandableContent } from "../hooks/useExpandableContent";
import { ViewMoreButton } from "./common/ViewMoreButton";

const RECIPIENT_LINE_CLAMP = 20;

export interface EmailRecipientRowProps {
  label: string;
  value: string | null | undefined;
}

export const EmailRecipientRow: React.FC<EmailRecipientRowProps> = ({ label, value }) => {
  const { isExpanded, toggleExpanded, shouldShowExpanded, showOverflow, wrapperRef } = useExpandableContent(
    [value],
    RECIPIENT_LINE_CLAMP
  );
  if (!value) return null;
  return (
    <>
      <div
        ref={wrapperRef}
        className={`email-activity-recipients-wrapper ${shouldShowExpanded ? "email-activity-recipients-wrapper--expanded" : ""}`}
      >
        <h5 className="atw-email-from-label">
          {label}: <span className="atw-email-from-value">{value}</span>
        </h5>
      </div>
      {showOverflow && (
        <ViewMoreButton
          isExpanded={isExpanded}
          onToggle={toggleExpanded}
          label={`View more (${label})`}
          expandedLabel={`View less (${label})`}
        />
      )}
    </>
  );
};
