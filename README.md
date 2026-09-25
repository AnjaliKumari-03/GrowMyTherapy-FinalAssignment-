# GrowMyTherapy-Assignment: Conejo Valley homepage clone (Part 1)

Next.js 15 + Tailwind CSS v4 + TypeScript.

## Run it
```bash
npm install
npm run dev     # http://localhost:3000
```

## Section order (same as the original)
Header, Hero, Intro, Who we help, Quote band, Areas of expertise, How we work,
"Honoring where you've been", Specialties, Schedule an appointment, Footer.

## How it is built
- Desktop proportions were measured from a full-page screenshot at 1161px wide and written as
  percentages / vw, so desktop scales like the original.
- Mobile (390px) and tablet (517px) layouts were measured from two more screenshots and differ from
  a simple "stack the desktop grid" collapse in several real ways (see below) — these are now built
  in, not guessed.
- Theme tokens live in ONE place: the `@theme` block in `app/globals.css` (palette sampled from the
  screenshot). Type sizes are the `t-*` utilities in the same file. Fonts are set in `app/layout.tsx`.
  For Part 2 you only change those values.
- Images in `public/images` are crops of the screenshots (placeholders for Part 1). Part 2 replaces
  all of them with new photos of the same aspect ratios.

## Mobile/tablet differences confirmed from the screenshots (not just a grid collapse)
- **Hero**: text comes first, the image collage comes after (reversed from desktop's side-by-side).
  A sliver of the second photo peeks on the right edge, clipped by the viewport.
- **Intro**: the photo sits *between* the two paragraphs, not beside them.
- **Quote band**: desktop is a flat solid brown fill (verified by zooming in - no photo at all).
  Mobile/tablet show a real background photo (kids running on the beach) with a dark overlay behind
  the same text. The photo (`public/images/quote-band.jpg`) is a placeholder crop with some of the
  original site's own text faintly baked in from the screenshot — replace it with a clean licensed
  photo in Part 2.
- **How we work**: the photo is dropped entirely below `lg` — no reserved space.
- **Specialties**: card order on mobile/tablet is Trauma, Dissociation, EMDR, Special Needs
  Parenting (the desktop grid's left column top-to-bottom, then the right column) — not the row-by-
  row order used on desktop. Built with Tailwind `order-*` utilities; safe to combine with desktop's
  explicit `lg:col-start`/`lg:row-start`, since explicit grid placement always wins over `order`.
- **Schedule**: only the first photo (hands sorting shells) shows, full width at the top. The second
  photo is dropped below `lg`.
- **Footer**: order is intro → Navigate → Contact → Our Team on mobile/tablet, vs. Navigate / Our
  Team / Contact left-to-right on desktop. Also built with `order-*` for the same reason as above.

## Things to still check by eye against the live site
1. Fonts: closest Google matches are used (Newsreader, Mulish, Herr Von Muellerhoff). Compare in
   DevTools (Computed > font-family) and swap in `app/layout.tsx` if needed.
2. Colors: sampled from the screenshots; verify with DevTools if a shade looks off.
3. Test at 1440, 1161, 1024, 768, 517, and 390px widths against the original.

## Files
- `app/globals.css`: Tailwind v4 import, `@theme` tokens, type scale
- `app/layout.tsx`: fonts + metadata
- `app/page.tsx`: assembles the sections
- `components/`: `Header.tsx`, `sections.tsx`, `Footer.tsx`, `ui.tsx`
- `postcss.config.mjs`: loads `@tailwindcss/postcss`
