import React from "react";
import { Check, CheckDouble, Warning } from "../components/icons";

/** Formats time from ISO/creation string to 'HH:MM AM/PM' */
export function formatTimeLocale(creation?: string): string {
  if (!creation) return "";
  try {
    const d = new Date(creation);
    if (isNaN(d.getTime())) return "";
    return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true });
  } catch (err) {
    return "";
  }
}

/** Parses message text to wrap URLs in <a> tags */
export function parseMessageWithLinks(text?: string): React.ReactNode | null {
  if (!text) return null;
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);
  return parts.map((part, i) => {
    if (part.match(urlRegex)) {
      return (
        <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="message-url">
          {part}
        </a>
      );
    }
    return part;
  });
}

/** Renders status icons (one/two ticks) based on status number (1–5) */
export function renderMessageStatusIcon(status: number | string | undefined, isOutbound: number): React.ReactNode | null {
  if (isOutbound !== 1) return null;
  const s = typeof status === "number" ? status : parseInt(status || "0", 10);
  
  switch (s) {
    case 1: // Sent - single tick
      return <Check size={14} color="#8696a0" />;
    case 2: // Failed - red warning
      return <Warning size={14} color="#f44336" />;
    case 3: // Delivered - double tick gray
      return <CheckDouble size={14} color="#8696a0" />;
    case 4: // Read - double tick blue
      return <CheckDouble size={14} color="#53bdeb" />;
    case 5: // Pending - single tick or clock
      return <Check size={14} color="#8696a0" style={{ opacity: 0.6 }} />;
    default:
      return null;
  }
}
