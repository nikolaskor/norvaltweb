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
    <div className="w-full isolate">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex gap-4 md:gap-8 py-12 md:py-20 lg:py-40 items-center justify-center flex-col">
          <div>
            <Button
              variant="secondary"
              size="sm"
              className="gap-2 md:gap-4 text-sm md:text-base"
            >
              Register for a webinar{" "}
              <MoveRight className="w-3 h-3 md:w-4 md:h-4" />
            </Button>
          </div>
          <div className="flex gap-3 md:gap-4 flex-col max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl tracking-tighter text-center font-bold">
              <span className="text-primary">Vi hjelper deg å utforske</span>
              {/* Animated text span */}
              <span className="relative flex w-full justify-center overflow-hidden text-center pb-2 md:pb-4 pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold text-2xl sm:text-3xl md:text-5xl lg:text-6xl"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-center px-4 md:px-0">
              Oppdag hvordan AI kan forenkle hverdagen, kutte kostnader og
              hjelpe bedriften din med å vokse—helt uten teknisk stress.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto px-4 sm:px-0">
            <Button
              size="lg"
              className="gap-2 md:gap-4 w-full sm:w-auto"
              variant="outline"
            >
              Snakk med Norvalt AI <PhoneCall className="w-4 h-4" />
            </Button>
            <Button size="lg" className="gap-2 md:gap-4 w-full sm:w-auto">
              Book et møte <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
