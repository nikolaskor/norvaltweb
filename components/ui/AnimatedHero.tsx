"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["AI Agenter", "Automatisering", "Kunstig Intelligens"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 1500);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full relative isolate bg-white min-h-[80vh] flex items-center">
      {/* Top gradient decoration */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 w-full">
        <div className="flex gap-4 md:gap-8 py-8 md:py-12 items-center justify-center flex-col">
          <div>
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-secondary ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              <span>New feature</span>{" "}
              <a href="#features" className="font-semibold text-primary">
                <span aria-hidden="true" className="absolute inset-0" />
                Learn more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="flex gap-3 md:gap-4 flex-col max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl tracking-tight text-center font-bold">
              <span className="text-primary whitespace-nowrap">
                Vi hjelper deg å utforske
              </span>
              {/* Animated text span */}
              <span className="relative flex w-full justify-center overflow-hidden text-center pb-2 md:pb-4 pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-secondary"
                    initial={{ opacity: 0, y: "-100%" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: "0%",
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? "-150%" : "150%",
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-base/7 sm:text-lg/8 md:text-xl/8 text-muted-foreground text-center px-4 md:px-0 max-w-2xl mx-auto">
              Oppdag hvordan AI kan forenkle hverdagen, kutte kostnader og
              hjelpe bedriften din med å vokse—helt uten teknisk stress.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto px-4 sm:px-0 mt-2 md:mt-4">
            <Button
              size="lg"
              className="gap-2 md:gap-4 w-full sm:w-auto shadow-sm hover:shadow-md"
              variant="outline"
            >
              Snakk med Norvalt AI <PhoneCall className="w-4 h-4" />
            </Button>
            <Button
              size="lg"
              className="gap-2 md:gap-4 w-full sm:w-auto shadow-sm hover:shadow-md"
            >
              Book et møte <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient decoration */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-secondary opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
  );
}

export { Hero };
