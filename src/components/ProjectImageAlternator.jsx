import { useState, useRef, useEffect } from "react";

const projects = [
  {
    id: "vertice-erp",
    code: "# 01",
    type: "Sistemas & ERP",
    title: "Vértice ERP",
    desc: "Plataforma centralizada para control financiero, órdenes de compra, inventario multi-sede y reportes ejecutivos en tiempo real.",
    tags: ["React", "Node", "PostgreSQL"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=720&h=520&fit=crop&fm=webp&q=72",
  },
  {
    id: "fletes",
    code: "# 02",
    type: "Logística",
    title: "Gestión de Fletes",
    desc: "Asignación de viajes para más de 40 camiones, generación de guías en PDF y seguimiento satelital de flota.",
    tags: ["GPS", "PDF", "Datos"],
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=720&h=520&fit=crop&fm=webp&q=72",
  },
  {
    id: "metrobus",
    code: "# 03",
    type: "Transporte",
    title: "Portal Metrobús",
    desc: "Rutas, mapas interactivos y tiempos estimados conectados a datos operativos en tiempo real.",
    tags: ["REST", "Mapas", "Realtime"],
    img: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=720&h=520&fit=crop&fm=webp&q=72",
  },
  {
    id: "ecommerce",
    code: "# 04",
    type: "Retail",
    title: "E-Commerce",
    desc: "Catálogo dinámico, carrito, pagos en línea y administración diseñados para vender sin fricción.",
    tags: ["Commerce", "Pagos", "CRO"],
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=720&h=520&fit=crop&fm=webp&q=72",
  },
  {
    id: "equipo",
    code: "# 05",
    type: "Comercio B2B",
    title: "Venta de Equipo",
    desc: "Catálogo comercial con inventario sincronizado, pagos, órdenes de compra y panel administrativo.",
    tags: ["PHP", "API", "MySQL"],
    img: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=720&h=520&fit=crop&fm=webp&q=72",
  },
  {
    id: "render-track",
    code: "# 06",
    type: "Producción",
    title: "Render Track",
    desc: "Monitoreo de estaciones de trabajo, colas de renderizado y notificaciones automáticas en vivo.",
    tags: ["Node", "WebSocket", "React"],
    img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=720&h=520&fit=crop&fm=webp&q=72",
  },
  {
    id: "admin-hotel",
    code: "# 07",
    type: "Hospitalidad",
    title: "Admin Hotel",
    desc: "Control integral de reservas, check-in, limpieza de habitaciones, facturación y reportes.",
    tags: ["Reservas", "Operación", "Reportes"],
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=720&h=520&fit=crop&fm=webp&q=72",
  },
];

export default function ProjectImageAlternator() {
  const [activeImage, setActiveImage] = useState(0);
  const hoverTimeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  const handleHover = (index) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveImage(index);
    }, 55);
  };

  const handleClick = (index) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setActiveImage(index);
  };

  return (
    <div className="relative w-full">
      <div className="flex flex-col md:flex-row w-full items-stretch md:items-center justify-center gap-2 lg:gap-2.5 md:h-[22rem] lg:h-[25rem] py-1">
        {projects.map((project, index) => {
          const isActive = activeImage === index;

          return (
            <article
              key={project.id}
              onClick={() => handleClick(index)}
              onMouseEnter={() => handleHover(index)}
              className={`hover-expand-card relative w-full md:w-auto md:h-full min-w-0 cursor-pointer overflow-hidden border-[3px] border-black bg-black select-none ${
                isActive
                  ? "h-[20.5rem] md:flex-[5.4_1_0%] shadow-[5px_5px_0_#0b0c0a] md:shadow-[7px_7px_0_#0b0c0a]"
                  : "h-[3.75rem] md:flex-[1_1_0%] shadow-[2px_2px_0_#0b0c0a] md:shadow-[3px_3px_0_#0b0c0a] hover:border-zt-primary"
              }`}
            >
              {/* Imagen única para móvil y desktop */}
              <img
                src={project.img}
                alt={project.title}
                width="720"
                height="520"
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                className={`size-full object-cover object-center transition-[filter,opacity,transform] duration-700 ease-out ${
                  isActive
                    ? "grayscale-0 contrast-105 opacity-100 scale-100"
                    : "grayscale contrast-150 opacity-70 scale-105"
                }`}
              />

              {/* Textura halftone cuando está cerrado */}
              <div
                className={`absolute inset-0 bg-black/40 halftone pointer-events-none transition-opacity duration-500 ${
                  isActive ? "opacity-0" : "opacity-100"
                }`}
              />

              {/* Estado cerrado en MÓVIL (< md): Barra horizontal */}
              <div
                className={`md:hidden absolute inset-0 flex items-center justify-between px-3.5 pointer-events-none transition-opacity duration-300 ${
                  isActive ? "opacity-0" : "opacity-100"
                }`}
                aria-hidden={isActive}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="border border-white/50 bg-black/85 px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-widest text-zt-lime shrink-0">
                    {project.code.replace("# ", "")}
                  </span>
                  <span className="font-display text-sm sm:text-base uppercase tracking-[-0.03em] text-white truncate drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                    {project.title}
                  </span>
                </div>
                <span className="border border-white/40 bg-black/75 px-2 py-0.5 font-mono text-[8px] font-bold uppercase tracking-widest text-white/85 shrink-0">
                  {project.type}
                </span>
              </div>

              {/* Estado cerrado en DESKTOP (md+): Lomo vertical */}
              <div
                className={`hidden md:flex absolute inset-0 flex-col items-center justify-between py-4 px-1 pointer-events-none transition-opacity duration-300 ${
                  isActive ? "opacity-0" : "opacity-100"
                }`}
                aria-hidden={isActive}
              >
                <span className="border border-white/50 bg-black/85 px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-widest text-white">
                  {project.code.replace("# ", "")}
                </span>

                <span
                  className="font-display text-xs uppercase tracking-[0.12em] text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] whitespace-nowrap"
                  style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                  }}
                >
                  {project.title}
                </span>

                <span className="h-2 w-2 bg-zt-lime border border-black" />
              </div>

              {/* Degradado y contenido cuando está EXPANDIDO */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-between p-4 lg:p-6 pointer-events-none transition-all duration-500 ${
                  isActive
                    ? "opacity-100 translate-y-0 delay-150"
                    : "opacity-0 translate-y-2 pointer-events-none"
                }`}
                aria-hidden={!isActive}
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="zine-label !bg-zt-primary !border-white">
                    {project.type}
                  </span>
                </div>

                <div className="w-full md:min-w-[16rem] lg:min-w-[22rem]">
                  <h3 className="font-display text-2xl lg:text-4xl uppercase tracking-[-0.055em] leading-[0.88] text-white">
                    {project.title}
                  </h3>

                  <p className="mt-2 max-w-md text-xs lg:text-sm font-medium leading-relaxed text-white/85">
                    {project.desc}
                  </p>

                  <div className="mt-3.5 pt-3 border-t border-white/25 flex items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-white/40 bg-black/70 px-2 py-0.5 font-mono text-[8px] font-bold uppercase tracking-widest text-zt-mint"
                        >
                          [{tag}]
                        </span>
                      ))}
                    </div>

                    <p className="font-mono text-xs font-extrabold tracking-widest text-zt-lime shrink-0">
                      {project.code}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
