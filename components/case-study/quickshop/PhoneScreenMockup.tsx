import CaseStudyMockupImage from "@/components/case-study/CaseStudyMockupImage";
import { cn } from "@/lib/utils";

interface PhoneScreenMockupProps {
  src: string;
  alt: string;
  frameSrc?: string;
  className?: string;
  priority?: boolean;
  width?: number;
  height?: number;
}

export default function PhoneScreenMockup({
  src,
  alt,
  frameSrc = "/images/work/primarybid/iphone-x-bezel.png",
  className,
  priority = false,
  width = 375,
  height = 812,
}: PhoneScreenMockupProps) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-[15rem] overflow-hidden bg-transparent sm:max-w-[16rem] lg:max-w-[17.5rem]",
        className,
      )}
      style={{ aspectRatio: "507 / 1024" }}
    >
      <div className="absolute inset-[11.5%_6.4%_4.2%_6.4%] overflow-hidden rounded-[2.75%]">
        <CaseStudyMockupImage
          src={src}
          alt={alt}
          priority={priority}
          width={width}
          height={height}
          className="!absolute !-left-px !-top-px !block !h-[calc(100%+2px)] !w-[calc(100%+2px)] !max-w-none !border-0 !object-cover !object-top"
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
