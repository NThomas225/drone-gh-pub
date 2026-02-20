"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#111818] text-white py-4 sticky top-0 z-50">
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 group">
          {/* Simple SVG Drone Icon Placeholder */}
          <Image
            src={"/drone-survey-gh.svg"}
            alt="Drone Survey GH Logo"
            width={100}
            height={100}
            className="object-contain object-center"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 font-semibold text-sm tracking-wide">
          <div className="group relative cursor-pointer flex items-center gap-1 hover:text-emerald-400 transition-colors">
            SERVICES
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <Link href="#" className="hover:text-emerald-400 transition-colors">
            ABOUT US
          </Link>
          <Link href="#" className="hover:text-emerald-400 transition-colors">
            OUR WORK
          </Link>
          <div className="group relative cursor-pointer flex items-center gap-1 hover:text-emerald-400 transition-colors">
            RESOURCES
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <Link href="#" className="hover:text-emerald-400 transition-colors">
            CONTACT
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-bold text-sm tracking-wide transition-all transform hover:-translate-y-0.5 flex items-center gap-2">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
            GET A FREE QUOTE
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-8 h-8"
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

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#111818] border-t border-gray-800 p-4 flex flex-col gap-4 shadow-xl">
          <Link href="#" className="block py-2 hover:text-emerald-400">
            SERVICES
          </Link>
          <Link href="#" className="block py-2 hover:text-emerald-400">
            ABOUT US
          </Link>
          <Link href="#" className="block py-2 hover:text-emerald-400">
            OUR WORK
          </Link>
          <Link href="#" className="block py-2 hover:text-emerald-400">
            RESOURCES
          </Link>
          <Link href="#" className="block py-2 hover:text-emerald-400">
            CONTACT
          </Link>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-bold w-full">
            GET A FREE QUOTE
          </button>
        </div>
      )}
    </header>
  );
}
