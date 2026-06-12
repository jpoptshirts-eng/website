"use client";

import { motion } from "framer-motion";
import {
  AlertCircle,
  ArrowRight,
  Bookmark,
  Brain,
  ChefHat,
  ChevronsUpDown,
  CircleOff,
  Clock,
  Compass,
  Eye,
  FileText,
  GitBranch,
  GripVertical,
  Image,
  LayoutGrid,
  Layers,
  Leaf,
  Lightbulb,
  List,
  ListOrdered,
  MessageSquare,
  MousePointerClick,
  Recycle,
  Server,
  Shield,
  ShoppingCart,
  SlidersHorizontal,
  Star,
  Tag,
  ThumbsUp,
  TrendingUp,
  Users,
  Utensils,
} from "lucide-react";
import CaseStudyLabel from "@/components/case-study/CaseStudyLabel";
import CaseStudyHeadline from "@/components/case-study/CaseStudyHeadline";
import CaseStudyQuote from "@/components/case-study/CaseStudyQuote";
import CaseStudySubnav from "@/components/case-study/CaseStudySubnav";
import CaseStudyMockupImage from "@/components/case-study/CaseStudyMockupImage";
import CaseStudyProjectNav from "@/components/case-study/CaseStudyProjectNav";
import { caseStudyFadeUp } from "@/components/case-study/case-study-motion";
import {
  caseStudyContainer,
  caseStudySection,
  caseStudyHeroRow,
  caseStudyHeroImageColumn,
} from "@/lib/case-study-layout";
import {
  mealPlansSubnav,
  mealPlansHero,
  mealPlansMyRole,
  mealPlansContext,
  mealPlansWhyItMattered,
  mealPlansBehaviour,
  mealPlansCompetitor,
  mealPlansProblem,
  mealPlansRecipeCards,
  mealPlansDirection,
  mealPlansPrinciples,
  mealPlansPrioritisation,
  mealPlansConstraints,
  mealPlansSolution,
  mealPlansAccessibility,
  mealPlansValidation,
  mealPlansTradeOffs,
  mealPlansQuotes,
  mealPlansImpact,
  mealPlansLearnings,
  mealPlansNextSteps,
  mealPlansReflection,
  mealPlansProjectNav,
} from "@/lib/meal-plans-data";
import { cn } from "@/lib/utils";

const whyIcons = {
  users: Users,
  trending: TrendingUp,
  gap: GitBranch,
};

const problemIcons = {
  brain: Brain,
  route: GitBranch,
  sliders: SlidersHorizontal,
  bookmark: Bookmark,
  card: Layers,
  server: Server,
};

const principleIcons = {
  users: Users,
  compass: Compass,
  eye: Eye,
  sliders: SlidersHorizontal,
  layers: Layers,
  shield: Shield,
};

const solutionIcons = {
  utensils: Utensils,
  sliders: SlidersHorizontal,
  list: List,
  tag: Tag,
  compass: Compass,
};

const signalIcons = {
  image: Image,
  star: Star,
  reviews: MessageSquare,
  diet: Leaf,
  clock: Clock,
  ingredients: ShoppingCart,
  difficulty: ChefHat,
};

const constraintIcons = {
  server: Server,
  tag: Tag,
  cart: ShoppingCart,
  file: FileText,
  shield: Shield,
  users: Users,
};

const accessibilityIcons = {
  steps: ListOrdered,
  accordion: ChevronsUpDown,
  cta: MousePointerClick,
  none: CircleOff,
};

const validationIcons = {
  worked: ThumbsUp,
  improvement: AlertCircle,
  insight: Lightbulb,
};

const learningIcons = {
  guidance: Compass,
  confidence: Star,
  data: Tag,
  tradeoffs: GitBranch,
  accessibility: Shield,
};

const nextStepIcons = {
  foundations: Layers,
  ui: LayoutGrid,
  custom: Utensils,
  drag: GripVertical,
  leftovers: Recycle,
  filters: SlidersHorizontal,
};

function IconCard({
  title,
  copy,
  icon: Icon,
  index = 0,
  copyClassName = "text-sm leading-relaxed text-grey md:text-base",
}: {
  title: string;
  copy: string;
  icon?: React.ComponentType<{ className?: string }>;
  index?: number;
  copyClassName?: string;
}) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      custom={index * 0.05}
      variants={caseStudyFadeUp}
      className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 md:p-7"
    >
      {Icon ? (
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#FFE4D6]">
          <Icon className="h-5 w-5 text-orange" aria-hidden />
        </div>
      ) : null}
      <h3 className="font-bold text-black">{title}</h3>
      <p className={cn("mt-3", copyClassName)}>{copy}</p>
    </motion.article>
  );
}

function TradeOffCard({
  label,
  title,
  body,
  tradeOff,
  index = 0,
}: {
  label: string;
  title: string;
  body: string[];
  tradeOff: string;
  index?: number;
}) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      custom={index * 0.05}
      variants={caseStudyFadeUp}
      className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 md:p-7 lg:p-8"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">
        {label}
      </p>
      <h3 className="mt-3 text-lg font-bold leading-snug text-black md:text-xl">
        {title}
      </h3>
      <div className="mt-4 space-y-3 text-sm leading-relaxed text-grey md:text-base">
        {body.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </div>
      <div className="mt-6 border-t border-border pt-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">
          Trade-off
        </p>
        <p className="mt-3 text-sm leading-relaxed text-black md:text-base">
          {tradeOff}
        </p>
      </div>
    </motion.article>
  );
}

export default function MealPlansCaseStudy() {
  return (
    <>
      <CaseStudySubnav items={mealPlansSubnav} />

      {/* 01 Hero */}
      <section
        id="overview"
        className={cn(
          caseStudySection,
          "overflow-hidden bg-gradient-to-b from-white via-white to-soft-pink/30 pb-0 pt-12 md:overflow-visible md:pt-16 lg:pt-20",
        )}
        aria-labelledby="meal-plans-title"
      >
        <div className={caseStudyContainer}>
          <div className={cn(caseStudyHeroRow, "md:items-start")}>
            <motion.div
              custom={0}
              variants={caseStudyFadeUp}
              initial="hidden"
              animate="visible"
              className="flex-1 pb-4 md:max-w-[48%]"
            >
              <CaseStudyLabel>{mealPlansHero.label}</CaseStudyLabel>
              <CaseStudyHeadline as="h1" id="meal-plans-title">
                {mealPlansHero.title}
              </CaseStudyHeadline>
              <p className="mt-8 max-w-lg border-l-2 border-orange pl-6 text-base leading-relaxed text-black md:mt-10 md:text-lg">
                {mealPlansHero.subcopy}
              </p>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-grey md:text-base">
                {mealPlansHero.intro}
              </p>
              <dl className="mt-10 flex flex-col gap-5 lg:mt-12">
                {mealPlansHero.meta.map((item) => (
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

            <div
              className={cn(
                "relative mb-5 items-center justify-end md:mb-0",
                caseStudyHeroImageColumn,
              )}
            >
              <div className="relative mx-auto w-full max-w-[22rem] sm:max-w-[26rem] md:ml-auto md:mr-0 md:max-w-[28rem] lg:max-w-[32rem]">
                <div
                  className="pointer-events-none absolute -right-[6%] top-[8%] z-0 aspect-square w-[76%] rounded-full bg-soft-pink md:w-[80%]"
                  aria-hidden
                />
                <CaseStudyMockupImage
                  src={mealPlansHero.image}
                  alt={mealPlansHero.imageAlt}
                  priority
                  className="relative z-10 w-full object-contain object-bottom"
                />
              </div>
            </div>
          </div>

          {/* My role */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={caseStudyFadeUp}
            className="mt-12 border-t border-border pt-10 md:pt-12"
            aria-labelledby="my-role-heading"
          >
            <div className="lg:grid lg:grid-cols-2 lg:gap-10 xl:gap-14">
              <div>
                <div className="mb-5 flex flex-col items-start gap-3">
                  <div className="relative h-[4.5rem] w-[4rem] shrink-0 overflow-hidden rounded-[50%] bg-soft-pink ring-2 ring-orange/15 sm:h-20 sm:w-[4.5rem]">
                    <CaseStudyMockupImage
                      src={mealPlansMyRole.avatar}
                      alt={mealPlansMyRole.avatarAlt}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <h2
                    id="my-role-heading"
                    className="text-2xl font-bold text-black md:text-3xl"
                  >
                    {mealPlansMyRole.title}
                  </h2>
                </div>
                <p className="max-w-lg text-base leading-relaxed text-grey md:text-lg">
                  {mealPlansMyRole.body}
                </p>
              </div>
              <ul className="mt-8 flex flex-col gap-4 lg:mt-0">
                {mealPlansMyRole.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange"
                      aria-hidden
                    />
                    <span className="text-sm leading-relaxed text-black md:text-base">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 02 Context */}
      <section
        id="context"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="mp-context-heading"
      >
        <div className={caseStudyContainer}>
          <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
            >
              <CaseStudyLabel>{mealPlansContext.label}</CaseStudyLabel>
              <CaseStudyHeadline id="mp-context-heading">
                {mealPlansContext.headline}
              </CaseStudyHeadline>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-black md:text-lg">
                <p>{mealPlansContext.body}</p>
                <p className="text-grey">{mealPlansContext.body2}</p>
              </div>
              <p className="mt-8 border-l-2 border-orange pl-6 text-base font-medium leading-relaxed text-black md:text-lg">
                <span className="font-bold">Key idea: </span>
                {mealPlansContext.keyIdea}
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              custom={0.1}
              variants={caseStudyFadeUp}
              className="mt-10 lg:mt-0"
            >
              <CaseStudyMockupImage
                src={mealPlansContext.image}
                alt={mealPlansContext.imageAlt}
                className="w-full object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 03 Why this mattered */}
      <section
        id="why-it-mattered"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="mp-why-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>{mealPlansWhyItMattered.label}</CaseStudyLabel>
            <CaseStudyHeadline id="mp-why-heading">
              {mealPlansWhyItMattered.headline}
            </CaseStudyHeadline>
            <p className="mt-6 text-base leading-relaxed text-grey md:text-lg">
              {mealPlansWhyItMattered.body}
            </p>
          </motion.div>
          <div className="mt-12 grid gap-5 md:grid-cols-3 md:gap-6">
            {mealPlansWhyItMattered.cards.map((card, index) => {
              const Icon = whyIcons[card.icon];
              return (
                <IconCard
                  key={card.title}
                  title={card.title}
                  copy={card.copy}
                  icon={Icon}
                  index={index}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* 04 Behavioural insight */}
      <section
        id="behaviour"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="mp-behaviour-heading"
      >
        <div className={caseStudyContainer}>
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
            >
              <CaseStudyLabel>{mealPlansBehaviour.label}</CaseStudyLabel>
              <CaseStudyHeadline id="mp-behaviour-heading">
                {mealPlansBehaviour.headline}
              </CaseStudyHeadline>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-black md:text-lg">
                <p>{mealPlansBehaviour.body}</p>
                <p className="font-medium">{mealPlansBehaviour.body2}</p>
              </div>
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-grey">
                Observed behaviours
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {mealPlansBehaviour.behaviours.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange"
                      aria-hidden
                    />
                    <span className="text-sm leading-relaxed text-black md:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              custom={0.1}
              variants={caseStudyFadeUp}
              className="mt-10 flex justify-center lg:mt-0"
            >
              <CaseStudyMockupImage
                src={mealPlansBehaviour.image}
                alt={mealPlansBehaviour.imageAlt}
                className="max-h-[38rem] w-full max-w-md object-contain sm:max-w-lg lg:max-h-[46rem] lg:max-w-xl xl:max-w-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <CaseStudyQuote text={mealPlansQuotes[0]} />

      {/* 05 Competitor analysis */}
      <section
        id="competitor"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="mp-competitor-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>{mealPlansCompetitor.label}</CaseStudyLabel>
            <CaseStudyHeadline id="mp-competitor-heading">
              {mealPlansCompetitor.headline}
            </CaseStudyHeadline>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-grey md:text-lg">
              <p>{mealPlansCompetitor.intro}</p>
              <p>{mealPlansCompetitor.intro2}</p>
              <p className="text-black">{mealPlansCompetitor.intro3}</p>
            </div>
          </motion.div>

          <div className="mt-14 grid grid-cols-1 gap-6 min-[992px]:grid-cols-3 min-[992px]:items-stretch min-[992px]:gap-6">
            {mealPlansCompetitor.competitors.map((competitor, index) => (
              <motion.article
                key={competitor.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                custom={index * 0.05}
                variants={caseStudyFadeUp}
                className="flex h-full flex-col rounded-2xl border border-border bg-cream-muted p-6 md:p-8"
              >
                <div className="mb-5 flex h-9 items-center">
                  <CaseStudyMockupImage
                    src={competitor.logo}
                    alt={competitor.logoAlt}
                    className="h-full w-auto max-w-[9rem] object-contain object-left"
                  />
                </div>
                <h3 className="text-xl font-bold text-black md:text-2xl">
                  {competitor.title}
                </h3>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-grey">
                  <p className="text-black">{competitor.body}</p>
                  <p>{competitor.body2}</p>
                </div>
                <div className="mt-6 border-t border-border pt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">
                    What this told me
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-black">
                    {competitor.insight}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={caseStudyFadeUp}
            className="mt-14 max-w-3xl"
          >
            <h3 className="text-xl font-bold text-black md:text-2xl">
              {mealPlansCompetitor.takeaway.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-grey md:text-lg">
              {mealPlansCompetitor.takeaway.intro}
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {mealPlansCompetitor.takeaway.bullets.map((item) => (
                <li key={item} className="flex gap-3 text-base md:text-lg">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange"
                    aria-hidden
                  />
                  <span className="text-black">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-grey md:text-lg">
              <p className="text-black">{mealPlansCompetitor.takeaway.body}</p>
              <p>{mealPlansCompetitor.takeaway.closing}</p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={caseStudyFadeUp}
            className="mt-16 md:mt-20"
          >
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-grey">
              {mealPlansCompetitor.imageSectionTitle}
            </h3>
            <CaseStudyMockupImage
              src={mealPlansCompetitor.image}
              alt={mealPlansCompetitor.imageAlt}
              className="mt-6 w-full object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* 06 Problem */}
      <section
        id="problem"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="mp-problem-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>{mealPlansProblem.label}</CaseStudyLabel>
            <CaseStudyHeadline id="mp-problem-heading">
              {mealPlansProblem.headline}
            </CaseStudyHeadline>
            <p className="mt-6 text-base leading-relaxed text-grey md:text-lg">
              {mealPlansProblem.body}
            </p>
          </motion.div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {mealPlansProblem.cards.map((card, index) => {
              const Icon = problemIcons[card.icon];
              return (
                <IconCard
                  key={card.title}
                  title={card.title}
                  copy={card.copy}
                  icon={Icon}
                  index={index}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* 07 Recipe cards */}
      <section
        id="recipe-cards"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="mp-recipe-cards-heading"
      >
        <div className={caseStudyContainer}>
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-12 xl:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
            >
              <CaseStudyLabel>{mealPlansRecipeCards.label}</CaseStudyLabel>
              <CaseStudyHeadline id="mp-recipe-cards-heading">
                {mealPlansRecipeCards.headline}
              </CaseStudyHeadline>
              <p className="mt-6 text-base leading-relaxed text-grey md:text-lg">
                {mealPlansRecipeCards.body}
              </p>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.15em] text-grey">
                The recipe card needed to answer
              </p>
              <ul className="mt-4 flex flex-col gap-2">
                {mealPlansRecipeCards.questions.map((q) => (
                  <li
                    key={q}
                    className="flex gap-3 text-sm text-black md:text-base"
                  >
                    <span className="text-orange" aria-hidden>
                      ?
                    </span>
                    {q}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              custom={0.1}
              variants={caseStudyFadeUp}
              className="mt-10 flex justify-center lg:mt-0"
            >
              <CaseStudyMockupImage
                src={mealPlansRecipeCards.image}
                alt={mealPlansRecipeCards.imageAlt}
                className="max-h-[38rem] w-auto object-contain lg:max-h-[42rem]"
              />
            </motion.div>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {mealPlansRecipeCards.signals.map((signal, index) => {
              const SignalIcon = signalIcons[signal.icon];
              return (
                <motion.article
                  key={signal.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  custom={index * 0.04}
                  variants={caseStudyFadeUp}
                  className="rounded-2xl border border-border bg-cream-muted p-5 md:p-6"
                >
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#FFE4D6]">
                    <SignalIcon
                      className="h-4 w-4 text-orange"
                      aria-hidden
                    />
                  </div>
                  <h3 className="font-bold text-black">{signal.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-grey">
                    {signal.copy}
                  </p>
                </motion.article>
              );
            })}
          </div>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="mt-10 text-base leading-relaxed text-black md:text-lg"
          >
            {mealPlansRecipeCards.note}
          </motion.p>
        </div>
      </section>

      {/* 08 Product direction */}
      <section
        id="direction"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="mp-direction-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>{mealPlansDirection.label}</CaseStudyLabel>
            <CaseStudyHeadline id="mp-direction-heading">
              {mealPlansDirection.headline}
            </CaseStudyHeadline>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-grey md:text-lg">
              <p className="text-black">{mealPlansDirection.body}</p>
              <p>{mealPlansDirection.body2}</p>
            </div>
          </motion.div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
              className="rounded-2xl border border-border bg-white p-6 md:p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-grey">
                Before
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {mealPlansDirection.before.map((item) => (
                  <li key={item} className="flex gap-3 text-sm md:text-base">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-grey"
                      aria-hidden
                    />
                    <span className="text-grey">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              custom={0.08}
              variants={caseStudyFadeUp}
              className="rounded-2xl border border-orange/20 bg-[#FFF0E8] p-6 md:p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">
                After
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {mealPlansDirection.after.map((item) => (
                  <li key={item} className="flex gap-3 text-sm md:text-base">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange"
                      aria-hidden
                    />
                    <span className="font-medium text-black">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={caseStudyFadeUp}
            className="mt-12 overflow-hidden rounded-2xl border border-border bg-cream-muted p-4 md:p-6"
          >
            <CaseStudyMockupImage
              src={mealPlansDirection.image}
              alt={mealPlansDirection.imageAlt}
              className="mx-auto w-full object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* 09 Design principles */}
      <section
        id="principles"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="mp-principles-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>{mealPlansPrinciples.label}</CaseStudyLabel>
            <CaseStudyHeadline id="mp-principles-heading">
              {mealPlansPrinciples.headline}
            </CaseStudyHeadline>
          </motion.div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {mealPlansPrinciples.items.map((item, index) => {
              const Icon = principleIcons[item.icon];
              return (
                <IconCard
                  key={item.title}
                  title={item.title}
                  copy={item.copy}
                  icon={Icon}
                  index={index}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* 10 Prioritisation */}
      <section
        id="prioritisation"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="mp-prioritisation-heading"
      >
        <div className={caseStudyContainer}>
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
            >
              <CaseStudyLabel>{mealPlansPrioritisation.label}</CaseStudyLabel>
              <CaseStudyHeadline id="mp-prioritisation-heading">
                {mealPlansPrioritisation.headline}
              </CaseStudyHeadline>
              <p className="mt-6 text-base leading-relaxed text-grey md:text-lg">
                {mealPlansPrioritisation.body}
              </p>
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-grey">
                Features considered
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {mealPlansPrioritisation.features.map((feature) => (
                  <li
                    key={feature}
                    className="rounded-full border border-border bg-white px-3 py-1.5 text-xs font-medium text-black"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
            <div className="mt-10 flex flex-col gap-5 lg:mt-0">
              {mealPlansPrioritisation.columns.map((col, index) => (
                <motion.article
                  key={col.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  custom={index * 0.06}
                  variants={caseStudyFadeUp}
                  className="rounded-2xl border border-border bg-white p-6 md:p-7"
                >
                  <h3 className="font-bold text-black">{col.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-grey md:text-base">
                    {col.copy}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11 Constraints */}
      <section
        id="constraints"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="mp-constraints-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>{mealPlansConstraints.label}</CaseStudyLabel>
            <CaseStudyHeadline id="mp-constraints-heading">
              {mealPlansConstraints.headline}
            </CaseStudyHeadline>
            <p className="mt-6 text-base leading-relaxed text-grey md:text-lg">
              {mealPlansConstraints.body}
            </p>
          </motion.div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {mealPlansConstraints.cards.map((card, index) => {
              const Icon = constraintIcons[card.icon];
              return (
                <IconCard
                  key={card.title}
                  title={card.title}
                  copy={card.copy}
                  icon={Icon}
                  index={index}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* 12 Solution */}
      <section
        id="solution"
        className={cn(caseStudySection, "overflow-hidden bg-cream-muted !pb-0")}
        aria-labelledby="mp-solution-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>{mealPlansSolution.label}</CaseStudyLabel>
            <CaseStudyHeadline id="mp-solution-heading">
              {mealPlansSolution.headline}
            </CaseStudyHeadline>
            <p className="mt-6 text-base leading-relaxed text-grey md:text-lg">
              {mealPlansSolution.body}
            </p>
          </motion.div>
          <div className="-mx-6 mt-12 overflow-x-auto px-6 scrollbar-none min-[992px]:mx-0 min-[992px]:overflow-visible min-[992px]:px-0">
            <div className="flex min-w-max items-stretch gap-4 min-[992px]:min-w-0 min-[992px]:grid min-[992px]:grid-cols-5 min-[992px]:gap-4 xl:gap-5">
              {mealPlansSolution.cards.map((card, index) => {
                const Icon = solutionIcons[card.icon];
                return (
                  <div
                    key={card.title}
                    className="flex w-[17rem] shrink-0 min-[992px]:w-auto min-[992px]:shrink"
                  >
                    <IconCard
                      title={card.title}
                      copy={card.copy}
                      icon={Icon}
                      index={index}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={caseStudyFadeUp}
          className="mt-14 mb-0 leading-none"
        >
          <CaseStudyMockupImage
            src={mealPlansSolution.image}
            alt={mealPlansSolution.imageAlt}
            className="mx-auto block w-full object-contain"
          />
        </motion.div>
      </section>

      {/* 13 Accessibility */}
      <section
        id="accessibility"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="mp-accessibility-heading"
      >
        <div className={caseStudyContainer}>
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-12 xl:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
            >
              <CaseStudyLabel>{mealPlansAccessibility.label}</CaseStudyLabel>
              <CaseStudyHeadline id="mp-accessibility-heading">
                {mealPlansAccessibility.headline}
              </CaseStudyHeadline>
              <p className="mt-6 text-base leading-relaxed text-grey md:text-lg">
                {mealPlansAccessibility.body}
              </p>
              <div className="mt-10 flex flex-wrap gap-6">
                <div className="rounded-2xl border border-border bg-cream-muted px-6 py-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-grey">
                    Initial score
                  </p>
                  <p className="mt-2 text-4xl font-black text-grey">
                    {mealPlansAccessibility.scores.before}
                  </p>
                </div>
                <ArrowRight
                  className="hidden h-8 w-8 self-center text-orange sm:block"
                  aria-hidden
                />
                <div className="rounded-2xl border border-orange/20 bg-[#FFF0E8] px-6 py-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-orange">
                    Updated score
                  </p>
                  <p className="mt-2 text-4xl font-black text-orange">
                    {mealPlansAccessibility.scores.after}
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              custom={0.1}
              variants={caseStudyFadeUp}
              className="mt-10 flex justify-center lg:mt-0 lg:justify-end"
            >
              <CaseStudyMockupImage
                src={mealPlansAccessibility.image}
                alt={mealPlansAccessibility.imageAlt}
                className="max-h-[34rem] w-full max-w-md object-contain sm:max-w-lg lg:max-h-[40rem] lg:max-w-xl xl:max-w-2xl"
              />
            </motion.div>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {mealPlansAccessibility.cards.map((card, index) => {
              const Icon = accessibilityIcons[card.icon];
              return (
                <IconCard
                  key={card.title}
                  title={card.title}
                  copy={card.copy}
                  icon={Icon}
                  index={index}
                />
              );
            })}
          </div>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="mt-10 text-base leading-relaxed text-black md:text-lg"
          >
            {mealPlansAccessibility.closing}
          </motion.p>
        </div>
      </section>

      {/* 14 Validation */}
      <section
        id="validation"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="mp-validation-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>{mealPlansValidation.label}</CaseStudyLabel>
            <CaseStudyHeadline id="mp-validation-heading">
              {mealPlansValidation.headline}
            </CaseStudyHeadline>
            <p className="mt-6 text-base leading-relaxed text-grey md:text-lg">
              {mealPlansValidation.body}
            </p>
          </motion.div>
          <div className="mt-12 grid gap-5 md:grid-cols-3 md:gap-6">
            {mealPlansValidation.cards.map((card, index) => {
              const Icon = validationIcons[card.icon];
              return (
                <IconCard
                  key={card.title}
                  title={card.title}
                  copy={card.copy}
                  icon={Icon}
                  index={index}
                />
              );
            })}
          </div>
          <div className="-mx-6 mt-12 overflow-x-auto px-6 scrollbar-none min-[992px]:mx-0 min-[992px]:overflow-visible min-[992px]:px-0">
            <div className="flex min-w-max items-baseline gap-8 min-[992px]:min-w-0 min-[992px]:justify-between min-[992px]:gap-6">
              {mealPlansValidation.quotes.map((quote, index) => (
                <motion.p
                  key={quote}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  custom={index * 0.05}
                  variants={caseStudyFadeUp}
                  className="shrink-0 text-sm font-bold leading-snug text-black min-[992px]:shrink"
                >
                  &ldquo;{quote}&rdquo;
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trade-offs & delivery constraints */}
      <section
        id="trade-offs"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="mp-trade-offs-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>{mealPlansTradeOffs.label}</CaseStudyLabel>
            <CaseStudyHeadline id="mp-trade-offs-heading">
              {mealPlansTradeOffs.headline}
            </CaseStudyHeadline>
            <p className="mt-6 text-base leading-relaxed text-grey md:text-lg">
              {mealPlansTradeOffs.intro}
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:mt-14 lg:gap-6">
            {mealPlansTradeOffs.cards.map((card, index) => (
              <TradeOffCard
                key={card.title}
                label={card.label}
                title={card.title}
                body={card.body}
                tradeOff={card.tradeOff}
                index={index}
              />
            ))}
          </div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="mt-10 max-w-4xl border-l-2 border-orange pl-6 text-base font-medium leading-relaxed text-black md:mt-12 md:text-lg"
          >
            {mealPlansTradeOffs.closing}
          </motion.p>
        </div>
      </section>

      {/* 15 Results */}
      <section
        id="results"
        className={cn(
          caseStudySection,
          "relative overflow-hidden bg-white",
        )}
        aria-labelledby="mp-results-heading"
      >
        <div
          className="pointer-events-none absolute -right-20 top-16 h-64 w-64 rounded-full bg-soft-pink/60 blur-3xl"
          aria-hidden
        />
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>{mealPlansImpact.label}</CaseStudyLabel>
            <CaseStudyHeadline id="mp-results-heading">
              {mealPlansImpact.headline}
            </CaseStudyHeadline>
            <p className="mt-6 text-base leading-relaxed text-grey md:text-lg">
              {mealPlansImpact.intro}
            </p>
          </motion.div>

          <div className="-mx-6 mt-12 overflow-x-auto px-6 scrollbar-none lg:mx-0 lg:overflow-visible lg:px-0">
            <div className="flex min-w-max gap-4 lg:min-w-0 lg:grid lg:grid-cols-5 lg:gap-5">
              {mealPlansImpact.metrics.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  custom={index * 0.05}
                  variants={caseStudyFadeUp}
                  className="w-[17rem] shrink-0 rounded-2xl border border-border bg-cream-muted p-6 md:w-[18rem] lg:w-auto lg:shrink lg:p-5 xl:p-6"
                >
                  <p className="text-3xl font-black leading-none text-orange lg:text-[1.75rem] xl:text-4xl">
                    {item.metric}
                  </p>
                  <h3 className="mt-3 text-sm font-bold leading-snug text-black">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-grey">
                    {item.copy}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="mt-10 rounded-2xl border border-orange/20 bg-[#FFF0E8] p-6 md:p-8 lg:mt-12"
          >
            <p className="flex gap-3 text-base leading-relaxed text-black md:text-lg">
              <span
                className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange"
                aria-hidden
              />
              {mealPlansImpact.insight}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 16 Learnings */}
      <section
        id="learnings"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="mp-learnings-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>{mealPlansLearnings.label}</CaseStudyLabel>
            <CaseStudyHeadline id="mp-learnings-heading">
              {mealPlansLearnings.headline}
            </CaseStudyHeadline>
            <p className="mt-6 text-base leading-relaxed text-grey md:text-lg">
              {mealPlansLearnings.body}
            </p>
          </motion.div>
          <div className="-mx-6 mt-12 overflow-x-auto px-6 scrollbar-none min-[992px]:mx-0 min-[992px]:overflow-visible min-[992px]:px-0">
            <div className="flex min-w-max items-stretch gap-4 min-[992px]:min-w-0 min-[992px]:grid min-[992px]:grid-cols-5 min-[992px]:gap-4 xl:gap-5">
              {mealPlansLearnings.cards.map((card, index) => {
                const Icon = learningIcons[card.icon];
                return (
                  <div
                    key={card.title}
                    className="flex w-[17rem] shrink-0 min-[992px]:w-auto min-[992px]:shrink"
                  >
                    <IconCard
                      title={card.title}
                      copy={card.copy}
                      icon={Icon}
                      index={index}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 17 Next steps */}
      <section
        id="next-steps"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="mp-next-steps-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>{mealPlansNextSteps.label}</CaseStudyLabel>
            <CaseStudyHeadline id="mp-next-steps-heading">
              {mealPlansNextSteps.headline}
            </CaseStudyHeadline>
            <p className="mt-6 text-base leading-relaxed text-grey md:text-lg">
              {mealPlansNextSteps.body}
            </p>
          </motion.div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {mealPlansNextSteps.cards.map((card, index) => {
              const Icon = nextStepIcons[card.icon];
              return (
                <IconCard
                  key={card.title}
                  title={card.title}
                  copy={card.copy}
                  icon={Icon}
                  index={index}
                />
              );
            })}
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={caseStudyFadeUp}
            className="mt-14"
          >
            <CaseStudyMockupImage
              src={mealPlansNextSteps.image}
              alt={mealPlansNextSteps.imageAlt}
              className="mx-auto w-full object-contain"
            />
          </motion.div>
        </div>
      </section>

      <CaseStudyQuote text={mealPlansQuotes[1]} />

      {/* 18 Closing */}
      <section
        id="reflection"
        className={cn(caseStudySection, "bg-cream")}
        aria-labelledby="mp-reflection-heading"
      >
        <div className={caseStudyContainer}>
          <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
            >
              <CaseStudyLabel>{mealPlansReflection.label}</CaseStudyLabel>
              <CaseStudyHeadline id="mp-reflection-heading">
                {mealPlansReflection.headline}
              </CaseStudyHeadline>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-grey md:text-lg">
                <p className="text-black">{mealPlansReflection.body}</p>
                <p>{mealPlansReflection.body2}</p>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              custom={0.1}
              variants={caseStudyFadeUp}
              className="relative mt-10 lg:mt-0"
            >
              <div
                className="pointer-events-none absolute -left-[6%] top-[10%] z-0 aspect-square w-[70%] rounded-full bg-soft-pink"
                aria-hidden
              />
              <CaseStudyMockupImage
                src={mealPlansReflection.image}
                alt={mealPlansReflection.imageAlt}
                className="relative z-10 w-full object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <CaseStudyProjectNav
        previous={mealPlansProjectNav.previous}
        next={mealPlansProjectNav.next}
      />
    </>
  );
}
