import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { caseStudyContainer } from "@/lib/case-study-layout";

interface CaseStudyProjectNavProps {
  previous?: { title: string; href: string };
  next?: { title: string; href: string };
}

export default function CaseStudyProjectNav({
  previous,
  next,
}: CaseStudyProjectNavProps) {
  return (
    <nav
      className="border-t border-border bg-white py-12 md:py-16"
      aria-label="Case study project navigation"
    >
      <div
        className={`${caseStudyContainer} flex flex-col gap-8 md:flex-row md:items-center md:justify-between`}
      >
        <div className="flex flex-col gap-6 sm:flex-row sm:gap-10">
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
                  Previous project
                </span>
                {previous.title}
              </span>
            </Link>
          ) : null}
          {next ? (
            <Link
              href={next.href}
              className="group flex items-center gap-3 text-sm font-semibold text-black transition-colors hover:text-orange sm:flex-row-reverse"
            >
              <ArrowRight
                className="h-4 w-4 shrink-0 text-orange transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
              <span className="sm:text-right">
                <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-grey">
                  Next project
                </span>
                {next.title}
              </span>
            </Link>
          ) : null}
        </div>
        <Link
          href="/#work"
          className="text-sm font-semibold text-grey transition-colors hover:text-orange"
        >
          Back to all work
        </Link>
      </div>
    </nav>
  );
}
