"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Hand,
  Layers,
  RefreshCw,
  Radio,
} from "lucide-react";
import CaseStudyHeadline from "@/components/case-study/CaseStudyHeadline";
import CaseStudyLabel from "@/components/case-study/CaseStudyLabel";
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
  smarterSubnav,
  smarterHero,
  smarterMyRole,
  smarterOverview,
  smarterChallenge,
  smarterEcosystem,
  smarterSetup,
  smarterBlinkUp,
  smarterPhysical,
  smarterFridgecam,
  smarterFoodWaste,
  smarterAssist,
  smarterPrinciples,
  smarterTradeoffs,
  smarterDelivered,
  smarterReflection,
  smarterProjectNav,
} from "@/lib/smarter-data";
import { cn } from "@/lib/utils";

const labelAccent = "text-smarter-turquoise";
const headlineAccent = "text-smarter-turquoise";

const principleIcons = [Layers, Hand, Radio, RefreshCw];

function FlowDiagram({ steps }: { steps: string[] }) {
  return (
    <ol className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-1.5">
      {steps.map((step, index) => (
        <li key={step} className="flex items-center gap-1.5">
          <span className="rounded-lg border border-border bg-white px-3 py-2 text-xs font-medium text-black sm:text-sm">
            {step}
          </span>
          {index < steps.length - 1 ? (
            <ArrowRight
              className="hidden h-3.5 w-3.5 shrink-0 text-smarter-turquoise sm:block"
              aria-hidden
            />
          ) : null}
        </li>
      ))}
    </ol>
  );
}

function CroppedSketchImage({
  src,
  alt,
  objectPosition,
  className,
  aspectClass = "aspect-[16/7]",
}: {
  src: string;
  alt: string;
  objectPosition: string;
  className?: string;
  aspectClass?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-cream",
        aspectClass,
        className,
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        style={{ objectPosition }}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

export default function SmarterCaseStudy() {
  return (
    <>
      <CaseStudySubnav
        items={smarterSubnav}
        accentClassName="border-smarter-turquoise bg-smarter-turquoise text-smarter-navy"
      />

      {/* Hero */}
      <section
        id="overview"
        className={cn(caseStudySection, "bg-white pb-0 pt-12 md:pt-16 lg:pt-20")}
        aria-labelledby="smarter-title"
      >
        <div className={caseStudyContainer}>
          <div className={cn(caseStudyHeroRow, "md:items-start")}>
            <motion.div
              custom={0}
              variants={caseStudyFadeUp}
              initial="hidden"
              animate="visible"
              className="flex-1 md:max-w-[48%]"
            >
              <CaseStudyLabel className={labelAccent}>
                {smarterHero.label}
              </CaseStudyLabel>
              <CaseStudyHeadline
                as="h1"
                id="smarter-title"
                accentClassName={headlineAccent}
              >
                {smarterHero.title}
              </CaseStudyHeadline>
              <p className="mt-8 max-w-lg border-l-2 border-smarter-turquoise pl-6 text-base leading-relaxed text-black md:mt-10 md:text-lg">
                {smarterHero.supporting}
              </p>
              <dl className="mt-10 flex flex-col gap-5 lg:mt-12">
                {smarterHero.meta.map((item) => (
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
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.08}
                variants={caseStudyFadeUp}
                className="relative ml-auto w-full max-w-[24rem] sm:max-w-[28rem] md:max-w-[26rem] lg:max-w-[32rem]"
              >
                <CaseStudyMockupImage
                  src={smarterHero.image}
                  alt={smarterHero.imageAlt}
                  priority
                  className="relative z-10 w-full object-contain object-center"
                />
              </motion.div>
            </div>
          </div>

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
                  <div className="relative h-[4.5rem] w-[4rem] shrink-0 overflow-hidden rounded-[50%] bg-smarter-turquoise-muted ring-2 ring-smarter-turquoise/15 sm:h-20 sm:w-[4.5rem]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={smarterMyRole.avatar}
                      alt={smarterMyRole.avatarAlt}
                      className="h-full w-full object-cover object-[center_15%]"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h2
                    id="my-role-heading"
                    className="text-xs font-semibold uppercase tracking-[0.2em] text-smarter-turquoise"
                  >
                    {smarterMyRole.title}
                  </h2>
                </div>
                <p className="text-base leading-relaxed text-black md:text-lg">
                  {smarterMyRole.body}
                </p>
              </div>
              <ul className="mt-6 flex flex-col gap-3 lg:mt-0 lg:justify-center">
                {smarterMyRole.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-3 text-sm leading-relaxed text-black md:text-base"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-smarter-turquoise"
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

      {/* Project overview */}
      <section
        id="products"
        className={cn(caseStudySection, "bg-white pt-[100px]")}
        aria-labelledby="smarter-products-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel className={labelAccent}>
              {smarterOverview.label}
            </CaseStudyLabel>
            <CaseStudyHeadline
              id="smarter-products-heading"
              accentClassName={headlineAccent}
            >
              {smarterOverview.headline}
            </CaseStudyHeadline>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-grey md:text-lg">
              <p className="text-black">{smarterOverview.body}</p>
              <p>{smarterOverview.body2}</p>
              <p>{smarterOverview.body3}</p>
            </div>
          </motion.div>

          <p className="mt-10 text-[10px] font-semibold uppercase tracking-[0.2em] text-grey md:mt-12">
            {smarterOverview.capabilitiesLabel}
          </p>
          <div className="mt-5 grid gap-5 md:grid-cols-3 md:gap-6">
            {smarterOverview.products.map((product, index) => (
              <motion.article
                key={product.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                custom={index * 0.05}
                variants={caseStudyFadeUp}
                className="rounded-xl border border-border bg-cream p-5 md:p-6"
              >
                <h3 className="text-lg font-bold text-black">{product.name}</h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {product.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm leading-relaxed text-grey"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-smarter-turquoise"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* System challenge */}
      <section
        id="challenge"
        className={cn(caseStudySection, "bg-smarter-turquoise-muted/50")}
        aria-labelledby="smarter-challenge-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel className={labelAccent}>
              {smarterChallenge.label}
            </CaseStudyLabel>
            <CaseStudyHeadline
              id="smarter-challenge-heading"
              accentClassName={headlineAccent}
            >
              {smarterChallenge.headline}
            </CaseStudyHeadline>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-grey md:text-lg">
              <p className="text-black">{smarterChallenge.body}</p>
              <p>{smarterChallenge.body2}</p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={caseStudyFadeUp}
            className="mt-10 rounded-xl border border-border bg-white p-5 md:mt-12 md:p-7"
          >
            <FlowDiagram steps={smarterChallenge.diagram} />
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="mt-8 max-w-3xl rounded-xl border-l-2 border-smarter-turquoise bg-white px-5 py-4 text-base font-medium leading-relaxed text-black md:mt-10 md:text-lg"
          >
            {smarterChallenge.question}
          </motion.p>
        </div>
      </section>

      {/* Mapping ecosystem */}
      <section
        id="ecosystem"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="smarter-ecosystem-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel className={labelAccent}>
              {smarterEcosystem.label}
            </CaseStudyLabel>
            <CaseStudyHeadline
              id="smarter-ecosystem-heading"
              accentClassName={headlineAccent}
            >
              {smarterEcosystem.headline}
            </CaseStudyHeadline>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-grey md:text-lg">
              <p className="text-black">{smarterEcosystem.body}</p>
              <p>{smarterEcosystem.body2}</p>
            </div>
          </motion.div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 md:gap-6 lg:mt-12">
            {smarterEcosystem.photos.map((photo, index) => (
              <motion.figure
                key={photo.caption}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                custom={index * 0.05}
                variants={caseStudyFadeUp}
              >
                <div className="overflow-hidden rounded-xl border border-border">
                  <CaseStudyMockupImage
                    src={photo.src}
                    alt={photo.alt}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-sm leading-relaxed text-grey">
                  {photo.caption}
                </figcaption>
              </motion.figure>
            ))}
          </div>

          <motion.figure
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={caseStudyFadeUp}
            className="mt-10 lg:mt-12"
          >
            <CroppedSketchImage
              src={smarterEcosystem.flowImage.src}
              alt={smarterEcosystem.flowImage.alt}
              objectPosition="center 45%"
              aspectClass="aspect-[16/8] md:aspect-[16/7]"
            />
            <figcaption className="mt-3 text-sm leading-relaxed text-grey">
              {smarterEcosystem.flowImage.caption}
            </figcaption>
          </motion.figure>
        </div>
      </section>

      {/* Shared setup */}
      <section
        id="setup"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="smarter-setup-heading"
      >
        <div className={caseStudyContainer}>
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-12 xl:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
            >
              <CaseStudyLabel className={labelAccent}>
                {smarterSetup.label}
              </CaseStudyLabel>
              <CaseStudyHeadline
                id="smarter-setup-heading"
                accentClassName={headlineAccent}
              >
                {smarterSetup.headline}
              </CaseStudyHeadline>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-grey md:text-lg">
                <p className="text-black">{smarterSetup.body}</p>
                <p>{smarterSetup.body2}</p>
              </div>

              <ol className="mt-8 flex flex-col gap-2">
                {smarterSetup.steps.map((step, index) => (
                  <li
                    key={step}
                    className="flex items-start gap-3 rounded-lg border border-border bg-white px-4 py-3 text-sm text-black"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-smarter-turquoise-muted text-xs font-bold text-smarter-navy">
                      {index + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>

              <p className="mt-6 text-sm leading-relaxed text-grey md:text-base">
                {smarterSetup.statement}
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              custom={0.08}
              variants={caseStudyFadeUp}
              className="mt-10 lg:mt-0"
            >
              <CroppedSketchImage
                src={smarterSetup.flowImage.src}
                alt={smarterSetup.flowImage.alt}
                objectPosition="left center"
                aspectClass="aspect-[4/5] md:aspect-[3/4]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* BlinkUp */}
      <section
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="smarter-blinkup-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel className={labelAccent}>
              {smarterBlinkUp.label}
            </CaseStudyLabel>
            <CaseStudyHeadline
              id="smarter-blinkup-heading"
              accentClassName={headlineAccent}
            >
              {smarterBlinkUp.headline}
            </CaseStudyHeadline>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-grey md:text-lg">
              <p className="text-black">{smarterBlinkUp.body}</p>
              <p>{smarterBlinkUp.body2}</p>
            </div>
          </motion.div>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="mt-8 grid gap-2 sm:grid-cols-2 lg:mt-10"
          >
            {smarterBlinkUp.interfaceNeeds.map((item) => (
              <li
                key={item}
                className="flex gap-2 rounded-lg border border-border bg-cream px-4 py-3 text-sm text-black"
              >
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-smarter-turquoise"
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </motion.ul>

          <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-12 lg:items-start lg:gap-8">
            <motion.figure
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={caseStudyFadeUp}
              className="lg:col-span-7"
            >
              <CaseStudyMockupImage
                src={smarterBlinkUp.mainImage.src}
                alt={smarterBlinkUp.mainImage.alt}
                className="w-full rounded-xl border border-border object-contain"
              />
            </motion.figure>
            <motion.figure
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              custom={0.06}
              variants={caseStudyFadeUp}
              className="lg:col-span-5"
            >
              <CroppedSketchImage
                src={smarterBlinkUp.supportingImage.src}
                alt={smarterBlinkUp.supportingImage.alt}
                objectPosition="65% center"
                aspectClass="aspect-[4/5]"
              />
              <figcaption className="mt-3 text-sm leading-relaxed text-grey">
                {smarterBlinkUp.caption}
              </figcaption>
            </motion.figure>
          </div>
        </div>
      </section>

      {/* Physical product */}
      <section
        className={cn(caseStudySection, "bg-smarter-turquoise-muted/40")}
        aria-labelledby="smarter-physical-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel className={labelAccent}>
              {smarterPhysical.label}
            </CaseStudyLabel>
            <CaseStudyHeadline
              id="smarter-physical-heading"
              accentClassName={headlineAccent}
            >
              {smarterPhysical.headline}
            </CaseStudyHeadline>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-grey md:text-lg">
              <p className="text-black">{smarterPhysical.body}</p>
              <p>{smarterPhysical.body2}</p>
              <p>{smarterPhysical.body3}</p>
            </div>
          </motion.div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-12">
            {smarterPhysical.images.map((image, index) => (
              <motion.figure
                key={image.caption}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                custom={index * 0.05}
                variants={caseStudyFadeUp}
              >
                <div className="overflow-hidden rounded-xl border border-border bg-white">
                  <CaseStudyMockupImage
                    src={image.src}
                    alt={image.alt}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-sm leading-relaxed text-grey">
                  {image.caption}
                </figcaption>
              </motion.figure>
            ))}
          </div>

          <motion.blockquote
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="mt-10 border-l-2 border-smarter-turquoise pl-6 md:mt-12 md:pl-8"
          >
            <p className="text-base font-medium leading-relaxed text-black md:text-lg">
              &ldquo;{smarterPhysical.quote}&rdquo;
            </p>
          </motion.blockquote>
        </div>
      </section>

      {/* FridgeCam opportunity */}
      <section
        id="fridgecam"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="smarter-fridgecam-heading"
      >
        <div className={caseStudyContainer}>
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-12 xl:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
            >
              <CaseStudyLabel className={labelAccent}>
                {smarterFridgecam.label}
              </CaseStudyLabel>
              <CaseStudyHeadline
                id="smarter-fridgecam-heading"
                accentClassName={headlineAccent}
              >
                {smarterFridgecam.headline}
              </CaseStudyHeadline>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-grey md:text-lg">
                <p className="text-black">{smarterFridgecam.body}</p>
                <p>{smarterFridgecam.body2}</p>
                <p>{smarterFridgecam.body3}</p>
              </div>

              <dl className="mt-8 flex flex-col gap-4">
                {smarterFridgecam.journey.map((item) => (
                  <div
                    key={item.step}
                    className="rounded-lg border border-border bg-cream px-4 py-3"
                  >
                    <dt className="text-xs font-bold uppercase tracking-[0.16em] text-smarter-turquoise">
                      {item.step}
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-black">
                      {item.copy}
                    </dd>
                  </div>
                ))}
              </dl>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              custom={0.08}
              variants={caseStudyFadeUp}
              className="mt-10 flex justify-center lg:mt-0 lg:justify-end"
            >
              <CaseStudyMockupImage
                src={smarterFridgecam.image.src}
                alt={smarterFridgecam.image.alt}
                className="w-full max-w-md object-contain lg:max-w-none"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Food waste */}
      <section
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="smarter-foodwaste-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel className={labelAccent}>
              {smarterFoodWaste.label}
            </CaseStudyLabel>
            <CaseStudyHeadline
              id="smarter-foodwaste-heading"
              accentClassName={headlineAccent}
            >
              {smarterFoodWaste.headline}
            </CaseStudyHeadline>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-grey md:text-lg">
              <p className="text-black">{smarterFoodWaste.body}</p>
              <p>{smarterFoodWaste.body2}</p>
            </div>
          </motion.div>

          <p className="mt-10 text-[10px] font-semibold uppercase tracking-[0.2em] text-grey">
            {smarterFoodWaste.researchLabel}
          </p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={caseStudyFadeUp}
            className="mt-5 -mx-6 overflow-x-auto px-6 lg:mx-0 lg:overflow-visible lg:px-0"
          >
            <ul className="flex min-w-max divide-x divide-border lg:min-w-0 lg:w-full">
              {smarterFoodWaste.figures.map((item) => (
                <li
                  key={item.metric}
                  className="flex min-w-[9rem] flex-1 flex-col px-4 first:pl-0 last:pr-0 md:min-w-0 md:px-5"
                >
                  <p className="text-lg font-black leading-none text-smarter-turquoise md:text-xl">
                    {item.metric}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-grey md:text-sm">
                    {item.copy}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="mt-8 max-w-3xl text-sm leading-relaxed text-grey"
          >
            {smarterFoodWaste.note}
          </motion.p>
        </div>
      </section>

      {/* Smarter Assist */}
      <section
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="smarter-assist-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel className={labelAccent}>
              {smarterAssist.label}
            </CaseStudyLabel>
            <CaseStudyHeadline
              id="smarter-assist-heading"
              accentClassName={headlineAccent}
            >
              {smarterAssist.headline}
            </CaseStudyHeadline>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-grey md:text-lg">
              <p className="text-black">{smarterAssist.body}</p>
              <p>{smarterAssist.body2}</p>
              <p>{smarterAssist.body3}</p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={caseStudyFadeUp}
            className="mt-8 overflow-hidden rounded-xl border border-border"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={smarterAssist.gif.src}
              alt={smarterAssist.gif.alt}
              className="w-full object-contain"
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={caseStudyFadeUp}
            className="mt-6"
          >
            <FlowDiagram steps={smarterAssist.process} />
          </motion.div>

          <motion.figure
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={caseStudyFadeUp}
            className="mt-10 lg:mt-12"
          >
            <CaseStudyMockupImage
              src={smarterAssist.inventoryImage.src}
              alt={smarterAssist.inventoryImage.alt}
              className="mx-auto w-full max-w-4xl object-contain md:max-w-5xl lg:max-w-6xl xl:max-w-[72rem]"
            />
          </motion.figure>
        </div>
      </section>

      {/* Principles */}
      <section
        id="principles"
        className={cn(caseStudySection, "bg-smarter-turquoise-muted/40")}
        aria-labelledby="smarter-principles-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel className={labelAccent}>
              {smarterPrinciples.label}
            </CaseStudyLabel>
            <CaseStudyHeadline
              id="smarter-principles-heading"
              accentClassName={headlineAccent}
            >
              {smarterPrinciples.headline}
            </CaseStudyHeadline>
          </motion.div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12">
            {smarterPrinciples.items.map((item, index) => {
              const Icon = principleIcons[index];
              return (
                <motion.article
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  custom={index * 0.04}
                  variants={caseStudyFadeUp}
                  className="rounded-xl border border-border bg-white p-5 md:p-6"
                >
                  <Icon
                    className="h-5 w-5 text-smarter-turquoise"
                    aria-hidden
                  />
                  <h3 className="mt-3 font-bold text-black">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-grey md:text-base">
                    {item.copy}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trade-offs */}
      <section
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="smarter-tradeoffs-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel className={labelAccent}>
              {smarterTradeoffs.label}
            </CaseStudyLabel>
            <CaseStudyHeadline
              id="smarter-tradeoffs-heading"
              accentClassName={headlineAccent}
            >
              {smarterTradeoffs.headline}
            </CaseStudyHeadline>
          </motion.div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12">
            {smarterTradeoffs.items.map((item, index) => (
              <motion.article
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                custom={index * 0.04}
                variants={caseStudyFadeUp}
                className="rounded-xl border border-border bg-cream p-5 md:p-6"
              >
                <h3 className="font-bold text-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-grey md:text-base">
                  {item.copy}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Delivered */}
      <section
        id="delivered"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="smarter-delivered-heading"
      >
        <div className={caseStudyContainer}>
          <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
            >
              <CaseStudyLabel className={labelAccent}>
                {smarterDelivered.label}
              </CaseStudyLabel>
              <CaseStudyHeadline
                id="smarter-delivered-heading"
                accentClassName={headlineAccent}
              >
                {smarterDelivered.headline}
              </CaseStudyHeadline>
              <p className="mt-6 text-base leading-relaxed text-grey md:text-lg">
                {smarterDelivered.body}
              </p>
              <ul className="mt-8 flex flex-col gap-3">
                {smarterDelivered.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-black md:text-base"
                  >
                    <Check
                      className="mt-1 h-4 w-4 shrink-0 text-smarter-turquoise"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm leading-relaxed text-grey md:text-base">
                {smarterDelivered.image.caption}
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              custom={0.08}
              variants={caseStudyFadeUp}
              className="mt-10 flex justify-center lg:mt-0"
            >
              <CaseStudyMockupImage
                src={smarterDelivered.image.src}
                alt={smarterDelivered.image.alt}
                className="w-full max-w-[16rem] object-contain sm:max-w-[18rem] md:max-w-[22rem] lg:max-w-[26rem]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section
        id="reflection"
        className={cn(caseStudySection, "bg-smarter-navy text-white")}
        aria-labelledby="smarter-reflection-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="mx-auto max-w-3xl"
          >
            <CaseStudyLabel className="text-smarter-turquoise">
              {smarterReflection.label}
            </CaseStudyLabel>
            <CaseStudyHeadline
              id="smarter-reflection-heading"
              className="text-white [&_span]:text-smarter-turquoise"
              accentClassName="text-smarter-turquoise"
            >
              {smarterReflection.headline}
            </CaseStudyHeadline>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-white/80 md:text-lg">
              <p className="text-white">{smarterReflection.body}</p>
              <p>{smarterReflection.body2}</p>
              <p>{smarterReflection.body3}</p>
              <p className="text-white">{smarterReflection.body4}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <CaseStudyProjectNav
        previous={smarterProjectNav.previous}
        next={smarterProjectNav.next}
      />
    </>
  );
}
