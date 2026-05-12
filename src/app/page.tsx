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
              "For procurement teams",
              "In-house lawyers",
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

          <p className="mt-8 md:mt-10 mx-auto max-w-2xl text-base md:text-lg text-ink leading-snug">
            The fastest, easiest and dare we say cheapest way to buy quality legal advice. A vetted network of senior commercial solicitors. A refined brief. Three comparable pitches at three fixed prices. Free for buyers.
          </p>

          <div className="mt-8 md:mt-10 flex items-center justify-center gap-6 md:gap-8 flex-wrap">
            <Link
              href="/start"
              className="rounded-full bg-accent px-7 py-3.5 text-sm text-cream hover:bg-accent/90 transition-colors"
            >
              Start your brief
            </Link>
            <Link
              href="/how-it-works"
              className="text-sm text-accent underline underline-offset-4 hover:no-underline"
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

        <section className="px-6 md:px-10 py-16 md:py-24 bg-surface-raised border-y border-rule/30">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow words={["How to use us"]} />
            <h2 className="mt-6 font-display text-3xl md:text-4xl lg:text-5xl text-accent leading-tight tracking-tight">
              A good panel takes years to build.
              <br />
              <span className="italic font-normal">
                Borrow ours for the matter on the desk.
              </span>
            </h2>
            <p className="mt-8 mx-auto max-w-2xl text-base md:text-lg text-ink leading-relaxed">
              Plug BriefHub in for the matter that is outside your existing panel. Or alongside the panel, for the pricing pressure that comes from three quotes instead of one. Or as an overflow lane when capacity is short and the deadline is not.
            </p>
            <div className="mt-10">
              <Link
                href="/start"
                className="rounded-full bg-accent px-7 py-3.5 text-sm text-cream hover:bg-accent/90 transition-colors"
              >
                Start your brief
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
