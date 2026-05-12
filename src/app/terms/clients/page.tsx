import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHeader } from "@/components/PageHeader";

/**
 * Placeholder for client platform terms.
 * TODO: real client terms copy from PLS (legal sign-off required).
 */

export default function ClientTermsPage() {
  return (
    <>
      <SiteNav />

      <main className="flex-1">
        <PageHeader
          eyebrowWords={["Terms", "Clients"]}
          title="Client platform terms"
          lede="The terms that apply when you use BriefHub to post a brief, receive quotes and engage a panel lawyer."
        />

        <section className="px-6 md:px-10 pb-20 md:pb-28">
          <div className="mx-auto max-w-2xl space-y-6 text-base md:text-lg text-ink leading-relaxed">
            <p>
              The full client platform terms are being prepared and will be published before BriefHub accepts any live submissions. The shape of what they will cover is set out below.
            </p>
            <ul className="space-y-4 pl-5 list-disc marker:text-rule">
              <li>The relationship between you, BriefHub and the panel lawyer you engage.</li>
              <li>What BriefHub does and does not warrant about the panel.</li>
              <li>How fees work for clients (the platform is free) and for lawyers (a flat introduction fee on award).</li>
              <li>Data handling, retention and confidentiality of brief contents.</li>
              <li>Limitations of liability and the law applicable to disputes.</li>
            </ul>
            <p className="text-sm text-muted">
              These terms will be the binding version when the platform opens.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
