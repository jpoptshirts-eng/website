"use client";

import { motion } from "framer-motion";
import CaseStudyLabel from "@/components/case-study/CaseStudyLabel";
import CaseStudyHeadline from "@/components/case-study/CaseStudyHeadline";
import CaseStudyProjectNav from "@/components/case-study/CaseStudyProjectNav";
import CaseStudySubnav from "@/components/case-study/CaseStudySubnav";
import { caseStudyFadeUp } from "@/components/case-study/case-study-motion";
import {
  caseStudyContainer,
  caseStudyHeroImageColumn,
  caseStudyHeroRow,
  caseStudySection,
} from "@/lib/case-study-layout";
import { kaizenFeatures } from "@/lib/kaizen-features";
import {
  kaizenOverviewChallenge,
  kaizenOverviewExplore,
  kaizenOverviewHero,
  kaizenOverviewImpact,
  kaizenOverviewProjectNav,
  kaizenOverviewReflection,
  kaizenOverviewRole,
  kaizenOverviewStrategy,
  kaizenOverviewSubnav,
} from "@/lib/kaizen-overview-data";
import { cn } from "@/lib/utils";
import KaizenFeatureExploreCard from "./KaizenFeatureExploreCard";
import { getMetricIcon, KpiIconBadge, MockupImage } from "./kaizen-shared";

export default function KaizenLanguagesOverview() {
  return (
    <>
      <CaseStudySubnav items={kaizenOverviewSubnav} />

      {/* Hero + Role */}
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
              <CaseStudyLabel>{kaizenOverviewHero.label}</CaseStudyLabel>
              <CaseStudyHeadline as="h1" id="kaizen-title">
                {kaizenOverviewHero.title}
              </CaseStudyHeadline>
              <p className="mt-8 max-w-lg border-l-2 border-orange pl-6 text-base leading-relaxed text-black md:mt-10 md:text-lg">
                {kaizenOverviewHero.subcopy}
              </p>
              <dl className="mt-10 flex flex-col gap-5 lg:mt-12">
                {kaizenOverviewHero.meta.map((item) => (
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
                    src={kaizenOverviewHero.image}
                    alt={kaizenOverviewHero.imageAlt}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          <motion.div
            id="role"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={caseStudyFadeUp}
            className="mt-14 border-t border-border pt-12 md:mt-16 md:pt-14 lg:mt-20 lg:pt-16"
          >
            <div className="lg:grid lg:grid-cols-2 lg:gap-10 xl:gap-14">
              <div>
                <div className="mb-5 flex flex-col items-start gap-3">
                  <div className="relative h-[4.5rem] w-[4rem] shrink-0 overflow-hidden rounded-[50%] bg-soft-pink ring-2 ring-orange/15 sm:h-20 sm:w-[4.5rem]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={kaizenOverviewRole.avatar}
                      alt={kaizenOverviewRole.avatarAlt}
                      className="h-full w-full object-cover object-[center_15%]"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">
                    {kaizenOverviewRole.title}
                  </h2>
                </div>
                <p className="text-base leading-relaxed text-black md:text-lg">
                  {kaizenOverviewRole.lead}
                </p>
              </div>
              <ul className="mt-6 flex flex-col gap-3 lg:mt-0 lg:justify-center">
                {kaizenOverviewRole.bullets.map((bullet) => (
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
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>{kaizenOverviewChallenge.label}</CaseStudyLabel>
            <CaseStudyHeadline id="kaizen-challenge-heading">
              {kaizenOverviewChallenge.headline}
            </CaseStudyHeadline>
            <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
              {kaizenOverviewChallenge.body}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Strategy */}
      <section
        id="strategy"
        className={cn(caseStudySection, "bg-white")}
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
            <CaseStudyLabel>{kaizenOverviewStrategy.label}</CaseStudyLabel>
            <CaseStudyHeadline id="kaizen-strategy-heading">
              {kaizenOverviewStrategy.headline}
            </CaseStudyHeadline>
          </motion.div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {kaizenOverviewStrategy.items.map((item, index) => (
              <motion.li
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                custom={index * 0.04}
                variants={caseStudyFadeUp}
                className="rounded-2xl border border-border bg-cream-muted p-6"
              >
                <h3 className="font-bold text-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-grey md:text-base">
                  {item.copy}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

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
            <CaseStudyLabel>{kaizenOverviewImpact.label}</CaseStudyLabel>
            <CaseStudyHeadline id="kaizen-impact-heading">
              {kaizenOverviewImpact.headline}
            </CaseStudyHeadline>
            <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
              {kaizenOverviewImpact.intro}
            </p>
          </motion.div>

          <div className="-mx-6 mt-12 overflow-x-auto px-6 scrollbar-none lg:mx-0 lg:mt-14 lg:overflow-visible lg:px-0">
            <div className="flex min-w-max gap-4 lg:min-w-0 lg:grid lg:grid-cols-3 lg:gap-5">
              {kaizenOverviewImpact.metrics.map((item, index) => {
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

      {/* Feature index */}
      <section
        id="explore"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="kaizen-explore-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>{kaizenOverviewExplore.label}</CaseStudyLabel>
            <CaseStudyHeadline id="kaizen-explore-heading">
              {kaizenOverviewExplore.headline}
            </CaseStudyHeadline>
            <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
              {kaizenOverviewExplore.intro}
            </p>
          </motion.div>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {kaizenFeatures.map((feature, index) => (
              <KaizenFeatureExploreCard
                key={feature.slug}
                feature={feature}
                index={index}
              />
            ))}
          </ul>
        </div>
      </section>

      {/* Reflection */}
      <section
        id="reflection"
        className={cn(caseStudySection, "bg-cream")}
        aria-labelledby="kaizen-reflection-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>{kaizenOverviewReflection.label}</CaseStudyLabel>
            <CaseStudyHeadline id="kaizen-reflection-heading">
              {kaizenOverviewReflection.headline}
            </CaseStudyHeadline>
            <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
              {kaizenOverviewReflection.body}
            </p>
          </motion.div>
        </div>
      </section>

      <CaseStudyProjectNav
        previous={kaizenOverviewProjectNav.previous}
        next={kaizenOverviewProjectNav.next}
      />
    </>
  );
}
