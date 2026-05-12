import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHeader } from "@/components/PageHeader";

/**
 * Placeholder for panel lawyer terms.
 * TODO: real panel terms copy from PLS (legal sign-off required).
 */

export default function LawyerTermsPage() {
  return (
    <>
      <SiteNav />

      <main className="flex-1">
        <PageHeader
          eyebrowWords={["Terms", "Panel"]}
          title="Panel lawyer terms"
          lede="The terms that apply when you join the BriefHub panel, bid for matters and accept engagements through the platform."
        />

        <section className="px-6 md:px-10 pb-20 md:pb-28">
          <div className="mx-auto max-w-2xl space-y-6 text-base md:text-lg text-ink leading-relaxed">
            <p>
              The full panel lawyer terms are being prepared and will be published before any panel lawyer is invited to bid on a live matter. The shape of what they will cover is set out below.
            </p>
            <ul className="space-y-4 pl-5 list-disc marker:text-rule">
              <li>Eligibility, application and removal from the panel.</li>
              <li>Conduct of bidding: pitch length, fee structures, clarifying questions, conflicts checks.</li>
              <li>The flat introduction fee on award and how it is invoiced.</li>
              <li>Confidentiality of brief contents and competing bids.</li>
              <li>The boundary between BriefHub and your direct engagement with the client.</li>
              <li>Limitations of liability and the law applicable to disputes.</li>
            </ul>
            <p className="text-sm text-muted">
              These terms will be the binding version when the panel is invited to bid on its first matter.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
