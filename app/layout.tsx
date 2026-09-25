import type { Metadata } from "next";
import { Newsreader, Mulish, Herr_Von_Muellerhoff } from "next/font/google";
import "./globals.css";

// CLOSEST GOOGLE-FONT MATCHES to the original (light serif headings, Mulish-style
// body, thin handwritten script). Confirm in DevTools (Computed > font-family)
// and swap here if the original uses different fonts.
const heading = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
});
const body = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
});
const script = Herr_Von_Muellerhoff({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script-face",
});

export const metadata: Metadata = {
  title: "Anxiety & Trauma Therapy in Santa Monica, CA | Dr. Maya Reynolds, PsyD",
  description:
    "Licensed clinical psychologist in Santa Monica, CA offering anxiety, panic, trauma, EMDR, and burnout therapy for adults, in person or by secure telehealth across California.",
};

// Local-business structured data (JSON-LD) so search engines understand this
// is a real psychologist practice in Santa Monica, CA. Invisible on the page;
// it just gives Google clean, structured facts (name, address, specialty).
const schema = {
  "@context": "https://schema.org",
  "@type": "Psychologist",
  name: "Dr. Maya Reynolds, PsyD",
  jobTitle: "Licensed Clinical Psychologist",
  description:
    "Licensed clinical psychologist in Santa Monica, CA offering anxiety, panic, trauma, EMDR, and burnout therapy for adults, in person or by secure telehealth across California.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123th Street 45 W",
    addressLocality: "Santa Monica",
    addressRegion: "CA",
    postalCode: "90401",
    addressCountry: "US",
  },
  areaServed: ["Santa Monica, CA", "California"],
  medicalSpecialty: ["Anxiety", "Panic Disorder", "Trauma", "EMDR", "Burnout"],
  availableService: [
    "Anxiety & Panic Therapy",
    "Trauma Therapy & EMDR",
    "Burnout & Perfectionism Therapy",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable} ${script.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-paper focus:p-3"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
