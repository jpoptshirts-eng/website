import { cn } from "@/lib/utils";

interface CaseStudyMockupImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  style?: React.CSSProperties;
  /** Intrinsic width — helps the browser avoid upscaling past native resolution */
  width?: number;
  height?: number;
}

export default function CaseStudyMockupImage({
  src,
  alt,
  priority = false,
  className,
  style,
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
      style={style}
      className={cn(
        "h-auto max-w-full object-contain",
        width ? "w-auto" : "w-full",
        className,
      )}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
    />
  );
}
