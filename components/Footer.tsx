"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ArrowLink from "./ArrowLink";

const footerLinks = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/about" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jacintodematos" },
  { label: "Email", href: "mailto:jjmatos@hotmail.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      {/* CTA */}
      <section
        className="py-16 md:py-20 lg:py-[120px]"
        aria-labelledby="cta-heading"
      >
        <div className="mx-auto max-w-page px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-8">
            <motion.h2
              id="cta-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-black leading-tight tracking-tight text-black sm:text-4xl lg:col-span-5 lg:text-5xl"
            >
              Let&apos;s build something meaningful together
              <span className="text-pink">.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="text-base leading-relaxed text-grey lg:col-span-4"
            >
              I&apos;m always open to talking about new opportunities, interesting
              problems and ambitious ideas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="lg:col-span-3 lg:flex lg:justify-end"
            >
              <ArrowLink
                href="mailto:jjmatos@hotmail.com"
                variant="button-solid"
              >
                Get in touch
              </ArrowLink>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer bar */}
      <div className="border-t border-border py-10">
        <div className="mx-auto flex max-w-page flex-col gap-8 px-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-6">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("#") || link.href.startsWith("/") ? (
                    <Link
                      href={link.href}
                      className="text-sm font-semibold uppercase tracking-wide text-black transition-colors hover:text-orange"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm font-semibold uppercase tracking-wide text-black transition-colors hover:text-orange"
                      {...(link.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <p className="text-sm text-grey">
            © 2026 Jacinto De Matos. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
