import type { ReactNode } from "react";
import AnimatedStats from "./AnimatedStats";
import GridLayoutHeader from "./GridLayoutHeader";

// Import images
import logo from "../assets/logo.png";
import tekaproLogo from "../assets/tekapro.png";
import naomiImage from "../assets/naomi-barake.jpg";
import starBackground from "../assets/star-background.png";
import saigonInnovation from "../assets/saigon-innovation.svg";
import michaelImage from "../assets/michael-brown.jpg";
import kiemToanImage from "../assets/kiem-toan.jpg";
import qualcommLogo from "../assets/qualcom.png";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className = "" }: CardProps) => (
  <div className={`w-[420px] h-[420px] ${className}`}>{children}</div>
);

export default function GridLayout() {
  return (
    <div className="bg-black">
      <GridLayoutHeader />
      <div className="w-[1262px] mx-auto">
        <div className="grid auto-rows-[420px] grid-cols-3 gap-[2px] bg-black">
          {/* Row 1, Col 1 - Multi-agent orchestration */}
          <Card className="bg-[#00E5FF] rounded-none flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-6 left-6">
              <img src={logo} alt="Logo" className="w-12 h-12 invert" />
            </div>
            <div className="p-8 mt-auto text-right">
              <h2 className="text-4xl font-bold text-black leading-tight mb-2">
                Multi-agent
                <br />
                orchestration
              </h2>
              <p className="text-black/80 text-lg">
                across teams and processes
              </p>
            </div>
          </Card>

          {/* Row 1, Col 2 - TecaPro */}
          <Card className="bg-white rounded-none flex flex-col items-center relative">
            <p className="text-[#475467] text-base absolute top-8">
              TecaPro Ltd.
            </p>
            <div className="h-full w-full flex items-center justify-center">
              <div className="w-[180px]">
                <img
                  src={tekaproLogo}
                  alt="TecaPro"
                  className="w-full"
                  style={{ filter: "grayscale(100%)" }}
                />
              </div>
            </div>
          </Card>

          {/* Row 1, Col 3 - Naomi Bakare */}
          <Card className="bg-slate-800 rounded-none flex flex-col text-white relative overflow-hidden">
            <div className="absolute inset-0">
              <img
                src={naomiImage}
                alt="Naomi Bakare"
                className="object-cover w-full h-full brightness-75"
              />
            </div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="p-6">
                <h3 className="text-[32px] font-normal text-white mb-1">
                  Naomi Bakare
                </h3>
                <p className="text-[#E4E7EC] text-base font-normal">
                  Head of Ops & Finance at Safari AI
                </p>
              </div>
              <div className="mt-auto p-6">
                <blockquote className="text-[18px] leading-[28px] text-white font-normal">
                  "This tool was exactly what I needed! It saves me the headache
                  of finance tasks and lets me focus on delivering my services."
                </blockquote>
              </div>
            </div>
          </Card>

          {/* Row 2, Col 1 - TOP 1 AI STAR */}
          <Card className="bg-black rounded-none flex flex-col relative overflow-hidden">
            <div className="absolute inset-0">
              <img
                src={starBackground}
                alt="Star Background"
                className="object-cover w-full h-full opacity-60"
              />
            </div>
            <div className="relative z-10 p-8 flex flex-col h-full">
              <p className="text-gray-400 text-sm">TOP 1 AI STAR 2024</p>
              <div className="flex-1 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0">
                    <img
                      src={saigonInnovation}
                      alt=""
                      className="w-[180px] h-[72px] invert"
                    />
                  </div>
                  <img
                    src={saigonInnovation}
                    alt="Saigon Innovation Hub"
                    className="w-[180px] h-[72px] invert relative z-10"
                  />
                </div>
              </div>
            </div>
          </Card>

          {/* Row 2, Col 2-3 - AI Impact (spans 2 columns) */}
          <div className="col-span-2 w-[842px] h-[420px] bg-[#475467] rounded-none p-16 flex flex-col justify-between text-white">
            <div>
              <h2 className="text-[48px] font-normal leading-[56px] tracking-[-0.02em]">
                AI impact you can
                <br />
                measure
              </h2>
            </div>
            <AnimatedStats />
          </div>

          {/* Row 3, Col 1 - Michael Brown */}
          <Card className="bg-slate-900 rounded-none p-6 flex flex-col text-white relative overflow-hidden">
            <div className="absolute inset-0">
              <img
                src={michaelImage}
                alt="Michael Brown"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold">Michael Brown</h3>
                <p className="text-gray-300 text-sm mb-4">
                  VP of Finance at Horizon Corp.
                </p>
              </div>
              <blockquote className="text-sm leading-relaxed">
                "Game-changing automation has cut our report generation time.
                Predictive analytics help us forecast accurately."
              </blockquote>
            </div>
          </Card>

          {/* Row 3, Col 2 - State Audit of Vietnam */}
          <Card className="bg-white rounded-none p-0 flex flex-col items-center">
            <div className="w-full text-center py-8">
              <p className="text-gray-600 text-sm">State Audit of Vietnam</p>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <img
                src={kiemToanImage}
                alt="State Audit of Vietnam"
                className="w-[108px] h-[108px] object-contain"
                style={{ filter: "grayscale(100%)" }}
              />
            </div>
          </Card>

          {/* Row 3, Col 3 - Top 10 QVIC 2025 */}
          <Card className="bg-[#1A1A1A] rounded-none flex flex-col items-center">
            <div className="w-full text-center py-8">
              <p className="text-gray-400 text-sm">Top 10 QVIC 2025</p>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <img
                src={qualcommLogo}
                alt="Qualcomm Vietnam Innovation Challenge"
                className="w-[180px] h-[72px] object-contain"
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
