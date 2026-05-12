import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHeader } from "@/components/PageHeader";
import { Eyebrow } from "@/components/Eyebrow";

export default function ForLawyersPage() {
  return (
    <>
      <SiteNav />

      <main className="flex-1">
        <PageHeader
          eyebrowWords={["Panel", "Commercial", "UK"]}
          title={
            <>
              <span className="block font-medium">Pitch for the work.</span>
              <span className="block font-medium">Win the work.</span>
              <span className="block italic font-normal">
                Take it from there.
              </span>
            </>
          }
          lede="BriefHub is a curated panel of senior commercial solicitors in the UK. We refine real client briefs into proper scopes, then invite three to five panel lawyers per matter to bid. You quote with a fixed or capped fee. We charge a flat introduction fee only when you win the work."
        />

        <section className="px-6 md:px-10 pb-12 md:pb-16">
          <div className="mx-auto max-w-3xl space-y-12 md:space-y-16">
            <div>
              <Eyebrow words={["Why this is different"]} />
              <h2 className="mt-3 font-display text-2xl md:text-3xl text-ink leading-tight">
                Three things separate this from the marketplaces you have already ignored
              </h2>
              <ul className="mt-5 space-y-4 text-base md:text-lg text-ink leading-relaxed max-w-2xl">
                <li>
                  <span className="font-semibold text-accent">Refined briefs.</span>{" "}
                  Every brief you receive has been through scope refinement and signed off by the client. You are not pricing a question. You are pricing a defined piece of work.
                </li>
                <li>
                  <span className="font-semibold text-accent">Comparable pricing.</span>{" "}
                  We ask for the same fee structure from each bidder. You compete on judgement and fit, not on shaving margins against an inscrutable competitor.
                </li>
                <li>
                  <span className="font-semibold text-accent">No platform tax on the matter.</span>{" "}
                  A flat introduction fee on award. No percentage of your engagement, no monthly platform charge, no marketing rake on the lawyer-client relationship. The engagement is yours.
                </li>
              </ul>
            </div>

            <div>
              <Eyebrow words={["What we look for"]} />
              <h2 className="mt-3 font-display text-2xl md:text-3xl text-ink leading-tight">
                Senior commercial solicitors in defined specialisms
              </h2>
              <p className="mt-5 text-base md:text-lg text-ink leading-relaxed max-w-2xl">
                Contracts, litigation, regulatory, employment, corporate transactions, IP and technology. Solo practitioners and partners at boutiques tend to be the strongest fit, but we do not exclude lawyers at full-service firms. We are explicit with the client when a matter would be better served by a wider team than a single specialist.
              </p>
            </div>

            <div>
              <Eyebrow words={["How the work moves"]} />
              <h2 className="mt-3 font-display text-2xl md:text-3xl text-ink leading-tight">
                From listing to award in under a week
              </h2>
              <ul className="mt-5 space-y-4 text-base md:text-lg text-ink leading-relaxed max-w-2xl">
                <li>
                  Briefs in your specialism appear in your panel portal. You see the refined scope, the deadline, the client's commercial context, the fee window if there is one and our short read-out.
                </li>
                <li>
                  You decide whether to bid. If you bid, you submit a fee structure, a short pitch of 500 to 800 words and your expected timeline.
                </li>
                <li>
                  Clarifying questions during the bid window come through us, never direct to the client. The client sees the cleaned-up bids only.
                </li>
                <li>
                  Three quotes go to the client. The client picks. You get a clear yes or no within the stated window. Nothing drags.
                </li>
              </ul>
            </div>

            <div>
              <Eyebrow words={["Fees"]} />
              <h2 className="mt-3 font-display text-2xl md:text-3xl text-ink leading-tight">
                A flat introduction fee, payable on award
              </h2>
              <p className="mt-5 text-base md:text-lg text-ink leading-relaxed max-w-2xl">
                The fee is the same whether the matter is two thousand pounds or two hundred thousand. We do not take a percentage of your engagement. We do not bill you anything if you do not win. There is no monthly platform charge and no listing fee.
              </p>
            </div>

            <div>
              <Eyebrow words={["Join the panel"]} />
              <h2 className="mt-3 font-display text-2xl md:text-3xl text-ink leading-tight">
                Membership is by application
              </h2>
              <p className="mt-5 text-base md:text-lg text-ink leading-relaxed max-w-2xl">
                We look at your specialism, your post-qualification experience and the kind of matters you typically handle. Tell us about yourself and we will come back to you within a few working days.
              </p>
              <div className="mt-8 flex items-center gap-8 flex-wrap">
                <Link
                  href="/apply"
                  className="rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-cream hover:bg-accent/90 transition-colors"
                >
                  Apply to the panel
                </Link>
                <Link
                  href="/how-it-works"
                  className="text-sm font-medium text-accent underline underline-offset-4 hover:no-underline"
                >
                  See how a matter moves
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
