import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHeader } from "@/components/PageHeader";
import { Eyebrow } from "@/components/Eyebrow";

export default function AboutPage() {
  return (
    <>
      <SiteNav />

      <main className="flex-1">
        <PageHeader
          eyebrowWords={["About BriefHub"]}
          title={
            <>
              <span className="block font-medium">A curated panel.</span>
              <span className="block font-medium">Defined scope.</span>
              <span className="block italic font-normal">
                Comparable quotes.
              </span>
            </>
          }
          lede="BriefHub exists because legal procurement, for the matters where it should be a competitive process, almost never is. Either you call the firm you already know, or you spend a week chasing introductions and end up with quotes you cannot read against each other."
        />

        <section className="px-6 md:px-10 pb-20 md:pb-28">
          <div className="mx-auto max-w-3xl space-y-12 md:space-y-16">
            <div>
              <Eyebrow words={["What we believe"]} />
              <h2 className="mt-3 font-display text-2xl md:text-3xl text-ink leading-tight">
                Three opinions that explain the rest
              </h2>
              <ul className="mt-5 space-y-4 text-base md:text-lg text-ink leading-relaxed max-w-2xl">
                <li>
                  Most commercial work is, or can be, scoped to a fixed or capped fee. Hourly billing is a fallback, not a default.
                </li>
                <li>
                  The hardest part of legal procurement is not the lawyer. It is writing the brief. We treat scope refinement as a deliverable in its own right.
                </li>
                <li>
                  A panel of three to five senior solicitors per matter is more useful than a directory of a thousand. The selection happens before you see the names.
                </li>
              </ul>
            </div>

            <div>
              <Eyebrow words={["What we are not"]} />
              <h2 className="mt-3 font-display text-2xl md:text-3xl text-ink leading-tight">
                Some matters belong with a full-service firm
              </h2>
              <p className="mt-5 text-base md:text-lg text-ink leading-relaxed max-w-2xl">
                We are not a marketplace. We are not a directory. We do not sell leads or run an open auction where the cheapest wins. We do not lock lawyers into exclusivity. Some matters belong with a full-service firm, or counsel you already trust. We say so when they do.
              </p>
            </div>

            <div>
              {/* Bio is placeholder copy. Replace with PLS's preferred phrasing. */}
              <Eyebrow words={["Who runs it"]} />
              <h2 className="mt-3 font-display text-2xl md:text-3xl text-ink leading-tight">
                Peter Lumley-Savile
              </h2>
              <div className="mt-5 space-y-4 text-base md:text-lg text-ink leading-relaxed max-w-2xl">
                <p>
                  BriefHub is run by Peter Lumley-Savile, a UK commercial lawyer.
                </p>
                <p>
                  The platform began with a particular frustration. Commercial legal work, for the matters where there should be a competitive process, almost never gets one. The buyer either calls the firm they know or spends a week chasing introductions and ends up with quotes they cannot read against each other. BriefHub is the attempt to fix that by treating scope refinement as the deliverable it deserves to be and by sending the refined question to people who actually do the work.
                </p>
                <p>
                  Peter writes about the business of legal procurement, the economics of the commercial bar, and the difference between buying a lawyer and buying an outcome. Most of that thinking finds its way into the choices BriefHub makes on the platform itself.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <div className="flex items-center gap-8 flex-wrap">
                <Link
                  href="/start"
                  className="rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-cream hover:bg-accent/90 transition-colors"
                >
                  Start your brief
                </Link>
                <Link
                  href="/for-lawyers"
                  className="text-sm font-medium text-accent underline underline-offset-4 hover:no-underline"
                >
                  For lawyers
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
