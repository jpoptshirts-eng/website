"use client";

import { motion } from "framer-motion";
import {
  AlertCircle,
  ArrowRight,
  Clock,
  Eye,
  Feather,
  GitBranch,
  LayoutGrid,
  Repeat,
  Search,
  ShoppingBasket,
  SlidersHorizontal,
  Target,
  User,
  Zap,
} from "lucide-react";
import CaseStudyLabel from "@/components/case-study/CaseStudyLabel";
import CaseStudyHeadline from "@/components/case-study/CaseStudyHeadline";
import CaseStudyQuote from "@/components/case-study/CaseStudyQuote";
import CaseStudySubnav from "@/components/case-study/CaseStudySubnav";
import CaseStudyMockupImage from "@/components/case-study/CaseStudyMockupImage";
import { caseStudyFadeUp } from "@/components/case-study/case-study-motion";
import { caseStudyContainer, caseStudySection } from "@/lib/case-study-layout";
import {
  quickShopSubnav,
  quickShopHero,
  quickShopOpportunity,
  quickShopMyRole,
  quickShopProblem,
  quickShopQuotes,
  quickShopInsights,
  quickShopPrinciples,
  quickShopExploration,
  quickShopSolution,
  quickShopDecisions,
  quickShopValidation,
  quickShopImpact,
  quickShopReflection,
} from "@/lib/quickshop-data";
import { cn } from "@/lib/utils";

const opportunityIcons = {
  search: Search,
  basket: ShoppingBasket,
  branch: GitBranch,
  clock: Clock,
};

const insightIcons = {
  repeat: Repeat,
  zap: Zap,
  alert: AlertCircle,
  eye: Eye,
};

const principleIcons = {
  target: Target,
  sliders: SlidersHorizontal,
  repeat: Repeat,
  feather: Feather,
};

const decisionIcons = {
  eye: Eye,
  sliders: SlidersHorizontal,
  target: Target,
  user: User,
};

const featureColors = {
  purple: "bg-[#E8DEFF] text-black",
  orange: "bg-[#FFE4D6] text-black",
  pink: "bg-soft-pink text-black",
};

function ConceptDiagram({ type }: { type: "feed" | "steps" | "carousels" }) {
  if (type === "feed") {
    return (
      <div className="mt-4 space-y-2 rounded-xl border border-border bg-white p-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-8 rounded-md bg-border/60" />
        ))}
      </div>
    );
  }
  if (type === "steps") {
    return (
      <div className="mt-4 flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-wide text-grey">
        {["Top Regulars", "Food & Drink", "Household", "Inspiration"].map(
          (step, i) => (
            <span key={step} className="flex items-center gap-2">
              <span className="rounded-full bg-[#FFE4D6] px-2 py-1 text-orange">
                {step}
              </span>
              {i < 3 ? <ArrowRight className="h-3 w-3 text-orange" /> : null}
            </span>
          ),
        )}
      </div>
    );
  }
  return (
    <div className="mt-4 space-y-2 rounded-xl border border-border bg-white p-3">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="flex gap-2">
          {Array.from({ length: 3 }).map((__, j) => (
            <div key={j} className="h-6 flex-1 rounded bg-border/50" />
          ))}
        </div>
      ))}
    </div>
  );
}

export default function QuickShopCaseStudy() {
  return (
    <>
      <CaseStudySubnav items={quickShopSubnav} />

      {/* 01 Hero */}
      <section
        id="overview"
        className={cn(
          caseStudySection,
          "overflow-hidden bg-gradient-to-b from-white via-white to-cream-muted pb-0 pt-12 md:pt-16 lg:pt-20",
        )}
        aria-labelledby="quickshop-title"
      >
        <div className={caseStudyContainer}>
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-10 xl:gap-14">
            <motion.div
              custom={0}
              variants={caseStudyFadeUp}
              initial="hidden"
              animate="visible"
              className="flex-1 pb-4 lg:max-w-[42%] lg:pb-16 xl:max-w-[44%]"
            >
              <CaseStudyLabel>{quickShopHero.label}</CaseStudyLabel>
              <CaseStudyHeadline as="h1" id="quickshop-title">
                {quickShopHero.title}
              </CaseStudyHeadline>
              <p className="mt-8 max-w-lg border-l-2 border-orange pl-6 text-base leading-relaxed text-black md:mt-10 md:text-lg">
                {quickShopHero.subcopy}
              </p>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-grey md:text-base">
                {quickShopHero.supporting}
              </p>
              <dl className="mt-10 flex flex-col gap-5 lg:mt-12">
                {quickShopHero.meta.map((item) => (
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
              className="relative flex min-w-0 flex-1 flex-col justify-end lg:min-h-[28rem] xl:min-h-[30rem]"
            >
              <div className="relative mx-auto w-full max-w-[37rem] sm:max-w-[42rem] lg:ml-auto lg:mr-0 lg:max-w-[53rem] xl:max-w-[58rem] 2xl:max-w-[64rem]">
                <div
                  className="pointer-events-none absolute -right-[8%] top-[-2%] z-0 aspect-square w-[86%] rounded-full bg-soft-pink lg:-right-[4%] lg:w-[88%]"
                  aria-hidden
                />
                <CaseStudyMockupImage
                  src={quickShopHero.image}
                  alt={quickShopHero.imageAlt}
                  priority
                  width={1021}
                  height={1024}
                  className="relative z-10 w-full object-contain object-bottom"
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={caseStudyFadeUp}
            className="mt-14 border-t border-border pt-12 md:mt-16 md:pt-14 lg:mt-20 lg:pt-16"
            aria-labelledby="my-role-heading"
          >
            <div className="lg:grid lg:grid-cols-2 lg:gap-10 xl:gap-14">
              <div>
                <div className="mb-5 flex flex-col items-start gap-3">
                  <div className="relative h-[4.5rem] w-[4rem] shrink-0 overflow-hidden rounded-[50%] bg-soft-pink ring-2 ring-orange/15 sm:h-20 sm:w-[4.5rem]">
                    <CaseStudyMockupImage
                      src={quickShopMyRole.avatar}
                      alt={quickShopMyRole.avatarAlt}
                      className="h-full w-full object-cover object-[center_15%]"
                    />
                  </div>
                  <h2
                    id="my-role-heading"
                    className="text-xs font-semibold uppercase tracking-[0.2em] text-orange"
                  >
                    {quickShopMyRole.title}
                  </h2>
                </div>
                <p className="text-base leading-relaxed text-black md:text-lg">
                  {quickShopMyRole.body}
                </p>
              </div>
              <ul className="mt-6 flex flex-col gap-3 lg:mt-0 lg:justify-center">
                {quickShopMyRole.bullets.map((bullet) => (
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

      {/* 02 Overview */}
      <section
        id="opportunity"
        className={cn(caseStudySection, "relative overflow-hidden bg-cream-muted")}
        aria-labelledby="opportunity-heading"
      >
        <div
          className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-soft-pink/40 blur-3xl"
          aria-hidden
        />
        <div className={caseStudyContainer}>
          <div className="relative lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
            >
              <CaseStudyLabel>{quickShopOpportunity.label}</CaseStudyLabel>
              <CaseStudyHeadline id="opportunity-heading">
                {quickShopOpportunity.headline}
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
              <p>{quickShopOpportunity.body}</p>
              <p>{quickShopOpportunity.body2}</p>
              <p>{quickShopOpportunity.body3}</p>
            </motion.div>
          </div>

          <div className="relative mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
            {quickShopOpportunity.cards.map((card, index) => {
              const Icon = opportunityIcons[card.icon];
              return (
                <motion.article
                  key={card.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  custom={index * 0.05}
                  variants={caseStudyFadeUp}
                  className="rounded-2xl border border-border bg-white p-6 md:p-7"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#FFE4D6]">
                    <Icon className="h-5 w-5 text-orange" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-bold text-black">{card.title}</h3>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 03 Problem */}
      <section
        id="problem"
        className={cn(caseStudySection, "relative overflow-hidden bg-cream")}
        aria-labelledby="qs-problem-heading"
      >
        <div
          className="pointer-events-none absolute -right-16 top-20 h-48 w-48 rounded-full bg-soft-pink/50 blur-3xl"
          aria-hidden
        />
        <div className={caseStudyContainer}>
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
            >
              <CaseStudyLabel>{quickShopProblem.label}</CaseStudyLabel>
              <CaseStudyHeadline id="qs-problem-heading">
                {quickShopProblem.headline}
              </CaseStudyHeadline>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-black md:text-lg">
                <p>{quickShopProblem.body}</p>
                <p>{quickShopProblem.body2}</p>
                <p>{quickShopProblem.body3}</p>
              </div>
              <p className="mt-8 border-l-2 border-orange pl-6 text-base font-medium leading-relaxed text-black md:text-lg">
                {quickShopProblem.challenge}
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
              <div className="-mx-2 overflow-x-auto px-2 pb-2 scrollbar-none lg:overflow-visible">
                <ol className="flex min-w-max items-center gap-2 lg:min-w-0 lg:flex-wrap lg:gap-3">
                  {quickShopProblem.journey.map((step, index) => (
                    <li key={step} className="flex items-center gap-2">
                      <span className="rounded-xl border border-border bg-white px-3 py-2 text-xs font-medium text-black shadow-sm md:text-sm">
                        {step}
                      </span>
                      {index < quickShopProblem.journey.length - 1 ? (
                        <ArrowRight
                          className="h-4 w-4 shrink-0 text-orange"
                          aria-hidden
                        />
                      ) : null}
                    </li>
                  ))}
                </ol>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CaseStudyQuote text={quickShopQuotes[0]} />

      {/* 04 Behavioural insights */}
      <section
        id="insights"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="qs-insights-heading"
      >
        <div className={caseStudyContainer}>
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
              className="lg:sticky lg:top-40 lg:self-start"
            >
              <CaseStudyLabel>{quickShopInsights.label}</CaseStudyLabel>
              <CaseStudyHeadline id="qs-insights-heading">
                {quickShopInsights.headline}
              </CaseStudyHeadline>
              <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
                {quickShopInsights.intro}
              </p>
            </motion.div>

            <div className="mt-10 flex flex-col gap-4 lg:mt-0">
              {quickShopInsights.cards.map((card, index) => {
                const Icon = insightIcons[card.icon];
                return (
                  <motion.article
                    key={card.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    custom={index * 0.05}
                    variants={caseStudyFadeUp}
                    className="flex gap-5 rounded-2xl bg-[#FFF0E8] p-6 md:p-7"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white">
                      <Icon className="h-5 w-5 text-orange" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h3 className="font-bold text-black">{card.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-grey md:text-base">
                        {card.copy}
                      </p>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 05 Design principles */}
      <section
        id="principles"
        className={cn(caseStudySection, "relative overflow-hidden bg-cream-muted")}
        aria-labelledby="qs-principles-heading"
      >
        <div
          className="pointer-events-none absolute bottom-0 left-0 h-40 w-40 rounded-full bg-orange/10 blur-3xl"
          aria-hidden
        />
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>{quickShopPrinciples.label}</CaseStudyLabel>
            <CaseStudyHeadline id="qs-principles-heading">
              {quickShopPrinciples.headline}
            </CaseStudyHeadline>
            <p className="mt-4 text-base leading-relaxed text-black md:text-lg">
              {quickShopPrinciples.intro}
            </p>
            <p className="mt-6 text-base leading-relaxed text-grey md:text-lg">
              {quickShopPrinciples.hypothesis}
            </p>
          </motion.div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:gap-5">
            {quickShopPrinciples.items.map((item, index) => {
              const Icon = principleIcons[item.icon];
              return (
                <motion.article
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  custom={index * 0.05}
                  variants={caseStudyFadeUp}
                  className="flex gap-4 rounded-2xl bg-[#FFF0E8] p-6 md:p-7"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white">
                    <Icon className="h-5 w-5 text-orange" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="font-bold text-black">
                      <span className="text-orange">{item.number}</span>{" "}
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-grey md:text-base">
                      {item.copy}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 06 Concept exploration */}
      <section
        id="exploration"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="qs-exploration-heading"
      >
        <div className={caseStudyContainer}>
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 xl:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
              className="lg:col-span-5"
            >
              <CaseStudyLabel>{quickShopExploration.label}</CaseStudyLabel>
              <CaseStudyHeadline id="qs-exploration-heading">
                {quickShopExploration.headline}
              </CaseStudyHeadline>
              <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
                {quickShopExploration.intro}
              </p>
              <div className="relative mt-10 hidden w-full max-w-[20rem] lg:block">
                <div
                  className="pointer-events-none absolute left-1/2 top-[10%] z-0 aspect-square w-[88%] -translate-x-1/2 rounded-full bg-soft-pink"
                  aria-hidden
                />
                <CaseStudyMockupImage
                  src={quickShopExploration.image}
                  alt={quickShopExploration.imageAlt}
                  width={529}
                  height={1024}
                  className="relative z-10"
                />
              </div>
            </motion.div>

            <div className="mt-10 flex flex-col gap-5 lg:col-span-7 lg:mt-0">
              {quickShopExploration.concepts.map((concept, index) => (
                <motion.article
                  key={concept.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  custom={index * 0.06}
                  variants={caseStudyFadeUp}
                  className="rounded-2xl border border-border bg-white p-6 md:p-7"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <span className="text-xs font-bold text-orange">
                      {concept.number}
                    </span>
                    <span
                      className={cn(
                        "rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wide",
                        concept.outcomeTone === "positive"
                          ? "bg-orange text-white"
                          : concept.outcomeTone === "muted"
                            ? "bg-border text-grey"
                            : "bg-[#FFE4D6] text-black",
                      )}
                    >
                      {concept.outcome}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-black">
                    {concept.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-black md:text-base">
                    {concept.description}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-grey">
                    <span className="font-semibold text-black">
                      What we learned:
                    </span>{" "}
                    {concept.learned}
                  </p>
                  <ConceptDiagram type={concept.diagram} />
                </motion.article>
              ))}
            </div>
          </div>

          <div className="relative mx-auto mt-10 w-full max-w-[18rem] lg:hidden">
            <div
              className="pointer-events-none absolute left-1/2 top-[10%] z-0 aspect-square w-[88%] -translate-x-1/2 rounded-full bg-soft-pink"
              aria-hidden
            />
            <CaseStudyMockupImage
              src={quickShopExploration.image}
              alt={quickShopExploration.imageAlt}
              width={529}
              height={1024}
              className="relative z-10"
            />
          </div>
        </div>
      </section>

      <CaseStudyQuote text={quickShopQuotes[1]} />

      {/* 07 Solution */}
      <section
        id="solution"
        className={cn(caseStudySection, "overflow-hidden bg-cream pb-0")}
        aria-labelledby="qs-solution-heading"
      >
        <div className={caseStudyContainer}>
          <div className="flex flex-col gap-14 lg:flex-row lg:items-stretch lg:gap-12 xl:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
              className="flex-1 pb-16 md:pb-20 lg:max-w-[46%] lg:pb-24"
            >
              <CaseStudyLabel>{quickShopSolution.label}</CaseStudyLabel>
              <CaseStudyHeadline id="qs-solution-heading">
                {quickShopSolution.headline}
              </CaseStudyHeadline>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-black md:text-lg">
                <p>{quickShopSolution.body}</p>
                <p>{quickShopSolution.body2}</p>
                <p>{quickShopSolution.body3}</p>
              </div>
              <ul className="mt-10 flex flex-col gap-8">
                {quickShopSolution.features.map((feature, index) => (
                  <li key={feature.title} className="flex gap-4">
                    <span
                      className={cn(
                        "flex h-12 w-12 shrink-0 items-center justify-center rounded-full",
                        featureColors[feature.color],
                      )}
                    >
                      {index === 0 ? (
                        <Repeat className="h-5 w-5" strokeWidth={1.75} />
                      ) : index === 1 ? (
                        <LayoutGrid className="h-5 w-5" strokeWidth={1.75} />
                      ) : (
                        <Zap className="h-5 w-5" strokeWidth={1.75} />
                      )}
                    </span>
                    <div>
                      <h3 className="font-bold text-black">{feature.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-grey md:text-base">
                        {feature.copy}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap items-center gap-2">
                {quickShopSolution.logic.map((step, index) => (
                  <span key={step} className="flex items-center gap-2">
                    <span className="rounded-full bg-[#FFE4D6] px-3 py-1.5 text-xs font-semibold text-black">
                      {step}
                    </span>
                    {index < quickShopSolution.logic.length - 1 ? (
                      <ArrowRight className="h-4 w-4 text-orange" aria-hidden />
                    ) : null}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.1}
              variants={caseStudyFadeUp}
              className="relative flex flex-1 flex-col justify-end"
            >
              <div className="relative mx-auto w-full max-w-[22rem] sm:max-w-[26rem] lg:ml-auto lg:mr-0 lg:max-w-[32rem] xl:max-w-[34rem]">
                <div
                  className="pointer-events-none absolute -right-[4%] top-[4%] z-0 aspect-square w-[82%] rounded-full bg-soft-pink lg:-right-[2%] lg:top-[2%] lg:w-[86%]"
                  aria-hidden
                />
                <div className="relative z-10">
                  <CaseStudyMockupImage
                    src={quickShopSolution.image}
                    alt={quickShopSolution.imageAlt}
                    width={720}
                    height={1024}
                    className="w-full object-contain object-bottom"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 08 Key product decisions */}
      <section
        id="decisions"
        className={cn(caseStudySection, "bg-white pb-16 md:pb-20 lg:pb-24")}
        aria-labelledby="qs-decisions-heading"
      >
        <div className={caseStudyContainer}>
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
            >
              <CaseStudyLabel>{quickShopDecisions.label}</CaseStudyLabel>
              <CaseStudyHeadline id="qs-decisions-heading">
                {quickShopDecisions.headline}
              </CaseStudyHeadline>
              <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
                {quickShopDecisions.subcopy}
              </p>
            </motion.div>

            <div className="mt-10 flex flex-col gap-4 lg:mt-0">
              {quickShopDecisions.items.map((item, index) => {
                const Icon = decisionIcons[item.icon];
                return (
                  <motion.article
                    key={item.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    custom={index * 0.05}
                    variants={caseStudyFadeUp}
                    className="flex items-start gap-4 rounded-2xl border border-border bg-cream-muted p-6 md:p-7"
                  >
                    <div
                      className={cn(
                        "flex h-12 w-12 shrink-0 items-center justify-center rounded-full",
                        index % 2 === 0 ? "bg-[#FFE4D6]" : "bg-soft-pink",
                      )}
                    >
                      <Icon className="h-5 w-5 text-orange" strokeWidth={1.75} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base font-bold leading-snug text-black md:text-lg">
                        <span className="text-orange">{item.number}</span>{" "}
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-grey md:text-base">
                        {item.copy}
                      </p>
                    </div>
                    <ArrowRight
                      className="mt-1 hidden h-5 w-5 shrink-0 text-orange sm:block"
                      aria-hidden
                    />
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 09 Validation and iteration */}
      <section
        id="validation"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="qs-validation-heading"
      >
        <div className={caseStudyContainer}>
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
            >
              <CaseStudyLabel>{quickShopValidation.label}</CaseStudyLabel>
              <CaseStudyHeadline id="qs-validation-heading">
                {quickShopValidation.headline}
              </CaseStudyHeadline>
              <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
                {quickShopValidation.body}
              </p>
              <div className="mt-10 rounded-2xl bg-[#FFF0E8] p-6 md:p-8">
                <h3 className="font-bold text-black">Our validation process</h3>
                <ol className="mt-8 flex flex-col gap-6 sm:grid sm:grid-cols-2 sm:gap-6 lg:flex lg:flex-col lg:gap-8">
                  {quickShopValidation.process.map((step) => (
                    <li key={step.title} className="flex gap-4">
                      <span className="text-xs font-bold text-orange">
                        {step.number}
                      </span>
                      <div>
                        <p className="font-bold text-black">{step.title}</p>
                        <p className="mt-1 text-sm text-grey">{step.copy}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </motion.div>

            <div className="mt-10 flex flex-col gap-5 lg:mt-0">
              {quickShopValidation.learnings.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  custom={index * 0.05}
                  variants={caseStudyFadeUp}
                  className="rounded-2xl border border-border bg-white p-6 md:p-7"
                >
                  <span
                    className={cn(
                      "text-xs font-bold",
                      index % 2 === 0 ? "text-pink" : "text-orange",
                    )}
                  >
                    {item.number}
                  </span>
                  <h3 className="mt-2 font-bold text-black">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-grey md:text-base">
                    {item.copy}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10 Results */}
      <section
        id="results"
        className={cn(
          caseStudySection,
          "relative overflow-hidden bg-cream-muted",
        )}
        aria-labelledby="qs-results-heading"
      >
        <div
          className="pointer-events-none absolute -right-20 top-16 h-64 w-64 rounded-full bg-soft-pink/50 blur-3xl"
          aria-hidden
        />
        <div className={caseStudyContainer}>
          <div className="relative lg:grid lg:grid-cols-2 lg:items-start lg:gap-12 xl:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
            >
              <CaseStudyLabel>{quickShopImpact.label}</CaseStudyLabel>
              <CaseStudyHeadline id="qs-results-heading">
                {quickShopImpact.headline}
              </CaseStudyHeadline>
              <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
                {quickShopImpact.intro}
              </p>
            </motion.div>

            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              custom={0.08}
              variants={caseStudyFadeUp}
              className="mt-10 rounded-2xl border border-border bg-[#FFF0E8] p-8 md:p-10 lg:mt-0"
            >
              <p className="text-5xl font-black leading-none tracking-tight text-orange md:text-6xl">
                {quickShopImpact.featured.metric}
              </p>
              <h3 className="mt-2 text-xl font-bold text-black md:text-2xl">
                {quickShopImpact.featured.title}
              </h3>
              <p className="mt-6 text-2xl font-bold text-black md:text-3xl">
                {quickShopImpact.featured.detail}
              </p>
              <p className="mt-4 inline-block rounded-full bg-white px-4 py-2 text-sm font-semibold text-orange ring-1 ring-orange/20">
                {quickShopImpact.featured.highlight}
              </p>
              <p className="mt-6 text-sm leading-relaxed text-grey md:text-base">
                {quickShopImpact.featured.copy}
              </p>
            </motion.article>
          </div>

          <div className="-mx-6 mt-12 overflow-x-auto px-6 scrollbar-none lg:mx-0 lg:mt-14 lg:overflow-visible lg:px-0">
            <div className="flex min-w-max gap-4 lg:min-w-0 lg:grid lg:grid-cols-5 lg:gap-4 xl:gap-5">
              {[...quickShopImpact.primary, ...quickShopImpact.secondary].map(
                (item, index) => (
                  <motion.article
                    key={item.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    custom={index * 0.05}
                    variants={caseStudyFadeUp}
                    className="w-[17rem] shrink-0 rounded-2xl border border-border bg-white p-6 md:w-[18rem] md:p-7 lg:w-auto lg:shrink lg:p-5 xl:p-6"
                  >
                    <p className="text-3xl font-black leading-none text-orange lg:text-[1.75rem] xl:text-4xl">
                      {item.metric}
                    </p>
                    <h3 className="mt-3 text-sm font-bold leading-snug text-black">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-grey">
                      {item.copy}
                    </p>
                  </motion.article>
                ),
              )}
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="mt-10 rounded-2xl border border-border bg-[#FFF0E8] p-6 md:p-8 lg:mt-12"
          >
            <ul className="grid gap-6 md:grid-cols-2">
              {quickShopImpact.behaviour.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange"
                    aria-hidden
                  />
                  <div>
                    <p className="text-lg font-bold text-black">
                      <span className="text-orange">{item.metric}</span>{" "}
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-grey md:text-base">
                      {item.copy}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-6 flex gap-3 border-t border-orange/15 pt-6 text-base leading-relaxed text-black md:text-lg">
              <span
                className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange"
                aria-hidden
              />
              {quickShopImpact.insight}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 11 Reflection */}
      <section
        id="reflection"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="qs-reflection-heading"
      >
        <div className={caseStudyContainer}>
          <div className="relative lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <div
              className="pointer-events-none absolute -left-12 top-0 h-40 w-40 rounded-full bg-soft-pink/40 blur-3xl"
              aria-hidden
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
              className="relative"
            >
              <CaseStudyLabel>{quickShopReflection.label}</CaseStudyLabel>
              <CaseStudyHeadline id="qs-reflection-heading">
                {quickShopReflection.headline}
              </CaseStudyHeadline>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-grey md:text-lg">
                <p className="text-black">{quickShopReflection.body}</p>
                <p>{quickShopReflection.body2}</p>
                <p>{quickShopReflection.body3}</p>
              </div>
            </motion.div>

            <motion.aside
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.1}
              variants={caseStudyFadeUp}
              className="mt-10 rounded-3xl bg-[#FFF0E8] p-8 md:p-10 lg:mt-0 lg:flex lg:flex-col lg:justify-center"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">
                From
              </p>
              <p className="mt-3 text-xl font-bold leading-snug text-black md:text-2xl">
                {quickShopReflection.from}
              </p>
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-orange">
                To
              </p>
              <p className="mt-3 text-xl font-bold leading-snug text-black md:text-2xl">
                {quickShopReflection.to}
                <span className="text-orange">.</span>
              </p>
            </motion.aside>
          </div>
        </div>
      </section>

    </>
  );
}
