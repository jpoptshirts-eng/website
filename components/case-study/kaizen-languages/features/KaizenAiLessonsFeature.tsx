"use client";

import Link from "next/link";
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
import { cn } from "@/lib/utils";
import KaizenFeatureShell from "../KaizenFeatureShell";
import {
  KaizenAiLessonsImpactCards,
  KaizenLessonFunnelsInfographic,
} from "../KaizenAiLessonsVisuals";
import {
  BulletList,
  FigureCaption,
  KpiCallout,
  MockupImage,
} from "../kaizen-shared";

const subnav = [
  { id: "challenge", label: "Challenge" },
  { id: "interaction", label: "Interaction" },
  { id: "iterations", label: "Iterations" },
  { id: "suggestion", label: "Suggestion" },
  { id: "analytics", label: "Analytics" },
  { id: "delivery", label: "Delivery" },
  { id: "impact", label: "Impact" },
] as const;

const versionIterations = [
  {
    version: "Version 5",
    problem:
      "Lessons felt static, with limited interaction states and weaker recovery when learners became stuck.",
    evidence:
      "Guerrilla testing and funnel behaviour showed drop-off after repeated pronunciation failure.",
    change:
      "Limited composing states, fewer in-lesson controls and less contextual grammar support.",
    improved: "Established the baseline conversation model.",
    unresolved: "Recovery from pronunciation errors remained a major friction point.",
  },
  {
    version: "Version 6",
    problem:
      "Learners needed clearer feedback that the AI was responding and more support without leaving the lesson.",
    evidence:
      "Observed frustration in testing and weaker progression through lesson funnels.",
    change:
      "AI typing states, clearer options, drawer cards, grammar prompts and more supportive recovery moments.",
    improved:
      "The experience felt more responsive and easier to continue through difficult moments.",
    unresolved:
      "Pronunciation confidence still needed a dedicated recovery pattern.",
  },
  {
    version: "Later versions",
    problem:
      "Controls and supporting content needed to sit closer to the instruction without overwhelming beginners.",
    evidence:
      "Mixpanel funnels compared how different lesson versions progressed from entry to completion.",
    change:
      "Controls moved closer to instructions, supporting content appeared in bottom drawers and grammar became accessible in context.",
    improved: "Clearer lesson progression and more interactive learning loops.",
    unresolved:
      "Version-level funnel differences were monitored; sample sizes varied by lesson.",
  },
];

export default function KaizenAiLessonsFeature() {
  return (
    <KaizenFeatureShell
      slug="ai-lessons"
      subnav={subnav}
      summary="I developed the core AI conversation model, then iterated the lesson experience using observed frustration, funnel behaviour and repeated product versions."
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
            <CaseStudyLabel>Challenge</CaseStudyLabel>
            <CaseStudyHeadline id="ai-challenge-heading">
              {kaizenAiConversation.headline}
            </CaseStudyHeadline>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-black md:text-lg">
              {kaizenAiConversation.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-8 text-base leading-relaxed text-black md:text-lg">
              {kaizenLesson.body}
            </p>
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
            <CaseStudyLabel>Interaction model</CaseStudyLabel>
            <h2
              id="ai-interaction-heading"
              className="text-balance font-black tracking-tight text-black text-2xl leading-[1.1] sm:text-3xl md:text-4xl"
            >
              {kaizenAiConversation.challenge.headline}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
              {kaizenAiConversation.challenge.body}
            </p>
            <div className="mt-8">
              <BulletList items={kaizenAiConversation.challenge.requirements} />
            </div>
          </motion.div>

          <MockupImage
            src={kaizenAiConversation.media.src}
            alt={kaizenAiConversation.media.alt}
            className="mt-12 w-full"
          />

          <div className="mt-16">
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-orange">
              Interaction states
            </h3>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {kaizenAiConversation.states.map((state, index) => (
                <motion.li
                  key={state.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                  custom={index * 0.04}
                  variants={caseStudyFadeUp}
                  className="rounded-2xl border border-border bg-white p-6"
                >
                  <p className="text-sm font-bold text-black md:text-base">
                    {state.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-grey">
                    <span className="font-semibold text-black">Learner need:</span>{" "}
                    {state.learnerNeed}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-grey">
                    <span className="font-semibold text-black">Design response:</span>{" "}
                    {state.designResponse}
                  </p>
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="mt-16 max-w-3xl"
          >
            <h3 className="text-2xl font-bold text-black md:text-3xl">
              {kaizenAiConversation.support.headline}
            </h3>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-black md:text-lg">
              {kaizenAiConversation.support.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="iterations"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="ai-iterations-heading"
      >
        <div className={caseStudyContainer}>
          <CaseStudyLabel>Iterations</CaseStudyLabel>
          <CaseStudyHeadline id="ai-iterations-heading">
            {kaizenIteration.headline}
          </CaseStudyHeadline>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-black md:text-lg">
            Each major version responded to observed behaviour rather than
            decorative UI changes. The goal was a lesson that felt teachable,
            responsive and recoverable.
          </p>

          <figure className="mt-12">
            <MockupImage
              src="/images/work/kaizen-languages/lesson-versions-v5-v6.jpg"
              alt="Side-by-side comparison of Kaizen Languages lesson interface versions 5 and 6."
              width={2000}
              height={1400}
              className="w-full"
            />
            <FigureCaption>
              Version 5 introduced the baseline conversation model. Version 6
              added typing states, clearer options, drawer support and
              in-context grammar.
            </FigureCaption>
          </figure>

          <div className="mt-12 flex flex-col gap-8">
            {versionIterations.map((item, index) => (
              <motion.article
                key={item.version}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                custom={index * 0.04}
                variants={caseStudyFadeUp}
                className="rounded-2xl border border-border bg-cream-muted p-6 md:p-8"
              >
                <h3 className="text-xl font-bold text-black">{item.version}</h3>
                <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-orange">
                      What was not working
                    </dt>
                    <dd className="mt-2 text-sm leading-relaxed text-black md:text-base">
                      {item.problem}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-orange">
                      What evidence showed
                    </dt>
                    <dd className="mt-2 text-sm leading-relaxed text-black md:text-base">
                      {item.evidence}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-orange">
                      What changed
                    </dt>
                    <dd className="mt-2 text-sm leading-relaxed text-black md:text-base">
                      {item.change}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-orange">
                      What improved
                    </dt>
                    <dd className="mt-2 text-sm leading-relaxed text-black md:text-base">
                      {item.improved}
                    </dd>
                  </div>
                </dl>
                <p className="mt-4 text-sm leading-relaxed text-grey md:text-base">
                  <span className="font-semibold text-black">Still unresolved:</span>{" "}
                  {item.unresolved}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="suggestion"
        className={cn(caseStudySection, "bg-cream-muted")}
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
              <CaseStudyLabel>Suggestion</CaseStudyLabel>
              <h2
                id="ai-suggestion-heading"
                className="text-balance font-black tracking-tight text-black text-2xl leading-[1.1] sm:text-3xl md:text-4xl"
              >
                {kaizenSuggestion.headline}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
                {kaizenLesson.testingBody}
              </p>
              <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
                {kaizenSuggestion.body}
              </p>
              <div className="mt-8">
                <BulletList items={kaizenSuggestion.why} />
              </div>
              <KpiCallout icon="trending" className="mt-8">
                Lesson completions increased by 25% after introducing Suggestions.
              </KpiCallout>
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
        id="analytics"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="ai-analytics-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>Product analytics</CaseStudyLabel>
            <CaseStudyHeadline id="ai-analytics-heading">
              Measuring lesson progression across versions
            </CaseStudyHeadline>
            <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
              Individual lesson versions and funnel completion were monitored so
              design changes could be compared against real behaviour rather
              than assumptions alone.
            </p>
          </motion.div>
          <KaizenLessonFunnelsInfographic className="mt-10 w-full" />
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
              <CaseStudyLabel>Delivery</CaseStudyLabel>
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
                Active interface work, prototyping and device testing with
                founders, engineers and language specialists.
              </FigureCaption>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="impact"
        className={cn(caseStudySection, "bg-cream")}
        aria-labelledby="ai-impact-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>Impact</CaseStudyLabel>
            <CaseStudyHeadline id="ai-impact-heading">
              A stronger foundation for the whole product
            </CaseStudyHeadline>
          </motion.div>
          <KaizenAiLessonsImpactCards />
        </div>
      </section>
    </KaizenFeatureShell>
  );
}
