import { ArrowRight } from "lucide-react";
import { HeroVideoDialog } from "@/components/ui/HeroVideoDialog";
import { Button } from "@/components/ui/Button";

export function VideoSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            See How Our Automation Works
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Watch how Norvalt transforms manual processes into efficient,
            automated workflows that save time and reduce costs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <HeroVideoDialog
            videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            thumbnailSrc="/images/automation-demo-thumbnail.jpg"
            thumbnailAlt="Norvalt Automation Demo"
            animationStyle="from-bottom"
          />
        </div>

        <div className="text-center">
          <Button size="lg" className="gap-2">
            Schedule a Demo
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
