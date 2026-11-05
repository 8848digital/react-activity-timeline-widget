import { default as React } from 'react';
/** Formats time from ISO/creation string to 'HH:MM AM/PM' */
export declare function formatTimeLocale(creation?: string): string;
/** Parses message text to wrap URLs in <a> tags */
export declare function parseMessageWithLinks(text?: string): React.ReactNode | null;
/** Renders status icons (one/two ticks) based on status number (1–5) */
export declare function renderMessageStatusIcon(status: number | string | undefined, isOutbound: number): React.ReactNode | null;
