import { useState, useRef, useEffect, useCallback, type DependencyList } from "react";

const DEFAULT_COLLAPSED_HEIGHT = 164;
const TRANSITION_DURATION_MS = 400;

function getScrollParent(el: HTMLElement): HTMLElement | null {
  let parent = el.parentElement;
  while (parent) {
    const { overflowY } = getComputedStyle(parent);
    if (/(auto|scroll|overlay)/.test(overflowY)) return parent;
    parent = parent.parentElement;
  }
  return null;
}

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
  const collapseScrollRef = useRef<{ height: number; scrollParent: HTMLElement | null } | null>(null);

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

  useEffect(() => {
    if (isExpanded) {
      collapseScrollRef.current = null;
      return;
    }
    const pending = collapseScrollRef.current;
    if (!pending || !wrapperRef.current) return;
    collapseScrollRef.current = null;
    const el = wrapperRef.current;

    const applyScrollCompensation = () => {
      const newHeight = el.offsetHeight;
      const delta = pending.height - newHeight;
      if (delta <= 0) return;
      const scrollParent = pending.scrollParent;
      if (scrollParent) {
        scrollParent.scrollTop = Math.max(0, scrollParent.scrollTop - delta);
      } else {
        window.scrollTo({ top: Math.max(0, window.scrollY - delta), behavior: "auto" });
      }
    };

    const onTransitionEnd = (e: TransitionEvent) => {
      if (e.target !== el || e.propertyName !== "max-height") return;
      el.removeEventListener("transitionend", onTransitionEnd);
      clearTimeout(fallback);
      applyScrollCompensation();
    };

    el.addEventListener("transitionend", onTransitionEnd);
    const fallback = setTimeout(() => {
      el.removeEventListener("transitionend", onTransitionEnd);
      applyScrollCompensation();
    }, TRANSITION_DURATION_MS + 50);

    return () => {
      el.removeEventListener("transitionend", onTransitionEnd);
      clearTimeout(fallback);
    };
  }, [isExpanded]);

  const toggleExpanded = useCallback(() => {
    setIsExpanded((v) => {
      if (v) {
        const el = wrapperRef.current;
        if (el) {
          collapseScrollRef.current = {
            height: el.offsetHeight,
            scrollParent: getScrollParent(el),
          };
        }
      }
      return !v;
    });
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
