import Link from "next/link";
import { Wordmark } from "./Wordmark";

const navLinks = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/about", label: "About" },
];

export function SiteNav() {
  return (
    <header className="border-b border-rule/30">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-5 md:py-6 flex items-center justify-between gap-6">
        <Link href="/" aria-label="BriefHub home" className="shrink-0">
          <Wordmark size="md" />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-10 text-sm font-medium text-ink"
        >
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hover:text-accent transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 md:gap-6">
          <Link
            href="/sign-in"
            className="hidden sm:inline text-sm font-medium text-accent hover:underline underline-offset-4"
          >
            Sign in
          </Link>
          <Link
            href="/start"
            className="rounded-full border border-accent px-4 md:px-5 py-2 text-sm font-medium text-accent hover:bg-accent hover:text-cream transition-colors"
          >
            Post a brief
          </Link>
        </div>
      </div>
    </header>
  );
}
