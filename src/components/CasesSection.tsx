import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import appPrint from "@/assets/app.png";
import sistemaPrint from "@/assets/sistema.png";
import webPrint from "@/assets/Web.png";

interface CaseCardProps {
  headline: string;
  description: string;
  features: string[];
  values: string[];
  imageSrc: string;
  imageAlt: string;
  delay: number;
}

const CaseCard = ({ headline, description, features, values, imageSrc, imageAlt, delay }: CaseCardProps) => (
  <AnimatedSection delay={delay}>
    <motion.div
      whileHover={{ y: -6, scale: 1.03 }}
      className="group bg-card rounded-2xl shadow-md hover:shadow-xl border border-border/50 overflow-hidden transition-shadow duration-300"
    >
      <div className="bg-muted h-64 border-b border-border/50 p-3 overflow-hidden">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-contain object-center rounded-md bg-background transition-transform duration-500 ease-out group-hover:scale-125 cursor-zoom-in"
          loading="lazy"
        />
      </div>

      <div className="p-8">
        <h3 className="text-xl font-bold mb-3 gradient-text">{headline}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-foreground mb-2">Funcionalidades:</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            {features.map((f, i) => <li key={i}>• {f}</li>)}
          </ul>
        </div>

        <div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
          <h4 className="text-sm font-semibold text-primary mb-2">Valor entregue:</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            {values.map((v, i) => <li key={i}>✓ {v}</li>)}
          </ul>
        </div>
      </div>
    </motion.div>
  </AnimatedSection>
);

const CasesSection = () => (
  <section id="cases" className="py-24">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-16">
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Portfólio</p>
        <h2 className="text-3xl md:text-4xl font-bold">Cases de <span className="gradient-text">Projetos</span></h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <CaseCard
          delay={0.1}
          headline="Inteligência artificial aplicada à suinocultura."
          description="Aplicativo mobile para gestão completa de granjas com visão computacional para estimativa de peso de suínos por imagem em tempo real."
          features={[
            "Controle de lotes e baias",
            "Registro de quantidade de animais",
            "Histórico e análise de crescimento",
            "Predição baseada em genética e idade",
            "Alertas de peso fora do esperado",
          ]}
          values={[
            "Redução de manejo manual",
            "Dados em tempo real",
            "Apoio à tomada de decisão",
          ]}
          imageSrc={appPrint}
          imageAlt="Print do app mobile"
        />
        <CaseCard
          delay={0.2}
          headline="Adeus ao papel. Bem-vindo à organização digital."
          description="Sistema web para oficinas mecânicas que precisam organizar clientes e serviços de forma eficiente."
          features={[
            "Cadastro de clientes",
            "Emissão de ordens de serviço",
            "Histórico de serviços",
            "Busca rápida de clientes",
            "Centralização de informações",
          ]}
          values={[
            "Economia de papel",
            "Maior organização",
            "Histórico acessível em segundos",
          ]}
          imageSrc={sistemaPrint}
          imageAlt="Print do sistema desktop"
        />
        <CaseCard
          delay={0.3}
          headline="Presença digital para uma startup de desafios."
          description="Desenvolvimento do site para a plataforma DareU, uma startup focada em desafios lúdicos e engajamento digital."
          features={[
            "Apresentação do produto ao mercado",
            "Transmissão de seriedade",
            "Presença digital moderna",
            "Identidade visual forte",
          ]}
          values={[
            "Posicionamento profissional",
            "Identidade digital forte",
            "Maior credibilidade no lançamento",
          ]}
          imageSrc={webPrint}
          imageAlt="Print do site desktop"
        />
      </div>
    </div>
  </section>
);

export default CasesSection;
