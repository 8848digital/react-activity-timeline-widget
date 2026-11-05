/**
 * Get status badge colors for call status
 */
export function getBadgeColor(status: string | undefined): {
  bgColor: string;
  textColor: string;
  borderColor: string;
} {
  if (!status) {
    return { bgColor: "#F3F4F6", textColor: "#374151", borderColor: "#D1D5DB" };
  }

  const statusLower = status.toLowerCase();
  switch (statusLower) {
    case "completed":
      return { bgColor: "#179D51", textColor: "#FFFFFF", borderColor: "#179D51" };
    case "in-progress":
    case "ringing":
      return { bgColor: "#2196F3", textColor: "#FFFFFF", borderColor: "#2196F3" };
    case "failed":
    case "busy":
    case "no-answer":
    case "canceled":
    case "incomplete":
      return { bgColor: "#F44336", textColor: "#FFFFFF", borderColor: "#F44336" };
    default:
      return { bgColor: "#F3F4F6", textColor: "#374151", borderColor: "#D1D5DB" };
  }
}
