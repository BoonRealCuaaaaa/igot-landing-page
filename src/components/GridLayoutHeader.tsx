import type { FC } from "react";

const GridLayoutHeader: FC = () => {
  return (
    <div className="w-[1262px] mx-auto">
      <div className="flex flex-row gap-20 w-full pb-24">
        {/* Social Proof Tag */}
        <div className="flex items-center gap-3 py-2 self-start">
          <div className="w-2 h-2 rounded-full bg-white" />
          <span className="font-['IBM_Plex_Mono'] text-base text-white opacity-80 tracking-[-0.00875em]">
            Social Proof
          </span>
        </div>

        {/* Title Section */}
        <div className="flex flex-col gap-1">
          <h1 className="font-['Manrope'] text-[64px] leading-[1em] tracking-[-0.0375em] font-medium">
            <span className="text-white/50">Trusted by</span>
            <br />
            <span className="bg-gradient-to-b from-[#48BCFF] to-[#33FCFF] text-transparent bg-clip-text">
              Government & Global Accelerators
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default GridLayoutHeader;
