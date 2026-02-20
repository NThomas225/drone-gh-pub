"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function AquacultureSection() {
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
      className="py-20 md:py-32 bg-slate-50 overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
          {/* Text Content */}
          <div
            className={`flex-1 space-y-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight border-l-4 border-blue-500 pl-6">
              Fish Farms & <br />
              <span className="text-blue-600">Aquaculture Monitoring</span>
            </h2>

            <div className="text-lg text-slate-600 leading-relaxed space-y-6">
              <p>
                Maximize efficiency and sustainability in aquaculture with our
                aerial monitoring services. We provide detailed oversight of
                fish farm infrastructure, water quality indicators, and stock
                behavior patterns.
              </p>
              <p>
                Early detection of issues such as algae blooms or net breaches
                allows for prompt intervention, reducing losses and ensuring
                regulatory compliance. Our data integrates seamlessly into your
                management capability.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              {[
                "Infrastructure Checks",
                "Health Analysis",
                "Algae Detection",
              ].map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Image Content */}
          <div
            className={`flex-1 w-full relative group ${isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"}`}
          >
            <div className="relative rounded-4xl overflow-hidden shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
              <div className="aspect-4/3 relative w-full bg-slate-200">
                {/* Placeholder Image */}
                <Image
                  src="/forest.png"
                  alt="Drone view of aquaculture fish farm"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent pointer-events-none" />

              {/* Floating Badge */}
              <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm px-6 py-4 rounded-xl shadow-lg border-r-4 border-blue-500 text-right">
                <p className="text-sm font-bold text-slate-900">
                  Stock Protection
                </p>
                <p className="text-xs text-blue-600">Real-time Analysis</p>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/5 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
