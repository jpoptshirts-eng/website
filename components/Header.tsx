"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/data";
import ArrowLink from "./ArrowLink";

function Logo() {
  const [logoError, setLogoError] = useState(false);

  if (logoError) {
    return (
      <Link
        href="/"
        className="text-2xl font-black tracking-tight text-black"
        aria-label="Jacinto De Matos — Home"
      >
        JD<span className="text-orange">.</span>
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className="relative block h-10 w-[4.5rem] sm:h-11 sm:w-20"
      aria-label="Jacinto De Matos — Home"
    >
      <Image
        src="/images/jd-logo.png"
        alt="JD."
        width={80}
        height={40}
        className="h-10 w-auto object-contain object-left sm:h-11"
        priority
        onError={() => setLogoError(true)}
      />
    </Link>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto grid max-w-page grid-cols-[1fr_auto] items-center gap-4 px-6 py-5 lg:grid-cols-[1fr_auto_1fr] lg:px-8">
        <Logo />

        <nav
          className="hidden items-center justify-center gap-8 lg:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-[0.15em] text-black transition-colors hover:text-orange"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden justify-self-end lg:block">
          <ArrowLink href="mailto:hello@jacintodematos.com" variant="button-outline">
            Get in touch
          </ArrowLink>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center justify-self-end rounded-full border border-border lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-border lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-6" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-3 text-sm font-semibold uppercase tracking-[0.15em] text-black"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4">
                <ArrowLink
                  href="mailto:hello@jacintodematos.com"
                  variant="button-outline"
                  className="w-full justify-center"
                >
                  Get in touch
                </ArrowLink>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
