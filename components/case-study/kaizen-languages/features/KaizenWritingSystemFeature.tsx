"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import CaseStudyLabel from "@/components/case-study/CaseStudyLabel";
import CaseStudyHeadline from "@/components/case-study/CaseStudyHeadline";
import CaseStudyQuote from "@/components/case-study/CaseStudyQuote";
import { caseStudyFadeUp } from "@/components/case-study/case-study-motion";
import { caseStudyContainer, caseStudySection } from "@/lib/case-study-layout";
import {
  kaizenQuotes,
  kaizenStrategy,
  kaizenWriting,
} from "@/lib/kaizen-languages-data";
import { kaizenStoryResultsLearning } from "@/lib/kaizen-story-data";
import { cn } from "@/lib/utils";
import KaizenFeatureShell from "../KaizenFeatureShell";
import {
  KaizenDecisionTradeoff,
  KaizenResultsLearningSection,
} from "../kaizen-story-components";
import { FigureCaption, MockupImage, PhoneScreenMockup } from "../kaizen-shared";

const writingPhoneFrame = "/images/work/kaizen-languages/iphone-8-silver-bezel.png";

const subnav = [
  { id: "roadmap", label: "Roadmap tension" },
  { id: "customer-research", label: "Customer research" },
  { id: "domain-research", label: "Domain research" },
  { id: "learning-model", label: "Learning model" },
  { id: "interface", label: "Interface" },
  { id: "validation", label: "Validation" },
  { id: "results-learning", label: "Results" },
] as const;

const roadmapTradeoff = {
  alternative:
    "Expand intermediate and advanced lesson content as proposed by leadership.",
  chosen:
    "Prioritise Hiragana and Katakana foundations for the novice majority.",
  evidence:
    "Customer research showed writing was fragmented online; most learners remained beginner level.",
  consequence:
    "A structured beginner path from tracing to recall before harder lesson progression.",
};

const researchToDesign = [
  {
    principle: "Characters are learned in structured groups",
    response: "Organised practice into character sets",
  },
  {
    principle: "Stroke order is fundamental",
    response: "Animated each stroke in sequence",
  },
  {
    principle: "Beginners require physical guidance",
    response: "Introduced tracing paths and start/end markers",
  },
  {
    principle: "Support should reduce as competence grows",
    response: "Removed guidance progressively across three levels",
  },
  {
    principle: "Recall consolidates learning",
    response: "Added a quiz after each character group",
  },
] as const;

const writingLevels = [
  {
    level: "Level 1",
    title: "Full tracing guidance",
    copy: "Dashed path, start/end markers and animated stroke order for vowel-column characters.",
  },
  {
    level: "Level 2",
    title: "Reduced visual guidance",
    copy: "Dashed path removed; markers remain for K-column and S-column families.",
  },
  {
    level: "Level 3",
    title: "Independent recall",
    copy: "Guidance removed, reinforced through short recognition checks and final quiz.",
  },
] as const;

export default function KaizenWritingSystemFeature() {
  return (
    <KaizenFeatureShell
      slug="writing-system"
      subnav={subnav}
      summary="I challenged the proposed advanced-content roadmap and designed a progressive system for learning hiragana and katakana."
      heroImage={kaizenWriting.heroImage}
      heroImageAlt={kaizenWriting.heroAlt}
    >
      <section
        id="roadmap"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="ws-roadmap-heading"
      >
        <div className={caseStudyContainer}>
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-12 xl:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
              className="min-w-0"
            >
              <CaseStudyLabel>01 Strategic context</CaseStudyLabel>
              <CaseStudyHeadline id="ws-roadmap-heading">
                {kaizenStrategy.headline}
              </CaseStudyHeadline>
              <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
                {kaizenStrategy.body}
              </p>
              <p className="mt-4 text-base leading-relaxed text-black md:text-lg">
                The CEO and CTO proposed adding more intermediate and advanced
                content. The majority of the audience remained novice or beginner.
                I recommended strengthening foundations through Hiragana and
                Katakana before expanding advanced lessons.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.06}
              variants={caseStudyFadeUp}
              className="mt-10 flex justify-center lg:mt-0 lg:justify-end"
            >
              <PhoneScreenMockup
                screenSrc="/images/work/kaizen-languages/character-a-stroke.png"
                frameSrc={writingPhoneFrame}
                alt="Kaizen Languages writing practice screen showing guided stroke tracing for hiragana character A"
                className="w-full max-w-[14rem] sm:max-w-[15rem]"
              />
            </motion.div>
          </div>
          <div className="mt-10">
            <KaizenDecisionTradeoff data={roadmapTradeoff} />
          </div>
        </div>
      </section>

      <section
        id="customer-research"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="ws-customer-heading"
      >
        <div className={caseStudyContainer}>
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-12 xl:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
              className="min-w-0"
            >
              <CaseStudyLabel>02 Customer research</CaseStudyLabel>
              <CaseStudyHeadline id="ws-customer-heading">
                Why writing mattered to learners
              </CaseStudyHeadline>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-black md:text-lg">
                <p>
                  During testing and interviews, learners repeatedly described
                  Japanese writing as difficult to learn online. Available tools
                  felt fragmented, hard to follow or disconnected from speaking
                  practice.
                </p>
                <p>
                  For many beginners, learning characters made progress feel
                  tangible and helped them move beyond relying entirely on
                  romaji. They valued tracing, repetition and structured
                  character practice — not writing as a separate academic
                  exercise.
                </p>
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
                src="/images/work/kaizen-languages/process/user-research-interview.png"
                alt="User research session reviewing Kaizen Languages writing concepts with a learner"
                className="rounded-2xl"
              />
              <FigureCaption>
                Interviewing learners about where writing practice felt fragmented
                or disconnected.
              </FigureCaption>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="domain-research"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="ws-domain-heading"
      >
        <div className={caseStudyContainer}>
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-12 xl:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
            >
              <CaseStudyLabel>03 Domain research</CaseStudyLabel>
              <h2
                id="ws-domain-heading"
                className="text-balance font-black tracking-tight text-black text-2xl leading-[1.1] sm:text-3xl md:text-4xl"
              >
                How Japanese writing is traditionally taught
              </h2>
              <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
                {kaizenWriting.body}
              </p>
              <p className="mt-4 text-base leading-relaxed text-black md:text-lg">
                I studied how children learn hiragana and katakana — character
                sets, stroke order, tracing, repetition, recognition and the
                gradual removal of guidance — and translated those principles
                into a mobile learning model.
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
                src="/images/work/kaizen-languages/process/genki-textbook.png"
                alt="Genki textbook used as a reference for how hiragana and katakana are traditionally taught"
                className="rounded-2xl"
              />
              <FigureCaption>
                Reference materials including Genki informed stroke order,
                repetition and guided practice patterns.
              </FigureCaption>
            </motion.div>
          </div>

          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[32rem] border-collapse text-left text-sm md:text-base">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-4 font-bold text-black">
                    Research principle
                  </th>
                  <th className="py-3 font-bold text-black">Design response</th>
                </tr>
              </thead>
              <tbody>
                {researchToDesign.map((row) => (
                  <tr key={row.principle} className="border-b border-border">
                    <td className="py-4 pr-4 text-black">{row.principle}</td>
                    <td className="py-4 text-grey">{row.response}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section
        id="learning-model"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="ws-learning-heading"
      >
        <div className={caseStudyContainer}>
          <CaseStudyLabel>04 Learning model</CaseStudyLabel>
          <CaseStudyHeadline id="ws-learning-heading">
            Progressive support from tracing to recall
          </CaseStudyHeadline>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-black md:text-lg">
            {kaizenWriting.body2}
          </p>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {writingLevels.map((stage, index) => (
              <motion.div
                key={stage.level}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                custom={index * 0.04}
                variants={caseStudyFadeUp}
                className="rounded-2xl border border-border bg-white p-5 md:p-6"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-orange">
                  {stage.level}
                </p>
                <h3 className="mt-2 font-bold text-black">{stage.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-grey md:text-base">
                  {stage.copy}
                </p>
                {index < writingLevels.length - 1 ? (
                  <ArrowRight
                    className="mt-4 h-4 w-4 text-orange lg:hidden"
                    aria-hidden
                  />
                ) : null}
              </motion.div>
            ))}
          </div>

          <figure className="mt-12">
            <MockupImage
              src="/images/work/kaizen-languages/writing-kanji-showcase.png"
              alt="Collage of Kaizen Languages writing screens showing kanji introduction, tracing practice, character detail and lesson progression."
              className="w-full"
            />
            <FigureCaption>
              Writing progression from character introduction and guided tracing
              through detail views and structured lesson sets.
            </FigureCaption>
          </figure>
        </div>
      </section>

      <section
        id="interface"
        className={cn(caseStudySection, "bg-white !pb-0")}
        aria-labelledby="ws-interface-heading"
      >
        <div className={caseStudyContainer}>
          <CaseStudyLabel>05 Interface</CaseStudyLabel>
          <CaseStudyHeadline id="ws-interface-heading">
            {kaizenWriting.headline}
          </CaseStudyHeadline>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-black md:text-lg">
            {kaizenWriting.interaction}
          </p>

          <figure className="mt-12">
            <MockupImage
              src={kaizenWriting.characterImage}
              alt={kaizenWriting.characterAlt}
              className="mx-auto w-full max-w-3xl"
            />
          </figure>

          <p className="mt-10 max-w-3xl text-sm leading-relaxed text-grey md:text-base">
            {kaizenWriting.quiz}
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={caseStudyFadeUp}
          className="mt-16 w-full leading-none lg:mt-20"
          style={{ backgroundColor: kaizenWriting.showcaseBackground }}
        >
          <div className={cn(caseStudyContainer, "!px-0")}>
            <MockupImage
              src={kaizenWriting.showcaseImage}
              alt={kaizenWriting.showcaseAlt}
              width={4000}
              height={1869}
              className="mx-auto block w-full object-contain"
            />
          </div>
        </motion.div>
      </section>

      <section
        id="validation"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="ws-validation-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
          >
            <CaseStudyLabel>06 Validation</CaseStudyLabel>
            <h2
              id="ws-validation-heading"
              className="max-w-3xl text-balance font-black tracking-tight text-black text-2xl leading-[1.1] sm:text-3xl md:text-4xl"
            >
              Testing and delivery
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-black md:text-lg">
              {kaizenWriting.collaboration}
            </p>
            <ul className="mt-8 max-w-3xl space-y-3 text-base leading-relaxed text-black md:text-lg">
              <li>
                <span className="font-bold">62% NPS</span> in testing.
              </li>
              <li>Learners remained engaged with the tracing mechanic.</li>
              <li>
                Learners recalled the majority of characters during the final
                quiz. {kaizenWriting.result}
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      <CaseStudyQuote text={kaizenQuotes[1]} />

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
              data={kaizenStoryResultsLearning["writing-system"]}
              label="07 Results and learning"
            />
          </motion.div>
        </div>
      </section>
    </KaizenFeatureShell>
  );
}
