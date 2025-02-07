
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Add Inter font
    const link = document.createElement("link");
    link.href = "https://rsms.me/inter/inter.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <main className="bg-white">
      <HeroSection />
      <ServicesSection />
    </main>
  );
};

export default Index;
