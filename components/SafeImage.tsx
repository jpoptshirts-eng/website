"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface SafeImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  placeholderLabel?: string;
}

export default function SafeImage({
  src,
  alt,
  width = 800,
  height = 600,
  className,
  priority = false,
  fill,
  sizes,
  placeholderLabel,
}: SafeImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-soft-pink/40 text-grey text-xs text-center px-4",
          fill && "absolute inset-0",
          className,
        )}
        style={fill ? undefined : { aspectRatio: `${width} / ${height}` }}
        aria-hidden
      >
        {placeholderLabel ?? alt}
      </div>
    );
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className={className}
        priority={priority}
        onError={() => setError(true)}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      onError={() => setError(true)}
    />
  );
}
