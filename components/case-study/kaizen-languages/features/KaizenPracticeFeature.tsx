"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import CaseStudyLabel from "@/components/case-study/CaseStudyLabel";
import CaseStudyHeadline from "@/components/case-study/CaseStudyHeadline";
import { caseStudyFadeUp } from "@/components/case-study/case-study-motion";
import { caseStudyContainer, caseStudySection } from "@/lib/case-study-layout";
import { kaizenPractice } from "@/lib/kaizen-languages-data";
import { cn } from "@/lib/utils";
import KaizenFeatureShell from "../KaizenFeatureShell";
import {
  BulletList,
  FigureCaption,
  KpiCallout,
  PhoneScreenMockup,
} from "../kaizen-shared";

const subnav = [
  { id: "problem", label: "Problem" },
  { id: "practice-model", label: "Practice model" },
  { id: "flashcards", label: "Exercises" },
  { id: "outcome", label: "Outcome" },
] as const;

const exerciseShowcase = [
  kaizenPractice.screens.wordDetail,
  kaizenPractice.screens.wordsList,
  kaizenPractice.screens.grammarList,
  kaizenPractice.screens.conjugation,
] as const;

function FramedScreen({
  src,
  alt,
  caption,
  className,
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={cn("flex flex-col items-center", className)}>
      <PhoneScreenMockup
        screenSrc={src}
        frameSrc={kaizenPractice.phoneFrame}
        alt={alt}
        className="w-full"
      />
      {caption ? <FigureCaption>{caption}</FigureCaption> : null}
    </figure>
  );
}

export default function KaizenPracticeFeature() {
  return (
    <KaizenFeatureShell
      slug="practice"
      subnav={subnav}
      summary="I designed practice tools that helped learners revisit vocabulary, recognise weak areas and continue learning outside structured lessons."
      heroImage={kaizenPractice.hero.src}
      heroImageAlt={kaizenPractice.hero.alt}
      heroInPhoneFrame
      heroPhoneFrame={kaizenPractice.phoneFrame}
    >
      <section
        id="problem"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="practice-problem-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>Problem</CaseStudyLabel>
            <CaseStudyHeadline id="practice-problem-heading">
              Lesson completion alone did not guarantee retention
            </CaseStudyHeadline>
            <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
              Learners needed ways to revisit weak material, practise outside the
              lesson, recognise learned content and build confidence before
              returning to conversation. The practice layer had to connect lesson
              history with independent revision.
            </p>
          </motion.div>
        </div>
      </section>

      <section
        id="practice-model"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="practice-model-heading"
      >
        <div className={caseStudyContainer}>
          <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
            >
              <CaseStudyLabel>Practice model</CaseStudyLabel>
              <CaseStudyHeadline id="practice-model-heading">
                Connecting lessons, revision and confidence
              </CaseStudyHeadline>
              <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
                Practice connected vocabulary, grammar, audio, recognition and recall
                with lesson history and recommendations. The goal was a clearer
                route back into difficult material without forcing learners to repeat
                entire lessons.
              </p>
              <div className="mt-8">
                <BulletList
                  items={[
                    "Vocabulary and grammar exercises outside structured lessons",
                    "Audio replay and recognition tasks",
                    "Progress through words and grammar categories",
                    "Connection to lesson content and weak areas",
                    "Recommendations informed by lesson history",
                  ]}
                />
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.06}
              variants={caseStudyFadeUp}
              className="mt-10 lg:mt-0 lg:flex lg:justify-end"
            >
              <FramedScreen
                src={kaizenPractice.screens.wordsList.src}
                alt={kaizenPractice.screens.wordsList.alt}
                caption={kaizenPractice.screens.wordsList.caption}
                className="w-full max-w-[14rem] sm:max-w-[15rem]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="flashcards"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="practice-exercises-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>Exercises</CaseStudyLabel>
            <CaseStudyHeadline id="practice-exercises-heading">
              Words, grammar and progress feedback
            </CaseStudyHeadline>
            <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
              The practice experience included vocabulary and grammar exercises
              with audio, translation and progress through a set. Learners could
              revisit material, mark confidence and continue building recall
              outside the main lesson flow.
            </p>
            <p className="mt-6 text-sm leading-relaxed text-grey md:text-base">
              See how{" "}
              <Link
                href="/work/kaizen-languages/ai-lessons"
                className="font-semibold text-orange hover:underline"
              >
                Suggestions reduced pronunciation failure in the AI lessons case study
              </Link>
              .
            </p>
          </motion.div>

          <div className="-mx-6 mt-12 overflow-x-auto px-6 scrollbar-none lg:mx-0 lg:overflow-visible lg:px-0">
            <div className="flex min-w-max gap-8 lg:min-w-0 lg:grid lg:grid-cols-4 lg:gap-6">
              {exerciseShowcase.map((screen, index) => (
                <motion.div
                  key={screen.src}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                  custom={index * 0.04}
                  variants={caseStudyFadeUp}
                  className="w-[13.5rem] shrink-0 sm:w-[14.5rem] lg:w-auto lg:shrink"
                >
                  <FramedScreen
                    src={screen.src}
                    alt={screen.alt}
                    caption={screen.caption}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="outcome"
        className={cn(caseStudySection, "bg-cream")}
        aria-labelledby="practice-outcome-heading"
      >
        <div className={caseStudyContainer}>
          <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
            >
              <CaseStudyLabel>Outcome</CaseStudyLabel>
              <CaseStudyHeadline id="practice-outcome-heading">
                A clearer route back into difficult material
              </CaseStudyHeadline>
              <KpiCallout className="mt-8">
                The practice layer connected lesson content with independent
                revision, giving learners a clearer route back into difficult
                vocabulary and grammar.
              </KpiCallout>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.06}
              variants={caseStudyFadeUp}
              className="mt-10 lg:mt-0 lg:flex lg:justify-end"
            >
              <FramedScreen
                src="/images/work/kaizen-languages/practice/streak-medal.png"
                alt="Kaizen Languages exercise feedback celebrating twenty-five correct answers in a row."
                caption="Progress feedback during independent practice"
                className="w-full max-w-[14rem] sm:max-w-[15rem]"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </KaizenFeatureShell>
  );
}
