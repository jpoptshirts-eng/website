"use client";

import { motion } from "framer-motion";
import { BarChart3, CalendarDays, TrendingUp, type LucideIcon } from "lucide-react";
import { caseStudyFadeUp } from "@/components/case-study/case-study-motion";
import { kaizenRetention } from "@/lib/kaizen-languages-data";
import { cn } from "@/lib/utils";

const retentionBenchmarks = [
  {
    label: "Day 1 retention",
    kaizen: 40,
    benchmark: 14.5,
    benchmarkLabel: "Education-tech average",
  },
  {
    label: "Week 1 retention",
    kaizen: 22,
    benchmark: 4.6,
    benchmarkLabel: "Education-tech average",
  },
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

const impactCards: {
  text: string;
  icon: LucideIcon;
}[] = [
  {
    text: kaizenRetention.results[0],
    icon: TrendingUp,
  },
  {
    text: kaizenRetention.results[1],
    icon: CalendarDays,
  },
  {
    text: kaizenRetention.results[2],
    icon: BarChart3,
  },
];

function ComparisonBar({
  label,
  kaizen,
  benchmark,
  benchmarkLabel,
}: {
  label: string;
  kaizen: number;
  benchmark: number;
  benchmarkLabel: string;
}) {
  const max = Math.max(kaizen, benchmark, 45);

  return (
    <div className="rounded-xl border border-border bg-white p-4 md:p-5">
      <p className="text-sm font-bold text-black">{label}</p>
      <div className="mt-4 space-y-3">
        <div>
          <div className="mb-1.5 flex items-center justify-between text-sm">
            <span className="font-medium text-black">Kaizen</span>
            <span className="font-black text-orange">{kaizen}%</span>
          </div>
          <div className="h-2.5 overflow-hidden rounded-full bg-cream-muted">
            <div
              className="h-full rounded-full bg-orange"
              style={{ width: `${(kaizen / max) * 100}%` }}
            />
          </div>
        </div>
        <div>
          <div className="mb-1.5 flex items-center justify-between text-sm">
            <span className="text-grey">{benchmarkLabel}</span>
            <span className="font-semibold text-black">{benchmark}%</span>
          </div>
          <div className="h-2.5 overflow-hidden rounded-full bg-cream-muted">
            <div
              className="h-full rounded-full bg-border"
              style={{ width: `${(benchmark / max) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

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
      aria-label="Illustrated Firebase retention analytics showing benchmark comparisons, repeat behaviour funnel and tracked signals"
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-grey">
        Retention analytics overview
      </p>

      <div className="mt-5">
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-orange">
          Benchmark comparison
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {retentionBenchmarks.map((item) => (
            <ComparisonBar key={item.label} {...item} />
          ))}
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-border bg-cream-muted/60 p-4 md:p-5">
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-orange">
          Repeat behaviour funnel
        </p>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-grey">
          Firebase cohorts helped track whether product changes translated into
          repeat behaviour beyond the first session.
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

export function KaizenRetentionImpactCards({ className }: { className?: string }) {
  return (
    <div className={cn("mt-10 grid gap-4 md:grid-cols-3", className)}>
      {impactCards.map((card, index) => {
        const Icon = card.icon;

        return (
          <motion.article
            key={card.text}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            custom={index * 0.05}
            variants={caseStudyFadeUp}
            className="flex h-full flex-col rounded-2xl border border-border bg-cream-muted p-5 md:p-6"
          >
            <div
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FFF0E8]"
              aria-hidden
            >
              <Icon className="h-5 w-5 text-orange" strokeWidth={1.75} />
            </div>
            <p className="mt-4 text-sm font-semibold leading-relaxed text-black md:text-base">
              {card.text}
            </p>
          </motion.article>
        );
      })}
    </div>
  );
}
