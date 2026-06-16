"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import CaseStudyLabel from "@/components/case-study/CaseStudyLabel";
import { caseStudyFadeUp } from "@/components/case-study/case-study-motion";
import { caseStudyContainer, caseStudySection } from "@/lib/case-study-layout";
import { kaizenConversion } from "@/lib/kaizen-languages-data";
import { cn } from "@/lib/utils";
import KaizenFeatureShell from "../KaizenFeatureShell";
import {
  KaizenBusinessDashboardInfographic,
  KaizenConversionResultsVisual,
} from "../KaizenSubscriptionVisuals";
import { FigureCaption, KpiCallout, MockupImage } from "../kaizen-shared";

const subnav = [
  { id: "commercial-challenge", label: "Commercial challenge" },
  { id: "free-access", label: "Free access" },
  { id: "paywall", label: "Paywall" },
  { id: "analytics", label: "Analytics" },
  { id: "results", label: "Results" },
  { id: "learning", label: "Learning" },
] as const;

export default function KaizenSubscriptionFeature() {
  return (
    <KaizenFeatureShell
      slug="subscription"
      subnav={subnav}
      summary="I tested free-access limits, subscription hierarchy and pricing emphasis to balance customer value with business sustainability."
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
            <CaseStudyLabel>Commercial challenge</CaseStudyLabel>
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
              Kaizen needed to provide enough free value for learners to experience
              progress while creating a sustainable reason to subscribe. Design
              decisions were connected to acquisition, subscriptions and churn
              through product and business dashboards.
            </p>
          </motion.div>
        </div>
      </section>

      <section
        id="free-access"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="sub-free-heading"
      >
        <div className={caseStudyContainer}>
          <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start lg:gap-12 xl:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
            >
              <CaseStudyLabel>Free lesson experiment</CaseStudyLabel>
              <h2
                id="sub-free-heading"
                className="text-balance font-black tracking-tight text-black text-2xl leading-[1.1] sm:text-3xl md:text-4xl"
              >
                {kaizenConversion.freeLessons.headline}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
                {kaizenConversion.freeLessons.body}
              </p>
              <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
                The two-versus-three test showed three free lessons at 1.15%
                conversion and two free lessons at 1.3% conversion — approximately
                13% relative uplift. More free access created more immediate
                customer value, while a tighter limit created stronger premium
                conversion.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-grey md:text-base">
                {kaizenConversion.freeLessons.point}
              </p>
              <KpiCallout icon="trending" className="mt-8">
                {kaizenConversion.freeLessons.result}
              </KpiCallout>
            </motion.div>
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
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="sub-paywall-heading"
      >
        <div className={caseStudyContainer}>
          <div className="lg:grid lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:items-center lg:gap-10 xl:gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
              className="min-w-0"
            >
              <CaseStudyLabel>Subscription hierarchy</CaseStudyLabel>
              <h2
                id="sub-paywall-heading"
                className="text-balance font-black tracking-tight text-black text-2xl leading-[1.1] sm:text-3xl md:text-4xl"
              >
                {kaizenConversion.paywall.headline}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
                {kaizenConversion.paywall.body}
              </p>
              <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
                The paywall presented one, three, six and twelve-month plans with
                price-per-month information, saving labels and a Most Popular
                recommendation. The experiment isolated which plan received
                emphasis rather than redesigning the entire paywall.
              </p>
              <KpiCallout icon="trending" className="mt-8">
                {kaizenConversion.paywall.result}
              </KpiCallout>
            </motion.div>
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
        id="analytics"
        className={cn(caseStudySection, "bg-cream-muted")}
        aria-labelledby="sub-analytics-heading"
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
              <CaseStudyLabel>Business dashboard</CaseStudyLabel>
              <h2
                id="sub-analytics-heading"
                className="text-balance font-black tracking-tight text-black text-2xl leading-[1.1] sm:text-3xl md:text-4xl"
              >
                Connecting experiments to commercial performance
              </h2>
              <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
                The business dashboard tracked new subscriptions, plan length,
                churn, acquisition spend and campaign performance so product
                experiments could be assessed against commercial outcomes.
              </p>
              <p className="mt-8 text-sm leading-relaxed text-grey md:text-base">
                <Link
                  href="/work/kaizen-languages/retention"
                  className="font-semibold text-orange hover:underline"
                >
                  See how the same analytics infrastructure supported retention decisions
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
        id="results"
        className={cn(caseStudySection, "bg-white")}
        aria-labelledby="sub-results-heading"
      >
        <div className={caseStudyContainer}>
          <CaseStudyLabel>Results</CaseStudyLabel>
          <h2
            id="sub-results-heading"
            className="text-balance font-black tracking-tight text-black text-2xl leading-[1.1] sm:text-3xl md:text-4xl"
          >
            Verified commercial outcomes
          </h2>
          <KaizenConversionResultsVisual className="mt-10" />
        </div>
      </section>

      <section
        id="learning"
        className={cn(caseStudySection, "bg-cream !pb-0")}
        aria-labelledby="sub-learning-heading"
      >
        <div className={caseStudyContainer}>
          <div className="lg:grid lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:items-stretch lg:gap-10 xl:gap-14">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={caseStudyFadeUp}
              className="min-w-0 pb-5"
            >
              <CaseStudyLabel>Learning</CaseStudyLabel>
              <h2
                id="sub-learning-heading"
                className="text-balance font-black tracking-tight text-black text-2xl leading-[1.1] sm:text-3xl md:text-4xl"
              >
                Commercial optimisation without damaging value
              </h2>
              <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
                Subscription experiments were designed to find the right balance
                between product value and conversion, rather than simply locking
                content away. Not every gain required a major redesign — clearer
                framing sometimes changed decision-making.
              </p>

              <h3 className="mt-10 font-bold text-black">Social login trade-off</h3>
              <p className="mt-4 text-base leading-relaxed text-grey md:text-lg">
                I recommended social login to reduce sign-up friction. Stakeholders
                had concerns about third-party data access, and external evidence
                was used to support the recommendation. Those figures were
                external benchmarks rather than verified Kaizen outcomes, so they
                are not presented as product impact here.
              </p>
              <FigureCaption>
                Lower-friction sign-up patterns explored to reduce onboarding
                friction.
              </FigureCaption>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.06}
              variants={caseStudyFadeUp}
              className="mt-10 flex min-w-0 items-end lg:mt-0"
            >
              <div className="-mx-6 w-full overflow-x-auto px-6 leading-none scrollbar-none lg:mx-0 lg:overflow-visible lg:px-0">
                <MockupImage
                  src="/images/work/kaizen-languages/mockup-social-login.png"
                  alt="Kaizen Languages sign-up screen showing social login options"
                  className="block w-full min-w-[28rem] sm:min-w-[32rem] lg:min-w-0"
                  width={1092}
                  height={1000}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </KaizenFeatureShell>
  );
}
