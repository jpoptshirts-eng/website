import { ArrowRight } from "lucide-react";
import OnboardingScreenFrame from "@/components/case-study/primarybid/onboarding/OnboardingScreenFrame";
import type { OnboardingScreen } from "@/lib/primarybid-onboarding-carousel-data";

interface OnboardingScreenGroupProps {
  screens: OnboardingScreen[];
  priority?: boolean;
}

function ScreenImage({
  screen,
  priority,
  className,
}: {
  screen: OnboardingScreen;
  priority?: boolean;
  className?: string;
}) {
  return (
    <OnboardingScreenFrame
      screen={screen}
      priority={priority}
      className={className}
    />
  );
}

function ScreenConnector() {
  return (
    <div
      className="hidden shrink-0 items-center justify-center text-grey/70 md:flex"
      aria-hidden="true"
    >
      <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
    </div>
  );
}

export default function OnboardingScreenGroup({
  screens,
  priority = false,
}: OnboardingScreenGroupProps) {
  const screenCount = screens.length;

  if (screenCount === 1) {
    return (
      <div className="flex justify-center">
        <ScreenImage screen={screens[0]} priority={priority} />
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col items-center gap-8 md:hidden">
        {screens.map((screen, index) => (
          <div key={screen.src} className="flex w-full flex-col items-center gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-grey">
              Screen {index + 1} of {screenCount}
            </p>
            <ScreenImage
              screen={screen}
              priority={priority && index === 0}
              className="max-w-full"
            />
          </div>
        ))}
      </div>

      <div className="hidden flex-wrap items-center justify-center gap-x-5 gap-y-8 md:flex lg:gap-x-6">
        {screens.map((screen, index) => (
          <div key={screen.src} className="flex items-center gap-5 lg:gap-6">
            {index > 0 ? <ScreenConnector /> : null}
            <ScreenImage screen={screen} priority={priority && index === 0} />
          </div>
        ))}
      </div>
    </>
  );
}
