import { ArrowRight } from "lucide-react";
import { HeroVideoDialog } from "@/components/ui/HeroVideoDialog";
import { Button } from "@/components/ui/button";

export function VideoSection() {
  return (
    <section className="py-12 md:py-16 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 md:mb-4">
            Hvorfor velge AI?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4 md:px-0">
            Se hvordan Norvalt hjelper norske bedrifter med å spare tid, kutte
            kostnader og bli mer konkurransedyktige gjennom skreddersydde
            AI-løsninger.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-8 md:mb-12">
          <HeroVideoDialog
            videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            thumbnailSrc="/images/automation-demo-thumbnail.jpg"
            thumbnailAlt="Norvalt Automation Demo"
            animationStyle="from-bottom"
            className="rounded-lg overflow-hidden"
          />
        </div>

        <div className="text-center">
          <Button size="lg" className="gap-2 w-full sm:w-auto">
            Book en demo
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
