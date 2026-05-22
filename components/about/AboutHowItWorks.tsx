"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { aboutHowItWorksItems } from "@/lib/about-data";

export default function AboutHowItWorks() {
  return (
    <section className="bg-cream py-16 md:py-20 lg:py-24" aria-labelledby="how-it-works-heading">
      <div className="mx-auto max-w-page px-6 lg:px-8">
        <motion.h2
          id="how-it-works-heading"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-black tracking-tight text-black md:text-8xl"
        >
          How I work<span className="text-orange">.</span>
        </motion.h2>

        <div className="mt-12 flex flex-col gap-10 lg:mt-14 lg:flex-row lg:gap-0">
          {aboutHowItWorksItems.map((item, index) => (
            <motion.article
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className={`flex flex-1 flex-col px-0 lg:px-5 xl:px-6 ${
                index > 0 ? "lg:border-l lg:border-border" : ""
              } ${index === 0 ? "lg:pl-0" : ""} ${
                index === aboutHowItWorksItems.length - 1 ? "lg:pr-0" : ""
              }`}
            >
              <Image
                src={item.icon}
                alt=""
                width={48}
                height={48}
                className="mb-5 h-12 w-12 object-contain"
              />
              <span className="text-xs font-bold text-orange">{item.number}</span>
              <h3 className="mt-2 text-base font-bold leading-snug text-black">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-grey">
                {item.copy}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
