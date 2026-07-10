const phoneNumber = "51933070052";
const message = encodeURIComponent("Hola ZentrIT, me interesa conversar sobre un proyecto.");

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-5 md:right-5 z-50 w-14 h-14 md:w-16 md:h-16 bg-zt-primary text-white border border-black flex items-center justify-center font-mono text-[10px] font-bold uppercase tracking-widest hover:bg-black transition-colors"
      aria-label="Contactar a ZentrIT por WhatsApp"
    >
      WA↗
    </a>
  );
}
