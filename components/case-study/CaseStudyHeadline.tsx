import { cn } from "@/lib/utils";

interface CaseStudyHeadlineProps {
  children: string;
  as?: "h1" | "h2";
  className?: string;
  id?: string;
}

export default function CaseStudyHeadline({
  children,
  as: Tag = "h2",
  className,
  id,
}: CaseStudyHeadlineProps) {
  const text = children.replace(/\.\s*$/, "");

  return (
    <Tag
      id={id}
      className={cn(
        "text-balance font-black tracking-tight text-black",
        Tag === "h1"
          ? "text-[2.75rem] leading-[0.92] sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.75rem]"
          : "text-3xl leading-[1.05] sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.5rem]",
        className,
      )}
    >
      {text}
      <span className="text-orange">.</span>
    </Tag>
  );
}
