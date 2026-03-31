import React from "react";

interface ViewMoreButtonProps {
  isExpanded: boolean;
  onToggle: () => void;
  label?: string;
  expandedLabel?: string;
  className?: string;
}

export const ViewMoreButton: React.FC<ViewMoreButtonProps> = ({
  isExpanded,
  onToggle,
  label = "View More",
  expandedLabel,
  className = "",
}) => {
  const displayLabel = isExpanded ? (expandedLabel || "View Less") : label;

  return (
    <button
      type="button"
      className={`atw-view-more-btn ${className}`}
      onClick={onToggle}
    >
      {displayLabel}
    </button>
  );
};
