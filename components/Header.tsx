"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo, PillLink } from "./ui";

const NAV = [
  { label: "About", href: "#how-we-work" },
  { label: "Services", href: "#services" },
  { label: "Specialties", href: "#specialties" },
  { label: "Our Office", href: "#our-office" },
  { label: "FAQs", href: "#faqs" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-canvas">
      <div className="flex h-[88px] items-center justify-between px-[6.5%] lg:h-[9.9vw] lg:max-h-[130px]">
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-[2.6vw] lg:flex">
          {NAV.map((n) => (
            <Link key={n.label} href={n.href} className="t-label-sm text-body hover:text-primary">
              {n.label}
            </Link>
          ))}
          <PillLink href="#contact">Contact</PillLink>
        </nav>

        <button
          className="p-2 text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-line px-[6.5%] pb-6 lg:hidden">
          <ul>
            {[...NAV, { label: "Contact", href: "#contact" }].map((n) => (
              <li key={n.label} className="border-b border-line">
                <Link
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="t-label-sm block py-4 text-ink"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
