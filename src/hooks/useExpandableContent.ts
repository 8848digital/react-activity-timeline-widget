import { useState, useRef, useEffect, useCallback, type DependencyList } from "react";

const DEFAULT_COLLAPSED_HEIGHT = 164;

/**
 * Hook for expandable content that shows "View More" only when the content
 * overflows a collapsed height.
 */
export function useExpandableContent(
  deps: DependencyList,
  collapsedHeight: number = DEFAULT_COLLAPSED_HEIGHT
) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasOverflow, setHasOverflow] = useState<boolean | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const measure = () => setHasOverflow(el.scrollHeight > collapsedHeight);
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(measure);
    });
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collapsedHeight, ...deps]);

  const showOverflow = hasOverflow === true;
  const shouldShowExpanded = hasOverflow !== null && (isExpanded || !hasOverflow);

  const toggleExpanded = useCallback(() => {
    setIsExpanded((v) => !v);
  }, []);

  return {
    isExpanded,
    toggleExpanded,
    hasOverflow,
    showOverflow,
    shouldShowExpanded,
    wrapperRef,
  };
}
