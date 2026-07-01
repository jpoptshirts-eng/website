import CaseStudyMockupImage from "@/components/case-study/CaseStudyMockupImage";
import type { QuickShopResearchWorkspace } from "@/lib/quickshop-data";

export default function ResearchWorkspace({
  image,
  imageAlt,
}: QuickShopResearchWorkspace) {
  return (
    <figure>
      <div
        className="-mx-6 overflow-x-auto px-6 scrollbar-none lg:mx-0 lg:px-0"
        tabIndex={0}
        role="region"
        aria-label="Scrollable diagram — use arrow keys or swipe to view the full image"
      >
        <div className="min-w-[36rem] sm:min-w-[42rem]">
          <CaseStudyMockupImage
            src={image}
            alt={imageAlt}
            className="h-auto w-full bg-transparent"
          />
        </div>
      </div>
    </figure>
  );
}
