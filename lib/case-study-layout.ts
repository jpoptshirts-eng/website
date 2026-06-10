/** Shared layout tokens for case study pages */
export const caseStudyContainer = "mx-auto max-w-page px-6 lg:px-8";

export const caseStudySection =
  "case-study-section py-16 md:py-20 lg:py-24";

/** Hero row: stacks on small screens, side-by-side from md (768px) up */
export const caseStudyHeroRow =
  "flex flex-col gap-12 md:flex-row md:items-stretch md:gap-10 xl:gap-14";

/** Hide case study hero mockups at 544px and below, show from 545px up */
export const caseStudyHeroImageColumn =
  "max-[544px]:hidden min-[545px]:flex min-[545px]:min-w-0 min-[545px]:flex-1 min-[545px]:flex-col";
