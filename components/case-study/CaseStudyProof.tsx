"use client";

import { motion } from "framer-motion";
import CaseStudyHeadline from "@/components/case-study/CaseStudyHeadline";
import CaseStudyLabel from "@/components/case-study/CaseStudyLabel";
import { caseStudyFadeUp } from "@/components/case-study/case-study-motion";
import { caseStudyContainer, caseStudySection } from "@/lib/case-study-layout";
import { cn } from "@/lib/utils";

export interface CaseStudyProofCard {
  title: string;
  copy: string;
}

export interface CaseStudyProofContent {
  label?: string;
  headline: string;
  intro: string;
  cards: readonly CaseStudyProofCard[];
  closing: string;
}

interface CaseStudyProofProps {
  content: CaseStudyProofContent;
  headingId: string;
  id?: string;
  sectionClassName?: string;
  cardClassName?: string;
}

export default function CaseStudyProof({
  content,
  headingId,
  id = "proof",
  sectionClassName,
  cardClassName = "bg-white",
}: CaseStudyProofProps) {
  return (
    <section
      id={id}
      className={cn(caseStudySection, sectionClassName)}
      aria-labelledby={headingId}
    >
      <div className={caseStudyContainer}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={caseStudyFadeUp}
          className="max-w-3xl"
        >
          <CaseStudyLabel>{content.label ?? "Proof"}</CaseStudyLabel>
          <CaseStudyHeadline id={headingId}>{content.headline}</CaseStudyHeadline>
          <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
            {content.intro}
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-3 lg:mt-14">
          {content.cards.map((card, index) => (
            <motion.article
              key={card.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              custom={index * 0.05}
              variants={caseStudyFadeUp}
              className={cn(
                "rounded-2xl border border-border p-6 md:p-7",
                cardClassName,
              )}
            >
              <h3 className="font-bold text-black">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-grey md:text-base">
                {card.copy}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={caseStudyFadeUp}
          className="mt-10 max-w-3xl border-l-2 border-orange pl-6 text-base font-medium leading-relaxed text-black md:mt-12 md:text-lg"
        >
          {content.closing}
        </motion.p>
      </div>
    </section>
  );
}
