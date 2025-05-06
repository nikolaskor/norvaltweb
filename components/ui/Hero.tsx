import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "./button";
import { PlaceholderImage } from "./PlaceholderImage";
import { FadeIn, Section } from "./Section";

interface HeroProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  image?: string;
  imagePlaceholder?: string;
  primaryAction?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  secondaryAction?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  align?: "left" | "center";
  imagePosition?: "right" | "bottom";
  className?: string;
  children?: React.ReactNode;
}

/**
 * Hero component for page headers with consistent design
 */
export function Hero({
  title,
  description,
  image,
  imagePlaceholder = "Hero image",
  primaryAction,
  secondaryAction,
  align = "left",
  imagePosition = "right",
  className,
  children,
}: HeroProps) {
  const isFullWidth = imagePosition === "bottom";

  return (
    <Section className={cn("bg-white pt-16 md:pt-20 lg:pt-24", className)}>
      <div
        className={cn(
          "flex flex-col gap-8 sm:gap-10 lg:gap-12",
          isFullWidth ? "" : "lg:grid lg:grid-cols-2 lg:items-center",
          align === "center" && isFullWidth ? "items-center text-center" : ""
        )}
      >
        <FadeIn
          className={cn(
            "flex flex-col gap-4 sm:gap-6",
            align === "center" && !isFullWidth ? "items-center text-center" : ""
          )}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary tracking-tight">
            {title}
          </h1>
          {description && (
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
              {description}
            </p>
          )}

          {(primaryAction || secondaryAction) && (
            <div className="flex flex-wrap gap-3 sm:gap-4 mt-2 sm:mt-4">
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
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto"
                  asChild={!!secondaryAction.href}
                >
                  {secondaryAction.href ? (
                    <a href={secondaryAction.href}>{secondaryAction.text}</a>
                  ) : (
                    secondaryAction.text
                  )}
                </Button>
              )}
            </div>
          )}

          {children}
        </FadeIn>

        {(image || imagePlaceholder) && (
          <FadeIn className="relative rounded-lg sm:rounded-xl overflow-hidden aspect-[4/3] sm:aspect-video shadow-lg">
            {image ? (
              <img
                src={image}
                alt={typeof title === "string" ? title : imagePlaceholder}
                className="object-cover w-full h-full"
              />
            ) : (
              <PlaceholderImage text={imagePlaceholder} />
            )}
          </FadeIn>
        )}
      </div>
    </Section>
  );
}
