import AnimatedSection from "./AnimatedSection";
import WhatsAppButton from "./WhatsAppButton";

const ContactSection = () => (
  <section id="contato" className="py-24 bg-card">
    <div className="container mx-auto px-4 text-center">
      <AnimatedSection>
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Contato</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Vamos transformar sua ideia em <span className="gradient-text">software.</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-10">
          Se você tem um processo manual, uma ideia de sistema ou quer digitalizar seu negócio, podemos construir a solução ideal.
        </p>
        <WhatsAppButton size="lg" />
      </AnimatedSection>
    </div>
  </section>
);

export default ContactSection;
