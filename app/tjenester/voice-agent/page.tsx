import { ServicePageLayout } from "@/components/layouts/ServicePageLayout";
import { Mic, Phone, Brain, Zap, BarChart, Languages } from "lucide-react";

export default function VoiceAgentPage() {
  const benefits = [
    {
      title: "Naturlig Samtale",
      description:
        "Vår AI-drevne voice agent kommuniserer naturlig og forståelig med kundene dine.",
      icon: <Mic className="w-6 h-6 text-primary" />,
    },
    {
      title: "Flerspråklig Support",
      description:
        "Støtter flere språk og dialekter for å betjene et bredt spekter av kunder.",
      icon: <Languages className="w-6 h-6 text-primary" />,
    },
    {
      title: "Rask Responstid",
      description:
        "Ingen ventetid for kundene - voice agenten er alltid tilgjengelig.",
      icon: <Zap className="w-6 h-6 text-primary" />,
    },
    {
      title: "Intelligent Forståelse",
      description:
        "Avansert AI som forstår kontekst og kan håndtere komplekse henvendelser.",
      icon: <Brain className="w-6 h-6 text-primary" />,
    },
    {
      title: "Omfattende Analyse",
      description:
        "Detaljert innsikt i samtaler og kundeinteraksjoner for kontinuerlig forbedring.",
      icon: <BarChart className="w-6 h-6 text-primary" />,
    },
    {
      title: "Sømløs Integrasjon",
      description:
        "Integreres enkelt med eksisterende telefonsystemer og CRM-løsninger.",
      icon: <Phone className="w-6 h-6 text-primary" />,
    },
  ];

  const process = [
    {
      step: 1,
      title: "Kartlegging",
      description:
        "Vi analyserer dine behov og definerer hvordan voice agenten best kan støtte din virksomhet.",
    },
    {
      step: 2,
      title: "Tilpasning",
      description:
        "Vi tilpasser stemme, språk og respons for å matche din bedrifts identitet.",
    },
    {
      step: 3,
      title: "Oppsett",
      description:
        "Vi setter opp systemet og integrerer det med din eksisterende infrastruktur.",
    },
    {
      step: 4,
      title: "Forbedring",
      description:
        "Kontinuerlig optimalisering basert på faktiske samtaler og tilbakemeldinger.",
    },
  ];

  const caseStudies = [
    {
      title: "Forsikringsselskap automatiserer kundeservice",
      description:
        "Et ledende forsikringsselskap implementerte vår voice agent for å håndtere standard henvendelser og skademeldinger.",
      metrics: [
        {
          label: "Redusert ventetid",
          value: "90%",
        },
        {
          label: "Kundetilfredshet",
          value: "4.8/5",
        },
      ],
    },
    {
      title: "Bank effektiviserer kundeservice",
      description:
        "En stor bank automatiserte rutineoppgaver som saldosjekk og overføringer med vår voice agent.",
      metrics: [
        {
          label: "Automatiserte samtaler",
          value: "65%",
        },
        {
          label: "Kostnadsbesparelse",
          value: "40%",
        },
      ],
    },
  ];

  return (
    <ServicePageLayout
      title="Voice Agent som håndterer samtaler"
      description="Talebasert kundeservice som håndterer telefonsamtaler. Våre stemmestyrte agenter kan svare på henvendelser, booke avtaler og veilede kunder gjennom ulike prosesser."
      benefits={benefits}
      process={process}
      caseStudies={caseStudies}
      ctaTitle="Klar for å automatisere telefonservice?"
      ctaDescription="La oss hjelpe deg med å implementere en intelligent voice agent som effektiviserer kundeservice og øker kundetilfredsheten."
    />
  );
}
