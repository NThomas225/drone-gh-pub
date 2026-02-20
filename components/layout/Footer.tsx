"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Main Footer Section - Light Green Background */}
      <div className="bg-[#dcfce7] py-16 px-6">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo & Info */}
          <div className="space-y-6">
            <div className="flex flex-col leading-none">
              <div className="flex items-center gap-2 mb-2">
                {/* Icon */}
                <svg
                  className="w-8 h-8 text-slate-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                <span className="font-bold text-xl tracking-wider text-slate-900">
                  ABOVE GROUND
                </span>
              </div>
              <span className="font-bold text-sm tracking-[0.4em] text-slate-900 pl-10">
                SURVEYS
              </span>
            </div>
            <p className="text-slate-700 text-sm leading-relaxed">
              Independent aerial surveying specialists based in Kent, trusted
              UK-wide by contractors, property owners, and facilities managers.
              We don't carry out repairs, ensuring truly impartial inspections
              with no vested interest in finding faults.
            </p>
          </div>

          {/* Column 2: Services 1 */}
          <div>
            <h3 className="font-bold text-slate-900 tracking-[0.2em] mb-6 text-sm uppercase">
              Our Services
            </h3>
            <ul className="space-y-3 text-sm text-slate-700 font-medium">
              {[
                "Building Inspections",
                "Commercial Roof Leak Testing",
                "Drone Photogrammetry & 3D Mapping Services",
                "Drone Roof Inspection",
                "Environmental Inspections",
                "Insurance Inspections and Claims",
                "Internal Loft Inspections",
                "Marketing Footage",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 group cursor-pointer hover:text-emerald-700"
                >
                  <span className="text-emerald-600 mt-0.5">»</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services 2 */}
          <div>
            <div className="h-6 mb-5 hidden lg:block"></div>{" "}
            {/* Spacer to align with column 2 */}
            <h3 className="font-bold text-slate-900 tracking-[0.2em] mb-6 text-sm uppercase lg:hidden">
              More Services
            </h3>
            <ul className="space-y-3 text-sm text-slate-700 font-medium">
              {[
                "Premium Aerial Property Photography",
                "Pre-Purchase Roof Survey",
                "Roof Inspection",
                "Solar Panel Inspection",
                "Subsidence Drone Surveys",
                "Thermal Imaging",
                "Wind Turbine Inspection",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 group cursor-pointer hover:text-emerald-700"
                >
                  <span className="text-emerald-600 mt-0.5">»</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social & Contact */}
          <div>
            <h3 className="font-bold text-slate-900 tracking-[0.2em] mb-6 text-sm uppercase">
              Let's Connect
            </h3>
            <div className="flex gap-4 mb-8">
              {/* Social Icons Placeholder - Circular */}
              <div className="w-10 h-10 bg-[#111818] rounded-full flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-colors cursor-pointer hover-pulse">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="w-10 h-10 bg-[#111818] rounded-full flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-colors cursor-pointer hover-pulse">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="w-10 h-10 bg-[#111818] rounded-full flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-colors cursor-pointer hover-pulse">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>

            <h3 className="font-bold text-slate-900 tracking-[0.2em] mb-6 text-sm uppercase">
              Follow Us
            </h3>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-[#111818] rounded-full flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-colors cursor-pointer hover-pulse">
                {/* Insta icon */}
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    ry="5"
                    strokeWidth={2}
                  ></rect>
                  <path
                    d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                    strokeWidth={2}
                  ></path>
                  <line
                    x1="17.5"
                    y1="6.5"
                    x2="17.51"
                    y2="6.5"
                    strokeWidth={2}
                  ></line>
                </svg>
              </div>
              <div className="w-10 h-10 bg-[#111818] rounded-full flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-colors cursor-pointer hover-pulse">
                {/* Facebook icon */}
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Dark */}
      <div className="bg-[#0f172a] text-slate-400 py-6 px-6 text-xs border-t border-slate-800">
        <div className="container mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2025 Above Ground Surveys. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="hover:text-white hover:underline text-orange-500"
            >
              Cookie Policy
            </Link>
            <span className="text-slate-600">|</span>
            <Link
              href="#"
              className="hover:text-white hover:underline text-orange-500"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
