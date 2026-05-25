"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Clock,
  Eye,
  Pencil,
  Search,
  ShieldQuestion,
  SlidersHorizontal,
  Sparkles,
  ShoppingBasket,
  Target,
  User,
  ArrowRight,
  NotepadText,
  MessageCircle,
} from "lucide-react";
import CaseStudyLabel from "@/components/case-study/CaseStudyLabel";
import CaseStudyHeadline from "@/components/case-study/CaseStudyHeadline";
import CaseStudyProof from "@/components/case-study/CaseStudyProof";
import CaseStudyQuote from "@/components/case-study/CaseStudyQuote";
import CaseStudySubnav from "@/components/case-study/CaseStudySubnav";
import { caseStudyContainer, caseStudySection } from "@/lib/case-study-layout";
import {
  shoppingListsSubnav,
  shoppingListsHero,
  myRole,
  whyItMattered,
  problem,
  quotes,
  insights,
  constraintsTradeoffs,
  hypothesis,
  principles,
  solution,
  decisions,
  validation,
  proof,
  impact,
  reflection,
} from "@/lib/shopping-lists-data";
import { cn } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const painIcons = {
  clock: Clock,
  brain: Brain,
  search: Search,
  shield: ShieldQuestion,
  user: User,
};

const insightIcons = {
  notepad: NotepadText,
  search: Search,
  sliders: SlidersHorizontal,
};

const decisionIcons = {
  eye: Eye,
  pencil: Pencil,
  target: Target,
  user: User,
};

const reflectionIcons = {
  sliders: SlidersHorizontal,
  eye: Eye,
  target: Target,
};

const hypothesisIcons = {
  message: MessageCircle,
  search: Search,
  basket: ShoppingBasket,
  sliders: SlidersHorizontal,
};

const featureColors = {
  purple: "bg-[#E8DEFF] text-black",
  orange: "bg-[#FFE4D6] text-black",
  pink: "bg-soft-pink text-black",
};

function MockupImage({
  src,
  alt,
  priority = false,
  className,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={cn("h-auto w-full object-contain", className)}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
    />
  );
}

export default function ShoppingListsCaseStudy() {
  return (
    <>
      <CaseStudySubnav items={shoppingListsSubnav} />

      {/* 01 Hero */}
      <section
        id="overview"
        className={cn(caseStudySection, "bg-white pb-0 pt-12 md:pt-16 lg:pt-20")}
        aria-labelledby="case-study-title"
      >
        <div className={caseStudyContainer}>
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-10 xl:gap-14">
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex-1 lg:max-w-[48%]"
            >
              <CaseStudyLabel>{shoppingListsHero.label}</CaseStudyLabel>
              <CaseStudyHeadline as="h1" id="case-study-title">
                {shoppingListsHero.title}
              </CaseStudyHeadline>
              <p className="mt-8 max-w-lg border-l-2 border-orange pl-6 text-base leading-relaxed text-black md:mt-10 md:text-lg">
                {shoppingListsHero.subcopy}
              </p>
              <dl className="mt-10 flex flex-col gap-5 lg:mt-12">
                {shoppingListsHero.meta.map((item) => (
                  <div key={item.label}>
                    <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-grey">
                      {item.label}
                    </dt>
                    <dd className="mt-1 text-sm font-medium leading-snug text-black md:text-base">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </motion.div>

            <motion.div
              custom={0.1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="relative flex flex-1 flex-col justify-end lg:justify-end"
            >
              <div className="relative mx-auto w-full max-w-[22rem] sm:max-w-[26rem] lg:ml-auto lg:max-w-none">
                <div
                  className="pointer-events-none absolute -right-[8%] top-[8%] z-0 aspect-square w-[75%] rounded-full bg-soft-pink md:w-[80%]"
                  aria-hidden
                />
                <div className="relative z-10">
                  <MockupImage
                    src={shoppingListsHero.image}
                    alt={shoppingListsHero.imageAlt}
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            className="mt-14 border-t border-border pt-12 md:mt-16 md:pt-14 lg:mt-20 lg:pt-16"
            aria-labelledby="my-role-heading"
          >
            <div className="lg:grid lg:grid-cols-2 lg:gap-10 xl:gap-14">
              <div>
                <div className="mb-5 flex flex-col items-start gap-3">
                  <div className="relative h-[4.5rem] w-[4rem] shrink-0 overflow-hidden rounded-[50%] bg-soft-pink ring-2 ring-orange/15 sm:h-20 sm:w-[4.5rem]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={myRole.avatar}
                      alt={myRole.avatarAlt}
                      className="h-full w-full object-cover object-[center_15%]"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h2
                    id="my-role-heading"
                    className="text-xs font-semibold uppercase tracking-[0.2em] text-orange"
                  >
                    {myRole.title}
                  </h2>
                </div>
                <p className="text-base leading-relaxed text-black md:text-lg">
                  {myRole.body}
                </p>
              </div>
              <ul className="mt-6 flex flex-col gap-3 lg:mt-0 lg:justify-center">
                {myRole.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-3 text-sm leading-relaxed text-black md:text-base"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange"
                      aria-hidden
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 02 Why it mattered */}
      <section
        id="why-it-mattered"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="why-heading"
      >
        <div className={caseStudyContainer}>
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
            >
              <CaseStudyLabel>{whyItMattered.label}</CaseStudyLabel>
              <CaseStudyHeadline id="why-heading">
                {whyItMattered.headline}
              </CaseStudyHeadline>
            </motion.div>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={0.08}
              variants={fadeUp}
              className="mt-6 text-base leading-relaxed text-black lg:mt-0 lg:pt-8 lg:text-lg"
            >
              {whyItMattered.body}
            </motion.p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
            {whyItMattered.stats.map((card, index) => (
              <motion.article
                key={card.description}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                custom={index * 0.06}
                variants={fadeUp}
                className="flex flex-col rounded-2xl border border-border bg-white p-6 md:p-7"
              >
                {card.stat ? (
                  <p className="text-3xl font-black text-orange md:text-4xl">
                    {card.stat}
                  </p>
                ) : null}
                <p
                  className={cn(
                    "text-sm leading-relaxed text-black md:text-base",
                    card.stat ? "mt-3" : "text-base font-medium",
                  )}
                >
                  {card.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 03 Problem */}
      <section
        id="problem"
        className={cn(caseStudySection, "bg-white pb-8 md:pb-12")}
        aria-labelledby="problem-heading"
      >
        <div className={caseStudyContainer}>
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <CaseStudyLabel>{problem.label}</CaseStudyLabel>
              <CaseStudyHeadline id="problem-heading">
                {problem.headline}
              </CaseStudyHeadline>
            </motion.div>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.08}
              variants={fadeUp}
              className="mt-6 text-base leading-relaxed text-black lg:mt-0 lg:pt-8 lg:text-lg"
            >
              {problem.body}
            </motion.p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:mt-16 lg:grid-cols-5 lg:gap-5">
            {problem.painPoints.map((point, index) => {
              const Icon = painIcons[point.icon];
              return (
                <motion.article
                  key={point.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                  custom={index * 0.05}
                  variants={fadeUp}
                  className="flex flex-col rounded-2xl border border-border bg-white p-5 text-center md:p-6"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#FFE4D6]">
                    <Icon className="h-6 w-6 text-orange" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-sm font-bold leading-snug text-black">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-grey md:text-sm">
                    {point.copy}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <CaseStudyQuote text={quotes[0].text} />

      {/* 04 Insights */}
      <section
        id="insights"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="insights-heading"
      >
        <div className={caseStudyContainer}>
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <CaseStudyLabel>{insights.label}</CaseStudyLabel>
              <CaseStudyHeadline id="insights-heading">
                {insights.headline}
              </CaseStudyHeadline>
            </motion.div>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.08}
              variants={fadeUp}
              className="mt-6 text-base leading-relaxed text-black lg:mt-0 lg:pt-8 lg:text-lg"
            >
              {insights.body}
            </motion.p>
          </div>

          <div className="mt-14 flex flex-col gap-5 lg:mt-16">
            {insights.cards.map((card, index) => {
              const Icon = insightIcons[card.icon];
              return (
                <motion.article
                  key={card.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  custom={index * 0.06}
                  variants={fadeUp}
                  className="flex flex-col gap-6 rounded-2xl border border-border bg-white p-6 md:flex-row md:items-start md:gap-8 md:p-8"
                >
                  <div className="flex flex-1 flex-col">
                    <span className="text-xs font-bold text-orange">
                      {card.number}
                    </span>
                    <h3 className="mt-2 text-lg font-bold text-black md:text-xl">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-grey md:text-base">
                      {card.copy}
                    </p>
                  </div>
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#FFE4D6] md:mt-2">
                    <Icon className="h-6 w-6 text-orange" strokeWidth={1.75} />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 05 Constraints & trade-offs */}
      <section
        id="constraints"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="constraints-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>{constraintsTradeoffs.label}</CaseStudyLabel>
            <CaseStudyHeadline id="constraints-heading">
              {constraintsTradeoffs.headline}
            </CaseStudyHeadline>
            <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
              {constraintsTradeoffs.intro}
            </p>
          </motion.div>

          <div className="mt-12 grid gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-orange">
                Constraints
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {constraintsTradeoffs.constraints.map((item, index) => (
                  <motion.li
                    key={item.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-30px" }}
                    custom={index * 0.03}
                    variants={fadeUp}
                    className="rounded-2xl border border-border bg-white p-4 md:p-5"
                  >
                    <p className="text-sm font-bold leading-snug text-black">
                      {item.title}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-grey">
                      {item.copy}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-orange">
                Trade-offs
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {constraintsTradeoffs.tradeoffs.map((item, index) => (
                  <motion.li
                    key={item.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-30px" }}
                    custom={index * 0.03}
                    variants={fadeUp}
                    className="rounded-2xl border border-border bg-white p-4 md:p-5"
                  >
                    <p className="text-sm font-bold leading-snug text-black">
                      {item.title}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-grey">
                      {item.copy}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CaseStudyQuote text={quotes[1].text} />

      {/* 06 Hypothesis */}
      <section
        id="hypothesis"
        className={cn(caseStudySection, "bg-cream")}
        aria-labelledby="hypothesis-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>{hypothesis.label}</CaseStudyLabel>
            <CaseStudyHeadline id="hypothesis-heading">
              {hypothesis.headline}
            </CaseStudyHeadline>
            <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
              {hypothesis.body}
            </p>
          </motion.div>

          <div className="mt-14 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:items-stretch lg:gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-7"
            >
              <ol className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-6 xl:gap-x-10">
                {hypothesis.steps.map((step, index) => {
                  const Icon = hypothesisIcons[step.icon];
                  return (
                    <li
                      key={step.label}
                      className="relative flex min-w-0 flex-col pr-2 lg:pr-0"
                    >
                      {index < hypothesis.steps.length - 1 ? (
                        <span
                          className="absolute left-[2.75rem] top-[2.35rem] hidden h-px w-[calc(100%-2.75rem)] border-t border-dashed border-orange/45 lg:block"
                          aria-hidden
                        />
                      ) : null}
                      <span className="text-xs font-bold text-orange">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="relative z-10 mt-3 flex h-11 w-11 items-center justify-center rounded-full border border-orange/40 bg-cream">
                        <Icon
                          className="h-5 w-5 text-orange"
                          strokeWidth={1.5}
                        />
                      </div>
                      <p className="mt-4 text-sm font-medium leading-relaxed text-black">
                        {step.label}
                      </p>
                    </li>
                  );
                })}
              </ol>
            </motion.div>

            <motion.aside
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.1}
              variants={fadeUp}
              className="relative flex min-h-[12rem] items-center overflow-hidden rounded-3xl bg-[#FFF0E8] p-8 md:min-h-[14rem] md:p-10 lg:col-span-5 lg:p-12"
            >
              <div
                className="pointer-events-none absolute -left-12 -top-8 h-40 w-40 rounded-full bg-orange/25 blur-2xl"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute bottom-0 right-0 h-32 w-32 translate-x-1/4 translate-y-1/4 rounded-full border border-orange/20"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute bottom-2 right-2 h-24 w-24 translate-x-1/4 translate-y-1/4 rounded-full border border-orange/15"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute right-4 top-4 grid grid-cols-4 gap-1.5"
                aria-hidden
              >
                {Array.from({ length: 16 }).map((_, i) => (
                  <span key={i} className="h-1.5 w-1.5 rounded-full bg-orange/70" />
                ))}
              </div>
              <div className="relative flex items-start gap-4">
                <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange text-white">
                  <ArrowRight className="h-5 w-5" strokeWidth={2} />
                </span>
                <p className="text-2xl font-black leading-tight tracking-tight text-black md:text-3xl lg:text-[2rem] lg:leading-[1.15]">
                  {hypothesis.panelTitle.replace(/\.\s*$/, "")}
                  <span className="text-orange">.</span>
                </p>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* 06 Principles */}
      <section
        id="principles"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="principles-heading"
      >
        <div className={caseStudyContainer}>
          <div className="relative lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-20">
            <div
              className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-soft-pink/50 blur-3xl"
              aria-hidden
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:sticky lg:top-40 lg:self-start"
            >
              <CaseStudyLabel>{principles.label}</CaseStudyLabel>
              <CaseStudyHeadline id="principles-heading">
                {principles.headline}
              </CaseStudyHeadline>
              <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
                {principles.subcopy}
              </p>
            </motion.div>

            <div className="mt-10 flex flex-col gap-5 lg:mt-0">
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-sm leading-relaxed text-grey md:text-base"
              >
                {principles.intro}
              </motion.p>
              {principles.items.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  custom={index * 0.06}
                  variants={fadeUp}
                  className="flex gap-5 rounded-2xl bg-[#FFF0E8] p-6 md:p-8"
                >
                  <SlidersHorizontal
                    className="mt-1 h-6 w-6 shrink-0 text-orange"
                    strokeWidth={1.75}
                  />
                  <div>
                    <h3 className="font-bold text-black">
                      <span className="text-orange">{item.number}</span>{" "}
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-black md:text-base">
                      {item.copy}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 07 Solution */}
      <section
        id="solution"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="solution-heading"
      >
        <div className={caseStudyContainer}>
          <div className="flex flex-col gap-14 lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex-1 lg:max-w-[46%]"
            >
              <CaseStudyLabel>{solution.label}</CaseStudyLabel>
              <CaseStudyHeadline id="solution-heading">
                {solution.headline}
              </CaseStudyHeadline>
              <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
                {solution.subcopy}
              </p>
              <ul className="mt-10 flex flex-col gap-8">
                {solution.features.map((feature) => (
                  <li key={feature.title} className="flex gap-4">
                    <span
                      className={cn(
                        "flex h-12 w-12 shrink-0 items-center justify-center rounded-full",
                        featureColors[feature.color],
                      )}
                    >
                      {feature.color === "purple" ? (
                        <Sparkles className="h-5 w-5" strokeWidth={1.75} />
                      ) : feature.color === "orange" ? (
                        <Pencil className="h-5 w-5" strokeWidth={1.75} />
                      ) : (
                        <ShoppingBasket className="h-5 w-5" strokeWidth={1.75} />
                      )}
                    </span>
                    <div>
                      <h3 className="font-bold text-black">{feature.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-grey md:text-base">
                        {feature.copy}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.1}
              variants={fadeUp}
              className="relative flex-1"
            >
              <div
                className="pointer-events-none absolute -left-[5%] top-[5%] z-0 aspect-square w-[55%] rounded-full bg-orange"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute bottom-[5%] right-[0%] z-0 aspect-square w-[50%] rounded-full bg-soft-pink"
                aria-hidden
              />
              <div className="relative z-10">
                <MockupImage src={solution.image} alt={solution.imageAlt} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 08 Decisions */}
      <section
        id="decisions"
        className={cn(caseStudySection, "bg-cream pb-16 md:pb-20 lg:pb-24")}
        aria-labelledby="decisions-heading"
      >
        <div className={caseStudyContainer}>
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <CaseStudyLabel>{decisions.label}</CaseStudyLabel>
              <CaseStudyHeadline id="decisions-heading">
                {decisions.headline}
              </CaseStudyHeadline>
              <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
                {decisions.subcopy}
              </p>
              <div className="relative mx-auto mt-14 mb-2 hidden h-[21rem] w-full max-w-[320px] lg:mb-6 lg:mt-16 lg:block">
                <div
                  className="pointer-events-none absolute left-1/2 top-[62%] z-0 aspect-square w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange"
                  aria-hidden
                />
                <div className="absolute left-1/2 top-[62%] z-10 flex w-full -translate-x-1/2 -translate-y-1/2 justify-center">
                  <MockupImage
                    src={decisions.image}
                    alt={decisions.imageAlt}
                    className="max-w-[280px]"
                  />
                </div>
              </div>
            </motion.div>

            <div className="mt-10 flex flex-col gap-4 lg:mt-0">
              {decisions.items.map((item, index) => {
                const Icon = decisionIcons[item.icon];
                return (
                  <motion.article
                    key={item.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    custom={index * 0.05}
                    variants={fadeUp}
                    className="flex items-start gap-4 rounded-2xl border border-border bg-white p-6 md:p-7"
                  >
                    <div
                      className={cn(
                        "flex h-12 w-12 shrink-0 items-center justify-center rounded-full",
                        index % 2 === 0 ? "bg-[#FFE4D6]" : "bg-soft-pink",
                      )}
                    >
                      <Icon className="h-5 w-5 text-orange" strokeWidth={1.75} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base font-bold leading-snug text-black md:text-lg">
                        <span className="text-orange">{item.number}</span>{" "}
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-grey md:text-base">
                        {item.copy}
                      </p>
                    </div>
                    <ArrowRight
                      className="mt-1 hidden h-5 w-5 shrink-0 text-orange sm:block"
                      aria-hidden
                    />
                  </motion.article>
                );
              })}
            </div>
          </div>

          <div className="relative mx-auto mt-14 mb-2 h-[21rem] max-w-[320px] lg:hidden">
            <div
              className="pointer-events-none absolute left-1/2 top-[62%] z-0 aspect-square w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange"
              aria-hidden
            />
            <div className="absolute left-1/2 top-[62%] z-10 flex w-full -translate-x-1/2 -translate-y-1/2 justify-center">
              <MockupImage
                src={decisions.image}
                alt={decisions.imageAlt}
                className="max-w-[280px]"
              />
            </div>
          </div>
        </div>
      </section>

      <CaseStudyQuote text={quotes[2].text} />

      {/* 09 Validation */}
      <section
        id="validation"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="validation-heading"
      >
        <div className={caseStudyContainer}>
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <CaseStudyLabel>{validation.label}</CaseStudyLabel>
              <CaseStudyHeadline id="validation-heading">
                {validation.headline}
              </CaseStudyHeadline>
              <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
                {validation.body}
              </p>

              <div className="mt-10 rounded-2xl bg-[#FFF0E8] p-6 md:p-8">
                <h3 className="font-bold text-black">Our validation process</h3>
                <ol className="mt-8 flex flex-col gap-8 sm:grid sm:grid-cols-2 sm:gap-6 lg:flex lg:flex-col lg:gap-8">
                  {validation.process.map((step) => (
                    <li key={step.title} className="flex gap-4">
                      <span className="text-xs font-bold text-orange">
                        {step.number}
                      </span>
                      <div>
                        <p className="font-bold text-black">{step.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-grey">
                          {step.copy}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </motion.div>

            <div className="mt-10 flex flex-col gap-5 lg:mt-0">
              <p className="text-sm font-semibold text-black md:text-base">
                What we learned (and how we responded)
              </p>
              {validation.learnings.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  custom={index * 0.06}
                  variants={fadeUp}
                  className="rounded-2xl border border-border bg-white p-6 md:p-7"
                >
                  <span
                    className={cn(
                      "text-xs font-bold",
                      index % 2 === 0 ? "text-pink" : "text-orange",
                    )}
                  >
                    {item.number}
                  </span>
                  <h3 className="mt-2 font-bold text-black">{item.title}</h3>
                  <p className="mt-3 text-sm italic leading-relaxed text-grey">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-black md:text-base">
                    <span className="font-bold">→ What we did:</span>{" "}
                    {item.response}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CaseStudyProof
        content={proof}
        headingId="proof-heading"
        sectionClassName="bg-cream"
        cardClassName="bg-white"
      />

      {/* 10 Impact */}
      <section
        id="impact"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="impact-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>{impact.label}</CaseStudyLabel>
            <CaseStudyHeadline id="impact-heading">
              {impact.headline}
            </CaseStudyHeadline>
            <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
              {impact.body}
            </p>
          </motion.div>

          <div className="-mx-6 mt-14 overflow-x-auto px-6 scrollbar-none lg:mx-0 lg:mt-16 lg:overflow-visible lg:px-0">
            <div className="flex min-w-max gap-4 lg:min-w-0 lg:grid lg:grid-cols-5 lg:gap-5">
              {impact.outcomes.map((outcome, index) => (
                <motion.article
                  key={outcome.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  custom={index * 0.05}
                  variants={fadeUp}
                  className="w-[17rem] shrink-0 rounded-2xl border border-border bg-white p-6 md:w-[18rem] md:p-7 lg:w-auto lg:shrink"
                >
                  <h3 className="text-sm font-bold leading-snug text-black md:text-base">
                    {outcome.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-grey">
                    {outcome.copy}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11 Reflection */}
      <section
        id="reflection"
        className={cn(caseStudySection, "bg-cream")}
        aria-labelledby="reflection-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>{reflection.label}</CaseStudyLabel>
            <CaseStudyHeadline id="reflection-heading">
              {reflection.headline}
            </CaseStudyHeadline>
            <p className="mt-6 text-lg font-medium leading-relaxed text-black md:text-xl">
              {reflection.lead}
            </p>
            <p className="mt-6 text-base leading-relaxed text-grey md:text-lg">
              {reflection.body}
            </p>
          </motion.div>

          <div className="mt-14 grid gap-5 md:grid-cols-3 lg:mt-16">
            {reflection.cards.map((card, index) => {
              const Icon = reflectionIcons[card.icon];
              return (
                <motion.article
                  key={card.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  custom={index * 0.06}
                  variants={fadeUp}
                  className="flex flex-col rounded-2xl border border-border bg-white p-6 md:p-8"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#FFE4D6]">
                    <Icon className="h-5 w-5 text-orange" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-bold text-black">{card.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-grey md:text-base">
                    {card.copy}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
