"use client";

import { motion } from "framer-motion";
import { Brain, Network, TrendingUp, FlaskConical } from "lucide-react";
import { approachItems } from "@/lib/data";
import type { ApproachItem } from "@/lib/data";
import { pageContainer } from "@/lib/layout";

const iconMap = {
  brain: Brain,
  network: Network,
  trending: TrendingUp,
  flask: FlaskConical,
} as const;

function ApproachIcon({ icon }: { icon: ApproachItem["icon"] }) {
  const Icon = iconMap[icon];
  return <Icon className="h-5 w-5 text-orange" strokeWidth={1.75} aria-hidden />;
}

export default function Approach() {
  return (
    <section
      id="approach"
      className="scroll-mt-24 border-t border-border py-16 md:py-20 lg:py-[120px]"
      aria-labelledby="approach-heading"
    >
      <div className={pageContainer}>
        <h2 id="approach-heading" className="sr-only">
          My approach
        </h2>

        <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {approachItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="relative flex flex-col gap-4 px-0 lg:px-8 lg:first:pl-0 lg:last:pr-0"
            >
              {index > 0 && (
                <div
                  className="absolute -left-4 top-0 hidden h-full w-px bg-border lg:block"
                  aria-hidden
                />
              )}

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-soft-pink">
                <ApproachIcon icon={item.icon} />
              </div>

              <h3 className="text-lg font-bold text-black">{item.title}</h3>
              <p className="text-sm leading-relaxed text-grey">{item.copy}</p>

              {index < approachItems.length - 1 && (
                <div className="mt-6 h-px w-full bg-border lg:hidden" aria-hidden />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
