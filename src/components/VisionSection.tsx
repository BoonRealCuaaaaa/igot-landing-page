import React, { useState } from "react";
import onePlatformImage from "../assets/one-platform-image.png";
import onePlatformBackground from "../assets/one-platform-background.mp4";

interface TabData {
  id: string;
  title: string;
  heading: string;
  description: string;
}

const VisionSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("cookbook");

  const tabs: TabData[] = [
    {
      id: "cookbook",
      title: "Cook Book",
      heading: "Collaborate with AI Agents to get real-time insights",
      description:
        "Turn enterprise knowledge into actions with real-time AI collaboration.",
    },
    {
      id: "datalog",
      title: "Datalog",
      heading: "Transform messy files into structured, usable data",
      description:
        "Extract and standardize complex documents with high accuracy.",
    },
    {
      id: "studio",
      title: "Studio",
      heading: "Build custom AI Agents with no-code logic",
      description:
        "Design AI Agents using drag-and-drop logic—no coding needed.",
    },
  ];

  return (
    <section className="relative w-full bg-black overflow-hidden">
      {/* Background video/image with enhanced backdrop effect */}
      <div className="absolute inset-0">
        {/* Enhanced fallback background with animation */}
        <div className="absolute inset-0 w-full h-full bg-[#0a0a0a]" />
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#0f1419] via-[#0a0a0a] to-[#1a1a2e] opacity-70" />
        <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[#000000] via-transparent to-[#16213e] opacity-30 animate-pulse" />

        {/* Color overlay */}
        <div className="absolute inset-0 bg-[#48BCFF] mix-blend-color opacity-30" />

        {/* Video background */}
        <video
          className="w-full h-full object-cover opacity-60"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          style={{
            filter: "brightness(0.8) contrast(1.1) saturate(0.9)",
          }}
        >
          <source src={onePlatformBackground} type="video/mp4" />
        </video>

        {/* Gradient overlays */}
        <div className="absolute top-0 w-full h-[103px] bg-gradient-to-b from-black to-transparent" />
        <div className="absolute top-[80px] w-full h-[720px] bg-gradient-to-b from-black via-black/50 to-transparent" />

        {/* Additional backdrop effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80" />
      </div>

      {/* Main content */}
      <div className="relative">
        {/* Vision text */}
        <div className="flex justify-center items-center py-64">
          <div className="relative">
            <div className="absolute -top-[154px] w-[1440px] h-[596px] rounded-full bg-gradient-radial from-black to-transparent" />
            <h2 className="font-manrope font-medium text-[96px] leading-[1em] tracking-[-2.5%] text-center bg-gradient-to-b from-white to-transparent bg-clip-text text-transparent whitespace-pre-line">
              {"One Platform\nThree Pillars\nTotal AI Readiness"}
            </h2>
          </div>
        </div>

        {/* Container for image and tabs */}
        <div className="max-w-[1440px] mx-auto">
          <div className="flex -mx-[40px]">
            {/* Left column - Sticky container */}
            <div
              className="w-[60%] px-[40px]"
              style={{ height: "calc(100vh + 800px)" }}
            >
              <div className="sticky top-[10vh] transition-all duration-300">
                <div className="rounded-[32px] bg-[rgba(17,17,17,0.5)] backdrop-blur-[20px] p-6 border border-white/5">
                  <div className="w-full h-[618.67px] rounded-2xl bg-white/5 border border-white/12 backdrop-blur-[20px] relative overflow-hidden">
                    <img
                      src={onePlatformImage}
                      alt="One Platform"
                      className="absolute left-[87.51px] top-[85.81px] w-[960px] h-[540px] rounded-2xl object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right column - Scrollable tabs */}
            <div className="w-[40%] px-[40px]">
              <div className="py-[200px] pb-[256px] space-y-8">
                {tabs.map((tab) => (
                  <div
                    key={tab.id}
                    className={`relative w-[440px] p-10 flex flex-col gap-6 transition-all duration-300 group cursor-pointer
                      ${activeTab === tab.id ? "z-10" : "z-0"}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {/* Background layers */}
                    <div
                      className={`absolute inset-0 ${
                        activeTab === tab.id
                          ? "bg-black/20 backdrop-blur-[20px]"
                          : "bg-[#111111]"
                      }`}
                    />
                    <div
                      className={`absolute inset-0 ${
                        activeTab === tab.id ? "bg-white/10" : ""
                      }`}
                    />
                    <div
                      className={`absolute right-0 top-0 bottom-0 w-[1px] ${
                        activeTab === tab.id ? "bg-white" : "bg-white/10"
                      }`}
                    />

                    {/* Content */}
                    <div className="relative flex items-center gap-2.5 rounded-[160px] w-fit">
                      <span
                        className={`font-manrope text-[13.45px] leading-[1.19em] tracking-[-1.04%] ${
                          activeTab === tab.id
                            ? "text-[#3DDEFF]"
                            : "text-white/50"
                        }`}
                      >
                        {tab.title}
                      </span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={
                          activeTab === tab.id
                            ? "stroke-[#3DDEFF]"
                            : "stroke-white/50"
                        }
                      >
                        <path
                          d="M3.33334 8H12.6667M12.6667 8L8.00001 3.33334M12.6667 8L8.00001 12.6667"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    {/* Tab content */}
                    <div className="relative w-[350.45px] flex flex-col gap-2">
                      <h3 className="font-manrope font-medium text-[28px] leading-[1.3em] tracking-[-4.29%] text-white">
                        {tab.heading}
                      </h3>
                      <p className="font-manrope text-base leading-[1.5em] tracking-[0.875%] text-white/70">
                        {tab.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
