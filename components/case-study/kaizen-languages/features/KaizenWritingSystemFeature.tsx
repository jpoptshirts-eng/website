"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Layers,
  Pencil,
  Scale,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
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
import { cn } from "@/lib/utils";
import KaizenFeatureShell from "../KaizenFeatureShell";
import {
  BulletList,
  FigureCaption,
  iconWrap,
  KpiCallout,
  MockupImage,
} from "../kaizen-shared";

const strategyPoints: {
  copy: string;
  icon: LucideIcon;
}[] = [
  {
    copy: kaizenStrategy.points[0],
    icon: Scale,
  },
  {
    copy: kaizenStrategy.points[1],
    icon: Users,
  },
  {
    copy: kaizenStrategy.points[2],
    icon: Pencil,
  },
  {
    copy: kaizenStrategy.points[3],
    icon: Layers,
  },
  {
    copy: kaizenStrategy.points[4],
    icon: TrendingUp,
  },
];

const evidenceChain = [
  "User interviews and testing",
  "Recurring difficulty with Japanese writing",
  "Unmet need for structure",
  "Roadmap recommendation",
  "Traditional learning research",
  "Digital writing system",
] as const;

const writingFlowInfographic = [
  {
    level: "Level 1",
    focus: "Guided stroke production",
    support: "Dashed path, start/end markers and animated stroke order",
    outcome: "Build confidence with vowel-column characters (A, I, U, E, O).",
  },
  {
    level: "Level 2",
    focus: "Reduced guidance",
    support: "Dashed path removed, markers still visible for orientation",
    outcome: "Progress into K-column and S-column character families.",
  },
  {
    level: "Level 3",
    focus: "Recall and recognition",
    support: "Guidance removed, then reinforced through short recognition checks",
    outcome: "Move from tracing to unaided writing and recognition.",
  },
] as const;

const subnav = [
  { id: "opportunity", label: "Opportunity" },
  { id: "user-research", label: "User research" },
  { id: "strategy", label: "Strategy" },
  { id: "research", label: "Research" },
  { id: "learning-model", label: "Learning model" },
  { id: "interface", label: "Interface" },
  { id: "delivery", label: "Delivery" },
  { id: "reflection", label: "Reflection" },
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
        id="opportunity"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="ws-opportunity-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>Strategic context</CaseStudyLabel>
            <CaseStudyHeadline id="ws-opportunity-heading">
              {kaizenStrategy.headline}
            </CaseStudyHeadline>
            <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
              {kaizenStrategy.body}
            </p>
          </motion.div>
        </div>
      </section>

      <section
        id="user-research"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="ws-user-research-heading"
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
              <CaseStudyLabel>User research</CaseStudyLabel>
              <CaseStudyHeadline id="ws-user-research-heading">
                The opportunity came from learners
              </CaseStudyHeadline>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-black md:text-lg">
                <p>
                  The direction did not begin with a feature idea. It emerged
                  through repeated conversations with people learning Japanese.
                </p>
                <p>
                  During testing and interviews, I asked learners how they were
                  studying, which methods they enjoyed and what helped them feel
                  that they were making structured progress.
                </p>
                <p>
                  A recurring theme was the Japanese writing system. Several learners
                  had tried to teach themselves hiragana and katakana, but found
                  the available online experience fragmented, difficult to follow or
                  disconnected from speaking and listening practice.
                </p>
                <p>
                  For many, learning the characters represented an important next
                  step. It made their progress feel more tangible and helped them
                  move beyond relying entirely on romaji.
                </p>
                <p>
                  This revealed an opportunity that was not being addressed by the
                  existing Kaizen roadmap: rather than adding more advanced
                  conversational content, we could provide complete beginners with a
                  structured path into Japanese writing.
                </p>
              </div>
              <div className="mt-10">
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-orange">
                  Research signal
                </p>
                <KpiCallout>
                  Learners did not see writing as a separate academic exercise. They
                  saw it as the missing structure that would help them progress
                  beyond basic conversation.
                </KpiCallout>
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
                Interviewing a learner during research into how people were studying
                Japanese and where writing practice felt fragmented or disconnected.
              </FigureCaption>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="strategy"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="ws-strategy-heading"
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
              <CaseStudyLabel>Strategy</CaseStudyLabel>
              <h2
                id="ws-strategy-heading"
                className="text-balance font-black tracking-tight text-black text-2xl leading-[1.1] sm:text-3xl md:text-4xl"
              >
                From research insight to product direction
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-black md:text-lg">
                <p>
                  I used this evidence to challenge the proposed focus on additional
                  intermediate and expert lessons.
                </p>
                <p>
                  The majority of our audience was still at novice or beginner level.
                  Introducing writing would deepen the experience for that existing
                  audience while creating a clearer progression path within the
                  product.
                </p>
                <p>
                  I then researched how Japanese children traditionally learn hiragana
                  and katakana—including stroke order, repetition, tracing,
                  recognition and the gradual removal of guidance—and translated those
                  principles into a digital learning model.
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
                src="/images/work/kaizen-languages/process/genki-textbook.png"
                alt="Genki textbook used as a reference for how hiragana and katakana are traditionally taught"
                className="rounded-2xl"
              />
              <FigureCaption>
                I studied Genki and other beginner learning materials to understand
                how hiragana and katakana are introduced through stroke order,
                repetition and guided practice.
              </FigureCaption>
            </motion.div>
          </div>

          <div className="mt-10 max-w-5xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-orange">
              Evidence chain
            </p>
            <ol className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-1.5">
              {evidenceChain.map((step, index) => (
                <li key={step} className="flex items-center gap-1.5">
                  <span className="rounded-lg border border-border bg-cream-muted px-3 py-2 text-xs font-medium text-black sm:text-sm">
                    {step}
                  </span>
                  {index < evidenceChain.length - 1 ? (
                    <ArrowRight
                      className="hidden h-3.5 w-3.5 shrink-0 text-orange sm:block"
                      aria-hidden
                    />
                  ) : null}
                </li>
              ))}
            </ol>
          </div>

          <div className="-mx-6 mt-12 overflow-x-auto px-6 scrollbar-none lg:mx-0 lg:overflow-visible lg:px-0">
            <ul className="flex min-w-max gap-4 lg:min-w-0 lg:grid lg:grid-cols-5 lg:gap-5">
              {strategyPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <motion.li
                    key={point.copy}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-30px" }}
                    custom={index * 0.04}
                    variants={caseStudyFadeUp}
                    className="w-[17rem] shrink-0 rounded-2xl border border-border bg-cream-muted p-6 md:w-[18rem] lg:w-auto lg:shrink"
                  >
                    <div
                      className={cn(
                        iconWrap,
                        "mb-4 h-11 w-11",
                        index % 2 === 1 && "bg-soft-pink",
                      )}
                    >
                      <Icon className="h-5 w-5 text-orange" strokeWidth={1.75} />
                    </div>
                    <p className="text-sm leading-relaxed text-black md:text-base">
                      {point.copy}
                    </p>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <section
        id="research"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="ws-research-heading"
      >
        <div className={caseStudyContainer}>
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-12 xl:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
            >
              <CaseStudyLabel>Research</CaseStudyLabel>
              <h2
                id="ws-research-heading"
                className="text-balance font-black tracking-tight text-black text-2xl leading-[1.1] sm:text-3xl md:text-4xl"
              >
                How Japanese writing is traditionally learned
              </h2>
              <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
                {kaizenWriting.body}
              </p>
              <p className="mt-4 text-base leading-relaxed text-black md:text-lg">
                Research covered how children learn characters through repetition
                and stroke order, guided versus unguided practice, recognition
                versus production, and the gradual withdrawal of support.
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
                src="/images/work/kaizen-languages/process/research-synthesis.jpeg"
                alt="Research themes organised with coloured sticky notes"
                className="rounded-2xl"
              />
              <FigureCaption>
                Research synthesis mapping learning behaviour, feature themes and
                beginner needs.
              </FigureCaption>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="learning-model"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="ws-learning-heading"
      >
        <div className={caseStudyContainer}>
          <CaseStudyLabel>Learning architecture</CaseStudyLabel>
          <CaseStudyHeadline id="ws-learning-heading">
            Progressive support from guided writing to recall
          </CaseStudyHeadline>
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-black md:text-lg">
            <p>
              Once the opportunity was clear, the next challenge was translating
              traditional writing instruction into a progression that worked on a
              mobile device.
            </p>
            <p>{kaizenWriting.body2}</p>
          </div>

          <figure className="mt-10">
            <div className="rounded-2xl border border-border bg-cream-muted p-5 md:p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-orange">
                Writing progression infographic
              </p>
              <div className="mt-4 grid gap-4 lg:grid-cols-3">
                {writingFlowInfographic.map((stage, index) => (
                  <div
                    key={stage.level}
                    className="rounded-2xl border border-border bg-white p-5"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-orange">
                      {stage.level}
                    </p>
                    <h3 className="mt-2 font-bold text-black">{stage.focus}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-grey">
                      {stage.support}
                    </p>
                    <p className="mt-3 text-sm font-medium leading-relaxed text-black">
                      {stage.outcome}
                    </p>
                    {index < writingFlowInfographic.length - 1 ? (
                      <ArrowRight
                        className="mt-4 h-4 w-4 text-orange lg:hidden"
                        aria-hidden
                      />
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
            <FigureCaption>
              Reconstructed from the original planning flow: the model moved
              learners from guided stroke production to reduced support and then
              unaided writing with recognition checks.
            </FigureCaption>
          </figure>

          <div className="mt-12 lg:grid lg:grid-cols-2 lg:gap-12">
            <div>
              <h3 className="font-bold text-black">Learning model</h3>
              <BulletList items={kaizenWriting.learningModel} />
            </div>
            <div className="mt-8 flex flex-col gap-4 lg:mt-0">
              {kaizenWriting.levels.map((level) => (
                <div
                  key={level.title}
                  className="rounded-2xl border border-border bg-white p-5"
                >
                  <p className="font-bold text-black">{level.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-grey">
                    {level.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="interface"
        className={cn(caseStudySection, "bg-white !pb-0")}
        aria-labelledby="ws-interface-heading"
      >
        <div className={caseStudyContainer}>
          <CaseStudyLabel>Interface</CaseStudyLabel>
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
        id="delivery"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="ws-delivery-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
          >
            <CaseStudyLabel>Delivery</CaseStudyLabel>
            <h2
              id="ws-delivery-heading"
              className="max-w-3xl text-balance font-black tracking-tight text-black text-2xl leading-[1.1] sm:text-3xl md:text-4xl"
            >
              Collaboration across language, engineering and testing
            </h2>
            <div className="mt-8 lg:grid lg:grid-cols-2 lg:items-center lg:gap-10 xl:gap-14">
              <p className="text-base leading-relaxed text-black md:text-lg">
                {kaizenWriting.collaboration}
              </p>
              <KpiCallout
                icon="star"
                className="mt-8 lg:mt-0 [&_p]:text-lg [&_p]:md:text-xl"
              >
                62% NPS in testing. {kaizenWriting.result}
              </KpiCallout>
            </div>
          </motion.div>
        </div>
      </section>

      <CaseStudyQuote text={kaizenQuotes[1]} />

      <section
        id="reflection"
        className={cn(caseStudySection, "bg-cream")}
        aria-labelledby="ws-reflection-heading"
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
            <CaseStudyHeadline id="ws-reflection-heading">
              From conversation practice to a broader beginner proposition
            </CaseStudyHeadline>
            <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
              The writing system expanded Kaizen from conversational practice
              into a broader beginner-learning proposition. It gave novice
              learners a clearer progression route and connected customer need
              with longer-term retention and product depth.
            </p>
          </motion.div>
        </div>
      </section>
    </KaizenFeatureShell>
  );
}
