import CaseStudyImageViewer from "@/components/case-study/CaseStudyImageViewer";
import type { QuickShopResearchWorkspace } from "@/lib/quickshop-data";

export default function ResearchWorkspace({
  image,
  imageAlt,
  caption,
}: QuickShopResearchWorkspace) {
  return (
    <CaseStudyImageViewer
      src={image}
      alt={imageAlt}
      caption={caption}
      scrollable
      minWidth="56rem"
    />
  );
}
