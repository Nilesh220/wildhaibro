import { Hero } from "@/components/sections/Hero";
import { Ticker } from "@/components/sections/Ticker";
import { Manifesto } from "@/components/sections/Manifesto";
import { Games } from "@/components/sections/Games";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { TourDates } from "@/components/sections/TourDates";
import { Prizes } from "@/components/sections/Prizes";
import { FragranceRange } from "@/components/sections/FragranceRange";
import { RegistrationSection } from "@/components/sections/RegistrationSection";
import { WallOfWild } from "@/components/sections/WallOfWild";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import { StickyMobileCTA } from "@/components/brand/StickyMobileCTA";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-ink text-bone selection:bg-wild-orange selection:text-ink">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Ticker */}
      <Ticker />

      {/* 3. Manifesto */}
      <Manifesto />

      {/* 4. The Games */}
      <Games />

      {/* 5. How It Works */}
      <HowItWorks />

      {/* 6. The Tour */}
      <TourDates />

      {/* 7. What You Win */}
      <Prizes />

      {/* 8. The Fragrance Range */}
      <FragranceRange />

      {/* 9. Registration Form */}
      <RegistrationSection />

      {/* 10. Wall of the Wild */}
      <WallOfWild />

      {/* 11. FAQ */}
      <FAQ />

      {/* 12. Footer */}
      <Footer />

      {/* Sticky Mobile CTA */}
      <StickyMobileCTA />
    </main>
  );
}
