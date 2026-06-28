"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import CaseStudyLabel from "@/components/case-study/CaseStudyLabel";
import CaseStudyHeadline from "@/components/case-study/CaseStudyHeadline";
import CaseStudyMockupImage from "@/components/case-study/CaseStudyMockupImage";
import CaseStudySubnav from "@/components/case-study/CaseStudySubnav";
import ArrowLink from "@/components/ArrowLink";
import ConceptComparison from "@/components/case-study/quickshop/ConceptComparison";
import InsightList from "@/components/case-study/quickshop/InsightList";
import ParticipantGrid from "@/components/case-study/quickshop/ParticipantGrid";
import RecommendationComponentSystem from "@/components/case-study/quickshop/RecommendationComponentSystem";
import ResearchWorkspace from "@/components/case-study/quickshop/ResearchWorkspace";
import TabletScreenMockup from "@/components/case-study/quickshop/TabletScreenMockup";
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
  quickShopDecisions,
  quickShopExistingExperience,
  quickShopHero,
  quickShopImpact,
  quickShopInsights,
  quickShopMvp,
  quickShopMyRole,
  quickShopParticipants,
  quickShopRecommendations,
  quickShopReflection,
  quickShopResearch,
  quickShopResponsive,
  quickShopSolution,
  quickShopSubnav,
} from "@/lib/quickshop-data";
import { cn } from "@/lib/utils";

function PullQuote({ children }: { children: string }) {
  return (
    <p className="border-l-2 border-orange pl-6 text-[20px] font-medium leading-relaxed text-black md:pl-7 md:text-[22px]">
      {children}
    </p>
  );
}

export default function QuickShopCaseStudy() {
  return (
    <>
      <CaseStudySubnav items={quickShopSubnav} />

      {/* Hero — unchanged */}
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
        id="challenge"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="qs-challenge-heading"
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
              <CaseStudyHeadline id="qs-challenge-heading">
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
        id="existing-experience"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="qs-existing-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-16"
          >
            <div>
              <CaseStudyLabel>{quickShopExistingExperience.label}</CaseStudyLabel>
              <CaseStudyHeadline id="qs-existing-heading">
                {quickShopExistingExperience.headline}
              </CaseStudyHeadline>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-black md:text-lg">
                {quickShopExistingExperience.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <p className="mt-6 text-sm leading-relaxed text-grey md:text-base">
                {quickShopExistingExperience.caption}
              </p>
            </div>
            <figure className="mt-10 flex h-full items-center justify-center lg:mt-0">
              <CaseStudyMockupImage
                src={quickShopExistingExperience.image}
                alt={quickShopExistingExperience.imageAlt}
                width={375}
                className="h-auto w-[375px] max-w-full bg-transparent"
              />
            </figure>
          </motion.div>
        </div>
      </section>

      <section
        id="research"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="qs-research-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
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
        </div>
      </section>

      <section
        id="participants"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="qs-participants-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
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
        </div>
      </section>

      <section
        id="insights"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="qs-insights-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
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
        id="solution"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="qs-solution-heading"
      >
        <div className={caseStudyContainer}>
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
            <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-black md:text-lg">
              {quickShopSolution.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 max-w-2xl">
              <PullQuote>{quickShopSolution.pullQuote}</PullQuote>
            </div>
            <figure className="mt-10 flex justify-center">
              <CaseStudyMockupImage
                src={quickShopSolution.flowImage}
                alt={quickShopSolution.flowImageAlt}
                width={quickShopSolution.flowImageWidth}
                height={quickShopSolution.flowImageHeight}
                className="bg-transparent"
              />
            </figure>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.06}
            variants={caseStudyFadeUp}
            className="mt-16 border-t border-border pt-16 md:mt-20 md:pt-20"
            aria-labelledby="qs-responsive-heading"
          >
            <CaseStudyLabel>{quickShopResponsive.label}</CaseStudyLabel>
            <CaseStudyHeadline id="qs-responsive-heading">
              {quickShopResponsive.headline}
            </CaseStudyHeadline>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-black md:text-lg">
              {quickShopResponsive.body}
            </p>
            <div className="mt-10 flex justify-center">
              <TabletScreenMockup
                src={quickShopResponsive.showcase.image.src}
                alt={quickShopResponsive.showcase.image.alt}
                width={quickShopResponsive.showcase.image.width}
                height={quickShopResponsive.showcase.image.height}
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="recommendations"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="qs-recommendations-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
          >
            <CaseStudyLabel>{quickShopRecommendations.label}</CaseStudyLabel>
            <CaseStudyHeadline id="qs-recommendations-heading">
              {quickShopRecommendations.headline}
            </CaseStudyHeadline>
            <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-black md:text-lg">
              {quickShopRecommendations.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <RecommendationComponentSystem data={quickShopRecommendations.system} />
          </motion.div>
        </div>
      </section>

      <section
        id="decisions"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="qs-decisions-heading"
      >
        <div className={caseStudyContainer}>
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
            <ol className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-6 md:gap-3 lg:gap-4">
              {quickShopDecisions.items.map((item, index) => (
                <motion.li
                  key={item.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  custom={index * 0.05}
                  variants={caseStudyFadeUp}
                  className="rounded-2xl border border-border bg-white p-6 md:p-5 lg:p-6"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange">
                    {item.number}
                  </p>
                  <h3 className="mt-3 text-base font-bold leading-snug text-black lg:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-black md:text-[0.8125rem] lg:text-sm">
                    {item.copy}
                  </p>
                </motion.li>
              ))}
            </ol>
          </motion.div>
        </div>
      </section>

      <section
        id="mvp"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="qs-mvp-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-16"
          >
            <div>
              <CaseStudyLabel>{quickShopMvp.label}</CaseStudyLabel>
              <CaseStudyHeadline id="qs-mvp-heading">
                {quickShopMvp.headline}
              </CaseStudyHeadline>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-black md:text-lg">
                {quickShopMvp.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <figure className="mt-10 flex justify-center lg:mt-0">
              <CaseStudyMockupImage
                src={quickShopMvp.image}
                alt={quickShopMvp.imageAlt}
                width={quickShopMvp.imageWidth}
                height={quickShopMvp.imageHeight}
                className="h-auto w-auto max-w-[16rem] bg-transparent sm:max-w-xs"
              />
            </figure>
          </motion.div>
        </div>
      </section>

      <section
        id="results"
        className={cn(
          caseStudySection,
          "relative overflow-hidden bg-white",
        )}
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
        className={cn(caseStudySection, "bg-cream-muted")}
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
