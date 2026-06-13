"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Check } from "lucide-react";
import CaseStudyMockupImage from "@/components/case-study/CaseStudyMockupImage";
import CaseStudyProjectNav from "@/components/case-study/CaseStudyProjectNav";
import CaseStudySubnav from "@/components/case-study/CaseStudySubnav";
import { caseStudyFadeUp } from "@/components/case-study/case-study-motion";
import {
  caseStudyContainer,
  caseStudyHeroImageColumn,
  caseStudyHeroRow,
  caseStudySection,
} from "@/lib/case-study-layout";
import {
  cellarSubnav,
  cellarHero,
  cellarOpportunity,
  cellarProblem,
  cellarReframe,
  cellarStrategy,
  cellarOutcome,
  cellarProjectNav,
} from "@/lib/cellar-data";
import { cn } from "@/lib/utils";

function CellarLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cellar-burgundy">
      {children}
    </p>
  );
}

function CellarHeadline({
  children,
  id,
  className,
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <h2
      id={id}
      className={cn(
        "text-balance text-2xl font-black leading-tight tracking-tight text-black sm:text-3xl md:text-4xl",
        className,
      )}
    >
      {children}
      <span className="text-cellar-burgundy">.</span>
    </h2>
  );
}

function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(caseStudySection, "py-14 md:py-16 lg:py-20", className)}
    >
      <div className={caseStudyContainer}>{children}</div>
    </section>
  );
}

export default function CellarCaseStudy() {
  return (
    <>
      <CaseStudySubnav
        items={cellarSubnav}
        accentClassName="border-cellar-burgundy bg-cellar-burgundy text-white"
      />

      {/* Hero */}
      <section
        id="overview"
        className={cn(caseStudySection, "border-b border-border bg-white pb-12 pt-10 md:pb-16 md:pt-12 lg:pb-20 lg:pt-14")}
        aria-labelledby="cellar-title"
      >
        <div className={caseStudyContainer}>
          <div className={cn(caseStudyHeroRow, "lg:items-center lg:gap-12 xl:gap-16")}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
              className="flex flex-1 flex-col lg:max-w-[46%]"
            >
              <CellarLabel>{cellarHero.label}</CellarLabel>
              <h1
                id="cellar-title"
                className="mt-4 text-3xl font-black tracking-tight text-black md:text-4xl lg:text-[2.75rem]"
              >
                {cellarHero.title}
              </h1>
              <p className="mt-4 text-lg font-medium leading-snug text-black md:text-xl">
                {cellarHero.headline}
              </p>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-grey md:text-base">
                {cellarHero.intro}
              </p>
              <dl className="mt-8 grid gap-5 border-t border-border pt-6 sm:grid-cols-2">
                <div>
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-grey">
                    Role
                  </dt>
                  <dd className="mt-1.5 text-sm font-medium text-black">
                    {cellarHero.meta.role}
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-grey">
                    Duration
                  </dt>
                  <dd className="mt-1.5 text-sm font-medium text-black">
                    {cellarHero.meta.duration}
                  </dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-grey">
                    Team
                  </dt>
                  <dd className="mt-1.5 text-sm font-medium text-black">
                    {cellarHero.meta.team}
                  </dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-grey">
                    Focus areas
                  </dt>
                  <dd className="mt-2 flex flex-wrap gap-1.5">
                    {cellarHero.meta.focus.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-cellar-burgundy/20 bg-cellar-burgundy-muted px-2.5 py-1 text-[11px] font-medium text-cellar-burgundy"
                      >
                        {item}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.08}
              variants={caseStudyFadeUp}
              className={cn(caseStudyHeroImageColumn, "relative flex-1")}
            >
              <div className="overflow-hidden rounded-sm border border-border bg-cellar-burgundy-muted">
                <CaseStudyMockupImage
                  src={cellarHero.image}
                  alt={cellarHero.imageAlt}
                  priority
                  className="w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Opportunity */}
      <Section id="opportunity" className="bg-cellar-burgundy-muted/40">
        <div className="lg:grid lg:grid-cols-12 lg:gap-10 xl:gap-14">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="lg:col-span-5"
          >
            <CellarLabel>{cellarOpportunity.label}</CellarLabel>
            <CellarHeadline id="cellar-opportunity-heading" className="mt-3">
              {cellarOpportunity.headline}
            </CellarHeadline>
            <div className="mt-5 space-y-3 text-sm leading-relaxed text-grey md:text-base">
              <p className="text-black">{cellarOpportunity.body}</p>
              <p>{cellarOpportunity.body2}</p>
            </div>
          </motion.div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-7 lg:mt-0">
            {cellarOpportunity.metrics.map((item, index) => (
              <motion.article
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                custom={index * 0.04}
                variants={caseStudyFadeUp}
                className="rounded-xl border border-border bg-white p-4 md:p-5"
              >
                <p className="text-xl font-black leading-none text-cellar-burgundy md:text-2xl">
                  {item.metric}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-grey md:text-sm">
                  {item.title}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </Section>

      {/* Problem */}
      <Section id="problem" className="bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={caseStudyFadeUp}
          className="max-w-2xl"
        >
          <CellarLabel>{cellarProblem.label}</CellarLabel>
          <CellarHeadline id="cellar-problem-heading" className="mt-3">
            {cellarProblem.headline}
          </CellarHeadline>
        </motion.div>

        <div className="mt-8 grid gap-6 lg:mt-10 lg:grid-cols-2 lg:gap-8">
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={caseStudyFadeUp}
            className="rounded-xl border border-border bg-cellar-burgundy-muted/50 p-5 md:p-6"
          >
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-cellar-burgundy">
              {cellarProblem.roadmap.title}
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              {cellarProblem.roadmap.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-black"
                >
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-cellar-burgundy/50"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-4 border-t border-border/80 pt-5">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-grey">
                  Estimated delivery
                </p>
                <p className="mt-1 text-base font-bold text-black">
                  {cellarProblem.roadmap.delivery}
                </p>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-grey">
                  Engineering effort
                </p>
                <p className="mt-1 text-base font-bold text-black">
                  {cellarProblem.roadmap.effort}
                </p>
              </div>
            </div>
          </motion.article>

          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            custom={0.06}
            variants={caseStudyFadeUp}
            className="rounded-xl border border-border bg-white p-5 md:p-6"
          >
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-cellar-burgundy">
              {cellarProblem.learned.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-grey md:text-base">
              {cellarProblem.learned.intro}
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {cellarProblem.learned.items.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm text-black md:text-base">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-cellar-burgundy"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </motion.article>
        </div>

        <motion.blockquote
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={caseStudyFadeUp}
          className="mt-8 border-l-2 border-cellar-burgundy pl-5 md:mt-10 md:pl-7"
        >
          <p className="text-base font-medium leading-relaxed text-black md:text-lg">
            &ldquo;{cellarProblem.quote}&rdquo;
          </p>
        </motion.blockquote>
      </Section>

      {/* Reframe — turning point */}
      <section className="border-y border-cellar-burgundy/15 bg-cellar-burgundy-muted py-12 md:py-14 lg:py-16">
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="mx-auto max-w-3xl"
          >
            <div className="rounded-xl border border-cellar-burgundy/15 bg-white p-5 md:p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-grey">
                Before
              </p>
              <p className="mt-2 text-base leading-relaxed text-grey md:text-lg">
                {cellarReframe.before}
              </p>
            </div>
            <div className="flex justify-center py-4" aria-hidden>
              <ArrowDown className="h-6 w-6 text-cellar-burgundy" />
            </div>
            <div className="rounded-xl border border-cellar-burgundy/30 bg-white p-5 md:p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cellar-burgundy">
                After
              </p>
              <p className="mt-2 text-lg font-bold leading-snug text-black md:text-xl">
                {cellarReframe.after}
              </p>
            </div>
            <p className="mt-6 text-center text-sm leading-relaxed text-grey md:text-base">
              {cellarReframe.copy}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Strategy */}
      <Section id="strategy" className="bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={caseStudyFadeUp}
          className="max-w-2xl"
        >
          <CellarLabel>{cellarStrategy.label}</CellarLabel>
          <CellarHeadline id="cellar-strategy-heading" className="mt-3">
            {cellarStrategy.headline}
          </CellarHeadline>
          <p className="mt-2 text-base font-semibold text-cellar-burgundy md:text-lg">
            {cellarStrategy.subtitle}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-grey md:text-base">
            {cellarStrategy.body}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={caseStudyFadeUp}
          className="mt-8 rounded-xl border border-border bg-cellar-burgundy-muted/40 p-5 md:p-6 lg:mt-10"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cellar-burgundy">
            Customer flow
          </p>
          <ol className="mt-4 flex flex-col gap-0 sm:flex-row sm:flex-wrap sm:items-center sm:gap-2">
            {cellarStrategy.flow.map((step, index) => (
              <li key={step} className="flex items-center gap-2">
                <span className="rounded-lg border border-border bg-white px-3 py-2 text-xs font-medium text-black sm:text-sm">
                  {step}
                </span>
                {index < cellarStrategy.flow.length - 1 ? (
                  <ArrowRight
                    className="hidden h-4 w-4 shrink-0 text-cellar-burgundy/50 sm:block"
                    aria-hidden
                  />
                ) : null}
                {index < cellarStrategy.flow.length - 1 ? (
                  <ArrowDown
                    className="my-1 h-4 w-4 text-cellar-burgundy/50 sm:hidden"
                    aria-hidden
                  />
                ) : null}
              </li>
            ))}
          </ol>
        </motion.div>

        <div className="mt-6 grid gap-4 md:grid-cols-3 md:gap-5 lg:mt-8">
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={caseStudyFadeUp}
            className="rounded-xl border border-cellar-burgundy/20 bg-cellar-burgundy-muted/60 p-5"
          >
            <h3 className="text-sm font-bold text-cellar-burgundy">Included</h3>
            <ul className="mt-4 flex flex-col gap-2">
              {cellarStrategy.included.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-black">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cellar-burgundy" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.article>

          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            custom={0.04}
            variants={caseStudyFadeUp}
            className="rounded-xl border border-border bg-white p-5"
          >
            <h3 className="text-sm font-bold text-black">Deferred</h3>
            <ul className="mt-4 flex flex-col gap-2">
              {cellarStrategy.deferred.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-grey">
                  <span
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-grey/50"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </motion.article>

          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            custom={0.08}
            variants={caseStudyFadeUp}
            className="rounded-xl border border-cellar-burgundy/15 bg-white p-5 md:col-span-1"
          >
            <h3 className="text-sm font-bold text-cellar-burgundy">Trade-off</h3>
            <p className="mt-4 text-sm leading-relaxed text-black">
              {cellarStrategy.tradeoff}
            </p>
          </motion.article>
        </div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={caseStudyFadeUp}
          className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-6 lg:mt-8"
        >
          {cellarStrategy.benefits.map((benefit) => (
            <li
              key={benefit}
              className="flex items-center gap-2 text-sm font-medium text-black"
            >
              <Check className="h-4 w-4 shrink-0 text-cellar-burgundy" aria-hidden />
              {benefit}
            </li>
          ))}
        </motion.ul>
      </Section>

      {/* Outcome */}
      <Section id="outcome" className="bg-cellar-burgundy-muted/40">
        <div className="lg:grid lg:grid-cols-12 lg:gap-10 xl:gap-14">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="lg:col-span-5"
          >
            <CellarLabel>{cellarOutcome.label}</CellarLabel>
            <CellarHeadline id="cellar-outcome-heading" className="mt-3">
              {cellarOutcome.headline}
            </CellarHeadline>
            <p className="mt-4 text-sm leading-relaxed text-grey md:text-base">
              {cellarOutcome.body}
            </p>

            <div className="mt-6 rounded-xl border border-border bg-white p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cellar-burgundy">
                Next priority
              </p>
              <p className="mt-1 text-lg font-bold text-black">
                {cellarOutcome.priority}
              </p>
              <ul className="mt-4 flex flex-col gap-2">
                {cellarOutcome.benefits.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-black">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cellar-burgundy" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              {cellarOutcome.roadmap.map((step, index) => (
                <span key={step} className="flex items-center gap-2">
                  <span className="rounded-full border border-cellar-burgundy/20 bg-white px-3 py-1.5 text-xs font-semibold text-cellar-burgundy">
                    {step}
                  </span>
                  {index < cellarOutcome.roadmap.length - 1 ? (
                    <span className="text-cellar-burgundy/40" aria-hidden>
                      →
                    </span>
                  ) : null}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-7 lg:mt-0">
            {cellarOutcome.metrics.map((item, index) => (
              <motion.article
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                custom={index * 0.04}
                variants={caseStudyFadeUp}
                className="rounded-xl border border-border bg-white p-4 md:p-5"
              >
                <p className="text-xl font-black leading-none text-cellar-burgundy md:text-2xl">
                  {item.metric}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-grey md:text-sm">
                  {item.title}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </Section>

      <CaseStudyProjectNav
        previous={cellarProjectNav.previous}
        next={cellarProjectNav.next}
      />
    </>
  );
}
