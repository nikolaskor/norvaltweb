import * as React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /**
   * Pause animation on hover. Defaults to false.
   */
  pauseOnHover?: boolean;
  /**
   * Reverse direction. Defaults to false (left to right).
   */
  reverse?: boolean;
  /**
   * Animation speed in seconds. Defaults to 40s.
   */
  speed?: number;
  /**
   * Vertical alignment of items. Defaults to center.
   */
  verticalAlign?: "start" | "center" | "end";
}

export function Marquee({
  children,
  pauseOnHover = false,
  reverse = false,
  speed = 40, // Adjusted default speed for smoother feel
  verticalAlign = "center",
  className,
  ...props
}: MarqueeProps) {
  const alignmentClass = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
  }[verticalAlign];

  return (
    <div
      className={cn(
        "group flex overflow-hidden p-2 --gap-4 [--duration:var(--speed)]", // Added group for hover state
        className
      )}
      style={{ "--speed": `${speed}s` } as React.CSSProperties} // Use CSS variable directly
      {...props}
    >
      <div
        className={cn(
          "flex min-w-full shrink-0 animate-marquee gap-[var(--gap)]", // Ensure it takes minimum full width
          alignmentClass, // Apply vertical alignment
          pauseOnHover && "group-hover:[animation-play-state:paused]",
          reverse && "[animation-direction:reverse]"
        )}
      >
        {/* Render children twice for seamless loop */}
        {children}
        {children}
      </div>
    </div>
  );
}
