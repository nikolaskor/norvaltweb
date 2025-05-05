"use client";

import React from "react";
import { Section, SectionHeading, Grid, FadeIn } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Clock, BookOpen, Mic, Speaker, Phone, Headphones } from "lucide-react";
import { ServiceHero } from "@/components/ui/ServiceHero";

export default function VoiceAgentPage() {
  return (
    <>
      {/* Hero Section */}
      <ServiceHero
        title="AI Voice Agent for Natural Conversations"
        description="Norvalt's Voice Agent helps your business communicate with customers using natural-sounding voice interactions, available 24/7."
        primaryAction={{ text: "Get a Free Demo", href: "/kontakt" }}
        secondaryAction={{ text: "Listen to Samples" }}
        gradientFrom="#d89443"
        gradientTo="#8046A8"
      />

      {/* Feature Overview */}
      <Section className="overflow-hidden bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading centered>
            Revolutionize Customer Communication with Voice AI
          </SectionHeading>

          <Grid cols={3} className="mt-12">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Mic className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-secondary">
                Natural Voice Interaction
              </h3>
              <p className="text-muted-foreground">
                Our AI voice agents use advanced voice synthesis for natural,
                human-like conversations that customers will love.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Speaker className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-secondary">
                Multi-Language Support
              </h3>
              <p className="text-muted-foreground">
                Communicate with customers in Norwegian, English, and multiple
                other languages with natural-sounding voices.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-secondary">
                24/7 Availability
              </h3>
              <p className="text-muted-foreground">
                Voice agents that never sleep, ensuring your business is always
                available to answer calls and assist customers.
              </p>
            </div>
          </Grid>
        </div>
      </Section>

      {/* Customer Journey */}
      <Section className="bg-muted py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-base/7 font-semibold text-primary mb-2">
                The Future of Voice
              </h2>
              <p className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-pretty text-secondary">
                Enhance Your Customer Journey
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                Our voice agents transform how customers interact with your
                business - from first contact to ongoing support. With
                natural-sounding voices and advanced understanding, these AI
                assistants create seamless experiences that build trust and
                loyalty.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-secondary">
                      Phone Integration
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Seamlessly connects with your existing phone systems
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Headphones className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-secondary">
                      Human Handoff
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Intelligent escalation to human agents when needed
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <BookOpen className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-secondary">
                      Custom Voice Training
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Train on your specific industry terminology and FAQs
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Button size="lg" className="w-full sm:w-auto">
                  Book a Demo Call
                </Button>
              </div>
            </div>

            <div className="lg:w-1/2 relative max-w-md mx-auto lg:max-w-none">
              <div className="aspect-square rounded-2xl bg-white shadow-xl overflow-hidden border-8 border-white">
                <div className="w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center p-6">
                  <div className="text-center max-w-xs">
                    <div className="w-24 h-24 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                      <Mic className="w-10 h-10 text-primary" />
                    </div>
                    <p className="text-secondary font-semibold mb-2">
                      Voice Assistant Preview
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Interactive demo coming soon - contact us for a live
                      demonstration of our voice agent technology
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full -z-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/10 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
