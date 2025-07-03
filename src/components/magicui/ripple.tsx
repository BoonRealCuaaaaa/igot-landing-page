import React from "react";
import { cn } from "../../lib/utils";

interface RippleProps {
  mainCircleSize?: number;
  numCircles?: number;
  className?: string;
}

const Ripple = React.memo(function Ripple({
  mainCircleSize = 210,
  numCircles = 3,
  className,
}: RippleProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 bg-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)]",
        className
      )}
    >
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 70;
        const opacity = 1 - i * 0.3;
        const animationDelay = i * 0.06;

        return (
          <div
            key={i}
            className={`absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              opacity,
              animationDelay: `${animationDelay}s`,
              top: "50%",
              left: "50%",
              transform: `translate(-50%, -50%) scale(1)`,
            }}
          />
        );
      })}
    </div>
  );
});

Ripple.displayName = "Ripple";

export default Ripple;
