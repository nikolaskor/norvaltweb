"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react"; // Assuming ChevronRight is available

export function CtaSection() {
  return (
    // Using py-16 and py-24 for responsive padding similar to other sections
    <section className="py-16 md:py-24 bg-[#F5F5F5]">
      {" "}
      {/* Match the main light background */}
      <div className="container mx-auto">
        {/* Use primary orange for the inner container */}
        <div className="relative overflow-hidden rounded-lg bg-primary px-6 sm:px-10 md:px-16 py-12 sm:py-16 md:py-20">
          {/* Optional: Add pattern here if defined */}
          {/* <div className="absolute inset-0 bg-pattern-dots opacity-10"></div> */}
          <div className="relative flex flex-col items-center text-center space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white max-w-[800px]">
              Klar til å transformere din bedrift med AI?
            </h2>
            <p className="text-white/90 text-base sm:text-lg max-w-[700px] leading-relaxed">
              Ta det første skrittet mot en mer effektiv og lønnsom fremtid.
              Bestill en gratis demo i dag og se hvordan våre AI-løsninger kan
              hjelpe din bedrift.
            </p>
            {/* Use flex-col on small screens, flex-row on sm+ */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-2 sm:pt-4 w-full max-w-lg">
              {" "}
              {/* Adjusted max-width */}
              <Link href="/kontakt" className="w-full sm:w-auto flex-1">
                {" "}
                {/* Allow buttons to grow */}
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 w-full font-medium"
                >
                  Bestill en gratis demo
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/kontakt" className="w-full sm:w-auto flex-1">
                {" "}
                {/* Allow buttons to grow */}
                <Button
                  size="lg"
                  variant="outline"
                  // Use white border and text for outline on dark background
                  className="border-white text-white hover:bg-white hover:text-primary w-full font-medium"
                >
                  Kontakt en ekspert
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <p className="text-white/80 text-sm pt-2">
              {" "}
              {/* Slightly more transparent text */}
              Det er 100% gratis og uforpliktende
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
