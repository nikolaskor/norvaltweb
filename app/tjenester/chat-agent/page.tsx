import { ServicePageLayout } from "@/components/layouts/ServicePageLayout";
import { Bot, Clock, Users, Zap, BarChart, MessageSquare } from "lucide-react";

export default function ChatAgentPage() {
  const benefits = [
    {
      title: "24/7 Kundeservice",
      description:
        "Vår AI-drevne chatbot er alltid tilgjengelig for å svare på kundehenvendelser, uansett tid på døgnet.",
      icon: <Clock className="w-6 h-6 text-primary" />,
    },
    {
      title: "Skalerbar Løsning",
      description:
        "Håndter hundrevis av samtaler samtidig uten å måtte øke bemanningen eller kostnadene.",
      icon: <Users className="w-6 h-6 text-primary" />,
    },
    {
      title: "Rask Implementering",
      description:
        "Kom i gang raskt med vår brukervennlige løsning som integreres sømløst med dine eksisterende systemer.",
      icon: <Zap className="w-6 h-6 text-primary" />,
    },
    {
      title: "Intelligent Læring",
      description:
        "Chatboten lærer kontinuerlig fra interaksjoner og blir stadig bedre til å håndtere kundehenvendelser.",
      icon: <Bot className="w-6 h-6 text-primary" />,
    },
    {
      title: "Detaljert Analyse",
      description:
        "Få innsikt i kundeinteraksjoner med omfattende rapporter og analyser.",
      icon: <BarChart className="w-6 h-6 text-primary" />,
    },
    {
      title: "Personlig Oppfølging",
      description:
        "Sømløs overgang til menneskelig kundeservice når situasjonen krever det.",
      icon: <MessageSquare className="w-6 h-6 text-primary" />,
    },
  ];

  const process = [
    {
      step: 1,
      title: "Behovsanalyse",
      description:
        "Vi kartlegger dine behov og tilpasser løsningen til din bedrift.",
    },
    {
      step: 2,
      title: "Tilpasning",
      description:
        "Vi skreddersyr chatboten med din bedrifts kunnskap og tone of voice.",
    },
    {
      step: 3,
      title: "Implementering",
      description:
        "Vi integrerer løsningen med dine eksisterende systemer og nettsider.",
    },
    {
      step: 4,
      title: "Optimalisering",
      description:
        "Kontinuerlig forbedring basert på faktisk kundeinteraksjon og tilbakemeldinger.",
    },
  ];

  const caseStudies = [
    {
      title: "Nettbutikk øker kundetilfredsheten",
      description:
        "En ledende nettbutikk implementerte vår chatbot og så umiddelbare resultater i kundetilfredshet og effektivitet.",
      metrics: [
        {
          label: "Reduksjon i ventetid",
          value: "85%",
        },
        {
          label: "Økt kundetilfredshet",
          value: "94%",
        },
      ],
    },
    {
      title: "Telekomselskap effektiviserer support",
      description:
        "Et stort telekomselskap automatiserte førstelinjesupport og frigjorde verdifull tid for kundeserviceteamet.",
      metrics: [
        {
          label: "Automatiserte henvendelser",
          value: "70%",
        },
        {
          label: "Kostnadsreduksjon",
          value: "45%",
        },
      ],
    },
  ];

  return (
    <ServicePageLayout
      title="Chat Agent for din bedrift"
      description="Intelligent kundeservice som svarer på spørsmål døgnet rundt. Våre chatbots håndterer kundehenvendelser effektivt og gir rask respons når kundene dine trenger det."
      benefits={benefits}
      process={process}
      caseStudies={caseStudies}
      ctaTitle="Klar for å automatisere kundeservice?"
      ctaDescription="La oss hjelpe deg med å implementere en intelligent chatbot som løfter kundeopplevelsen og effektiviserer kundeservice."
    />
  );
}
