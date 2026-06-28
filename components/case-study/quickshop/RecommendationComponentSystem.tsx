import {
  ChevronsDown,
  Layers,
  Target,
  type LucideIcon,
} from "lucide-react";
import CaseStudyImageViewer from "@/components/case-study/CaseStudyImageViewer";
import type { QuickShopRecommendationSystem } from "@/lib/quickshop-data";

const VARIANT_ICONS: Record<string, LucideIcon> = {
  single: Target,
  paired: Layers,
  expandable: ChevronsDown,
};

export default function RecommendationComponentSystem({
  data,
}: {
  data: QuickShopRecommendationSystem;
}) {
  return (
    <div className="mt-10 space-y-10">
      <CaseStudyImageViewer
        src={data.overview.src}
        alt={data.overview.alt}
        width={data.overview.width}
        height={data.overview.height}
        scrollable
        minWidth="48rem"
        imageClassName="bg-white"
      />

      <div className="grid gap-4 md:grid-cols-3">
        {data.variants.map((variant) => {
          const Icon = VARIANT_ICONS[variant.icon] ?? Target;
          return (
            <article
              key={variant.title}
              className="rounded-2xl border border-border bg-white p-6"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#FFE4D6]">
                <Icon className="h-5 w-5 text-orange" strokeWidth={1.75} />
              </div>
              <h3 className="text-base font-bold text-black md:text-lg">
                {variant.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-black md:text-base">
                {variant.copy}
              </p>
            </article>
          );
        })}
      </div>

      <div className="grid gap-6 border-t border-border pt-8 md:grid-cols-3">
        {data.principles.map((principle) => (
          <div key={principle.title}>
            <h3 className="text-base font-bold text-black md:text-lg">
              {principle.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-black md:text-base">
              {principle.copy}
            </p>
          </div>
        ))}
      </div>

      <p className="border-l-2 border-orange pl-6 text-[20px] font-medium leading-relaxed text-black md:pl-7 md:text-[22px]">
        {data.pullQuote}
      </p>
    </div>
  );
}
