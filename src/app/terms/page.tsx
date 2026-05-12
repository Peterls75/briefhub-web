import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHeader } from "@/components/PageHeader";
import { Eyebrow } from "@/components/Eyebrow";

export default function TermsIndexPage() {
  return (
    <>
      <SiteNav />

      <main className="flex-1">
        <PageHeader
          eyebrowWords={["Terms"]}
          title="Which terms apply"
          lede="BriefHub has two sets of terms, one for clients posting briefs and one for panel lawyers bidding on them. They are linked here for completeness, and from the relevant journey when you sign up."
        />

        <section className="px-6 md:px-10 pb-20 md:pb-28">
          <div className="mx-auto max-w-3xl grid gap-6 md:grid-cols-2">
            <Link
              href="/terms/clients"
              className="group block border border-rule/40 hover:border-accent transition-colors p-6 md:p-8 bg-surface-raised"
            >
              <Eyebrow words={["For clients"]} />
              <h2 className="mt-3 font-display text-2xl text-accent group-hover:underline underline-offset-4">
                Client platform terms
              </h2>
              <p className="mt-3 text-base text-ink leading-relaxed">
                The terms that apply to anyone using BriefHub to post a brief and receive quotes.
              </p>
            </Link>

            <Link
              href="/terms/lawyers"
              className="group block border border-rule/40 hover:border-accent transition-colors p-6 md:p-8 bg-surface-raised"
            >
              <Eyebrow words={["For panel lawyers"]} />
              <h2 className="mt-3 font-display text-2xl text-accent group-hover:underline underline-offset-4">
                Panel lawyer terms
              </h2>
              <p className="mt-3 text-base text-ink leading-relaxed">
                The terms that apply to solicitors and barristers admitted to the BriefHub panel.
              </p>
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
