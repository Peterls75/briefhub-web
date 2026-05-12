import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHeader } from "@/components/PageHeader";

/**
 * Placeholder privacy notice in BriefHub voice. Not yet legally reviewed.
 * Do not open the platform to live submissions without a qualified lawyer
 * ratifying this text. See LASTUPDATED at the foot of the page.
 */

export default function PrivacyPage() {
  return (
    <>
      <SiteNav />

      <main className="flex-1">
        <PageHeader
          eyebrowWords={["Privacy"]}
          title="How we handle your information"
          lede="In summary: we collect only what we need to run the platform, we share brief contents only with panel lawyers once you have signed off the refined scope, and we run no third-party trackers on this site."
        />

        <section className="px-6 md:px-10 pb-20 md:pb-28">
          <article className="mx-auto max-w-2xl space-y-10 md:space-y-12 text-base md:text-lg text-ink leading-relaxed">
            <div>
              <h2 className="font-display text-xl md:text-2xl text-ink leading-tight">
                Who we are
              </h2>
              <p className="mt-3">
                BriefHub is operated by BriefHub Limited, a company registered in England and Wales. References to "we", "us" and "our" in this notice are to BriefHub Limited. You can contact us about data matters using the contact information published on this site.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl md:text-2xl text-ink leading-tight">
                What we collect
              </h2>
              <p className="mt-3">
                The data we collect falls into a small number of categories.
              </p>
              <ul className="mt-4 space-y-3 pl-5 list-disc marker:text-rule">
                <li>
                  <strong className="font-semibold text-accent">Account data.</strong>{" "}
                  Your name, email address, organisation (if any), role, and the password (hashed) or magic-link tokens used to authenticate you.
                </li>
                <li>
                  <strong className="font-semibold text-accent">Brief contents.</strong>{" "}
                  Everything you put into a brief: the matter description, any documents you attach, your answers to clarifying questions and the version history of your refined scope.
                </li>
                <li>
                  <strong className="font-semibold text-accent">Communications.</strong>{" "}
                  Messages exchanged through the platform between you, BriefHub and panel lawyers.
                </li>
                <li>
                  <strong className="font-semibold text-accent">Payment records.</strong>{" "}
                  For panel lawyers, the introduction fees we invoice and the records held by our payment provider.
                </li>
                <li>
                  <strong className="font-semibold text-accent">Technical data.</strong>{" "}
                  Browser type, IP address, request logs and similar information necessary for operating a web service securely.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl md:text-2xl text-ink leading-tight">
                Why we collect it
              </h2>
              <p className="mt-3">
                We rely on three lawful bases under UK GDPR.
              </p>
              <ul className="mt-4 space-y-3 pl-5 list-disc marker:text-rule">
                <li>
                  <strong className="font-semibold text-accent">Performance of a contract.</strong>{" "}
                  Most processing is necessary to operate the platform you have signed up to use.
                </li>
                <li>
                  <strong className="font-semibold text-accent">Legitimate interests.</strong>{" "}
                  Operating the platform securely, preventing abuse, improving the service and managing our business records.
                </li>
                <li>
                  <strong className="font-semibold text-accent">Legal obligation.</strong>{" "}
                  Where we are required to retain records, for example for tax or anti-money-laundering compliance, or to respond to a lawful request from a regulator or court.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl md:text-2xl text-ink leading-tight">
                Who we share it with
              </h2>
              <ul className="mt-3 space-y-3 pl-5 list-disc marker:text-rule">
                <li>
                  <strong className="font-semibold text-accent">Panel lawyers.</strong>{" "}
                  Once you have signed off a refined scope, the brief contents are shared with the panel lawyers we invite to bid. They are bound by panel terms to keep brief contents confidential and to use them only for the bid and, if they win, the engagement.
                </li>
                <li>
                  <strong className="font-semibold text-accent">Service providers.</strong>{" "}
                  We use established UK and EU compliant providers for data storage, payments, email delivery and similar infrastructure. They process data on our behalf and only on our instructions.
                </li>
                <li>
                  <strong className="font-semibold text-accent">Authorities.</strong>{" "}
                  Where we are legally required to share data with a regulator, court or law enforcement body.
                </li>
              </ul>
              <p className="mt-4">
                We do not sell your data. We do not share your data with marketers or advertisers. We do not pass brief contents to anyone outside the panel routing for a given matter.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl md:text-2xl text-ink leading-tight">
                International transfers
              </h2>
              <p className="mt-3">
                Where data is transferred outside the UK or EEA we rely on the protections recognised under UK GDPR, including adequacy decisions and standard contractual clauses where required.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl md:text-2xl text-ink leading-tight">
                How long we keep it
              </h2>
              <p className="mt-3">
                We retain account data for as long as your account is active, plus a reasonable period after closure for legal and accounting purposes. Brief contents are retained for the duration of the matter and for a defined window after award or withdrawal. Specific retention periods are published in our internal retention schedule and provided on request.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl md:text-2xl text-ink leading-tight">
                Your rights
              </h2>
              <p className="mt-3">
                Under UK GDPR you have the right to:
              </p>
              <ul className="mt-4 space-y-2 pl-5 list-disc marker:text-rule">
                <li>access the personal data we hold about you</li>
                <li>have inaccurate data corrected</li>
                <li>have your data deleted, in defined circumstances</li>
                <li>restrict or object to processing</li>
                <li>receive your data in a portable format</li>
                <li>withdraw consent where processing relies on it</li>
              </ul>
              <p className="mt-4">
                You can exercise any of these rights by contacting us. You can also complain to the Information Commissioner's Office (ico.org.uk) at any time.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl md:text-2xl text-ink leading-tight">
                Cookies and tracking
              </h2>
              <p className="mt-3">
                This site uses only strictly-necessary cookies (for example, session and security cookies). We do not use third-party analytics, advertising or marketing pixels. If that changes, we will tell you and give you a choice.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl md:text-2xl text-ink leading-tight">
                Changes to this notice
              </h2>
              <p className="mt-3">
                We will update this notice from time to time. Material changes will be communicated to account holders directly. The date at the foot of this page is the date of the current version.
              </p>
            </div>

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
