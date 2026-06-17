"use client";

import { motion } from "framer-motion";
import { caseStudyFadeUp } from "@/components/case-study/case-study-motion";
import { cn } from "@/lib/utils";

const retentionMetrics = [
  { label: "Retention uplift", value: "+35%", detail: "After shipped streak mechanics" },
  { label: "Day 1 retention", value: "40%", detail: "First-day return rate" },
  { label: "Week 1 retention", value: "22%", detail: "Seven-day return rate" },
] as const;

const analyticsSignals = [
  "Retention cohorts from first open through repeat sessions",
  "Engagement time and return frequency after streak releases",
  "Platform usage across iOS and Android",
  "In-app purchase and crash-free session monitoring",
] as const;

const repeatFunnel = [
  "First open",
  "Day 1 return",
  "Week 1 return",
] as const;

export function KaizenRetentionAnalyticsInfographic({
  className,
}: {
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={caseStudyFadeUp}
      className={cn(
        "rounded-2xl border border-border bg-white p-5 md:p-6",
        className,
      )}
      role="img"
      aria-label="Illustrated Firebase retention analytics showing Kaizen retention metrics, repeat behaviour funnel and tracked signals"
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-grey">
        Retention analytics overview
      </p>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {retentionMetrics.map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-border bg-cream-muted/60 px-3 py-4 text-center"
          >
            <p className="text-xl font-black leading-none text-orange md:text-2xl">
              {item.value}
            </p>
            <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-grey">
              {item.label}
            </p>
            <p className="mt-1 text-xs text-grey">{item.detail}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-border bg-cream-muted/60 p-4 md:p-5">
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-orange">
          Repeat behaviour funnel
        </p>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-grey">
          Firebase cohorts helped track whether shipped streak mechanics translated
          into repeat behaviour beyond the first session.
        </p>
        <ol className="mt-5 flex flex-col gap-3 md:flex-row md:items-stretch">
          {repeatFunnel.map((step, index) => (
            <li key={step} className="contents">
              <span className="flex flex-1 items-center justify-center rounded-lg border border-border bg-white px-3 py-3 text-center text-sm font-medium text-black">
                {step}
              </span>
              {index < repeatFunnel.length - 1 ? (
                <span
                  className="flex items-center justify-center text-orange md:px-2"
                  aria-hidden
                >
                  <span className="md:hidden">↓</span>
                  <span className="hidden md:inline">→</span>
                </span>
              ) : null}
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-5 rounded-xl border border-border bg-cream-muted/60 p-4 md:p-5">
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-orange">
          Signals tracked in Firebase
        </p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {analyticsSignals.map((signal) => (
            <li
              key={signal}
              className="flex gap-3 rounded-lg border border-border bg-white p-3 text-sm leading-relaxed text-black"
            >
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange"
                aria-hidden
              />
              {signal}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
