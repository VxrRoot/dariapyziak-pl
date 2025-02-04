import HeroSection from "@/sections/HeroSection";
import PortfolioSection from "@/sections/PortfolioSection";

export const revalidate = 300;

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PortfolioSection />
    </main>
  );
}
