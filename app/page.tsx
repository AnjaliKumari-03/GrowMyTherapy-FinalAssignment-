import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Hero,
  Intro,
  WhoWeHelp,
  QuoteBand,
  Expertise,
  HowWeWork,
  Honoring,
  Specialties,
  Schedule,
  OurOffice,
  Faqs,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Intro />
        <WhoWeHelp />
        <QuoteBand />
        <Expertise />
        <HowWeWork />
        <Honoring />
        <Specialties />
        <OurOffice />
        <Faqs />
        <Schedule />
      </main>
      <Footer />
    </>
  );
}
