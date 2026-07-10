import { useEffect, useState } from "react";

const candidates = [
  {
    id: "sandra",
    name: "Sandra Fernández",
    img: "/SandraFernandez.png",
    href: "https://sandrafernandez.pe/",
  },
  {
    id: "vladimir",
    name: "Vladimir Meza",
    img: "/VladimirMeza.png",
    href: "https://vladimir-meza.vercel.app/",
  },
];

const INTERVAL_MS = 4000;

export default function ProjectImageAlternator({
  jp = "選挙",
  indexLabel = "01",
  className = "",
}) {
  const [active, setActive] = useState(0);
  const current = candidates[active];

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((prev) => (prev === 0 ? 1 : 0));
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <a
      href={current.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative block overflow-hidden bg-black border-2 border-black halftone ${className}`}
      aria-label={`Ver landing de ${current.name}`}
    >
      {candidates.map((candidate, index) => (
        <img
          key={candidate.id}
          src={candidate.img}
          alt={candidate.name}
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover object-top grayscale contrast-125 transition-opacity duration-500 ease-out group-hover:grayscale-0"
          style={{
            opacity: active === index ? 1 : 0,
            zIndex: active === index ? 1 : 0,
            pointerEvents: "none",
          }}
        />
      ))}

      <span className="absolute top-0 left-0 z-10 bg-black text-white border-r-2 border-b-2 border-white px-3 py-2 font-display text-2xl">
        {indexLabel}
      </span>
      <span className="absolute bottom-3 right-3 z-10 zine-jp text-4xl md:text-6xl text-white [text-shadow:3px_3px_0_#0b0c0a]">
        {jp}
      </span>

      <span className="absolute bottom-3 left-3 z-10 bg-black/80 text-white font-mono text-[9px] uppercase tracking-widest px-2 py-1 border border-white/30">
        {current.name}
      </span>
    </a>
  );
}
