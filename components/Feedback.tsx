"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";
import SectionLabel from "./SectionLabel";
import SafeImage from "./SafeImage";

export default function Feedback() {
  return (
    <section
      id="feedback"
      className="scroll-mt-24 py-16 md:py-20 lg:py-[120px]"
      aria-labelledby="feedback-heading"
    >
      <div className="mx-auto max-w-page px-6 lg:px-8">
        <SectionLabel>Feedback</SectionLabel>
        <h2
          id="feedback-heading"
          className="text-4xl font-black tracking-tight text-black md:text-5xl"
        >
          What others say<span className="text-orange">.</span>
        </h2>

        {/*
          Replace these with real testimonials from Jacinto's portfolio or LinkedIn recommendations.
        */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:gap-8 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((item, index) => (
            <motion.blockquote
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col rounded-md border border-border bg-white p-8 md:p-9"
            >
              <span
                className="font-serif text-6xl leading-none text-pink"
                aria-hidden
              >
                &ldquo;
              </span>
              <p className="mt-4 flex-1 text-base leading-relaxed text-black">
                {item.quote}
              </p>
              <footer className="mt-8 flex items-center gap-4 border-t border-border pt-6">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-soft-pink">
                  <SafeImage
                    src={item.avatar}
                    alt=""
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                    placeholderLabel={item.name.charAt(0)}
                  />
                </div>
                <div>
                  <cite className="not-italic">
                    <p className="font-bold text-black">{item.name}</p>
                    <p className="text-sm text-grey">{item.role}</p>
                    <p className="text-sm font-semibold text-orange">{item.company}</p>
                  </cite>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
