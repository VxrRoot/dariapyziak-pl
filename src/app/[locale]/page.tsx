import HeroSection from "@/sections/HeroSection";
import PortfolioSection from "@/sections/PortfolioSection";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Daria Pyziak Design - Portfolio Projekty graficzne",
//   description:
//     "Zaprojektujmy Twoją markę. Branding. Logo. Strony internetowe. Aplikacje. Materiały drukowane. Grafiki.",
//   robots: {
//     index: true,
//     follow: true,
//   },
//   openGraph: {
//     title: "Daria Pyziak Design - Portfolio Projekty graficzne",
//     description:
//       "Zaprojektujmy Twoją markę. Branding. Logo. Strony internetowe. Aplikacje. Materiały drukowane. Grafiki.",
//   },
// };

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PortfolioSection />
    </main>
  );
}
