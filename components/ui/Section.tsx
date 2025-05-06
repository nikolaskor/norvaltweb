import { cn } from "@/lib/utils";
import { motion, MotionProps, HTMLMotionProps } from "framer-motion";
import React from "react";

// Separating the specific props for our Section component
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
  // Create animation props if animation is enabled
  const animationProps: MotionProps = animate
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

  // Prepare the container content
  const containerContent = container ? (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
  ) : (
    children
  );

  // Extract HTML attributes that are safe to pass to both standard and motion components
  const { id, role, tabIndex, style, onClick, onMouseEnter, onMouseLeave } =
    props;
  const safeHtmlProps = {
    id,
    role,
    tabIndex,
    style,
    onClick,
    onMouseEnter,
    onMouseLeave,
  };

  // Filter out undefined values
  const filteredProps = Object.fromEntries(
    Object.entries(safeHtmlProps).filter((entry) => entry[1] !== undefined)
  );

  // Render the appropriate element type based on animation preference
  if (animate) {
    // For animated components
    if (as === "section") {
      return (
        <motion.section
          className={cn("py-10 sm:py-12 md:py-16 lg:py-24", className)}
          {...filteredProps}
          {...animationProps}
        >
          {containerContent}
        </motion.section>
      );
    } else if (as === "div") {
      return (
        <motion.div
          className={cn("py-10 sm:py-12 md:py-16 lg:py-24", className)}
          {...filteredProps}
          {...animationProps}
        >
          {containerContent}
        </motion.div>
      );
    } else {
      return (
        <motion.article
          className={cn("py-10 sm:py-12 md:py-16 lg:py-24", className)}
          {...filteredProps}
          {...animationProps}
        >
          {containerContent}
        </motion.article>
      );
    }
  } else {
    // For non-animated components
    const Component = as;
    return (
      <Component
        className={cn("py-10 sm:py-12 md:py-16 lg:py-24", className)}
        {...props}
      >
        {containerContent}
      </Component>
    );
  }
}

const fadeIn = {
  hidden: { opacity: 0, y: "20px" },
  visible: {
    opacity: 1,
    y: "0px",
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
} & Omit<HTMLMotionProps<"div">, "children" | "className">) {
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
