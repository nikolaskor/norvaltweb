"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./Button";

interface ServiceHeroProps {
  title: string;
  description: string;
  primaryAction?: {
    text: string;
    href?: string;
  };
  secondaryAction?: {
    text: string;
    href?: string;
  };
  badge?: {
    text: string;
    href?: string;
    linkText?: string;
  };
  gradientFrom?: string;
  gradientTo?: string;
  className?: string;
}

export function ServiceHero({
  title,
  description,
  primaryAction,
  secondaryAction,
  badge,
  gradientFrom = "#d89443",
  gradientTo = "#050d3c",
  className,
}: ServiceHeroProps) {
  return (
    <div
      className={cn(
        "bg-white relative isolate min-h-[80vh] flex items-center",
        className
      )}
    >
      {/* Top gradient decoration */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 w-full">
        <div className="mx-auto max-w-2xl text-center">
          {/* Optional badge/announcement */}
          {badge && (
            <div className="mb-8 hidden sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm/6 text-secondary ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                {badge.text}{" "}
                {badge.href && badge.linkText && (
                  <a href={badge.href} className="font-semibold text-primary">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {badge.linkText} <span aria-hidden="true">&rarr;</span>
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Main hero content */}
          <h1 className="text-4xl font-semibold tracking-tight text-balance text-secondary sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg/8 text-muted-foreground sm:text-xl/8 max-w-prose mx-auto">
            {description}
          </p>

          {/* Call to actions */}
          {(primaryAction || secondaryAction) && (
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              {primaryAction && (
                <Button
                  size="lg"
                  className="w-full sm:w-auto"
                  asChild={!!primaryAction.href}
                >
                  {primaryAction.href ? (
                    <a href={primaryAction.href}>{primaryAction.text}</a>
                  ) : (
                    primaryAction.text
                  )}
                </Button>
              )}
              {secondaryAction && (
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                  asChild={!!secondaryAction.href}
                >
                  {secondaryAction.href ? (
                    <a href={secondaryAction.href}>
                      {secondaryAction.text} <span aria-hidden="true">→</span>
                    </a>
                  ) : (
                    <>
                      {secondaryAction.text} <span aria-hidden="true">→</span>
                    </>
                  )}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Bottom gradient decoration */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-secondary opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
  );
}
