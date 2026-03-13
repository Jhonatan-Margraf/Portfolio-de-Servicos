import { Shield, Waves } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import bearLogoSVG from "@/assets/bear-logo.svg";

const AboutSection = () => (
  <section id="sobre" className="py-24 bg-card">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Sobre</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Conheça a <span className="gradient-text">Bear Flow</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="bg-background rounded-2xl p-8 md:p-12 border border-border/50">
            <img src={bearLogoSVG} alt="Bear Flow" className="w-[4.5rem] h-[4.5rem] mx-auto mb-8" />

            <p className="text-muted-foreground leading-relaxed mb-6">
              A Bear Flow nasceu com um objetivo simples: <strong className="text-foreground">usar tecnologia para resolver problemas reais de empresas.</strong>
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex gap-4 items-start">
                <Shield className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Bear</h4>
                  <p className="text-sm text-muted-foreground">Força, robustez e confiabilidade.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Waves className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Flow</h4>
                  <p className="text-sm text-muted-foreground">Processos que funcionam com fluidez, eficiência e naturalidade.</p>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-4">
              O diferencial está na <strong className="text-foreground">proximidade com o cliente</strong>. Cada projeto é desenvolvido de forma personalizada, entendendo as necessidades reais do negócio.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              O fundador possui formação técnica em Informática para Internet e cursa Bacharelado em Inteligência Artificial, além de ser fundador da startup <strong className="text-foreground">Peso na Granja</strong>, trazendo experiência prática com tecnologia aplicada a negócios.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default AboutSection;
