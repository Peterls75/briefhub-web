@AGENTS.md

# BriefHub working memory

This is the institutional memory for the BriefHub website build. Anything here applies to every future session on this repo. Add to it whenever Peter corrects an approach, clarifies a convention or makes a brand decision worth preserving. Edit, do not append blindly: this file is loaded into every conversation, so length costs.

## How we work

Peter Lumley-Savile (PLS) is the founder of BriefHub and the decision-maker. He is non-technical. This is his first website build. Default to plain English. Explain technical choices in terms of consequences he can judge, not in jargon. Frame trade-offs in business terms before technical ones when both are in play.

The build runs in phases. Each phase loops: propose, confirm, build, show, review, sign off. Never start a phase before the previous one is signed off. The reviews are the work.

Inside a phase, act and report on routine reversible operations (PowerShell, npm installs of standard packages, file edits, formatting). Ask first on anything that changes user-visible behaviour, the data model, brand or copy.

## Non-negotiable prose rules

Apply to everything a human will read: site copy, placeholder text, error messages, email templates, code comments, commit messages, even prose in conversation with Peter.

- **No em-dashes.** Use commas, full stops or parentheses.
- **No Oxford commas.** Never put a comma before "and" in lists.

Both rules apply to Peter's own prose too. If you see one in his messages, treat it as a typo and do not propagate it.

## The brand

The canonical look and feel is [docs/reference/homepage.pdf](docs/reference/homepage.pdf). Every page must read as cream and burgundy. If it doesn't, something has gone wrong.

### Palette

Eight colours in two tiers, defined in [src/app/globals.css](src/app/globals.css). Variable names use American spelling (`--color-*`) because Tailwind v4 requires it; documentation uses British spelling.

**Core** (the brand identity)
- Burgundy `#6b1d2c` — wordmark, headlines, primary CTAs
- Cream `#ede5d8` — page background
- Blue-grey `#b8c5d6` — hairlines, dividers, eyebrow separators, secondary captions

**Supporting** (utility, used sparingly)
- Deep ink `#161f2e` — body text
- Black `#000000` — reserve for maximum typographic weight only
- Pale cream `#f4ecdf` — card surfaces, alternating panels
- Warm taupe `#b8a890` — muted labels, metadata
- Icy electric `#c4e0ee` — focus rings, status, links on dark surfaces

Components use the semantic names (`bg-surface`, `text-ink`, `text-accent`, `border-rule`, etc.), not the brand names. A future palette change is a one-file edit because of this. Never combine more than four colours on a single surface.

### Typography

One serif. Playfair Display everywhere: wordmark, headlines, body, labels, buttons, eyebrow labels, form controls. Self-hosted via `next/font/google`. Loaded weights: 400, 500, 600, 700, with italic across the same range.

Body text defaults to 400 weight. Headlines step up to 500 or 600 for upright lines and use italic 400 for the third line of three-line strapline headlines (the brand's resolution beat). The wordmark uses 400 for "Brief" and 700 for "Hub".

This is by Peter's instruction: "use the same fonts as the BriefHub logo font." Playfair Display is a "Didone" style serif (high contrast, thin/thick strokes) designed primarily for display use. At body size it can read heavier than a purpose-built reading serif. If long-form pages (privacy, terms) read uncomfortably the alternative is the newer "Playfair" family (with optical sizes for body), but the single-font decision is intentional and stands until Peter changes it.

### Wordmark and bowler hat

The canonical wordmark is "Brief" in Playfair regular plus "Hub" in Playfair bold, with the bowler hat to the left. Render via [src/components/Wordmark.tsx](src/components/Wordmark.tsx) — never reimplement.

The bowler hat at [public/brand/bowler-hat.svg](public/brand/bowler-hat.svg) is the single source of truth for the logomark. Never redraw it. Never tilt it. Never recolour it without explicit instruction.

### Voice

Plain, confident, slightly dry. Editorial weekly meets senior chambers. Aphoristic where possible. The failure mode to avoid is generic professional-services register ("empowering legal teams", "innovative platform", "passionate about delivering value"). If a line could appear on any consultancy's website, rewrite it.

### Decisions locked in for the homepage

The homepage matches the PDF, with four resolved divergences from the original brief text:

1. The hero's third line ("Choose your lawyer.") is in italic Playfair. The first two lines are upright.
2. The subhead reads "Free for clients." (PDF was "Free for buyers. Always.", brief text was "Free for clients").
3. The practice-area band uses small bowler-hat icons as separators. Middle-dots are reserved for eyebrow labels elsewhere on the site.
4. The hero secondary call-to-action ("See how it works") is an underlined text link, not a ghost button. Quieter, lets the primary CTA dominate.

## Hard rules

- No fictional testimonials, logos, statistics, quotes or case studies. Placeholder text must be marked `TODO: real copy from Peter`.
- No SaaS template aesthetics. References are editorial weeklies and good reading interfaces. The anti-reference is a SaaS landing page.
- No features outside the brief. Flag missing features; do not build them speculatively.
- No "improvements" to the brand. Burgundy, cream, blue-grey, Playfair, Inter, bowler hat. Work inside it.
- No analytics, tracking pixels or third-party scripts without Peter's explicit permission.
- No emojis in UI copy or commit messages.
- Lint and type-check clean before each commit.

## Code standards

- TypeScript strict mode. No `any` unless commented with a specific reason.
- Tailwind v4 only for styling. CSS-first config in [src/app/globals.css](src/app/globals.css) via `@theme`. No Material, no Chakra, no Mantine, no shadcn unless Peter asks. Radix or Headless UI primitives are fine where accessibility needs them.
- Components accessible by default: semantic HTML, real focus styles, keyboard navigable.
- Server actions handle errors explicitly. Never throw a raw error to the client.
- All secrets in environment variables. Never commit a key. Document every variable in `.env.example` and `README.md`.
- Conventional Commits for every commit. One concern per commit. Subject under 72 characters.

## Workflow stages

Eight stages, two quality gates.

1. Brief in
2. AI scope refinement
3. Client signs off the refined scope ← **Quality gate 1**
4. Out to panel
5. Quotes in
6. Quote review by BriefHub ← **Quality gate 2**
7. Three quotes to client
8. Award + introduction fee invoice

The two gates are enforced in the data model, not as labels. Nothing reaches a lawyer until the client signs off Gate 1. Nothing reaches the client until BriefHub clears Gate 2.

## Stack

- Next.js 16 (App Router), TypeScript strict, Tailwind v4
- Cloudflare Workers via OpenNext for hosting (not Vercel)
- Supabase for database, auth and storage (phase 5 onwards)
- Anthropic API for scope refinement (phase 4)
- Resend or Postmark for transactional email (TBD)
- Stripe for the introduction fee invoice on award (phase 8)

The Cloudflare runtime is V8 isolates, not Node.js: most npm packages work but native modules and Python tools do not. WeasyPrint (Python) PDF generation for the BriefHub Scope Document will call out to an external service to be set up in phase 4.

## Identity for commits

Git is configured to commit as `PLS <283948637+Peterls75@users.noreply.github.com>`. Do not change this without checking. Peter prefers the initials, and the no-reply email keeps his real address out of the public commit history.
