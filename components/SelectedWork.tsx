"use client";

import { motion } from "framer-motion";
import { caseStudies } from "@/lib/data";
import SectionLabel from "./SectionLabel";
import CaseStudyCard from "./CaseStudyCard";
import ArrowLink from "./ArrowLink";

export default function SelectedWork() {
  return (
    <section
      id="work"
      className="scroll-mt-24 py-16 md:py-20 lg:py-[120px]"
      aria-labelledby="work-heading"
    >
      <div className="mx-auto max-w-page px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <SectionLabel>Selected Work</SectionLabel>
            <h2
              id="work-heading"
              className="text-4xl font-black tracking-tight text-black md:text-5xl"
            >
              Case studies<span className="text-orange">.</span>
            </h2>
          </div>

          <div className="flex flex-col justify-end lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-lg text-base leading-relaxed text-grey md:text-lg"
            >
              A selection of projects where I&apos;ve led end-to-end design to solve
              complex problems and deliver real outcomes.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 lg:mt-4"
            >
              <ArrowLink href="#work" variant="orange">
                View all work
              </ArrowLink>
            </motion.div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 md:gap-8 lg:mt-16 lg:grid-cols-5 lg:gap-2">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.href} study={study} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
