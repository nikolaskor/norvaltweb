"use client";

import React, { ReactNode, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [pageHeight, setPageHeight] = useState<number | "auto">("auto");
  const contentRef = React.useRef<HTMLDivElement>(null);

  // This effect captures the height of each page to maintain consistent container height
  useEffect(() => {
    if (contentRef.current) {
      // Set a minimum height based on the content
      setPageHeight(
        Math.max(contentRef.current.offsetHeight, window.innerHeight)
      );
    }

    // Also consider window resize events
    const handleResize = () => {
      if (contentRef.current) {
        setPageHeight(
          Math.max(contentRef.current.offsetHeight, window.innerHeight)
        );
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [pathname, children]);

  return (
    <div
      className="relative w-full"
      style={{
        minHeight:
          typeof pageHeight === "number" ? `${pageHeight}px` : pageHeight,
      }}
    >
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={pathname}
          ref={contentRef}
          initial={{
            opacity: 0,
            position: "absolute",
            width: "100%",
            top: 0,
            left: 0,
          }}
          animate={{
            opacity: 1,
            position: "relative",
            width: "100%",
            top: "auto",
            left: "auto",
            transition: {
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1], // Custom ease curve for smoother motion
            },
          }}
          exit={{
            opacity: 0,
            position: "absolute",
            width: "100%",
            top: 0,
            left: 0,
            transition: {
              duration: 0.3,
              ease: "easeInOut",
            },
          }}
          className="w-full"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default PageTransition;
