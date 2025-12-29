import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import DownloadSection from "@/components/DownloadSection";
import AccessSection from "@/components/AccessSection";
import RegistrationSection from "@/components/RegistrationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <DownloadSection />
      <AccessSection />
      <RegistrationSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
