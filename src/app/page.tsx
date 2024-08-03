import HeroSection from "@/sections/HeroSection";
import PortfolioSection from "@/sections/PortfolioSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <HeroSection />
      <PortfolioSection />
    </main>
  );
}
