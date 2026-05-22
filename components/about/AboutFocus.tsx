"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { aboutFocusColumns } from "@/lib/about-data";

export default function AboutFocus() {
  return (
    <section className="bg-cream-muted py-16 md:py-20 lg:py-24" aria-label="Focus and experience">
      <div className="mx-auto max-w-page px-6 lg:px-8">
        <div className="flex flex-col gap-12 md:flex-row md:gap-0">
          {aboutFocusColumns.map((column, index) => (
            <motion.div
              key={column.alt}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`flex flex-1 flex-col items-center px-0 text-center md:items-start md:px-8 md:text-left lg:px-10 ${
                index === 0 ? "md:border-r md:border-border" : ""
              } ${index === 0 ? "md:pl-0" : "md:pr-0"}`}
            >
              <div className="mb-6 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                <Image
                  src={column.icon}
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                />
              </div>
              <p className="text-sm leading-relaxed text-black md:text-base">
                {column.copy}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
