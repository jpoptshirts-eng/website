"use client";

import { motion } from "framer-motion";
import CaseStudyLabel from "@/components/case-study/CaseStudyLabel";
import CaseStudyHeadline from "@/components/case-study/CaseStudyHeadline";
import { caseStudyFadeUp } from "@/components/case-study/case-study-motion";
import { caseStudyContainer, caseStudySection } from "@/lib/case-study-layout";
import { kaizenVisualDirection } from "@/lib/kaizen-languages-data";
import { kaizenStoryResultsLearning } from "@/lib/kaizen-story-data";
import { cn } from "@/lib/utils";
import KaizenFeatureShell from "../KaizenFeatureShell";
import {
  KaizenDecisionTradeoff,
  KaizenResultsLearningSection,
} from "../kaizen-story-components";
import {
  FigureCaption,
  iconWrap,
  MockupImage,
  visualDirectionIcons,
} from "../kaizen-shared";

const subnav = [
  { id: "context", label: "Context" },
  { id: "competitors", label: "Competitors" },
  { id: "routes", label: "Four routes" },
  { id: "testing", label: "Testing" },
  { id: "constraint", label: "Constraint" },
  { id: "results-learning", label: "Results" },
] as const;

const photographyTradeoff = {
  alternative: "Photography-led direction — strongest learner preference in testing.",
  chosen:
    "Scalable illustration system retaining warmth and human connection.",
  evidence: "Unsustainable production cost for an early-stage startup.",
  consequence:
    "A distinctive visual identity the business could maintain while preserving approachability.",
};

export default function KaizenVisualDirectionFeature() {
  return (
    <KaizenFeatureShell
      slug="visual-direction"
      subnav={subnav}
      summary="I explored four contrasting art directions and tested how photography, illustration and hybrid approaches affected trust in an unfamiliar AI product."
      heroImage="/images/work/kaizen-languages/visual-direction-hero.png"
      heroImageAlt="Kaizen Languages iPhone mockup showing the Japanese lessons interface."
    >
      <section
        id="context"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="vd-context-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>Context</CaseStudyLabel>
            <CaseStudyHeadline id="vd-context-heading">
              Building trust in an unfamiliar AI experience
            </CaseStudyHeadline>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-black md:text-lg">
              {kaizenVisualDirection.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="competitors"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="vd-competitors-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>Competitor analysis</CaseStudyLabel>
            <h2
              id="vd-competitors-heading"
              className="text-balance font-black tracking-tight text-black text-2xl leading-[1.1] sm:text-3xl md:text-4xl"
            >
              Useful conventions, but not the answer
            </h2>
            <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
              I reviewed onboarding, lesson structures, visual tone, tutor
              representation and learning progression across established
              language-learning products. They offered useful patterns for
              introducing a new language, but none answered how an AI tutor
              should appear before conversational AI was widely understood. The
              visual direction had to build credibility for technology learners
              had not yet experienced.
            </p>
          </motion.div>

          <figure className="mt-10">
            <MockupImage
              src="/images/work/kaizen-languages/visual-direction-competitors.jpg"
              alt="Comparison of Duolingo, Babbel, Busuu and Memrise mobile app interfaces reviewed during competitor analysis."
              className="w-full"
            />
            <FigureCaption>
              Established language-learning products reviewed for onboarding,
              lesson structure and visual conventions.
            </FigureCaption>
          </figure>
        </div>
      </section>

      <section
        id="routes"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="vd-routes-heading"
      >
        <div className={caseStudyContainer}>
          <CaseStudyLabel>Exploration</CaseStudyLabel>
          <CaseStudyHeadline id="vd-routes-heading">
            Four contrasting routes
          </CaseStudyHeadline>

          <div className="-mx-6 mt-10 overflow-x-auto px-6 scrollbar-none xl:mx-0 xl:overflow-visible xl:px-0">
            <ul className="flex min-w-max gap-4 xl:min-w-0 xl:grid xl:grid-cols-4 xl:gap-5">
              {kaizenVisualDirection.routes.map((route, index) => {
                const Icon = visualDirectionIcons[route.icon];
                return (
                  <motion.li
                    key={route.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-30px" }}
                    custom={index * 0.04}
                    variants={caseStudyFadeUp}
                    className="w-[17rem] shrink-0 rounded-2xl border border-border bg-cream-muted p-6 md:w-[18rem] xl:w-auto xl:shrink"
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
                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-orange">
                      Direction
                    </p>
                    <h3 className="mt-1 font-bold text-black">{route.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-grey md:text-base">
                      <span className="font-semibold text-black">Hypothesis:</span>{" "}
                      {route.hypothesis}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-grey md:text-base">
                      <span className="font-semibold text-black">Learner response:</span>{" "}
                      {route.learnerResponse}
                    </p>
                  </motion.li>
                );
              })}
            </ul>
          </div>

          <figure className="mt-14 lg:mt-16">
            <MockupImage
              src="/images/work/kaizen-languages/visual-direction.png"
              alt="Reconstructed comparison of four Kaizen Languages visual directions across iPhone mockups."
              className="w-full"
            />
            <FigureCaption>
              Reconstructed representation of the four directions explored.
            </FigureCaption>
          </figure>
        </div>
      </section>

      <section
        id="testing"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="vd-testing-heading"
      >
        <div className={caseStudyContainer}>
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-12 xl:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
            >
              <CaseStudyLabel>Testing</CaseStudyLabel>
              <h2
                id="vd-testing-heading"
                className="text-balance font-black tracking-tight text-black text-2xl leading-[1.1] sm:text-3xl md:text-4xl"
              >
                {kaizenVisualDirection.researchFinding.headline}
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-black md:text-lg">
                {kaizenVisualDirection.researchFinding.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
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
                src="/images/work/kaizen-languages/process/product-workshop.jpg"
                alt="Product-design workshop reviewing the Kaizen mobile experience"
                className="rounded-2xl"
              />
              <FigureCaption>
                Early product workshop reviewing lesson structure and visual
                direction options.
              </FigureCaption>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="constraint"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="vd-constraint-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>Final direction</CaseStudyLabel>
            <h2
              id="vd-constraint-heading"
              className="text-balance font-black tracking-tight text-black text-2xl leading-[1.1] sm:text-3xl md:text-4xl"
            >
              {kaizenVisualDirection.constraint.headline}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-black md:text-lg">
              {kaizenVisualDirection.constraint.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          <figure className="mt-10">
            <MockupImage
              src="/images/work/kaizen-languages/visual-direction-routes-figma.jpg"
              alt="Figma board showing three explored app design routes with onboarding, sign-up and lesson flows."
              className="w-full"
            />
            <FigureCaption>
              Figma exploration of three onboarding and lesson flows built while
              comparing visual directions.
            </FigureCaption>
          </figure>

          <div className="mt-10">
            <KaizenDecisionTradeoff data={photographyTradeoff} columns={4} />
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
          >
            <KaizenResultsLearningSection
              data={kaizenStoryResultsLearning["visual-direction"]}
              aside={
                <MockupImage
                  src="/images/work/kaizen-languages/iphone-payments-mockup.png"
                  alt="Kaizen Languages Go premium subscription screen on iPhone"
                  className="h-auto w-full max-w-[328px] sm:max-w-[344px] lg:max-w-[360px]"
                  width={1200}
                  height={2000}
                />
              }
            />
          </motion.div>
        </div>
      </section>
    </KaizenFeatureShell>
  );
}
