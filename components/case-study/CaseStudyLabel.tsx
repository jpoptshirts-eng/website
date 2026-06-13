import { cn } from "@/lib/utils";

interface CaseStudyLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function CaseStudyLabel({ children, className }: CaseStudyLabelProps) {
  return (
    <p
      className={cn(
        "mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-orange",
        className,
      )}
    >
      {children}
    </p>
  );
}
