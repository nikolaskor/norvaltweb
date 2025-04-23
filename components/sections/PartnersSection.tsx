import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

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
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight text-center mb-4">
          Our Partner&apos;s Technologies
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12">
          We integrate with the best-in-class platforms you already use.
        </p>
        <div className="relative h-[100px] w-full overflow-hidden">
          <InfiniteSlider
            className="flex h-full w-full items-center"
            duration={40} // Slightly slower duration
            gap={64} // Increased gap
          >
            {logos.map((logo) => (
              <div
                key={logo.id}
                className="flex w-32 items-center justify-center"
              >
                <img
                  src={logo.image}
                  alt={logo.description}
                  className={logo.className}
                  // Add loading="lazy" for performance
                  loading="lazy"
                />
              </div>
            ))}
          </InfiniteSlider>
          <ProgressiveBlur
            className="pointer-events-none absolute top-0 left-0 h-full w-[150px] bg-gradient-to-r from-background to-transparent" // Use background color variable
            direction="left"
            blurIntensity={0.5} // Adjust blur intensity if needed
          />
          <ProgressiveBlur
            className="pointer-events-none absolute top-0 right-0 h-full w-[150px] bg-gradient-to-l from-background to-transparent" // Use background color variable
            direction="right"
            blurIntensity={0.5} // Adjust blur intensity if needed
          />
        </div>
      </div>
    </section>
  );
}
