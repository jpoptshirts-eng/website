"use client";

import { motion } from "framer-motion";
import CaseStudyLabel from "@/components/case-study/CaseStudyLabel";
import CaseStudyHeadline from "@/components/case-study/CaseStudyHeadline";
import { caseStudyFadeUp } from "@/components/case-study/case-study-motion";
import { caseStudyContainer, caseStudySection } from "@/lib/case-study-layout";
import {
  kaizenAiConversation,
  kaizenIteration,
  kaizenLesson,
  kaizenSuggestion,
} from "@/lib/kaizen-languages-data";
import { kaizenStoryResultsLearning } from "@/lib/kaizen-story-data";
import { cn } from "@/lib/utils";
import KaizenFeatureShell from "../KaizenFeatureShell";
import {
  KaizenAiLessonsImpactCards,
  KaizenLessonFunnelsInfographic,
} from "../KaizenAiLessonsVisuals";
import { KaizenResultsLearningSection } from "../kaizen-story-components";
import { BulletList, FigureCaption, MockupImage } from "../kaizen-shared";

const subnav = [
  { id: "challenge", label: "Challenge" },
  { id: "interaction", label: "Interaction" },
  { id: "evidence", label: "Evidence" },
  { id: "iterations", label: "Iterations" },
  { id: "suggestion", label: "Suggestion" },
  { id: "delivery", label: "Delivery" },
  { id: "results-learning", label: "Results" },
] as const;

const learnerNeeds = [
  {
    need: "Understand what the AI is doing",
    behaviours: [
      {
        title: "AI responding",
        response: "Clear composing and speaking states so the lesson feels active.",
      },
    ],
  },
  {
    need: "Hear and interpret the response",
    behaviours: [
      {
        title: "Audio playback",
        response: "Animated feedback when the tutor speaks.",
      },
      {
        title: "Reduced-speed pronunciation",
        response: "Normal and slowed playback when a phrase is unclear.",
      },
      {
        title: "Translation",
        response: "English support revealed on demand, not shown by default.",
      },
      {
        title: "Character switching",
        response: "Romaji and hiragana so reading difficulty could adapt.",
      },
    ],
  },
  {
    need: "Access additional support when needed",
    behaviours: [
      {
        title: "In-context grammar",
        response: "Drawer cards and prompts without leaving the conversation.",
      },
    ],
  },
  {
    need: "Recover from errors without losing the lesson",
    behaviours: [
      {
        title: "Errors and retries",
        response: "Clear error states with retry actions.",
      },
      {
        title: "Suggestion",
        response:
          "Contextual pronunciation support after repeated failure — the key recovery decision.",
      },
    ],
  },
] as const;

const versionTimeline = [
  {
    version: "Version 5",
    failed: "Limited interaction states and weak recovery when learners became stuck.",
    changed: "Baseline conversation model with differentiated messages and core controls.",
    evidence: "Funnels showed drop-off after repeated pronunciation failure.",
  },
  {
    version: "Version 6",
    failed: "Learners needed clearer feedback and support without leaving the lesson.",
    changed: "Typing states, drawer support, grammar prompts and clearer options.",
    evidence: "Testing showed improved responsiveness; pronunciation recovery remained unresolved.",
  },
  {
    version: "Later versions",
    failed: "Supporting content sat too far from the instruction.",
    changed: "Controls moved closer to instructions; grammar accessible in context.",
    evidence: "Mixpanel compared version progression from entry to completion.",
  },
] as const;

export default function KaizenAiLessonsFeature() {
  return (
    <KaizenFeatureShell
      slug="ai-lessons"
      subnav={subnav}
      summary="I developed the core AI conversation model, then iterated using observed frustration, funnel behaviour and product versions until Suggestion helped learners recover from pronunciation failure."
      heroImage="/images/work/kaizen-languages/mockup-lesson-chat.png"
      heroImageAlt="Kaizen Languages AI chat lesson showing conversation bubbles and correction states."
      heroImageClassName="mx-auto w-full max-w-[226px] sm:max-w-[242px] lg:max-w-[258px]"
    >
      <section
        id="challenge"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="ai-challenge-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>01 Challenge</CaseStudyLabel>
            <CaseStudyHeadline id="ai-challenge-heading">
              Turning AI conversation into a teachable lesson
            </CaseStudyHeadline>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-black md:text-lg">
              {kaizenAiConversation.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="interaction"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="ai-interaction-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>02 Interaction model</CaseStudyLabel>
            <h2
              id="ai-interaction-heading"
              className="text-balance font-black tracking-tight text-black text-2xl leading-[1.1] sm:text-3xl md:text-4xl"
            >
              Four learner needs, one conversation
            </h2>
            <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
              Rather than treating each control as a separate feature, I organised
              the lesson around what learners needed at each moment — from
              understanding the AI&apos;s state to recovering when confidence
              broke down.
            </p>
          </motion.div>

          <MockupImage
            src={kaizenAiConversation.media.src}
            alt={kaizenAiConversation.media.alt}
            className="mt-12 w-full"
          />

          <div className="mt-12 space-y-8">
            {learnerNeeds.map((group, index) => (
              <motion.div
                key={group.need}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                custom={index * 0.04}
                variants={caseStudyFadeUp}
                className="rounded-2xl border border-border bg-white p-6 md:p-8"
              >
                <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-orange">
                  {group.need}
                </h3>
                <ul className="mt-5 space-y-4">
                  {group.behaviours.map((behaviour) => (
                    <li
                      key={behaviour.title}
                      className="border-t border-border pt-4 first:border-t-0 first:pt-0"
                    >
                      <p className="font-bold text-black">{behaviour.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-grey md:text-base">
                        {behaviour.response}
                      </p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="evidence"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="ai-evidence-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>03 Evidence</CaseStudyLabel>
            <CaseStudyHeadline id="ai-evidence-heading">
              What testing and behaviour revealed
            </CaseStudyHeadline>
            <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
              {kaizenLesson.testingBody}
            </p>
            <p className="mt-4 text-base font-semibold leading-relaxed text-black md:text-lg">
              {kaizenLesson.testingTakeaway}
            </p>
          </motion.div>
          <KaizenLessonFunnelsInfographic className="mt-10 w-full" />
        </div>
      </section>

      <section
        id="iterations"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="ai-iterations-heading"
      >
        <div className={caseStudyContainer}>
          <CaseStudyLabel>04 Iterations</CaseStudyLabel>
          <CaseStudyHeadline id="ai-iterations-heading">
            {kaizenIteration.headline}
          </CaseStudyHeadline>

          <figure className="mt-10">
            <MockupImage
              src="/images/work/kaizen-languages/lesson-versions-v5-v6.jpg"
              alt="Side-by-side comparison of Kaizen Languages lesson interface versions 5 and 6."
              width={2000}
              height={1400}
              className="w-full"
            />
            <FigureCaption>
              Version 5 established the baseline. Version 6 added typing states,
              drawer support and in-context grammar.
            </FigureCaption>
          </figure>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[36rem] border-collapse text-left text-sm md:text-base">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-4 font-bold text-black">Version</th>
                  <th className="py-3 pr-4 font-bold text-black">What failed</th>
                  <th className="py-3 pr-4 font-bold text-black">What changed</th>
                  <th className="py-3 font-bold text-black">What evidence showed</th>
                </tr>
              </thead>
              <tbody>
                {versionTimeline.map((row) => (
                  <tr key={row.version} className="border-b border-border align-top">
                    <td className="py-4 pr-4 font-semibold text-orange">
                      {row.version}
                    </td>
                    <td className="py-4 pr-4 text-grey">{row.failed}</td>
                    <td className="py-4 pr-4 text-black">{row.changed}</td>
                    <td className="py-4 text-grey">{row.evidence}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section
        id="suggestion"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="ai-suggestion-heading"
      >
        <div className={caseStudyContainer}>
          <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
            >
              <CaseStudyLabel>05 Suggestion</CaseStudyLabel>
              <h2
                id="ai-suggestion-heading"
                className="text-balance font-black tracking-tight text-black text-2xl leading-[1.1] sm:text-3xl md:text-4xl"
              >
                {kaizenSuggestion.headline}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
                {kaizenSuggestion.body}
              </p>
              <div className="mt-8">
                <BulletList items={kaizenSuggestion.why} />
              </div>
              <p className="mt-8 border-l-2 border-orange pl-6 text-base leading-relaxed text-black md:text-lg">
                Testing revealed repeated pronunciation failure. Correction alone
                was not enough. Suggestion broke pronunciation into manageable
                support while keeping the learner inside the lesson — increasing
                lesson completion by 25%.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.06}
              variants={caseStudyFadeUp}
              className="mt-10 lg:mt-0"
            >
              <MockupImage
                src={kaizenSuggestion.image}
                alt={kaizenSuggestion.imageAlt}
                className="w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="delivery"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="ai-delivery-heading"
      >
        <div className={caseStudyContainer}>
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-12 xl:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
            >
              <CaseStudyLabel>06 Delivery</CaseStudyLabel>
              <h2
                id="ai-delivery-heading"
                className="text-balance font-black tracking-tight text-black text-2xl leading-[1.1] sm:text-3xl md:text-4xl"
              >
                {kaizenAiConversation.delivery.headline}
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-black md:text-lg">
                {kaizenAiConversation.delivery.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8">
                <BulletList items={kaizenLesson.designed} />
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.06}
              variants={caseStudyFadeUp}
              className="mt-10 lg:mt-0"
            >
              <MockupImage
                src="/images/work/kaizen-languages/process/device-testing.jpg"
                alt="Interface design documentation and device testing for Kaizen Languages"
                className="rounded-2xl"
              />
              <FigureCaption>
                Prototyping and device testing with founders, engineers and
                language specialists.
              </FigureCaption>
            </motion.div>
          </div>
          <KaizenAiLessonsImpactCards className="mt-12" />
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
              data={kaizenStoryResultsLearning["ai-lessons"]}
              label="07 Results and learning"
            />
          </motion.div>
        </div>
      </section>
    </KaizenFeatureShell>
  );
}
