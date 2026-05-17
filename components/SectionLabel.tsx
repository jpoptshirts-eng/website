interface SectionLabelProps {
  children: React.ReactNode;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-pink">
      {children}
    </p>
  );
}
