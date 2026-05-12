import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHeader } from "@/components/PageHeader";

/**
 * Placeholder client platform terms in BriefHub voice. Not yet legally
 * reviewed. Do not open the platform to live submissions without a
 * qualified lawyer ratifying this text.
 */

type Clause = { number: number; title: string; body: React.ReactNode };

const clauses: Clause[] = [
  {
    number: 1,
    title: "About BriefHub",
    body: (
      <p>
        BriefHub Limited operates an online platform that connects buyers of commercial legal work with a curated panel of senior solicitors in the UK. BriefHub is not itself a law firm. We do not provide legal advice. Nothing on this platform is a substitute for advice from a qualified lawyer.
      </p>
    ),
  },
  {
    number: 2,
    title: "What we do",
    body: (
      <ul className="space-y-2 pl-5 list-disc marker:text-rule">
        <li>We refine your brief into a scope that lawyers can quote against.</li>
        <li>We route your signed-off scope to between three and five panel lawyers in the matching specialism.</li>
        <li>We review the quotes that come back for clarity, comparability and gaps before sending them to you.</li>
        <li>We do not pick the lawyer for you. The award decision is yours.</li>
      </ul>
    ),
  },
  {
    number: 3,
    title: "Your account",
    body: (
      <p>
        You will need an account with us to post a brief. You are responsible for keeping your account credentials secure and for the accuracy of the information you provide. You may close your account at any time from your account settings.
      </p>
    ),
  },
  {
    number: 4,
    title: "Your brief",
    body: (
      <p>
        You may include in your brief any information you consider relevant. We treat brief contents as confidential, share them only with the panel lawyers we route the brief to, and retain them for the period set out in our privacy notice. You are responsible for ensuring that anything you upload is yours to share and is not subject to a duty of confidence to a third party that would be breached by sharing it with the panel.
      </p>
    ),
  },
  {
    number: 5,
    title: "Fees",
    body: (
      <p>
        BriefHub is free for clients. We charge no platform fees, no listing fees and no commission on the engagement you enter into with the winning lawyer. Our revenue comes from a flat introduction fee invoiced to the winning lawyer at the point of award.
      </p>
    ),
  },
  {
    number: 6,
    title: "The engagement",
    body: (
      <p>
        Once you award a matter, your engagement with the winning lawyer is direct. The terms of that engagement are between you and the lawyer. BriefHub is not a party to it, does not supervise the work and is not responsible for its conduct or outcome.
      </p>
    ),
  },
  {
    number: 7,
    title: "What we do not warrant",
    body: (
      <ul className="space-y-2 pl-5 list-disc marker:text-rule">
        <li>We do not warrant that any particular lawyer is suitable for your matter.</li>
        <li>We do not warrant that the quotes you receive are the lowest available in the market.</li>
        <li>We do not warrant that the platform will be uninterrupted or error-free.</li>
        <li>We rely on the regulated status of panel lawyers and their own professional indemnity insurance for the substance of the legal work performed under any engagement they accept.</li>
      </ul>
    ),
  },
  {
    number: 8,
    title: "Acceptable use",
    body: (
      <>
        <p>You agree not to use the platform to:</p>
        <ul className="mt-3 space-y-2 pl-5 list-disc marker:text-rule">
          <li>post briefs you do not have authority to post</li>
          <li>mislead the panel about the nature or scale of the matter</li>
          <li>attempt to identify or contact panel lawyers outside the platform during the bidding window</li>
          <li>use the platform to obtain free or speculative legal advice</li>
          <li>do anything that disrupts the platform or other users</li>
        </ul>
      </>
    ),
  },
  {
    number: 9,
    title: "Liability",
    body: (
      <p>
        To the extent permitted by law, BriefHub's total liability to you in respect of any matter is limited to the amount of fees we received from the lawyer engaged on that matter (the flat introduction fee). We do not exclude liability for fraud, fraudulent misrepresentation, death or personal injury caused by our negligence, or anything else that cannot be excluded by law.
      </p>
    ),
  },
  {
    number: 10,
    title: "Termination",
    body: (
      <p>
        You may close your account at any time. We may suspend or close your account if we reasonably believe you have breached these terms or have used the platform in a way that is harmful to the panel, to other users or to us. Closure of your account does not affect rights and obligations that have already accrued.
      </p>
    ),
  },
  {
    number: 11,
    title: "Changes",
    body: (
      <p>
        We may update these terms from time to time. Material changes will be communicated to account holders and we will give you reasonable notice before they take effect.
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

export default function ClientTermsPage() {
  return (
    <>
      <SiteNav />

      <main className="flex-1">
        <PageHeader
          eyebrowWords={["Terms", "Clients"]}
          title="Client platform terms"
          lede="These terms apply when you use BriefHub to post a brief, receive quotes and award a matter to a panel lawyer. By creating an account or posting a brief, you agree to them."
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
