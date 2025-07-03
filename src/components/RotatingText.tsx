import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const texts = [
  "no-code Agentic AI",
  "Scale Automation",
  "Secure AI",
  "Automate workflows",
  "Data to Insight",
];

export default function RotatingText() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2500); // Change text every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full flex items-start">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="gradient-text font-medium absolute top-0 left-0 w-full"
          style={{
            fontFamily: '"Manrope", system-ui, -apple-system, sans-serif',
            fontSize: "64px",
            lineHeight: "1em",
            letterSpacing: "-3.75%",
            textShadow:
              "0 0 40px rgba(72, 188, 255, 0.6), 0 0 80px rgba(51, 252, 255, 0.4)",
            filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.8))",
          }}
        >
          {texts[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
