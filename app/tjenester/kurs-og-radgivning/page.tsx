import { ServicePageLayout } from "@/components/layouts/ServicePageLayout";
import {
  BookOpen,
  Users,
  Target,
  Lightbulb,
  TrendingUp,
  Puzzle,
} from "lucide-react";

export default function CoursesConsultingPage() {
  const benefits = [
    {
      title: "Skreddersydd Opplæring",
      description:
        "Kurs og workshops tilpasset din bedrifts behov og kompetansenivå.",
      icon: <BookOpen className="w-6 h-6 text-primary" />,
    },
    {
      title: "Praktisk Tilnærming",
      description:
        "Hands-on erfaring med AI-verktøy og praktiske implementeringsstrategier.",
      icon: <Target className="w-6 h-6 text-primary" />,
    },
    {
      title: "Ekspertise",
      description: "Tilgang til erfarne AI-eksperter med bred bransjeerfaring.",
      icon: <Users className="w-6 h-6 text-primary" />,
    },
    {
      title: "Innovativ Tenkning",
      description:
        "Lær å identifisere og utnytte AI-muligheter i din virksomhet.",
      icon: <Lightbulb className="w-6 h-6 text-primary" />,
    },
    {
      title: "Målbar Fremgang",
      description:
        "Konkrete resultater og kompetanseheving som gir verdi for bedriften.",
      icon: <TrendingUp className="w-6 h-6 text-primary" />,
    },
    {
      title: "Strategisk Rådgivning",
      description:
        "Helhetlig støtte i å utvikle og implementere AI-strategier.",
      icon: <Puzzle className="w-6 h-6 text-primary" />,
    },
  ];

  const process = [
    {
      step: 1,
      title: "Behovskartlegging",
      description:
        "Vi kartlegger kompetansebehov og definerer målene for opplæringen.",
    },
    {
      step: 2,
      title: "Kursutvikling",
      description:
        "Vi utvikler skreddersydde kursopplegg og rådgivningsprogrammer.",
    },
    {
      step: 3,
      title: "Gjennomføring",
      description: "Vi leverer kurs og workshops med fokus på praktisk læring.",
    },
    {
      step: 4,
      title: "Oppfølging",
      description:
        "Vi sikrer at kunnskapen blir implementert og gir verdi i praksis.",
    },
  ];

  const caseStudies = [
    {
      title: "Digital transformasjon i finansbransjen",
      description:
        "Vi hjalp en bank med å implementere AI-løsninger og lære opp ansatte i ny teknologi.",
      metrics: [
        {
          label: "Ansatte kurset",
          value: "200+",
        },
        {
          label: "Økt produktivitet",
          value: "45%",
        },
      ],
    },
    {
      title: "AI-strategi for produksjonsbedrift",
      description:
        "Utviklet og implementerte AI-strategi for optimalisering av produksjonsprosesser.",
      metrics: [
        {
          label: "Kostnadsreduksjon",
          value: "30%",
        },
        {
          label: "Prosjekter igangsatt",
          value: "12",
        },
      ],
    },
  ];

  return (
    <ServicePageLayout
      badge={
        <Badge variant="default" size="lg">
          Kompetanseheving
        </Badge>
      }
      title="AI Kurs og Rådgivning"
      description="Få ekspertråd og praktisk opplæring i hvordan din bedrift kan utnytte AI-teknologi. Vi tilbyr skreddersydde kurs og strategisk rådgivning for å sikre vellykket implementering."
      benefits={benefits}
      process={process}
      caseStudies={caseStudies}
      ctaTitle="Ønsker du å styrke bedriftens AI-kompetanse?"
      ctaDescription="Kontakt oss for en uforpliktende prat om hvordan vi kan hjelpe din bedrift med å utnytte mulighetene innen AI."
    />
  );
}
