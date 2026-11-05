/**
 * Parse date string to formatted date and time
 */
export declare function parseDateTime(dateTimeString: string): {
    date: string;
    time: string;
};
/**
 * Get date-only key (YYYY-MM-DD) from a date-time string for grouping activities by date.
 */
export declare function getActivityDateKey(dateTimeString: string): string;
/**
 * Get date key (YYYY-MM-DD) from any activity for grouping by date.
 */
export declare function getDateKeyFromActivity(activity: {
    creation?: string;
    [key: string]: unknown;
}): string;
