"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Leaf,
  RefreshCw,
  SlidersHorizontal,
  Target,
  Zap,
} from "lucide-react";
import CaseStudyLabel from "@/components/case-study/CaseStudyLabel";
import CaseStudyHeadline from "@/components/case-study/CaseStudyHeadline";
import CaseStudyMockupImage from "@/components/case-study/CaseStudyMockupImage";
import CaseStudySubnav from "@/components/case-study/CaseStudySubnav";
import ArrowLink from "@/components/ArrowLink";
import ConceptComparison from "@/components/case-study/quickshop/ConceptComparison";
import InsightList from "@/components/case-study/quickshop/InsightList";
import ParticipantGrid from "@/components/case-study/quickshop/ParticipantGrid";
import ResearchWorkspace from "@/components/case-study/quickshop/ResearchWorkspace";
import { caseStudyFadeUp } from "@/components/case-study/case-study-motion";
import {
  caseStudyContainer,
  caseStudyHeroImageColumn,
  caseStudyHeroRow,
  caseStudySection,
} from "@/lib/case-study-layout";
import {
  quickShopChallenge,
  quickShopConcepts,
  quickShopConstraints,
  quickShopExistingBehaviour,
  quickShopHero,
  quickShopImpact,
  quickShopInsights,
  quickShopInteractionLogic,
  quickShopModel,
  quickShopMyRole,
  quickShopParticipants,
  quickShopPrinciples,
  quickShopPrototype,
  quickShopReflection,
  quickShopResearch,
  quickShopSolution,
  quickShopSubnav,
  quickShopTesting,
} from "@/lib/quickshop-data";
import { cn } from "@/lib/utils";

const principleIcons = [Target, SlidersHorizontal, RefreshCw, Leaf];
const solutionIcons = [RefreshCw, Target, Zap];

function PullQuote({ children }: { children: string }) {
  return (
    <p className="border-l-2 border-orange pl-6 text-[20px] font-medium leading-relaxed text-black md:pl-7 md:text-[22px]">
      {children}
    </p>
  );
}

function FlowDiagram({ steps }: { steps: string[] }) {
  return (
    <ol className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-1.5">
      {steps.map((step, index) => (
        <li key={step} className="flex items-center gap-1.5">
          <span className="rounded-lg border border-border bg-white px-3 py-2 text-xs font-medium text-black sm:text-sm">
            {step}
          </span>
          {index < steps.length - 1 ? (
            <ArrowRight
              className="hidden h-3.5 w-3.5 shrink-0 text-orange sm:block"
              aria-hidden
            />
          ) : null}
        </li>
      ))}
    </ol>
  );
}

export default function QuickShopCaseStudy() {
  return (
    <>
      <CaseStudySubnav items={quickShopSubnav} />

      <section
        id="overview"
        className={cn(
          caseStudySection,
          "overflow-hidden bg-gradient-to-b from-white via-white to-cream-muted pb-0 pt-12 md:overflow-visible md:pt-16 lg:pt-20",
        )}
        aria-labelledby="quickshop-title"
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

            <div className={cn("relative justify-end", caseStudyHeroImageColumn)}>
              <div className="relative w-full">
                <div className="relative mx-auto w-full max-w-[37rem] sm:max-w-[42rem] md:ml-auto md:mr-0 md:max-w-[53rem] xl:max-w-[58rem] 2xl:max-w-[64rem]">
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
              </div>
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={caseStudyFadeUp}
            className="mt-12 border-t border-border pt-10 md:pt-12"
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

      <section
        id="problem"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="qs-problem-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-12 xl:gap-16"
          >
            <div>
              <CaseStudyLabel>{quickShopChallenge.label}</CaseStudyLabel>
              <CaseStudyHeadline id="qs-problem-heading">
                {quickShopChallenge.headline}
              </CaseStudyHeadline>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-black md:text-lg">
                {quickShopChallenge.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <figure className="mt-10 lg:mt-0">
              <CaseStudyMockupImage
                src={quickShopChallenge.contextImage}
                alt={quickShopChallenge.contextImageAlt}
                className="w-full rounded-xl object-cover"
              />
            </figure>
          </motion.div>
        </div>
      </section>

      <section
        id="behaviour"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="qs-behaviour-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
          >
            <CaseStudyLabel>{quickShopExistingBehaviour.label}</CaseStudyLabel>
            <CaseStudyHeadline id="qs-behaviour-heading">
              {quickShopExistingBehaviour.headline}
            </CaseStudyHeadline>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-black md:text-lg">
              {quickShopExistingBehaviour.intro}
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {quickShopExistingBehaviour.cards.map((card, index) => (
                <motion.article
                  key={card.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  custom={index * 0.05}
                  variants={caseStudyFadeUp}
                  className="rounded-2xl border border-border bg-white p-6 md:p-7"
                >
                  <h3 className="text-base font-bold leading-snug text-black md:text-lg">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-black md:text-base">
                    {card.copy}
                  </p>
                </motion.article>
              ))}
            </div>

            <p className="mt-10 max-w-3xl text-base font-medium leading-relaxed text-black md:text-lg">
              {quickShopExistingBehaviour.conclusion}
            </p>

            <figure className="mt-10 flex justify-center">
              <CaseStudyMockupImage
                src={quickShopExistingBehaviour.image}
                alt={quickShopExistingBehaviour.imageAlt}
                width={quickShopExistingBehaviour.imageWidth}
                height={quickShopExistingBehaviour.imageHeight}
                className="mx-auto h-auto max-w-full bg-transparent"
                style={{
                  width: quickShopExistingBehaviour.imageWidth,
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </figure>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="mt-16 border-t border-border pt-16 md:mt-20 md:pt-20"
            aria-labelledby="qs-research-heading"
          >
            <CaseStudyLabel>{quickShopResearch.label}</CaseStudyLabel>
            <CaseStudyHeadline id="qs-research-heading">
              {quickShopResearch.headline}
            </CaseStudyHeadline>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-black md:text-lg">
              {quickShopResearch.intro}
            </p>
            <div className="mt-10">
              <ResearchWorkspace {...quickShopResearch.workspace} />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="mt-16 border-t border-border pt-16 md:mt-20 md:pt-20"
            aria-labelledby="qs-participants-heading"
          >
            <CaseStudyLabel>{quickShopParticipants.label}</CaseStudyLabel>
            <CaseStudyHeadline id="qs-participants-heading">
              {quickShopParticipants.headline}
            </CaseStudyHeadline>
            <ParticipantGrid
              intro={quickShopParticipants.intro}
              participants={quickShopParticipants.items}
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="mt-16 border-t border-border pt-16 md:mt-20 md:pt-20"
            aria-labelledby="qs-insights-heading"
          >
            <CaseStudyLabel>{quickShopInsights.label}</CaseStudyLabel>
            <CaseStudyHeadline id="qs-insights-heading">
              {quickShopInsights.headline}
            </CaseStudyHeadline>
            <div className="mt-10">
              <InsightList items={quickShopInsights.items} />
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="model"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="qs-model-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
          >
            <CaseStudyLabel>{quickShopModel.label}</CaseStudyLabel>
            <CaseStudyHeadline id="qs-model-heading">
              {quickShopModel.headline}
            </CaseStudyHeadline>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-black md:text-lg">
              {quickShopModel.intro}
            </p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-black md:text-lg">
              {quickShopModel.body}
            </p>

            <figure className="mt-10 flex justify-center">
              <CaseStudyMockupImage
                src={quickShopModel.chart.src}
                alt={quickShopModel.chart.alt}
                width={quickShopModel.chart.width}
                height={quickShopModel.chart.height}
                className="h-auto w-full max-w-3xl bg-transparent"
              />
            </figure>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {quickShopModel.signals.map((signal, index) => (
                <motion.article
                  key={signal.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  custom={index * 0.05}
                  variants={caseStudyFadeUp}
                  className="rounded-2xl border border-border bg-[#FFF0E8] p-6 md:p-7"
                >
                  <h3 className="text-base font-bold text-black md:text-lg">
                    {signal.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-black md:text-base">
                    {signal.copy}
                  </p>
                </motion.article>
              ))}
            </div>

            <div className="mt-10">
              <FlowDiagram steps={quickShopModel.flow} />
            </div>

            <div className="mt-10 max-w-3xl">
              <PullQuote>{quickShopModel.highlight}</PullQuote>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="constraints"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="qs-constraints-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>{quickShopConstraints.label}</CaseStudyLabel>
            <CaseStudyHeadline id="qs-constraints-heading">
              {quickShopConstraints.headline}
            </CaseStudyHeadline>
            <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
              {quickShopConstraints.intro}
            </p>
          </motion.div>

          <div className="mt-12 lg:grid lg:grid-cols-2 lg:gap-10 xl:gap-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange">
                {quickShopConstraints.constraintsLabel}
              </p>
              <ul className="mt-6 flex flex-col gap-4">
                {quickShopConstraints.constraints.map((item, index) => (
                  <motion.li
                    key={item.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    custom={index * 0.04}
                    variants={caseStudyFadeUp}
                    className="rounded-2xl border border-border bg-white p-6"
                  >
                    <h3 className="font-bold text-black">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-black md:text-base">
                      {item.copy}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="mt-10 lg:mt-0">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange">
                {quickShopConstraints.tradeoffsLabel}
              </p>
              <ul className="mt-6 flex flex-col gap-4">
                {quickShopConstraints.tradeoffs.map((item, index) => (
                  <motion.li
                    key={item.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    custom={index * 0.04}
                    variants={caseStudyFadeUp}
                    className="rounded-2xl border border-border bg-white p-6"
                  >
                    <h3 className="font-bold text-black">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-black md:text-base">
                      {item.copy}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        id="principles"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="qs-principles-heading"
      >
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
          </motion.div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:gap-6">
            {quickShopPrinciples.items.map((item, index) => {
              const Icon = principleIcons[index];
              return (
                <motion.article
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  custom={index * 0.05}
                  variants={caseStudyFadeUp}
                  className="rounded-2xl border border-border bg-[#FFF0E8] p-6 md:p-7"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                    <Icon className="h-4 w-4 text-orange" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-black md:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-black md:text-base">
                    {item.copy}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="concepts"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="qs-concepts-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
          >
            <CaseStudyLabel>{quickShopConcepts.label}</CaseStudyLabel>
            <CaseStudyHeadline id="qs-concepts-heading">
              {quickShopConcepts.headline}
            </CaseStudyHeadline>
            <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-black md:text-lg">
              {quickShopConcepts.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ConceptComparison data={quickShopConcepts} />
          </motion.div>
        </div>
      </section>

      <section
        id="prototype"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="qs-prototype-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
          >
            <CaseStudyLabel>{quickShopPrototype.label}</CaseStudyLabel>
            <CaseStudyHeadline id="qs-prototype-heading">
              {quickShopPrototype.headline}
            </CaseStudyHeadline>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-black md:text-lg">
              {quickShopPrototype.intro}
            </p>

            <div className="mt-12 lg:grid lg:grid-cols-2 lg:gap-10 xl:gap-12">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-orange">
                  {quickShopPrototype.limitationHeading}
                </h3>
                <ul className="mt-6 flex flex-col gap-4">
                  {quickShopPrototype.limitations.map((item, index) => (
                    <motion.li
                      key={item.title}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-40px" }}
                      custom={index * 0.04}
                      variants={caseStudyFadeUp}
                      className="rounded-2xl border border-border bg-cream-muted p-6"
                    >
                      <h4 className="font-bold text-black">{item.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-black md:text-base">
                        {item.copy}
                      </p>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 lg:mt-0">
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-orange">
                  {quickShopPrototype.responseHeading}
                </h3>
                <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
                  {quickShopPrototype.response}
                </p>
                <ul className="mt-6 flex flex-col gap-4">
                  {quickShopPrototype.supports.map((item, index) => (
                    <motion.li
                      key={item.title}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-40px" }}
                      custom={index * 0.04}
                      variants={caseStudyFadeUp}
                      className="rounded-2xl border border-border bg-[#FFF0E8] p-6"
                    >
                      <h4 className="font-bold text-black">{item.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-black md:text-base">
                        {item.copy}
                      </p>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="mt-16 border-t border-border pt-16 md:mt-20 md:pt-20"
            aria-labelledby="qs-interaction-heading"
          >
            <CaseStudyLabel>{quickShopInteractionLogic.label}</CaseStudyLabel>
            <CaseStudyHeadline id="qs-interaction-heading">
              {quickShopInteractionLogic.headline}
            </CaseStudyHeadline>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-black md:text-lg">
              {quickShopInteractionLogic.intro}
            </p>

            <div className="mt-8">
              <FlowDiagram steps={quickShopInteractionLogic.flow} />
            </div>

            <ol className="mt-10 flex flex-col gap-4">
              {quickShopInteractionLogic.rules.map((rule, index) => (
                <motion.li
                  key={rule.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  custom={index * 0.04}
                  variants={caseStudyFadeUp}
                  className="rounded-2xl border border-border bg-white p-6 md:p-7"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange">
                    {rule.number}
                  </p>
                  <h3 className="mt-3 text-base font-bold text-black md:text-lg">
                    {rule.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-black md:text-base">
                    {rule.copy}
                  </p>
                  {rule.detail ? (
                    <p className="mt-3 text-sm leading-relaxed text-grey md:text-base">
                      {rule.detail}
                    </p>
                  ) : null}
                </motion.li>
              ))}
            </ol>

            <figure className="mt-10">
              <div
                className="-mx-6 overflow-x-auto px-6 scrollbar-none lg:mx-0 lg:px-0"
                tabIndex={0}
                role="region"
                aria-label="Scrollable diagram — use arrow keys or swipe to view the full image"
              >
                <div className="min-w-[48rem]">
                  <CaseStudyMockupImage
                    src={quickShopInteractionLogic.image.src}
                    alt={quickShopInteractionLogic.image.alt}
                    width={quickShopInteractionLogic.image.width}
                    height={quickShopInteractionLogic.image.height}
                    className="h-auto w-full bg-transparent"
                  />
                </div>
              </div>
            </figure>
          </motion.div>
        </div>
      </section>

      <section
        id="testing"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="qs-testing-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
          >
            <CaseStudyLabel>{quickShopTesting.label}</CaseStudyLabel>
            <CaseStudyHeadline id="qs-testing-heading">
              {quickShopTesting.headline}
            </CaseStudyHeadline>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-black md:text-lg">
              {quickShopTesting.intro}
            </p>

            <div className="mt-12 lg:grid lg:grid-cols-2 lg:gap-10 xl:gap-12">
              <article className="rounded-2xl border border-border bg-white p-6 md:p-8">
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-orange">
                  {quickShopTesting.beforeLabel}
                </h3>
                <ul className="mt-6 space-y-3">
                  {quickShopTesting.before.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-black md:text-base"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-grey"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
              <article className="rounded-2xl border border-border bg-[#FFF0E8] p-6 md:p-8">
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-orange">
                  {quickShopTesting.afterLabel}
                </h3>
                <ul className="mt-6 space-y-3">
                  {quickShopTesting.after.map((item) => (
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
              </article>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {quickShopTesting.evidence.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  custom={index * 0.05}
                  variants={caseStudyFadeUp}
                  className="rounded-2xl border border-border bg-white p-6 md:p-7"
                >
                  <h3 className="text-base font-bold text-black md:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-black md:text-base">
                    {item.copy}
                  </p>
                </motion.article>
              ))}
            </div>

            <div className="mt-12 max-w-3xl">
              <PullQuote>{quickShopTesting.pullQuote}</PullQuote>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="solution"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="qs-solution-heading"
      >
        <div className={caseStudyContainer}>
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-12 xl:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
            >
              <CaseStudyLabel>{quickShopSolution.label}</CaseStudyLabel>
              <CaseStudyHeadline id="qs-solution-heading">
                {quickShopSolution.headline}
              </CaseStudyHeadline>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-black md:text-lg">
                {quickShopSolution.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <ul className="mt-10 flex flex-col gap-6">
                {quickShopSolution.features.map((feature, index) => {
                  const Icon = solutionIcons[index];
                  return (
                    <li key={feature.title} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFF0E8]">
                        <Icon
                          className="h-4 w-4 text-orange"
                          strokeWidth={1.75}
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-black">{feature.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-black md:text-base">
                          {feature.copy}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-10">
                <FlowDiagram steps={quickShopSolution.flow} />
              </div>
            </motion.div>

            <motion.figure
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              custom={0.08}
              variants={caseStudyFadeUp}
              className="mt-10 flex h-full items-center justify-center lg:mt-0"
            >
              <CaseStudyMockupImage
                src={quickShopSolution.image.src}
                alt={quickShopSolution.image.alt}
                width={400}
                height={773}
                className="h-auto w-full max-w-[400px] bg-transparent"
              />
            </motion.figure>
          </div>
        </div>
      </section>

      <section
        id="results"
        className={cn(caseStudySection, "relative overflow-hidden bg-cream-muted")}
        aria-labelledby="qs-results-heading"
      >
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
              <div className="mt-8 flex flex-wrap items-center gap-2 text-sm font-medium text-black md:text-base">
                {quickShopImpact.sequence.map((step, index) => (
                  <span key={step} className="flex items-center gap-2">
                    <span>{step}</span>
                    {index < quickShopImpact.sequence.length - 1 ? (
                      <ArrowRight className="h-4 w-4 text-orange" aria-hidden />
                    ) : null}
                  </span>
                ))}
              </div>
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
            className="mt-12 border-t border-border pt-8"
          >
            <ul className="grid gap-6 md:grid-cols-2">
              {quickShopImpact.behaviour.map((item) => (
                <li key={item.title}>
                  <p className="text-lg font-bold text-black">
                    <span className="text-orange">{item.metric}</span>{" "}
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-grey md:text-base">
                    {item.copy}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-black md:text-lg">
              {quickShopImpact.insight}
            </p>
          </motion.div>
        </div>
      </section>

      <section
        id="reflection"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="qs-reflection-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>{quickShopReflection.label}</CaseStudyLabel>
            <CaseStudyHeadline id="qs-reflection-heading">
              {quickShopReflection.headline}
            </CaseStudyHeadline>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-black md:text-lg">
              {quickShopReflection.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <ul className="mt-10 flex flex-col gap-6">
              {quickShopReflection.points.map((point) => (
                <li
                  key={point.title}
                  className="rounded-2xl border border-border bg-cream-muted p-6"
                >
                  <h3 className="font-bold text-black">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-black md:text-base">
                    {point.copy}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <ArrowLink href={quickShopReflection.liveLink.href}>
                {quickShopReflection.liveLink.label}
              </ArrowLink>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
