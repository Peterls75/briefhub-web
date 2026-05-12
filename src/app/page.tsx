import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Eyebrow } from "@/components/Eyebrow";
import { PracticeBand } from "@/components/PracticeBand";

const steps = [
  {
    step: "Step one",
    title: "You post a brief",
    body: "Fourteen plain English questions. Three steps. About five minutes.",
  },
  {
    step: "Step two",
    title: "We send it out",
    body: "The right lawyers on the network pitch with fixed or capped fees.",
  },
  {
    step: "Step three",
    title: "You choose",
    body: "Three comparable pitches. You pick. Engage direct. We step aside.",
  },
];

export default function HomePage() {
  return (
    <>
      <SiteNav />

      <main className="flex-1">
        <section className="px-6 md:px-10 pt-16 md:pt-24 pb-16 md:pb-20 text-center">
          <Eyebrow
            words={[
              "A curated network",
              "Senior commercial solicitors",
              "UK",
            ]}
          />

          <h1 className="mt-8 md:mt-10 font-display text-accent text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.25rem] leading-[1.02] tracking-tight">
            <span className="block font-medium">Post your brief.</span>
            <span className="block font-medium">Review pitches.</span>
            <span className="block italic font-normal">
              Choose your lawyer.
            </span>
          </h1>

          <p className="mt-8 md:mt-10 mx-auto max-w-xl text-base md:text-lg text-ink font-medium leading-snug">
            City-grade commercial solicitors pitching for your work. Three
            comparable quotes inside 48 hours. Free for clients.
          </p>

          <div className="mt-8 md:mt-10 flex items-center justify-center gap-6 md:gap-8 flex-wrap">
            <Link
              href="/start"
              className="rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-cream hover:bg-accent/90 transition-colors"
            >
              Start your brief
            </Link>
            <Link
              href="/how-it-works"
              className="text-sm font-medium text-accent underline underline-offset-4 hover:no-underline"
            >
              See how it works
            </Link>
          </div>
        </section>

        <PracticeBand />

        <section className="px-6 md:px-10 py-16 md:py-24">
          <div className="mx-auto max-w-6xl grid gap-10 md:gap-0 md:grid-cols-3">
            {steps.map((s, i) => (
              <div
                key={s.step}
                className={`px-2 md:px-8 ${
                  i > 0 ? "md:border-l border-rule/40" : ""
                }`}
              >
                <Eyebrow words={[s.step]} />
                <h2 className="mt-3 font-display text-2xl md:text-[1.65rem] text-ink leading-tight">
                  {s.title}
                </h2>
                <p className="mt-3 text-base text-ink leading-relaxed">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
