import { Bot, Workflow, Code, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  {
    title: "AI Chat Agents",
    description:
      "24/7 customer support and sales automation with intelligent chatbots that understand your business.",
    icon: MessageSquare,
    href: "/services/chat-agents",
  },
  {
    title: "Workflow Automation",
    description:
      "Streamline your business processes with smart workflows that reduce manual work and errors.",
    icon: Workflow,
    href: "/services/workflow-automation",
  },
  {
    title: "Custom AI Solutions",
    description:
      "Tailored AI solutions designed specifically for your business needs and industry requirements.",
    icon: Bot,
    href: "/services/custom-ai",
  },
  {
    title: "Web & App Development",
    description:
      "Modern, AI-powered web and mobile applications that help you serve customers better.",
    icon: Code,
    href: "/services/development",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            AI-Powered Solutions for Every Business Need
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            From customer service to process automation, we help SMBs leverage
            the power of AI to transform their operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative overflow-hidden rounded-lg border bg-background p-6 md:p-8 hover:shadow-lg transition-all flex flex-col h-full"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
              </div>
              <p className="text-muted-foreground mb-6 flex-grow">
                {service.description}
              </p>
              <Button
                variant="link"
                className="p-0 h-auto text-primary justify-start gap-1 self-start"
              >
                Learn more
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
