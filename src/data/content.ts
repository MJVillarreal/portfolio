import { TECH } from "./tech";
import type { Tech } from "./tech";

import solicitudes from "../assets/projects/gestion-personal/solicitudes.png";
import candidatos from "../assets/projects/gestion-personal/candidatos.png";
import periodoDePrueba from "../assets/projects/gestion-personal/periodo-de-prueba.png";
import eventos from "../assets/projects/gestion-personal/eventos.png";
import eventoDetalle from "../assets/projects/gestion-personal/evento-detalle.png";

import reservasBosco from "../assets/projects/reservas/bosco.webp";
import reservasCoraje from "../assets/projects/reservas/coraje.webp";
import reservasMarchigiana from "../assets/projects/reservas/la-marchigiana.webp";
import reservasNipoti from "../assets/projects/reservas/nipoti.webp";
import landingBosco from "../assets/projects/landings/bosco.webp";
import landingCoraje from "../assets/projects/landings/coraje.webp";
import landingMarchigiana from "../assets/projects/landings/la-marchigiana.webp";
import landingNipoti from "../assets/projects/landings/nipoti.webp";

type Lang = "en" | "es";

export type Job = {
  role: string;
  company: string;
  companyDetail: string;
  date: string;
  type: string;
  summary: string[];
  tech: Tech[];
};

export type FeaturedProject = {
  label: string;
  title: string;
  description: string;
  modules: { name: string; description: string }[];
  shared: string;
  highlights: { value: string; label: string }[];
  gallery: { src: ImageMetadata; caption: string }[];
  tech: Tech[];
};

const BRODA_TECH = [
  TECH.NEXT,
  TECH.NEST,
  TECH.MARIADB,
  TECH.ODOO,
  TECH.DOCKER,
  TECH.TRAEFIK,
  TECH.GCLOUD,
  TECH.GH_ACTIONS,
];

const PROJECT_TECH = [
  TECH.NEXT,
  TECH.REACT,
  TECH.TYPESCRIPT,
  TECH.TAILWIND,
  TECH.SHADCN,
  TECH.NEST,
  TECH.TYPEORM,
  TECH.MARIADB,
  TECH.CLERK,
  TECH.ODOO,
  TECH.DOCKER,
  TECH.TRAEFIK,
  TECH.GCLOUD,
];

export const EXPERIENCE: Record<Lang, Job[]> = {
  es: [
    {
      role: "Técnica en Sistemas",
      company: "Grupo Broda",
      companyDetail:
        "Grupo gastronómico de Mendoza (La Marchigiana, Bosco, Nipoti, Coraje y Supra)",
      date: "2026 — Actualidad",
      type: "Part-time",
      summary: [
        "Formo parte del equipo de Control de Gestión, el área de tecnología del grupo. Me encargo de identificar procesos que pueden mejorarse mediante la automatización, desarrollar nuevas herramientas y optimizar las que ya están en uso. Esto incluye desde aplicaciones internas que reemplazan planillas de Excel hasta mejoras en el sistema de reservas de los restaurantes.",
        "Trabajo con las áreas de RR. HH., gerencias y marketing para entender sus necesidades y desarrollar soluciones concretas, integradas con Odoo, el ERP de la empresa. También brindo soporte técnico en el día a día, tanto en equipos como en software, para resolver problemas y facilitar las tareas cotidianas.",
      ],
      tech: BRODA_TECH,
    },
  ],
  en: [
    {
      role: "Systems Technician",
      company: "Grupo Broda",
      companyDetail:
        "Restaurant group from Mendoza (La Marchigiana, Bosco, Nipoti, Coraje and Supra)",
      date: "2026 — Present",
      type: "Part-time",
      summary: [
        "I'm part of the Management Control team, which oversees technology across the group. I identify processes that can be improved through automation, build new tools and optimize the ones already in use. That ranges from internal applications that replace Excel spreadsheets to improvements to the restaurants' reservation system.",
        "I work with HR, management and marketing to understand their needs and build concrete solutions, integrated with Odoo, the company's ERP. I also provide day-to-day technical support for hardware and software, helping resolve issues and keep operations running smoothly.",
      ],
      tech: BRODA_TECH,
    },
  ],
};

export const FEATURED_PROJECT: Record<Lang, FeaturedProject> = {
  es: {
    label: "Proyecto profesional · Grupo Broda",
    title: "Sistema de Gestión de Personal",
    description:
      "Plataforma web interna que reemplaza las planillas de Excel en la gestión de personal de un grupo gastronómico con varias sucursales. La plataforma se divide en dos módulos, conectados entre sí y con el ERP Odoo.",
    modules: [
      {
        name: "Capital Humano",
        description:
          "Cubre todo el proceso, desde la solicitud de personal hasta la contratación: búsqueda y seguimiento de candidatos, gestión del período de prueba con evaluaciones de los gerentes y alertas de vencimiento. También permite administrar al personal eventual, incluyendo eventos, horas trabajadas, tarifas por puesto, asistencia, desempeño y reportes en Excel.",
      },
      {
        name: "Mano de Obra",
        description:
          "Los gerentes cargan los turnos de su personal en una grilla por período, con fechas de cierre. Los turnos se exportan por razón social para la liquidación de sueldos. El módulo también permite importar liquidaciones, gestionar un checklist de pagos y consultar el padrón de personal sincronizado desde Capital Humano.",
      },
    ],
    shared: "Ambas aplicaciones incluyen permisos por rol, notificaciones, diseño adaptable a dispositivos móviles y modo oscuro.",
    highlights: [
      { value: "3 servicios", label: "Capital Humano ↔ Odoo ↔ Mano de Obra" },
      { value: "Automatizaciones", label: "Tareas programadas e import/export de Excel" },
      { value: "Docker + HTTPS", label: "Deploy en contenedores" },
      { value: "130+ commits", label: "Abril — septiembre 2026" },
    ],
    gallery: [
      { src: solicitudes, caption: "Solicitudes de personal: puesto, sucursal y prioridad de cada pedido" },
      { src: candidatos, caption: "Base de candidatos con su estado en el proceso de selección" },
      { src: periodoDePrueba, caption: "Período de prueba: días restantes de cada empleado" },
      { src: eventos, caption: "Personal eventual: eventos planificados y reporte en Excel" },
      { src: eventoDetalle, caption: "Detalle de un evento: horas, tarifa, asistencia y evaluación" },
    ],
    tech: PROJECT_TECH,
  },
  en: {
    label: "Professional project · Grupo Broda",
    title: "Staff Management System",
    description:
      "An internal web platform that replaces the Excel spreadsheets used to manage staff across a restaurant group with multiple locations. It consists of two interconnected modules, both integrated with the Odoo ERP.",
    modules: [
      {
        name: "HR",
        description:
          "Covers the entire process, from staffing requests through hiring: recruitment and candidate tracking, probation-period evaluations by managers, and alerts for upcoming end dates. It also manages temporary staff, including event assignments, hours worked, rates by position, attendance, performance, and Excel reports.",
      },
      {
        name: "Workforce",
        description:
          "Managers enter staff shifts in a grid organized by pay period, with defined closing dates. Shift data is exported by legal entity for payroll processing. The module also supports payroll data imports, a payment checklist, and a staff roster synced from HR.",
      },
    ],
    shared: "Both applications feature role-based access control, notifications, responsive layouts, and dark mode.",
    highlights: [
      { value: "3 services", label: "HR ↔ Odoo ↔ Workforce" },
      { value: "Automation", label: "Scheduled jobs and Excel import/export" },
      { value: "Docker + HTTPS", label: "Containerized deploy" },
      { value: "130+ commits", label: "April — September 2026" },
    ],
    gallery: [
      { src: solicitudes, caption: "Staffing requests: position, location and priority of each request" },
      { src: candidatos, caption: "Candidate database with each person's hiring status" },
      { src: periodoDePrueba, caption: "Probation period: days left for each employee" },
      { src: eventos, caption: "Temporary staff: planned events and Excel report" },
      { src: eventoDetalle, caption: "Event detail: hours, rate, attendance and evaluation" },
    ],
    tech: PROJECT_TECH,
  },
};

export const STACK_GROUPS: { key: string; title: Record<Lang, string>; items: Tech[] }[] = [
  {
    key: "languages",
    title: { es: "Lenguajes", en: "Languages" },
    items: [TECH.TYPESCRIPT, TECH.JAVASCRIPT, TECH.SQL, TECH.HTML, TECH.CSS],
  },
  {
    key: "frontend",
    title: { es: "Frontend", en: "Frontend" },
    items: [TECH.REACT, TECH.NEXT, TECH.TAILWIND, TECH.SHADCN, TECH.MATERIAL],
  },
  {
    key: "backend",
    title: { es: "Backend", en: "Backend" },
    items: [TECH.NODE, TECH.NEST, TECH.EXPRESS, TECH.TYPEORM],
  },
  {
    key: "databases",
    title: { es: "Bases de datos", en: "Databases" },
    items: [TECH.MARIADB, TECH.MYSQL, TECH.POSTGRES, TECH.SQLITE, TECH.MONGO],
  },
  {
    key: "auth",
    title: { es: "Autenticación", en: "Authentication" },
    items: [TECH.CLERK, TECH.FIREBASE],
  },
  {
    key: "integrations",
    title: { es: "Integraciones", en: "Integrations" },
    items: [TECH.ODOO, TECH.GDRIVE, TECH.META_PIXEL, TECH.GANALYTICS],
  },
  {
    key: "devops",
    title: { es: "Infraestructura y DevOps", en: "Infrastructure & DevOps" },
    items: [TECH.DOCKER, TECH.TRAEFIK, TECH.GCLOUD, TECH.GH_ACTIONS, TECH.VERCEL],
  },
  {
    key: "quality",
    title: { es: "Calidad de código", en: "Code Quality" },
    items: [TECH.ESLINT, TECH.PRETTIER],
  },
  {
    key: "tools",
    title: { es: "Herramientas", en: "Tools" },
    items: [TECH.GIT, TECH.GITHUB, TECH.VSCODE, TECH.DBEAVER, TECH.VITE],
  },
];

export type WorkProject = {
  icon: "calendar" | "browser";
  title: string;
  description: string;
  tag: string;
  images?: ImageMetadata[];
  url?: string;
  tech: Tech[];
};

const RESERVAS_IMAGES = [reservasBosco, reservasCoraje, reservasMarchigiana, reservasNipoti];
const LANDINGS_IMAGES = [landingBosco, landingCoraje, landingMarchigiana, landingNipoti];

const RESERVAS_TECH = [TECH.NEXT, TECH.NEST, TECH.TYPESCRIPT, TECH.ODOO, TECH.DOCKER, TECH.META_PIXEL, TECH.GANALYTICS];
const LANDINGS_TECH = [TECH.HTML, TECH.CSS, TECH.JAVASCRIPT, TECH.GDRIVE, TECH.META_PIXEL, TECH.GANALYTICS, TECH.VERCEL];

export const OTHER_WORK_PROJECTS: Record<Lang, WorkProject[]> = {
  es: [
    {
      icon: "calendar",
      title: "Sistema de reservas online",
      description:
        "Un mismo sistema para 6 locales de 4 marcas, cada uno con su propia identidad visual. Se integra con el módulo de citas de Odoo y permite modificar y cancelar reservas, detectar duplicados y enviar correos electrónicos con el diseño de cada local.",
      tag: "6 locales · 4 marcas",
      images: RESERVAS_IMAGES,
      tech: RESERVAS_TECH,
    },
    {
      icon: "browser",
      title: "Landings de los restaurantes",
      description:
        "Sitios web de los restaurantes del grupo. El equipo de Marketing actualiza las cartas, fotos y brochures desde Google Drive, sin necesidad de modificar el código. Las métricas se registran con Meta Pixel y Google Analytics.",
      tag: "Autogestionable",
      images: LANDINGS_IMAGES,
      tech: LANDINGS_TECH,
    },
  ],
  en: [
    {
      icon: "calendar",
      title: "Online reservation system",
      description:
        "One reservation system serving six restaurants across four brands, each with its own visual identity. Integrated with Odoo's appointments module, it allows guests to modify or cancel bookings, detects duplicate reservations, and sends emails customized for each restaurant.",
      tag: "6 restaurants · 4 brands",
      images: RESERVAS_IMAGES,
      tech: RESERVAS_TECH,
    },
    {
      icon: "browser",
      title: "Restaurant landing pages",
      description:
        "Websites for the group's restaurants, with content managed by the marketing team. They can update menus, photos, and brochures through Google Drive without editing code. Traffic and engagement are tracked using Meta Pixel and Google Analytics.",
      tag: "Self-managed",
      images: LANDINGS_IMAGES,
      tech: LANDINGS_TECH,
    },
  ],
};

export type EducationItem = {
  title: string;
  place: string;
  date: string;
  description: string;
  detail?: string;
  certificate?: string;
  current?: boolean;
};

const CTD = "Certified Tech Developer · Digital House, Globant y Mercado Libre";
const CTD_EN = "Certified Tech Developer · Digital House, Globant & Mercado Libre";

export const EDUCATION: Record<Lang, EducationItem[]> = {
  es: [
    {
      title: "Ingeniería en Sistemas de Información",
      place: "Universidad Tecnológica Nacional — FRM",
      date: "En curso",
      description:
        "Cursando la carrera en la UTN Facultad Regional Mendoza, con formación en programación, análisis de sistemas y gestión de proyectos tecnológicos.",
      current: true,
    },
    {
      title: "Front End Specialist",
      place: CTD,
      date: "Enero 2024",
      description:
        "Especialización en desarrollo frontend, con foco en crear interfaces atractivas y funcionales, y en mejorar la usabilidad y la experiencia de usuario en distintas plataformas.",
      detail: "645 horas",
      certificate: "/certificados/front-end-specialist.pdf",
    },
    {
      title: "Professional Developer",
      place: CTD,
      date: "Diciembre 2022",
      description:
        "Formación en el ciclo completo de desarrollo de software, para construir aplicaciones que funcionen bien y respondan a las necesidades de quienes las usan.",
      detail: "1.568 horas",
      certificate: "/certificados/professional-developer.pdf",
    },
    {
      title: "Inglés — Nivel C1",
      place: "English Language Learning Centre",
      date: "2018",
      description: "Examen final de quinto año, nivel C1, con un promedio de 9,50.",
    },
  ],
  en: [
    {
      title: "Information Systems Engineering",
      place: "National Technological University (UTN) — Mendoza",
      date: "In progress",
      description:
        "Currently pursuing a degree in Information Systems Engineering at UTN Mendoza Regional Faculty, with coursework in programming, systems analysis, and technology project management.",
      current: true,
    },
    {
      title: "Front End Specialist",
      place: CTD_EN,
      date: "January 2024",
      description:
        "Specialized training in frontend development, focused on building functional interfaces and improving usability and user experience across platforms.",
      detail: "645 hours",
      certificate: "/certificados/front-end-specialist.pdf",
    },
    {
      title: "Professional Developer",
      place: CTD_EN,
      date: "December 2022",
      description:
        "Training in the full software development lifecycle, covering the skills needed to build applications that meet users' needs.",
      detail: "1,568 hours",
      certificate: "/certificados/professional-developer.pdf",
    },
    {
      title: "English — C1 level",
      place: "English Language Learning Centre",
      date: "2018",
      description: "Fifth-year final examination, C1 level, with an overall average of 9.50.",
    },
  ],
};
