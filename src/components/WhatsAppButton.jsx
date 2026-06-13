import { MessageCircle } from "lucide-react";

const phoneNumber = "525512345678";
const message = encodeURIComponent("Hola A&A ZentrIT, me interesa iniciar un proyecto con ustedes.");

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg shadow-zt-primary/30 text-white transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-zt-primary/40 active:scale-95"
      style={{ background: "linear-gradient(135deg, #0a7f5a, #14b88a)" }}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6" strokeWidth={2} fill="white" />
    </a>
  );
}
