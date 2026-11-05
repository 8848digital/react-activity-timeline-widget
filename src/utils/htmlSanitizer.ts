/**
 * Lightweight sanitizer that only removes the most dangerous tags
 * but preserves inline styles.
 */
export function sanitizeHtmlLight(html: string | undefined | null): string {
  if (!html || typeof html !== "string") return "";
  if (typeof document === "undefined") return html;

  const div = document.createElement("div");
  div.innerHTML = html;

  const dangerousTags = ["style", "script", "link", "iframe"];
  dangerousTags.forEach((tag) => {
    const elements = div.querySelectorAll(tag);
    elements.forEach((el) => el.remove());
  });

  return div.innerHTML;
}
