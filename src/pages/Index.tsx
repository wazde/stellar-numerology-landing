import StarryBackground from "@/components/StarryBackground";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
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
        <ServicesSection />
        <OffersSection />
        <NumbersSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
