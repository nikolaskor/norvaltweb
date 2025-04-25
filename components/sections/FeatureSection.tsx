import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";
import { BentoCard, BentoGrid } from "@/components/ui/BentoGrid";

const features = [
  {
    Icon: FileTextIcon,
    name: "Save your files",
    description: "We automatically save your files as you type.",
    href: "/",
    cta: "Learn more",
    // Remember to add src attribute to the img tag or replace it
    background: (
      <img className="absolute -right-20 -top-20 opacity-60" alt="" />
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: InputIcon,
    name: "Full text search",
    description: "Search through all your files in one place.",
    href: "/",
    cta: "Learn more",
    // Remember to add src attribute to the img tag or replace it
    background: (
      <img className="absolute -right-20 -top-20 opacity-60" alt="" />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "Multilingual",
    description: "Supports 100+ languages and counting.",
    href: "/",
    cta: "Learn more",
    // Remember to add src attribute to the img tag or replace it
    background: (
      <img className="absolute -right-20 -top-20 opacity-60" alt="" />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: CalendarIcon,
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    href: "/",
    cta: "Learn more",
    // Remember to add src attribute to the img tag or replace it
    background: (
      <img className="absolute -right-20 -top-20 opacity-60" alt="" />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: BellIcon,
    name: "Notifications",
    description:
      "Get notified when someone shares a file or mentions you in a comment.",
    href: "/",
    cta: "Learn more",
    // Remember to add src attribute to the img tag or replace it
    background: (
      <img className="absolute -right-20 -top-20 opacity-60" alt="" />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

// Exporting as ServicesPreview to match the import in app/page.tsx
export function ServicesPreview() {
  return (
    <section className="py-16 md:py-24">
      {/* Added container and title for context */}
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Explore Our Features
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Discover how our platform can streamline your workflow and boost
            productivity.
          </p>
        </div>
        <BentoGrid className="lg:grid-rows-3 auto-rows-[22rem] lg:auto-rows-[unset]">
          {" "}
          {/* Adjusted grid rows */}
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
