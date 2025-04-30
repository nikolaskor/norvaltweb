import { cn } from "@/lib/utils";
import { motion, MotionProps } from "framer-motion";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  as?: "section" | "div" | "article";
  container?: boolean;
  animate?: boolean;
  motionProps?: MotionProps;
}

/**
 * A consistent section component for layout structure
 */
export function Section({
  children,
  className,
  as = "section",
  container = true,
  animate = true,
  motionProps,
  ...props
}: SectionProps) {
  const Component = animate ? motion[as] : as;
  const animationProps = animate
    ? {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true },
        variants: {
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        },
        ...motionProps,
      }
    : {};

  return (
    <Component
      className={cn("py-10 sm:py-12 md:py-16 lg:py-24", className)}
      {...animationProps}
      {...props}
    >
      {container ? (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
      ) : (
        children
      )}
    </Component>
  );
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

/**
 * A motion component for fading in content
 */
export function FadeIn({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) {
  return (
    <motion.div variants={fadeIn} className={className} {...props}>
      {children}
    </motion.div>
  );
}

/**
 * A heading component for section titles
 */
export function SectionHeading({
  children,
  description,
  centered = true,
  className,
}: {
  children: React.ReactNode;
  description?: React.ReactNode;
  centered?: boolean;
  className?: string;
}) {
  return (
    <FadeIn
      className={cn(
        "max-w-3xl mb-8 sm:mb-10 lg:mb-12",
        centered ? "mx-auto text-center" : "",
        className
      )}
    >
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tighter mb-3 sm:mb-4 text-secondary">
        {children}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-muted-foreground">
          {description}
        </p>
      )}
    </FadeIn>
  );
}

/**
 * Grid layout component with responsive columns
 */
export function Grid({
  children,
  className,
  cols = 3,
  gap = 8,
}: {
  children: React.ReactNode;
  className?: string;
  cols?: 1 | 2 | 3 | 4;
  gap?: 4 | 6 | 8;
}) {
  const gapMap = {
    4: "gap-3 sm:gap-4",
    6: "gap-4 sm:gap-6",
    8: "gap-5 sm:gap-6 lg:gap-8",
  };

  const colsMap = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  };

  return (
    <div className={cn(`grid ${gapMap[gap]} ${colsMap[cols]}`, className)}>
      {children}
    </div>
  );
}
