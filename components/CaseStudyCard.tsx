"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SafeImage from "./SafeImage";
import type { CaseStudy } from "@/lib/data";

interface CaseStudyCardProps {
  study: CaseStudy;
  index: number;
}

export default function CaseStudyCard({ study, index }: CaseStudyCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group flex h-full min-w-0 flex-col rounded-md border border-border bg-white p-6 transition-colors hover:border-orange/40 md:p-7"
    >
      <Link href={study.href} className="flex h-full flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange">
        <span className="text-sm font-bold text-orange">{study.number}</span>

        <h3 className="mt-4 text-xl font-bold leading-tight text-black md:text-2xl">
          {study.title}
          <span className="block text-lg font-semibold text-grey md:text-xl">
            {study.subtitle}
          </span>
        </h3>

        <p className="mt-4 flex-1 text-sm leading-relaxed text-grey">
          {study.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Project tags">
          {study.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-orange px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-orange"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="relative mt-8 aspect-[4/3] w-full overflow-hidden rounded-sm bg-soft-pink/30">
          <SafeImage
            src={study.image}
            alt={`${study.title} project preview`}
            fill
            width={400}
            height={300}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
            placeholderLabel={study.title}
          />
        </div>

        <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-orange opacity-0 transition-opacity group-hover:opacity-100">
          View case study
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
        </span>
      </Link>
    </motion.article>
  );
}
