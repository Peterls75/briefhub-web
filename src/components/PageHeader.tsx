import { Eyebrow } from "./Eyebrow";

export function PageHeader({
  eyebrowWords,
  title,
  lede,
}: {
  eyebrowWords: string[];
  title: React.ReactNode;
  lede?: React.ReactNode;
}) {
  return (
    <section className="px-6 md:px-10 pt-16 md:pt-24 pb-12 md:pb-16 text-center">
      <Eyebrow words={eyebrowWords} />
      <h1 className="mt-8 md:mt-10 font-display text-accent text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
        {title}
      </h1>
      {lede && (
        <p className="mt-8 mx-auto max-w-2xl text-base md:text-lg text-ink font-medium leading-snug">
          {lede}
        </p>
      )}
    </section>
  );
}
