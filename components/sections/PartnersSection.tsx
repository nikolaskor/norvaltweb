import { InfiniteSlider } from "@/components/ui/InfiniteSlider";
import { ProgressiveBlur } from "@/components/ui/ProgressiveBlur";
import { cn } from "@/lib/utils";

// Placeholder logo data - replace with actual partner logos if available
const logos = [
  {
    id: "logo-2",
    description: "Figma",
    image: "https://www.shadcnblocks.com/images/block/logos/figma.svg",
    className: "h-7 w-auto",
  },
  {
    id: "logo-3",
    description: "Next.js",
    image: "https://www.shadcnblocks.com/images/block/logos/nextjs.svg",
    className: "h-7 w-auto",
  },
  {
    id: "logo-6",
    description: "Supabase",
    image: "https://www.shadcnblocks.com/images/block/logos/supabase.svg",
    className: "h-7 w-auto",
  },
  {
    id: "logo-8",
    description: "Vercel",
    image: "https://www.shadcnblocks.com/images/block/logos/vercel.svg",
    className: "h-7 w-auto",
  },
  // Add more logos as needed, repeating the structure
  {
    id: "logo-2-repeat",
    description: "Figma",
    image: "https://www.shadcnblocks.com/images/block/logos/figma.svg",
    className: "h-7 w-auto",
  },
  {
    id: "logo-3-repeat",
    description: "Next.js",
    image: "https://www.shadcnblocks.com/images/block/logos/nextjs.svg",
    className: "h-7 w-auto",
  },
  {
    id: "logo-6-repeat",
    description: "Supabase",
    image: "https://www.shadcnblocks.com/images/block/logos/supabase.svg",
    className: "h-7 w-auto",
  },
  {
    id: "logo-8-repeat",
    description: "Vercel",
    image: "https://www.shadcnblocks.com/images/block/logos/vercel.svg",
    className: "h-7 w-auto",
  },
];

export function PartnersSection() {
  return (
    <section className="py-12 md:py-16 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 md:mb-4">
            Teknologi du kan stole på
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4 md:px-0">
            Vi integrerer sømløst med ledende plattformer og verktøy, slik at du
            får en enklere arbeidshverdag fra dag én.
          </p>
        </div>

        <div className="relative h-[80px] sm:h-[100px] w-full overflow-hidden">
          <InfiniteSlider
            className="flex h-full w-full items-center"
            duration={40}
            gap={32}
          >
            {logos.map((logo) => (
              <div
                key={logo.id}
                className="flex w-24 sm:w-32 items-center justify-center"
              >
                <img
                  src={logo.image}
                  alt={logo.description}
                  className={cn(logo.className, "h-5 sm:h-7 w-auto")}
                  loading="lazy"
                />
              </div>
            ))}
          </InfiniteSlider>
          <ProgressiveBlur
            className="pointer-events-none absolute top-0 left-0 h-full w-[100px] sm:w-[150px] bg-gradient-to-r from-background to-transparent"
            direction="left"
            blurIntensity={0.5}
          />
          <ProgressiveBlur
            className="pointer-events-none absolute top-0 right-0 h-full w-[100px] sm:w-[150px] bg-gradient-to-l from-background to-transparent"
            direction="right"
            blurIntensity={0.5}
          />
        </div>
      </div>
    </section>
  );
}
