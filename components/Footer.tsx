import Link from "next/link";
import { Logo } from "./ui";

const NAVIGATE = [
  { label: "Home", href: "/" },
  { label: "About", href: "#how-we-work" },
  { label: "Our Office", href: "#our-office" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

const TEAM = ["Anxiety & Panic", "Trauma Therapy", "EMDR & Body-Based Work", "Burnout & Perfectionism"];

const HEADING = "t-label mb-4 text-ink lg:mb-[1.9vw]";
const ITEM = "text-[1rem] leading-[1.8] text-body lg:text-[clamp(0.95rem,1.38vw,1.05rem)]";

/*
  Mobile/tablet stacking order (confirmed from screenshot): intro -> Navigate
  -> Contact -> Our Team. Desktop keeps Navigate, Our Team, Contact left to
  right via explicit lg:col-start (order has no effect once placement is
  explicit, so the two breakpoints can disagree on order safely).
*/
export default function Footer() {
  return (
    <footer id="contact" className="bg-canvas">
      <div className="grid gap-12 px-[6.5%] py-14 sm:grid-cols-2 lg:grid-cols-[6.9%_25.8%_10.9%_15.4%_19.2%_1fr] lg:gap-0 lg:px-0 lg:pb-[4.7vw] lg:pt-[5.3vw]">
        <div className="order-1 lg:order-none lg:col-start-2">
          <Logo />
          <p className="t-body mt-6 max-w-[300px] lg:mt-[2.4vw] lg:max-w-none">
            Dr. Maya Reynolds, PsyD, is a licensed clinical psychologist. I offer anxiety and trauma therapy in person in Santa Monica and online for clients in California.
          </p>
        </div>

        <div className="order-2 lg:order-none lg:col-start-4 lg:pt-[1.2vw]">
          <h2 className={HEADING}>Navigate</h2>
          <ul>
            {NAVIGATE.map((n) => (
              <li key={n.label}>
                <Link href={n.href} className={`${ITEM} hover:text-primary`}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="order-4 lg:order-none lg:col-start-5 lg:pt-[1.2vw]">
          <h2 className={HEADING}>Specialties</h2>
          <ul>
            {TEAM.map((t) => (
              <li key={t}>
                <Link href="#specialties" className={`${ITEM} hover:text-primary`}>
                  {t}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="order-3 lg:order-none lg:col-start-6 lg:pt-[1.2vw]">
          <h2 className={HEADING}>Contact</h2>
          <address className={`${ITEM} not-italic`}>
            123th Street 45 W
            <br />
            Santa Monica, CA 90401
          </address>
          <p className={`${ITEM} mt-4 italic lg:mt-[1.6vw]`}>
            Serving Santa Monica &amp; clients across California online
          </p>
        </div>
      </div>

      <div className="bg-primary px-[6.5%] py-2.5 text-paper lg:pl-[6.9%]">
        <p className="text-[0.9rem] lg:text-[clamp(0.85rem,1.38vw,1.05rem)]">
          Terms | Privacy Policy | Disclaimer | Dr. Maya Reynolds, PsyD (fictional therapist)
        </p>
      </div>
    </footer>
  );
}
