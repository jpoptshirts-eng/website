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
  highlight?: boolean;
  link?: { href: string; label: string };
}[] = [
  {
    metric: "+25%",
    title: "Lesson completions",
    copy: "After introducing Suggestions to help learners recover from pronunciation failure.",
    icon: TrendingUp,
    highlight: true,
  },
  {
    metric: "V5 → V6",
    title: "Clearer recovery paths",
    copy: "Improved conversation progression through typing states, drawer support and in-context grammar.",
    icon: MessageCircle,
  },
  {
    metric: "Foundation",
    title: "Retention and gamification",
    copy: "Created a stronger interaction model for later product work across the app.",
    icon: Layers,
    link: {
      href: "/work/kaizen-languages/retention",
      label: "See retention case study",
    },
  },
];

function FunnelBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between gap-3 text-xs">
        <span className="font-medium text-black">{label}</span>
        <span className="font-black text-orange">{value}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-cream-muted">
        <div
          className="h-full rounded-full bg-orange"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export function KaizenLessonFunnelsInfographic({ className }: { className?: string }) {
  const averageOverall =
    mizukiLessonFunnels.reduce((sum, item) => sum + item.overall, 0) /
    mizukiLessonFunnels.length;

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
      aria-label="Illustrated Mixpanel lesson funnels for Mizuki lessons on iOS showing three-step progression and completion rates"
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-grey">
        Mizuki lessons · iOS · Last 7 days
      </p>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl bg-[#FFF0E8] px-3 py-4 text-center">
          <p className="text-xl font-black leading-none text-orange md:text-2xl">
            {averageOverall.toFixed(1)}%
          </p>
          <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-grey">
            Avg lesson completion
          </p>
        </div>
        <div className="rounded-xl bg-cream-muted px-3 py-4 text-center">
          <p className="text-xl font-black leading-none text-black md:text-2xl">8</p>
          <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-grey">
            Lessons tracked
          </p>
        </div>
        <div className="rounded-xl bg-cream-muted px-3 py-4 text-center">
          <p className="text-xl font-black leading-none text-black md:text-2xl">3</p>
          <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-grey">
            Funnel steps
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

      <div className="mt-5">
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-orange">
          Completion by lesson
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {mizukiLessonFunnels.map((lesson) => (
            <div
              key={lesson.lesson}
              className="rounded-xl border border-border bg-white p-4"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-bold text-black">{lesson.lesson}</p>
                <p className="text-sm font-black text-orange">{lesson.overall}%</p>
              </div>
              <div className="mt-3 space-y-2">
                <FunnelBar label="Message sent" value={lesson.messageSent} />
                <FunnelBar label="Lesson completed" value={lesson.completed} />
              </div>
            </div>
          ))}
        </div>
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
              "flex h-full min-w-0 flex-col rounded-2xl border p-6 md:p-8",
              card.highlight
                ? "border-orange/20 bg-[#FFF0E8]"
                : "border-border bg-white",
            )}
          >
            <div
              className={cn(
                "flex h-12 w-12 shrink-0 items-center justify-center rounded-full",
                card.highlight ? "bg-white" : "bg-[#FFF0E8]",
              )}
              aria-hidden
            >
              <Icon className="h-5 w-5 text-orange" strokeWidth={1.75} />
            </div>
            <p
              className={cn(
                "mt-5 text-3xl font-black leading-none md:text-4xl",
                card.highlight ? "text-orange" : "text-black",
              )}
            >
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
