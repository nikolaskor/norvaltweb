"use client";

import React from "react";
import { Section, SectionHeading, Grid, FadeIn } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import {
  ArrowPathIcon,
  ClockIcon,
  RocketLaunchIcon,
  CpuChipIcon,
  PuzzlePieceIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import { ServiceHero } from "@/components/ui/ServiceHero";

export default function WorkflowPage() {
  return (
    <>
      {/* Hero Section */}
      <ServiceHero
        title="AI-Powered Workflow Automation"
        description="Transform your business operations with intelligent automation that eliminates manual tasks and accelerates productivity."
        primaryAction={{ text: "Automate Your Business", href: "/kontakt" }}
        secondaryAction={{ text: "View Case Studies", href: "/case" }}
        badge={{
          text: "New: Process Mining",
          linkText: "See how it works",
          href: "#process-mining",
        }}
        gradientFrom="#d89443"
        gradientTo="#2563eb"
      />

      {/* Benefits Section */}
      <Section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading centered>Why Automate Your Workflows</SectionHeading>

          <div className="mt-12 md:mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <ClockIcon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-secondary">
                Save Time
              </h3>
              <p className="text-muted-foreground">
                Eliminate repetitive tasks and free up your team to focus on
                high-value work that requires human creativity and
                decision-making.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <RocketLaunchIcon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-secondary">
                Increase Efficiency
              </h3>
              <p className="text-muted-foreground">
                Streamline processes across departments and reduce operational
                bottlenecks with workflows that operate 24/7 without delays.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <CpuChipIcon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-secondary">
                AI-Enhanced Decisions
              </h3>
              <p className="text-muted-foreground">
                Leverage machine learning algorithms to make data-driven
                decisions automatically or provide intelligent recommendations.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Process Mining Section */}
      <Section id="process-mining" className="bg-muted py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-base/7 font-semibold text-primary mb-2">
                Process Mining
              </h2>
              <p className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-pretty text-secondary">
                Discover Hidden Inefficiencies
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                Our AI-powered process mining technology analyzes your business
                operations to identify bottlenecks, inefficiencies, and
                automation opportunities that are often invisible to the human
                eye.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <PuzzlePieceIcon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-secondary">
                      Process Discovery
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Automatically map your actual process flows based on
                      system logs and data
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <ChartBarIcon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-secondary">
                      Performance Analysis
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Identify bottlenecks, delays, and resource constraints
                      with detailed metrics
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <ArrowPathIcon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-secondary">
                      Automation Recommendations
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Get AI-powered suggestions for which processes to automate
                      first
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Button size="lg" className="w-full sm:w-auto">
                  Book a Process Analysis
                </Button>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="aspect-video rounded-xl bg-white shadow-xl overflow-hidden p-3">
                <div className="w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg relative">
                  {/* Process workflow visualization mockup */}
                  <div className="absolute inset-0 p-4 flex flex-col">
                    <div className="h-8 bg-white/80 mb-3 rounded flex items-center px-3">
                      <div className="w-2 h-2 rounded-full bg-red-400 mr-1.5"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-400 mr-1.5"></div>
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      <div className="ml-auto text-xs text-gray-500">
                        Process Mining Dashboard
                      </div>
                    </div>

                    <div className="flex-1 flex gap-2">
                      <div className="w-1/3 bg-white/70 rounded-lg p-2">
                        <div className="h-4 w-3/4 bg-gray-200 rounded mb-2"></div>
                        <div className="h-3 w-1/2 bg-gray-200 rounded mb-4"></div>
                        <div className="space-y-2">
                          {[1, 2, 3, 4].map((i) => (
                            <div
                              key={i}
                              className="h-8 bg-gray-100 rounded flex items-center px-2"
                            >
                              <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                              <div className="h-2 w-16 bg-gray-200 rounded"></div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="w-2/3 bg-white/80 rounded-lg p-3">
                        <div className="mb-3 flex justify-between items-center">
                          <div className="h-4 w-24 bg-gray-200 rounded"></div>
                          <div className="flex space-x-1">
                            <div className="h-4 w-4 bg-gray-200 rounded"></div>
                            <div className="h-4 w-4 bg-gray-200 rounded"></div>
                          </div>
                        </div>

                        <div className="flex space-x-2 mb-4">
                          {[1, 2, 3].map((i) => (
                            <div
                              key={i}
                              className="h-6 flex-1 bg-gray-100 rounded"
                            ></div>
                          ))}
                        </div>

                        <div className="h-24 bg-gray-100 rounded mb-3 relative overflow-hidden">
                          <div className="absolute bottom-0 left-0 w-full h-16">
                            <div className="absolute bottom-0 left-1/4 h-12 w-8 bg-primary/40 rounded-t"></div>
                            <div className="absolute bottom-0 left-2/4 h-10 w-8 bg-primary/60 rounded-t -translate-x-1/2"></div>
                            <div className="absolute bottom-0 left-3/4 h-14 w-8 bg-primary/80 rounded-t"></div>
                          </div>
                        </div>

                        <div className="h-20 bg-gray-100 rounded relative overflow-hidden">
                          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200"></div>
                          <div className="absolute top-1/2 left-0 right-0 h-0.5 w-2/3 bg-primary"></div>
                          <div className="absolute top-1/2 right-1/3 w-3 h-3 rounded-full bg-primary -translate-y-1/2"></div>
                        </div>
                      </div>
                    </div>
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
