"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface CaseStudyNavItem {
  id: string;
  label: string;
}

interface CaseStudySubnavProps {
  items: readonly CaseStudyNavItem[];
}

export default function CaseStudySubnav({ items }: CaseStudySubnavProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const navRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });

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
  }, []);

  const getScrollOffset = useCallback(() => {
    const value = getComputedStyle(document.documentElement).getPropertyValue(
      "--case-study-scroll-offset",
    );
    const parsed = parseFloat(value);
    return Number.isFinite(parsed) ? parsed : 200;
  }, []);

  const scrollToSection = useCallback(
    (id: string) => {
      const el = document.getElementById(id);
      if (!el) return;
      const top =
        el.getBoundingClientRect().top + window.scrollY - getScrollOffset();
      window.scrollTo({ top, behavior: "smooth" });
      setActiveId(id);
    },
    [getScrollOffset],
  );

  useEffect(() => {
    document.documentElement.classList.add("case-study-scroll");
    updateScrollOffset();
    const header = document.querySelector("header");
    const subnav = navRef.current;
    if (!header || !subnav) return;
    const ro = new ResizeObserver(() => updateScrollOffset());
    ro.observe(header);
    ro.observe(subnav);
    window.addEventListener("resize", updateScrollOffset);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateScrollOffset);
      document.documentElement.classList.remove("case-study-scroll");
      document.documentElement.style.removeProperty("--header-height");
      document.documentElement.style.removeProperty("--case-study-scroll-offset");
    };
  }, [updateScrollOffset]);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-48% 0px -45% 0px",
        threshold: [0, 0.12, 0.3, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

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
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = false;
    scrollRef.current?.releasePointerCapture(e.pointerId);
  };

  return (
    <nav
      ref={navRef}
      className="case-study-subnav sticky z-40 border-b border-border/60 bg-white/95 backdrop-blur-sm"
      style={{ top: "var(--header-height, 4.5rem)" }}
      aria-label="Case study sections"
    >
      <div className="mx-auto max-w-page lg:px-8">
        <div
          ref={scrollRef}
          className="flex cursor-grab touch-pan-x flex-nowrap gap-2 overflow-x-auto px-6 py-3 active:cursor-grabbing scrollbar-none lg:px-8"
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
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className={cn(
                  "shrink-0 select-none rounded-full border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange",
                  isActive
                    ? "border-orange bg-orange text-white"
                    : "border-border bg-white text-black hover:border-orange hover:text-orange",
                )}
                aria-current={isActive ? "true" : undefined}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
