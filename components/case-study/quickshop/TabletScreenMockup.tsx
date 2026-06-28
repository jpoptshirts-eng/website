import CaseStudyMockupImage from "@/components/case-study/CaseStudyMockupImage";
import { cn } from "@/lib/utils";

interface TabletScreenMockupProps {
  src: string;
  alt: string;
  frameSrc?: string;
  className?: string;
  priority?: boolean;
  width?: number;
  height?: number;
}

export default function TabletScreenMockup({
  src,
  alt,
  frameSrc = "/images/work/primarybid/ipad-landscape-bezel.png",
  className,
  priority = false,
  width = 1024,
  height = 768,
}: TabletScreenMockupProps) {
  return (
    <div
      className={cn("relative mx-auto w-full max-w-3xl bg-transparent", className)}
      style={{ aspectRatio: "1024 / 741" }}
    >
      <div className="absolute inset-[5.1%_4.3%_5.8%_4.3%] overflow-hidden rounded-[1.5%]">
        <CaseStudyMockupImage
          src={src}
          alt={alt}
          priority={priority}
          width={width}
          height={height}
          className="h-full w-full max-w-none border-0 bg-transparent object-contain object-center"
        />
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={frameSrc}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 h-full w-full object-contain"
        decoding="async"
      />
    </div>
  );
}
