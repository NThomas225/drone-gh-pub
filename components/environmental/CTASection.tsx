"use client";

export default function CTASection() {
  return (
    <section className="py-24 relative bg-slate-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[50%] -left-[20%] w-250 h-250 rounded-full bg-blue-500/10 blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-200 h-200 rounded-full bg-emerald-500/10 blur-3xl opacity-50 animate-pulse animation-delay-400"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center max-w-4xl">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight animate-fade-in-up">
          Interested?{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-cyan-400">
            
          </span>
        </h2>

        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto font-light animate-fade-in-up animation-delay-200">
          Please enquire below to find out more or get a free estimate.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
          <button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white text-lg font-semibold rounded-full transform hover:-translate-y-1 shadow-lg hover:shadow-emerald-500/30 w-full sm:w-auto btn-hover-sweep bg-linear-to-r from-emerald-500 to-emerald-600">
            Email
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-slate-600 text-white hover:border-white hover:bg-slate-800 text-lg font-semibold rounded-full transition-all duration-300 w-full sm:w-auto hover:-translate-y-1">
            Call
          </button>
        </div>
      </div>
    </section>
  );
}
