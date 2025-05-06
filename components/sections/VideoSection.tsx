import { ArrowRight } from "lucide-react";
import { HeroVideoDialog } from "@/components/ui/HeroVideoDialog";
import { Button } from "@/components/ui/button";

export function VideoSection() {
  return (
    <section className="py-12 md:py-16 lg:py-24 relative isolate bg-white">
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
          className="relative right-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-secondary to-primary opacity-20 sm:right-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      <div className="container px-4 md:px-6 relative z-[1]">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
            Se hvordan det fungerer
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 md:mb-4 text-secondary">
            Hvorfor velge AI?
          </h2>
          <p className="text-base/7 sm:text-lg/8 md:text-xl/8 text-muted-foreground px-4 md:px-0 max-w-2xl mx-auto">
            Se hvordan Norvalt hjelper norske bedrifter med å spare tid, kutte
            kostnader og bli mer konkurransedyktige gjennom skreddersydde
            AI-løsninger.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-8 md:mb-12 relative">
          <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 rounded-xl blur-lg opacity-50"></div>
          <HeroVideoDialog
            videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            thumbnailSrc="/images/automation-demo-thumbnail.jpg"
            thumbnailAlt="Norvalt Automation Demo"
            animationStyle="from-bottom"
            className="rounded-xl overflow-hidden shadow-xl relative z-[2]"
          />
        </div>

        <div className="text-center relative z-[1]">
          <Button
            size="lg"
            className="gap-2 w-full sm:w-auto shadow-sm hover:shadow-md"
          >
            Book en demo
            <ArrowRight className="h-4 w-4" />
          </Button>
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
    </section>
  );
}
