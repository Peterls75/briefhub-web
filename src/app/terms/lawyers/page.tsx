import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHeader } from "@/components/PageHeader";

/**
 * Placeholder panel lawyer terms in BriefHub voice. Not yet legally
 * reviewed. Do not invite the panel to bid on a live matter without a
 * qualified lawyer ratifying this text.
 */

type Clause = { number: number; title: string; body: React.ReactNode };

const clauses: Clause[] = [
  {
    number: 1,
    title: "The panel",
    body: (
      <p>
        BriefHub Limited operates a curated panel of senior commercial solicitors in defined specialisms. Admission to the panel is at BriefHub's discretion, based on the application you submit and the practice information you provide. BriefHub may remove a lawyer from the panel at any time, with reasons given where it is reasonable to do so.
      </p>
    ),
  },
  {
    number: 2,
    title: "Your status",
    body: (
      <p>
        You participate in the panel as an independent professional. Nothing in these terms creates an employment relationship, partnership or agency between you and BriefHub. You are responsible for your own tax position, regulatory compliance (with the SRA, BSB or any other applicable regulator) and professional indemnity insurance.
      </p>
    ),
  },
  {
    number: 3,
    title: "Conflicts and eligibility",
    body: (
      <p>
        Before submitting a bid you must run your own conflicts check against the parties identified in the brief and decline the bid if any conflict, real or apparent, exists. On each bid you confirm that you are eligible to act on the matter, hold the required professional indemnity cover and have capacity to handle the matter in the timeline indicated.
      </p>
    ),
  },
  {
    number: 4,
    title: "Conduct of bidding",
    body: (
      <ul className="space-y-2 pl-5 list-disc marker:text-rule">
        <li>You may submit one bid per matter you are invited to.</li>
        <li>Your pitch must be your own writing.</li>
        <li>Fee structures must conform to the format set out for the matter (typically fixed, capped or staged-payment).</li>
        <li>Clarifying questions during the bid window go through BriefHub. You must not contact the client directly during the bid window.</li>
        <li>You must not seek to identify the competing bidders for a matter, and you must not share the existence or content of a brief with anyone outside your firm without our prior agreement.</li>
      </ul>
    ),
  },
  {
    number: 5,
    title: "Confidentiality",
    body: (
      <p>
        Brief contents are shared with you on the basis that they are confidential. You may use them only for the purpose of preparing your bid and, if you win, acting on the matter. You must protect them with no less care than you would your own client materials and you must destroy or return them on request if you do not win the matter.
      </p>
    ),
  },
  {
    number: 6,
    title: "The introduction fee",
    body: (
      <p>
        Where you are awarded a matter through BriefHub, you owe us a flat introduction fee. The fee is the same regardless of the size of the matter. It is invoiced through our payment provider on award and is payable within the timeframe shown on the invoice. The fee is not contingent on the client paying you and is not refundable if the engagement subsequently changes scope, completes early or is terminated.
      </p>
    ),
  },
  {
    number: 7,
    title: "Direct engagement after award",
    body: (
      <p>
        Once you are awarded a matter your engagement with the client is direct. BriefHub is not a party to it. We do not supervise the work, do not handle client money for the engagement and play no further role unless invited by both sides.
      </p>
    ),
  },
  {
    number: 8,
    title: "Standards",
    body: (
      <p>
        Panel lawyers are expected to conduct themselves professionally on the platform and in dealings with clients introduced through it. Behaviour that brings the panel into disrepute, including misleading bids, breach of confidence, off-platform solicitation or substantiated client complaints about engagement conduct, may lead to suspension or removal from the panel.
      </p>
    ),
  },
  {
    number: 9,
    title: "Liability",
    body: (
      <p>
        To the extent permitted by law, BriefHub's total liability to you in respect of any matter is limited to the amount of any introduction fee you have paid us in connection with that matter. We do not exclude liability for fraud, fraudulent misrepresentation or anything else that cannot be excluded by law. Nothing in these terms affects your own liability to your clients for the legal work you perform under any engagement you accept.
      </p>
    ),
  },
  {
    number: 10,
    title: "Removal and withdrawal",
    body: (
      <p>
        You may withdraw from the panel at any time. BriefHub may remove you from the panel where we reasonably consider it appropriate, including following a serious client complaint, a regulatory issue or a sustained pattern of non-engagement with invited briefs. Removal does not affect introduction fees that have already accrued.
      </p>
    ),
  },
  {
    number: 11,
    title: "Changes",
    body: (
      <p>
        We may update these terms from time to time. Material changes will be communicated to panel lawyers and we will give you reasonable notice before they take effect.
      </p>
    ),
  },
  {
    number: 12,
    title: "Governing law",
    body: (
      <p>
        These terms are governed by the law of England and Wales. The courts of England and Wales have exclusive jurisdiction over any dispute arising out of or in connection with these terms.
      </p>
    ),
  },
];

export default function LawyerTermsPage() {
  return (
    <>
      <SiteNav />

      <main className="flex-1">
        <PageHeader
          eyebrowWords={["Terms", "Panel"]}
          title="Panel lawyer terms"
          lede="These terms apply once you are admitted to the BriefHub panel. By accepting admission you agree to them."
        />

        <section className="px-6 md:px-10 pb-20 md:pb-28">
          <article className="mx-auto max-w-2xl space-y-10 md:space-y-12 text-base md:text-lg text-ink leading-relaxed">
            {clauses.map((c) => (
              <div key={c.number}>
                <h2 className="font-display text-xl md:text-2xl text-ink leading-tight">
                  <span className="text-rule font-normal mr-3">
                    {c.number}.
                  </span>
                  {c.title}
                </h2>
                <div className="mt-3 space-y-3">{c.body}</div>
              </div>
            ))}

            <p className="text-sm text-muted border-t border-rule/40 pt-6">
              Last updated 13 May 2026.
            </p>
          </article>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
