# Dr. Maya Reynolds, PsyD — Therapy Website

A redesigned homepage for a fictional therapy practice, built as part of the GrowMyTherapy internship assignment. The site is cloned from an existing counseling homepage, then rebuilt with new copy, a new color palette, and new imagery based on a fictional therapist's profile.

**Live site:** _add your Vercel URL here once deployed_

---

## About This Project

Dr. Maya Reynolds is a fictional licensed clinical psychologist based in Santa Monica, CA, offering therapy for anxiety, panic, trauma, and burnout. This site was built in four stages:

1. **Clone** — Recreated the layout, spacing, and responsiveness of an existing counseling homepage.
2. **Redesign** — Replaced the color palette, rewrote all copy based on Dr. Reynolds' profile, and swapped in new images.
3. **New section** — Added an "Our Office" section (not in the original template) showcasing the therapy office space.
4. **Video walkthrough** — A short client-facing demo explaining the design choices (see `/docs` or project submission).

## Tech Stack

- **[Next.js](https://nextjs.org/)** (App Router)
- **[Tailwind CSS](https://tailwindcss.com/)** for styling
- **TypeScript**
- Google Fonts: Newsreader (headings), Mulish (body), Herr Von Muellerhoff (script accents)

## Design & Color Theory

The palette was chosen using color psychology research for mental health and trauma-informed spaces, favoring cool, muted, and warm-neutral tones over bold or clinical colors:

| Color | Role | Why |
|---|---|---|
| **Sage green** | Primary / accent | Balance, renewal, and a "low-threat" visual field for anxiety and trauma recovery |
| **Dusty sky blue** | Secondary | Linked to lower cortisol and a sense of open, predictable calm |
| **Soft lavender** | Accent tint | Balances blue's cool tone with warmth; tied to emotional stability |
| **Warm cream / beige** | Backgrounds | Feels comforting and "human," avoiding the cold, clinical feel of stark white |
| **Powder pink** | Accent tint | Associated with gentleness, tenderness, and reassurance |

## Project Structure

```
app/
layout.tsx — fonts, metadata, JSON-LD structured data
page.tsx — assembles all homepage sections
globals.css — theme tokens (@theme block) and typography utilities
components/
Header.tsx — nav bar + mobile menu
Footer.tsx — contact info, sitemap links
sections.tsx — all homepage sections (Hero, Intro, Services, Our Office, FAQs, etc.)
ui.tsx — shared building blocks (Photo, VideoBox, PillLink, TextLink, Script, Logo)
public/
images/ — photos and illustrations used across the site
videos/ — background/looping animations
```


## Key Sections

- **Hero** — headline, intro, and Dr. Reynolds' portrait
- **Services** — Anxiety & Panic Therapy, Trauma Therapy & EMDR, Burnout & Perfectionism
- **A Warm and Caring Approach** — therapist bio, methods (CBT, EMDR, mindfulness, body-based work)
- **Our Office** *(new section)* — office photos, address, in-person/telehealth details
- **Common Questions** — FAQ accordion
- **Schedule** — call to action to book a consultation

## SEO

- Location- and specialty-targeted H1/H2s ("Anxiety & Trauma Therapy in Santa Monica, CA")
- Descriptive, keyword-relevant image alt text
- `Psychologist` JSON-LD structured data in `app/layout.tsx` (name, address, specialties, services) for local search visibility

## Getting Started

```bash
npm install
npm run dev
```


### Build for production

```bash
npm run build
npm start
```

## Deployment

This project is set up to deploy on [Vercel](https://vercel.com) with zero configuration — push to GitHub, import the repo into Vercel, and deploy.

## Disclaimer

Dr. Maya Reynolds is a **fictional** therapist created for this assignment. All content, images, and the office address are for demonstration purposes only and do not represent a real practice.
