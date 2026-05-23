interface CaseStudyLabelProps {
  children: React.ReactNode;
}

export default function CaseStudyLabel({ children }: CaseStudyLabelProps) {
  return (
    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-orange">
      {children}
    </p>
  );
}
