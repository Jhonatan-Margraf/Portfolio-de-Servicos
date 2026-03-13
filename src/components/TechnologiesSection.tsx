import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import flutterIcon from "@/assets/Flutter.png";
import pythonIcon from "@/assets/Python.png";
import figmaIcon from "@/assets/Figma.png";
import iaIcon from "@/assets/IA.png";
import visionIcon from "@/assets/Vision.png";

const techs = [
  { name: "Flutter", icon: flutterIcon },
  { name: "Python", icon: pythonIcon },
  { name: "Figma", icon: figmaIcon },
  { name: "Inteligência Artificial", icon: iaIcon },
  { name: "Visão Computacional", icon: visionIcon },
  { name: "APIs", emoji: "🔗" },
  { name: "Sistemas Web", emoji: "💻" },
  { name: "Aplicativos Web", emoji: "📲" },
];

const TechnologiesSection = () => (
  <section id="tecnologias" className="py-24">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-16">
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Stack</p>
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="gradient-text">Tecnologias</span> que utilizamos
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
        {techs.map((tech, i) => (
          <AnimatedSection key={i} delay={i * 0.05}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-card rounded-2xl p-6 text-center border border-border/50 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              {tech.icon ? (
                <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain mx-auto mb-3" loading="lazy" />
              ) : (
                <span className="text-3xl block mb-3">{tech.emoji}</span>
              )}
              <span className="text-sm font-semibold">{tech.name}</span>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TechnologiesSection;
