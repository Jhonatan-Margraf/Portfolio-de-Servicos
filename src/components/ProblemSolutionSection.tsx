import { AlertTriangle, CheckCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const ProblemSolutionSection = () => (
  <section className="py-24 bg-card">
    <div className="container mx-auto px-4">
      <AnimatedSection className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Seu negócio ainda depende de <span className="gradient-text">processos manuais?</span>
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
        <AnimatedSection delay={0.1}>
          <div className="bg-destructive/5 rounded-2xl p-8 border border-destructive/10">
            <AlertTriangle className="w-8 h-8 text-destructive mb-4" />
            <h3 className="text-xl font-semibold mb-4">O problema</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Perda de tempo com tarefas repetitivas</li>
              <li>• Erros frequentes em processos manuais</li>
              <li>• Dificuldade de organização</li>
              <li>• Falta de dados para tomada de decisão</li>
            </ul>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
            <CheckCircle className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-4">A solução</h3>
            <p className="text-muted-foreground">
              A <strong className="text-foreground">Bear Flow</strong> cria sistemas sob medida, desenvolvidos especificamente para a realidade do seu negócio. Transformamos processos em software inteligente, rápido e confiável.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default ProblemSolutionSection;
