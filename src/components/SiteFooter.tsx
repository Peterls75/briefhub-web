export function SiteFooter() {
  return (
    <footer className="border-t border-rule/30 px-6 md:px-10 py-6 mt-auto">
      <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-y-3 gap-x-8 text-xs">
        <span className="font-semibold tracking-[0.18em] text-accent uppercase">
          BriefHub.co
        </span>
        <div className="flex items-center gap-4 text-ink flex-wrap">
          <span>BriefHub Limited</span>
          <span aria-hidden className="text-rule">
            ·
          </span>
          <span className="text-ink/80">
            Post your brief. Review pitches. Choose your lawyer.
          </span>
        </div>
      </div>
    </footer>
  );
}
