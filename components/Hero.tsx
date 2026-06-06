"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ArrowLink from "./ArrowLink";
import ScrollIndicator from "./ScrollIndicator";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const [heroError, setHeroError] = useState(false);

  return (
    <section
      className="relative overflow-x-hidden pb-16 pt-10 md:pb-20 lg:pb-24 lg:pt-16"
      aria-labelledby="hero-heading"
    >
      {/* Vertical location — desktop only */}
      <div
        className="pointer-events-none absolute left-2 top-1/2 z-10 hidden -translate-y-1/2 lg:block xl:left-4"
        aria-hidden
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-grey [writing-mode:vertical-rl] rotate-180">
          <span className="text-orange">•</span> Based in London, UK
        </p>
      </div>

      <div className="mx-auto max-w-page px-6 lg:px-8">
        <div className="relative overflow-visible min-[554px]:grid min-[554px]:grid-cols-12 min-[554px]:items-start lg:gap-x-4 xl:gap-x-6">
          {/* LEFT: headline + copy (Hero-content reference) */}
          <div
            id="about"
            className="scroll-mt-24 min-[554px]:col-span-7 min-[554px]:col-start-1 min-[554px]:row-start-1 min-[554px]:z-30 lg:col-span-7 lg:col-start-1 lg:row-start-1 lg:z-30"
          >
            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-pink"
            >
              Senior Product Designer
            </motion.p>

            <motion.h1
              id="hero-heading"
              custom={0.08}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="relative z-30 text-[2.35rem] font-black leading-[0.92] tracking-[-0.03em] sm:text-5xl md:text-6xl lg:max-w-none lg:text-[4rem] lg:leading-[0.92] xl:text-[4.75rem] lg:-mr-[8%]"
            >
              <span className="block">Solving</span>
              <span className="block text-orange">complex</span>
              <span className="block">
                problems<span className="text-pink">.</span>
              </span>
              <span className="mt-1 block sm:mt-2">Creating</span>
              <span className="block">meaningful</span>
              <span className="block">
                products<span className="text-orange">.</span>
              </span>
            </motion.h1>

            <motion.p
              custom={0.18}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-8 max-w-md text-base leading-relaxed text-grey md:text-lg lg:mt-10"
            >
              I design intelligent, human-centred experiences that simplify complex
              systems and drive measurable business impact.
            </motion.p>

            <motion.div
              custom={0.28}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-8 flex flex-wrap items-center gap-6 lg:mt-10"
            >
              <ArrowLink href="#work" variant="button-outline">
                View work
              </ArrowLink>
              <ArrowLink href="/about">About me</ArrowLink>
            </motion.div>
          </div>

          {/* RIGHT: portrait + pink circle (hidden below 554px) */}
          <div className="hidden min-[554px]:block min-[554px]:col-span-5 min-[554px]:col-start-8 min-[554px]:row-start-1 min-[554px]:z-10 lg:col-span-4 lg:col-start-8 xl:col-start-7">
            <div className="relative ml-auto w-full max-w-[20rem] overflow-visible sm:max-w-[22rem] md:max-w-[24rem] lg:max-w-[27rem] xl:max-w-[29rem]">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 overflow-visible min-[554px]:h-[calc(3.25rem+6*2.35rem*0.92)] sm:h-[calc(3.25rem+6*3rem*0.92)] md:h-[calc(3.25rem+6*3.75rem*0.92)] lg:h-[calc(3.25rem+6*4rem*0.92)] xl:h-[calc(3.25rem+6*4.75rem*0.92)]"
              >
                {heroError ? (
                  <div
                    className="absolute bottom-0 right-0 w-full min-[554px]:w-[16rem] min-[554px]:max-w-none min-[554px]:origin-bottom-right min-[554px]:scale-[0.96] sm:w-[18rem] sm:scale-[0.98] md:w-[21rem] md:scale-[1] lg:w-[25rem] lg:scale-[1.03] xl:w-[26rem] xl:scale-[1.04]"
                    aria-hidden
                  >
                    <span className="text-sm text-grey">Portrait</span>
                  </div>
                ) : (
                  <div className="absolute bottom-0 right-0 w-full min-[554px]:w-[16rem] min-[554px]:max-w-none min-[554px]:origin-bottom-right min-[554px]:scale-[0.96] sm:w-[18rem] sm:scale-[0.98] md:w-[21rem] md:scale-[1] lg:w-[25rem] lg:scale-[1.03] xl:w-[26rem] xl:scale-[1.04]">
                    <div
                      className="pointer-events-none absolute left-1/2 top-[46%] z-0 aspect-square w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-soft-pink"
                      aria-hidden
                    />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/jacinto-hero.png?v=5"
                      alt="Jacinto De Matos, Senior Product Designer"
                      className="relative z-10 h-auto w-full bg-transparent object-contain object-bottom"
                      onError={() => setHeroError(true)}
                    />
                  </div>
                )}
              </motion.div>
            </div>
          </div>

          {/* Side note + scroll — far right on xl+ */}
          <motion.aside
            custom={0.45}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="relative z-20 mt-10 hidden flex-col xl:col-span-2 xl:col-start-11 xl:row-start-1 xl:mt-8 xl:flex 2xl:mt-12"
          >
            <p className="max-w-[200px] text-sm leading-relaxed text-black">
              Designing at the intersection of{" "}
              <span className="font-semibold text-orange">behaviour</span>,{" "}
              <span className="font-semibold text-orange">technology</span> &{" "}
              <span className="font-semibold text-orange">business</span>.
            </p>
            <div className="mt-3 h-px w-14 bg-pink" aria-hidden />

            <ScrollIndicator />
          </motion.aside>
        </div>

        {/* Mobile / tablet side note */}
        <motion.aside
          custom={0.35}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-10 max-w-sm min-[554px]:hidden lg:hidden"
        >
          <p className="text-sm leading-relaxed text-black">
            Designing at the intersection of{" "}
            <span className="font-semibold text-orange">behaviour</span>,{" "}
            <span className="font-semibold text-orange">technology</span> &{" "}
            <span className="font-semibold text-orange">business</span>.
          </p>
          <div className="mt-3 h-px w-14 bg-pink" aria-hidden />
        </motion.aside>
      </div>
    </section>
  );
}
