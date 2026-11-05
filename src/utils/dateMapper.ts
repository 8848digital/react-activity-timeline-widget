/**
 * Parse date string to formatted date and time
 */
export function parseDateTime(dateTimeString: string): { date: string; time: string } {
  const date = new Date(dateTimeString);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const day = date.getDate().toString().padStart(2, "0");
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const formattedDate = `${day} ${month} ${year}`;

  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours || 12;
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes} ${ampm}`;

  return { date: formattedDate, time: formattedTime };
}

/**
 * Get date-only key (YYYY-MM-DD) from a date-time string for grouping activities by date.
 */
export function getActivityDateKey(dateTimeString: string): string {
  try {
    const d = new Date(dateTimeString);
    if (Number.isNaN(d.getTime())) return "";
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  } catch {
    return "";
  }
}

/**
 * Get date key (YYYY-MM-DD) from any activity for grouping by date.
 */
export function getDateKeyFromActivity(activity: {
  creation?: string;
  [key: string]: unknown;
}): string {
  const dateStr = (activity as { creation?: string }).creation ?? "";
  return getActivityDateKey(dateStr);
}
