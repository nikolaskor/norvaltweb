"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      (e.target as HTMLButtonElement).click();
    }
  };

  // Button animation variants
  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-orange-50 via-white to-orange-50 px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      {/* Animated background blobs - Adjusted colors slightly */}
      <div className="absolute w-full h-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-full h-full">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000"></div>
          </div>
        </div>
      </div>

      {/* Content - Adjusted spacing */}
      <div className="relative z-10 text-center max-w-4xl">
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to <span className="text-primary">Norval</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Discover a new way to manage your digital presence
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
          >
            <Button
              size="lg"
              aria-label="Get Started with Norval"
              onKeyDown={handleKeyDown}
            >
              Get Started
            </Button>
          </motion.div>
          <motion.div
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
          >
            <Button
              variant="outline"
              size="lg"
              aria-label="Learn More about Norval"
              onKeyDown={handleKeyDown}
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
