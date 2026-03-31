/**
 * Lightweight sanitizer that only removes the most dangerous tags
 * but preserves inline styles.
 */
export declare function sanitizeHtmlLight(html: string | undefined | null): string;
