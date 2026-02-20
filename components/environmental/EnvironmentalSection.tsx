"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function EnvironmentalSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Text Content */}
          <div
            className={`flex-1 space-y-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight border-l-4 border-emerald-500 pl-6">
              Environmental & <br />
              <span className="text-emerald-600">Wildlife Monitoring</span>
            </h2>

            <div className="text-lg text-slate-600 leading-relaxed space-y-6">
              <p>
                Our advanced drone technology offers a non-intrusive method for
                monitoring environmental changes and wildlife populations. By
                utilizing quiet, high-altitude UAVs, we collect critical data
                without disturbing sensitive ecosystems.
              </p>
              <p>
                Whether tracking migration patterns, assessing habitat health,
                or monitoring vegetation growth, our high-resolution aerial
                imagery and thermal data provide actionable insights for
                conservationists and researchers.
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {[
                "Minimal Disturbance",
                "Thermal Imaging",
                "Habitat Assessment",
                "Rapid Deployment",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-slate-700 font-medium"
                >
                  <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Image Content */}
          <div
            className={`flex-1 w-full relative group ${isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"}`}
          >
            <div className="relative rounded-4xl overflow-hidden shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
              <div className="aspect-4/3 relative w-full bg-slate-100">
                {/* Placeholder Image used to ensure visibility */}
                <Image
                  src="/city.png"
                  alt="Drone monitoring wildlife in a natural habitat"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent pointer-events-none" />

              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm px-6 py-4 rounded-xl shadow-lg border-l-4 border-emerald-500">
                <p className="text-sm font-bold text-slate-900">
                  Precision Data
                </p>
                <p className="text-xs text-emerald-600">
                  4K Resolution + Thermal
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
