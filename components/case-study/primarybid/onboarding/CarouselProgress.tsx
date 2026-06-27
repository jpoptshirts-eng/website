import { cn } from "@/lib/utils";

interface CarouselProgressProps {
  total: number;
  currentIndex: number;
  stageTitles: string[];
  onSelect: (index: number) => void;
}

export default function CarouselProgress({
  total,
  currentIndex,
  stageTitles,
  onSelect,
}: CarouselProgressProps) {
  return (
    <div
      className="flex items-center justify-center gap-1.5 sm:gap-2"
      role="group"
      aria-label="Onboarding journey stages"
    >
      {Array.from({ length: total }, (_, index) => {
        const isActive = index === currentIndex;
        return (
          <button
            key={stageTitles[index]}
            type="button"
            onClick={() => onSelect(index)}
            aria-label={`Go to stage ${index + 1}: ${stageTitles[index]}`}
            aria-current={isActive ? "step" : undefined}
            className={cn(
              "h-2 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange",
              isActive
                ? "w-8 bg-orange"
                : "w-2 bg-border hover:bg-grey/40",
            )}
          />
        );
      })}
    </div>
  );
}
