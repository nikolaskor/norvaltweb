import { InfiniteSlider } from "@/components/ui/InfiniteSlider";
import { ProgressiveBlur } from "@/components/ui/ProgressiveBlur";
import { cn } from "@/lib/utils";

// Placeholder logo data - replace with actual partner logos if available
const logos = [
  { id: "aws", description: "AWS", image: "/partners%20logos/aws.png" },
  {
    id: "voiceflow",
    description: "Voiceflow",
    image: "/partners%20logos/Voiceflow Logo.png",
  },
  { id: "n8n", description: "N8n", image: "/partners%20logos/N8n Logo.png" },
  {
    id: "ellevenlabs",
    description: "Ellevenlabs",
    image: "/partners%20logos/Ellevenlabs Logo.svg",
  },
  {
    id: "gemini",
    description: "Gemini",
    image: "/partners%20logos/Gemini Logo.png",
  },
  {
    id: "make",
    description: "Make",
    image: "/partners%20logos/Make Logo RGB.webp",
  },
  {
    id: "airtable",
    description: "Airtable",
    image: "/partners%20logos/Airtable Logo.png",
  },
  {
    id: "chatgpt",
    description: "ChatGPT",
    image: "/partners%20logos/ChatGPT Logo (1).png",
  },
];

export function PartnersSection() {
  return (
    <section className="py-12 md:py-16 lg:py-24 relative isolate bg-white">
      {/* Gradient decoration */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl opacity-30"
      >
        <div
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 75%, 75% 100%, 0% 100%)",
          }}
          className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-br from-primary/20 via-background to-secondary/20"
        />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
            Integrasjoner
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 md:mb-4 text-secondary">
            Teknologi du kan stole på
          </h2>
          <p className="text-base/7 sm:text-lg/8 md:text-xl/8 text-muted-foreground px-4 md:px-0 max-w-2xl mx-auto">
            Vi integrerer sømløst med ledende plattformer og verktøy, slik at du
            får en enklere arbeidshverdag fra dag én.
          </p>
        </div>

        <div className="relative h-[80px] sm:h-[100px] w-[90%] mx-auto overflow-hidden rounded-xl shadow-md bg-white/50 backdrop-blur-sm p-2">
          <InfiniteSlider
            className="flex h-full w-full items-center"
            duration={40}
            gap={32}
          >
            {logos.map((logo) => (
              <div
                key={logo.id}
                className="flex h-10 w-24 items-center justify-center px-2 sm:px-4"
              >
                <img
                  src={logo.image}
                  alt={logo.description}
                  className="max-h-full max-w-[120%] object-contain opacity-80 hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              </div>
            ))}
          </InfiniteSlider>
          <ProgressiveBlur
            className="pointer-events-none absolute top-0 left-0 h-full w-[100px] sm:w-[150px] bg-gradient-to-r from-white to-transparent"
            direction="left"
            blurIntensity={0.5}
          />
          <ProgressiveBlur
            className="pointer-events-none absolute top-0 right-0 h-full w-[100px] sm:w-[150px] bg-gradient-to-l from-white to-transparent"
            direction="right"
            blurIntensity={0.5}
          />
        </div>
      </div>
    </section>
  );
}
