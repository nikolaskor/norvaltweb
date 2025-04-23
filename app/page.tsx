import { Hero } from "@/components/ui/animated-hero";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { ServicesPreview } from "@/components/sections/FeatureSection";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Partners Section */}
      <PartnersSection />

      {/* Services Preview */}
      <ServicesPreview />

      {/* Benefits Section */}
      <BenefitsSection />
    </>
  );
}

const features = [
  {
    title: "AI-Powered Solutions",
    description:
      "Leverage cutting-edge artificial intelligence to automate complex tasks and workflows.",
  },
  {
    title: "Cost-Effective",
    description:
      "Reduce operational costs and improve efficiency with our scalable automation solutions.",
  },
  {
    title: "Expert Support",
    description:
      "Get dedicated support from our team of automation experts throughout your journey.",
  },
];
