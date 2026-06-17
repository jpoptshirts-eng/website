"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Layers, MessageCircle, TrendingUp, type LucideIcon } from "lucide-react";
import { caseStudyFadeUp } from "@/components/case-study/case-study-motion";
import { cn } from "@/lib/utils";

const funnelSteps = [
  "Chat lesson started",
  "Message sent",
  "Lesson completed",
] as const;

const mizukiLessonFunnels = [
  { lesson: "mizuki_1", overall: 59.16, messageSent: 78.19, completed: 75.67 },
  { lesson: "mizuki_2", overall: 80.62, messageSent: 92.95, completed: 86.73 },
  { lesson: "mizuki_3", overall: 71.93, messageSent: 90.06, completed: 79.87 },
  { lesson: "mizuki_4", overall: 68.93, messageSent: 95.15, completed: 72.45 },
  { lesson: "mizuki_5", overall: 73.75, messageSent: 88.75, completed: 83.1 },
  { lesson: "mizuki_6", overall: 80.3, messageSent: 93.94, completed: 85.48 },
  { lesson: "mizuki_7", overall: 66.67, messageSent: 94.44, completed: 70.59 },
  { lesson: "mizuki_8", overall: 74.36, messageSent: 92.31, completed: 80.56 },
] as const;

const impactCards: {
  metric: string;
  title: string;
  copy: string;
  icon: LucideIcon;
  link?: { href: string; label: string };
}[] = [
  {
    metric: "V5 → V6",
    title: "Clearer recovery paths",
    copy: "Typing states, drawer support and in-context grammar improved lesson progression before Suggestion addressed pronunciation failure.",
    icon: MessageCircle,
  },
  {
    metric: "Measured",
    title: "Behaviour-led iteration",
    copy: "Mixpanel funnels compared lesson versions so design changes could be assessed against real completion behaviour.",
    icon: Layers,
  },
  {
    metric: "Foundation",
    title: "Connected product work",
    copy: "The conversation model informed later areas including practice and retention mechanics.",
    icon: TrendingUp,
    link: {
      href: "/work/kaizen-languages/retention",
      label: "See retention case study",
    },
  },
];

export function KaizenLessonFunnelsInfographic({ className }: { className?: string }) {
  const averageOverall =
    mizukiLessonFunnels.reduce((sum, item) => sum + item.overall, 0) /
    mizukiLessonFunnels.length;
  const lowestCompletion = mizukiLessonFunnels.reduce((lowest, item) =>
    item.overall < lowest.overall ? item : lowest,
  );

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
      aria-label="Illustrated Mixpanel lesson funnels showing average completion and key drop-off pattern"
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-grey">
        Mizuki lessons · iOS · Last 7 days
      </p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-[#FFF0E8] px-4 py-5 text-center">
          <p className="text-3xl font-black leading-none text-orange md:text-4xl">
            {averageOverall.toFixed(1)}%
          </p>
          <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-grey">
            Average lesson completion
          </p>
        </div>
        <div className="rounded-xl border border-border bg-cream-muted/60 px-4 py-5">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-orange">
            Key drop-off finding
          </p>
          <p className="mt-3 text-sm leading-relaxed text-black">
            Most learners sent messages successfully, but completion varied —
            {lowestCompletion.lesson} dropped to {lowestCompletion.overall}%
            overall, signalling friction after repeated failure rather than at
            lesson entry.
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-border bg-cream-muted/60 p-4 md:p-5">
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-orange">
          Lesson progression funnel
        </p>
        <ol className="mt-4 flex flex-col gap-3 md:flex-row md:items-stretch">
          {funnelSteps.map((step, index) => (
            <li key={step} className="contents">
              <span className="flex flex-1 items-center justify-center rounded-lg border border-border bg-white px-3 py-3 text-center text-xs font-medium text-black md:text-sm">
                {step}
              </span>
              {index < funnelSteps.length - 1 ? (
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
    </motion.div>
  );
}

export function KaizenAiLessonsImpactCards({ className }: { className?: string }) {
  return (
    <div className={cn("mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6", className)}>
      {impactCards.map((card, index) => {
        const Icon = card.icon;

        return (
          <motion.article
            key={card.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            custom={index * 0.05}
            variants={caseStudyFadeUp}
            className={cn(
              "flex h-full min-w-0 flex-col rounded-2xl border border-border bg-white p-6 md:p-8",
            )}
          >
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FFF0E8]"
              aria-hidden
            >
              <Icon className="h-5 w-5 text-orange" strokeWidth={1.75} />
            </div>
            <p className="mt-5 text-3xl font-black leading-none text-black md:text-4xl">
              {card.metric}
            </p>
            <h3 className="mt-4 text-base font-bold text-black md:text-lg">
              {card.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-grey md:text-base">
              {card.copy}
              {card.link ? (
                <>
                  {" "}
                  <Link
                    href={card.link.href}
                    className="font-semibold text-orange hover:underline"
                  >
                    {card.link.label}
                  </Link>
                  .
                </>
              ) : null}
            </p>
          </motion.article>
        );
      })}
    </div>
  );
}
