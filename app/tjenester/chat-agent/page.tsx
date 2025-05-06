"use client";

import React, { useState, useEffect } from "react";
import { Section, SectionHeading, Grid, FadeIn } from "@/components/ui/Section";
import { Card, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
  Send,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ServiceHero } from "@/components/ui/ServiceHero";
import { motion } from "framer-motion";

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

  // Chat mockup state
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hei! 👋 Jeg er Norvalt AI-assistenten. Hvordan kan jeg hjelpe deg i dag?",
      time: "09:30",
    },
  ]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Demo chat flow
  const handleSendMessage = () => {
    if (!currentMessage.trim()) return;

    // Add user message
    const userMessage = {
      sender: "user",
      text: currentMessage,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setCurrentMessage("");
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      let botResponse;

      if (
        currentMessage.toLowerCase().includes("pris") ||
        currentMessage.toLowerCase().includes("kost")
      ) {
        botResponse = {
          sender: "bot",
          text: "Vi tilbyr fleksible prisplaner basert på størrelsen og behovene til din bedrift. Ønsker du at jeg skal sette deg i kontakt med en av våre konsulenter som kan gi deg et tilpasset tilbud?",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };
      } else if (
        currentMessage.toLowerCase().includes("demo") ||
        currentMessage.toLowerCase().includes("prøve")
      ) {
        botResponse = {
          sender: "bot",
          text: "Vi tilbyr en gratis demo av vår AI Chat Agent. Jeg kan hjelpe deg med å planlegge en demonstrasjon med en av våre produktspesialister. Når passer det best for deg?",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };
      } else {
        botResponse = {
          sender: "bot",
          text: "Takk for spørsmålet! Vår AI Chat Agent kan skreddersys for din bedrift. Den kan håndtere alt fra vanlige kundehenvendelser til å booke møter og gi produktanbefalinger. Er det noen spesifikke funksjoner du er interessert i?",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };
      }

      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

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
      <Section className="overflow-hidden bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 px-4 sm:px-6 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:px-8">
          <div className="lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-primary mb-2">
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
              <dl className="mt-8 md:mt-10 max-w-xl space-y-6 text-base/7 text-muted-foreground lg:max-w-none">
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
          <div className="flex items-center justify-center h-full">
            <div className="w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
              {/* Chat header */}
              <div className="bg-primary/10 p-4 flex items-center border-b border-gray-200">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold mr-3">
                  N
                </div>
                <div>
                  <div className="font-medium text-secondary">Norvalt AI</div>
                  <div className="text-xs text-muted-foreground flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-1.5"></span>
                    Online nå
                  </div>
                </div>
              </div>

              {/* Chat messages */}
              <div className="bg-white h-[400px] overflow-y-auto p-4 flex flex-col gap-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.sender === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-xl p-3 ${
                        message.sender === "user"
                          ? "bg-primary text-white"
                          : "bg-muted text-secondary"
                      }`}
                    >
                      <div className="text-sm">{message.text}</div>
                      <div
                        className={`text-xs mt-1 ${
                          message.sender === "user"
                            ? "text-white/70"
                            : "text-muted-foreground"
                        }`}
                      >
                        {message.time}
                      </div>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="max-w-[80%] rounded-xl p-3 bg-muted text-secondary">
                      <div className="flex gap-1 items-center">
                        <div
                          className="w-2 h-2 rounded-full bg-secondary/40 animate-bounce"
                          style={{ animationDelay: "0ms" }}
                        ></div>
                        <div
                          className="w-2 h-2 rounded-full bg-secondary/40 animate-bounce"
                          style={{ animationDelay: "200ms" }}
                        ></div>
                        <div
                          className="w-2 h-2 rounded-full bg-secondary/40 animate-bounce"
                          style={{ animationDelay: "400ms" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Chat input */}
              <div className="p-4 border-t border-gray-200 bg-white">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={currentMessage}
                    onChange={(e) => setCurrentMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Skriv din melding her..."
                    className="flex-1 px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="bg-primary text-white p-2 rounded-full hover:bg-primary/90 transition-colors"
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </div>
                <div className="text-xs text-center mt-2 text-muted-foreground">
                  Prøv å spørre om pris, demo eller funksjoner
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section className="bg-muted py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              How it works
            </div>
          </div>

          <div className="mx-auto max-w-3xl text-center mt-6 sm:mt-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-secondary">
              Getting started is simple
            </h2>
            <p className="mt-4 md:mt-6 text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
              A straightforward three-step process to implement your AI chat
              agent and transform your customer service experience.
            </p>
          </div>

          {/* Steps Container */}
          <div className="relative mx-auto mt-16 lg:mt-20 max-w-6xl">
            {/* Connection Line - Only visible on lg screens */}
            <div className="hidden lg:block absolute top-[4.5rem] left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-1 bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10 rounded-full" />

            {/* Steps */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 relative">
              {/* Step 1 */}
              <div className="group relative z-10">
                <div className="absolute -inset-4 scale-95 bg-gradient-to-b from-primary/5 to-transparent opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 rounded-3xl" />
                <div className="relative h-full p-8 sm:p-10 rounded-3xl bg-white shadow-lg border border-gray-100 overflow-hidden">
                  {/* Number */}
                  <div className="flex items-center mb-6 sm:mb-8">
                    <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-primary/5 text-primary rounded-2xl">
                      <span className="text-4xl sm:text-5xl font-bold">1</span>
                    </div>
                    <div className="w-full h-0.5 ml-4 bg-gradient-to-r from-primary/30 to-transparent rounded-full lg:hidden" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl sm:text-2xl font-semibold text-secondary mb-4">
                    Discovery & Strategy
                  </h3>
                  <p className="text-base text-muted-foreground mb-6">
                    We'll identify your business goals, analyze communication
                    challenges, and find inefficiencies to wireframe a tailored
                    solution for your needs.
                  </p>

                  {/* Icon */}
                  <div className="absolute bottom-0 right-0 p-6 text-primary/10 transform translate-y-1/4 translate-x-1/4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="120"
                      height="120"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="group relative z-10">
                <div className="absolute -inset-4 scale-95 bg-gradient-to-b from-primary/5 to-transparent opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 rounded-3xl" />
                <div className="relative h-full p-8 sm:p-10 rounded-3xl bg-white shadow-lg border border-gray-100 overflow-hidden">
                  {/* Number */}
                  <div className="flex items-center mb-6 sm:mb-8">
                    <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-primary/5 text-primary rounded-2xl">
                      <span className="text-4xl sm:text-5xl font-bold">2</span>
                    </div>
                    <div className="w-full h-0.5 ml-4 bg-gradient-to-r from-primary/30 to-transparent rounded-full lg:hidden" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl sm:text-2xl font-semibold text-secondary mb-4">
                    Creation & Launch
                  </h3>
                  <p className="text-base text-muted-foreground mb-6">
                    We'll develop, test and integrate a custom AI Chat Agent
                    that seamlessly integrates with your existing systems and
                    workflows.
                  </p>

                  {/* Icon */}
                  <div className="absolute bottom-0 right-0 p-6 text-primary/10 transform translate-y-1/4 translate-x-1/4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="120"
                      height="120"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="group relative z-10">
                <div className="absolute -inset-4 scale-95 bg-gradient-to-b from-primary/5 to-transparent opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 rounded-3xl" />
                <div className="relative h-full p-8 sm:p-10 rounded-3xl bg-white shadow-lg border border-gray-100 overflow-hidden">
                  {/* Number */}
                  <div className="flex items-center mb-6 sm:mb-8">
                    <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-primary/5 text-primary rounded-2xl">
                      <span className="text-4xl sm:text-5xl font-bold">3</span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl sm:text-2xl font-semibold text-secondary mb-4">
                    Optimize & Improve
                  </h3>
                  <p className="text-base text-muted-foreground mb-6">
                    We'll monitor, adjust and optimize your AI Chat Agent based
                    on real-world data, ensuring consistent performance and
                    outstanding results.
                  </p>

                  {/* Icon */}
                  <div className="absolute bottom-0 right-0 p-6 text-primary/10 transform translate-y-1/4 translate-x-1/4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="120"
                      height="120"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="12" y1="20" x2="12" y2="10"></line>
                      <line x1="18" y1="20" x2="18" y2="4"></line>
                      <line x1="6" y1="20" x2="6" y2="16"></line>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center mt-12 md:mt-16">
              <Button size="lg" className="px-8 gap-2">
                Get Started
                <ArrowUpCircle className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Features in Detail */}
      <Section
        className="bg-white py-20 lg:py-28 overflow-hidden"
        id="features"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
              Advanced capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-secondary mx-auto max-w-3xl">
              What makes our Chat Agent different
            </h2>
          </div>

          {/* Features Grid */}
          <div className="mt-12 md:mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 relative">
            {/* Decorative gradient blobs */}
            <div className="absolute -top-10 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-50 -z-10"></div>
            <div className="absolute -bottom-20 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-50 -z-10"></div>

            {/* Feature 1 - Human-like Conversations */}
            <div className="relative lg:row-span-2 sm:col-span-2 lg:col-span-1 group/chat">
              <div className="absolute inset-px rounded-lg lg:rounded-l-[2rem] bg-white"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-xl lg:rounded-l-[2rem] border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="px-6 sm:px-8 pt-6 sm:pt-8 pb-3">
                  <div className="flex items-center justify-center max-lg:mb-3 lg:justify-start">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary">
                      <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                  </div>
                  <h3 className="mt-3 text-xl sm:text-2xl font-bold tracking-tight text-secondary max-lg:text-center">
                    Human-like Conversations
                  </h3>
                  <p className="mt-3 max-w-lg text-base text-muted-foreground max-lg:text-center">
                    Our AI chat agent engages in natural, context-aware
                    conversations that make your customers feel valued and
                    understood, no matter when they reach out.
                  </p>
                </div>

                {/* Chat Preview with Hover Animation */}
                <div className="@container relative min-h-[18rem] sm:min-h-[24rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-4 sm:inset-x-10 top-4 sm:top-10 bottom-0 overflow-hidden rounded-xl bg-white shadow-lg">
                    {/* Chat header */}
                    <div className="flex items-start p-3 sm:p-4 bg-primary/5 border-b border-gray-100">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 mr-3 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                        N
                      </div>
                      <div className="flex-1">
                        <div className="text-sm sm:text-base font-medium text-secondary">
                          Norvalt Chat Agent
                        </div>
                        <div className="text-xs text-muted-foreground flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-1.5"></span>
                          Online now
                        </div>
                      </div>
                    </div>

                    {/* Chat messages container */}
                    <div className="p-3 sm:p-4 space-y-3 sm:space-y-4 overflow-hidden relative">
                      {/* First message */}
                      <div className="flex group-hover/chat:translate-y-[-30%] duration-300 transition-transform ease-in-out">
                        <div className="max-w-[85%] rounded-lg bg-muted p-2 sm:p-3 text-xs sm:text-sm text-secondary">
                          Hi there! How can I help you with your AI automation
                          needs today?
                        </div>
                      </div>

                      {/* Second message */}
                      <div className="flex justify-end group-hover/chat:translate-y-[-30%] duration-300 transition-transform ease-in-out">
                        <div className="max-w-[85%] rounded-lg bg-primary p-2 sm:p-3 text-xs sm:text-sm text-white">
                          I'm looking for a chat solution for my website. Can
                          you help?
                        </div>
                      </div>

                      {/* Third message - initially hidden, appears on hover */}
                      <div className="flex opacity-0 translate-y-4 group-hover/chat:opacity-100 group-hover/chat:translate-y-0 duration-300 transition-all ease-in-out">
                        <div className="max-w-[85%] rounded-lg bg-muted p-2 sm:p-3 text-xs sm:text-sm text-secondary">
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

            {/* Feature 2 - Multi-language Support */}
            <div className="relative max-lg:row-start-1 group">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-xl max-lg:rounded-t-[2rem] border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="px-6 pt-6 pb-3">
                  <div className="flex items-center justify-center mb-4 lg:justify-start">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary">
                      <Globe className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                  </div>
                  <h3 className="mt-3 text-xl sm:text-2xl font-bold tracking-tight text-secondary max-lg:text-center">
                    Multi-language Support
                  </h3>
                  <p className="mt-3 max-w-lg text-base text-muted-foreground max-lg:text-center">
                    Connect with customers in Norwegian, English, and many other
                    languages to provide support to a global audience.
                  </p>
                </div>

                {/* Language Flags */}
                <div className="flex flex-1 items-center justify-center p-6">
                  <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-xs">
                    {["🇳🇴", "🇬🇧", "🇸🇪", "🇩🇰", "🇫🇮", "🇩🇪"].map((flag, i) => (
                      <div
                        key={i}
                        className="aspect-video flex items-center justify-center bg-muted/50 rounded-lg text-2xl sm:text-3xl shadow-sm transform transition-transform duration-300 hover:scale-105 hover:bg-muted"
                      >
                        {flag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
            </div>

            {/* Feature 3 - Custom Knowledge Base */}
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2 group">
              <div className="absolute inset-px rounded-lg bg-white"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="px-6 pt-6 pb-3">
                  <div className="flex items-center justify-center mb-4 lg:justify-start">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary">
                      <BookOpen className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                  </div>
                  <h3 className="mt-3 text-xl sm:text-2xl font-bold tracking-tight text-secondary max-lg:text-center">
                    Custom Knowledge Base
                  </h3>
                  <p className="mt-3 max-w-lg text-base text-muted-foreground max-lg:text-center">
                    Trained specifically on your website, documentation, and
                    FAQs to provide accurate, company-specific answers.
                  </p>
                </div>

                {/* Knowledge Base Visualization */}
                <div className="@container flex flex-1 items-center justify-center p-6">
                  <div className="w-full max-w-[160px] sm:max-w-[200px] aspect-square rounded-xl bg-muted/50 p-5 sm:p-6 transform transition-transform duration-300 hover:scale-105">
                    <div className="w-full h-full border-2 border-dashed border-primary/40 rounded-lg flex items-center justify-center">
                      <div className="text-center p-3">
                        <div className="text-2xl sm:text-3xl text-primary mb-2">
                          📚
                        </div>
                        <div className="text-xs sm:text-sm text-secondary font-medium">
                          Your custom
                          <br />
                          knowledge base
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5"></div>
            </div>

            {/* Feature 4 - 24/7 Availability */}
            <div className="relative lg:row-span-2 sm:col-span-2 lg:col-span-1 group">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-xl max-lg:rounded-b-[2rem] lg:rounded-r-[2rem] border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="px-6 pt-6 pb-3">
                  <div className="flex items-center justify-center mb-4 lg:justify-start">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary">
                      <Clock className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                  </div>
                  <h3 className="mt-3 text-xl sm:text-2xl font-bold tracking-tight text-secondary max-lg:text-center">
                    24/7 Availability
                  </h3>
                  <p className="mt-3 max-w-lg text-base text-muted-foreground max-lg:text-center">
                    Never miss a lead again with round-the-clock automated
                    responses that convert even when your team is offline.
                  </p>
                </div>

                {/* Clock Visualization */}
                <div className="relative min-h-[16rem] sm:min-h-[24rem] w-full grow flex items-center justify-center p-6">
                  <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full bg-white shadow-lg flex items-center justify-center relative group-hover:scale-105 transition-transform duration-500">
                    <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full border-6 md:border-8 border-primary/20 flex items-center justify-center relative">
                      <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full bg-white shadow-md flex flex-col items-center justify-center transform group-hover:rotate-12 transition-transform duration-1000">
                        <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">
                          24/7
                        </div>
                        <div className="text-xs sm:text-sm text-secondary text-center">
                          Always available
                          <br />
                          for your customers
                        </div>
                      </div>

                      {/* Decorative dots */}
                      <div className="absolute animate-pulse top-0 right-0 w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-primary"></div>
                      <div className="absolute animate-pulse delay-300 bottom-1/4 left-0 w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-primary/60"></div>
                      <div className="absolute animate-pulse delay-700 top-1/3 left-0 w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-primary/40"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mt-12 md:mt-16 lg:mt-20">
            <Button size="lg" className="px-8 gap-2">
              Explore All Features
              <ArrowUpCircle className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-muted py-20 lg:py-28">
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

          <div className="mx-auto mt-12 md:mt-16 max-w-3xl space-y-4">
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
                    <AccordionContent className="px-4 sm:px-6 pb-4 text-sm sm:text-base text-muted-foreground">
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
