export const siteConfig = {
  name: "Zentrit",
  alternateName: "Zentrit Soft",
  siteUrl: "https://zentrit-landing.vercel.app",
  language: "es",
  locale: "es_PE",
  defaultTitle: "Zentrit | Desarrollo de software y páginas web en Perú",
  defaultDescription:
    "Zentrit es una empresa peruana de desarrollo de software, páginas web, aplicaciones móviles, automatización y soluciones digitales para empresas.",
  email: "zentritsoft@gmail.com",
  phones: ["+51933070052", "+51912077181"],
  location: {
    locality: "Chimbote",
    countryName: "Perú",
    countryCode: "PE",
  },
  logo: {
    path: "/zt.png",
    width: 500,
    height: 500,
    alt: "Logotipo de Zentrit",
  },
  socialImage: {
    path: "/zt.png",
    width: 500,
    height: 500,
    type: "image/png",
    alt: "Zentrit, desarrollo de software y soluciones digitales en Perú",
  },
  officialProfiles: {
    instagram: "https://instagram.com/zentritsoft",
    // Completar únicamente cuando Zentrit confirme perfiles oficiales.
    linkedin: null,
    facebook: null,
    github: null,
  },
  // Datos pendientes de una futura migración a dominio propio o de Search Console.
  customDomain: null,
  googleSiteVerification: null,
} as const;

export const indexableRoutes = [
  "/",
  "/desarrollo-de-software/",
  "/paginas-web/",
  "/aplicaciones-moviles/",
  "/automatizacion-de-procesos/",
  "/proyectos/",
  "/nosotros/",
  "/contacto/",
  "/blog/",
] as const;

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteConfig.siteUrl}/`).toString();
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.siteUrl}/#organization`,
  name: siteConfig.name,
  alternateName: siteConfig.alternateName,
  url: `${siteConfig.siteUrl}/`,
  logo: {
    "@type": "ImageObject",
    url: absoluteUrl(siteConfig.logo.path),
    contentUrl: absoluteUrl(siteConfig.logo.path),
    width: siteConfig.logo.width,
    height: siteConfig.logo.height,
  },
  description: siteConfig.defaultDescription,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.location.locality,
    addressCountry: siteConfig.location.countryCode,
  },
  areaServed: {
    "@type": "Country",
    name: siteConfig.location.countryName,
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: siteConfig.email,
    telephone: siteConfig.phones[0],
    areaServed: siteConfig.location.countryCode,
    availableLanguage: "Spanish",
  },
  sameAs: Object.values(siteConfig.officialProfiles).filter(
    (profile): profile is string => Boolean(profile),
  ),
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.siteUrl}/#website`,
  url: `${siteConfig.siteUrl}/`,
  name: siteConfig.name,
  alternateName: siteConfig.alternateName,
  inLanguage: "es-PE",
  publisher: {
    "@id": `${siteConfig.siteUrl}/#organization`,
  },
};

export const homeJsonLd = [organizationJsonLd, websiteJsonLd];
