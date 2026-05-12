import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHeader } from "@/components/PageHeader";
import { Eyebrow } from "@/components/Eyebrow";

type Stage = {
  number: string;
  title: string;
  body: string;
  gate?: "Quality gate one" | "Quality gate two";
};

const stages: Stage[] = [
  {
    number: "Stage one",
    title: "You post a brief",
    body: "Fourteen questions, three steps, around five minutes. You can save the form and come back to it, paragraphs are welcome, and you can attach the documents the lawyers will need to quote properly.",
  },
  {
    number: "Stage two",
    title: "We refine the scope",
    body: "Within minutes our refinement step proposes a clean version of your brief, written to the standard a panel lawyer would expect to receive. It flags ambiguities, makes its assumptions explicit and asks the questions you would have been asked if you had picked up the phone to a senior solicitor.",
  },
  {
    number: "Stage three",
    title: "You sign it off",
    body: "You review the refined scope, edit anything that needs editing and answer the clarifications. Nothing reaches a lawyer until you approve. This is the first of two quality gates that make the comparison real at the other end.",
    gate: "Quality gate one",
  },
  {
    number: "Stage four",
    title: "Out to the panel",
    body: "Your signed-off scope goes to three to five panel lawyers in the matching specialism. They are senior commercial solicitors with real practice records, not generalists, not juniors. They have between 24 and 72 hours to respond depending on the shape of the matter.",
  },
  {
    number: "Stage five",
    title: "Quotes come in",
    body: "Lawyers submit fixed, capped or staged-payment quotes with a short pitch. Clarifying questions during the bid window come to us, never direct to you, and competing lawyers cannot see each other's bids.",
  },
  {
    number: "Stage six",
    title: "We review the quotes",
    body: "Before any quote reaches you we read it. We check clarity, comparability and gaps. If a quote needs a number it does not have, or has a number it should not, the lawyer is asked to revise. You see only the cleaned-up versions.",
    gate: "Quality gate two",
  },
  {
    number: "Stage seven",
    title: "Three quotes to you",
    body: "You receive three clean comparable pitches with a short read-out from us. The pitches are not anonymised: you see the lawyer, the firm and the fee, and you can ask any of them a question before deciding.",
  },
  {
    number: "Stage eight",
    title: "You award",
    body: "You pick. The winning lawyer takes the matter, the others get polite declines. BriefHub invoices the winning lawyer for the introduction fee. From that moment on you are engaging the lawyer directly. We step aside.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <SiteNav />

      <main className="flex-1">
        <PageHeader
          eyebrowWords={[
            "Eight stages",
            "Two gates",
            "One signed-off scope",
          ]}
          title={
            <>
              <span className="block font-medium">Brief in.</span>
              <span className="block font-medium">Scope out.</span>
              <span className="block italic font-normal">Quotes back.</span>
            </>
          }
          lede="Legal procurement is usually a phone call, two or three introductions and a fee structure you cannot read across firms. BriefHub runs the same matter through a defined process so what you get back is three quotes you can read side by side, from lawyers who actually do the work."
        />

        <section className="px-6 md:px-10 pb-20 md:pb-28">
          <ol className="mx-auto max-w-3xl space-y-12 md:space-y-16">
            {stages.map((s) => (
              <li
                key={s.number}
                className={`relative ${
                  s.gate
                    ? "pl-6 border-l-2 border-accent"
                    : "pl-6 border-l border-rule/40"
                }`}
              >
                {s.gate && (
                  <Eyebrow
                    words={[s.gate]}
                    tone="accent"
                    className="mb-2"
                  />
                )}
                <Eyebrow words={[s.number]} />
                <h2 className="mt-2 font-display text-2xl md:text-3xl text-ink leading-tight">
                  {s.title}
                </h2>
                <p className="mt-3 text-base md:text-lg text-ink leading-relaxed max-w-2xl">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>

          <div className="mx-auto max-w-3xl mt-16 md:mt-24 pl-6">
            <p className="text-base md:text-lg text-ink leading-relaxed max-w-2xl">
              That is the whole product. No subscription, no scope creep on the engagement, no marketplace tax on the lawyer's fee. Free for clients, always.
            </p>
            <div className="mt-8 flex items-center gap-8 flex-wrap">
              <Link
                href="/start"
                className="rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-cream hover:bg-accent/90 transition-colors"
              >
                Start your brief
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-accent underline underline-offset-4 hover:no-underline"
              >
                About BriefHub
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
