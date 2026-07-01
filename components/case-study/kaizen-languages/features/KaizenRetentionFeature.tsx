"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import CaseStudyLabel from "@/components/case-study/CaseStudyLabel";
import CaseStudyHeadline from "@/components/case-study/CaseStudyHeadline";
import { caseStudyFadeUp } from "@/components/case-study/case-study-motion";
import { caseStudyContainer, caseStudySection } from "@/lib/case-study-layout";
import { kaizenGamification, kaizenRetention } from "@/lib/kaizen-languages-data";
import { kaizenStoryResultsLearning } from "@/lib/kaizen-story-data";
import { cn } from "@/lib/utils";
import KaizenFeatureShell from "../KaizenFeatureShell";
import { KaizenRetentionAnalyticsInfographic } from "../KaizenRetentionVisuals";
import {
  KaizenFeatureStatus,
  KaizenResultsLearningSection,
} from "../kaizen-story-components";
import { BulletList, MockupImage, PhoneVideoMockup } from "../kaizen-shared";

const subnav = [
  { id: "retention-problem", label: "Problem" },
  { id: "hypothesis", label: "Hypothesis" },
  { id: "shipped", label: "Shipped" },
  { id: "explored", label: "Explored" },
  { id: "measurement", label: "Measurement" },
  { id: "results-learning", label: "Results" },
] as const;

const shippedMechanics = [
  "Daily streak tracking with visible progress",
  "Daily goals and rewards for lesson completion",
  "Progress markers across words and grammar",
  "Clear feedback when returning after a break",
] as const;

const exploredMechanics = [
  "Streak freeze to protect consistency during busy days",
  "Streak repair to recover after a missed day",
  "Leaderboards and additional reward systems",
] as const;

export default function KaizenRetentionFeature() {
  return (
    <KaizenFeatureShell
      slug="retention"
      subnav={subnav}
      summary="I introduced shipped streak and reward mechanics to encourage regular learning, while exploring recovery concepts for a future phase."
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
            <CaseStudyLabel>01 Retention problem</CaseStudyLabel>
            <CaseStudyHeadline id="retention-problem-heading">
              {kaizenRetention.headline}
            </CaseStudyHeadline>
            <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
              {kaizenRetention.body}
            </p>
          </motion.div>
        </div>
      </section>

      <section
        id="hypothesis"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="retention-hypothesis-heading"
      >
        <div className={caseStudyContainer}>
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-12 xl:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
            >
              <CaseStudyLabel>02 Behavioural hypothesis</CaseStudyLabel>
              <h2
                id="retention-hypothesis-heading"
                className="text-balance font-black tracking-tight text-black text-2xl leading-[1.1] sm:text-3xl md:text-4xl"
              >
                Visible continuity without punishment
              </h2>
              <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
                Visible continuity could encourage learners to return, but an
                unforgiving streak risked undermining the confidence the lesson
                experience was designed to build. Gamification needed to make
                genuine progress visible — not reward activity for its own sake.
              </p>
              <div className="mt-8">
                <BulletList items={kaizenGamification.why} />
              </div>
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
        id="shipped"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="retention-shipped-heading"
      >
        <div className={caseStudyContainer}>
          <div className="mb-6">
            <KaizenFeatureStatus status="shipped" />
          </div>
          <CaseStudyLabel>03 Shipped system</CaseStudyLabel>
          <CaseStudyHeadline id="retention-shipped-heading">
            Streaks, rewards and visible progress
          </CaseStudyHeadline>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-black md:text-lg">
            {kaizenGamification.approach.split(".")[0]}.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="font-bold text-black">Visual system</h3>
              <BulletList items={kaizenGamification.visualSystem} />
            </div>
            <div>
              <h3 className="font-bold text-black">Shipped mechanics</h3>
              <BulletList items={[...shippedMechanics]} />
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
        id="explored"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="retention-explored-heading"
      >
        <div className={caseStudyContainer}>
          <div className="mb-6">
            <KaizenFeatureStatus status="explored" />
          </div>
          <CaseStudyLabel>04 Future concepts</CaseStudyLabel>
          <h2
            id="retention-explored-heading"
            className="text-balance font-black tracking-tight text-black text-2xl leading-[1.1] sm:text-3xl md:text-4xl"
          >
            Recovery mechanics explored for a later phase
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-black md:text-lg">
            I explored recovery concepts to protect motivation after a missed day.
            These informed the direction but were not attributed to the measured
            retention uplift, which came from the shipped streak mechanics above.
          </p>
          <div className="mt-8 max-w-3xl">
            <BulletList items={[...exploredMechanics]} />
          </div>
        </div>
      </section>

      <section
        id="measurement"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="retention-measurement-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>05 Measurement</CaseStudyLabel>
            <CaseStudyHeadline id="retention-measurement-heading">
              Retention after shipped mechanics
            </CaseStudyHeadline>
            <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
              Firebase cohorts helped assess whether shipped streak mechanics
              translated into repeat behaviour beyond the first session.
            </p>
          </motion.div>

          <KaizenRetentionAnalyticsInfographic className="mt-10 w-full" />

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
        id="results-learning"
        className={cn(caseStudySection, "bg-cream")}
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <KaizenResultsLearningSection
              data={kaizenStoryResultsLearning.retention}
              label="06 Results and learning"
            />
          </motion.div>
        </div>
      </section>
    </KaizenFeatureShell>
  );
}
