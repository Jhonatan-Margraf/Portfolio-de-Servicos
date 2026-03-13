import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import CasesSection from "@/components/CasesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ProblemsSection from "@/components/ProblemsSection";
import AboutSection from "@/components/AboutSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <ProblemSolutionSection />
    <ProblemsSection />
    <HowItWorksSection />
    <CasesSection />
    <AboutSection />
    <TechnologiesSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
