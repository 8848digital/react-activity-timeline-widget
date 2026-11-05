/**
 * Format duration from seconds to a human-readable string
 */
export function formatDuration(dur: string | number | undefined): string {
  if (!dur) return "";
  if (typeof dur === "string") return dur;
  if (typeof dur === "number") {
    const mins = Math.floor(dur / 60);
    const secs = dur % 60;
    return secs > 0 ? `${mins}m ${secs}s` : `${mins}m`;
  }
  return "";
}
