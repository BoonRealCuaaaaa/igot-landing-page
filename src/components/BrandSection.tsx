import logo from "../assets/main-logo.png";
import brandBackground from "../assets/brand-background.mp4";
import Particles from "./magicui/particles";

export default function BrandSection() {
  return (
    <section className="relative w-full flex flex-col justify-stretch items-stretch px-[52px] overflow-hidden bg-black">
      {/* Background with brand video - enhanced like HeroSection */}
      <div className="absolute inset-0 w-full h-full">
        {/* Enhanced fallback background with animation */}
        <div className="absolute inset-0 w-full h-full bg-[#0a0a0a]" />
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#0f1419] via-[#0a0a0a] to-[#1a1a2e] opacity-70" />
        <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[#000000] via-transparent to-[#16213e] opacity-30 animate-pulse" />

        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              opacity: "0.8",
              filter: "brightness(0.7) contrast(1.1) saturate(1)",
              mixBlendMode: "normal",
            }}
          >
            <source src={brandBackground} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Gradient overlay - lighter at top, darker at bottom like HeroSection */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-black"></div>
        </div>

        {/* Exact Figma gradient overlay */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background: `linear-gradient(135deg, #000000 0%, rgba(0,0,0,0) 100%)`,
          }}
        />
      </div>

      {/* Particles Background Effect - Single layer like HeroSection */}
      <Particles
        className="absolute inset-0 pointer-events-none z-10"
        quantity={35}
        ease={50}
        color="#ffffff"
        refresh={false}
        staticity={50}
      />

      {/* Container - exact Figma layout */}
      <div className="relative z-10 flex flex-col items-center justify-stretch gap-12 py-24 w-full">
        {/* Row - exact Figma specifications */}
        <div className="flex flex-row justify-between items-start w-full">
          {/* Sidebar - Left Column */}
          <div className="flex flex-col gap-[126px] flex-1">
            {/* Tagline - exact Figma specs */}
            <div className="flex flex-row items-center gap-3 py-2 w-[220px]">
              <div className="w-2 h-2 bg-white rounded-lg flex-shrink-0" />
              <span
                className="text-base leading-6 tracking-[-0.00875em] text-white font-normal"
                style={{
                  fontFamily: '"IBM Plex Mono", "Courier New", monospace',
                }}
              >
                Next steps
              </span>
            </div>

            {/* Text Content */}
            <div className="flex flex-col gap-11 w-full">
              {/* Main Heading - exact Figma specs */}
              <div className="flex flex-col gap-2 w-full">
                <h2
                  className="text-[64px] leading-none tracking-[-0.0375em] text-white opacity-50 font-medium"
                  style={{
                    fontFamily:
                      '"Manrope", system-ui, -apple-system, sans-serif',
                    lineHeight: "1em",
                  }}
                >
                  Have a use case in mind?
                </h2>
                <h2
                  className="text-[64px] leading-none tracking-[-0.0375em] font-medium w-[385.7px]"
                  style={{
                    fontFamily:
                      '"Manrope", system-ui, -apple-system, sans-serif',
                    lineHeight: "1em",
                    background:
                      "linear-gradient(180deg, #48BCFF 0%, #33FCFF 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Let's talk
                </h2>
              </div>

              {/* CTA Button - exact Figma specs */}
              <button
                className="flex flex-row justify-center items-center gap-2.5 px-4 py-2.5 rounded-[160px] w-fit hover:bg-white/25 hover:scale-105 transition-all duration-300 group relative overflow-hidden"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(15px)",
                  WebkitBackdropFilter: "blur(15px)",
                }}
              >
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 -top-1 -bottom-1 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full transition-transform duration-1000 group-hover:translate-x-full" />

                <span
                  className="text-[13.453125px] text-white relative z-10 font-normal"
                  style={{
                    fontFamily:
                      '"Manrope", system-ui, -apple-system, sans-serif',
                    lineHeight: "1.189em",
                    letterSpacing: "-0.0104em",
                  }}
                >
                  Book a Demo
                </span>
                <div
                  className="flex items-center justify-center p-1 rounded-full w-6 h-6 group-hover:bg-white/20 transition-colors duration-300"
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300"
                  >
                    <path
                      d="M3.33334 8H12.6667M12.6667 8L8.66668 4M12.6667 8L8.66668 12"
                      stroke="white"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            </div>

            {/* Subtitle - exact Figma specs */}
            <p
              className="text-[13.453125px] text-white opacity-70 font-light w-full"
              style={{
                fontFamily: '"Manrope", system-ui, -apple-system, sans-serif',
                lineHeight: "1.561em",
                letterSpacing: "0.0104em",
              }}
            >
              You'll hear back in less than 24 hours
            </p>
          </div>

          {/* Title - Right Column with Logo */}
          <div className="flex flex-col justify-center items-end gap-4 w-[442.67px]">
            <div className="relative w-[531px] h-[531px] flex items-center justify-center">
              {/* Main Logo - Keep original */}
              <div className="w-[448.89px] h-[443.94px] flex items-center justify-center">
                <img
                  src={logo}
                  alt="IGot Main Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
