"use client";

import { motion } from "framer-motion";
import CaseStudyLabel from "@/components/case-study/CaseStudyLabel";
import CaseStudyHeadline from "@/components/case-study/CaseStudyHeadline";
import { caseStudyFadeUp } from "@/components/case-study/case-study-motion";
import { caseStudyContainer, caseStudySection } from "@/lib/case-study-layout";
import { kaizenPractice } from "@/lib/kaizen-languages-data";
import { kaizenStoryResultsLearning } from "@/lib/kaizen-story-data";
import { cn } from "@/lib/utils";
import KaizenFeatureShell from "../KaizenFeatureShell";
import {
  KaizenDecisionTradeoff,
  KaizenFeatureStatus,
  KaizenResultsLearningSection,
} from "../kaizen-story-components";
import { BulletList, FigureCaption, PhoneScreenMockup } from "../kaizen-shared";

const subnav = [
  { id: "problem", label: "Problem" },
  { id: "practice-loop", label: "Practice loop" },
  { id: "decision", label: "Decision" },
  { id: "exercises", label: "Exercises" },
  { id: "status", label: "Status" },
  { id: "results-learning", label: "Results" },
] as const;

const exerciseShowcase = [
  {
    src: kaizenPractice.hero.src,
    alt: kaizenPractice.hero.alt,
    caption: "Exercises hub and practice entry point",
  },
  kaizenPractice.screens.wordsList,
  kaizenPractice.screens.grammarList,
  kaizenPractice.screens.conjugation,
] as const;

const practiceTradeoff = {
  alternative:
    "Generic flashcard library organised by topic or chronology alone.",
  chosen:
    "Personalised practice connected to lesson history and confidence signals.",
  evidence:
    "Revision was more useful when it reflected material already encountered and showed where confidence was weakest.",
  consequence:
    "A connected loop from lesson activity to targeted revision and back to conversation.",
};

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
      summary="I designed a practice system that connected lesson history, confidence signals and revision into a personalised loop beyond individual conversation lessons."
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
            <CaseStudyLabel>01 Problem</CaseStudyLabel>
            <CaseStudyHeadline id="practice-problem-heading">
              The gap after lesson completion
            </CaseStudyHeadline>
            <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
              Learners could finish a conversation lesson but lacked a simple way
              to identify which vocabulary and grammar still required attention.
              Lesson completion alone did not guarantee retention — they needed a
              route back into difficult material without repeating entire lessons.
            </p>
          </motion.div>
        </div>
      </section>

      <section
        id="practice-loop"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="practice-loop-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>02 Practice model</CaseStudyLabel>
            <CaseStudyHeadline id="practice-loop-heading">
              From lesson activity to personalised revision
            </CaseStudyHeadline>
            <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
              The central loop connected what happened in lessons with independent
              practice:
            </p>
            <p className="mt-4 border-l-2 border-orange pl-6 text-base font-medium leading-relaxed text-black md:text-lg">
              Lesson activity → confidence or difficulty signal → material
              organised for revision → personalised practice → return to
              conversation.
            </p>
            <div className="mt-8">
              <BulletList
                items={[
                  "Vocabulary and grammar encountered in completed lessons",
                  "Confidence indicators and incorrect or difficult material",
                  "Lesson history informing what to revisit",
                  "Learner-selected revision alongside recommendations",
                  "Audio replay, recognition and recall exercises",
                ]}
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="decision"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="practice-decision-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>03 Key decision</CaseStudyLabel>
            <h2
              id="practice-decision-heading"
              className="text-balance font-black tracking-tight text-black text-2xl leading-[1.1] sm:text-3xl md:text-4xl"
            >
              Confidence over chronology
            </h2>
            <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
              Practice was organised around where learners felt least confident,
              not only the order lessons were completed. This made revision feel
              relevant rather than generic.
            </p>
          </motion.div>

          <div className="mt-10">
            <KaizenDecisionTradeoff data={practiceTradeoff} columns={4} />
          </div>
        </div>
      </section>

      <section
        id="exercises"
        className={cn(caseStudySection, "bg-cream-muted")}
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
            <CaseStudyLabel>04 Exercises</CaseStudyLabel>
            <CaseStudyHeadline id="practice-exercises-heading">
              Words, grammar and progress feedback
            </CaseStudyHeadline>
            <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
              Each screen demonstrates a different part of the loop — entry point,
              vocabulary organisation, grammar lists and exercise interaction.
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
        id="status"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="practice-status-heading"
      >
        <div className={caseStudyContainer}>
          <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
            >
              <CaseStudyLabel>05 Delivery status</CaseStudyLabel>
              <h2
                id="practice-status-heading"
                className="text-balance font-black tracking-tight text-black text-2xl leading-[1.1] sm:text-3xl md:text-4xl"
              >
                Shipped foundation, room to personalise further
              </h2>
              <div className="mt-6 flex flex-wrap gap-3">
                <KaizenFeatureStatus status="shipped" />
                <KaizenFeatureStatus status="explored" />
              </div>
              <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
                Core practice flows — vocabulary and grammar exercises, lesson
                history and confidence markers — were designed and shipped. Deeper
                personalisation logic was established as a foundation for later
                development rather than a fully measured retention system.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.06}
              variants={caseStudyFadeUp}
              className="mt-10 flex justify-center lg:mt-0"
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
              data={kaizenStoryResultsLearning.practice}
              label="06 Results and learning"
            />
          </motion.div>
        </div>
      </section>
    </KaizenFeatureShell>
  );
}
