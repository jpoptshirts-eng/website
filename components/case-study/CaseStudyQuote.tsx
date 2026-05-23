interface CaseStudyQuoteProps {
  text: string;
}

export default function CaseStudyQuote({ text }: CaseStudyQuoteProps) {
  return (
    <section
      className="bg-orange py-16 md:py-24 lg:py-28"
      aria-label="Quote"
    >
      <div className="mx-auto max-w-page px-6 text-center lg:px-8">
        <p
          className="mx-auto max-w-3xl text-5xl font-black leading-none text-black md:text-7xl lg:text-8xl"
          aria-hidden
        >
          &ldquo;
        </p>
        <blockquote className="mx-auto mt-2 max-w-4xl text-2xl font-black leading-snug tracking-tight text-black md:text-3xl lg:text-4xl xl:text-[2.75rem] xl:leading-[1.15]">
          {text}
        </blockquote>
      </div>
    </section>
  );
}
