"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Layout, Pointer, Zap } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface TabContent {
  badge?: string;
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
}

interface Tab {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: TabContent;
}

interface Feature108Props {
  heading?: string;
  description?: string;
  tabs?: Tab[];
}

const Feature108 = ({
  heading = "A Collection of Components Built With Shadcn & Tailwind",
  description = "Join us to build flawless web solutions.",
  tabs = [
    {
      value: "tab-1",
      icon: <Zap className="h-auto w-4 shrink-0" />,
      label: "Boost Revenue",
      content: {
        title: "Make your site a true standout.",
        description:
          "Discover new web trends that help you craft sleek, highly functional sites that drive traffic and convert leads into customers.",
        buttonText: "See Plans",
        imageSrc:
          "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
        imageAlt: "placeholder",
      },
    },
    {
      value: "tab-2",
      icon: <Pointer className="h-auto w-4 shrink-0" />,
      label: "Higher Engagement",
      content: {
        title: "Boost your site with top-tier design.",
        description:
          "Use stellar design to easily engage users and strengthen their loyalty. Create a seamless experience that keeps them coming back for more.",
        buttonText: "See Tools",
        imageSrc:
          "https://shadcnblocks.com/images/block/placeholder-dark-2.svg",
        imageAlt: "placeholder",
      },
    },
    {
      value: "tab-3",
      icon: <Layout className="h-auto w-4 shrink-0" />,
      label: "Stunning Layouts",
      content: {
        title: "Build an advanced web experience.",
        description:
          "Lift your brand with modern tech that grabs attention and drives action. Create a digital experience that stands out from the crowd.",
        buttonText: "See Options",
        imageSrc:
          "https://shadcnblocks.com/images/block/placeholder-dark-3.svg",
        imageAlt: "placeholder",
      },
    },
  ],
}: Feature108Props) => {
  return (
    <section className="py-8 md:py-12 lg:py-16">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-3 md:gap-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 md:mb-4 max-w-3xl text-secondary">
            {heading}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl px-4 md:px-0">
            {description}
          </p>
        </div>
        <Tabs defaultValue={tabs[0].value} className="mt-8 md:mt-12 lg:mt-16">
          <TabsList className="container flex flex-col items-center justify-center gap-2 sm:gap-4 sm:flex-row md:gap-6 lg:gap-10 overflow-x-auto pb-2">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-2 rounded-xl px-3 py-2 md:px-4 md:py-3 text-xs sm:text-sm font-semibold text-secondary data-[state=active]:bg-primary/10 data-[state=active]:text-primary shadow-sm hover:shadow-md transition-all duration-300 ease-in-out whitespace-nowrap border border-transparent data-[state=active]:border-primary/20"
              >
                {tab.icon} {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="mx-auto mt-6 md:mt-8 max-w-screen-xl rounded-2xl bg-white shadow-lg p-4 sm:p-6 lg:p-10">
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="grid place-items-center outline-none"
                tabIndex={-1}
              >
                <div className="grid place-items-center gap-8 md:gap-12 w-full lg:grid-cols-2 lg:gap-16">
                  <div className="flex flex-col gap-3 md:gap-5 max-w-xl">
                    {tab.content.badge && (
                      <div className="inline-flex items-center self-start rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                        {tab.content.badge}
                      </div>
                    )}
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-secondary">
                      {tab.content.title}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                      {tab.content.description}
                    </p>
                    <div>
                      <Button
                        className="mt-2 md:mt-4 w-full sm:w-fit gap-2"
                        size="lg"
                      >
                        {tab.content.buttonText}
                      </Button>
                    </div>
                  </div>
                  <div className="w-full mt-6 lg:mt-0 relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 rounded-xl blur-lg opacity-50"></div>
                    <div className="aspect-[4/3] w-full max-w-xl mx-auto lg:max-w-none overflow-hidden rounded-xl shadow-lg relative z-10">
                      <img
                        src={tab.content.imageSrc}
                        alt={tab.content.imageAlt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export { Feature108 };
