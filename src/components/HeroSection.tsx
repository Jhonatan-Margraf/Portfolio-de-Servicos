import { motion } from "framer-motion";
import bearLogoSVG from "@/assets/bear-logo.svg";
import WhatsAppButton from "./WhatsAppButton";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center gradient-hero-bg overflow-hidden pt-20">
    {/* Decorative gradient orbs */}
    <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
    <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />

    <div className="container mx-auto px-4 text-center relative z-10">
      <motion.img
        src={bearLogoSVG}
        alt="Bear Flow Logo"
        className="w-[6.5rem] h-[6.5rem] mx-auto mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />

      <motion.h1
        className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl mx-auto mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Tecnologia sob medida para negócios que querem{" "}
        <span className="gradient-text">crescer.</span>
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Desenvolvimento de sites, sistemas e aplicativos personalizados que transformam processos manuais em soluções digitais eficientes e lucrativas.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <WhatsAppButton size="lg" />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
