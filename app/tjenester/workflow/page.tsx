import { ServicePageLayout } from "@/components/layouts/ServicePageLayout";
import { Workflow, Timer, Repeat, Zap, LineChart, Shield } from "lucide-react";

export default function WorkflowPage() {
  const benefits = [
    {
      title: "Tidsbesparende",
      description:
        "Automatiser repetitive oppgaver og frigjør verdifull tid for dine ansatte.",
      icon: <Timer className="w-6 h-6 text-primary" />,
    },
    {
      title: "Feilfri Utførelse",
      description:
        "Eliminer menneskelige feil og sikre konsistent kvalitet i alle prosesser.",
      icon: <Shield className="w-6 h-6 text-primary" />,
    },
    {
      title: "Rask Implementering",
      description:
        "Kom raskt i gang med brukervennlige løsninger som er enkle å sette opp.",
      icon: <Zap className="w-6 h-6 text-primary" />,
    },
    {
      title: "Skalerbar Automatisering",
      description:
        "Utvid og tilpass automatiseringen etter hvert som virksomheten vokser.",
      icon: <Workflow className="w-6 h-6 text-primary" />,
    },
    {
      title: "Målbar ROI",
      description:
        "Se konkrete resultater og målbar avkastning på investeringen.",
      icon: <LineChart className="w-6 h-6 text-primary" />,
    },
    {
      title: "Kontinuerlig Forbedring",
      description:
        "Optimaliser prosesser basert på data og faktisk bruk over tid.",
      icon: <Repeat className="w-6 h-6 text-primary" />,
    },
  ];

  const process = [
    {
      step: 1,
      title: "Prosessanalyse",
      description:
        "Vi kartlegger dine arbeidsprosesser og identifiserer automatiseringsmuligheter.",
    },
    {
      step: 2,
      title: "Løsningsdesign",
      description:
        "Vi designer en skreddersydd automatiseringsløsning for din bedrift.",
    },
    {
      step: 3,
      title: "Implementering",
      description:
        "Vi setter opp og integrerer automatiseringsløsningen i din virksomhet.",
    },
    {
      step: 4,
      title: "Optimalisering",
      description:
        "Vi følger opp og justerer løsningen basert på resultater og tilbakemeldinger.",
    },
  ];

  const caseStudies = [
    {
      title: "Regnskapsbyrå effektiviserer prosesser",
      description:
        "Et mellomstort regnskapsbyrå automatiserte fakturahåndtering og bokføring med vår workflow-løsning.",
      metrics: [
        {
          label: "Tidsbesparelse",
          value: "75%",
        },
        {
          label: "ROI første år",
          value: "320%",
        },
      ],
    },
    {
      title: "Logistikkselskap optimaliserer drift",
      description:
        "En logistikkbedrift implementerte automatisert ordrehåndtering og ruteplanlegging.",
      metrics: [
        {
          label: "Økt effektivitet",
          value: "60%",
        },
        {
          label: "Reduserte feil",
          value: "90%",
        },
      ],
    },
  ];

  return (
    <ServicePageLayout
      title="Automatiser rutineoppgaver"
      description="Automatiser rutineoppgaver og effektiviser arbeidsprosesser. Våre automatiseringsløsninger skreddersys for din bedrift og integreres sømløst med eksisterende systemer."
      heroImage="/images/services/workflow-hero.jpg"
      benefits={benefits}
      process={process}
      caseStudies={caseStudies}
      ctaTitle="Klar for å automatisere arbeidsprosessene?"
      ctaDescription="La oss hjelpe deg med å identifisere og implementere automatiseringsløsninger som gir merkbar effekt på bunnlinjen."
    />
  );
}
