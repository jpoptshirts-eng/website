"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Clock,
  Layers,
  Monitor,
  RefreshCw,
  Search,
  ShieldQuestion,
  ShoppingBasket,
  SlidersHorizontal,
  Smartphone,
  Sparkles,
  Target,
  User,
  MessageCircle,
} from "lucide-react";
import CaseStudyLabel from "@/components/case-study/CaseStudyLabel";
import CaseStudyHeadline from "@/components/case-study/CaseStudyHeadline";
import CaseStudyQuote from "@/components/case-study/CaseStudyQuote";
import CaseStudySubnav from "@/components/case-study/CaseStudySubnav";
import ArrowLink from "@/components/ArrowLink";
import { caseStudyContainer, caseStudySection, caseStudyHeroRow, caseStudyHeroImageColumn } from "@/lib/case-study-layout";
import {
  shoppingListsSubnav,
  shoppingListsHero,
  myRole,
  whyItMattered,
  listHabit,
  listCommercial,
  problem,
  modelShift,
  productGap,
  quotes,
  designPrinciples,
  intentMapping,
  mvpScope,
  feedbackLoop,
  validation,
  impact,
  closing,
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

const mappingIcons = {
  message: MessageCircle,
  search: Search,
  basket: ShoppingBasket,
  sliders: SlidersHorizontal,
};

const principleIcons = {
  target: Target,
  sparkles: Sparkles,
  sliders: SlidersHorizontal,
  shield: ShieldQuestion,
  refresh: RefreshCw,
};

const decisionIcons = {
  search: Search,
  user: User,
};

const productGapIcons = {
  smartphone: Smartphone,
  monitor: Monitor,
  layers: Layers,
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
      className={cn("h-auto w-full bg-transparent object-contain", className)}
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
          <div className={cn(caseStudyHeroRow, "md:items-start")}>
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex-1 md:max-w-[48%]"
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

            <div className={cn("relative justify-end", caseStudyHeroImageColumn)}>
              <div className="relative ml-auto w-full max-w-[24rem] sm:max-w-[28rem] md:max-w-[26rem] lg:max-w-[28rem]">
                <div
                  className="pointer-events-none absolute -right-[8%] top-[12%] z-0 aspect-square w-[78%] rounded-full bg-soft-pink md:top-[10%] md:w-[82%]"
                  aria-hidden
                />
                <div className="relative z-10">
                  <MockupImage
                    src={shoppingListsHero.image}
                    alt={shoppingListsHero.imageAlt}
                    priority
                    className="max-h-[24rem] object-bottom sm:max-h-[26rem] lg:max-h-[28rem]"
                  />
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            className="mt-12 border-t border-border pt-10 md:pt-12"
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
        className={cn(caseStudySection, "bg-cream-muted pt-[100px] pb-16 md:pb-20 lg:pb-24")}
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

      {/* List habit evidence */}
      <section
        id="behaviour"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="behaviour-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>{listHabit.label}</CaseStudyLabel>
            <CaseStudyHeadline id="behaviour-heading">
              {listHabit.headline}
            </CaseStudyHeadline>
            <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
              {listHabit.intro}
            </p>
          </motion.div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
            {listHabit.stats.map((item, index) => (
              <motion.article
                key={item.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                custom={index * 0.04}
                variants={fadeUp}
                className="rounded-2xl border border-border bg-cream-muted p-6"
              >
                <p className="text-2xl font-black text-orange md:text-3xl">
                  {item.stat}
                </p>
                <p className="mt-2 text-sm font-bold text-black">{item.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-grey">
                  {item.copy}
                </p>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-10 max-w-3xl lg:mt-12"
          >
            <h3 className="text-lg font-bold text-black md:text-xl">
              {listHabit.insightTitle}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-grey md:text-lg">
              {listHabit.insight}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Commercial behaviour */}
      <section
        id="commercial"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="commercial-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>{listCommercial.label}</CaseStudyLabel>
            <CaseStudyHeadline id="commercial-heading">
              {listCommercial.headline}
            </CaseStudyHeadline>
            <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
              {listCommercial.body}
            </p>
          </motion.div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12">
            {listCommercial.stats.map((item, index) => (
              <motion.article
                key={item.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                custom={index * 0.04}
                variants={fadeUp}
                className="rounded-2xl border border-border bg-white p-6"
              >
                <p className="text-xl font-black text-orange md:text-2xl">
                  {item.stat}
                </p>
                <p className="mt-2 text-sm font-bold text-black">{item.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-grey">
                  {item.copy}
                </p>
              </motion.article>
            ))}
          </div>

          <div className="mt-12 lg:mt-14">
            <h3 className="text-lg font-bold text-black md:text-xl">
              {listCommercial.objectiveTitle}
            </h3>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-grey md:text-lg">
              {listCommercial.objectiveCopy}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {listCommercial.objectives.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                  custom={index * 0.04}
                  variants={fadeUp}
                  className="rounded-2xl border border-border bg-white p-5 md:p-6"
                >
                  <h4 className="font-bold text-black">{item.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-grey">
                    {item.copy}
                  </p>
                </motion.article>
              ))}
            </div>
            <p className="mt-8 text-sm leading-relaxed text-grey md:text-base">
              {listCommercial.opportunityLine}
            </p>
          </div>
        </div>
      </section>

      {/* 03 The problem */}
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

      {/* Model shift */}
      <section
        id="model-shift"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="model-shift-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>{modelShift.label}</CaseStudyLabel>
            <CaseStudyHeadline id="model-shift-heading">
              {modelShift.headline}
            </CaseStudyHeadline>
            <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
              {modelShift.intro}
            </p>
          </motion.div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12">
            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="rounded-2xl border border-border bg-white p-6 md:p-7"
            >
              <h3 className="font-bold text-black">
                {modelShift.searchModel.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-2">
                {modelShift.searchModel.bullets.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-grey md:text-base"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-grey"
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
              viewport={{ once: true }}
              custom={0.05}
              variants={fadeUp}
              className="rounded-2xl border border-orange/25 bg-white p-6 md:p-7"
            >
              <h3 className="font-bold text-black">
                {modelShift.predictionModel.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-2">
                {modelShift.predictionModel.bullets.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-black md:text-base"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          </div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-10 max-w-3xl border-l-2 border-orange pl-6 text-base font-medium leading-relaxed text-black md:text-lg"
          >
            {modelShift.closing}
          </motion.p>
        </div>
      </section>

      {/* Product gap */}
      <section
        id="product-gap"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="product-gap-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>{productGap.label}</CaseStudyLabel>
            <CaseStudyHeadline id="product-gap-heading">
              {productGap.headline}
            </CaseStudyHeadline>
            <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
              {productGap.body}
            </p>
            <p className="mt-4 text-base leading-relaxed text-grey md:text-lg">
              {productGap.opportunity}
            </p>
          </motion.div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:mt-12">
            {productGap.cards.map((card, index) => {
              const Icon = productGapIcons[card.icon];
              return (
                <motion.article
                  key={card.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                  custom={index * 0.05}
                  variants={fadeUp}
                  className="rounded-2xl border border-border bg-white p-6"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#FFE4D6]">
                    <Icon className="h-5 w-5 text-orange" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-bold text-black">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-grey">
                    {card.copy}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <CaseStudyQuote text={quotes[0].text} />

      {/* Design principles */}
      <section
        id="principles"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="principles-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>{designPrinciples.label}</CaseStudyLabel>
            <CaseStudyHeadline id="principles-heading">
              {designPrinciples.headline}
            </CaseStudyHeadline>
            <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
              {designPrinciples.intro}
            </p>
          </motion.div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-5">
            {designPrinciples.items.map((item, index) => {
              const Icon = principleIcons[item.icon];
              return (
                <motion.article
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                  custom={index * 0.04}
                  variants={fadeUp}
                  className="flex flex-col rounded-2xl bg-[#FFF0E8] p-5 md:p-6"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-white">
                    <Icon className="h-5 w-5 text-orange" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-bold text-black">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-grey">
                    {item.copy}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <CaseStudyQuote text={quotes[1].text} />

      {/* Intent-to-product mapping */}
      <section
        id="mapping"
        className={cn(caseStudySection, "bg-cream")}
        aria-labelledby="mapping-heading"
      >
        <div className={caseStudyContainer}>
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-12 xl:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <CaseStudyLabel>{intentMapping.label}</CaseStudyLabel>
              <CaseStudyHeadline id="mapping-heading">
                {intentMapping.headline}
              </CaseStudyHeadline>
              <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
                {intentMapping.intro}
              </p>

              <ol className="mt-10 flex flex-col gap-4">
                {intentMapping.steps.map((step, index) => {
                  const Icon = mappingIcons[step.icon];
                  return (
                    <motion.li
                      key={step.title}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-30px" }}
                      custom={index * 0.04}
                      variants={fadeUp}
                      className="flex gap-4 rounded-2xl border border-border bg-white p-5"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFE4D6]">
                        <Icon
                          className="h-4 w-4 text-orange"
                          strokeWidth={1.75}
                        />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-orange">
                          {step.number}
                        </span>
                        <h3 className="mt-1 font-bold text-black">
                          {step.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-grey">
                          {step.copy}
                        </p>
                      </div>
                    </motion.li>
                  );
                })}
              </ol>
              <p className="mt-8 text-sm leading-relaxed text-grey md:text-base">
                {intentMapping.closing}
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.08}
              variants={fadeUp}
              className="relative mt-10 lg:mt-0 lg:sticky lg:top-28"
            >
              <div
                className="pointer-events-none absolute -left-[5%] top-[5%] z-0 aspect-square w-[55%] rounded-full bg-orange"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute bottom-[5%] right-0 z-0 aspect-square w-[50%] rounded-full bg-soft-pink"
                aria-hidden
              />
              <div className="relative z-10">
                <MockupImage
                  src={intentMapping.image}
                  alt={intentMapping.imageAlt}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MVP scope and trade-offs */}
      <section
        id="trade-offs"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="trade-offs-heading"
      >
        <div className={caseStudyContainer}>
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-12 xl:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <CaseStudyLabel>{mvpScope.label}</CaseStudyLabel>
              <CaseStudyHeadline id="trade-offs-heading">
                {mvpScope.headline}
              </CaseStudyHeadline>
              <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
                {mvpScope.intro}
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-orange">
                    Included in MVP
                  </h3>
                  <ul className="mt-4 flex flex-col gap-2">
                    {mvpScope.included.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-relaxed text-black md:text-base"
                      >
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange"
                          aria-hidden
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-orange">
                    Removed from MVP
                  </h3>
                  <ul className="mt-4 flex flex-col gap-2">
                    {mvpScope.removed.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-relaxed text-black md:text-base"
                      >
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange"
                          aria-hidden
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-grey md:text-base">
                {mvpScope.voiceNote}
              </p>

              <div className="mt-8 flex flex-col gap-4">
                {mvpScope.decisions.map((item) => {
                  const Icon = decisionIcons[item.icon];
                  return (
                    <article
                      key={item.title}
                      className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFE4D6]">
                        <Icon
                          className="h-4 w-4 text-orange"
                          strokeWidth={1.75}
                        />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-black">
                          <span className="text-orange">{item.number}</span>{" "}
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-grey">
                          {item.copy}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>

              <div className="mt-8 flex flex-col gap-3">
                {mvpScope.constraints.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-border bg-white p-4"
                  >
                    <p className="text-sm font-bold text-black">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-grey">
                      {item.copy}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.08}
              variants={fadeUp}
              className="relative mx-auto mt-10 max-w-[320px] lg:mt-0"
            >
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 z-0 aspect-square w-[115%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange"
                aria-hidden
              />
              <div className="relative z-10">
                <MockupImage src={mvpScope.image} alt={mvpScope.imageAlt} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feedback loop */}
      <section
        id="feedback"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="feedback-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>{feedbackLoop.label}</CaseStudyLabel>
            <CaseStudyHeadline id="feedback-heading">
              {feedbackLoop.headline}
            </CaseStudyHeadline>
            <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
              {feedbackLoop.intro}
            </p>
          </motion.div>

          <div className="mt-10 hidden overflow-hidden rounded-2xl border border-border bg-white lg:mt-12 lg:block">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border bg-[#FFF0E8]">
                  <th className="px-5 py-4 font-bold text-black">
                    Customer action
                  </th>
                  <th className="px-5 py-4 font-bold text-black">
                    What the system learns
                  </th>
                  <th className="px-5 py-4 font-bold text-black">
                    Future behaviour
                  </th>
                </tr>
              </thead>
              <tbody>
                {feedbackLoop.rows.map((row) => (
                  <tr key={row.action} className="border-b border-border last:border-0">
                    <td className="px-5 py-4 font-medium text-black">
                      {row.action}
                    </td>
                    <td className="px-5 py-4 text-grey">{row.learns}</td>
                    <td className="px-5 py-4 text-grey">{row.future}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 flex flex-col gap-4 lg:hidden">
            {feedbackLoop.rows.map((row, index) => (
              <motion.article
                key={row.action}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                custom={index * 0.04}
                variants={fadeUp}
                className="rounded-2xl border border-border bg-white p-5"
              >
                <p className="font-bold text-black">{row.action}</p>
                <p className="mt-2 text-sm text-grey">
                  <span className="font-semibold text-black">Learns:</span>{" "}
                  {row.learns}
                </p>
                <p className="mt-1 text-sm text-grey">
                  <span className="font-semibold text-black">Future:</span>{" "}
                  {row.future}
                </p>
              </motion.article>
            ))}
          </div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-10 max-w-3xl border-l-2 border-orange pl-6 text-base font-medium leading-relaxed text-black md:text-lg"
          >
            {feedbackLoop.closing}
          </motion.p>
        </div>
      </section>

      {/* Validation and iteration */}
      <section
        id="validation"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="validation-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>{validation.label}</CaseStudyLabel>
            <CaseStudyHeadline id="validation-heading">
              {validation.headline}
            </CaseStudyHeadline>
            <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
              {validation.body}
            </p>
          </motion.div>

          <div className="mt-10 grid grid-cols-3 gap-4 lg:mt-12">
            {validation.testing.map((item, index) => (
              <motion.div
                key={item.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                custom={index * 0.04}
                variants={fadeUp}
                className="rounded-2xl border border-border bg-[#FFF0E8] p-5 text-center"
              >
                <p className="text-2xl font-black text-orange md:text-3xl">
                  {item.stat}
                </p>
                <p className="mt-1 text-xs leading-snug text-black md:text-sm">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12">
            <div className="rounded-2xl border border-border bg-cream-muted p-6 md:p-7">
              <h3 className="font-bold text-black">What testing validated</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {validation.validated.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-black md:text-base"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-cream-muted p-6 md:p-7">
              <h3 className="font-bold text-black">What changed</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {validation.changed.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-black md:text-base"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-8 text-sm leading-relaxed text-grey md:text-base"
          >
            {validation.note}
          </motion.p>

          <div className="mt-14 border-t border-border pt-12 lg:mt-16">
            <h3 className="text-lg font-bold text-black md:text-xl">
              {validation.nextTitle}
            </h3>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {validation.nextColumns.map((column, index) => (
                <motion.article
                  key={column.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                  custom={index * 0.05}
                  variants={fadeUp}
                  className="rounded-2xl border border-border bg-cream-muted p-6"
                >
                  <h4 className="font-bold text-black">{column.title}</h4>
                  <ul className="mt-4 flex flex-col gap-2">
                    {column.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-relaxed text-grey"
                      >
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange"
                          aria-hidden
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
            <p className="mt-8 max-w-3xl border-l-2 border-orange pl-6 text-base font-medium leading-relaxed text-black">
              {validation.nextClosing}
            </p>
          </div>
        </div>
      </section>

      <CaseStudyQuote text={quotes[2].text} />

      {/* Impact and outcomes */}
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
              {impact.intro}
            </p>
          </motion.div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
            {impact.outcomes.map((outcome, index) => (
              <motion.article
                key={outcome.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                custom={index * 0.05}
                variants={fadeUp}
                className="rounded-2xl border border-border bg-white p-6 md:p-7"
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
      </section>

      {/* Closing thought */}
      <section
        id="reflection"
        className={cn(caseStudySection, "bg-cream")}
        aria-labelledby="reflection-heading"
      >
        <div className={caseStudyContainer}>
          <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <CaseStudyLabel>{closing.label}</CaseStudyLabel>
              <CaseStudyHeadline id="reflection-heading">
                {closing.headline}
              </CaseStudyHeadline>
              <p className="mt-8 text-lg font-medium leading-relaxed text-black md:text-xl">
                {closing.body}
              </p>
              <p className="mt-6 text-base leading-relaxed text-grey md:text-lg">
                {closing.body2}
              </p>
              <ArrowLink
                href={closing.prototype.href}
                external
                variant="orange"
                className="mt-8"
              >
                {closing.prototype.label}
              </ArrowLink>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.08}
              variants={fadeUp}
              className="relative mt-10 lg:mt-0"
            >
              <div
                className="pointer-events-none absolute -right-[5%] top-[8%] z-0 aspect-square w-[55%] rounded-full bg-soft-pink"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute bottom-[5%] left-0 z-0 aspect-square w-[45%] rounded-full bg-orange/80"
                aria-hidden
              />
              <div className="relative z-10">
                <MockupImage src={closing.image} alt={closing.imageAlt} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
