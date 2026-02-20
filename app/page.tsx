import Hero from "@/components/environmental/Hero";
import EnvironmentalSection from "@/components/environmental/EnvironmentalSection";
import AquacultureSection from "@/components/environmental/AquacultureSection";
import CTASection from "@/components/environmental/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <EnvironmentalSection />
      <AquacultureSection />
      <CTASection />
    </main>
  );
}
