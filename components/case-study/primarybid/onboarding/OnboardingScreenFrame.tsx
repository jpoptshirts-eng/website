import CaseStudyMockupImage from "@/components/case-study/CaseStudyMockupImage";
import type { OnboardingScreen } from "@/lib/primarybid-onboarding-carousel-data";
import { cn } from "@/lib/utils";

export const SCREEN_HEIGHT_CLASS =
  "h-[min(52vh,420px)] min-[545px]:h-[min(50vh,460px)] lg:h-[min(48vh,480px)]";

interface OnboardingScreenFrameProps {
  screen: OnboardingScreen;
  priority?: boolean;
  className?: string;
}

export default function OnboardingScreenFrame({
  screen,
  priority = false,
  className,
}: OnboardingScreenFrameProps) {
  return (
    <div
      className={cn(
        "relative box-border inline-block max-w-full overflow-hidden border border-solid border-border bg-white",
        SCREEN_HEIGHT_CLASS,
        className,
      )}
      style={{ aspectRatio: `${screen.width} / ${screen.height}` }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <CaseStudyMockupImage
          src={screen.src}
          alt={screen.alt}
          width={screen.width}
          height={screen.height}
          priority={priority}
          className={cn(
            "!absolute !-left-[2px] !-top-[2px] !block",
            "!h-[calc(100%+4px)] !w-[calc(100%+4px)]",
            "!max-w-none !border-0 !outline-none !shadow-none",
            "!object-cover !object-center",
          )}
        />
      </div>
    </div>
  );
}
