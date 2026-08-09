import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Benefits from "@/components/Benefits";
import Offers from "@/components/Offers";
import HowItWorks from "@/components/HowItWorks";
import Schedule from "@/components/Schedule";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import Story from "@/components/Story";
import Faq from "@/components/Faq";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      {/* overHero: de balk staat transparant met lichte tekst boven de foto */}
      <Navbar overHero />
      <main id="hoofdinhoud">
        <Hero />
        <TrustStrip />
        <Benefits />
        <Offers />
        <HowItWorks />
        <Schedule />
        <Pricing />
        <Reviews />
        <Story />
        <Faq />
        <ContactSection />
      </main>
    </>
  );
}
