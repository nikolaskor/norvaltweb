"use client";

import React from "react";
import { Section, SectionHeading, Grid, FadeIn } from "@/components/ui/Section";
import { Card, CardHeader } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  Bot,
  Clock,
  Users,
  MessageSquare,
  Globe,
  Palette,
  ArrowUpCircle,
  LineChart,
  BookOpen,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import { ServiceHero } from "@/components/ui/ServiceHero";

export default function ChatAgentPage() {
  const features = [
    {
      name: "Human-like Conversations",
      description:
        "Our AI chat agent engages in natural, context-aware conversations that make customers feel understood and valued.",
      icon: MessageSquare,
    },
    {
      name: "Custom Knowledge Base",
      description:
        "Trained specifically on your business data, documentation, and FAQs to provide accurate, company-specific responses.",
      icon: BookOpen,
    },
    {
      name: "24/7 Availability",
      description:
        "Never miss a customer inquiry with round-the-clock automated responses that convert even when your team is offline.",
      icon: Clock,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <ServiceHero
        title="AI Chat Agent for Smarter Customer Conversations"
        description="Norvalt's AI Chat Agent answers customer inquiries 24/7 — instantly, intelligently, and in your brand's tone."
        primaryAction={{ text: "Get a Free Demo" }}
        secondaryAction={{ text: "Book a Call" }}
        badge={{
          text: "New feature",
          linkText: "Learn more",
          href: "#features",
        }}
      />

      {/* Feature Overview */}
      <Section className="overflow-hidden bg-white py-12 md:py-16 lg:py-24">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-12 px-4 sm:px-6 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-primary">
                AI-powered assistance
              </h2>
              <p className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-pretty text-secondary">
                Meet Your New AI Chat Agent
              </p>
              <p className="mt-4 md:mt-6 text-base/7 sm:text-lg/8 text-muted-foreground">
                Norvalt's AI Chat Agent understands customer questions, responds
                naturally, and guides visitors to the right place — whether it's
                booking, buying, or getting help.
              </p>
              <dl className="mt-8 md:mt-10 max-w-xl space-y-6 md:space-y-8 text-base/7 text-muted-foreground lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-secondary">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute top-1 left-1 size-5 text-primary"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-8 md:mt-10">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <img
              alt="Chat agent in action"
              src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
              width={2432}
              height={1442}
              className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[40rem] md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section className="bg-muted py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <h2 className="text-center text-base/7 font-semibold text-primary">
              How it works
            </h2>
          </div>

          <div className="mx-auto max-w-2xl text-center mt-4 sm:mt-6">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-secondary">
              Getting started is simple
            </p>
            <p className="mt-3 md:mt-4 text-base md:text-lg text-muted-foreground">
              A simple, three step process to make your AI chat agent ready.
            </p>
          </div>

          <div className="mx-auto mt-10 md:mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:gap-8 lg:gap-16 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 sm:p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-3 sm:mb-4 drop-shadow-sm">
                1
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-secondary mb-2 sm:mb-3">
                Discovery & Strategy
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                We'll identify your business goals, analyze communication
                challenges, and find inefficiencies to wireframe a tailored
                solution for your needs.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-3 sm:mb-4 drop-shadow-sm">
                2
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-secondary mb-2 sm:mb-3">
                Creation & Launch
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                We'll develop, test and integrate a custom AI Chat Agent that
                seamlessly integrates with your existing systems and workflows.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 sm:col-span-2 lg:col-span-1 sm:max-w-md sm:mx-auto lg:max-w-none">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-3 sm:mb-4 drop-shadow-sm">
                3
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-secondary mb-2 sm:mb-3">
                Optimize
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                We'll monitor, adjust and optimize your AI Chat Agent based on
                real-world data, ensuring consistent performance and outstanding
                results for your business.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Features in Detail */}
      <Section
        className="bg-white py-12 sm:py-16 md:py-24 lg:py-32"
        id="features"
      >
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-center text-base/7 font-semibold text-primary">
            Advanced capabilities
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-balance text-secondary">
            What makes our Chat Agent different
          </p>
          <div className="mt-8 sm:mt-10 md:mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
            <div className="relative lg:row-span-2 sm:col-span-2 lg:col-span-1">
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-xl lg:rounded-l-[2rem]">
                <div className="px-6 sm:px-8 pt-6 sm:pt-8 pb-3">
                  <div className="flex items-center justify-center max-lg:mb-3 lg:justify-start">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                  </div>
                  <p className="mt-2 text-base sm:text-lg font-medium tracking-tight text-secondary max-lg:text-center">
                    Human-like Conversations
                  </p>
                  <p className="mt-2 max-w-lg text-xs sm:text-sm text-muted-foreground max-lg:text-center">
                    Our AI chat agent engages in natural, context-aware
                    conversations that make your customers feel valued and
                    understood, no matter when they reach out.
                  </p>
                </div>
                <div className="@container relative min-h-[18rem] sm:min-h-[24rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-4 sm:inset-x-10 top-4 sm:top-10 bottom-0 overflow-hidden rounded-t-[12px] border-x-[3px] border-t-[3px] border-secondary bg-white shadow-2xl">
                    <div className="flex items-start p-3 sm:p-4 bg-primary/5 border-b">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                        N
                      </div>
                      <div className="flex-1">
                        <div className="text-sm sm:text-base font-medium text-secondary">
                          Norvalt Chat Agent
                        </div>
                        <div className="text-[10px] sm:text-xs text-muted-foreground">
                          Online now
                        </div>
                      </div>
                    </div>
                    <div className="p-3 sm:p-4">
                      <div className="mb-3 sm:mb-4 flex">
                        <div className="max-w-[80%] rounded-lg bg-muted p-2 sm:p-3 text-xs sm:text-sm text-secondary">
                          Hi there! How can I help you with your AI automation
                          needs today?
                        </div>
                      </div>
                      <div className="mb-3 sm:mb-4 flex justify-end">
                        <div className="max-w-[80%] rounded-lg bg-primary p-2 sm:p-3 text-xs sm:text-sm text-white">
                          I'm looking for a chat solution for my website. Can
                          you help?
                        </div>
                      </div>
                      <div className="flex">
                        <div className="max-w-[80%] rounded-lg bg-muted p-2 sm:p-3 text-xs sm:text-sm text-secondary">
                          Absolutely! Our AI Chat Agent is perfect for that. It
                          can handle customer inquiries 24/7, integrate with
                          your existing systems, and be fully customized to
                          match your brand.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
            </div>
            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-xl max-lg:rounded-t-[2rem]">
                <div className="px-6 sm:px-8 pt-6 sm:pt-8">
                  <div className="flex items-center justify-center mb-3 lg:justify-start">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      <Globe className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                  </div>
                  <p className="mt-2 text-base sm:text-lg font-medium tracking-tight text-secondary max-lg:text-center">
                    Multi-language Support
                  </p>
                  <p className="mt-2 max-w-lg text-xs sm:text-sm text-muted-foreground max-lg:text-center">
                    Connect with customers in Norwegian, English, and many other
                    languages to provide support to a global audience.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-4 sm:px-8 max-lg:pt-4 max-lg:pb-8 sm:px-10 lg:pb-2">
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full max-w-xs">
                    {["🇳🇴", "🇬🇧", "🇸🇪", "🇩🇰", "🇫🇮", "🇩🇪"].map((flag, i) => (
                      <div
                        key={i}
                        className="aspect-video flex items-center justify-center bg-muted rounded-lg text-xl sm:text-2xl"
                      >
                        {flag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
            </div>
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-lg bg-white"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-xl">
                <div className="px-6 sm:px-8 pt-6 sm:pt-8">
                  <div className="flex items-center justify-center mb-3 lg:justify-start">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                  </div>
                  <p className="mt-2 text-base sm:text-lg font-medium tracking-tight text-secondary max-lg:text-center">
                    Custom Knowledge Base
                  </p>
                  <p className="mt-2 max-w-lg text-xs sm:text-sm text-muted-foreground max-lg:text-center">
                    Trained specifically on your website, documentation, and
                    FAQs to provide accurate, company-specific answers.
                  </p>
                </div>
                <div className="@container flex flex-1 items-center justify-center max-lg:py-4 lg:pb-2">
                  <div className="w-full max-w-[160px] sm:max-w-[200px] aspect-square rounded-lg bg-muted flex items-center justify-center p-4">
                    <div className="w-full h-full border-2 border-dashed border-primary/40 rounded-md flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-xl sm:text-2xl text-primary mb-1">
                          📚
                        </div>
                        <div className="text-[10px] sm:text-xs text-secondary font-medium">
                          Your custom knowledge
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5"></div>
            </div>
            <div className="relative lg:row-span-2 sm:col-span-2 lg:col-span-1">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-xl max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]">
                <div className="px-6 sm:px-8 pt-6 sm:pt-8 pb-3">
                  <div className="flex items-center justify-center max-lg:mb-3 lg:justify-start">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                  </div>
                  <p className="mt-2 text-base sm:text-lg font-medium tracking-tight text-secondary max-lg:text-center">
                    24/7 Availability
                  </p>
                  <p className="mt-2 max-w-lg text-xs sm:text-sm text-muted-foreground max-lg:text-center">
                    Never miss a lead again with round-the-clock automated
                    responses that convert even when your team is offline.
                  </p>
                </div>
                <div className="relative min-h-[16rem] sm:min-h-[24rem] w-full grow flex items-center justify-center">
                  <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-muted flex items-center justify-center relative">
                    <div className="w-40 h-40 sm:w-56 sm:h-56 rounded-full border-6 sm:border-8 border-primary/20 flex items-center justify-center relative">
                      <div className="w-32 h-32 sm:w-44 sm:h-44 rounded-full bg-white shadow-md flex flex-col items-center justify-center">
                        <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">
                          24/7
                        </div>
                        <div className="text-xs sm:text-sm text-secondary text-center">
                          Always available
                          <br />
                          for your customers
                        </div>
                      </div>
                      <div className="absolute top-0 right-0 w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-primary"></div>
                      <div className="absolute bottom-1/4 left-0 w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-primary/60"></div>
                      <div className="absolute top-1/3 left-0 w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-primary/40"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-muted py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <h2 className="text-center text-base/7 font-semibold text-primary">
              Common questions
            </h2>
          </div>

          <div className="mx-auto max-w-2xl text-center mt-4 sm:mt-6">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-secondary">
              Frequently asked questions
            </p>
            <p className="mt-3 md:mt-4 text-base md:text-lg text-muted-foreground">
              Everything you need to know about our AI Chat Agent service
            </p>
          </div>

          <div className="mx-auto mt-8 sm:mt-12 md:mt-16 max-w-3xl space-y-3 sm:space-y-4">
            {[
              {
                question: "Can it understand Norwegian?",
                answer:
                  "Yes, our AI Chat Agent is fully capable of understanding and communicating in Norwegian, as well as English and numerous other languages. The AI is trained to recognize and respond appropriately to different languages, making it perfect for businesses with international customers.",
              },
              {
                question: "How does the agent know our products/services?",
                answer:
                  "We train your AI agent on your website content, product catalogs, FAQs, and any other documentation you provide. This creates a custom knowledge base specific to your business. The training process ensures the AI can accurately answer questions about your offerings, policies, and processes.",
              },
              {
                question: "What happens when the AI can't answer a question?",
                answer:
                  "The AI is designed to recognize when it can't provide an adequate answer and will seamlessly escalate the conversation to a human agent or collect contact information to follow up later. It's transparent with users when it doesn't know something, maintaining trust while ensuring no customer query goes unanswered.",
              },
              {
                question: "How long does it take to set up?",
                answer:
                  "Typically, we can have your AI Chat Agent fully trained and deployed within 1-2 weeks, depending on the complexity of your knowledge base and any required integrations. Our streamlined process ensures minimal disruption to your business while providing a quick path to enhanced customer service.",
              },
              {
                question: "Can we update the AI's knowledge over time?",
                answer:
                  "Yes, the AI's knowledge base can be continuously updated as your products, services, or policies change. We provide an intuitive management interface where you can add new information, adjust responses, and refine the AI's understanding of your business. Regular updates ensure the AI always provides the most current and accurate information.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="rounded-lg bg-white shadow-sm border border-gray-100 overflow-hidden"
              >
                <Accordion type="single" collapsible>
                  <AccordionItem value="item" className="border-none">
                    <AccordionTrigger className="flex w-full items-center justify-between px-4 sm:px-6 py-3 sm:py-4 text-left text-base sm:text-lg font-semibold text-secondary hover:bg-gray-50">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 sm:px-6 pb-3 sm:pb-4 text-sm sm:text-base text-muted-foreground">
                      <p>{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
