"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import CaseStudyHeadline from "@/components/case-study/CaseStudyHeadline";
import CaseStudyLabel from "@/components/case-study/CaseStudyLabel";
import CarouselControls from "@/components/case-study/primarybid/onboarding/CarouselControls";
import OnboardingStage from "@/components/case-study/primarybid/onboarding/OnboardingStage";
import { caseStudyFadeUp } from "@/components/case-study/case-study-motion";
import {
  primaryBidOnboardingCarousel,
  PRIMARY_BID_ONBOARDING_STAGE_COUNT,
} from "@/lib/primarybid-onboarding-carousel-data";

const SWIPE_THRESHOLD_PX = 48;

export default function PrimaryBidOnboardingCarousel() {
  const stages = primaryBidOnboardingCarousel.stages;
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const carouselRef = useRef<HTMLDivElement>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const touchLocked = useRef<"horizontal" | "vertical" | null>(null);
  const liveRegionRef = useRef<HTMLParagraphElement>(null);

  const activeStage = stages[activeIndex];

  const goToStage = useCallback((index: number) => {
    setActiveIndex((current) => {
      if (index === current || index < 0 || index >= stages.length) {
        return current;
      }
      setDirection(index > current ? 1 : -1);
      return index;
    });
  }, [stages.length]);

  const goPrevious = useCallback(() => {
    goToStage(activeIndex - 1);
  }, [activeIndex, goToStage]);

  const goNext = useCallback(() => {
    goToStage(activeIndex + 1);
  }, [activeIndex, goToStage]);

  useEffect(() => {
    const preloadIndexes = [activeIndex - 1, activeIndex + 1];
    preloadIndexes.forEach((index) => {
      const stage = stages[index];
      if (!stage) return;
      stage.screens.forEach((screen) => {
        const image = new window.Image();
        image.src = screen.src;
      });
    });
  }, [activeIndex, stages]);

  useEffect(() => {
    if (!liveRegionRef.current) return;
    liveRegionRef.current.textContent = `Stage ${activeIndex + 1} of ${PRIMARY_BID_ONBOARDING_STAGE_COUNT}: ${activeStage.title}`;
  }, [activeIndex, activeStage.title]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goPrevious();
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goNext();
    }
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
    touchLocked.current = null;
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!touchStart.current) return;
    const touch = event.touches[0];
    const deltaX = touch.clientX - touchStart.current.x;
    const deltaY = touch.clientY - touchStart.current.y;

    if (!touchLocked.current) {
      if (Math.abs(deltaX) < 8 && Math.abs(deltaY) < 8) return;
      touchLocked.current =
        Math.abs(deltaX) > Math.abs(deltaY) ? "horizontal" : "vertical";
    }

    if (touchLocked.current === "horizontal") {
      event.preventDefault();
    }
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!touchStart.current || touchLocked.current !== "horizontal") {
      touchStart.current = null;
      touchLocked.current = null;
      return;
    }

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStart.current.x;

    if (deltaX > SWIPE_THRESHOLD_PX) {
      goPrevious();
    } else if (deltaX < -SWIPE_THRESHOLD_PX) {
      goNext();
    }

    touchStart.current = null;
    touchLocked.current = null;
  };

  const stageVariants = {
    enter: (travelDirection: number) => ({
      opacity: 0,
      x: prefersReducedMotion ? 0 : travelDirection > 0 ? 40 : -40,
    }),
    center: {
      opacity: 1,
      x: 0,
    },
    exit: (travelDirection: number) => ({
      opacity: 0,
      x: prefersReducedMotion ? 0 : travelDirection > 0 ? -40 : 40,
    }),
  };

  return (
    <section aria-label="PrimaryBid onboarding journey">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={caseStudyFadeUp}
      >
        <CaseStudyLabel>{primaryBidOnboardingCarousel.label}</CaseStudyLabel>
        <CaseStudyHeadline id="pb-onboarding-heading">
          {primaryBidOnboardingCarousel.headline}
        </CaseStudyHeadline>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-black md:text-lg">
          {primaryBidOnboardingCarousel.intro}
        </p>
      </motion.div>

      <div
        ref={carouselRef}
        className="mt-12 outline-none"
        role="region"
        aria-roledescription="carousel"
        aria-label="Onboarding journey stages"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <p ref={liveRegionRef} className="sr-only" aria-live="polite" />

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeStage.id}
              custom={direction}
              variants={stageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: prefersReducedMotion ? 0 : 0.42,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <OnboardingStage
                stage={activeStage}
                stageNumber={activeIndex + 1}
                stageCount={PRIMARY_BID_ONBOARDING_STAGE_COUNT}
                priority={activeIndex === 0}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <CarouselControls
          currentIndex={activeIndex}
          total={PRIMARY_BID_ONBOARDING_STAGE_COUNT}
          stageTitles={stages.map((stage) => stage.title)}
          onPrevious={goPrevious}
          onNext={goNext}
          onSelectStage={goToStage}
        />
      </div>
    </section>
  );
}
