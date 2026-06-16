"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import CaseStudyLabel from "@/components/case-study/CaseStudyLabel";
import CaseStudyHeadline from "@/components/case-study/CaseStudyHeadline";
import { caseStudyFadeUp } from "@/components/case-study/case-study-motion";
import { caseStudyContainer, caseStudySection } from "@/lib/case-study-layout";
import { kaizenGamification, kaizenRetention } from "@/lib/kaizen-languages-data";
import { cn } from "@/lib/utils";
import KaizenFeatureShell from "../KaizenFeatureShell";
import {
  KaizenRetentionAnalyticsInfographic,
  KaizenRetentionImpactCards,
} from "../KaizenRetentionVisuals";
import {
  BulletList,
  MockupImage,
  PhoneVideoMockup,
} from "../kaizen-shared";

const subnav = [
  { id: "retention-problem", label: "Retention problem" },
  { id: "behaviour", label: "Behaviour" },
  { id: "streaks", label: "Streaks" },
  { id: "analytics", label: "Analytics" },
  { id: "impact", label: "Impact" },
  { id: "reflection", label: "Reflection" },
] as const;

export default function KaizenRetentionFeature() {
  return (
    <KaizenFeatureShell
      slug="retention"
      subnav={subnav}
      summary="I introduced streaks, freezes, repairs and progress feedback to encourage regular learning while preserving learner confidence."
      heroImage="/images/work/kaizen-languages/iphone-gamified-hero.png"
      heroImageAlt="Kaizen Languages gamified lessons screen showing progress, words, grammar and premium prompts."
    >
      <section
        id="retention-problem"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="retention-problem-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>Retention problem</CaseStudyLabel>
            <CaseStudyHeadline id="retention-problem-heading">
              {kaizenRetention.headline}
            </CaseStudyHeadline>
            <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
              {kaizenRetention.body}
            </p>
            <p className="mt-4 text-base leading-relaxed text-black md:text-lg">
              Regular practice mattered to both learning outcomes and business
              sustainability. The product needed repeat behaviour without making
              missed days feel punitive.
            </p>
          </motion.div>
        </div>
      </section>

      <section
        id="behaviour"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="retention-behaviour-heading"
      >
        <div className={caseStudyContainer}>
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-12 xl:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
            >
              <CaseStudyLabel>Behavioural research</CaseStudyLabel>
              <h2
                id="retention-behaviour-heading"
                className="text-balance font-black tracking-tight text-black text-2xl leading-[1.1] sm:text-3xl md:text-4xl"
              >
                {kaizenGamification.headline}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
                {kaizenGamification.body}
              </p>
              <div className="mt-8">
                <BulletList items={kaizenGamification.why} />
              </div>
              <p className="mt-8 text-base leading-relaxed text-black md:text-lg">
                The risk was that streaks could become punitive. I designed
                recovery mechanics — freezes, repairs and clear progress
                feedback — to encourage consistency while preserving learner
                confidence.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.06}
              variants={caseStudyFadeUp}
              className="mt-10 lg:mt-0 lg:sticky lg:top-32 lg:flex lg:justify-end"
            >
              <PhoneVideoMockup
                videoSrc={kaizenGamification.video}
                frameSrc={kaizenGamification.phoneFrame}
                alt={kaizenGamification.videoAlt}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="streaks"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="retention-streaks-heading"
      >
        <div className={caseStudyContainer}>
          <CaseStudyLabel>Streak system</CaseStudyLabel>
          <CaseStudyHeadline id="retention-streaks-heading">
            Designing habits without punishing learners
          </CaseStudyHeadline>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-black md:text-lg">
            {kaizenGamification.approach}
          </p>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="font-bold text-black">Visual system</h3>
              <BulletList items={kaizenGamification.visualSystem} />
            </div>
            <div>
              <h3 className="font-bold text-black">Mechanics</h3>
              <BulletList
                items={[
                  "Daily streak tracking with visible progress",
                  "Streak freeze to protect consistency during busy days",
                  "Streak repair to recover after a missed day",
                  "Daily goals and rewards for lesson completion",
                  "Clear feedback when returning after a break",
                ]}
              />
            </div>
          </div>

        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={caseStudyFadeUp}
          className="mt-16 w-full leading-none lg:mt-20"
          style={{ backgroundColor: kaizenGamification.streaksShowcaseBackground }}
        >
          <div className={cn(caseStudyContainer, "!px-0")}>
            <MockupImage
              src={kaizenGamification.streaksShowcaseImage}
              alt={kaizenGamification.streaksShowcaseAlt}
              width={2327}
              height={1443}
              className="mx-auto block w-full object-contain"
            />
          </div>
        </motion.div>
      </section>

      <section
        id="analytics"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="retention-analytics-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>Analytics</CaseStudyLabel>
            <CaseStudyHeadline id="retention-analytics-heading">
              Tracking whether product changes translated into repeat behaviour
            </CaseStudyHeadline>
            <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
              Firebase cohorts, engagement and platform usage helped assess whether
              retention mechanics were creating sustainable habits beyond the first
              session.
            </p>
          </motion.div>

          <KaizenRetentionAnalyticsInfographic className="mt-10 w-full" />
        </div>
      </section>

      <section
        id="impact"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="retention-impact-heading"
      >
        <div className={caseStudyContainer}>
          <CaseStudyLabel>Impact</CaseStudyLabel>
          <CaseStudyHeadline id="retention-impact-heading">
            Measurable retention gains
          </CaseStudyHeadline>
          <KaizenRetentionImpactCards />
          <p className="mt-8 text-sm leading-relaxed text-grey md:text-base">
            Commercial experimentation used the same analytics infrastructure.{" "}
            <Link
              href="/work/kaizen-languages/subscription"
              className="font-semibold text-orange hover:underline"
            >
              See subscription case study
            </Link>
            .
          </p>
        </div>
      </section>

      <section
        id="reflection"
        className={cn(caseStudySection, "bg-cream")}
        aria-labelledby="retention-reflection-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>Reflection</CaseStudyLabel>
            <CaseStudyHeadline id="retention-reflection-heading">
              Encouraging repeat use without guilt
            </CaseStudyHeadline>
            <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
              Gamification was not decoration. It became part of the behavioural
              system that helped users build consistency. The balance was
              encouraging daily return while giving learners tools to recover
              when life interrupted their streak.
            </p>
          </motion.div>
        </div>
      </section>
    </KaizenFeatureShell>
  );
}
