import React from "react";

interface IndustryCardProps {
  title: string;
  description: string;
  videoFilter: string;
  bgColor: string;
}

const IndustryCard: React.FC<IndustryCardProps> = ({
  title,
  description,
  videoFilter,
  bgColor,
}) => {
  return (
    <div className="relative w-[366.67px] h-[220px] p-6 flex flex-col justify-end gap-2 border border-white/10 group overflow-hidden rounded-[5px]">
      {/* Default background */}
      <div className={`absolute inset-0 ${bgColor} opacity-20`} />

      {/* Background video layer */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className={`absolute inset-0 ${bgColor} opacity-20 z-[1]`} />
        <video
          className={`absolute inset-0 w-full h-full object-cover ${videoFilter}`}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/industry-hover-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/50 to-transparent z-[2]" />
      </div>

      {/* Content layer */}
      <div className="relative z-[3] flex flex-col gap-2">
        <h3 className="font-manrope font-medium text-2xl leading-[1.5em] tracking-[-5%] text-white">
          {title}
        </h3>
        <p className="font-manrope text-base leading-[1.5em] tracking-[-7.5%] text-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {description}
        </p>
      </div>
    </div>
  );
};

const WhoWeServe: React.FC = () => {
  const industries = [
    {
      title: "Government",
      description: "Transform public sector operations with AI Agents",
      videoFilter:
        "[&]:brightness-[0.6] [&]:contrast-[1.2] [&]:grayscale [&]:saturate-[0]",
      bgColor: "bg-[#111111]",
    },
    {
      title: "Finance",
      description: "Revolutionize finance processes with AI",
      videoFilter:
        "[&]:brightness-[0.6] [&]:contrast-[1.2] [&]:hue-rotate-[180deg] [&]:saturate-[1.2]",
      bgColor: "bg-[#303320]",
    },
    {
      title: "Legal",
      description: "Extract risk insights and contract clauses in seconds",
      videoFilter:
        "[&]:brightness-[0.6] [&]:contrast-[1.2] [&]:hue-rotate-[280deg] [&]:saturate-[1.2]",
      bgColor: "bg-[#203333]",
    },
    {
      title: "HR & Recruitment",
      description: "Process applications and match talent faster",
      videoFilter:
        "[&]:brightness-[0.6] [&]:contrast-[1.2] [&]:hue-rotate-[30deg] [&]:saturate-[1.5]",
      bgColor: "bg-[#212033]",
    },
    {
      title: "Audit & Compliance",
      description: "Accelerate document reviews and flag anomalies",
      videoFilter:
        "[&]:brightness-[0.6] [&]:contrast-[1.2] [&]:hue-rotate-[100deg] [&]:saturate-[1.5]",
      bgColor: "bg-[#332920]",
    },
    {
      title: "Business & Marketing",
      description: "Aggregate insights and craft smarter campaigns",
      videoFilter:
        "[&]:brightness-[0.6] [&]:contrast-[1.2] [&]:hue-rotate-[260deg] [&]:saturate-[1.2]",
      bgColor: "bg-[#203328]",
    },
  ];

  return (
    <section className="bg-black w-full px-[52px]">
      <div className="max-w-[1336px] mx-auto py-24 pl-[220px]">
        <div className="flex items-center gap-2.5 mb-12">
          <span className="text-[13.45px] leading-[1.19em] tracking-[-1.04%] text-[#3DDEFF] font-manrope">
            Who We Serve
          </span>
          <div className="p-1 rounded-full bg-white/10">
            <div className="w-4 h-4 flex items-center justify-center">
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 5H8.5M8.5 5L5 1.5M8.5 5L5 8.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <div className="flex gap-2 w-full">
            {industries.slice(0, 3).map((industry, index) => (
              <IndustryCard key={index} {...industry} />
            ))}
          </div>
          <div className="flex gap-2 w-full">
            {industries.slice(3).map((industry, index) => (
              <IndustryCard key={index + 3} {...industry} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
