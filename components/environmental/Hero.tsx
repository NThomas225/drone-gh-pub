"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/banner-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay - adjusting opacity to match reference style (usually dark overlay) */}
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <div
          className={`transform transition-all duration-1000 ease-out ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl shadow-black drop-shadow-lg">
            Environmental, Aquaculture <br className="hidden md:block" />&
            Wildlife Monitoring by Drone
          </h1>
          <p className="mx-auto max-w-3xl text-lg font-medium md:text-2xl text-gray-100 shadow-black drop-shadow-md">
            Efficient, Non-Intrusive Solutions for Sustainable Practices and
            Conservation Efforts
          </p>
        </div>
      </div>
    </section>
  );
}
