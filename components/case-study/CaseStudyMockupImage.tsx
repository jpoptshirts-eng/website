import { cn } from "@/lib/utils";

interface CaseStudyMockupImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  /** Intrinsic width — helps the browser avoid upscaling past native resolution */
  width?: number;
  height?: number;
}

export default function CaseStudyMockupImage({
  src,
  alt,
  priority = false,
  className,
  width,
  height,
}: CaseStudyMockupImageProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn("h-auto w-full max-w-full object-contain", className)}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
    />
  );
}
