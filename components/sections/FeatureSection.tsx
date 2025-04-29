import { Feature108 } from "@/components/ui/NewFeatureBlock";
import { BookOpen, MessageSquare, Mic, Workflow } from "lucide-react";

// Exporting as ServicesPreview to match the import in app/page.tsx
export function FeatureSection() {
  const featureTabs = [
    {
      value: "chat-agent",
      icon: <MessageSquare className="h-5 w-5 shrink-0" />,
      label: "Chat Agent",
      content: {
        badge: "Intelligent kundeservice",
        title: "Chat Agent for din bedrift",
        description:
          "Intelligent kundeservice som svarer på spørsmål døgnet rundt. Våre chatbots håndterer kundehenvendelser effektivt og gir rask respons når kundene dine trenger det.",
        buttonText: "Book demo",
        imageSrc: "/images/chat-agent.jpg",
        imageAlt: "Chat Agent Dashboard",
      },
    },
    {
      value: "voice-agent",
      icon: <Mic className="h-5 w-5 shrink-0" />,
      label: "Voice Agent",
      content: {
        badge: "Talebasert kundeservice",
        title: "Voice Agent som håndterer samtaler",
        description:
          "Talebasert kundeservice som håndterer telefonsamtaler. Våre stemmestyrte agenter kan svare på henvendelser, booke avtaler og veilede kunder gjennom ulike prosesser.",
        buttonText: "Book demo",
        imageSrc: "/images/voice-agent.jpg",
        imageAlt: "Voice Agent System",
      },
    },
    {
      value: "workflow",
      icon: <Workflow className="h-5 w-5 shrink-0" />,
      label: "Workflow-automatisering",
      content: {
        badge: "Effektive arbeidsprosesser",
        title: "Automatiser rutineoppgaver",
        description:
          "Automatiser rutineoppgaver og effektiviser arbeidsprosesser. Våre automatiseringsløsninger skreddersys for din bedrift og integreres sømløst med eksisterende systemer.",
        buttonText: "Book demo",
        imageSrc: "/images/workflow-automation.jpg",
        imageAlt: "Workflow Automation",
      },
    },
    {
      value: "courses",
      icon: <BookOpen className="h-5 w-5 shrink-0" />,
      label: "Kurs & Rådgivning",
      content: {
        badge: "Kompetanseheving",
        title: "AI-kurs og rådgivning",
        description:
          "Øk kompetansen internt med skreddersydde AI-kurs og rådgivning. Vi hjelper din bedrift med å forstå og utnytte mulighetene som kunstig intelligens gir.",
        buttonText: "Book demo",
        imageSrc: "/images/courses-consulting.jpg",
        imageAlt: "AI Courses and Consulting",
      },
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <Feature108
          badge="Norvalt tjenester"
          heading="Utforsk våre tjenester"
          description="Oppdag hvordan Norvalt kan hjelpe din bedrift med å spare tid, redusere kostnader og forbedre kundeopplevelsen med våre AI-drevne løsninger."
          tabs={featureTabs}
        />
      </div>
    </section>
  );
}
