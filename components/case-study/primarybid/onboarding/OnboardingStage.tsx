import OnboardingScreenGroup from "@/components/case-study/primarybid/onboarding/OnboardingScreenGroup";
import type { OnboardingStageData } from "@/lib/primarybid-onboarding-carousel-data";

interface OnboardingStageProps {
  stage: OnboardingStageData;
  stageNumber: number;
  stageCount: number;
  priority?: boolean;
}

export default function OnboardingStage({
  stage,
  stageNumber,
  stageCount,
  priority = false,
}: OnboardingStageProps) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-grey">
        Stage {stageNumber} of {stageCount}
      </p>
      <h3 className="mt-3 text-xl font-bold text-black md:text-2xl">
        {stage.title}
      </h3>

      <div className="mt-8 flex min-h-[min(52vh,420px)] min-[545px]:min-h-[min(50vh,460px)] items-center justify-center lg:min-h-[min(48vh,480px)]">
        <OnboardingScreenGroup screens={stage.screens} priority={priority} />
      </div>

      <p className="mx-auto mt-8 max-w-[47rem] text-base leading-relaxed text-black md:text-lg">
        {stage.description}
      </p>
    </div>
  );
}
