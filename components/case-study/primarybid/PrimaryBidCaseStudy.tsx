"use client";

import type { ReactNode } from "react";
import { useCallback, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  ClipboardList,
  Compass,
  Eye,
  Layers,
  Maximize2,
  Monitor,
  Repeat,
  RotateCcw,
  Search,
  Smartphone,
  Tablet,
  UserCog,
  X,
} from "lucide-react";
import CaseStudyLabel from "@/components/case-study/CaseStudyLabel";
import CaseStudyHeadline from "@/components/case-study/CaseStudyHeadline";
import CaseStudyMockupImage from "@/components/case-study/CaseStudyMockupImage";
import CaseStudyProjectNav from "@/components/case-study/CaseStudyProjectNav";
import CaseStudySubnav from "@/components/case-study/CaseStudySubnav";
import { caseStudyFadeUp } from "@/components/case-study/case-study-motion";
import {
  caseStudyContainer,
  caseStudyHeroImageColumn,
  caseStudyHeroRow,
  caseStudySection,
} from "@/lib/case-study-layout";
import {
  primaryBidAdditional,
  primaryBidArchetypes,
  primaryBidBroker,
  primaryBidChallenge,
  primaryBidComponents,
  primaryBidCrossChannel,
  primaryBidEngineering,
  primaryBidHero,
  primaryBidLearn,
  primaryBidMentoring,
  primaryBidMyRole,
  primaryBidObservingDecisions,
  primaryBidOpportunity,
  primaryBidOrders,
  primaryBidOutcome,
  primaryBidPayment,
  primaryBidPrinciples,
  primaryBidProjectNav,
  primaryBidRecovery,
  primaryBidResponsiveOffer,
  primaryBidStructuring,
  primaryBidSubnav,
  primaryBidTimeSensitive,
  primaryBidValidatingDemand,
  primaryBidVerbatims,
  primaryBidWiderContribution,
} from "@/lib/primarybid-data";
import { cn } from "@/lib/utils";

const principleIcons = {
  eye: Eye,
  search: Search,
  repeat: Repeat,
};

const deviceIcons = {
  desktop: Monitor,
  tablet: Tablet,
  mobile: Smartphone,
};

const orderOutcomeIcons = {
  visibility: ClipboardList,
  control: UserCog,
  discovery: Compass,
};

const additionalImprovementIcons = {
  recovery: RotateCcw,
  broker: Building2,
  ipo: Layers,
};

function InsightCallout({ children }: { children: ReactNode }) {
  return (
    <div className="border-l-2 border-orange pl-6 text-base font-medium leading-relaxed text-black md:text-lg">
      {children}
    </div>
  );
}

function HighlightPanel({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-orange/20 bg-[#FFF0E8] p-6 md:p-8">
      <InsightCallout>{children}</InsightCallout>
    </div>
  );
}

function QuoteAvatar({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-[50%] bg-soft-pink ring-2 ring-orange/15 sm:h-12 sm:w-12">
      <CaseStudyMockupImage
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
      />
    </div>
  );
}

function JourneyPills({ steps }: { steps: readonly string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {steps.map((step, index) => (
        <span key={step} className="flex items-center gap-2">
          <span className="rounded-full bg-[#FFE4D6] px-3 py-1.5 text-xs font-semibold text-black md:text-sm">
            {step}
          </span>
          {index < steps.length - 1 ? (
            <ArrowRight className="h-3.5 w-3.5 shrink-0 text-orange" aria-hidden />
          ) : null}
        </span>
      ))}
    </div>
  );
}

function ExpandableImage({
  src,
  alt,
  minWidth = "48rem",
}: {
  src: string;
  alt: string;
  minWidth?: string;
}) {
  const [open, setOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  return (
    <figure>
      <div className="relative">
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
          <div style={{ minWidth }} className="min-w-[36rem] sm:min-w-[42rem]">
            <CaseStudyMockupImage
              src={src}
              alt={alt}
              className="w-full rounded-xl border border-border bg-white"
            />
          </div>
        </div>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-black transition-colors hover:border-orange hover:text-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
        >
          <Maximize2 className="h-3.5 w-3.5" aria-hidden />
          Expand diagram
        </button>
      </div>

      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`Expanded view: ${alt}`}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 rounded-full bg-white p-2 text-black transition-colors hover:text-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange md:right-8 md:top-8"
            aria-label="Close expanded image"
          >
            <X className="h-5 w-5" />
          </button>
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="max-h-[90vh] max-w-6xl overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <CaseStudyMockupImage
              src={src}
              alt={alt}
              className="h-auto w-full max-w-6xl object-contain"
            />
          </motion.div>
        </div>
      ) : null}
    </figure>
  );
}

function SectionIntro({
  label,
  headline,
  headlineId,
  children,
  className,
}: {
  label: string;
  headline: string;
  headlineId: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={caseStudyFadeUp}
      className={cn("max-w-3xl", className)}
    >
      <CaseStudyLabel>{label}</CaseStudyLabel>
      <CaseStudyHeadline id={headlineId}>{headline}</CaseStudyHeadline>
      {children}
    </motion.div>
  );
}

export default function PrimaryBidCaseStudy() {
  return (
    <>
      <CaseStudySubnav
        items={primaryBidSubnav}
        ariaLabel="PrimaryBid case-study sections"
      />

      {/* Hero + My role + Chapter 1 */}
      <section
        id="overview"
        className={cn(
          caseStudySection,
          "overflow-hidden bg-gradient-to-b from-white via-white to-cream-muted pt-12 md:overflow-visible md:pt-16 lg:pt-20",
        )}
        aria-labelledby="primarybid-title"
      >
        <div className={caseStudyContainer}>
          <div className={cn(caseStudyHeroRow, "md:items-start")}>
            <motion.div
              custom={0}
              variants={caseStudyFadeUp}
              initial="hidden"
              animate="visible"
              className="flex-1 pb-4 md:max-w-[42%] xl:max-w-[44%]"
            >
              <CaseStudyLabel>{primaryBidHero.label}</CaseStudyLabel>
              <CaseStudyHeadline as="h1" id="primarybid-title">
                {primaryBidHero.title}
              </CaseStudyHeadline>
              <p className="mt-8 max-w-lg border-l-2 border-orange pl-6 text-base leading-relaxed text-black md:mt-10 md:text-lg">
                {primaryBidHero.subcopy}
              </p>
              <dl className="mt-10 flex flex-col gap-5 lg:mt-12">
                {primaryBidHero.meta.map((item) => (
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
            </motion.div>

            <div className={cn("relative justify-end", caseStudyHeroImageColumn)}>
              <div className="relative mx-auto w-full max-w-[20rem] sm:max-w-[24rem] md:ml-auto md:mr-0 md:max-w-[28rem] lg:max-w-[32rem] xl:max-w-[36rem]">
                <CaseStudyMockupImage
                  src={primaryBidHero.image}
                  alt={primaryBidHero.imageAlt}
                  priority
                  width={1585}
                  height={1916}
                  className="relative z-10 w-full object-contain object-bottom"
                />
              </div>
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={caseStudyFadeUp}
            className="mt-12 border-t border-border pt-10 md:pt-12"
            aria-labelledby="pb-my-role-heading"
          >
            <div>
              <div className="mb-5 flex flex-col items-start gap-3">
                <div className="relative h-[4.5rem] w-[4rem] shrink-0 overflow-hidden rounded-[50%] bg-soft-pink ring-2 ring-orange/15 sm:h-20 sm:w-[4.5rem]">
                  <CaseStudyMockupImage
                    src={primaryBidMyRole.avatar}
                    alt={primaryBidMyRole.avatarAlt}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h2
                  id="pb-my-role-heading"
                  className="text-2xl font-black tracking-tight text-black md:text-3xl"
                >
                  {primaryBidMyRole.title}
                </h2>
              </div>
              <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-10 xl:gap-14">
                <div className="space-y-4 text-base leading-relaxed text-black md:text-lg">
                  {primaryBidMyRole.body.slice(0, 2).map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div className="mt-8 space-y-4 text-base leading-relaxed text-black md:mt-0 md:text-lg">
                  {primaryBidMyRole.body.slice(2).map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="challenge"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="pb-challenge-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
          >
            <SectionIntro
              label={primaryBidChallenge.label}
              headline={primaryBidChallenge.headline}
              headlineId="pb-challenge-heading"
            >
              <div className="mt-6 space-y-4 text-base leading-relaxed text-black md:text-lg">
                {primaryBidChallenge.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </SectionIntro>
            <figure className="mt-10">
              <CaseStudyMockupImage
                src={primaryBidChallenge.image}
                alt={primaryBidChallenge.imageAlt}
                className="w-full rounded-xl border border-border"
              />
            </figure>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="mt-16 md:mt-20"
          >
            <CaseStudyLabel>{primaryBidOpportunity.label}</CaseStudyLabel>
            <HighlightPanel>
              <p className="text-lg font-bold text-black md:text-xl">
                {primaryBidOpportunity.insight}
              </p>
            </HighlightPanel>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-black md:text-lg">
              {primaryBidOpportunity.body}
            </p>
            <div className="mt-8">
              <JourneyPills steps={primaryBidOpportunity.journey} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chapter 2 — Research */}
      <section
        id="research"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="pb-validating-heading"
      >
        <div className={caseStudyContainer}>
          <SectionIntro
            label={primaryBidValidatingDemand.label}
            headline={primaryBidValidatingDemand.headline}
            headlineId="pb-validating-heading"
          >
            <div className="mt-6 space-y-4 text-base leading-relaxed text-black md:text-lg">
              {primaryBidValidatingDemand.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </SectionIntro>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 xl:grid-cols-5">
            {primaryBidValidatingDemand.metrics.map((metric, index) => (
              <motion.article
                key={metric.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                custom={index * 0.04}
                variants={caseStudyFadeUp}
                className="rounded-2xl border border-border bg-white p-6"
              >
                <p className="text-3xl font-black leading-none text-orange md:text-4xl">
                  {metric.value}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-grey">
                  {metric.label}
                </p>
              </motion.article>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-grey">
            {primaryBidValidatingDemand.note}
          </p>
        </div>
      </section>

      <section
        id="archetypes"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="pb-archetypes-heading"
      >
        <div className={caseStudyContainer}>
          <SectionIntro
            label={primaryBidArchetypes.label}
            headline={primaryBidArchetypes.headline}
            headlineId="pb-archetypes-heading"
          >
            <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
              {primaryBidArchetypes.intro}
            </p>
          </SectionIntro>

          <figure className="mt-10">
            <CaseStudyMockupImage
              src={primaryBidArchetypes.image}
              alt={primaryBidArchetypes.imageAlt}
              className="w-full rounded-xl border border-border"
            />
          </figure>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {primaryBidArchetypes.archetypes.map((archetype, index) => (
              <motion.article
                key={archetype.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                custom={index * 0.04}
                variants={caseStudyFadeUp}
                className="rounded-2xl border border-border bg-white p-5 md:p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-orange">
                  {archetype.share}
                </p>
                <h3 className="mt-2 font-bold text-black">{archetype.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-grey">
                  {archetype.copy}
                </p>
              </motion.article>
            ))}
          </div>

          <div className="mt-10 max-w-3xl">
            <HighlightPanel>{primaryBidArchetypes.implication}</HighlightPanel>
          </div>
        </div>
      </section>

      <section
        id="verbatims"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="pb-verbatims-heading"
      >
        <div className={caseStudyContainer}>
          <SectionIntro
            label={primaryBidVerbatims.label}
            headline={primaryBidVerbatims.headline}
            headlineId="pb-verbatims-heading"
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {primaryBidVerbatims.quotes.map((quote, index) => (
              <motion.blockquote
                key={quote.text}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                custom={index * 0.04}
                variants={caseStudyFadeUp}
                className="rounded-2xl border border-border bg-[#FFF0E8] p-6 md:p-7"
              >
                <div className="flex gap-4">
                  <QuoteAvatar src={quote.avatar} alt={quote.avatarAlt} />
                  <p className="text-base font-medium leading-relaxed text-black md:text-lg">
                    &ldquo;{quote.text}&rdquo;
                  </p>
                </div>
              </motion.blockquote>
            ))}
          </div>

          <p className="mt-8 max-w-3xl text-base leading-relaxed text-black md:text-lg">
            {primaryBidVerbatims.summary}
          </p>
          <div className="mt-8 max-w-3xl">
            <HighlightPanel>{primaryBidVerbatims.closing}</HighlightPanel>
          </div>
        </div>
      </section>

      <section
        id="observing"
        className={cn(caseStudySection, "bg-cream")}
        aria-labelledby="pb-observing-heading"
      >
        <div className={caseStudyContainer}>
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-12 xl:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
            >
              <CaseStudyLabel>{primaryBidObservingDecisions.label}</CaseStudyLabel>
              <CaseStudyHeadline id="pb-observing-heading">
                {primaryBidObservingDecisions.headline}
              </CaseStudyHeadline>
              <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
                {primaryBidObservingDecisions.body}
              </p>
              <ul className="mt-6 space-y-3">
                {primaryBidObservingDecisions.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-base leading-relaxed text-black md:text-lg"
                  >
                    <span
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange"
                      aria-hidden
                    />
                    {point}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
                {primaryBidObservingDecisions.closing}
              </p>
              <div className="mt-8">
                <JourneyPills steps={primaryBidObservingDecisions.process} />
              </div>
            </motion.div>

            <motion.figure
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.08}
              variants={caseStudyFadeUp}
              className="mt-10 lg:mt-0"
            >
              <CaseStudyMockupImage
                src={primaryBidObservingDecisions.image}
                alt={primaryBidObservingDecisions.imageAlt}
                className="w-full rounded-xl border border-border"
              />
            </motion.figure>
          </div>
        </div>
      </section>

      {/* Chapter 3 — Strategy */}
      <section
        id="strategy"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="pb-cross-channel-heading"
      >
        <div className={caseStudyContainer}>
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-12 xl:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
            >
              <CaseStudyLabel>{primaryBidCrossChannel.label}</CaseStudyLabel>
              <CaseStudyHeadline id="pb-cross-channel-heading">
                {primaryBidCrossChannel.headline}
              </CaseStudyHeadline>
              <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
                {primaryBidCrossChannel.body}
              </p>

              <div className="mt-8 space-y-4">
                <article className="rounded-2xl border border-border bg-[#FFF0E8] p-6">
                  <h3 className="text-lg font-bold text-black">
                    {primaryBidCrossChannel.nativeApp.title}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {primaryBidCrossChannel.nativeApp.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-relaxed text-black md:text-base"
                      >
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange"
                          aria-hidden
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs leading-relaxed text-grey">
                    {primaryBidCrossChannel.nativeApp.note}
                  </p>
                </article>
                <article className="rounded-2xl border border-border bg-[#FFF0E8] p-6">
                  <h3 className="text-lg font-bold text-black">
                    {primaryBidCrossChannel.web.title}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {primaryBidCrossChannel.web.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-relaxed text-black md:text-base"
                      >
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange"
                          aria-hidden
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </motion.div>

            <motion.figure
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.08}
              variants={caseStudyFadeUp}
              className="mt-10 flex items-center justify-center lg:mt-0"
            >
              <CaseStudyMockupImage
                src={primaryBidCrossChannel.nativeAppImage}
                alt={primaryBidCrossChannel.nativeAppImageAlt}
                className="h-auto w-full max-w-[14rem] sm:max-w-[16rem] lg:max-w-[18rem]"
              />
            </motion.figure>
          </div>
        </div>
      </section>

      <section
        id="principles"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="pb-principles-heading"
      >
        <div className={caseStudyContainer}>
          <SectionIntro
            label={primaryBidPrinciples.label}
            headline={primaryBidPrinciples.headline}
            headlineId="pb-principles-heading"
          />

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {primaryBidPrinciples.cards.map((card, index) => {
              const Icon = principleIcons[card.icon];
              return (
                <motion.article
                  key={card.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                  custom={index * 0.05}
                  variants={caseStudyFadeUp}
                  className="flex flex-col rounded-2xl border border-border bg-white p-6 md:p-7"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#FFE4D6]">
                    <Icon className="h-5 w-5 text-orange" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-bold text-black">{card.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-grey">
                    {card.copy}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="platform"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="pb-structuring-heading"
      >
        <div className={caseStudyContainer}>
          <SectionIntro
            label={primaryBidStructuring.label}
            headline={primaryBidStructuring.headline}
            headlineId="pb-structuring-heading"
          >
            <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
              {primaryBidStructuring.body}
            </p>
          </SectionIntro>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {primaryBidStructuring.lifecycle.map((stage, index) => (
              <motion.article
                key={stage.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                custom={index * 0.04}
                variants={caseStudyFadeUp}
                className="rounded-2xl bg-[#FFF0E8] p-5"
              >
                <h3 className="font-bold text-black">{stage.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-grey">
                  {stage.copy}
                </p>
              </motion.article>
            ))}
          </div>

          <div className="mt-12">
            <ExpandableImage
              src={primaryBidStructuring.architectureImage}
              alt={primaryBidStructuring.architectureAlt}
            />
          </div>

          <figure className="mt-12">
            <CaseStudyMockupImage
              src={primaryBidStructuring.indexImage}
              alt={primaryBidStructuring.indexAlt}
              className="w-full rounded-xl border border-border"
            />
          </figure>
        </div>
      </section>

      {/* Chapter 4 — T-Web */}
      <section
        id="responsive-design"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="pb-responsive-heading"
      >
        <div className={caseStudyContainer}>
          <SectionIntro
            label={primaryBidResponsiveOffer.label}
            headline={primaryBidResponsiveOffer.headline}
            headlineId="pb-responsive-heading"
          >
            <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
              {primaryBidResponsiveOffer.body}
            </p>
          </SectionIntro>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {primaryBidResponsiveOffer.annotations.map((item, index) => {
              const Icon = deviceIcons[item.icon];
              return (
                <motion.article
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                  custom={index * 0.04}
                  variants={caseStudyFadeUp}
                  className="rounded-2xl border border-border bg-white p-5"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#FFE4D6]">
                    <Icon className="h-5 w-5 text-orange" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-bold text-black">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-grey">
                    {item.copy}
                  </p>
                </motion.article>
              );
            })}
          </div>

          <figure className="mt-10">
            <CaseStudyMockupImage
              src={primaryBidResponsiveOffer.primaryImage}
              alt={primaryBidResponsiveOffer.primaryAlt}
              className="w-full"
            />
          </figure>
        </div>
      </section>

      <section
        id="urgency"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="pb-time-sensitive-heading"
      >
        <div className={caseStudyContainer}>
          <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
            >
              <CaseStudyLabel>{primaryBidTimeSensitive.label}</CaseStudyLabel>
              <CaseStudyHeadline id="pb-time-sensitive-heading">
                {primaryBidTimeSensitive.headline}
              </CaseStudyHeadline>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-black md:text-lg">
                {primaryBidTimeSensitive.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8">
                <HighlightPanel>{primaryBidTimeSensitive.principle}</HighlightPanel>
              </div>
            </motion.div>
            <motion.figure
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.08}
              variants={caseStudyFadeUp}
              className="mt-10 lg:mt-0"
            >
              <CaseStudyMockupImage
                src={primaryBidTimeSensitive.image}
                alt={primaryBidTimeSensitive.imageAlt}
                className="mx-auto h-auto w-full max-w-md"
              />
            </motion.figure>
          </div>
        </div>
      </section>

      <section
        id="learn"
        className={cn(caseStudySection, "bg-cream")}
        aria-labelledby="pb-learn-heading"
      >
        <div className={caseStudyContainer}>
          <SectionIntro
            label={primaryBidLearn.label}
            headline={primaryBidLearn.headline}
            headlineId="pb-learn-heading"
          >
            <div className="mt-6 space-y-4 text-base leading-relaxed text-black md:text-lg">
              {primaryBidLearn.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </SectionIntro>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {primaryBidLearn.principles.map((item, index) => (
              <motion.article
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                custom={index * 0.04}
                variants={caseStudyFadeUp}
                className="rounded-2xl border border-border bg-white p-5"
              >
                <h3 className="font-bold text-black">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-grey">
                  {item.copy}
                </p>
              </motion.article>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {primaryBidLearn.images.map((image, index) => (
              <motion.figure
                key={image.src}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                custom={index * 0.05}
                variants={caseStudyFadeUp}
              >
                <CaseStudyMockupImage
                  src={image.src}
                  alt={image.alt}
                  className="w-full rounded-xl border border-border"
                />
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <section
        id="transactions"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="pb-payment-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
          >
            <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-12 xl:gap-16">
              <div>
                <CaseStudyLabel>{primaryBidPayment.label}</CaseStudyLabel>
                <CaseStudyHeadline id="pb-payment-heading">
                  {primaryBidPayment.headline}
                </CaseStudyHeadline>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-black md:text-lg">
                  {primaryBidPayment.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
              <div className="mt-8 lg:mt-0">
                <JourneyPills steps={primaryBidPayment.process} />
                <ul className="mt-8 space-y-3">
                  {primaryBidPayment.decisions.map((item) => (
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
              </div>
            </div>

            <figure className="mt-10">
              <CaseStudyMockupImage
                src={primaryBidPayment.image}
                alt={primaryBidPayment.imageAlt}
                className="w-full"
              />
            </figure>
          </motion.div>
        </div>
      </section>

      <section
        id="broker"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="pb-broker-heading"
      >
        <div className={caseStudyContainer}>
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-12 xl:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
            >
              <CaseStudyLabel>{primaryBidBroker.label}</CaseStudyLabel>
              <CaseStudyHeadline id="pb-broker-heading">
                {primaryBidBroker.headline}
              </CaseStudyHeadline>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-black md:text-lg">
                {primaryBidBroker.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8">
                <HighlightPanel>{primaryBidBroker.tradeoff}</HighlightPanel>
              </div>
              <div className="mt-8">
                <JourneyPills steps={primaryBidBroker.process} />
              </div>
            </motion.div>

            <motion.figure
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.08}
              variants={caseStudyFadeUp}
              className="mt-10 flex items-center justify-center lg:mt-0"
            >
              <CaseStudyMockupImage
                src={primaryBidBroker.image}
                alt={primaryBidBroker.imageAlt}
                className="h-auto w-full max-w-[20.25rem] sm:max-w-[22.25rem]"
              />
            </motion.figure>
          </div>
        </div>
      </section>

      <section
        id="orders"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="pb-orders-heading"
      >
        <div className={caseStudyContainer}>
          <SectionIntro
            label={primaryBidOrders.label}
            headline={primaryBidOrders.headline}
            headlineId="pb-orders-heading"
          >
            <div className="mt-6 space-y-4 text-base leading-relaxed text-black md:text-lg">
              {primaryBidOrders.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </SectionIntro>

          <figure className="mt-10">
            <CaseStudyMockupImage
              src={primaryBidOrders.primaryImage}
              alt={primaryBidOrders.primaryAlt}
              className="mx-auto w-full max-w-2xl lg:max-w-3xl"
            />
          </figure>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {primaryBidOrders.outcomes.map((outcome, index) => {
              const Icon = orderOutcomeIcons[outcome.icon];
              return (
                <motion.article
                  key={outcome.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                  custom={index * 0.04}
                  variants={caseStudyFadeUp}
                  className="rounded-2xl border border-border bg-[#FFF0E8] p-6"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-white">
                    <Icon className="h-5 w-5 text-orange" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-bold text-black">{outcome.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-grey">
                    {outcome.copy}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Chapter 5 — Delivery */}
      <section
        id="recovery"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="pb-recovery-heading"
      >
        <div className={caseStudyContainer}>
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-12 xl:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
            >
              <CaseStudyLabel>{primaryBidRecovery.label}</CaseStudyLabel>
              <CaseStudyHeadline id="pb-recovery-heading">
                {primaryBidRecovery.headline}
              </CaseStudyHeadline>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-black md:text-lg">
                {primaryBidRecovery.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </motion.div>

            <motion.figure
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.08}
              variants={caseStudyFadeUp}
              className="mt-10 lg:mt-0"
            >
              <CaseStudyMockupImage
                src={primaryBidRecovery.asideImage.src}
                alt={primaryBidRecovery.asideImage.alt}
                className="w-full"
              />
            </motion.figure>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {primaryBidRecovery.bottomImages.map((image, index) => (
              <motion.figure
                key={image.src}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                custom={index * 0.05}
                variants={caseStudyFadeUp}
                className="overflow-hidden rounded-xl"
              >
                <CaseStudyMockupImage
                  src={image.src}
                  alt={image.alt}
                  className="aspect-[4/3] w-full object-cover object-top"
                />
              </motion.figure>
            ))}
          </div>

          <div className="mt-10 max-w-3xl">
            <HighlightPanel>{primaryBidRecovery.closing}</HighlightPanel>
          </div>
        </div>
      </section>

      <section
        id="design-system"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="pb-components-heading"
      >
        <div className={caseStudyContainer}>
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-12 xl:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
            >
              <CaseStudyLabel>{primaryBidComponents.label}</CaseStudyLabel>
              <CaseStudyHeadline id="pb-components-heading">
                {primaryBidComponents.headline}
              </CaseStudyHeadline>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-black md:text-lg">
                {primaryBidComponents.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <p>{primaryBidComponents.closing}</p>
              </div>
            </motion.div>

            <motion.figure
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.08}
              variants={caseStudyFadeUp}
              className="mt-10 lg:mt-0"
            >
              <CaseStudyMockupImage
                src={primaryBidComponents.asideImage.src}
                alt={primaryBidComponents.asideImage.alt}
                className="w-full"
              />
            </motion.figure>
          </div>

          <motion.figure
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            variants={caseStudyFadeUp}
            className="mt-10"
          >
            <CaseStudyMockupImage
              src={primaryBidComponents.fullWidthImage.src}
              alt={primaryBidComponents.fullWidthImage.alt}
              className="w-full"
            />
          </motion.figure>
        </div>
      </section>

      <section
        id="wider-contribution"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="pb-wider-contribution-heading"
      >
        <div className={caseStudyContainer}>
          <SectionIntro
            label={primaryBidWiderContribution.label}
            headline={primaryBidWiderContribution.headline}
            headlineId="pb-wider-contribution-heading"
          >
            <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
              {primaryBidWiderContribution.intro}
            </p>
          </SectionIntro>

          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
            >
              <h3 className="text-xl font-bold text-black md:text-2xl">
                {primaryBidWiderContribution.brokerDashboard.headline}
              </h3>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-black md:text-lg">
                {primaryBidWiderContribution.brokerDashboard.body.map(
                  (paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ),
                )}
              </div>
              <ul className="mt-6 flex flex-wrap gap-2">
                {primaryBidWiderContribution.brokerDashboard.bullets.map(
                  (item) => (
                    <li
                      key={item}
                      className="rounded-full bg-[#FFE4D6] px-3 py-1.5 text-xs font-semibold text-black md:text-sm"
                    >
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.08}
              variants={caseStudyFadeUp}
            >
              <h3 className="text-xl font-bold text-black md:text-2xl">
                {primaryBidWiderContribution.ipoSystem.headline}
              </h3>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-black md:text-lg">
                {primaryBidWiderContribution.ipoSystem.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="engineering"
        className={cn(caseStudySection, "bg-cream")}
        aria-labelledby="pb-engineering-heading"
      >
        <div className={caseStudyContainer}>
          <SectionIntro
            label={primaryBidEngineering.label}
            headline={primaryBidEngineering.headline}
            headlineId="pb-engineering-heading"
          >
            <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
              {primaryBidEngineering.body}
            </p>
          </SectionIntro>

          <ol className="relative mt-10 space-y-0 border-l border-border pl-6 md:pl-8">
            {primaryBidEngineering.timeline.map((step, index) => (
              <motion.li
                key={step.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                custom={index * 0.04}
                variants={caseStudyFadeUp}
                className="relative pb-8 last:pb-0"
              >
                <span
                  className="absolute -left-[1.625rem] top-1.5 h-3 w-3 rounded-full bg-orange md:-left-[2.125rem]"
                  aria-hidden
                />
                <h3 className="font-bold text-black">{step.title}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-grey md:text-base">
                  {step.copy}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="mentoring"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="pb-mentoring-heading"
      >
        <div className={caseStudyContainer}>
          <SectionIntro
            label={primaryBidMentoring.label}
            headline={primaryBidMentoring.headline}
            headlineId="pb-mentoring-heading"
          >
            <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-black md:text-lg">
              {primaryBidMentoring.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </SectionIntro>
        </div>
      </section>

      {/* Chapter 6 — Outcome */}
      <section
        id="outcome"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="pb-outcome-heading"
      >
        <div className={caseStudyContainer}>
          <SectionIntro
            label={primaryBidOutcome.label}
            headline={primaryBidOutcome.headline}
            headlineId="pb-outcome-heading"
          >
            <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
              {primaryBidOutcome.body}
            </p>
          </SectionIntro>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {primaryBidOutcome.outcomes.map((outcome, index) => (
              <motion.article
                key={outcome.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                custom={index * 0.04}
                variants={caseStudyFadeUp}
                className="rounded-2xl border border-border bg-white p-6"
              >
                <h3 className="font-bold text-black">{outcome.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-grey">
                  {outcome.copy}
                </p>
              </motion.article>
            ))}
          </div>

          <div className="mt-10 max-w-3xl">
            <HighlightPanel>{primaryBidOutcome.closing}</HighlightPanel>
          </div>
        </div>
      </section>

      <section
        className={cn(caseStudySection, "bg-white py-12 md:py-16")}
        aria-labelledby="pb-additional-heading"
      >
        <div className={caseStudyContainer}>
          <CaseStudyLabel>{primaryBidAdditional.label}</CaseStudyLabel>
          <h2
            id="pb-additional-heading"
            className="text-balance text-xl font-black tracking-tight text-black md:text-2xl"
          >
            {primaryBidAdditional.headline}
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {primaryBidAdditional.cards.map((card, index) => {
              const Icon = additionalImprovementIcons[card.icon];
              return (
                <motion.article
                  key={card.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                  custom={index * 0.04}
                  variants={caseStudyFadeUp}
                  className="rounded-xl border border-border bg-cream-muted p-5 md:p-6"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#FFE4D6]">
                    <Icon
                      className="h-5 w-5 text-orange"
                      strokeWidth={1.75}
                    />
                  </div>
                  <h3 className="text-sm font-bold text-black">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-grey">
                    {card.copy}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="bg-cream py-12 md:py-16 lg:py-20"
        aria-label="Final product showcase"
      >
        <div className={caseStudyContainer}>
          <motion.figure
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
          >
            <CaseStudyMockupImage
              src={primaryBidOutcome.showcaseImage}
              alt={primaryBidOutcome.showcaseAlt}
              width={2452}
              height={1562}
              className="mx-auto w-full max-w-5xl object-contain"
            />
          </motion.figure>
        </div>
      </section>

      <CaseStudyProjectNav
        previous={primaryBidProjectNav.previous}
        next={primaryBidProjectNav.next}
      />
    </>
  );
}
