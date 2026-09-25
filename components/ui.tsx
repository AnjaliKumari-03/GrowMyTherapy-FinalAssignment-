import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

/** The thin teal handwritten accent word used inside headings. */
export function Script({
  children,
  className = "",
  block = false,
}: {
  children: ReactNode;
  className?: string;
  block?: boolean;
}) {
  // Inline: zero line-height so the big script glyphs don't stretch the heading's line box.
  const mode = block ? "block leading-[1.15]" : "leading-[0]";
  return (
    <span className={`font-script text-[1.55em] text-primary ${mode} ${className}`}>
      {children}
    </span>
  );
}

/** Photo that fills whatever box you give it via className (height/aspect). Soft shadow + slow zoom on hover. */
export function Photo({
  src,
  alt,
  className = "",
  sizes = "100vw",
  pos = "center",
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  pos?: string;
}) {
  return (
    <div className={`group relative overflow-hidden shadow-[0_18px_40px_-16px_rgba(38,52,46,0.4)] transition-shadow duration-500 hover:shadow-[0_26px_50px_-16px_rgba(38,52,46,0.5)] ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        quality={95}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        style={{ objectPosition: pos }}
      />
    </div>
  );
}

/** Silent looping video that fills its box (same look as Photo). */
export function VideoBox({ src, poster, className = "" }: { src: string; poster: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden shadow-[0_18px_40px_-16px_rgba(38,52,46,0.4)] ${className}`}>
      <video className="absolute inset-0 h-full w-full object-cover" src={src} poster={poster} autoPlay muted loop playsInline preload="metadata" aria-hidden="true" />
    </div>
  );
}

/** Small uppercase link with a thin underline ("BOOK AN APPOINTMENT"). */
export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="t-label-sm inline-block border-b border-ink/70 pb-2 text-ink transition-colors hover:border-primary hover:text-primary"
    >
      {children}
    </Link>
  );
}

/** Oval outlined button ("CONTACT", "BOOK NOW"). */
export function PillLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="t-label-sm inline-block rounded-[50%] border border-ink/80 px-[1.9vw] py-[1.1vw] text-ink transition duration-300 hover:-translate-y-0.5 hover:bg-ink hover:text-canvas hover:shadow-md max-lg:px-6 max-lg:py-3.5"
    >
      {children}
    </Link>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`block leading-none ${className}`} aria-label="Dr. Maya Reynolds, PsyD">
      <span className="block font-heading text-[2.2rem] font-light tracking-tight text-ink lg:text-[clamp(2rem,3.6vw,3rem)]">
        Maya Reynolds
      </span>
      <span className="mt-1 block pl-[2%] text-[0.62rem] uppercase tracking-[0.42em] text-primary lg:text-[clamp(0.6rem,1.1vw,0.85rem)]">
        Clinical Psychology
      </span>
    </Link>
  );
}
