"use client";

import { Hero } from "@/components/ui/AnimatedHero";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import dynamic from "next/dynamic";

const VideoSection = dynamic(
  () =>
    import("@/components/sections/VideoSection").then((m) => m.VideoSection),
  { ssr: false }
);
const FeatureSection = dynamic(
  () =>
    import("@/components/sections/FeatureSection").then(
      (m) => m.FeatureSection
    ),
  { ssr: false }
);

export default function HomeClient() {
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
    </>
  );
}
