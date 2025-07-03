import logo from "../assets/main-logo.png";

export default function Footer() {
  return (
    <footer className="relative w-full flex flex-col justify-stretch items-stretch px-[52px] bg-black">
      {/* Container */}
      <div className="flex flex-row justify-stretch items-stretch gap-12 py-6 w-full">
        {/* Logo Group */}
        <div className="relative w-[90px] h-[35px]">
          <img
            src={logo}
            alt="IGot Logo"
            className="w-full h-full object-contain filter brightness-110 contrast-110"
          />
        </div>

        {/* Navigation Menu */}
        <div className="flex flex-row items-center justify-center flex-1">
          <nav className="flex flex-row items-center">
            <a
              href="#introduce"
              className="flex flex-row justify-center items-center gap-2.5 px-4 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
            >
              <span
                className="text-[13.453125px] text-white opacity-60 font-normal hover:opacity-100 transition-opacity duration-200"
                style={{
                  fontFamily: '"Manrope", system-ui, -apple-system, sans-serif',
                  lineHeight: "1.189em",
                  letterSpacing: "-0.0104em",
                }}
              >
                Introduce
              </span>
            </a>
            <a
              href="#platform"
              className="flex flex-row justify-center items-center gap-2.5 px-4 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
            >
              <span
                className="text-[13.453125px] text-white opacity-60 font-normal hover:opacity-100 transition-opacity duration-200"
                style={{
                  fontFamily: '"Manrope", system-ui, -apple-system, sans-serif',
                  lineHeight: "1.189em",
                  letterSpacing: "-0.0104em",
                }}
              >
                Platform
              </span>
            </a>
            <a
              href="#solution"
              className="flex flex-row justify-center items-center gap-2.5 px-4 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
            >
              <span
                className="text-[13.5625px] text-white opacity-60 font-normal hover:opacity-100 transition-opacity duration-200"
                style={{
                  fontFamily: '"Manrope", system-ui, -apple-system, sans-serif',
                  lineHeight: "1.18em",
                  letterSpacing: "-0.0103em",
                }}
              >
                Solution
              </span>
            </a>
            <a
              href="#about"
              className="flex flex-row justify-center items-center gap-2.5 px-4 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
            >
              <span
                className="text-[13.453125px] text-white opacity-60 font-normal hover:opacity-100 transition-opacity duration-200"
                style={{
                  fontFamily: '"Manrope", system-ui, -apple-system, sans-serif',
                  lineHeight: "1.189em",
                  letterSpacing: "-0.0104em",
                }}
              >
                About us
              </span>
            </a>
            <a
              href="#contact"
              className="flex flex-row justify-center items-center gap-2.5 px-4 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
            >
              <span
                className="text-[13.453125px] text-white opacity-60 font-normal hover:opacity-100 transition-opacity duration-200"
                style={{
                  fontFamily: '"Manrope", system-ui, -apple-system, sans-serif',
                  lineHeight: "1.189em",
                  letterSpacing: "-0.0104em",
                }}
              >
                Contact
              </span>
            </a>
          </nav>
        </div>

        {/* Social Media Icons */}
        <div className="flex flex-row items-end gap-6 py-1 opacity-50">
          {/* Facebook */}
          <a
            href="#"
            className="flex flex-row items-center gap-2.5 p-0.5 hover:opacity-100 transition-opacity duration-200"
          >
            <div className="w-[17px] h-[17px] flex items-center justify-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 11.993 2.92547 15.3027 6.75 15.9028V10.3125H4.71875V8H6.75V6.2375C6.75 4.2325 7.944 3.125 9.77156 3.125C10.6466 3.125 11.5625 3.28125 11.5625 3.28125V5.25H10.5541C9.56 5.25 9.25 5.86672 9.25 6.5V8H11.4688L11.1141 10.3125H9.25V15.9028C13.0745 15.3027 16 11.993 16 8Z"
                  fill="rgba(255, 255, 255, 0.5)"
                />
              </svg>
            </div>
          </a>

          {/* Twitter */}
          <a
            href="#"
            className="flex flex-row items-center gap-2.5 p-0.5 hover:opacity-100 transition-opacity duration-200"
          >
            <div className="w-4 h-[17px] flex items-center justify-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6009 0.25H15.0544L9.69434 6.51L16 15.75H11.0627L7.19566 10.2832L2.77087 15.75H0.31595L6.04904 9.0668L0 0.25H5.06262L8.55811 5.2818L12.6009 0.25ZM11.7399 14.1702H13.0993L4.32392 1.53428H2.86506L11.7399 14.1702Z"
                  fill="rgba(255, 255, 255, 0.5)"
                />
              </svg>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="#"
            className="flex flex-row items-center gap-2.5 p-0.5 hover:opacity-100 transition-opacity duration-200"
          >
            <div className="w-[17px] h-[17px] flex items-center justify-center">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.2578 0.25H1.73438C0.914062 0.25 0.25 0.914062 0.25 1.73438V15.2578C0.25 16.0781 0.914062 16.7422 1.73438 16.7422H15.2578C16.0781 16.7422 16.7422 16.0781 16.7422 15.2578V1.73438C16.7422 0.914062 16.0781 0.25 15.2578 0.25ZM5.25 14.25H2.75V6.75H5.25V14.25ZM4 5.5C3.17969 5.5 2.5 4.82031 2.5 4S3.17969 2.5 4 2.5S5.5 3.17969 5.5 4S4.82031 5.5 4 5.5ZM14.25 14.25H11.75V10.625C11.75 9.58594 11.7344 8.24219 10.2969 8.24219C8.84375 8.24219 8.625 9.35938 8.625 10.5469V14.25H6.125V6.75H8.5V7.95312H8.53125C8.875 7.29688 9.74219 6.60938 11.0625 6.60938C13.5938 6.60938 14.25 8.21875 14.25 10.3125V14.25Z"
                  fill="rgba(255, 255, 255, 0.5)"
                />
              </svg>
            </div>
          </a>

          {/* Instagram */}
          <a
            href="#"
            className="flex flex-row items-center gap-2.5 p-0.5 hover:opacity-100 transition-opacity duration-200"
          >
            <div className="w-[17px] h-[17px] flex items-center justify-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 1.44062C10.1375 1.44062 10.3906 1.45 11.2313 1.4875C12.0125 1.52187 12.4344 1.65312 12.7188 1.7625C13.0969 1.90625 13.3719 2.08125 13.6594 2.36875C13.9469 2.65625 14.1219 2.93125 14.2656 3.30937C14.375 3.59375 14.5062 4.01562 14.5406 4.79687C14.5781 5.6375 14.5875 5.89062 14.5875 8.02812C14.5875 10.1656 14.5781 10.4187 14.5406 11.2594C14.5062 12.0406 14.375 12.4625 14.2656 12.7469C14.1219 13.125 13.9469 13.4 13.6594 13.6875C13.3719 13.975 13.0969 14.15 12.7188 14.2937C12.4344 14.4031 12.0125 14.5344 11.2313 14.5687C10.3906 14.6062 10.1375 14.6156 8 14.6156C5.8625 14.6156 5.60938 14.6062 4.76875 14.5687C3.9875 14.5344 3.56563 14.4031 3.28125 14.2937C2.90313 14.15 2.62813 13.975 2.34063 13.6875C2.05313 13.4 1.87813 13.125 1.73438 12.7469C1.625 12.4625 1.49375 12.0406 1.45938 11.2594C1.42188 10.4187 1.4125 10.1656 1.4125 8.02812C1.4125 5.89062 1.42188 5.6375 1.45938 4.79687C1.49375 4.01562 1.625 3.59375 1.73438 3.30937C1.87813 2.93125 2.05313 2.65625 2.34063 2.36875C2.62813 2.08125 2.90313 1.90625 3.28125 1.7625C3.56563 1.65312 3.9875 1.52187 4.76875 1.4875C5.60938 1.45 5.8625 1.44062 8 1.44062ZM8 0C5.82812 0 5.55625 0.009375 4.70313 0.046875C3.85313 0.084375 3.26875 0.221875 2.7625 0.41875C2.23125 0.625 1.78125 0.896875 1.33438 1.34375C0.8875 1.79062 0.615625 2.24062 0.409375 2.77187C0.2125 3.27812 0.075 3.8625 0.0375 4.7125C0 5.56562 -0.00937500 5.8375 -0.00937500 8.00937C-0.00937500 10.1812 0 10.4531 0.0375 11.3062C0.075 12.1562 0.2125 12.7406 0.409375 13.2469C0.615625 13.7781 0.8875 14.2281 1.33438 14.675C1.78125 15.1219 2.23125 15.3937 2.7625 15.6C3.26875 15.7969 3.85313 15.9344 4.70313 15.9719C5.55625 16.0094 5.82812 16.0187 8 16.0187C10.1719 16.0187 10.4437 16.0094 11.2969 15.9719C12.1469 15.9344 12.7312 15.7969 13.2375 15.6C13.7687 15.3937 14.2187 15.1219 14.6656 14.675C15.1125 14.2281 15.3844 13.7781 15.5906 13.2469C15.7875 12.7406 15.925 12.1562 15.9625 11.3062C16 10.4531 16.0094 10.1812 16.0094 8.00937C16.0094 5.8375 16 5.56562 15.9625 4.7125C15.925 3.8625 15.7875 3.27812 15.5906 2.77187C15.3844 2.24062 15.1125 1.79062 14.6656 1.34375C14.2187 0.896875 13.7687 0.625 13.2375 0.41875C12.7312 0.221875 12.1469 0.084375 11.2969 0.046875C10.4437 0.009375 10.1719 0 8 0Z"
                  fill="rgba(255, 255, 255, 0.5)"
                />
                <path
                  d="M8 3.89062C5.73125 3.89062 3.89062 5.73125 3.89062 8C3.89062 10.2688 5.73125 12.1094 8 12.1094C10.2688 12.1094 12.1094 10.2688 12.1094 8C12.1094 5.73125 10.2688 3.89062 8 3.89062ZM8 10.6656C6.52812 10.6656 5.33437 9.47187 5.33437 8C5.33437 6.52812 6.52812 5.33437 8 5.33437C9.47187 5.33437 10.6656 6.52812 10.6656 8C10.6656 9.47187 9.47187 10.6656 8 10.6656Z"
                  fill="rgba(255, 255, 255, 0.5)"
                />
              </svg>
            </div>
          </a>

          {/* YouTube */}
          <a
            href="#"
            className="flex flex-col gap-2.5 p-0.5 w-[25px] hover:opacity-100 transition-opacity duration-200"
          >
            <div className="w-full h-[15px] flex items-center justify-center">
              <svg
                width="20"
                height="14"
                viewBox="0 0 20 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.582 2.186c-.23-.86-.905-1.54-1.77-1.77C16.25 0 10 0 10 0S3.75 0 2.188.416c-.865.23-1.54.91-1.77 1.77C0 3.75 0 7 0 7s0 3.25.418 4.814c.23.86.905 1.54 1.77 1.77C3.75 14 10 14 10 14s6.25 0 7.812-.416c.865-.23 1.54-.91 1.77-1.77C20 10.25 20 7 20 7s0-3.25-.418-4.814zM8 10V4l5.2 3L8 10z"
                  fill="rgba(255, 255, 255, 0.5)"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}
