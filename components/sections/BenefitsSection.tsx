import { ArrowRight, Clock, DollarSign, LineChart, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";

const benefits = [
  {
    title: "Save Time",
    description:
      "Automate repetitive tasks and workflows, freeing up your team to focus on strategic initiatives that drive business growth.",
    icon: Clock,
  },
  {
    title: "Reduce Costs",
    description:
      "Cut operational expenses by up to 40% with AI-powered automation that streamlines your business processes.",
    icon: DollarSign,
  },
  {
    title: "Boost Efficiency",
    description:
      "Implement smart workflows that eliminate manual errors and accelerate your business operations.",
    icon: Zap,
  },
  {
    title: "Drive Growth",
    description:
      "Scale your operations effortlessly with automation that grows with your business needs.",
    icon: LineChart,
  },
];

export function BenefitsSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50/50">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Transform Your Business with AI Automation
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Join hundreds of SMBs who have revolutionized their operations with
            Norvalt's AI-powered automation solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="relative group overflow-hidden rounded-lg border bg-background p-6 hover:shadow-lg transition-all"
            >
              <div className="mb-4">
                <benefit.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="gap-2">
            Start Automating Today
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
