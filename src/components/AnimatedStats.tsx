import { useState, useEffect } from "react";

interface Stat {
  value: string;
  description: string;
}

const stats: Stat[] = [
  {
    value: "80%",
    description: "workflows can be automated using AI Agents",
  },
  {
    value: "<60s",
    description: "to convert PDF into actionable insight",
  },
  {
    value: "$12,500/m",
    description: "in recurring revenue from enterprise clients",
  },
  {
    value: "Flexible",
    description: "SaaS, VPC, or On-premise",
  },
];

export default function AnimatedStats() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % stats.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-end overflow-hidden h-[136px]">
      <div
        className="transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateY(-${currentIndex * 136}px)`,
        }}
      >
        {stats.map((stat, index) => (
          <div key={index} className="h-[136px]">
            <div className="text-[72px] font-normal text-[#00E5FF] leading-[80px] tracking-[-0.02em]">
              {stat.value}
            </div>
            <p className="text-[#E4E7EC] text-base font-normal mt-4">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
