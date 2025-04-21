import { Marquee } from "@/components/ui/marquee";

const partners = [
  {
    name: "OpenAI",
    logo: "/logos/openai.svg",
  },
  {
    name: "Microsoft Azure",
    logo: "/logos/azure.svg",
  },
  {
    name: "Google Cloud",
    logo: "/logos/google-cloud.svg",
  },
  {
    name: "AWS",
    logo: "/logos/aws.svg",
  },
  {
    name: "IBM",
    logo: "/logos/ibm.svg",
  },
  {
    name: "NVIDIA",
    logo: "/logos/nvidia.svg",
  },
];

export function PartnersSection() {
  return (
    <section className="py-16 md:py-24 bg-background/50 relative">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-10 md:mb-12">
          Helping companies implement AI with our partner technology
        </h2>
      </div>
      <Marquee className="pb-16 md:pb-24" pauseOnHover speed={40}>
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="mx-10 md:mx-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all"
          >
            <div className="h-12 w-32 relative flex items-center">
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
