import Image from "next/image";
import { Photo, PillLink, Script, TextLink, VideoBox } from "./ui";

/*
  One consistent spacing system for every section, matching HowWeWork
  ("A warm and caring approach to therapy.") and its side-by-side video:
  - WRAP: the same max width and side padding everywhere.
  - SECTION_Y: the same top/bottom breathing room everywhere.
  - TWO_COL: the same equal-width, gapped split for any text+photo section.
*/
const WRAP = "mx-auto max-w-[1200px] px-[6.5%] lg:px-[6%]";
const SECTION_Y = "py-16 lg:py-24";
const TWO_COL = "grid items-center gap-10 lg:grid-cols-2 lg:gap-[5vw]";

/* ------------------------------------------------------------------ Hero */
export function Hero() {
  return (
    <section className={`bg-canvas ${SECTION_Y}`}>
      <div className={`${WRAP} ${TWO_COL}`}>
        <div>
          <p className="t-label leading-[1.9] text-ink">
            In-person in Santa Monica
            <br />
            &amp; secure telehealth across CA
          </p>
          <h1 className="t-h1 mt-8">
            Anxiety &amp; trauma therapy in Santa Monica, CA to help you finally{" "}
            <Script>exhale</Script>.
          </h1>
          <p className="t-body mt-6">
            I'm Dr. Maya Reynolds, a licensed clinical psychologist. I help
            adults who feel worried, stressed, or worn out feel calm and steady
            again.
          </p>
          <div className="mt-8">
            <TextLink href="#schedule">Book a consultation</TextLink>
          </div>
        </div>
        <Photo
          src="/images/maya.jpg"
          alt="Dr. Maya Reynolds, PsyD, licensed clinical psychologist in Santa Monica"
          className="mx-auto aspect-[4/3] w-full lg:aspect-[3/4]"
          sizes="(min-width:1024px) 50vw, 100vw"
          pos="50% 18%"
        />
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- Intro */
export function Intro() {
  return (
    <section className={`bg-canvas ${SECTION_Y}`}>
      <div className={`${WRAP} ${TWO_COL}`}>
        <div>
          <h2 className="t-h2">You don't have to do this all alone.</h2>
          <p className="t-lead mt-8">
            I offer therapy in Santa Monica for adults who feel overwhelmed by
            anxiety, stress, or hurt from the past.
          </p>
          <p className="t-body mt-5">
            Many of my clients do well on the outside but feel tired, tense, and
            stuck in worry on the inside. They may have panic, trouble sleeping,
            or trouble relaxing.
          </p>
          <p className="t-body mt-5">
            If you are dealing with anxiety, panic, trauma, or burnout, therapy
            can be a place to slow down and feel safe. I see clients in person
            in Santa Monica and online across California.
          </p>
        </div>
        <Photo
          src="/images/hands.jpg"
          alt="Two people gently holding hands in support"
          className="mx-auto aspect-[4/3] w-full lg:aspect-[3/4]"
          sizes="(min-width:1024px) 50vw, 100vw"
        />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ Who we help */
const WHO = [
  {
    title: "Anxiety & Panic Therapy",
    pos: "72% 50%",
    img: "/images/cbt.jpg",
    alt: "A therapist taking notes while a client talks in a bright, calm room",
    text: "Do you worry all the time, overthink, or feel tense in your body? We use CBT, mindfulness, and body-based tools to help you feel calmer and sleep better.",
  },
  {
    title: "Trauma Therapy & EMDR",
    pos: "center",
    img: "/images/emdr.jpg",
    alt: "Therapist gently guiding a client through a body-based session",
    text: "I help adults heal from one painful event or from long-term hurt from childhood, relationships, or ongoing stress. We go at a safe, gentle pace, using EMDR.",
  },
  {
    title: "Burnout & Perfectionism",
    pos: "center",
    img: "/images/burnout.jpg",
    alt: "Woman rubbing her tired eyes at a desk, showing the exhaustion of burnout",
    text: "For entrepreneurs, creatives, and busy professionals who feel worn out and cut off from themselves. Therapy is a place to slow down and build a healthier way to live and work.",
  },
];

export function WhoWeHelp() {
  return (
    <section id="services" className={`bg-paper ${SECTION_Y}`}>
      <div className={WRAP}>
        <h2 className="t-h2">
          Therapy <Script>services</Script> in Santa Monica, CA
        </h2>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {WHO.map((w) => (
            <article key={w.title}>
              <Photo
                src={w.img}
                alt={w.alt}
                pos={w.pos}
                className="aspect-[293/372] w-full"
                sizes="(min-width:768px) 28vw, 100vw"
              />
              <h3 className="t-h3 mt-6">{w.title}</h3>
              <p className="t-body mt-4">{w.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Quote band */
export function QuoteBand() {
  return (
    <section
      className={`relative isolate overflow-hidden bg-accent text-canvas ${SECTION_Y}`}
    >
      <Image
        src="/images/thread.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover opacity-[0.14]"
      />
      <div className={WRAP}>
        <p className="t-h2 lg:max-w-[58vw]">
          Healing is not about pushing harder.{" "}
          <em className="font-light italic">
            It is about feeling safe, calm, and more like yourself again.
          </em>
        </p>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- Expertise */
const EXPERTISE_LEFT = [
  "Anxiety",
  "Panic attacks",
  "Trauma",
  "Childhood trauma",
  "Burnout",
  "Perfectionism",
];
const EXPERTISE_RIGHT = [
  "Chronic stress",
  "Overthinking",
  "Trouble sleeping",
  "Relationship struggles",
  "Low confidence",
  "…and more.",
];

function ExpertiseList({ items }: { items: string[] }) {
  return (
    <ul>
      {items.map((e) => (
        <li
          key={e}
          className="t-label border-b border-line py-4 text-ink last:border-b-0"
        >
          {e}
        </li>
      ))}
    </ul>
  );
}

export function Expertise() {
  return (
    <section className={`bg-lavender/40 ${SECTION_Y}`}>
      <div className={WRAP}>
        <h2 className="t-h2-sm mb-8">
          Areas of <Script block>expertise</Script>
        </h2>
        <div className="grid gap-x-10 sm:grid-cols-2">
          <ExpertiseList items={EXPERTISE_LEFT} />
          <ExpertiseList items={EXPERTISE_RIGHT} />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ How we work */
export function HowWeWork() {
  return (
    <section id="how-we-work" className={`bg-secondary ${SECTION_Y}`}>
      <div className={`${WRAP} ${TWO_COL}`}>
        <div>
          <p className="t-label text-ink">About Dr. Maya Reynolds, PsyD</p>
          <h2 className="t-h2 mt-8">A warm and caring approach to therapy.</h2>
          <p className="t-lead mt-8">
            I'm a licensed clinical psychologist in Santa Monica, California. I
            work with adults who feel overwhelmed by anxiety, stress, or hard
            things from the past.
          </p>
          <p className="t-body mt-5 text-ink">
            My sessions have a clear plan, with room to think and talk things
            through. I use CBT, EMDR, mindfulness, and body-based methods to
            help with your thoughts and with how stress feels in your body.
          </p>
          <p className="t-body mt-5 text-ink">
            Therapy works best when you feel respected, understood, and part of
            the process. My goal is more than feeling better for now. I want you
            to gain insight, build strength, and have a stronger relationship
            with yourself.
          </p>
          <div className="mt-10">
            <TextLink href="#our-office">See my Santa Monica office</TextLink>
          </div>
        </div>
        <VideoBox
          src="/videos/meditation.mp4"
          poster="/images/meditation-poster.jpg"
          className="mx-auto aspect-[4/3] w-full lg:aspect-[3/4]"
        />
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- Honoring */
export function Honoring() {
  return (
    <section className={`bg-paper ${SECTION_Y}`}>
      <div className={`${WRAP} ${TWO_COL}`}>
        <Photo
          src="/images/healing.jpg"
          alt="Illustration of lavender, mustard and orange flowers held by a bandage that says healing takes time"
          className="mx-auto aspect-[4/3] w-full lg:aspect-[3/4]"
          sizes="(min-width:1024px) 50vw, 100vw"
          pos="50% 45%"
        />
        <h2 className="t-h2">
          A grounded approach to <Script>healing</Script> in Santa Monica.
        </h2>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Specialties */
const SPECIALTIES = [
  {
    title: "Anxiety & Panic",
    text: "If you are always waiting for something to go wrong, we will work on the worry, the tension, and the sleepless nights. You will learn simple tools you can use every day.",
  },
  {
    title: "Trauma Therapy",
    text: "Whether it was one event or a pattern that started in childhood or in relationships, we go slowly. Safety comes first, so you feel steadier in daily life, not only in session.",
  },
  {
    title: "EMDR & Body-Based Work",
    text: "EMDR and body-based methods help calm your body's stress response, so you feel relief in your daily life and not just in sessions.",
  },
  {
    title: "Burnout & Perfectionism",
    text: "If you are always pushing and feel under a lot of pressure, therapy helps you slow down, reconnect with yourself, and find a healthier way to work and live.",
  },
];

export function Specialties() {
  return (
    <section id="specialties" className={`bg-paper ${SECTION_Y}`}>
      <div className={WRAP}>
        <h2 className="t-h2-sm mb-10">
          My <Script>specialties</Script> include&hellip;
        </h2>
        <div className="grid gap-10 sm:grid-cols-2">
          {SPECIALTIES.map((s) => (
            <article key={s.title} className="flex flex-col">
              <h3 className="t-h3">{s.title}</h3>
              <p className="t-body mt-4">{s.text}</p>
              <div className="mt-6">
                <TextLink href="#">Learn more</TextLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- Schedule */
export function Schedule() {
  return (
    <section id="schedule" className={`bg-blush/45 ${SECTION_Y}`}>
      <div className={`${WRAP} ${TWO_COL}`}>
        <div>
          <p className="t-label text-ink">Book a consultation</p>
          <h2 className="t-h2 mt-8">
            Anxiety &amp; trauma therapy that fits <Script>you</Script>.
          </h2>
          <p className="t-body mt-5">
            Reaching out is a big step. I want you to feel respected and
            understood. If you want a therapist who gives you real tools and
            goes deep, and who understands busy modern life, I may be a good
            fit.
          </p>
          <p className="t-body mt-4">
            I meet clients in person at my Santa Monica office and online for
            clients in California.
          </p>
          <div className="mt-6">
            <PillLink href="#contact">Book a session</PillLink>
          </div>
        </div>
        <Photo
          src="/images/candles.jpg"
          alt="Two lit candles on a wooden dock beside a calm green lake"
          className="mx-auto aspect-[4/3] w-full lg:aspect-[3/4]"
          sizes="(min-width:1024px) 50vw, 100vw"
          pos="50% 70%"
        />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Our Office */
export function OurOffice() {
  return (
    <section id="our-office" className={`bg-sky/70 ${SECTION_Y}`}>
      <div className={`${WRAP} ${TWO_COL}`}>
        <div>
          <p className="t-label text-ink">Our Office</p>
          <h2 className="t-h2 mt-8">
            A sanctuary for healing in <Script>Santa Monica</Script>.
          </h2>
          <p className="t-body mt-8">
            My office is a quiet, private space designed to feel calm and
            grounding, a place where you can drop your guard and speak freely.
          </p>
          <p className="t-body mt-5">
            Natural light and a comfortable, uncluttered environment help you
            settle in. If you prefer to meet from home, secure telehealth is
            available for clients located in California.
          </p>
          <blockquote className="mt-6 border-l-2 border-primary pl-4 text-[0.9rem] italic text-ink">
            Clients often share that the space itself helps them feel more at
            ease when they arrive.
          </blockquote>
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-[0.7rem] uppercase tracking-[0.15em] text-body">
            <span>123th Street 45 W, Santa Monica, CA 90401</span>
            <span>In-person sessions</span>
            <span>Secure telehealth (CA)</span>
          </div>
        </div>
        <div className="flex items-start justify-center gap-4">
          <Photo
            src="/images/office-1.jpg"
            alt="Sunlit therapy room with sofa, armchair and exposed brick"
            className="aspect-[3/4] w-[48%] rounded-t-full"
            sizes="(min-width:1024px) 25vw, 45vw"
          />
          <Photo
            src="/images/office-2.jpg"
            alt="Therapy office with olive tree, coastal art and bookshelves"
            className="mt-12 aspect-[3/4] w-[48%] rounded-b-full"
            sizes="(min-width:1024px) 25vw, 45vw"
          />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------- FAQs */
const FAQS = [
  [
    "What does therapy with Dr. Reynolds look like?",
    "Sessions have a clear plan, with room to think and talk things through. I use CBT, EMDR, mindfulness, and body-based methods.",
  ],
  [
    "Do you offer therapy in Santa Monica and online?",
    "Yes. I see clients in person at my Santa Monica office and online through secure telehealth for clients in California.",
  ],
  [
    "Who do you work with?",
    "Adults with anxiety, panic, trauma, burnout, and perfectionism, including many busy professionals, entrepreneurs, and creatives.",
  ],
  [
    "How do you help with trauma?",
    "We go at a safe, gentle pace. I work with one painful event or with long-term hurt from childhood, relationships, or ongoing stress, and we focus on helping you feel safe and steady in daily life.",
  ],
  [
    "What is the Santa Monica office like?",
    "It is a quiet, private space with natural light and a calm, uncluttered feel. The address is 123th Street 45 W, Santa Monica, CA 90401.",
  ],
];

export function Faqs() {
  return (
    <section id="faqs" className={`bg-canvas ${SECTION_Y}`}>
      <div className={`${WRAP} ${TWO_COL}`}>
        <Photo
          src="/images/daisies.jpg"
          alt="Daisies in a white pot, a warm drink and an open journal on a table beside the sea"
          className="mx-auto aspect-[4/3] w-full lg:aspect-[3/4]"
          sizes="(min-width:1024px) 50vw, 100vw"
          pos="50% 62%"
        />
        <div>
          <h2 className="t-h2 mb-8">Common Questions</h2>
          <div className="border-t border-ink/40">
            {FAQS.map(([q, a]) => (
              <details key={q} className="group border-b border-ink/25">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-heading text-lg text-ink transition-colors hover:bg-ink/5 [&::-webkit-details-marker]:hidden">
                  {q}
                  <span className="mr-4 inline-block text-2xl font-light leading-none text-primary transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="pb-5 pr-8 text-[0.95rem] leading-7 text-body">
                  {a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
