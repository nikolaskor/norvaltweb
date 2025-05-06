"use client";

import Image from "next/image";
import {
  PhoneCall,
  Mail,
  Users,
  Shield,
  Clock,
  Lightbulb,
  UserPlus,
} from "lucide-react";

const companyValues = [
  {
    name: "Innovasjon",
    description:
      "Vi søker konstant å utforske nye måter å forbedre teknologi på, og tør å utfordre status quo for å skape best mulig løsninger for våre kunder.",
    icon: Lightbulb,
  },
  {
    name: "Tillit",
    description:
      "Alt vi gjør er bygget på tillit. Vi leverer det vi lover, sikrer våre kunders data, og er transparente i vår kommunikasjon.",
    icon: Shield,
  },
  {
    name: "Effektivitet",
    description:
      "Vi verdsetter tid som en kostbar ressurs. Våre produkter er designet for å spare tid, og vi jobber selv etter prinsipper som maksimerer produktivitet.",
    icon: Clock,
  },
  {
    name: "Samarbeid",
    description:
      "Vi tror på partnerskap fremfor leverandørforhold. Ved å jobbe tett med våre kunder kan vi virkelig forstå deres behov og skape optimale løsninger.",
    icon: UserPlus,
  },
];

const teamMembers = [
  {
    name: "Nikolai Skor",
    role: "CEO and Founder",
    email: "nikolai@norvalt.no",
    imageUrl: "/images/team/placeholder-1.jpg",
  },
  {
    name: "Sebastian Bay",
    email: "sebastian@norvalt.no",
    role: "Head of Sales",
    imageUrl: "/images/team/placeholder-2.jpg",
  },
];

export default function AboutUs() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="max-w-xl">
              <p className="text-primary font-medium mb-4">Om oss</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-secondary tracking-tight mb-6">
                På oppdrag for å styrke norske bedrifter
              </h1>
              <p className="text-xl text-muted-foreground">
                Vi hjelper bedrifter å utnytte potensialet i AI og
                automatisering for å redusere kostnader, effektivisere arbeid,
                og muliggjøre innovasjon i en digital verden.
              </p>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 gap-6">
              <div className="grid grid-cols-2 gap-6 h-full">
                <div className="grid grid-rows-2 gap-6">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/images/hands-unrecognizable-female-doctor-writing-form-typing-laptop-keyboard.jpg"
                      alt="Doctor working on laptop"
                      width={500}
                      height={375}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/images/top-view-young-man-holding-laptop.jpg"
                      alt="Man working with laptop"
                      width={500}
                      height={375}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-md h-full">
                  <Image
                    src="/images/young-family-choosing-car-car-showroom.jpg"
                    alt="Family in business discussion"
                    width={500}
                    height={667}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Text Content */}
            <div className="max-w-xl">
              <p className="text-primary font-medium mb-4">Vår misjon</p>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary tracking-tight mb-6">
                Hvorfor vi eksisterer
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground">
                  Vi tror på at avansert teknologi bør være tilgjengelig for
                  alle bedrifter, uansett størrelse. Vår misjon er å forenkle
                  digitaliseringen for norske virksomheter, og gjøre AI til et
                  praktisk og nyttig verktøy i hverdagen.
                </p>
                <p className="text-lg text-muted-foreground">
                  Gjennom våre løsninger for automatisering og AI-assistanse,
                  hjelper vi bedrifter med å effektivisere arbeidsprosesser,
                  redusere manuelle oppgaver, og skape mer tid til verdiskapende
                  arbeid.
                </p>
                <p className="text-lg text-muted-foreground">
                  Vi jobber tett med våre kunder for å forstå deres utfordringer
                  og skape skreddersydde løsninger som gir umiddelbar verdi,
                  uten at det krever omfattende teknisk kompetanse.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-lg p-8">
              <div className="grid grid-cols-1 gap-12 md:gap-16">
                <div className="group">
                  <p className="text-5xl md:text-6xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors duration-300">
                    15+
                  </p>
                  <p className="text-xl text-muted-foreground">
                    Kunder i Norge
                  </p>
                </div>

                <div className="group">
                  <p className="text-5xl md:text-6xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors duration-300">
                    100+
                  </p>
                  <p className="text-xl text-muted-foreground">
                    Automatiserte prosesser
                  </p>
                </div>

                <div className="group">
                  <p className="text-5xl md:text-6xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors duration-300">
                    1000+
                  </p>
                  <p className="text-xl text-muted-foreground">
                    Timer spart for kunder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section beneath Mission */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full">
                <Image
                  src="/images/photo-1529156069898-49953e39b3ac.avif"
                  alt="Norvalt - Fremtidens arbeidsplass"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                  <div className="p-6 md:p-8 text-white">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">
                      Moderne løsninger for fremtidens utfordringer
                    </h3>
                    <p className="max-w-2xl text-white/90">
                      Vår teknologi hjelper bedrifter å navigere i en stadig mer
                      digitalisert verden.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:text-center mb-16">
            <p className="text-primary font-medium mb-3">Våre verdier</p>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary tracking-tight">
              Prinsipper som driver oss fremover
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Våre kjerneverdier definerer hvordan vi jobber, samhandler med
              våre kunder og utvikler teknologi. De er fundamentet for vår
              bedriftskultur og vår tilnærming til innovasjon.
            </p>
          </div>

          {/* Features Grid - Using styling similar to the service pages */}
          <div className="mx-auto max-w-6xl">
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 relative">
              {/* Decorative gradient blobs */}
              <div className="absolute -top-10 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-50 -z-10"></div>
              <div className="absolute -bottom-20 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-50 -z-10"></div>

              {companyValues.map((value, index) => (
                <div key={value.name} className="relative group">
                  <div className="absolute inset-px rounded-xl bg-white"></div>
                  <div className="relative h-full flex flex-col overflow-hidden rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="px-6 pt-6 pb-3">
                      <div className="flex items-center justify-center mb-4 lg:justify-start">
                        <div className="p-3 bg-primary/10 rounded-xl text-primary">
                          <value.icon className="w-6 h-6" />
                        </div>
                      </div>
                      <h3 className="mt-3 text-xl font-bold tracking-tight text-secondary max-lg:text-center">
                        {value.name}
                      </h3>
                      <p className="mt-3 text-base text-muted-foreground max-lg:text-center">
                        {value.description}
                      </p>
                    </div>

                    {/* Decorative background element */}
                    <div className="absolute bottom-0 right-0 p-4 text-primary/5 transform translate-y-1/4 translate-x-1/4">
                      <value.icon className="h-24 w-24" />
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-px rounded-xl shadow-sm ring-1 ring-black/5"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:text-center mb-16">
            <p className="text-primary font-medium mb-4">Vårt team</p>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary tracking-tight mb-6">
              Møt våre eksperter
            </h2>
            <p className="text-lg text-muted-foreground">
              Vi er en dynamisk gruppe av individer som er lidenskapelig opptatt
              av det vi gjør og dedikert til å levere de beste resultatene for
              våre kunder. Med ekspertise innen AI, automatisering og
              digitalisering, jobber vi sammen for å skape innovative løsninger.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto">
            {teamMembers.map((person) => (
              <div key={person.name} className="group">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-white border border-gray-100 shadow-lg mb-6">
                  {/* Fallback to color if image loading fails */}
                  <div className="absolute inset-0 bg-primary/5 flex items-center justify-center">
                    <span className="text-5xl font-bold text-primary/20">
                      {person.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <Image
                    alt={person.name}
                    src={person.imageUrl}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <h3 className="text-xl font-bold text-secondary mt-4">
                  {person.name}
                </h3>
                <p className="text-base text-primary mt-1 mb-3">
                  {person.role}
                </p>
                <div className="flex space-x-4">
                  <a
                    href={`mailto:${person.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`Email ${person.name}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`${person.name}'s Twitter`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`${person.name}'s LinkedIn`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
