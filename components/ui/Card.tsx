import { cn } from "@/lib/utils";
import React from "react";
import { FadeIn } from "./Section";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline" | "muted";
  animate?: boolean;
}

/**
 * A consistent card component for displaying content
 */
export function Card({
  children,
  className,
  variant = "default",
  animate = true,
  ...props
}: CardProps) {
  const variantStyles = {
    default: "bg-white shadow-sm",
    outline: "border border-muted",
    muted: "bg-muted/30 border border-muted",
  };

  const Component = animate ? FadeIn : "div";

  return (
    <Component
      className={cn(
        "rounded-lg sm:rounded-xl p-4 sm:p-5 lg:p-6",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

/**
 * Card header component with icon support
 */
export function CardHeader({
  children,
  icon,
  title,
  description,
  className,
}: {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col mb-3 sm:mb-4", className)}>
      {icon && (
        <div className="p-2 sm:p-3 bg-primary/10 rounded-lg w-fit text-primary mb-3 sm:mb-4">
          {icon}
        </div>
      )}
      {title && (
        <h3 className="text-lg sm:text-xl font-semibold text-secondary mb-1">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-sm sm:text-base text-muted-foreground">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}

/**
 * Card content component
 */
export function CardContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("", className)}>{children}</div>;
}

/**
 * Card footer component
 */
export function CardFooter({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mt-3 sm:mt-4 flex flex-wrap items-center gap-2 sm:gap-3",
        className
      )}
    >
      {children}
    </div>
  );
}
