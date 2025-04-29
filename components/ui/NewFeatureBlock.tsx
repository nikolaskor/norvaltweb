"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Layout, Pointer, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";

interface TabContent {
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
    <section className="py-8 md:py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-3 md:gap-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 md:mb-4 max-w-3xl">
            {heading}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl px-4 md:px-0">
            {description}
          </p>
        </div>
        <Tabs defaultValue={tabs[0].value} className="mt-8 md:mt-12">
          <TabsList className="container flex flex-col items-center justify-center gap-2 sm:gap-4 sm:flex-row md:gap-6 lg:gap-10 overflow-x-auto pb-2">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-2 rounded-xl px-3 py-2 md:px-4 md:py-3 text-xs sm:text-sm font-semibold text-muted-foreground data-[state=active]:bg-muted data-[state=active]:text-primary transition-all duration-300 ease-in-out whitespace-nowrap"
              >
                {tab.icon} {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="mx-auto mt-6 md:mt-8 max-w-screen-xl rounded-2xl bg-muted/70 p-4 sm:p-6 lg:p-16">
            <AnimatePresence mode="wait">
              {tabs.map((tab) => (
                <TabsContent
                  key={tab.value}
                  value={tab.value}
                  className="grid place-items-center outline-none"
                  tabIndex={-1}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                    }}
                    className="grid place-items-center gap-8 md:gap-12 lg:gap-20 w-full lg:grid-cols-2 lg:gap-10"
                  >
                    <div className="flex flex-col gap-3 md:gap-5">
                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight"
                      >
                        {tab.content.title}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.3 }}
                        className="text-sm sm:text-base md:text-lg text-muted-foreground"
                      >
                        {tab.content.description}
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                      >
                        <Button
                          className="mt-2 md:mt-2.5 w-full sm:w-fit gap-2"
                          size="lg"
                        >
                          {tab.content.buttonText}
                        </Button>
                      </motion.div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                      className="w-full mt-6 md:mt-0"
                    >
                      <img
                        src={tab.content.imageSrc}
                        alt={tab.content.imageAlt}
                        className="rounded-xl w-full h-auto object-cover"
                      />
                    </motion.div>
                  </motion.div>
                </TabsContent>
              ))}
            </AnimatePresence>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export { Feature108 };
