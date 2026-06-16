"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { caseStudyFadeUp } from "@/components/case-study/case-study-motion";
import type { KaizenFeatureMeta } from "@/lib/kaizen-features";
import { cn } from "@/lib/utils";
import { MockupImage } from "./kaizen-shared";

export default function KaizenFeatureExploreCard({
  feature,
  index,
}: {
  feature: KaizenFeatureMeta;
  index: number;
}) {
  return (
    <motion.li
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-30px" }}
      custom={index * 0.04}
      variants={caseStudyFadeUp}
      className="group"
    >
      <Link
        href={feature.href}
        className={cn(
          "flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white",
          "transition-colors hover:border-orange/30 hover:shadow-md",
        )}
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-cream-muted">
          <MockupImage
            src={feature.heroImage}
            alt=""
            aria-hidden
            className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
          />
          <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-orange">
            {feature.number}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6 md:p-7">
          <h3 className="text-lg font-bold leading-snug text-black md:text-xl">
            {feature.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-black md:text-base">
            {feature.summary}
          </p>
          <p className="mt-4 text-sm font-semibold leading-relaxed text-orange">
            {feature.outcome}
          </p>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-black transition-colors group-hover:text-orange">
            Read feature story
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden
            />
          </span>
        </div>
      </Link>
    </motion.li>
  );
}
