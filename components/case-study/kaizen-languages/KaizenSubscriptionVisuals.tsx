"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { caseStudyFadeUp } from "@/components/case-study/case-study-motion";
import { cn } from "@/lib/utils";

const dashboardKpis = [
  { label: "Net customers", value: "361" },
  { label: "New subscriptions", value: "479" },
  { label: "First opens", value: "3,900" },
] as const;

const subscriptionTypes = [
  { label: "New", value: 479, color: "#FF4D00" },
  { label: "Repeat", value: 128, color: "#FF6FAE" },
  { label: "Churned", value: 118, color: "#EAEAEA" },
] as const;

const planLengths = [
  { label: "1 month", value: 334, percent: 69.7, color: "#4285F4" },
  { label: "3 month", value: 87, percent: 18.2, color: "#FF6FAE" },
  { label: "6 month", value: 41, percent: 8.6, color: "#FF4D00" },
  { label: "12 month", value: 17, percent: 3.5, color: "#34A853" },
] as const;

const acquisitionSpend = [
  { label: "Facebook", value: 7160.53, percent: 73 },
  { label: "Apple", value: 2610.5, percent: 27 },
] as const;

function DonutChart({
  segments,
  size = 140,
  stroke = 22,
}: {
  segments: readonly { percent: number; color: string }[];
  size?: number;
  stroke?: number;
}) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="shrink-0 -rotate-90"
      aria-hidden
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#F5F2ED"
        strokeWidth={stroke}
      />
      {segments.map((segment, index) => {
        const dash = (segment.percent / 100) * circumference;
        const circle = (
          <circle
            key={index}
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={segment.color}
            strokeWidth={stroke}
            strokeDasharray={`${dash} ${circumference - dash}`}
            strokeDashoffset={-offset}
            strokeLinecap="butt"
          />
        );
        offset += dash;
        return circle;
      })}
    </svg>
  );
}

export function KaizenBusinessDashboardInfographic({ className }: { className?: string }) {
  const typeTotal = subscriptionTypes.reduce((sum, item) => sum + item.value, 0);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={caseStudyFadeUp}
      className={cn(
        "rounded-2xl border border-border bg-white p-5 md:p-6",
        className,
      )}
      role="img"
      aria-label="Business dashboard summary showing net customers, subscriptions, plan length and acquisition spend"
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-grey">
        Dashboard snapshot · Aug–Nov 2019
      </p>

      <div className="mt-5 grid grid-cols-3 gap-3">
        {dashboardKpis.map((kpi) => (
          <div
            key={kpi.label}
            className="rounded-xl bg-cream-muted px-3 py-4 text-center"
          >
            <p className="text-xl font-black leading-none text-orange md:text-2xl">
              {kpi.value}
            </p>
            <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-grey">
              {kpi.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-cream-muted/60 p-4">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-orange">
            Subscription type
          </p>
          <div className="mt-4 flex h-3 overflow-hidden rounded-full bg-white">
            {subscriptionTypes.map((item) => (
              <div
                key={item.label}
                style={{
                  width: `${(item.value / typeTotal) * 100}%`,
                  backgroundColor: item.color,
                }}
                title={`${item.label}: ${item.value}`}
              />
            ))}
          </div>
          <ul className="mt-4 space-y-2">
            {subscriptionTypes.map((item) => (
              <li
                key={item.label}
                className="flex items-center justify-between text-sm"
              >
                <span className="flex items-center gap-2 text-black">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: item.color }}
                    aria-hidden
                  />
                  {item.label}
                </span>
                <span className="font-semibold text-black">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-border bg-cream-muted/60 p-4">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-orange">
            Plan length
          </p>
          <div className="mt-3 flex items-center gap-4">
            <DonutChart segments={planLengths} />
            <ul className="min-w-0 flex-1 space-y-2">
              {planLengths.map((item) => (
                <li key={item.label} className="flex items-center justify-between gap-2 text-sm">
                  <span className="flex min-w-0 items-center gap-2 text-black">
                    <span
                      className="h-2.5 w-2.5 shrink-0 rounded-full"
                      style={{ backgroundColor: item.color }}
                      aria-hidden
                    />
                    <span className="truncate">{item.label}</span>
                  </span>
                  <span className="shrink-0 font-semibold text-black">
                    {item.percent}%
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-5 rounded-xl border border-border bg-cream-muted/60 p-4">
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-orange">
          Acquisition spend
        </p>
        <div className="mt-4 space-y-3">
          {acquisitionSpend.map((item) => (
            <div key={item.label}>
              <div className="mb-1.5 flex items-center justify-between text-sm">
                <span className="font-medium text-black">{item.label}</span>
                <span className="font-semibold text-black">
                  £{item.value.toLocaleString("en-GB", { maximumFractionDigits: 0 })}
                </span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-white">
                <div
                  className="h-full rounded-full bg-orange transition-all"
                  style={{ width: `${item.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ComparisonBar({
  label,
  value,
  maxValue,
  highlight = false,
}: {
  label: string;
  value: number;
  maxValue: number;
  highlight?: boolean;
}) {
  return (
    <div>
      <div className="mb-2 flex items-end justify-between gap-3">
        <span className="text-sm font-medium text-black">{label}</span>
        <span
          className={cn(
            "text-lg font-black leading-none",
            highlight ? "text-orange" : "text-black",
          )}
        >
          {value}%
        </span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-cream-muted">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${(value / maxValue) * 100}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={cn(
            "h-full rounded-full",
            highlight ? "bg-orange" : "bg-border",
          )}
        />
      </div>
    </div>
  );
}

export function KaizenConversionResultsVisual({ className }: { className?: string }) {
  return (
    <div className={cn("grid gap-6 lg:grid-cols-2", className)}>
      <motion.article
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-30px" }}
        variants={caseStudyFadeUp}
        className="relative overflow-hidden rounded-2xl border border-orange/20 bg-[#FFF0E8] p-6 md:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-orange">
              Free lesson experiment
            </p>
            <p className="mt-3 text-4xl font-black leading-none text-orange md:text-5xl">
              +13%
            </p>
            <p className="mt-2 text-sm font-semibold text-black md:text-base">
              Relative premium conversion uplift
            </p>
          </div>
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white"
            aria-hidden
          >
            <TrendingUp className="h-5 w-5 text-orange" strokeWidth={1.75} />
          </div>
        </div>

        <div className="mt-8 space-y-5">
          <ComparisonBar label="3 free lessons" value={1.15} maxValue={1.5} />
          <ComparisonBar label="2 free lessons" value={1.3} maxValue={1.5} highlight />
        </div>

        <p className="mt-6 text-sm leading-relaxed text-grey">
          Tighter free access increased conversion from 1.15% to 1.3%.
        </p>
      </motion.article>

      <motion.article
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-30px" }}
        custom={0.06}
        variants={caseStudyFadeUp}
        className="relative overflow-hidden rounded-2xl border border-border bg-white p-6 md:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-orange">
              Most Popular label test
            </p>
            <p className="mt-3 text-4xl font-black leading-none text-orange md:text-5xl">
              +20%
            </p>
            <p className="mt-2 text-sm font-semibold text-black md:text-base">
              Six-month plan selection
            </p>
          </div>
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FFF0E8]"
            aria-hidden
          >
            <ArrowUpRight className="h-5 w-5 text-orange" strokeWidth={1.75} />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="rounded-xl bg-cream-muted p-4 text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-grey">
              Before
            </p>
            <p className="mt-2 text-2xl font-black text-black">3 mo</p>
            <p className="mt-1 text-xs text-grey">Most Popular</p>
          </div>
          <div className="rounded-xl border-2 border-orange bg-[#FFF0E8] p-4 text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-orange">
              After
            </p>
            <p className="mt-2 text-2xl font-black text-orange">6 mo</p>
            <p className="mt-1 text-xs font-semibold text-black">Most Popular</p>
          </div>
        </div>

        <p className="mt-6 text-sm leading-relaxed text-grey">
          Moving recommendation emphasis to the six-month plan increased
          selection by more than 20%.
        </p>
      </motion.article>
    </div>
  );
}
