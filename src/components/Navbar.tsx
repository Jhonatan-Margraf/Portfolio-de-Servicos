import { useState } from "react";
import { Menu, X } from "lucide-react";
import bearLogoSVG from "@/assets/bear-logo.svg";
import WhatsAppButton from "./WhatsAppButton";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#cases", label: "Projetos" },
    { href: "#como-funciona", label: "Como funciona" },
    { href: "#sobre", label: "Sobre" },
    { href: "#tecnologias", label: "Tecnologias" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#" className="flex items-center gap-2">
          <img src={bearLogoSVG} alt="Bear Flow" className="w-11 h-11" />
          <span className="text-xl font-bold gradient-text">Bear Flow</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <WhatsAppButton />
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm font-medium text-muted-foreground hover:text-foreground">
              {l.label}
            </a>
          ))}
          <WhatsAppButton />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
