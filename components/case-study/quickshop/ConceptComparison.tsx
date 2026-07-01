"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { caseStudyFadeUp } from "@/components/case-study/case-study-motion";
import type { QuickShopConceptsSection } from "@/lib/quickshop-data";
import { cn } from "@/lib/utils";

const DIAGRAM_FRAME =
  "mt-4 min-h-[9.5rem] rounded-xl border border-border bg-white p-4";

function ConceptDiagram({ type }: { type: "feed" | "steps" | "carousels" }) {
  if (type === "feed") {
    return (
      <div className={cn(DIAGRAM_FRAME, "space-y-2")}>
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-8 rounded-md bg-border/60" />
        ))}
      </div>
    );
  }
  if (type === "steps") {
    return (
      <div
        className={cn(
          DIAGRAM_FRAME,
          "flex flex-wrap items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-wide text-grey",
        )}
      >
        {["Top Regulars", "Food & Drink", "Household", "Inspiration"].map(
          (step, i) => (
            <span key={step} className="flex items-center gap-2">
              <span className="rounded-full bg-[#FFE4D6] px-2 py-1 text-orange">
                {step}
              </span>
              {i < 3 ? <ArrowRight className="h-3 w-3 text-orange" /> : null}
            </span>
          ),
        )}
      </div>
    );
  }
  return (
    <div className={cn(DIAGRAM_FRAME, "space-y-2")}>
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="flex gap-2">
          {Array.from({ length: 3 }).map((__, j) => (
            <div key={j} className="h-8 flex-1 rounded bg-border/50" />
          ))}
        </div>
      ))}
    </div>
  );
}

export default function ConceptComparison({
  data,
}: {
  data: QuickShopConceptsSection;
}) {
  return (
    <div className="mt-10 space-y-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={caseStudyFadeUp}
        className="max-w-3xl"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange">
          {data.testing.label}
        </p>
        <p className="mt-3 text-base leading-relaxed text-black md:text-lg">
          {data.testing.copy}
        </p>
      </motion.div>

      <div className="flex flex-col gap-8">
        {data.items.map((concept, index) => (
          <motion.div
            key={concept.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            custom={index * 0.06}
            variants={caseStudyFadeUp}
            className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-10 xl:gap-12"
          >
            <div>
              <span className="text-xs font-bold text-orange">
                {concept.number}
              </span>
              <h3 className="mt-3 text-xl font-bold text-black md:text-2xl">
                {concept.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-black md:text-lg">
                {concept.description}
              </p>

              <div className="mt-6 space-y-4 text-sm leading-relaxed md:text-base">
                <p>
                  <span className="font-semibold text-black">Benefit: </span>
                  {concept.benefit}
                </p>
                {concept.risk ? (
                  <p className="text-grey">
                    <span className="font-semibold text-black">Risk: </span>
                    {concept.risk}
                  </p>
                ) : null}
                <p>
                  <span className="font-semibold text-black">Finding: </span>
                  {concept.finding}
                </p>
              </div>
            </div>

            <article className="mt-8 rounded-2xl border border-border bg-white p-6 md:mt-0 md:p-7">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <span className="text-xs font-bold text-orange">
                  {concept.number}
                </span>
                <span
                  className={cn(
                    "rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wide",
                    concept.outcomeTone === "positive"
                      ? "bg-orange text-white"
                      : concept.outcomeTone === "muted"
                        ? "bg-border text-grey"
                        : "bg-[#FFE4D6] text-black",
                  )}
                >
                  {concept.outcome}
                </span>
              </div>
              <h3 className="mt-3 text-lg font-bold text-black">
                {concept.title}
              </h3>
              <ConceptDiagram type={concept.diagram} />
            </article>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={caseStudyFadeUp}
        className="max-w-3xl"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange">
          Direction chosen
        </p>
        <h3 className="mt-3 text-xl font-bold text-black md:text-2xl">
          {data.direction.headline}
        </h3>
        <div className="mt-4 space-y-4">
          {data.direction.body.map((paragraph) => (
            <p
              key={paragraph}
              className="text-base leading-relaxed text-black md:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
