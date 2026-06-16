"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import CaseStudyHeadline from "@/components/case-study/CaseStudyHeadline";
import CaseStudySubnav from "@/components/case-study/CaseStudySubnav";
import { caseStudyFadeUp } from "@/components/case-study/case-study-motion";
import { caseStudyContainer, caseStudySection } from "@/lib/case-study-layout";
import {
  getKaizenFeatureNav,
  KAIZEN_OVERVIEW_HREF,
  type KaizenFeatureSlug,
} from "@/lib/kaizen-features";
import { cn } from "@/lib/utils";
import KaizenFeatureNav from "./KaizenFeatureNav";
import { MockupImage, PhoneScreenMockup } from "./kaizen-shared";

interface KaizenFeatureShellProps {
  slug: KaizenFeatureSlug;
  subnav: readonly { id: string; label: string }[];
  summary: string;
  roleNote?: string;
  heroImage: string;
  heroImageAlt: string;
  heroInPhoneFrame?: boolean;
  heroPhoneFrame?: string;
  heroImageClassName?: string;
  children: React.ReactNode;
}

export default function KaizenFeatureShell({
  slug,
  subnav,
  summary,
  roleNote = "Founding Product Designer · Approximately three years · iOS and Android",
  heroImage,
  heroImageAlt,
  heroInPhoneFrame = false,
  heroPhoneFrame = "/images/work/kaizen-languages/iphone-8-silver-bezel.png",
  heroImageClassName = "w-full max-w-lg lg:max-w-xl",
  children,
}: KaizenFeatureShellProps) {
  const { current, previous, next, position } = getKaizenFeatureNav(slug);

  if (!current) return null;

  return (
    <>
      <section className={cn(caseStudySection, "bg-white pb-0 pt-10 md:pt-12 lg:pt-14")}>
        <div className={caseStudyContainer}>
          <nav aria-label="Breadcrumb" className="text-sm text-grey">
            <Link href={KAIZEN_OVERVIEW_HREF} className="transition-colors hover:text-orange">
              Kaizen Languages
            </Link>
            <span aria-hidden className="mx-2">
              /
            </span>
            <span className="text-black">{current.shortTitle}</span>
          </nav>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={caseStudyFadeUp}
            className="mt-8 lg:grid lg:grid-cols-2 lg:items-center lg:gap-10 xl:gap-14"
          >
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-orange">
                {position} · {current.category}
              </p>
              <CaseStudyHeadline as="h1" className="mt-3">
                {current.title}
              </CaseStudyHeadline>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-black md:text-lg">
                {summary}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-grey md:text-base">{roleNote}</p>
            </div>
            <div className="mt-10 flex justify-center lg:mt-0">
              {heroInPhoneFrame ? (
                <PhoneScreenMockup
                  screenSrc={heroImage}
                  frameSrc={heroPhoneFrame}
                  alt={heroImageAlt}
                  priority
                  className="max-w-[13rem] sm:max-w-[14rem] lg:max-w-[15rem]"
                />
              ) : (
                <MockupImage
                  src={heroImage}
                  alt={heroImageAlt}
                  priority
                  className={heroImageClassName}
                />
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <CaseStudySubnav items={subnav} />

      {children}

      <KaizenFeatureNav
        previous={
          previous
            ? { title: previous.shortTitle, href: previous.href }
            : undefined
        }
        next={next ? { title: next.shortTitle, href: next.href } : undefined}
      />
    </>
  );
}
