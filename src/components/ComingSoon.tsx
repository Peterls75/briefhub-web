import Link from "next/link";
import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";
import { Eyebrow } from "./Eyebrow";

export function ComingSoon({
  title,
  eyebrow = "Coming soon",
}: {
  title: string;
  eyebrow?: string;
}) {
  return (
    <>
      <SiteNav />
      <main className="flex-1 px-6 md:px-10 py-24 md:py-36 text-center">
        <div className="mx-auto max-w-xl">
          <Eyebrow words={[eyebrow]} />
          <h1 className="mt-8 font-display text-accent text-5xl md:text-6xl leading-tight tracking-tight">
            {title}
          </h1>
          <p className="mt-8 text-base md:text-lg text-ink font-medium leading-snug">
            Not built yet. The site is being released in stages. The homepage is the front door for now.
          </p>
          <div className="mt-10">
            <Link
              href="/"
              className="text-sm font-medium text-accent underline underline-offset-4 hover:no-underline"
            >
              Back to BriefHub
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
