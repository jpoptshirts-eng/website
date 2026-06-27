import CarouselProgress from "@/components/case-study/primarybid/onboarding/CarouselProgress";
import { cn } from "@/lib/utils";

interface CarouselControlsProps {
  currentIndex: number;
  total: number;
  stageTitles: string[];
  onPrevious: () => void;
  onNext: () => void;
  onSelectStage: (index: number) => void;
}

export default function CarouselControls({
  currentIndex,
  total,
  stageTitles,
  onPrevious,
  onNext,
  onSelectStage,
}: CarouselControlsProps) {
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === total - 1;

  return (
    <div className="mt-8 space-y-5">
      <p
        className="text-center text-sm font-semibold tracking-wide text-black"
        aria-live="polite"
        aria-atomic="true"
      >
        {currentIndex + 1} of {total}
      </p>

      <div className="flex flex-col items-stretch gap-4 min-[545px]:flex-row min-[545px]:items-center min-[545px]:gap-5">
        <button
          type="button"
          onClick={onPrevious}
          disabled={isFirst}
          className={cn(
            "inline-flex shrink-0 items-center justify-center rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange max-[544px]:w-full min-[545px]:min-w-[8.5rem]",
            isFirst
              ? "cursor-not-allowed border-border bg-cream-muted text-grey"
              : "border-border bg-white text-black hover:border-orange hover:text-orange",
          )}
        >
          ← Previous
        </button>

        <div className="flex flex-1 items-center justify-center px-1">
          <CarouselProgress
            total={total}
            currentIndex={currentIndex}
            stageTitles={stageTitles}
            onSelect={onSelectStage}
          />
        </div>

        <button
          type="button"
          onClick={onNext}
          disabled={isLast}
          aria-disabled={isLast}
          className={cn(
            "inline-flex shrink-0 items-center justify-center rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange max-[544px]:w-full min-[545px]:min-w-[8.5rem]",
            isLast
              ? "cursor-not-allowed border-border bg-cream-muted text-grey"
              : "border-border bg-white text-black hover:border-orange hover:text-orange",
          )}
        >
          {isLast ? "End of journey" : "Next →"}
        </button>
      </div>
    </div>
  );
}
