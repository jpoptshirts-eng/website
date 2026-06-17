"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { caseStudyContainer } from "@/lib/case-study-layout";
import { cn } from "@/lib/utils";

export interface CaseStudyNavItem {
  id: string;
  label: string;
}

interface CaseStudySubnavProps {
  items: readonly CaseStudyNavItem[];
  ariaLabel?: string;
  className?: string;
  accentClassName?: string;
}

const HYSTERESIS_PX = 32;
const HORIZONTAL_PADDING_PX = 24;
const PROGRAMMATIC_SCROLL_LOCK_MS = 800;

function keepActiveNavItemVisible(
  container: HTMLElement,
  item: HTMLElement,
  reducedMotion: boolean,
) {
  const containerRect = container.getBoundingClientRect();
  const itemRect = item.getBoundingClientRect();

  const itemLeft = itemRect.left - containerRect.left + container.scrollLeft;
  const itemRight = itemLeft + itemRect.width;

  const visibleLeft = container.scrollLeft;
  const visibleRight = visibleLeft + container.clientWidth;

  if (itemLeft < visibleLeft + HORIZONTAL_PADDING_PX) {
    container.scrollTo({
      left: Math.max(0, itemLeft - HORIZONTAL_PADDING_PX),
      behavior: reducedMotion ? "auto" : "smooth",
    });
  } else if (itemRight > visibleRight - HORIZONTAL_PADDING_PX) {
    container.scrollTo({
      left: itemRight - container.clientWidth + HORIZONTAL_PADDING_PX,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  }
}

export default function CaseStudySubnav({
  items,
  ariaLabel = "Case study sections",
  className,
  accentClassName = "border-orange bg-orange text-white",
}: CaseStudySubnavProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const [canScrollRight, setCanScrollRight] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });
  const prefersReducedMotion = useRef(false);
  const previousActiveIdRef = useRef<string | null>(null);
  const isProgrammaticScrollRef = useRef(false);
  const intersectingRef = useRef<Map<string, boolean>>(new Map());
  const activeIdRef = useRef(activeId);

  activeIdRef.current = activeId;

  const getStickyLine = useCallback(() => {
    const header = document.querySelector("header");
    const subnav = navRef.current;
    return (
      (header?.getBoundingClientRect().height ?? 72) +
      (subnav?.getBoundingClientRect().height ?? 52)
    );
  }, []);

  const updateScrollOffset = useCallback(() => {
    const header = document.querySelector("header");
    const subnav = navRef.current;
    const headerH = header?.getBoundingClientRect().height ?? 72;
    const subnavH = subnav?.getBoundingClientRect().height ?? 52;
    const offset = headerH + subnavH + 56;

    document.documentElement.style.setProperty("--header-height", `${headerH}px`);
    document.documentElement.style.setProperty(
      "--case-study-scroll-offset",
      `${offset}px`,
    );
    document.documentElement.style.setProperty("--subnav-height", `${subnavH}px`);
  }, []);

  const getScrollOffset = useCallback(() => {
    const value = getComputedStyle(document.documentElement).getPropertyValue(
      "--case-study-scroll-offset",
    );
    const parsed = parseFloat(value);
    return Number.isFinite(parsed) ? parsed : 200;
  }, []);

  const updateScrollHint = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollRight(el.scrollWidth - el.scrollLeft - el.clientWidth > 8);
  }, []);

  const pickActiveFromIntersections = useCallback(() => {
    if (isProgrammaticScrollRef.current) return;

    const stickyLine = getStickyLine();
    const visible = items
      .filter((item) => intersectingRef.current.get(item.id))
      .map((item) => {
        const el = document.getElementById(item.id);
        if (!el) return null;
        const top = el.getBoundingClientRect().top;
        return {
          id: item.id,
          distance: Math.abs(top - stickyLine),
          top,
        };
      })
      .filter((entry): entry is NonNullable<typeof entry> => entry !== null)
      .sort((a, b) => a.distance - b.distance);

    if (visible.length === 0) return;

    const closest = visible[0];
    const current = activeIdRef.current;
    const currentEntry = visible.find((entry) => entry.id === current);

    let nextId = closest.id;

    if (
      currentEntry &&
      currentEntry.id !== closest.id &&
      Math.abs(currentEntry.top - stickyLine) <= HYSTERESIS_PX &&
      closest.distance + HYSTERESIS_PX >= currentEntry.distance
    ) {
      nextId = currentEntry.id;
    }

    setActiveId((prev) => (prev === nextId ? prev : nextId));
  }, [getStickyLine, items]);

  const handleNavClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
      event.preventDefault();

      const target = document.getElementById(sectionId);
      if (!target) return;

      isProgrammaticScrollRef.current = true;
      setActiveId(sectionId);

      const top =
        target.getBoundingClientRect().top + window.scrollY - getScrollOffset();

      window.scrollTo({
        top,
        behavior: prefersReducedMotion.current ? "auto" : "smooth",
      });

      history.replaceState(null, "", `#${sectionId}`);

      const releaseLock = () => {
        isProgrammaticScrollRef.current = false;
      };

      window.addEventListener("scrollend", releaseLock, { once: true });
      window.setTimeout(releaseLock, PROGRAMMATIC_SCROLL_LOCK_MS);
    },
    [getScrollOffset],
  );

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    document.documentElement.classList.add("case-study-scroll");
    updateScrollOffset();
    updateScrollHint();

    const header = document.querySelector("header");
    const subnav = navRef.current;
    const scrollEl = scrollRef.current;
    if (!header || !subnav) return;

    const ro = new ResizeObserver(() => {
      updateScrollOffset();
      updateScrollHint();
    });
    ro.observe(header);
    ro.observe(subnav);
    scrollEl?.addEventListener("scroll", updateScrollHint, { passive: true });
    window.addEventListener("resize", updateScrollHint);

    return () => {
      ro.disconnect();
      scrollEl?.removeEventListener("scroll", updateScrollHint);
      window.removeEventListener("resize", updateScrollHint);
      document.documentElement.classList.remove("case-study-scroll");
      document.documentElement.style.removeProperty("--header-height");
      document.documentElement.style.removeProperty("--case-study-scroll-offset");
      document.documentElement.style.removeProperty("--subnav-height");
    };
  }, [updateScrollHint, updateScrollOffset]);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const setupObserver = () => {
      observer?.disconnect();

      const intersecting = new Map<string, boolean>();
      items.forEach((item) => intersecting.set(item.id, false));
      intersectingRef.current = intersecting;

      const stickyTop = Math.round(getStickyLine());

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            intersectingRef.current.set(entry.target.id, entry.isIntersecting);
          });
          pickActiveFromIntersections();
        },
        {
          root: null,
          rootMargin: `-${stickyTop}px 0px -65% 0px`,
          threshold: [0, 0.01, 0.1],
        },
      );

      items.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el) observer?.observe(el);
      });

      pickActiveFromIntersections();
    };

    setupObserver();

    const header = document.querySelector("header");
    const subnav = navRef.current;
    if (header && subnav) {
      const ro = new ResizeObserver(() => setupObserver());
      ro.observe(header);
      ro.observe(subnav);

      return () => {
        observer?.disconnect();
        ro.disconnect();
      };
    }

    return () => {
      observer?.disconnect();
    };
  }, [getStickyLine, items, pickActiveFromIntersections]);

  useEffect(() => {
    if (previousActiveIdRef.current === activeId) return;
    previousActiveIdRef.current = activeId;
    if (isDragging.current) return;

    const container = scrollRef.current;
    const activeLink = container?.querySelector<HTMLElement>(
      `a[href="#${activeId}"]`,
    );
    if (!container || !activeLink) return;

    keepActiveNavItemVisible(
      container,
      activeLink,
      prefersReducedMotion.current,
    );
    updateScrollHint();
  }, [activeId, updateScrollHint]);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest("a")) return;
    const el = scrollRef.current;
    if (!el) return;
    isDragging.current = true;
    dragStart.current = { x: e.clientX, scrollLeft: el.scrollLeft };
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current || !scrollRef.current) return;
    const dx = e.clientX - dragStart.current.x;
    scrollRef.current.scrollLeft = dragStart.current.scrollLeft - dx;
    updateScrollHint();
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = false;
    scrollRef.current?.releasePointerCapture(e.pointerId);
    updateScrollHint();
  };

  return (
    <nav
      ref={navRef}
      className={cn(
        "case-study-subnav sticky z-40 w-full overflow-x-hidden border-b border-border/60 bg-white/95 backdrop-blur-sm",
        className,
      )}
      style={{ top: "var(--header-height, 5.25rem)" }}
      aria-label={ariaLabel}
    >
      <div className="relative">
        <div
          ref={scrollRef}
          className={cn(
            caseStudyContainer,
            "flex min-h-0 cursor-grab touch-pan-x flex-nowrap items-center gap-2 overflow-x-auto py-2.5 scrollbar-none active:cursor-grabbing",
          )}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={cn(
                  "shrink-0 select-none rounded-full border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange",
                  isActive
                    ? accentClassName
                    : "border-border bg-white text-black hover:border-orange hover:text-orange",
                )}
                aria-current={isActive ? "location" : undefined}
              >
                {item.label}
              </a>
            );
          })}
        </div>
        {canScrollRight ? (
          <div
            className="pointer-events-none absolute inset-y-0 right-0 flex w-12 items-center justify-end bg-gradient-to-l from-white/95 via-white/80 to-transparent pr-1"
            aria-hidden
          >
            <ArrowRight className="h-3.5 w-3.5 text-orange" />
          </div>
        ) : null}
      </div>
    </nav>
  );
}
