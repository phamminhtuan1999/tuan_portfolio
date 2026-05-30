# Minh Tuan Pham — Portfolio

Personal portfolio site for **Minh Tuan Pham, Senior Backend Engineer** — a single-page,
terminal-brutalist showcase of work, skills, experience, and credentials.

Built with [Next.js](https://nextjs.org/) (App Router) + TypeScript. It was restructured from a
single self-contained `index.html` bundle (preserved under [`legacy/`](./legacy)) into a
conventional, maintainable codebase.

## Tech stack

- **Next.js 15** — App Router, React 19, statically prerendered
- **TypeScript** — strict mode
- **`next/font/google`** — self-hosted, optimized web fonts (no external font requests at runtime)
- **Plain CSS** with a design-token layer — no CSS framework; a hand-rolled brutalist design system
- **`next/image`** — responsive, optimized portrait image

## Getting started

```bash
npm install
npm run dev      # start dev server → http://localhost:3000
```

| Script            | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Dev server with hot reload           |
| `npm run build`   | Production build (static export)     |
| `npm run start`   | Serve the production build           |
| `npm run lint`    | ESLint (`next/core-web-vitals`)      |

**Requirements:** Node.js 18.18+ (developed on Node 24).

## Project structure

```
.
├── app/
│   ├── layout.tsx          # fonts, metadata, global CSS, <html>/<body>
│   └── page.tsx            # page composition (server component)
├── components/
│   ├── Boot.tsx            # terminal boot overlay
│   ├── TopBar.tsx          # tagline + live clock
│   ├── NavBar.tsx          # sticky nav with scroll-spy
│   ├── Marquee.tsx         # scrolling ticker
│   ├── Button.tsx          # brutalist button
│   ├── Reveal.tsx          # reveal-on-scroll (IntersectionObserver)
│   ├── Counter.tsx         # count-up stat
│   └── sections/           # Hero · About · Work · Skills · Experience · Education · Contact
├── hooks/
│   └── useScrollSpy.ts     # active-section tracking
├── lib/
│   ├── site.ts             # contact info, asset paths, nav sections
│   └── content.tsx         # all page content (projects, skills, experience, credentials)
├── styles/
│   ├── tokens.css          # design tokens (:root variables)
│   ├── base.css            # design-system primitives (.btn, .badge, type, links…)
│   └── layout.css          # layout + component + responsive styles
├── public/
│   ├── portrait-tuan.png   # hero portrait
│   └── cv/TuanPhamSWE.pdf  # downloadable CV
└── legacy/
    └── original-bundle.html  # the original single-file artifact (reference only)
```

## Editing content

All copy lives in two files — update these rather than the section components:

- [`lib/content.tsx`](./lib/content.tsx) — projects, skills, experience timeline, credentials
- [`lib/site.ts`](./lib/site.ts) — contact links, CV/portrait paths, nav sections

To swap the portrait or CV, replace the files in [`public/`](./public) (keeping the same names,
or update the paths in `lib/site.ts`).

## Typography

Three Google Fonts are loaded via `next/font/google` in [`app/layout.tsx`](./app/layout.tsx) and
exposed as CSS variables that the design tokens consume:

| Font                                                              | Role                          | Weights | Token            |
| ----------------------------------------------------------------- | ----------------------------- | ------- | ---------------- |
| [Be Vietnam Pro](https://fonts.google.com/specimen/Be+Vietnam+Pro) | Display / headings            | 700, 800 | `--font-display` |
| [Space Mono](https://fonts.google.com/specimen/Space+Mono)         | UI / body                     | 400, 700 | `--font-mono`    |
| [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono)   | Data / code labels            | 400      | `--font-data`    |

Only the weights actually rendered by the CSS are loaded (no over-fetching). The font CSS
variables are applied to `<html>` so the `--font-*` tokens in `styles/tokens.css` — declared on
`:root` and referencing them — resolve correctly.

To change a font: update the `next/font/google` import in `app/layout.tsx` and point the matching
`--font-*` token in `styles/tokens.css` at the new variable.

## Styling & design system

CSS is layered (imported in order in `layout.tsx`):

1. **`tokens.css`** — `:root` custom properties: palette, type scale, spacing, borders.
2. **`base.css`** — reusable primitives (buttons, badges, type helpers, links).
3. **`layout.css`** — page structure, section layouts, and responsive breakpoints (≤1024px, ≤640px).

The aesthetic is intentionally **brutalist**: sharp corners, hairline borders for structure
(no shadows), a greige canvas with a single orange accent (`--accent: #FC4C02`).

## Server vs. client components

`app/page.tsx` is a server component that composes the page. Interactive pieces are isolated as
client islands marked `"use client"`: `Boot`, `TopBar`, `NavBar`, `Work`, `Contact`, `Reveal`,
and `Counter`. Purely presentational sections render on the server and mount those islands where
interactivity is needed.

## Deployment

Any platform that supports Next.js works. Easiest is [Vercel](https://vercel.com/): push the repo
and import it — no configuration required. For a self-hosted Node server, run `npm run build`
followed by `npm run start`.
