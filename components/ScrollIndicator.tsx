"use client";

export default function ScrollIndicator() {
  return (
    <div className="mt-auto flex flex-col items-center gap-2 pt-16" aria-hidden>
      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-grey [writing-mode:vertical-rl] rotate-180">
        Scroll down
      </span>
      <div className="scroll-line h-16 w-px" />
    </div>
  );
}
