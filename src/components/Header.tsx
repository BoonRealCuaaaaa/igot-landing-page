import React from "react";
import logoWithText from "../assets/logo-with-text.png";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-black/[0.14] backdrop-blur-[20px] border-b border-white/10">
        <div className="w-full max-w-[1440px] mx-auto px-[52px] py-4">
          <div className="flex items-center justify-between">
            {/* Logo - 90x35px */}
            <div className="flex items-center">
              <img
                src={logoWithText}
                alt="igot.ai"
                className="w-[90px] h-[35px] object-contain filter brightness-0 invert"
              />
            </div>

            {/* Navigation Menu - Manrope 13.453125px */}
            <nav className="hidden md:flex items-center">
              <a
                href="#introduce"
                className="text-white/[0.59] hover:text-white transition-colors duration-200 px-4 py-2 text-[13.453125px] font-normal leading-[1.189] tracking-[-0.010406]"
                style={{
                  fontFamily: '"Manrope", system-ui, -apple-system, sans-serif',
                }}
              >
                Introduce
              </a>
              <a
                href="#platform"
                className="text-white/[0.59] hover:text-white transition-colors duration-200 px-4 py-2 text-[13.453125px] font-normal leading-[1.189] tracking-[-0.010406]"
                style={{
                  fontFamily: '"Manrope", system-ui, -apple-system, sans-serif',
                }}
              >
                Platform
              </a>
              <a
                href="#solution"
                className="text-white/[0.59] hover:text-white transition-colors duration-200 px-4 py-2 text-[13.5625px] font-normal leading-[1.180] tracking-[-0.010323]"
                style={{
                  fontFamily: '"Manrope", system-ui, -apple-system, sans-serif',
                }}
              >
                Solution
              </a>
              <a
                href="#about"
                className="text-white/[0.59] hover:text-white transition-colors duration-200 px-4 py-2 text-[13.453125px] font-normal leading-[1.189] tracking-[-0.010406]"
                style={{
                  fontFamily: '"Manrope", system-ui, -apple-system, sans-serif',
                }}
              >
                About us
              </a>
              <a
                href="#contact"
                className="text-white/[0.59] hover:text-white transition-colors duration-200 px-4 py-2 text-[13.453125px] font-normal leading-[1.189] tracking-[-0.010406]"
                style={{
                  fontFamily: '"Manrope", system-ui, -apple-system, sans-serif',
                }}
              >
                Contact
              </a>
            </nav>

            {/* Book a demo button - Exact Figma specs */}
            <div className="flex items-center">
              <button
                className="bg-white/10 backdrop-blur-[15px] hover:bg-white/20 text-white rounded-[160px] transition-all duration-200 flex items-center text-[13.453125px] font-normal leading-[1.189] tracking-[-0.010406]"
                style={{
                  fontFamily: '"Manrope", system-ui, -apple-system, sans-serif',
                  padding: "10px 16px",
                  gap: "10px",
                }}
              >
                <div
                  className="w-3 h-3 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "rgba(51, 252, 255, 0.12)" }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                </div>
                <span>Book a demo</span>
              </button>

              {/* Mobile menu button */}
              <button className="md:hidden text-white ml-4">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
