"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import {
  IconClock,
  IconCoin,
  IconZoomMoney,
  IconChartLine,
} from "@tabler/icons-react";

const benefits = [
  {
    title: "Spar tid",
    description:
      "Automatiser gjentagende oppgaver og prosesser, og frigjør tid til strategiske initiativer som driver forretningsmessig vekst.",
    icon: <IconClock className="h-6 w-6 stroke-primary" />,
  },
  {
    title: "Reduser kostnader",
    description:
      "Kutt driftskostnader med opptil 40% med AI-drevet automatisering som effektiviserer forretningsprosessene dine.",
    icon: <IconCoin className="h-6 w-6 stroke-primary" />,
  },
  {
    title: "Øk effektiviteten",
    description:
      "Implementer smarte arbeidsflyter som eliminerer manuelle feil og akselererer forretningsdriften din.",
    icon: <IconZoomMoney className="h-6 w-6 stroke-primary" />,
  },
  {
    title: "Driv vekst",
    description:
      "Skaler virksomheten din uanstrengt med automatisering som vokser i takt med bedriftens behov.",
    icon: <IconChartLine className="h-6 w-6 stroke-primary" />,
  },
];

export function BenefitsSection() {
  return (
    <section className="py-12 md:py-16 lg:py-32 bg-gradient-to-b from-white to-slate-50/80 dark:from-gray-950 dark:to-gray-900 overflow-hidden">
      <div className="container px-4 md:px-6 relative">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-3xl opacity-30" />
          <div className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-3xl opacity-20" />
        </div>

        <div className="relative">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-8 md:mb-12 lg:mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 md:mb-4">
              Transformer bedriften din med AI-automatisering
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4 md:px-0">
              Bli med hundrevis av SMB-er som har revolusjonert driften sin med
              Norvalts AI-drevne automatiseringsløsninger.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative z-10 rounded-2xl overflow-hidden bg-background/50 backdrop-blur-sm border border-muted mb-8 md:mb-16"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
              {benefits.map((benefit, index) => (
                <FeatureItem key={benefit.title} {...benefit} index={index} />
              ))}
            </div>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              size="lg"
              className="gap-2 w-full sm:w-auto shadow-lg hover:shadow-xl transition-shadow"
            >
              Start automatisering i dag
              <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const FeatureItem = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "flex flex-col py-6 md:py-10 relative group/feature border-slate-200 dark:border-slate-800",
        "hover:bg-gradient-to-b hover:from-white/5 hover:to-white/0 dark:hover:from-white/5 dark:hover:to-transparent transition-colors duration-300",
        (index === 0 || index === 4) && "lg:border-l",
        index !== 3 && index !== 7 && "lg:border-r",
        index < 4 && "lg:border-b"
      )}
    >
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-500 absolute inset-0 h-full w-full">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      </div>

      <div className="mb-4 md:mb-6 relative z-10 px-6 md:px-10">
        <div className="bg-primary/10 p-2 md:p-3 rounded-xl inline-flex items-center justify-center dark:bg-primary/20 transition-transform duration-300 group-hover/feature:scale-110 group-hover/feature:bg-primary/20 dark:group-hover/feature:bg-primary/30">
          {icon}
        </div>
      </div>

      <div className="text-base md:text-lg font-bold mb-2 relative z-10 px-6 md:px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-primary/30 dark:bg-primary/40 group-hover/feature:bg-primary transition-all duration-300 origin-left" />
        <span className="group-hover/feature:translate-x-2 transition duration-300 inline-block text-gray-900 dark:text-white">
          {title}
        </span>
      </div>

      <p className="text-sm md:text-base text-muted-foreground relative z-10 px-6 md:px-10 transition-all duration-300 group-hover/feature:text-gray-700 dark:group-hover/feature:text-gray-300">
        {description}
      </p>
    </motion.div>
  );
};
