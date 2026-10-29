import { AnimatePresence, motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const projects = [
  {
    id: "vertice-erp",
    code: "# 01",
    type: "Sistemas & ERP",
    title: "Vértice ERP",
    desc: "Plataforma centralizada para control financiero, órdenes de compra, inventario multi-sede y reportes ejecutivos en tiempo real.",
    tags: ["React", "Node", "PostgreSQL"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=650&fit=crop&fm=webp&q=75",
  },
  {
    id: "fletes",
    code: "# 02",
    type: "Logística",
    title: "Gestión de Fletes",
    desc: "Asignación de viajes para más de 40 camiones, generación de guías en PDF y seguimiento satelital de flota.",
    tags: ["GPS", "PDF", "Datos"],
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&h=650&fit=crop&fm=webp&q=75",
  },
  {
    id: "metrobus",
    code: "# 03",
    type: "Transporte",
    title: "Portal Metrobús",
    desc: "Rutas, mapas interactivos y tiempos estimados conectados a datos operativos en tiempo real.",
    tags: ["REST", "Mapas", "Realtime"],
    img: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=900&h=650&fit=crop&fm=webp&q=75",
  },
  {
    id: "ecommerce",
    code: "# 04",
    type: "Retail",
    title: "E-Commerce",
    desc: "Catálogo dinámico, carrito, pagos en línea y administración diseñados para vender sin fricción.",
    tags: ["Commerce", "Pagos", "CRO"],
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=900&h=650&fit=crop&fm=webp&q=75",
  },
  {
    id: "equipo",
    code: "# 05",
    type: "Comercio B2B",
    title: "Venta de Equipo",
    desc: "Catálogo comercial con inventario sincronizado, pagos, órdenes de compra y panel administrativo.",
    tags: ["PHP", "API", "MySQL"],
    img: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=900&h=650&fit=crop&fm=webp&q=75",
  },
  {
    id: "render-track",
    code: "# 06",
    type: "Producción",
    title: "Render Track",
    desc: "Monitoreo de estaciones de trabajo, colas de renderizado y notificaciones automáticas en vivo.",
    tags: ["Node", "WebSocket", "React"],
    img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=900&h=650&fit=crop&fm=webp&q=75",
  },
  {
    id: "admin-hotel",
    code: "# 07",
    type: "Hospitalidad",
    title: "Admin Hotel",
    desc: "Control integral de reservas, check-in, limpieza de habitaciones, facturación y reportes.",
    tags: ["Reservas", "Operación", "Reportes"],
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&h=650&fit=crop&fm=webp&q=75",
  },
];

const EXPAND_EASE = [0.25, 1, 0.5, 1];

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
    }, 60);
  };

  const handleClick = (index) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setActiveImage(index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 16 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.6, ease: EXPAND_EASE }}
      className="relative w-full"
    >
      <div className="flex w-full items-center justify-center gap-1.5 md:gap-2.5 overflow-x-auto md:overflow-visible py-2">
        {projects.map((project, index) => {
          const isActive = activeImage === index;

          return (
            <motion.div
              key={project.id}
              className={`relative cursor-pointer overflow-hidden border-[3px] border-black bg-black shrink-0 ${
                isActive
                  ? "shadow-[7px_7px_0_#0b0c0a]"
                  : "shadow-[3px_3px_0_#0b0c0a] hover:border-zt-primary"
              }`}
              initial={{ width: "5.25rem", height: "25rem" }}
              animate={{
                width: isActive ? "28rem" : "5.25rem",
                height: "25rem",
              }}
              transition={{
                duration: 1.05,
                ease: EXPAND_EASE,
              }}
              onClick={() => handleClick(index)}
              onMouseEnter={() => handleHover(index)}
            >
              {/* Imagen de fondo */}
              <img
                src={project.img}
                alt={project.title}
                width="900"
                height="650"
                loading="lazy"
                decoding="async"
                className={`size-full object-cover object-center transition-[filter,opacity,transform] duration-1000 ease-out ${
                  isActive
                    ? "grayscale-0 contrast-105 opacity-100 scale-100"
                    : "grayscale contrast-150 opacity-75 scale-105"
                }`}
              />

              {/* Textura halftone sutil estilo Zentrit cuando está cerrado */}
              <div
                className={`absolute inset-0 bg-black/35 halftone pointer-events-none transition-opacity duration-700 ${
                  isActive ? "opacity-0" : "opacity-100"
                }`}
              />

              {/* Estado cerrado: Código vertical y número estilo Zine */}
              <AnimatePresence initial={false}>
                {!isActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="absolute inset-0 flex flex-col items-center justify-between py-4 px-1 pointer-events-none"
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
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Degradado oscuro cuando está expandido */}
              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.65, ease: "easeOut" }}
                    className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent pointer-events-none"
                  />
                )}
              </AnimatePresence>

              {/* Contenido expandido */}
              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{
                      duration: 0.65,
                      delay: 0.22,
                      ease: EXPAND_EASE,
                    }}
                    className="absolute inset-y-0 left-0 w-[28rem] flex flex-col justify-between p-4 md:p-6 pointer-events-none"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="zine-label !bg-zt-primary !border-white">
                        {project.type}
                      </span>
                    </div>

                    <div className="w-full">
                      <h3 className="font-display text-2xl md:text-4xl uppercase tracking-[-0.055em] leading-[0.88] text-white">
                        {project.title}
                      </h3>

                      <p className="mt-2 max-w-md text-xs md:text-sm font-medium leading-relaxed text-white/80">
                        {project.desc}
                      </p>

                      <div className="mt-4 pt-3 border-t border-white/25 flex items-center justify-between gap-2">
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
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
