"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import CaseStudyLabel from "@/components/case-study/CaseStudyLabel";
import { caseStudyFadeUp } from "@/components/case-study/case-study-motion";
import { caseStudyContainer, caseStudySection } from "@/lib/case-study-layout";
import { kaizenConversion } from "@/lib/kaizen-languages-data";
import { kaizenStoryResultsLearning } from "@/lib/kaizen-story-data";
import { cn } from "@/lib/utils";
import KaizenFeatureShell from "../KaizenFeatureShell";
import {
  KaizenBusinessDashboardInfographic,
  KaizenConversionResultsVisual,
} from "../KaizenSubscriptionVisuals";
import {
  KaizenFeatureStatus,
  KaizenResultsLearningSection,
} from "../kaizen-story-components";
import { MockupImage } from "../kaizen-shared";

const subnav = [
  { id: "commercial-challenge", label: "Commercial tension" },
  { id: "monitoring", label: "Monitoring" },
  { id: "free-access", label: "Free lessons" },
  { id: "paywall", label: "Paywall" },
  { id: "exploration", label: "Exploration" },
  { id: "results-learning", label: "Results" },
] as const;

function ExperimentBlock({
  title,
  hypothesis,
  variants,
  result,
  implication,
}: {
  title: string;
  hypothesis: string;
  variants: string;
  result: string;
  implication: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-white p-6 md:p-8">
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-orange">
        {title}
      </p>
      <dl className="mt-6 space-y-5 text-sm md:text-base">
        <div>
          <dt className="font-bold text-black">Hypothesis</dt>
          <dd className="mt-2 leading-relaxed text-grey">{hypothesis}</dd>
        </div>
        <div>
          <dt className="font-bold text-black">Variants</dt>
          <dd className="mt-2 leading-relaxed text-grey">{variants}</dd>
        </div>
        <div>
          <dt className="font-bold text-black">Result</dt>
          <dd className="mt-2 leading-relaxed text-black">{result}</dd>
        </div>
        <div>
          <dt className="font-bold text-black">Implication</dt>
          <dd className="mt-2 leading-relaxed text-grey">{implication}</dd>
        </div>
      </dl>
    </div>
  );
}

export default function KaizenSubscriptionFeature() {
  return (
    <KaizenFeatureShell
      slug="subscription"
      subnav={subnav}
      summary="I tested free-access limits and paywall hierarchy as focused experiments to balance customer value with sustainable subscription growth."
      heroImage={kaizenConversion.paywall.image}
      heroImageAlt={kaizenConversion.paywall.imageAlt}
    >
      <section
        id="commercial-challenge"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="sub-challenge-heading"
      >
        <div className={caseStudyContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="max-w-3xl"
          >
            <CaseStudyLabel>Commercial tension</CaseStudyLabel>
            <h2
              id="sub-challenge-heading"
              className="text-balance font-black tracking-tight text-black text-3xl leading-[1.05] sm:text-4xl md:text-5xl"
            >
              <span className="block">{kaizenConversion.sectionHeadline.line1}</span>
              <span className="block">
                {kaizenConversion.sectionHeadline.line2}
                <span className="text-orange">.</span>
              </span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
              Kaizen needed to let new learners experience enough value to
              understand the product while maintaining a clear reason to
              subscribe. I tested lesson limits and paywall hierarchy as focused
              experiments rather than redesigning the entire journey.
            </p>
          </motion.div>
        </div>
      </section>

      <section
        id="monitoring"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="sub-monitoring-heading"
      >
        <div className={caseStudyContainer}>
          <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-10 xl:gap-14">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
              className="min-w-0"
            >
              <CaseStudyLabel>Commercial monitoring</CaseStudyLabel>
              <h2
                id="sub-monitoring-heading"
                className="text-balance font-black tracking-tight text-black text-2xl leading-[1.1] sm:text-3xl md:text-4xl"
              >
                Connecting experiments to performance
              </h2>
              <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
                I monitored subscription volume, churn, plan length, acquisition
                and net customer growth so product changes could be assessed
                against commercial outcomes.
              </p>
              <p className="mt-8 text-sm leading-relaxed text-grey md:text-base">
                <Link
                  href="/work/kaizen-languages/retention"
                  className="font-semibold text-orange hover:underline"
                >
                  See how the same analytics infrastructure supported retention
                </Link>
                .
              </p>
            </motion.div>

            <div className="mt-10 flex justify-center lg:mt-0">
              <KaizenBusinessDashboardInfographic className="w-full max-w-xl" />
            </div>
          </div>
        </div>
      </section>

      <section
        id="free-access"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="sub-free-heading"
      >
        <div className={caseStudyContainer}>
          <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start lg:gap-12 xl:gap-16">
            <ExperimentBlock
              title="Free lesson experiment"
              hypothesis="A tighter daily free-lesson limit would create a clearer reason to subscribe without withholding all value."
              variants="Variant A: three free lessons per day. Variant B: two free lessons per day."
              result="Conversion changed from 1.15% to 1.3% — approximately a 13% relative premium-conversion uplift."
              implication={kaizenConversion.freeLessons.point}
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.06}
              variants={caseStudyFadeUp}
              className="mt-10 flex justify-center lg:mt-0 lg:justify-end"
            >
              <MockupImage
                src={kaizenConversion.freeLessons.image}
                alt={kaizenConversion.freeLessons.imageAlt}
                className="w-full max-w-[calc(100%-100px)] lg:max-w-[22rem]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="paywall"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="sub-paywall-heading"
      >
        <div className={caseStudyContainer}>
          <div className="lg:grid lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)] lg:items-start lg:gap-10 xl:gap-12">
            <ExperimentBlock
              title="Paywall hierarchy experiment"
              hypothesis="Clearer framing of the recommended plan would change plan selection without a full paywall redesign."
              variants="Most Popular label on three-month plan versus six-month plan, with one, three, six and twelve-month options."
              result="Six-month subscriptions increased by more than 20% when the recommended label moved to the six-month plan."
              implication="Choice architecture mattered as much as price — clearer framing changed decision-making."
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.06}
              variants={caseStudyFadeUp}
              className="mt-10 min-w-0 lg:mt-0"
            >
              <div className="-mx-6 overflow-x-auto px-6 scrollbar-none lg:mx-0 lg:overflow-visible lg:px-0">
                <MockupImage
                  src={kaizenConversion.paywall.image}
                  alt={kaizenConversion.paywall.imageAlt}
                  className="w-full min-w-[36rem] sm:min-w-[42rem] lg:min-w-0"
                  width={1554}
                  height={1048}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="exploration"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="sub-exploration-heading"
      >
        <div className={caseStudyContainer}>
          <div className="lg:grid lg:grid-cols-[minmax(0,0.5fr)_minmax(0,0.5fr)] lg:items-start lg:gap-10 xl:gap-14">
            <div className="pb-16 md:pb-20 lg:pb-0">
              <KaizenFeatureStatus status="explored" />
              <CaseStudyLabel className="mt-6 block">Additional exploration</CaseStudyLabel>
              <h2
                id="sub-exploration-heading"
                className="text-balance font-black tracking-tight text-black text-2xl leading-[1.1] sm:text-3xl md:text-4xl"
              >
                Reducing sign-up friction with social sign-in
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-black md:text-lg">
                <p>
                  External research indicated that offering familiar sign-in options
                  such as Apple, Google and Facebook could improve conversion by
                  around 20%, with some implementations reporting uplifts as high as
                  40%. Based on that evidence, I recommended adding social sign-in to
                  Kaizen rather than relying only on the existing registration route.
                </p>
                <p>
                  The founders were concerned that third-party authentication could
                  expose customer information to providers such as Google and
                  Facebook. I argued that excluding these familiar options risked
                  reducing sign-up and sign-in completion, while a data-minimised
                  implementation could request only the information required to
                  authenticate an account and retain email registration as an
                  alternative.
                </p>
                <p>
                  The recommendation was not implemented during this phase, so the
                  external figures are presented as evidence supporting the
                  decision—not as measured Kaizen impact.
                </p>
              </div>

              <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-cream-muted p-5">
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-orange">
                    Opportunity
                  </dt>
                  <dd className="mt-3 text-sm leading-relaxed text-black md:text-[0.9375rem]">
                    Potentially improve sign-up and sign-in completion through familiar
                    authentication options.
                  </dd>
                </div>
                <div className="rounded-2xl border border-border bg-cream-muted p-5">
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-orange">
                    Trade-off
                  </dt>
                  <dd className="mt-3 text-sm leading-relaxed text-black md:text-[0.9375rem]">
                    Balance conversion opportunity with privacy, permissions and
                    third-party data concerns.
                  </dd>
                </div>
              </dl>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={caseStudyFadeUp}
              className="mt-10 flex justify-center pb-16 md:pb-20 lg:mt-0"
            >
              <MockupImage
                src="/images/work/kaizen-languages/kaizen-social-sign-in-mockup.png"
                alt="Kaizen Languages welcome screen showing sign-up and Apple, Google and Facebook sign-in options"
                className="h-auto w-full max-w-[258px] sm:max-w-[274px] lg:max-w-[290px]"
                width={1151}
                height={2191}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="results-learning"
        className={cn(caseStudySection, "bg-cream")}
      >
        <div className={caseStudyContainer}>
          <CaseStudyLabel>Verified outcomes</CaseStudyLabel>
          <KaizenConversionResultsVisual className="mt-8" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={caseStudyFadeUp}
            className="mt-12 max-w-3xl"
          >
            <KaizenResultsLearningSection
              data={kaizenStoryResultsLearning.subscription}
            />
          </motion.div>
        </div>
      </section>
    </KaizenFeatureShell>
  );
}
