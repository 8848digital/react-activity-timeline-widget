import React from "react";

/** Map of status keys to display labels and colors. */
const STATUS_MAP: Record<string, { label: string; bgColor: string; textColor: string; borderColor: string }> = {
  // Priority
  Low: { label: "Low", bgColor: "#E8F5E9", textColor: "#2E7D32", borderColor: "#A5D6A7" },
  Medium: { label: "Medium", bgColor: "#FFF3E0", textColor: "#E65100", borderColor: "#FFCC80" },
  High: { label: "High", bgColor: "#FFEBEE", textColor: "#C62828", borderColor: "#EF9A9A" },
  Urgent: { label: "Urgent", bgColor: "#F3E5F5", textColor: "#6A1B9A", borderColor: "#CE93D8" },
  // Status
  Open: { label: "Open", bgColor: "#E3F2FD", textColor: "#1565C0", borderColor: "#90CAF9" },
  Closed: { label: "Closed", bgColor: "#ECEFF1", textColor: "#455A64", borderColor: "#B0BEC5" },
  Completed: { label: "Completed", bgColor: "#E8F5E9", textColor: "#2E7D32", borderColor: "#A5D6A7" },
  Cancelled: { label: "Cancelled", bgColor: "#FFEBEE", textColor: "#C62828", borderColor: "#EF9A9A" },
  Skipped: { label: "Skipped", bgColor: "#FFF8E1", textColor: "#F57F17", borderColor: "#FFE082" },
  "In Progress": { label: "In Progress", bgColor: "#E3F2FD", textColor: "#1565C0", borderColor: "#90CAF9" },
  // Email direction
  email_sent: { label: "Sent", bgColor: "#E8F5E9", textColor: "#2E7D32", borderColor: "#A5D6A7" },
  email_received: { label: "Received", bgColor: "#E3F2FD", textColor: "#1565C0", borderColor: "#90CAF9" },
  // Lead
  active_lead: { label: "Active", bgColor: "#E8F5E9", textColor: "#2E7D32", borderColor: "#A5D6A7" },
};

interface StatusBadgeProps {
  statusKey?: string;
  label?: string;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  variant?: "filled" | "outlined";
  shape?: "pill" | "square";
  showIcon?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({
  statusKey,
  label: customLabel,
  bgColor: customBgColor,
  textColor: customTextColor,
  borderColor: customBorderColor,
  shape = "pill",
  style = {},
  className = "",
}) => {
  const mapped = statusKey ? STATUS_MAP[statusKey] : undefined;
  const label = customLabel || mapped?.label || statusKey || "";
  const bgColor = customBgColor || mapped?.bgColor || "#F3F4F6";
  const textColor = customTextColor || mapped?.textColor || "#374151";
  const borderColor = customBorderColor || mapped?.borderColor || "#D1D5DB";

  if (!label) return null;

  return (
    <span
      className={`atw-status-badge ${shape === "pill" ? "atw-status-badge--pill" : "atw-status-badge--square"} ${className}`}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        border: `1px solid ${borderColor}`,
        ...style,
      }}
    >
      {label}
    </span>
  );
};

export default StatusBadge;
