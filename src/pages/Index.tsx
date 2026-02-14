import StarryBackground from "@/components/StarryBackground";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import NumbersSection from "@/components/NumbersSection";
import OffersSection from "@/components/OffersSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <StarryBackground />
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <OffersSection />
        <NumbersSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
