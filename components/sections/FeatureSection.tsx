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
    <section className="py-12 md:py-16 lg:py-24 bg-background relative isolate">
      {/* Right-side gradient decoration */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 -z-10 transform-gpu overflow-hidden w-[40%] blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary/40 to-secondary/40 opacity-20 sm:w-[72.1875rem]"
        />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <Feature108
          heading="Utforsk våre tjenester"
          description="Oppdag hvordan Norvalt kan hjelpe din bedrift med å spare tid, redusere kostnader og forbedre kundeopplevelsen med våre AI-drevne løsninger."
          tabs={featureTabs}
        />
      </div>

      {/* Left-side gradient decoration */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 -z-10 transform-gpu overflow-hidden w-[40%] blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative right-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] translate-x-1/2 rotate-180 bg-gradient-to-tr from-secondary/40 to-primary/40 opacity-20 sm:w-[72.1875rem]"
        />
      </div>
    </section>
  );
}
