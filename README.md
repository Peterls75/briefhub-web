# BriefHub

The website for BriefHub: a curated panel where UK businesses post a commercial legal brief and receive three comparable fixed-fee quotes from senior solicitors within roughly 48 hours.

This repository contains the public marketing site, the client portal, the lawyer portal and the admin area as different routes inside one Next.js application.

## Stack

- Next.js 16 (App Router) with TypeScript in strict mode
- Tailwind v4 for styling (CSS-first config in `src/app/globals.css`)
- Self-hosted Playfair Display and Inter via `next/font/google`
- Cloudflare Workers via OpenNext for hosting
- Supabase for database, authentication and file storage (phase 5 onwards)
- Anthropic API for the scope refinement step (phase 4)
- Stripe for the introduction fee invoice on award (phase 8)

## Getting started

```powershell
npm install
npm run dev
```

Open <http://localhost:3000> to view the site.

## Environment variables

Copy `.env.example` to `.env.local` and fill in the values. Each variable has a one-line comment explaining what it is for. Never commit `.env.local`.

## Project structure

- `src/app/` — App Router routes. Public marketing pages, the brief intake form, and (later phases) the client, lawyer and admin portals.
- `src/components/` — reusable components. The brand primitives `Wordmark`, `Eyebrow`, `SiteNav`, `SiteFooter` and `PracticeBand` live here.
- `public/brand/` — the bowler hat SVG and any other brand assets. The bowler hat is the single source of truth for the logomark; never redraw.
- `docs/` — design references, intake questions, the refinement criteria, the BriefHub Scope Document template, email templates. Versioned with the codebase.
- `CLAUDE.md` — institutional memory for working on this project. The rules that have been corrected into existence as the brief has been refined.

## Deploying

The site deploys to Cloudflare Workers via OpenNext. Build and runtime configuration lives in `wrangler.jsonc` and `open-next.config.ts` (added at the start of phase 1).

Preview deployments run for every branch and pull request. Production is `main`.

## Brand

Cream and burgundy. Playfair Display for the wordmark and display headings. Inter Medium for everything else. Editorial layout, generous whitespace, no SaaS reflexes.

The canonical look and feel lives at [docs/reference/homepage.pdf](docs/reference/homepage.pdf). The full brand foundation, code standards and house rules are in [CLAUDE.md](CLAUDE.md).
