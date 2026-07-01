"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import CaseStudyLabel from "@/components/case-study/CaseStudyLabel";
import CaseStudyHeadline from "@/components/case-study/CaseStudyHeadline";
import { caseStudyFadeUp } from "@/components/case-study/case-study-motion";
import { caseStudyContainer } from "@/lib/case-study-layout";
import type {
  KaizenAtAGlance,
  KaizenDecisionTradeoff,
  KaizenResultsLearning,
  KaizenStoryTransition,
} from "@/lib/kaizen-story-data";
import { cn } from "@/lib/utils";

const glanceLabels = [
  { key: "problem" as const, label: "Problem" },
  { key: "keyInsight" as const, label: "Key insight" },
  { key: "decision" as const, label: "Decision" },
  { key: "result" as const, label: "Result" },
];

export function KaizenAtAGlanceMatrix({
  data,
  className,
}: {
  data: KaizenAtAGlance;
  className?: string;
}) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={caseStudyFadeUp}
      className={cn("border-y border-border bg-cream-muted py-10 md:py-12", className)}
      aria-label="At a glance"
    >
      <div className={caseStudyContainer}>
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-orange">
          At a glance
        </p>
        <dl className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {glanceLabels.map((item, index) => (
            <motion.div
              key={item.key}
              custom={index * 0.04}
              variants={caseStudyFadeUp}
              className="rounded-2xl border border-border bg-white p-5 md:p-6"
            >
              <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-orange">
                {item.label}
              </dt>
              <dd className="mt-3 text-sm leading-relaxed text-black md:text-[0.9375rem]">
                {data[item.key]}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </motion.section>
  );
}

export function KaizenDecisionTradeoff({
  data,
  className,
  columns = 2,
}: {
  data: KaizenDecisionTradeoff;
  className?: string;
  columns?: 2 | 4;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-white p-5 md:p-6",
        className,
      )}
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-orange">
        Decision and trade-off
      </p>
      <dl
        className={cn(
          "mt-5 grid gap-4",
          columns === 4
            ? "sm:grid-cols-2 lg:grid-cols-4"
            : "sm:grid-cols-2",
        )}
      >
        <div>
          <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-grey">
            Alternative
          </dt>
          <dd className="mt-2 text-sm leading-relaxed text-black md:text-base">
            {data.alternative}
          </dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-grey">
            Chosen direction
          </dt>
          <dd className="mt-2 text-sm leading-relaxed text-black md:text-base">
            {data.chosen}
          </dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-grey">
            Evidence or constraint
          </dt>
          <dd className="mt-2 text-sm leading-relaxed text-black md:text-base">
            {data.evidence}
          </dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-grey">
            Consequence
          </dt>
          <dd className="mt-2 text-sm leading-relaxed text-black md:text-base">
            {data.consequence}
          </dd>
        </div>
      </dl>
    </div>
  );
}

export type KaizenFeatureStatusType = "shipped" | "tested" | "explored";

const statusStyles: Record<
  KaizenFeatureStatusType,
  { label: string; className: string }
> = {
  shipped: {
    label: "Shipped and measured",
    className: "border-orange/30 bg-[#FFF0E8] text-orange",
  },
  tested: {
    label: "Tested",
    className: "border-border bg-cream-muted text-black",
  },
  explored: {
    label: "Explored for a future phase",
    className: "border-border bg-white text-grey",
  },
};

export function KaizenFeatureStatus({
  status,
  className,
}: {
  status: KaizenFeatureStatusType;
  className?: string;
}) {
  const config = statusStyles[status];

  return (
    <span
      className={cn(
        "inline-flex rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em]",
        config.className,
        className,
      )}
    >
      {config.label}
    </span>
  );
}

export function KaizenResultsLearningSection({
  data,
  id = "results-learning",
  className,
  aside,
  label = "Results and learning",
}: {
  data: KaizenResultsLearning;
  id?: string;
  className?: string;
  aside?: ReactNode;
  label?: string;
}) {
  const content = (
    <>
      <CaseStudyLabel>{label}</CaseStudyLabel>
      <CaseStudyHeadline id={`${id}-heading`}>{data.headline}</CaseStudyHeadline>
      <div className="mt-6 space-y-4 text-base leading-relaxed text-black md:text-lg">
        {data.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </>
  );

  return (
    <section
      id={id}
      className={cn("scroll-mt-24", className)}
      aria-labelledby={`${id}-heading`}
    >
      {aside ? (
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-10 xl:gap-14">
          <div className="min-w-0">{content}</div>
          <div className="mt-10 flex justify-center lg:mt-0">{aside}</div>
        </div>
      ) : (
        <div className="max-w-3xl">{content}</div>
      )}
    </section>
  );
}

export function KaizenStoryTransition({
  transition,
  className,
}: {
  transition: KaizenStoryTransition;
  className?: string;
}) {
  return (
    <section
      className={cn("border-t border-border bg-white py-12 md:py-14", className)}
      aria-label="Next story"
    >
      <div className={caseStudyContainer}>
        <div className="max-w-3xl">
          <p className="text-base leading-relaxed text-black md:text-lg">
            {transition.text}
          </p>
          <Link
            href={transition.nextHref}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-orange transition-colors hover:text-black"
          >
            Continue to {transition.nextLabel}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function KaizenHubEndLinks({ className }: { className?: string }) {
  return (
    <section
      className={cn("border-t border-border bg-white py-12 md:py-14", className)}
      aria-label="Return navigation"
    >
      <div className={caseStudyContainer}>
        <p className="max-w-3xl text-base leading-relaxed text-black md:text-lg">
          This was the final story in the Kaizen Languages case study. Return to
          the overview to see how these product areas connected, or explore more
          work across the portfolio.
        </p>
        <div className="mt-6 flex flex-wrap gap-6 text-sm font-semibold">
          <Link
            href="/work/kaizen-languages"
            className="text-orange transition-colors hover:text-black"
          >
            Back to Kaizen overview
          </Link>
          <Link href="/#work" className="text-grey transition-colors hover:text-orange">
            View all work
          </Link>
        </div>
      </div>
    </section>
  );
}
