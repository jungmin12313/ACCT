import ThreeCanvas from "@/components/visuals/ThreeCanvas";
import Hero from "@/components/sections/Hero";
import ProblemSection from "@/components/sections/ProblemSection";
import ServiceIntro from "@/components/sections/ServiceIntro";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col bg-radial">
      {/* Background - Three.js */}
      <ThreeCanvas />

      {/* Content Layer */}
      <div className="relative z-10 w-full flex flex-col">
        <Hero />
        <ProblemSection />
        <ServiceIntro />
        <Stats />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
