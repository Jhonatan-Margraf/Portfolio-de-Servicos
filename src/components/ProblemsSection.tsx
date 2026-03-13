import { Globe, Database, Smartphone, Cpu } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const items = [
  {
    icon: Globe,
    title: "Sites que fortalecem sua presença digital",
    description: "Um site bem desenvolvido aumenta o engajamento, transmite profissionalismo e gera mais confiança no seu produto ou serviço.",
  },
  {
    icon: Database,
    title: "Sistemas que organizam processos",
    description: "Sistemas personalizados ajudam a organizar informações, centralizar dados de clientes e melhorar a gestão do negócio.",
  },
  {
    icon: Smartphone,
    title: "Aplicativos que aproximam clientes",
    description: "Aplicativos mobile criam novas formas de interação com clientes, com acesso rápido e soluções mais práticas.",
  },
  {
    icon: Cpu,
    title: "Tecnologia aplicada a problemas reais",
    description: "Soluções que realmente fazem sentido para o negócio, trazendo mais organização, presença digital e eficiência.",
  },
];

const ProblemsSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Soluções</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Problemas que a Bear Flow <span className="gradient-text">resolve</span>
        </h2>
        <p className="text-muted-foreground">
          Muitos negócios possuem boas ideias e bons produtos, mas enfrentam dificuldades quando o assunto é tecnologia.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {items.map((item, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="bg-card rounded-2xl p-8 border border-border/50 hover:shadow-lg transition-shadow duration-300">
              <item.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemsSection;
