import { Hero } from "@/components/ui/animated-hero";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { ServicesPreview } from "@/components/sections/FeatureSection";
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

      {/* Services Preview */}
      <ServicesPreview />

      {/* Benefits Section */}
      <BenefitsSection />
    </>
  );
}
