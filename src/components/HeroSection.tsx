import RotatingText from "./RotatingText";
import Particles from "./magicui/particles";

// Video will be served from public folder

// Import brand logos
import anidayLogo from "../assets/aniday.png";
import emdiLogo from "../assets/emdi.png";
import someBrandLogo from "../assets/some-brand.png";
import quatarLogo from "../assets/quatar.png";
import logo from "../assets/logo.png";

export default function HeroSection() {
  return (
    <section className="hero-bg relative w-full min-h-[768px] flex flex-col justify-stretch items-stretch px-[52px] overflow-hidden pt-20">
      {/* Enhanced fallback background with animation */}
      <div className="absolute inset-0 w-full h-full bg-[#0a0a0a]" />
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#0f1419] via-[#0a0a0a] to-[#1a1a2e] opacity-70" />
      <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[#000000] via-transparent to-[#16213e] opacity-30 animate-pulse" />

      {/* Video Background - Enhanced to match image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: "1",
            filter: "brightness(0.8) contrast(1.3) saturate(1)",
            mixBlendMode: "normal",
          }}
          onCanPlay={() => console.log("Video can play")}
          onError={(e) => console.log("Video error:", e)}
          onLoadStart={() => console.log("Video load started")}
        >
          <source src="/background-video.mp4" type="video/mp4" />
          <source src="./background-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Gradient overlay - lighter at top, darker at bottom like Figma */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-black"></div>
      </div>

      {/* Particles Background Effect - Single layer like in the image */}
      <Particles
        className="absolute inset-0 pointer-events-none z-10"
        quantity={35}
        ease={50}
        color="#ffffff"
        refresh={false}
        staticity={50}
      />

      {/* Gradient Blur Effect - Exact Figma specs */}
      <div className="gradient-blur absolute left-[216px] top-0 w-[576px] h-[123.37px] opacity-50 pointer-events-none z-10" />

      {/* Main Container - Exact Figma Layout: Container (row with gap-8) */}
      <div className="flex flex-row justify-stretch items-start gap-8 pt-16 pb-24 flex-1 relative z-20">
        {/* Tagline Column - Separate column for "Intro AI Agent" */}
        <div className="flex flex-col justify-start items-start w-auto min-w-[200px] ml-16">
          <div className="flex flex-row items-center gap-3 w-fit">
            <div className="w-2 h-2 bg-white rounded-lg flex-shrink-0" />
            <span
              className="text-base leading-6 tracking-[-0.00875em] text-white whitespace-nowrap font-normal"
              style={{
                fontFamily: '"IBM Plex Mono", "Courier New", monospace',
              }}
            >
              Intro AI Agent
            </span>
          </div>
        </div>

        {/* Col - Main content column with all remaining content */}
        <div className="flex flex-col justify-between flex-1 gap-32">
          {/* Title Section - Reduced gap for Figma spacing */}
          <div className="flex flex-col gap-12 w-full">
            {/* Title with Gap 12px */}
            <div className="flex flex-col gap-3 w-full">
              {/* Subtitle */}
              <h1
                className="text-base leading-6 tracking-[-0.00875em] text-white w-full font-normal"
                style={{
                  fontFamily: '"Manrope", system-ui, -apple-system, sans-serif',
                }}
              >
                Trusted by Governments and Enterprise Leaders
              </h1>

              {/* Main Text Section - Gap 4px as per Figma */}
              <div className="flex flex-col gap-1 w-full">
                {/* Static Text */}
                <div
                  className="font-medium text-6xl leading-none tracking-[-0.0375em] text-white"
                  style={{
                    fontFamily:
                      '"Manrope", system-ui, -apple-system, sans-serif',
                  }}
                >
                  Empowering businesses with
                </div>

                {/* Rotating Text Container - Exact Figma dimensions */}
                <div className="w-[1116px] h-[77px] relative">
                  <div className="absolute left-0 top-0 w-[1116px] h-16">
                    <RotatingText />
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="glassmorphism-btn flex flex-row justify-center items-center gap-2.5 px-4 py-2.5 rounded-[160px] w-fit hover:bg-white/25 hover:scale-105 transition-all duration-300 group relative overflow-hidden shadow-2xl shadow-black/20">
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 -top-1 -bottom-1 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full transition-transform duration-1000 group-hover:translate-x-full" />

              <span
                className="text-[13.453125px] leading-4 tracking-[-0.01041em] text-white relative z-10 font-normal"
                style={{
                  fontFamily: '"Manrope", system-ui, -apple-system, sans-serif',
                }}
              >
                Build project end-to-end
              </span>
              <div className="flex items-center justify-center gap-2.5 p-1 rounded-full bg-white/10 w-6 h-6 group-hover:bg-white/20 transition-colors duration-300">
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

          {/* Bottom Section - Flex layout with justify-between */}
          <div className="flex flex-row justify-between items-start w-full">
            {/* Badge Section - Left side */}
            <div className="flex flex-col gap-4 w-auto">
              <p
                className="text-sm leading-6 tracking-[-0.0286em] text-white opacity-50 font-normal"
                style={{
                  fontFamily: '"Manrope", system-ui, -apple-system, sans-serif',
                }}
              >
                Helping teams at the World's best companies
              </p>

              {/* Company Logos - Exact Figma specs: 416x24px container, 40px gap */}
              <div className="flex flex-row items-center gap-10 w-[416px] h-6">
                {/* ANIDAY Logo - 112x28px */}
                <div className="flex justify-center items-center w-[112px] h-[28px]">
                  <img
                    src={anidayLogo}
                    alt="Aniday"
                    className="w-full h-full object-contain filter brightness-0 invert opacity-60"
                  />
                </div>

                {/* EMDI Logo - 32x32px */}
                <div className="flex justify-center items-center w-8 h-8">
                  <img
                    src={emdiLogo}
                    alt="EMDI"
                    className="w-full h-full object-contain opacity-60"
                  />
                </div>

                {/* Some Brand Logo - 32x32px */}
                <div className="flex justify-center items-center w-8 h-8">
                  <img
                    src={someBrandLogo}
                    alt="Some Brand"
                    className="w-full h-full object-contain opacity-60"
                  />
                </div>

                {/* Qatar Logo - 112x32px */}
                <div className="flex justify-center items-center w-[112px] h-8">
                  <img
                    src={quatarLogo}
                    alt="Qatar"
                    className="w-full h-full object-contain filter brightness-0 invert opacity-60"
                  />
                </div>
              </div>
            </div>

            {/* Introducing Section - Right side */}
            <div className="border-l border-white/16 pl-[50px] flex flex-col gap-5 w-fit opacity-80">
              <div className="flex flex-row items-center gap-4 w-fit">
                {/* Logo */}
                <div className="w-[23px] h-[23px] flex items-center justify-center">
                  <img
                    src={logo}
                    alt="igot.ai"
                    className="w-full h-full object-contain filter brightness-0 invert"
                  />
                </div>
                <h2
                  className="text-base leading-[21px] tracking-[-0.00875em] text-white w-[145.5px] h-[21px] font-normal"
                  style={{
                    fontFamily: '"IBM Plex Mono", "Courier New", monospace',
                  }}
                >
                  Introducing
                </h2>
              </div>

              <div className="flex flex-row justify-stretch items-stretch gap-2.5 w-[334px]">
                <p
                  className="text-base leading-6 tracking-[-0.00875em] text-white opacity-50 flex-1 font-normal"
                  style={{
                    fontFamily:
                      '"Manrope", system-ui, -apple-system, sans-serif',
                  }}
                >
                  Powering automation for high-stakes environments—government,
                  finance, and national-scale operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
