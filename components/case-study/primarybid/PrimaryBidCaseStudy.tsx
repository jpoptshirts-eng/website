"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Eye,
  Layers,
  ListOrdered,
  Shield,
  Smartphone,
} from "lucide-react";
import CaseStudyLabel from "@/components/case-study/CaseStudyLabel";
import CaseStudyHeadline from "@/components/case-study/CaseStudyHeadline";
import CaseStudyProof from "@/components/case-study/CaseStudyProof";
import CaseStudyQuote from "@/components/case-study/CaseStudyQuote";
import CaseStudySubnav from "@/components/case-study/CaseStudySubnav";
import { caseStudyFadeUp } from "@/components/case-study/case-study-motion";
import { caseStudyContainer, caseStudySection, caseStudyHeroImageColumn } from "@/lib/case-study-layout";
import {
  primaryBidSubnav,
  primaryBidHero,
  primaryBidContext,
  primaryBidQuotes,
  primaryBidProblem,
  primaryBidInsights,
  primaryBidHypothesis,
  primaryBidSolution,
  primaryBidPlatform,
  primaryBidDecisions,
  primaryBidValidation,
  primaryBidProof,
  primaryBidImpact,
  primaryBidReflection,
} from "@/lib/primarybid-data";
import { cn } from "@/lib/utils";

const pbIconWrap = "flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#FFE4D6]";
const pbIcon = "h-6 w-6 text-orange";

const insightIcons = {
  shield: Shield,
  eye: Eye,
  layers: Layers,
};

const decisionIcons = {
  eye: Eye,
  layers: Layers,
  list: ListOrdered,
  shield: Shield,
};

function MockupImage({
  src,
  alt,
  priority = false,
  className,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={cn("h-auto w-full object-contain", className)}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
    />
  );
}

export default function PrimaryBidCaseStudy() {
  return (
    <>
      <CaseStudySubnav items={primaryBidSubnav} />

      {/* 01 Hero */}
      <section
        id="overview"
        className={cn(caseStudySection, "bg-white pb-0 pt-12 md:pt-16 lg:pt-20")}
        aria-labelledby="primarybid-title"
      >
        <div className={caseStudyContainer}>
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-10 xl:gap-14">
            <motion.div
              custom={0}
              variants={caseStudyFadeUp}
              initial="hidden"
              animate="visible"
              className="flex-1 lg:max-w-[46%]"
            >
              <CaseStudyLabel>{primaryBidHero.label}</CaseStudyLabel>
              <CaseStudyHeadline as="h1" id="primarybid-title">
                {primaryBidHero.title}
              </CaseStudyHeadline>
              <p className="mt-8 max-w-lg border-l-2 border-orange pl-6 text-base leading-relaxed text-black md:mt-10 md:text-lg">
                {primaryBidHero.subcopy}
              </p>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-grey md:text-base">
                {primaryBidHero.intro}
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

            <motion.div
              custom={0.1}
              variants={caseStudyFadeUp}
              initial="hidden"
              animate="visible"
              className={cn("relative flex-1 flex-col justify-center", caseStudyHeroImageColumn)}
            >
              <div className="relative mx-auto w-full max-w-[28rem] lg:ml-auto lg:max-w-none">
                <div
                  className="pointer-events-none absolute -right-[8%] top-[8%] z-0 aspect-square w-[75%] rounded-full bg-soft-pink md:w-[80%]"
                  aria-hidden
                />
                <MockupImage
                  src={primaryBidHero.image}
                  alt={primaryBidHero.imageAlt}
                  priority
                  className="relative z-10"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 02 Context */}
      <section
        id="why-it-mattered"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="pb-context-heading"
      >
        <div className={caseStudyContainer}>
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
            >
              <CaseStudyLabel>{primaryBidContext.label}</CaseStudyLabel>
              <CaseStudyHeadline id="pb-context-heading">
                {primaryBidContext.headline}
              </CaseStudyHeadline>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.08}
              variants={caseStudyFadeUp}
              className="mt-6 space-y-4 text-base leading-relaxed text-black lg:mt-0 lg:pt-8 lg:text-lg"
            >
              <p>{primaryBidContext.body}</p>
              <p>{primaryBidContext.body2}</p>
            </motion.div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 xl:grid-cols-5">
            {primaryBidContext.challenges.map((challenge, index) => (
              <motion.article
                key={challenge}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                custom={index * 0.05}
                variants={caseStudyFadeUp}
                className="rounded-2xl border border-border bg-white p-6 md:p-7"
              >
                <p className="text-sm font-bold leading-snug text-black md:text-base">
                  {challenge}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CaseStudyQuote text={primaryBidQuotes[0]} />

      {/* 03 Problem */}
      <section
        id="problem"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="pb-problem-heading"
      >
        <div className={caseStudyContainer}>
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
            >
              <CaseStudyLabel>{primaryBidProblem.label}</CaseStudyLabel>
              <CaseStudyHeadline id="pb-problem-heading">
                {primaryBidProblem.headline}
              </CaseStudyHeadline>
              <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
                {primaryBidProblem.body}
              </p>
              <p className="mt-8 border-l-2 border-orange pl-6 text-base font-medium leading-relaxed text-black md:text-lg">
                {primaryBidProblem.hmw}
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.1}
              variants={caseStudyFadeUp}
              className="mt-10 lg:mt-0 lg:flex lg:items-center"
            >
              <MockupImage
                src={primaryBidProblem.image}
                alt={primaryBidProblem.imageAlt}
                className="mx-auto max-w-md"
              />
            </motion.div>
          </div>

          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {primaryBidProblem.points.map((point, index) => (
              <motion.li
                key={point}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                custom={index * 0.04}
                variants={caseStudyFadeUp}
                className="flex gap-3 rounded-2xl border border-border bg-cream-muted p-5"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange"
                  aria-hidden
                />
                <span className="text-sm leading-relaxed text-black md:text-base">
                  {point}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* 04 Insights */}
      <section
        id="insights"
        className={cn(caseStudySection, "bg-cream")}
        aria-labelledby="pb-insights-heading"
      >
        <div className={caseStudyContainer}>
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
            >
              <CaseStudyLabel>{primaryBidInsights.label}</CaseStudyLabel>
              <CaseStudyHeadline id="pb-insights-heading">
                {primaryBidInsights.headline}
              </CaseStudyHeadline>
            </motion.div>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.08}
              variants={caseStudyFadeUp}
              className="mt-6 text-base leading-relaxed text-black lg:mt-0 lg:pt-8 lg:text-lg"
            >
              {primaryBidInsights.body}
            </motion.p>
          </div>

          <div className="mt-14 flex flex-col gap-5 lg:mt-16">
            {primaryBidInsights.cards.map((card, index) => {
              const Icon = insightIcons[card.icon];
              return (
                <motion.article
                  key={card.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  custom={index * 0.06}
                  variants={caseStudyFadeUp}
                  className="flex flex-col gap-6 rounded-2xl border border-border bg-white p-6 md:flex-row md:items-start md:gap-8 md:p-8"
                >
                  <div className="flex flex-1 flex-col">
                    <span className="text-xs font-bold text-orange">
                      {card.number}
                    </span>
                    <h3 className="mt-2 text-lg font-bold text-black md:text-xl">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-grey md:text-base">
                      {card.copy}
                    </p>
                  </div>
                  <div className={cn(pbIconWrap, "md:mt-2")}>
                    <Icon className={pbIcon} strokeWidth={1.75} />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 05 Hypothesis */}
      <section
        id="hypothesis"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="pb-hypothesis-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>{primaryBidHypothesis.label}</CaseStudyLabel>
            <CaseStudyHeadline id="pb-hypothesis-heading">
              {primaryBidHypothesis.headline}
            </CaseStudyHeadline>
            <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
              {primaryBidHypothesis.body}
            </p>
          </motion.div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
            {primaryBidHypothesis.points.map((point, index) => (
              <motion.li
                key={point}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                custom={index * 0.05}
                variants={caseStudyFadeUp}
                className="rounded-2xl border border-border bg-[#FFF0E8] px-5 py-6 text-sm font-semibold text-black md:text-base"
              >
                {point}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* 06 Solution */}
      <section
        id="solution"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="pb-solution-heading"
      >
        <div className={caseStudyContainer}>
          {/* Live offers */}
          <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
            >
              <CaseStudyLabel>{primaryBidSolution.label}</CaseStudyLabel>
              <CaseStudyHeadline id="pb-solution-heading">
                Product experience
              </CaseStudyHeadline>
              <h3 className="mt-8 text-2xl font-bold text-black md:text-3xl">
                {primaryBidSolution.liveOffers.headline}
              </h3>
              <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
                {primaryBidSolution.liveOffers.body}
              </p>
              <ul className="mt-8 flex flex-col gap-3">
                {primaryBidSolution.liveOffers.decisions.map((item) => (
                  <li key={item} className="flex gap-3 text-sm md:text-base">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange"
                      aria-hidden
                    />
                    <span className="leading-relaxed text-black">{item}</span>
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
              className="mt-10 lg:mt-0"
            >
              <MockupImage
                src={primaryBidSolution.liveOffers.image}
                alt={primaryBidSolution.liveOffers.imageAlt}
                className="mx-auto max-w-lg"
              />
            </motion.div>
          </div>

          {/* Offer detail */}
          <div className="mt-20 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.1}
              variants={caseStudyFadeUp}
              className="order-2 lg:order-1"
            >
              <MockupImage
                src={primaryBidSolution.offerDetail.image}
                alt={primaryBidSolution.offerDetail.imageAlt}
                className="mx-auto max-w-md"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
              className="order-1 lg:order-2"
            >
              <h3 className="text-2xl font-bold text-black md:text-3xl">
                {primaryBidSolution.offerDetail.headline}
              </h3>
              <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
                {primaryBidSolution.offerDetail.body}
              </p>
              <ul className="mt-8 flex flex-col gap-3">
                {primaryBidSolution.offerDetail.decisions.map((item) => (
                  <li key={item} className="flex gap-3 text-sm md:text-base">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange"
                      aria-hidden
                    />
                    <span className="leading-relaxed text-black">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Education */}
          <div className="mt-20 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
            >
              <h3 className="text-2xl font-bold text-black md:text-3xl">
                {primaryBidSolution.education.headline}
              </h3>
              <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
                {primaryBidSolution.education.body}
              </p>
              <ol className="mt-10 flex flex-col gap-4">
                {primaryBidSolution.education.steps.map((step, index) => (
                  <li
                    key={step}
                    className="flex gap-4 rounded-2xl border border-border bg-white p-5"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <span className="text-sm font-medium leading-relaxed text-black md:text-base">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.1}
              variants={caseStudyFadeUp}
              className="mt-10 lg:mt-0"
            >
              <MockupImage
                src={primaryBidSolution.education.image}
                alt={primaryBidSolution.education.imageAlt}
                className="mx-auto max-w-sm"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <CaseStudyQuote text={primaryBidQuotes[1]} />

      {/* 07 Platform */}
      <section
        id="platform"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="pb-platform-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>{primaryBidPlatform.label}</CaseStudyLabel>
            <CaseStudyHeadline id="pb-platform-heading">
              Cross-platform product design
            </CaseStudyHeadline>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.05}
            variants={caseStudyFadeUp}
            className="mt-10 max-w-3xl lg:mt-12"
          >
            <div className="mb-3 flex items-center gap-3">
              <div className={pbIconWrap}>
                <Smartphone className={pbIcon} strokeWidth={1.75} />
              </div>
              <h3 className="text-2xl font-bold text-black">
                {primaryBidPlatform.responsive.headline}
              </h3>
            </div>
            <p className="text-base leading-relaxed text-black md:text-lg">
              {primaryBidPlatform.responsive.body}
            </p>
            <ul className="mt-8 flex flex-col gap-3">
              {primaryBidPlatform.responsive.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm md:text-base">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange"
                    aria-hidden
                  />
                  <span className="leading-relaxed text-black">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="mt-16 border-t border-border pt-16 lg:mt-20 lg:pt-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
              className="max-w-3xl"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className={pbIconWrap}>
                  <BarChart3 className={pbIcon} strokeWidth={1.75} />
                </div>
                <h3 className="text-2xl font-bold text-black">
                  {primaryBidPlatform.broker.headline}
                </h3>
              </div>
              <p className="text-base leading-relaxed text-black md:text-lg">
                {primaryBidPlatform.broker.body}
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {primaryBidPlatform.broker.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 rounded-2xl border border-border bg-cream-muted p-4 text-sm leading-relaxed text-black md:text-base"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange"
                      aria-hidden
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.08}
              variants={caseStudyFadeUp}
              className="mt-12 flex justify-center lg:mt-14"
            >
              <MockupImage
                src={primaryBidPlatform.broker.image}
                alt={primaryBidPlatform.broker.imageAlt}
                className="max-w-4xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 08 Decisions */}
      <section
        id="decisions"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="pb-decisions-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>{primaryBidDecisions.label}</CaseStudyLabel>
            <CaseStudyHeadline id="pb-decisions-heading">
              {primaryBidDecisions.designSystem.headline}
            </CaseStudyHeadline>
            <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
              {primaryBidDecisions.designSystem.body}
            </p>
          </motion.div>

          <div className="mt-10 flex flex-wrap gap-3 lg:mt-12">
            {primaryBidDecisions.designSystem.patterns.map((pattern) => (
              <span
                key={pattern}
                className="rounded-full border border-border bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-black"
              >
                {pattern}
              </span>
            ))}
          </div>

          <h3 className="mt-16 text-xl font-bold text-black md:text-2xl">
            Key decisions and trade-offs
          </h3>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {primaryBidDecisions.tradeoffs.map((item, index) => {
              const Icon = decisionIcons[item.icon];
              return (
                <motion.article
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  custom={index * 0.05}
                  variants={caseStudyFadeUp}
                  className="rounded-2xl border border-border bg-white p-6 md:p-8"
                >
                  <div
                    className={cn(
                      "mb-5 flex h-12 w-12 items-center justify-center rounded-full",
                      index % 2 === 0 ? "bg-[#FFE4D6]" : "bg-soft-pink",
                    )}
                  >
                    <Icon className="h-5 w-5 text-orange" strokeWidth={1.75} />
                  </div>
                  <h4 className="font-bold text-black">{item.title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-grey md:text-base">
                    {item.copy}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 09 Validation */}
      <section
        id="validation"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="pb-validation-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>{primaryBidValidation.label}</CaseStudyLabel>
            <CaseStudyHeadline id="pb-validation-heading">
              {primaryBidValidation.headline}
            </CaseStudyHeadline>
            <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
              {primaryBidValidation.body}
            </p>
          </motion.div>

          <div className="mt-12 grid gap-5 md:grid-cols-3 lg:mt-16">
            {primaryBidValidation.cards.map((card, index) => (
              <motion.article
                key={card.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                custom={index * 0.06}
                variants={caseStudyFadeUp}
                className="rounded-2xl border border-border bg-[#FFF0E8] p-6 md:p-8"
              >
                <h3 className="font-bold text-black">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-grey md:text-base">
                  {card.copy}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CaseStudyProof
        content={primaryBidProof}
        headingId="pb-proof-heading"
        sectionClassName="bg-cream"
        cardClassName="bg-white"
      />

      {/* 10 Impact */}
      <section
        id="impact"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="pb-impact-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>{primaryBidImpact.label}</CaseStudyLabel>
            <CaseStudyHeadline id="pb-impact-heading">
              {primaryBidImpact.headline}
            </CaseStudyHeadline>
            <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
              {primaryBidImpact.body}
            </p>
          </motion.div>

          <div className="-mx-6 mt-14 overflow-x-auto px-6 scrollbar-none lg:mx-0 lg:mt-16 lg:overflow-visible lg:px-0">
            <div className="flex min-w-max gap-4 lg:min-w-0 lg:grid lg:grid-cols-4 lg:gap-5">
              {primaryBidImpact.outcomes.map((outcome, index) => (
                <motion.article
                  key={outcome.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  custom={index * 0.05}
                  variants={caseStudyFadeUp}
                  className="w-[17rem] shrink-0 rounded-2xl border border-border bg-white p-6 md:w-[18rem] md:p-7 lg:w-auto lg:shrink"
                >
                  <h3 className="text-sm font-bold leading-snug text-black md:text-base">
                    {outcome.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-grey">
                    {outcome.copy}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CaseStudyQuote text={primaryBidQuotes[2]} />

      {/* 11 Reflection */}
      <section
        id="reflection"
        className={cn(caseStudySection, "bg-cream")}
        aria-labelledby="pb-reflection-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>{primaryBidReflection.label}</CaseStudyLabel>
            <CaseStudyHeadline id="pb-reflection-heading">
              {primaryBidReflection.headline}
            </CaseStudyHeadline>
            <p className="mt-8 text-lg font-medium leading-relaxed text-black md:text-xl">
              {primaryBidReflection.lead}
            </p>
            <div className="mt-8 space-y-4 text-base leading-relaxed text-grey md:text-lg">
              <p className="text-black">{primaryBidReflection.body}</p>
              <p>{primaryBidReflection.body2}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
