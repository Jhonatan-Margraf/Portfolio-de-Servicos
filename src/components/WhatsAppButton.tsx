import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  size?: "default" | "lg";
  className?: string;
}

const WhatsAppButton = ({ size = "default", className = "" }: WhatsAppButtonProps) => {
  const sizeClasses = size === "lg" 
    ? "px-8 py-4 text-lg" 
    : "px-6 py-3 text-sm";

  return (
    <a
      href="https://wa.me/5545998101887?text=Olá! Gostaria de solicitar um orçamento."
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 gradient-primary font-semibold rounded-full text-primary-foreground shadow-lg hover:shadow-xl hover:brightness-110 transition-all duration-300 ${sizeClasses} ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      Solicitar orçamento no WhatsApp
    </a>
  );
};

export default WhatsAppButton;
