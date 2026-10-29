export interface SeoPageCard {
  title: string;
  text: string;
}

export interface SeoPageSection {
  heading: string;
  intro: string;
  cards: SeoPageCard[];
}

export interface SeoPage {
  slug: string;
  navLabel: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  sections: SeoPageSection[];
  related: string[];
  showContactForm?: boolean;
}

export const seoPages: SeoPage[] = [
  {
    slug: "desarrollo-de-software",
    navLabel: "Software",
    title: "Desarrollo de software a medida en Perú | Zentrit",
    description:
      "Desarrollo de software a medida en Perú para ordenar operaciones, conectar datos y crear herramientas digitales adaptadas a cada empresa.",
    eyebrow: "01 / Software a medida",
    h1: "Desarrollo de software a medida en Perú",
    intro:
      "Zentrit diseña y construye sistemas para empresas que necesitan reemplazar procesos manuales, conectar información y trabajar con una base tecnológica mantenible.",
    sections: [
      {
        heading: "Software pensado desde la operación",
        intro:
          "Antes de escribir código definimos el problema, los usuarios, los datos y las restricciones que condicionan la solución.",
        cards: [
          { title: "Sistemas empresariales", text: "Herramientas para ventas, inventario, logística, administración y seguimiento operativo." },
          { title: "Integraciones y APIs", text: "Conexión entre servicios para reducir tareas repetidas y mantener datos consistentes." },
          { title: "Paneles de control", text: "Indicadores y vistas operativas que facilitan decisiones con información clara." },
        ],
      },
      {
        heading: "Un proceso de desarrollo verificable",
        intro:
          "El alcance se divide en entregas que pueden revisarse antes de avanzar a la siguiente etapa.",
        cards: [
          { title: "Descubrimiento", text: "Objetivos, flujos actuales, usuarios y prioridades del negocio." },
          { title: "Diseño y arquitectura", text: "Prototipos, modelo de datos y decisiones técnicas documentadas." },
          { title: "Construcción y mejora", text: "Desarrollo iterativo, validación y evolución posterior al lanzamiento." },
        ],
      },
    ],
    related: ["automatizacion-de-procesos", "aplicaciones-moviles", "proyectos"],
  },
  {
    slug: "paginas-web",
    navLabel: "Páginas web",
    title: "Diseño y desarrollo de páginas web en Perú | Zentrit",
    description:
      "Páginas web y landing pages en Perú con diseño claro, buen rendimiento, accesibilidad y una estructura preparada para posicionamiento orgánico.",
    eyebrow: "02 / Web",
    h1: "Diseño y desarrollo de páginas web en Perú",
    intro:
      "Creamos sitios que explican con claridad qué hace una empresa, funcionan bien en móviles y convierten la atención en conversaciones comerciales.",
    sections: [
      {
        heading: "Sitios útiles para negocio y usuarios",
        intro:
          "La estructura, el contenido y la interfaz se diseñan juntos para evitar páginas visualmente atractivas que no ayudan a decidir.",
        cards: [
          { title: "Web corporativa", text: "Arquitectura de información para presentar servicios, experiencia y formas de contacto." },
          { title: "Landing pages", text: "Páginas enfocadas en campañas, lanzamientos y objetivos de conversión concretos." },
          { title: "Comercio electrónico", text: "Catálogos, procesos de compra y administración orientados a reducir fricción." },
        ],
      },
      {
        heading: "Base técnica preparada para crecer",
        intro:
          "El sitio se entrega con HTML indexable, navegación accesible y recursos optimizados para una carga estable.",
        cards: [
          { title: "SEO técnico", text: "Metadatos, jerarquía semántica, canonical, sitemap y datos estructurados." },
          { title: "Rendimiento", text: "Imágenes adaptadas, JavaScript limitado y prevención de saltos de contenido." },
          { title: "Mantenimiento", text: "Componentes reutilizables para ampliar páginas y contenido sin rehacer el sitio." },
        ],
      },
    ],
    related: ["desarrollo-de-software", "proyectos", "contacto"],
  },
  {
    slug: "aplicaciones-moviles",
    navLabel: "Aplicaciones móviles",
    title: "Desarrollo de aplicaciones móviles | Zentrit Perú",
    description:
      "Diseño y desarrollo de aplicaciones móviles conectadas a servicios, datos y operaciones empresariales para proyectos en Perú.",
    eyebrow: "03 / Apps móviles",
    h1: "Desarrollo de aplicaciones móviles para empresas",
    intro:
      "Zentrit convierte procesos y servicios en experiencias móviles claras, conectadas a la información que la empresa necesita operar.",
    sections: [
      {
        heading: "Del flujo principal a una aplicación usable",
        intro:
          "Priorizamos las acciones que el usuario debe completar con frecuencia y diseñamos la solución alrededor de ellas.",
        cards: [
          { title: "Experiencia móvil", text: "Navegación, estados y formularios adaptados al uso en pantallas pequeñas." },
          { title: "Servicios conectados", text: "Integración con APIs, autenticación, datos y notificaciones cuando el proyecto lo requiere." },
          { title: "Evolución del producto", text: "Una arquitectura preparada para incorporar nuevas funciones de forma ordenada." },
        ],
      },
      {
        heading: "Decisiones técnicas según el contexto",
        intro:
          "La tecnología se selecciona considerando alcance, mantenimiento, dispositivos y recursos disponibles.",
        cards: [
          { title: "Prototipo", text: "Validación temprana de pantallas y recorridos antes de construir." },
          { title: "Implementación", text: "Componentes consistentes y conexión segura con los servicios del proyecto." },
          { title: "Publicación", text: "Preparación técnica para pruebas, distribución y seguimiento posterior." },
        ],
      },
    ],
    related: ["desarrollo-de-software", "automatizacion-de-procesos", "contacto"],
  },
  {
    slug: "automatizacion-de-procesos",
    navLabel: "Automatización",
    title: "Automatización de procesos empresariales | Zentrit",
    description:
      "Automatización de procesos para conectar herramientas, reducir tareas repetitivas y mejorar la trazabilidad de operaciones empresariales.",
    eyebrow: "04 / Automatización",
    h1: "Automatización de procesos empresariales",
    intro:
      "Analizamos tareas manuales y puntos de transferencia de información para diseñar flujos más rápidos, medibles y fáciles de supervisar.",
    sections: [
      {
        heading: "Automatizar con un objetivo operativo",
        intro:
          "Cada automatización parte de un resultado concreto y mantiene puntos de control para que el equipo conserve visibilidad.",
        cards: [
          { title: "Integración de sistemas", text: "Intercambio de datos entre plataformas mediante APIs y webhooks." },
          { title: "Flujos internos", text: "Acciones automáticas para registros, avisos, documentos y seguimiento." },
          { title: "Trazabilidad", text: "Estados e indicadores para saber qué ocurrió y dónde intervenir." },
        ],
      },
      {
        heading: "Primero simplificar, después automatizar",
        intro:
          "Un proceso confuso no mejora por ejecutarse más rápido; por eso revisamos reglas y excepciones antes de implementarlo.",
        cards: [
          { title: "Mapa del proceso", text: "Personas, herramientas, decisiones y datos involucrados." },
          { title: "Prioridad", text: "Selección de tareas con impacto y viabilidad técnica comprobable." },
          { title: "Monitoreo", text: "Validaciones y registros para mantener el flujo bajo control." },
        ],
      },
    ],
    related: ["desarrollo-de-software", "aplicaciones-moviles", "contacto"],
  },
  {
    slug: "proyectos",
    navLabel: "Proyectos",
    title: "Proyectos de software y páginas web | Zentrit",
    description:
      "Conoce proyectos de Zentrit en páginas web, comercio electrónico, logística, transporte y sistemas para operaciones empresariales.",
    eyebrow: "05 / Proyectos",
    h1: "Proyectos digitales construidos por Zentrit",
    intro:
      "Nuestro archivo reúne trabajos y conceptos aplicados a campañas, comercio, logística, transporte, producción y administración.",
    sections: [
      {
        heading: "Sistemas empresariales a medida",
        intro:
          "Zentrit diseña y despliega plataformas orientadas a control financiero, operaciones, inventario y toma de decisiones.",
        cards: [
          { title: "Vértice ERP", text: "Plataforma centralizada para finanzas, órdenes de compra, inventario multi-sede y reportes en tiempo real." },
          { title: "Gestión de Fletes", text: "Sistema logístico para asignación de viajes, generación de guías en PDF y seguimiento satelital." },
          { title: "Trabajo integrado", text: "Diseño de interfaz, arquitectura backend y despliegue en producción como una sola entrega." },
        ],
      },
      {
        heading: "Sistemas orientados a operación",
        intro:
          "El portafolio también contempla soluciones para venta, asignación de viajes, seguimiento y administración.",
        cards: [
          { title: "Comercio", text: "Catálogo, carrito, pagos, órdenes e inventario." },
          { title: "Logística y transporte", text: "Asignación de viajes, mapas y datos operativos." },
          { title: "Administración", text: "Reservas, monitoreo de equipos, reportes y paneles de control." },
        ],
      },
    ],
    related: ["paginas-web", "desarrollo-de-software", "contacto"],
  },
  {
    slug: "nosotros",
    navLabel: "Nosotros",
    title: "Nosotros | Empresa de software en Perú | Zentrit",
    description:
      "Conoce al equipo de Zentrit, empresa peruana que integra estrategia, diseño de producto y desarrollo de software con contacto directo.",
    eyebrow: "06 / Nosotros",
    h1: "Zentrit, equipo peruano de estrategia y desarrollo",
    intro:
      "Somos un equipo de Chimbote, Perú, que trabaja directamente con cada proyecto desde la definición del problema hasta la entrega técnica.",
    sections: [
      {
        heading: "Cuatro especialidades, un solo proceso",
        intro:
          "Estrategia, arquitectura, backend y automatización se coordinan desde el inicio para mantener claridad sobre decisiones y prioridades.",
        cards: [
          { title: "Sandoval Ballona Adrián", text: "Estrategia, producto, experiencia de usuario y dirección de proyecto." },
          { title: "Silva Chorres Aarón", text: "Arquitectura, desarrollo de software e interfaces de alto rendimiento." },
          { title: "Flores Ruiz Anderson", text: "Backend, sistemas, estructuras de datos y lógica empresarial." },
          { title: "Rubiñoz Ortiz Angelo", text: "Soluciones móviles, integraciones, automatización y despliegue operativo." },
        ],
      },
      {
        heading: "Cómo entendemos el trabajo digital",
        intro:
          "Buscamos soluciones que puedan explicarse, mantenerse y medir su utilidad después del lanzamiento.",
        cards: [
          { title: "Claridad", text: "Alcance y decisiones visibles durante el proyecto." },
          { title: "Función", text: "Diseño al servicio de tareas y objetivos reales." },
          { title: "Base técnica", text: "Código y arquitectura preparados para evolucionar." },
        ],
      },
    ],
    related: ["proyectos", "desarrollo-de-software", "contacto"],
  },
  {
    slug: "contacto",
    navLabel: "Contacto",
    title: "Contacto | Zentrit Perú",
    description:
      "Contacta a Zentrit para conversar sobre desarrollo de software, páginas web, aplicaciones móviles o automatización de procesos.",
    eyebrow: "07 / Contacto",
    h1: "Conversemos sobre tu proyecto digital",
    intro:
      "Cuéntanos el problema, el contexto y el resultado que necesitas. Revisaremos la solicitud para plantear el siguiente paso con claridad.",
    sections: [
      {
        heading: "Información útil para empezar",
        intro:
          "No necesitas tener una especificación técnica. Una descripción honesta de la situación actual es suficiente para iniciar la conversación.",
        cards: [
          { title: "Problema", text: "Qué tarea, proceso u oportunidad quieres resolver." },
          { title: "Usuarios", text: "Quiénes usarán la solución y en qué contexto." },
          { title: "Prioridad", text: "Qué resultado esperas y si existe una fecha relevante." },
        ],
      },
    ],
    related: ["desarrollo-de-software", "paginas-web", "automatizacion-de-procesos"],
    showContactForm: true,
  },
  {
    slug: "blog",
    navLabel: "Blog",
    title: "Blog de tecnología y desarrollo de software | Zentrit",
    description:
      "Recursos de Zentrit sobre desarrollo de software, páginas web, automatización, producto digital y decisiones técnicas para empresas.",
    eyebrow: "08 / Blog",
    h1: "Ideas sobre software, producto y operación digital",
    intro:
      "Este espacio editorial está preparado para publicar análisis prácticos basados en problemas reales de diseño, desarrollo y operación tecnológica.",
    sections: [
      {
        heading: "Líneas editoriales",
        intro:
          "Los próximos contenidos se organizarán por tema para que cada artículo responda una pregunta concreta y pueda mantenerse actualizado.",
        cards: [
          { title: "Software empresarial", text: "Arquitectura, datos, integraciones y mantenimiento de sistemas." },
          { title: "Web y producto", text: "Experiencia, accesibilidad, rendimiento y validación de decisiones." },
          { title: "Automatización", text: "Procesos, APIs, webhooks, controles y trazabilidad." },
        ],
      },
      {
        heading: "Criterio de publicación",
        intro:
          "No publicaremos artículos de relleno: cada entrada deberá aportar contexto, una explicación verificable y acciones útiles.",
        cards: [
          { title: "Problema claro", text: "Una situación específica que el lector pueda reconocer." },
          { title: "Decisiones explicadas", text: "Ventajas, límites y condiciones de cada alternativa." },
          { title: "Contenido mantenible", text: "Fechas y revisiones visibles cuando la información pueda cambiar." },
        ],
      },
    ],
    related: ["desarrollo-de-software", "paginas-web", "automatizacion-de-procesos"],
  },
];

export const seoPageBySlug = Object.fromEntries(
  seoPages.map((page) => [page.slug, page]),
) as Record<string, SeoPage>;
