"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { aboutIntro } from "@/lib/about-data";

export default function AboutHero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      className="bg-cream pb-0 pt-16 md:pt-20 lg:pt-24"
      aria-labelledby="about-page-heading"
    >
      <div className="mx-auto max-w-page px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-10 xl:gap-14">
          {/* Text — top aligned */}
          <div className="flex-1 lg:max-w-[52%]">
            <motion.h1
              id="about-page-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="text-[4rem] font-black leading-[0.88] tracking-[-0.03em] sm:text-[5rem] md:text-[6rem] lg:text-[6.5rem] xl:text-[7.5rem] 2xl:text-[8.5rem]"
            >
              <span className="block">About</span>
              <span className="block">
                me<span className="text-orange">.</span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 max-w-lg border-l-2 border-orange pl-6 text-base leading-relaxed text-black md:mt-10 md:text-lg"
            >
              {aboutIntro}
            </motion.p>
          </div>

          {/* Portrait — anchored to bottom of hero (circle unchanged) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex min-h-[18rem] flex-1 flex-col justify-end sm:min-h-[22rem] lg:min-h-0 lg:justify-end"
          >
            <div className="relative mx-auto w-full max-w-[20rem] sm:max-w-[24rem] lg:ml-auto lg:max-w-[28rem] xl:max-w-[32rem]">
              <div
                className="pointer-events-none absolute -right-[12%] top-[2%] z-0 aspect-square w-[88%] rounded-full bg-orange md:w-[92%] lg:-right-[8%]"
                aria-hidden
              />

              <div className="relative z-10 flex items-end justify-center lg:justify-end">
                {imgError ? (
                  <div
                    className="relative aspect-[4/5] w-full"
                    aria-hidden
                  >
                    <span className="flex h-full items-end justify-center pb-0 text-sm text-grey">
                      Portrait
                    </span>
                  </div>
                ) : (
                  <div className="relative aspect-[4/5] w-full">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/about/hero.png"
                      alt="Jacinto De Matos, Senior Product Designer"
                      className="h-full w-full object-contain object-bottom"
                      onError={() => setImgError(true)}
                    />
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
