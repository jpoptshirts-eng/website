"use client";

import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { aboutBannerCopy } from "@/lib/about-data";

export default function AboutBanner() {
  return (
    <section className="border-t border-border bg-cream py-10 md:py-12" aria-label="Closing statement">
      <div className="mx-auto max-w-page px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex shrink-0 items-center gap-6 sm:gap-8">
            <span
              className="flex h-12 w-12 items-center justify-center rounded-full bg-orange text-white"
              aria-hidden
            >
              <ArrowDown className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <p className="max-w-xl text-base font-medium leading-relaxed text-black md:text-lg">
              {aboutBannerCopy}
            </p>
          </div>

          <div
            className="grid grid-cols-8 gap-1.5 opacity-40 sm:grid-cols-10"
            aria-hidden
          >
            {Array.from({ length: 40 }).map((_, i) => (
              <span
                key={i}
                className="h-1.5 w-1.5 rounded-full bg-grey/50"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
