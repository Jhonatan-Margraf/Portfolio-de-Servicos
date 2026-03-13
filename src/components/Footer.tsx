import bearLogoSVG from "@/assets/bear-logo.svg";

const Footer = () => (
  <footer className="py-8 border-t border-border/50">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <img src={bearLogoSVG} alt="Bear Flow" className="w-9 h-9" />
        <span className="text-sm font-semibold gradient-text">Bear Flow</span>
      </div>
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Bear Flow. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
