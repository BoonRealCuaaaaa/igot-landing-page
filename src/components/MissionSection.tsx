import React from "react";

const MissionSection: React.FC = () => {
  return (
    <section className="bg-black w-full px-[52px] py-24">
      <div className="max-w-[1336px] mx-auto">
        <div className="flex flex-row justify-between items-start">
          {/* Tagline */}
          <div className="flex items-center gap-3 py-2">
            <div className="w-2 h-2 bg-white rounded-lg"></div>
            <span
              className="text-white text-base leading-6 tracking-[-0.00875em] font-normal"
              style={{
                fontFamily: '"IBM Plex Mono", "Courier New", monospace',
              }}
            >
              Our Mission
            </span>
          </div>

          {/* Content Columns */}
          <div className="w-[1116px] flex flex-row gap-12">
            <div className="flex-1">
              <p
                className="text-white text-base leading-6 tracking-[-0.00875em] font-normal"
                style={{
                  fontFamily: '"Manrope", system-ui, -apple-system, sans-serif',
                }}
              >
                We believe AI Agents are the next evolution of digital
                transformation.
              </p>
            </div>
            <div className="flex-1">
              <p
                className="text-white text-base leading-6 tracking-[-0.00875em] font-normal"
                style={{
                  fontFamily: '"Manrope", system-ui, -apple-system, sans-serif',
                }}
              >
                iGOT.AI enables companies to automate, reason, and scale with
                intelligent Agents – no-code, enterprise-grade, and globally
                deployable.
              </p>
            </div>
            <div className="flex-1">
              <p
                className="text-white text-base leading-6 tracking-[-0.00875em] font-normal"
                style={{
                  fontFamily: '"Manrope", system-ui, -apple-system, sans-serif',
                }}
              >
                From Vietnam to the world, we're reshaping the AI foundation for
                government, finance, and large-scale enterprise operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
