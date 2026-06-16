"use client";

import { Camera, Layers, LineChart, Palette, Sparkles, Star, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

export const iconWrap =
  "flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#FFE4D6]";

export const visualDirectionIcons = {
  camera: Camera,
  sparkles: Sparkles,
  palette: Palette,
  layers: Layers,
};

const kpiIcons = {
  trending: TrendingUp,
  star: Star,
  chart: LineChart,
} as const;

type KpiIconKey = keyof typeof kpiIcons;

export function getMetricIcon(metric: string): KpiIconKey {
  if (metric.includes("NPS")) return "star";
  if (metric.includes("→")) return "chart";
  return "trending";
}

export function KpiCallout({
  children,
  icon = "trending",
  className,
}: {
  children: React.ReactNode;
  icon?: KpiIconKey;
  className?: string;
}) {
  const Icon = kpiIcons[icon];

  return (
    <div
      className={cn(
        "flex items-start gap-4 rounded-2xl bg-[#FFF0E8] p-5 md:gap-5 md:p-6",
        className,
      )}
    >
      <div
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white"
        aria-hidden
      >
        <Icon className="h-5 w-5 text-orange" strokeWidth={1.75} />
      </div>
      <p className="text-base font-semibold leading-relaxed text-black md:text-lg">
        {children}
      </p>
    </div>
  );
}

export function KpiIconBadge({
  icon,
  className,
}: {
  icon: KpiIconKey;
  className?: string;
}) {
  const Icon = kpiIcons[icon];

  return (
    <div
      className={cn(
        "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFF0E8]",
        className,
      )}
      aria-hidden
    >
      <Icon className="h-4 w-4 text-orange" strokeWidth={1.75} />
    </div>
  );
}

export function MockupImage({
  src,
  alt,
  priority = false,
  className,
  width,
  height,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  width?: number;
  height?: number;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn("h-auto w-full bg-transparent object-contain", className)}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
    />
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm md:text-base">
          <span
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange"
            aria-hidden
          />
          <span className="leading-relaxed text-black">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function PhoneScreenMockup({
  screenSrc,
  frameSrc,
  alt,
  priority = false,
  className,
  aspectRatio = "523 / 1053",
  screenClassName = "left-[6.31%] top-[12.25%] h-[76.54%] w-[86.81%] rounded-[2%]",
}: {
  screenSrc: string;
  frameSrc: string;
  alt: string;
  priority?: boolean;
  className?: string;
  aspectRatio?: string;
  screenClassName?: string;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-[14rem] bg-transparent sm:max-w-[15rem] lg:max-w-[16rem]",
        className,
      )}
      style={{ aspectRatio }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={screenSrc}
        alt={alt}
        width={375}
        height={667}
        className={cn(
          "absolute z-0 origin-center bg-white object-cover object-top",
          screenClassName,
        )}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
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

export function PhoneVideoMockup({
  videoSrc,
  frameSrc,
  alt,
  className,
  aspectRatio = "507 / 1024",
  screenClassName = "left-[6.1%] top-[3.6%] h-[93.5%] w-[88%] scale-[1.02] rounded-[8%]",
}: {
  videoSrc: string;
  frameSrc: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  screenClassName?: string;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-[17.5rem] bg-transparent sm:max-w-xs lg:max-w-sm",
        className,
      )}
      style={{ aspectRatio }}
    >
      <video
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label={alt}
        className={cn(
          "absolute z-0 origin-center bg-transparent object-cover object-[50%_32%]",
          screenClassName,
        )}
      />
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

export function FigureCaption({ children }: { children: React.ReactNode }) {
  return (
    <figcaption className="mt-3 text-sm leading-relaxed text-grey md:text-base">
      {children}
    </figcaption>
  );
}

export function AnalyticsFigure({
  src,
  alt,
  caption,
  className,
}: {
  src: string;
  alt: string;
  caption: string;
  className?: string;
}) {
  return (
    <figure className={cn("rounded-2xl border border-border bg-white p-4 md:p-5", className)}>
      <MockupImage src={src} alt={alt} className="rounded-xl" />
      <FigureCaption>{caption}</FigureCaption>
    </figure>
  );
}
