import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHeader } from "@/components/PageHeader";

/**
 * Placeholder for the full privacy notice.
 * TODO: real privacy notice copy from PLS (legal sign-off required).
 */

export default function PrivacyPage() {
  return (
    <>
      <SiteNav />

      <main className="flex-1">
        <PageHeader
          eyebrowWords={["Privacy"]}
          title="How we handle your information"
          lede="Short version: we do not sell your data, we do not share your brief outside the panel lawyers it is routed to, and we do not run third-party trackers on this site."
        />

        <section className="px-6 md:px-10 pb-20 md:pb-28">
          <div className="mx-auto max-w-2xl space-y-6 text-base md:text-lg text-ink leading-relaxed">
            <p>
              The full privacy notice is being prepared and will be published before BriefHub accepts any live submissions. In the interim, the principles we are working to are these.
            </p>
            <ul className="space-y-4 pl-5 list-disc marker:text-rule">
              <li>
                We collect only what we need to run the platform: account details, brief contents, communications between the parties and payment records.
              </li>
              <li>
                We share brief contents only with the panel lawyers a brief is routed to, after you have signed off the refined scope.
              </li>
              <li>
                We run no third-party analytics, advertising or tracking pixels on this site.
              </li>
              <li>
                We use established UK and EU compliant providers for data storage, payments and email delivery. They are named in the full notice when it is published.
              </li>
              <li>
                You can request a copy of your data, or its deletion, at any time.
              </li>
            </ul>
            <p className="text-sm text-muted">
              This page will be replaced by the full privacy notice when the platform opens for submissions.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
