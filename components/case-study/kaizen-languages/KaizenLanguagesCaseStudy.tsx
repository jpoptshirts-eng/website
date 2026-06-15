"use client";

import { motion } from "framer-motion";
import { Camera, Heart, Layers, LineChart, Palette, Pencil, Scale, Sparkles, Star, TrendingUp, Zap } from "lucide-react";
import CaseStudyLabel from "@/components/case-study/CaseStudyLabel";
import CaseStudyHeadline from "@/components/case-study/CaseStudyHeadline";
import CaseStudyProof from "@/components/case-study/CaseStudyProof";
import CaseStudyQuote from "@/components/case-study/CaseStudyQuote";
import CaseStudySubnav from "@/components/case-study/CaseStudySubnav";
import { caseStudyFadeUp } from "@/components/case-study/case-study-motion";
import { caseStudyContainer, caseStudySection, caseStudyHeroRow, caseStudyHeroImageColumn } from "@/lib/case-study-layout";
import {
  kaizenSubnav,
  kaizenHero,
  kaizenMyRole,
  kaizenOverview,
  kaizenChallenge,
  kaizenQuotes,
  kaizenResearch,
  kaizenInsight,
  kaizenVisualDirection,
  kaizenAiConversation,
  kaizenLesson,
  kaizenSuggestion,
  kaizenIteration,
  kaizenStrategy,
  kaizenWriting,
  kaizenGamification,
  kaizenRetention,
  kaizenConversion,
  kaizenProof,
  kaizenImpact,
  kaizenDecisions,
  kaizenReflection,
} from "@/lib/kaizen-languages-data";
import { cn } from "@/lib/utils";

const iconWrap = "flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#FFE4D6]";

const decisionIcons = {
  heart: Heart,
  layers: Layers,
  zap: Zap,
  scale: Scale,
  pencil: Pencil,
};

const visualDirectionIcons = {
  camera: Camera,
  sparkles: Sparkles,
  palette: Palette,
  layers: Layers,
};

const kpiIcons = {
  trending: TrendingUp,
  star: Star,
  chart: LineChart,
} as const;

type KpiIconKey = keyof typeof kpiIcons;

function getMetricIcon(metric: string): KpiIconKey {
  if (metric.includes("NPS")) return "star";
  if (metric.includes("→")) return "chart";
  return "trending";
}

function KpiCallout({
  children,
  icon = "trending",
  compact = false,
  className,
}: {
  children: React.ReactNode;
  icon?: KpiIconKey;
  compact?: boolean;
  className?: string;
}) {
  const Icon = kpiIcons[icon];

  return (
    <div
      className={cn(
        "flex rounded-2xl bg-[#FFF0E8]",
        compact
          ? "flex-col gap-4 px-6 py-10 md:px-7 md:py-12"
          : "items-start gap-4 p-5 md:gap-5 md:p-6",
        className,
      )}
    >
      <div
        className={cn(
          "flex shrink-0 items-center justify-center rounded-full bg-white",
          compact ? "h-12 w-12" : "h-11 w-11",
        )}
        aria-hidden
      >
        <Icon className="h-5 w-5 text-orange" strokeWidth={1.75} />
      </div>
      <p
        className={cn(
          "font-semibold leading-relaxed text-black",
          compact ? "text-base md:text-lg" : "text-base md:text-lg",
        )}
      >
        {children}
      </p>
    </div>
  );
}

function KpiIconBadge({
  icon,
  className,
}: {
  icon: KpiIconKey;
  className?: string;
}) {
  const Icon = kpiIcons[icon];

  return (
    <div
      className={cn(
        "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFF0E8]",
        className,
      )}
      aria-hidden
    >
      <Icon className="h-4 w-4 text-orange" strokeWidth={1.75} />
    </div>
  );
}

function MockupImage({
  src,
  alt,
  priority = false,
  className,
  width,
  height,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  width?: number;
  height?: number;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn("h-auto w-full bg-transparent object-contain", className)}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
    />
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm md:text-base">
          <span
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange"
            aria-hidden
          />
          <span className="leading-relaxed text-black">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ReservedMediaArea({
  src,
  alt,
  placeholderLabel,
  className,
}: {
  src: string;
  alt: string;
  placeholderLabel: string;
  className?: string;
}) {
  if (src) {
    return (
      <MockupImage
        src={src}
        alt={alt}
        className={cn("w-full", className)}
      />
    );
  }

  return (
    // Placeholder — replace `src` in kaizen-languages-data.ts when the final asset is ready
    <div
      role="img"
      aria-label={placeholderLabel}
      className={cn(
        "flex aspect-[16/10] w-full items-center justify-center rounded-2xl border border-dashed border-border bg-cream-muted px-6",
        className,
      )}
    >
      <p className="text-center text-sm leading-relaxed text-grey">
        {placeholderLabel}
      </p>
    </div>
  );
}

export default function KaizenLanguagesCaseStudy() {
  return (
    <>
      <CaseStudySubnav items={kaizenSubnav} />

      {/* 01 Hero */}
      <section
        id="overview"
        className={cn(caseStudySection, "bg-white pb-0 pt-12 md:pt-16 lg:pt-20")}
        aria-labelledby="kaizen-title"
      >
        <div className={caseStudyContainer}>
          <div className={cn(caseStudyHeroRow, "min-w-0 md:overflow-visible")}>
            <motion.div
              custom={0}
              variants={caseStudyFadeUp}
              initial="hidden"
              animate="visible"
              className="min-w-0 flex-1 md:max-w-[48%]"
            >
              <CaseStudyLabel>{kaizenHero.label}</CaseStudyLabel>
              <CaseStudyHeadline as="h1" id="kaizen-title">
                {kaizenHero.title}
              </CaseStudyHeadline>
              <p className="mt-8 max-w-lg border-l-2 border-orange pl-6 text-base leading-relaxed text-black md:mt-10 md:text-lg">
                {kaizenHero.subcopy}
              </p>
              <dl className="mt-10 flex flex-col gap-5 lg:mt-12">
                {kaizenHero.meta.map((item) => (
                  <div key={item.label}>
                    <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-grey">
                      {item.label}
                    </dt>
                    <dd className="mt-1 text-sm font-medium leading-snug text-black md:text-base">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:mt-12">
                {kaizenHero.highlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-border bg-cream-muted p-4"
                  >
                    <p className="text-xl font-black text-orange md:text-2xl">
                      {item.metric}
                    </p>
                    <p className="mt-1 text-xs leading-snug text-grey">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <div
              className={cn(
                "relative justify-center md:py-4 lg:py-0",
                caseStudyHeroImageColumn,
              )}
            >
              <div className="relative ml-auto w-full max-w-[calc(22rem+150px)] sm:max-w-[calc(24rem+150px)] md:max-w-full lg:max-w-[calc(26rem+150px)] xl:max-w-[calc(28rem+150px)]">
                <div
                  className="pointer-events-none absolute -right-[8%] top-[8%] z-0 aspect-square w-[75%] rounded-full bg-soft-pink md:w-[80%]"
                  aria-hidden
                />
                <div className="relative z-10">
                  <MockupImage
                    src={kaizenHero.image}
                    alt={kaizenHero.imageAlt}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Overview + My role */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={caseStudyFadeUp}
            className="mt-14 border-t border-border pt-12 md:mt-16 md:pt-14 lg:mt-20 lg:pt-16"
          >
            <div className="mb-14 lg:mb-16">
              <CaseStudyLabel>{kaizenOverview.label}</CaseStudyLabel>
              <CaseStudyHeadline>{kaizenOverview.headline}</CaseStudyHeadline>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-black md:text-lg lg:max-w-3xl">
                <p>{kaizenOverview.body}</p>
                <p>{kaizenOverview.body2}</p>
              </div>
              <div className="-mx-6 mt-8 overflow-x-auto px-6 scrollbar-none lg:mx-0 lg:overflow-visible lg:px-0">
                <ul className="flex min-w-max gap-4 lg:min-w-0 lg:grid lg:grid-cols-5 lg:gap-5">
                  {kaizenOverview.points.map((point) => (
                    <li
                      key={point}
                      className="flex w-[17rem] shrink-0 gap-3 rounded-2xl border border-border bg-cream-muted p-4 text-sm leading-relaxed text-black md:w-[18rem] md:p-5 md:text-base lg:w-auto lg:shrink"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange"
                        aria-hidden
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              className="lg:grid lg:grid-cols-2 lg:gap-10 xl:gap-14"
              aria-labelledby="kaizen-my-role-heading"
            >
              <div>
                <div className="mb-5 flex flex-col items-start gap-3">
                  <div className="relative h-[4.5rem] w-[4rem] shrink-0 overflow-hidden rounded-[50%] bg-soft-pink ring-2 ring-orange/15 sm:h-20 sm:w-[4.5rem]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={kaizenMyRole.avatar}
                      alt={kaizenMyRole.avatarAlt}
                      className="h-full w-full object-cover object-[center_15%]"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h2
                    id="kaizen-my-role-heading"
                    className="text-xs font-semibold uppercase tracking-[0.2em] text-orange"
                  >
                    {kaizenMyRole.title}
                  </h2>
                </div>
                <div className="space-y-4 text-base leading-relaxed text-black md:text-lg">
                  <p>{kaizenMyRole.lead}</p>
                  <p>{kaizenMyRole.body}</p>
                </div>
              </div>
              <ul className="mt-6 flex flex-col gap-3 lg:mt-0 lg:justify-center">
                {kaizenMyRole.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-3 text-sm leading-relaxed text-black md:text-base"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange"
                      aria-hidden
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge */}
      <section
        id="challenge"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="kaizen-challenge-heading"
      >
        <div className={caseStudyContainer}>
          <div className="lg:grid lg:grid-cols-[minmax(0,42%)_minmax(0,58%)] lg:items-center lg:gap-10 xl:grid-cols-[minmax(0,40%)_minmax(0,60%)] xl:gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
              className="min-w-0"
            >
              <CaseStudyLabel>{kaizenChallenge.label}</CaseStudyLabel>
              <CaseStudyHeadline id="kaizen-challenge-heading">
                {kaizenChallenge.headline}
              </CaseStudyHeadline>
              <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
                {kaizenChallenge.body}
              </p>
              <p className="mt-8 border-l-2 border-orange pl-6 text-base font-medium leading-relaxed text-black md:text-lg">
                {kaizenChallenge.hmw}
              </p>
              <ul className="mt-8 flex flex-col gap-3">
                {kaizenChallenge.challenges.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-black md:text-base"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.1}
              variants={caseStudyFadeUp}
              className="mt-10 min-w-0 w-full lg:mt-0"
            >
              <MockupImage
                src={kaizenChallenge.image}
                alt={kaizenChallenge.imageAlt}
                className="w-full max-w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research */}
      <section
        id="research"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="kaizen-research-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>{kaizenResearch.label}</CaseStudyLabel>
            <CaseStudyHeadline id="kaizen-research-heading">
              {kaizenResearch.headline}
            </CaseStudyHeadline>
            <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
              {kaizenResearch.body}
            </p>
            <p className="mt-4 text-base leading-relaxed text-grey md:text-lg">
              {kaizenResearch.recruitment}
            </p>
          </motion.div>
          <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-12 xl:gap-16">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-orange">
                Research inputs
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {kaizenResearch.inputs.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-border bg-cream-muted p-4 text-sm leading-relaxed text-black md:text-base"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-orange">
                What I was trying to learn
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {kaizenResearch.learningGoals.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-border bg-cream-muted p-4 text-sm leading-relaxed text-black md:text-base"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Insight */}
      <section
        id="insight"
        className={cn(caseStudySection, "bg-cream")}
        aria-labelledby="kaizen-insight-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>{kaizenInsight.label}</CaseStudyLabel>
            <CaseStudyHeadline id="kaizen-insight-heading">
              {kaizenInsight.headline}
            </CaseStudyHeadline>
            <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
              {kaizenInsight.body}
            </p>
          </motion.div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {kaizenInsight.points.map((point, index) => (
              <motion.li
                key={point}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                custom={index * 0.04}
                variants={caseStudyFadeUp}
                className="rounded-2xl border border-border bg-white p-6"
              >
                <p className="text-sm font-bold leading-snug text-black md:text-base">
                  {point}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <CaseStudyQuote text={kaizenQuotes[0]} />

      {/* Visual direction */}
      <section
        id="visual-direction"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="kaizen-visual-direction-heading"
      >
        <div className={caseStudyContainer}>
          <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-10 xl:gap-14">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
              className="min-w-0"
            >
              <CaseStudyLabel>{kaizenVisualDirection.label}</CaseStudyLabel>
              <CaseStudyHeadline id="kaizen-visual-direction-heading">
                {kaizenVisualDirection.headline}
              </CaseStudyHeadline>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-black md:text-lg">
                {kaizenVisualDirection.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              custom={0.06}
              variants={caseStudyFadeUp}
              className="mt-10 flex min-w-0 items-center justify-center lg:mt-0"
            >
              <MockupImage
                src={kaizenVisualDirection.heroImage.src}
                alt={kaizenVisualDirection.heroImage.alt}
                className="w-full max-w-sm sm:max-w-md lg:max-w-lg"
              />
            </motion.div>
          </div>

          <div className="-mx-6 mt-12 overflow-x-auto px-6 scrollbar-none xl:mx-0 xl:overflow-visible xl:px-0">
            <ul className="flex min-w-max gap-4 xl:min-w-0 xl:grid xl:grid-cols-4 xl:gap-5">
            {kaizenVisualDirection.routes.map((route, index) => {
              const Icon = visualDirectionIcons[route.icon];
              return (
                <motion.li
                  key={route.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                  custom={index * 0.04}
                  variants={caseStudyFadeUp}
                  className="w-[17rem] shrink-0 rounded-2xl border border-border bg-cream-muted p-6 md:w-[18rem] xl:w-auto xl:shrink"
                >
                  <div
                    className={cn(
                      iconWrap,
                      "mb-4 h-11 w-11",
                      index % 2 === 1 && "bg-soft-pink",
                    )}
                  >
                    <Icon className="h-5 w-5 text-orange" strokeWidth={1.75} />
                  </div>
                  <p className="text-sm font-bold text-black md:text-base">
                    {route.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-grey md:text-base">
                    {route.hypothesis}
                  </p>
                </motion.li>
              );
            })}
            </ul>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="mt-16 max-w-3xl lg:mt-20"
          >
            <h3 className="text-2xl font-bold text-black md:text-3xl">
              {kaizenVisualDirection.researchFinding.headline}
            </h3>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-black md:text-lg">
              {kaizenVisualDirection.researchFinding.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="mt-16 lg:mt-20"
          >
            <h3 className="text-2xl font-bold text-black md:text-3xl">
              {kaizenVisualDirection.constraint.headline}
            </h3>
            <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-black md:text-lg">
              {kaizenVisualDirection.constraint.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-8 border-l-2 border-orange pl-6 text-base font-bold leading-relaxed text-black md:text-lg">
              Design decision: {kaizenVisualDirection.constraint.decision}
            </p>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-grey md:text-lg">
              {kaizenVisualDirection.constraint.supporting}
            </p>
          </motion.div>

          <p className="mt-16 max-w-3xl text-base leading-relaxed text-black md:text-lg lg:mt-20">
            {kaizenVisualDirection.transitionToAi}
          </p>
        </div>
      </section>

      {/* AI conversation */}
      <section
        id="ai-conversation"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="kaizen-ai-conversation-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>{kaizenAiConversation.label}</CaseStudyLabel>
            <CaseStudyHeadline id="kaizen-ai-conversation-heading">
              {kaizenAiConversation.headline}
            </CaseStudyHeadline>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-black md:text-lg">
              {kaizenAiConversation.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="mt-12 max-w-3xl lg:mt-14"
          >
            <h3 className="text-2xl font-bold text-black md:text-3xl">
              {kaizenAiConversation.challenge.headline}
            </h3>
            <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
              {kaizenAiConversation.challenge.body}
            </p>
            <div className="mt-8">
              <BulletList items={kaizenAiConversation.challenge.requirements} />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={caseStudyFadeUp}
            className="mt-12 lg:mt-14"
          >
            <ReservedMediaArea
              src={kaizenAiConversation.media.src}
              alt={kaizenAiConversation.media.alt}
              placeholderLabel={kaizenAiConversation.media.placeholderLabel}
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="mt-16 max-w-3xl lg:mt-20"
          >
            <h3 className="text-2xl font-bold text-black md:text-3xl">
              {kaizenAiConversation.support.headline}
            </h3>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-black md:text-lg">
              {kaizenAiConversation.support.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          <div className="mt-16 lg:mt-20">
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-orange">
              Interaction states
            </h3>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {kaizenAiConversation.states.map((state, index) => (
                <motion.li
                  key={state.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                  custom={index * 0.04}
                  variants={caseStudyFadeUp}
                  className="rounded-2xl border border-border bg-white p-6"
                >
                  <p className="text-sm font-bold text-black md:text-base">
                    {state.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-grey">
                    <span className="font-semibold text-black">Learner need:</span>{" "}
                    {state.learnerNeed}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-grey">
                    <span className="font-semibold text-black">Design response:</span>{" "}
                    {state.designResponse}
                  </p>
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="mt-16 lg:mt-20"
          >
            <h3 className="text-2xl font-bold text-black md:text-3xl">
              {kaizenAiConversation.delivery.headline}
            </h3>
            <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-black md:text-lg">
              {kaizenAiConversation.delivery.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <KpiCallout icon="trending" className="mt-8 max-w-3xl">
              {kaizenAiConversation.delivery.closing}
            </KpiCallout>
          </motion.div>

          <p className="mt-16 max-w-3xl text-base leading-relaxed text-black md:text-lg lg:mt-20">
            {kaizenAiConversation.transitionToLesson}
          </p>
        </div>
      </section>

      {/* Lesson */}
      <section
        id="lesson"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="kaizen-lesson-heading"
      >
        <div className={caseStudyContainer}>
          <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
            >
              <CaseStudyLabel>{kaizenLesson.label}</CaseStudyLabel>
              <CaseStudyHeadline id="kaizen-lesson-heading">
                {kaizenLesson.headline}
              </CaseStudyHeadline>
              <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
                {kaizenLesson.body}
              </p>
              <div className="mt-8">
                <BulletList items={kaizenLesson.designed} />
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.1}
              variants={caseStudyFadeUp}
              className="mt-10 min-w-0 lg:mt-0"
            >
              <figure>
                <figcaption className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-orange">
                  AI chat lesson interface
                </figcaption>
                <div className="relative mx-auto w-full max-w-[calc(16rem+100px)] sm:max-w-[calc(18rem+100px)]">
                  <div
                    className="pointer-events-none absolute left-1/2 top-[6%] z-0 aspect-square w-[92%] -translate-x-1/2 rounded-full bg-soft-pink"
                    aria-hidden
                  />
                  <MockupImage
                    src={kaizenLesson.image}
                    alt={kaizenLesson.imageAlt}
                    className="relative z-10 w-full"
                  />
                </div>
              </figure>
            </motion.div>
          </div>

          <div className="mt-16 border-t border-border pt-12 lg:mt-20 lg:pt-14">
            <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-12 xl:gap-16">
              <div>
                <h3 className="text-2xl font-bold text-black md:text-3xl">
                  {kaizenLesson.testingHeadline}
                </h3>
                <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
                  {kaizenLesson.testingBody}
                </p>
                <p className="mt-8 border-l-2 border-orange pl-6 text-base font-medium leading-relaxed text-black md:text-lg">
                  {kaizenLesson.testingTakeaway}
                </p>
              </div>
              <div className="mt-8 lg:mt-0">
                <MockupImage
                  src="/images/work/kaizen-languages/photo-research.png"
                  alt="Working session photograph from Kaizen Languages user testing and research."
                  className="mx-auto w-full max-w-[calc(24rem+100px)] lg:ml-0"
                />
              </div>
            </div>
          </div>

          {/* Suggestion */}
          <div className="mt-16 border-t border-border pt-12 lg:mt-20 lg:pt-14">
            <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-16">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.1}
                variants={caseStudyFadeUp}
                className="order-2 lg:order-1"
              >
                <MockupImage
                  src={kaizenSuggestion.image}
                  alt={kaizenSuggestion.imageAlt}
                  className="mx-auto w-full max-w-[calc(28rem+100px)]"
                />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={caseStudyFadeUp}
                className="order-1 lg:order-2"
              >
                <CaseStudyLabel>{kaizenSuggestion.label}</CaseStudyLabel>
                <h3 className="text-2xl font-bold text-black md:text-3xl">
                  {kaizenSuggestion.headline}
                </h3>
                <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
                  {kaizenSuggestion.body}
                </p>
                <div className="mt-8">
                  <BulletList items={kaizenSuggestion.why} />
                </div>
                <KpiCallout icon="trending" className="mt-8">
                  {kaizenSuggestion.result}
                </KpiCallout>
              </motion.div>
            </div>
          </div>

          {/* Iteration */}
          <div className="mt-20 border-t border-border pt-16 lg:mt-24 lg:pt-20">
            <CaseStudyLabel>{kaizenIteration.label}</CaseStudyLabel>
            <h3 className="mt-2 text-2xl font-bold text-black md:text-3xl">
              {kaizenIteration.headline}
            </h3>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <motion.article
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={caseStudyFadeUp}
                className="rounded-2xl border border-border bg-cream-muted p-6 md:p-7"
              >
                <h4 className="font-bold text-black">{kaizenIteration.before.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-grey md:text-base">
                  {kaizenIteration.before.body}
                </p>
              </motion.article>
              <motion.article
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                custom={0.05}
                variants={caseStudyFadeUp}
                className="rounded-2xl border border-orange/25 bg-white p-6 md:p-7"
              >
                <h4 className="font-bold text-black">{kaizenIteration.after.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-grey md:text-base">
                  {kaizenIteration.after.body}
                </p>
              </motion.article>
            </div>
            <p className="mt-8 border-l-2 border-orange pl-6 text-base font-medium leading-relaxed text-black md:text-lg">
              {kaizenIteration.result}
            </p>
          </div>
        </div>
      </section>

      {/* Strategy */}
      <section
        id="strategy"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="kaizen-strategy-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>{kaizenStrategy.label}</CaseStudyLabel>
            <CaseStudyHeadline id="kaizen-strategy-heading">
              {kaizenStrategy.headline}
            </CaseStudyHeadline>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-black md:text-lg">
              <p>{kaizenStrategy.body}</p>
              <p>{kaizenStrategy.body2}</p>
              <p>{kaizenStrategy.body3}</p>
            </div>
            <p className="mt-8 border-l-2 border-orange pl-6 text-base font-bold leading-relaxed text-black md:text-lg">
              Design decision: {kaizenStrategy.decision}
            </p>
          </motion.div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {kaizenStrategy.points.map((point, index) => (
              <motion.li
                key={point}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                custom={index * 0.04}
                variants={caseStudyFadeUp}
                className="rounded-2xl border border-border bg-white p-6"
              >
                <p className="text-sm leading-relaxed text-black md:text-base">
                  {point}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Writing */}
      <section
        id="writing"
        className={cn(caseStudySection, "bg-white !pb-0")}
        aria-labelledby="kaizen-writing-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>{kaizenWriting.label}</CaseStudyLabel>
            <CaseStudyHeadline id="kaizen-writing-heading">
              {kaizenWriting.headline}
            </CaseStudyHeadline>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-black md:text-lg">
              <p>{kaizenWriting.body}</p>
              <p>{kaizenWriting.body2}</p>
            </div>
          </motion.div>

          <div className="mt-12 lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <div>
              <h3 className="font-bold text-black">Learning model</h3>
              <BulletList items={kaizenWriting.learningModel} />
              <p className="mt-8 text-sm leading-relaxed text-grey md:text-base">
                {kaizenWriting.interaction}
              </p>
              <div className="mt-8 flex flex-col gap-4">
                {kaizenWriting.levels.map((level) => (
                  <div
                    key={level.title}
                    className="rounded-2xl border border-border bg-cream-muted p-5"
                  >
                    <p className="font-bold text-black">{level.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-grey">
                      {level.copy}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <MockupImage
              src={kaizenWriting.heroImage}
              alt={kaizenWriting.heroAlt}
              className="mt-10 lg:mt-0"
            />
          </div>

          <figure className="mt-16">
            <figcaption className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-orange">
              {kaizenWriting.flowLabel}
            </figcaption>
            <div className="flex justify-center">
              <MockupImage
                src={kaizenWriting.characterImage}
                alt={kaizenWriting.characterAlt}
                className="w-full max-w-3xl md:max-w-4xl"
              />
            </div>
          </figure>

          <div className="mt-10 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start lg:gap-10 xl:gap-12">
            <div>
              <p className="text-sm leading-relaxed text-grey md:text-base">
                {kaizenWriting.quiz}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-grey md:text-base">
                {kaizenWriting.collaboration}
              </p>
            </div>
            <div className="mt-8 flex justify-center lg:mt-0 lg:justify-end">
              <KpiCallout
                icon="star"
                className="w-full max-w-[32rem] sm:max-w-[34rem] lg:w-[34rem]"
              >
                62% NPS in testing, 12% above average. {kaizenWriting.result}
              </KpiCallout>
            </div>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={caseStudyFadeUp}
          className="mt-16 w-full leading-none lg:mt-20"
          style={{ backgroundColor: kaizenWriting.showcaseBackground }}
        >
          <div className={cn(caseStudyContainer, "!px-0")}>
            <MockupImage
              src={kaizenWriting.showcaseImage}
              alt={kaizenWriting.showcaseAlt}
              width={4000}
              height={1869}
              className="mx-auto block w-full object-contain"
            />
          </div>
        </motion.div>
      </section>

      <CaseStudyQuote text={kaizenQuotes[1]} />

      {/* Gamification */}
      <section
        id="gamification"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="kaizen-gamification-heading"
      >
        <div className={caseStudyContainer}>
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-12 xl:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
            >
              <CaseStudyLabel>{kaizenGamification.label}</CaseStudyLabel>
              <CaseStudyHeadline id="kaizen-gamification-heading">
                {kaizenGamification.headline}
              </CaseStudyHeadline>
              <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
                {kaizenGamification.body}
              </p>
              <BulletList items={kaizenGamification.why} />
              <p className="mt-8 text-base leading-relaxed text-black md:text-lg">
                {kaizenGamification.approach}
              </p>
              <h3 className="mt-10 font-bold text-black">Visual system</h3>
              <BulletList items={kaizenGamification.visualSystem} />
              <h3 className="mt-10 font-bold text-black">
                Writing exercise connection
              </h3>
              <BulletList items={kaizenGamification.writingConnection} />
            </motion.div>
            <MockupImage
              src={kaizenGamification.image}
              alt={kaizenGamification.imageAlt}
              className="mt-10 lg:mt-0"
            />
          </div>

        </div>
      </section>

      {/* Conversion */}
      <section
        id="conversion"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="kaizen-conversion-heading"
      >
        <div className={caseStudyContainer}>
          <CaseStudyLabel>{kaizenConversion.label}</CaseStudyLabel>
          <h2
            id="kaizen-conversion-heading"
            className="text-balance font-black tracking-tight text-black text-3xl leading-[1.05] sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.5rem]"
          >
            <span className="block">{kaizenConversion.sectionHeadline.line1}</span>
            <span className="block">
              {kaizenConversion.sectionHeadline.line2}
              <span className="text-orange">.</span>
            </span>
          </h2>

          <div className="mt-6 space-y-20 lg:mt-8 lg:space-y-24">
            {[
              kaizenConversion.freeLessons,
              kaizenConversion.paywall,
              kaizenConversion.onboarding,
            ].map((block, index) => (
              <div
                key={block.headline}
                className={cn(
                  index > 0 && "border-t border-border pt-20 lg:pt-24",
                )}
              >
                <div
                  className={cn(
                    "image" in block && block.image
                      ? cn(
                          "min-w-0 lg:grid lg:items-start lg:gap-12 xl:gap-16",
                          index === 1
                            ? "lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
                            : "lg:grid-cols-[minmax(0,1fr)_auto]",
                        )
                      : "max-w-3xl",
                  )}
                >
                  <div className="min-w-0">
                    <h3 className="text-2xl font-bold text-black md:text-3xl">
                      {block.headline}
                    </h3>
                    <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
                      {block.body}
                    </p>
                    {"point" in block &&
                      typeof block.point === "string" &&
                      block.point && (
                      <p className="mt-6 text-sm leading-relaxed text-grey md:text-base">
                        {block.point}
                      </p>
                    )}
                    {"results" in block && block.results && (
                      <ul className="mt-8 flex flex-col gap-3">
                        {block.results.map((r) => (
                          <li
                            key={r}
                            className="flex gap-3 text-sm md:text-base"
                          >
                            <span
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange"
                              aria-hidden
                            />
                            <span className="leading-relaxed text-black">
                              {r}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {"result" in block && block.result && (
                      <KpiCallout icon="trending" className="mt-8">
                        {block.result}
                      </KpiCallout>
                    )}
                  </div>
                  {"image" in block && block.image && (
                    <div
                      className={cn(
                        "mt-10 flex min-w-0 justify-center lg:mt-0 lg:justify-end",
                        index === 1 && "lg:justify-center xl:justify-end",
                      )}
                    >
                      <MockupImage
                        src={block.image}
                        alt={block.imageAlt}
                        className={cn(
                          "w-full",
                          index === 1
                            ? "max-w-xl sm:max-w-2xl lg:max-w-[36rem] xl:max-w-[44rem]"
                            : "max-w-[calc(100%-100px)] lg:max-w-[22rem]",
                        )}
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CaseStudyQuote text={kaizenQuotes[2]} />

      <CaseStudyProof
        content={kaizenProof}
        headingId="kaizen-proof-heading"
        sectionClassName="bg-cream"
        cardClassName="bg-white"
      />

      {/* Impact */}
      <section
        id="impact"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="kaizen-impact-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>{kaizenImpact.label}</CaseStudyLabel>
            <CaseStudyHeadline id="kaizen-impact-heading">
              {kaizenImpact.headline}
            </CaseStudyHeadline>
            <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
              {kaizenImpact.intro}
            </p>
            <p className="mt-4 text-base leading-relaxed text-grey md:text-lg">
              {kaizenImpact.analyticsNote}
            </p>
          </motion.div>

          <div className="-mx-6 mt-12 overflow-x-auto px-6 scrollbar-none lg:mx-0 lg:mt-14 lg:overflow-visible lg:px-0">
            <div className="flex min-w-max gap-4 lg:min-w-0 lg:grid lg:grid-cols-4 lg:gap-5">
              {kaizenImpact.metrics.map((item, index) => {
                const metricIcon = getMetricIcon(item.metric);
                return (
                  <motion.article
                    key={item.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    custom={index * 0.05}
                    variants={caseStudyFadeUp}
                    className="w-[17rem] shrink-0 rounded-2xl border border-border bg-white p-6 md:w-[18rem] md:p-7 lg:w-auto lg:shrink"
                  >
                    <div className="flex items-start gap-3">
                      <KpiIconBadge icon={metricIcon} />
                      <p className="text-2xl font-black leading-none text-orange md:text-3xl">
                        {item.metric}
                      </p>
                    </div>
                    <h3 className="mt-3 text-sm font-bold leading-snug text-black md:text-base">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-grey">
                      {item.copy}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Decisions */}
      <section
        id="decisions"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="kaizen-decisions-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>{kaizenDecisions.label}</CaseStudyLabel>
            <CaseStudyHeadline id="kaizen-decisions-heading">
              {kaizenDecisions.headline}
            </CaseStudyHeadline>
          </motion.div>
          <div className="-mx-6 mt-12 overflow-x-auto px-6 scrollbar-none lg:mx-0 lg:mt-16 lg:overflow-visible lg:px-0">
            <div className="flex min-w-max gap-4 lg:min-w-0 lg:grid lg:grid-cols-5 lg:gap-5">
              {kaizenDecisions.items.map((item, index) => {
                const Icon = decisionIcons[item.icon];
                return (
                  <motion.article
                    key={item.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    custom={index * 0.05}
                    variants={caseStudyFadeUp}
                    className="w-[17rem] shrink-0 rounded-2xl border border-border bg-cream-muted p-6 md:w-[18rem] md:p-7 lg:w-auto lg:shrink"
                  >
                    <div
                      className={cn(
                        iconWrap,
                        "mb-5 h-12 w-12",
                        index % 2 === 1 && "bg-soft-pink",
                      )}
                    >
                      <Icon className="h-5 w-5 text-orange" strokeWidth={1.75} />
                    </div>
                    <h3 className="font-bold text-black">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-grey md:text-base">
                      {item.copy}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section
        id="reflection"
        className={cn(caseStudySection, "bg-cream")}
        aria-labelledby="kaizen-reflection-heading"
      >
        <div className={caseStudyContainer}>
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-12 xl:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
              className="min-w-0 max-w-3xl"
            >
              <CaseStudyLabel>{kaizenReflection.label}</CaseStudyLabel>
              <CaseStudyHeadline id="kaizen-reflection-heading">
                {kaizenReflection.headline}
              </CaseStudyHeadline>
              <p className="mt-8 text-lg font-medium leading-relaxed text-black md:text-xl">
                {kaizenReflection.lead}
              </p>
              <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
                {kaizenReflection.body}
              </p>
              <p className="mt-8 border-l-2 border-orange pl-6 text-base font-medium leading-relaxed text-black md:text-lg">
                {kaizenReflection.shift}
              </p>
              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.15em] text-orange">
                Designing for learning behaviour required balancing
              </p>
              <BulletList items={kaizenReflection.balance} />
              <p className="mt-8 text-base leading-relaxed text-grey md:text-lg">
                {kaizenReflection.closing}
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              custom={0.1}
              variants={caseStudyFadeUp}
              className="mt-10 flex justify-center lg:sticky lg:top-32 lg:mt-0"
            >
              <MockupImage
                src={kaizenReflection.animationImage}
                alt={kaizenReflection.animationAlt}
                width={402}
                height={800}
                className="w-full max-w-[14rem] object-contain sm:max-w-[16rem] lg:max-w-[18rem] xl:max-w-[20rem]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Retention */}
      <section
        id="retention"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="kaizen-retention-heading"
      >
        <div className={caseStudyContainer}>
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-12 xl:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
            >
              <CaseStudyLabel>{kaizenRetention.label}</CaseStudyLabel>
              <CaseStudyHeadline id="kaizen-retention-heading">
                {kaizenRetention.headline}
              </CaseStudyHeadline>
              <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
                {kaizenRetention.body}
              </p>
            </motion.div>
            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
              className="mt-10 flex flex-col gap-4 lg:mt-0"
            >
              {kaizenRetention.results.map((result) => (
                <li
                  key={result}
                  className="rounded-2xl border border-border bg-cream-muted p-5 text-sm font-medium leading-relaxed text-black md:text-base"
                >
                  {result}
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={caseStudyFadeUp}
          className="mt-16 w-full lg:mt-20"
        >
          <MockupImage
            src={kaizenRetention.image}
            alt={kaizenRetention.imageAlt}
            className="w-full"
          />
        </motion.div>
      </section>
    </>
  );
}
