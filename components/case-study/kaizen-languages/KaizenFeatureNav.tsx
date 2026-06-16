import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { caseStudyContainer } from "@/lib/case-study-layout";
import { KAIZEN_OVERVIEW_HREF } from "@/lib/kaizen-features";

interface KaizenFeatureNavProps {
  previous?: { title: string; href: string };
  next?: { title: string; href: string };
}

export default function KaizenFeatureNav({ previous, next }: KaizenFeatureNavProps) {
  return (
    <nav
      className="border-t border-border bg-white py-12 md:py-16"
      aria-label="Kaizen feature navigation"
    >
      <div
        className={`${caseStudyContainer} grid gap-8 md:grid-cols-3 md:items-center`}
      >
        {previous ? (
          <Link
            href={previous.href}
            className="group flex items-center gap-3 text-sm font-semibold text-black transition-colors hover:text-orange"
          >
            <ArrowLeft
              className="h-4 w-4 shrink-0 text-orange transition-transform group-hover:-translate-x-0.5"
              aria-hidden
            />
            <span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-grey">
                Previous feature
              </span>
              {previous.title}
            </span>
          </Link>
        ) : (
          <span />
        )}

        <Link
          href={KAIZEN_OVERVIEW_HREF}
          className="text-center text-sm font-semibold text-grey transition-colors hover:text-orange"
        >
          Back to Kaizen overview
        </Link>

        {next ? (
          <Link
            href={next.href}
            className="group flex items-center justify-end gap-3 text-right text-sm font-semibold text-black transition-colors hover:text-orange"
          >
            <span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-grey">
                Next feature
              </span>
              {next.title}
            </span>
            <ArrowRight
              className="h-4 w-4 shrink-0 text-orange transition-transform group-hover:translate-x-0.5"
              aria-hidden
            />
          </Link>
        ) : (
          <span />
        )}
      </div>
    </nav>
  );
}
