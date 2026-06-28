"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Maximize2, X } from "lucide-react";
import CaseStudyMockupImage from "@/components/case-study/CaseStudyMockupImage";
import { cn } from "@/lib/utils";

interface CaseStudyImageViewerProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  imageClassName?: string;
  minWidth?: string;
  priority?: boolean;
  width?: number;
  height?: number;
  expandable?: boolean;
  scrollable?: boolean;
}

export default function CaseStudyImageViewer({
  src,
  alt,
  caption,
  className,
  imageClassName,
  minWidth,
  priority = false,
  width,
  height,
  expandable = true,
  scrollable = false,
}: CaseStudyImageViewerProps) {
  const [open, setOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  const image = (
    <CaseStudyMockupImage
      src={src}
      alt={alt}
      priority={priority}
      width={width}
      height={height}
      className={cn("h-auto w-auto max-w-full bg-transparent", imageClassName)}
    />
  );

  return (
    <figure className={className}>
      <div className="relative">
        {scrollable ? (
          <div
            className="-mx-6 overflow-x-auto px-6 scrollbar-none lg:mx-0 lg:px-0"
            tabIndex={0}
            role="region"
            aria-label="Scrollable diagram — use arrow keys or swipe to view the full image"
          >
            <div className="mb-2 flex items-center justify-between gap-3 lg:hidden">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-grey">
                Scroll to view full diagram
              </p>
              <ArrowRight className="h-4 w-4 shrink-0 text-orange" aria-hidden />
            </div>
            <div
              style={minWidth ? { minWidth } : undefined}
              className={cn(minWidth && "min-w-[36rem] sm:min-w-[42rem]")}
            >
              {image}
            </div>
          </div>
        ) : (
          image
        )}

        {expandable ? (
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-black transition-colors hover:border-orange hover:text-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
          >
            <Maximize2 className="h-3.5 w-3.5" aria-hidden />
            View full size
          </button>
        ) : null}
      </div>

      {caption ? (
        <figcaption className="mt-3 max-w-3xl text-sm leading-relaxed text-grey md:text-base">
          {caption}
        </figcaption>
      ) : null}

      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-auto bg-black/80 p-4 md:items-center md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`Expanded view: ${alt}`}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="fixed right-4 top-4 z-10 rounded-full bg-white p-2 text-black transition-colors hover:text-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange md:right-8 md:top-8"
            aria-label="Close expanded image"
          >
            <X className="h-5 w-5" />
          </button>
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="my-auto shrink-0"
            onClick={(event) => event.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              width={width}
              height={height}
              className="h-auto w-auto max-w-none border-0 bg-transparent"
              style={
                width
                  ? { width: `${width}px`, maxWidth: "calc(100vw - 2rem)" }
                  : undefined
              }
              decoding="async"
            />
          </motion.div>
        </div>
      ) : null}
    </figure>
  );
}
