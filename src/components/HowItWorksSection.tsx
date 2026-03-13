import { MessageSquare, Layout, Code2, Rocket } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    icon: MessageSquare,
    title: "Conversa inicial",
    description: "Entendemos como funciona seu negócio, quais processos precisam melhorar e qual tipo de solução faz mais sentido.",
  },
  {
    icon: Layout,
    title: "Planejamento e protótipo",
    description: "Criamos um protótipo que mostra como o sistema vai funcionar, permitindo visualizar o projeto antes do desenvolvimento.",
  },
  {
    icon: Code2,
    title: "Desenvolvimento",
    description: "Com foco em simplicidade, eficiência e boa experiência do usuário, desenvolvemos sua solução com tecnologia moderna.",
  },
  {
    icon: Rocket,
    title: "Entrega e evolução",
    description: "A solução é entregue pronta para uso e pode evoluir conforme seu negócio cresce, com novas funcionalidades ao longo do tempo.",
  },
];

const HowItWorksSection = () => (
  <section id="como-funciona" className="py-24 bg-card">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-16">
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Processo</p>
        <h2 className="text-3xl md:text-4xl font-bold">
          Como funciona o <span className="gradient-text">desenvolvimento</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          Criar um sistema, aplicativo ou site não precisa ser complicado. O processo é simples, transparente e focado nas necessidades do seu negócio.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {steps.map((step, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="text-center">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg">
                <step.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="text-sm font-semibold text-primary mb-1">0{i + 1}</div>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
