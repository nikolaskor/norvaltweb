import { Hero } from "@/components/ui/AnimatedHero";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { VideoSection } from "@/components/sections/VideoSection";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Partners Section */}
      <PartnersSection />

      {/* Video Section */}
      <VideoSection />

      {/* Features Preview */}
      <FeatureSection />

      {/* Benefits Section */}
      <BenefitsSection />
    </>
  );
}
