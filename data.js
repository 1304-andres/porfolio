/**
 * Portfolio data — edit this file to update content without touching HTML.
 *
 * @typedef {Object} Project
 * @property {string} id
 * @property {string} name
 * @property {string} description
 * @property {string[]} stack
 * @property {string} repo       - GitHub repo URL
 * @property {string} demo       - Live demo URL
 * @property {string} year
 * @property {string} [accent]   - Optional hex accent for card glyph
 *
 * @typedef {Object} Skill
 * @property {string} name
 * @property {number} level      - 0..100
 *
 * @typedef {Object} SkillGroup
 * @property {string} category
 * @property {Skill[]} items
 */

/** @type {Project[]} */
const PROJECTS = [
  {
    id: "p01",
    name: "Dashboard de E-commerce",
    description:
      "Panel de análisis en tiempo real. Gráficos dinámicos, diseño modular con drag-and-drop, exportación de datos y vistas por roles de usuario.",
    stack: ["Angular", "TypeScript", "RxJS", "Tailwind", "PrimeNG"],
    repo: "https://github.com/tu-usuario/proyecto-1",
    demo: "https://demo.dev",
    year: "2024",
    accent: "#00D4FF",
  },
  {
    id: "p02",
    name: "Plataforma de Gestión",
    description:
      "Herramienta de operaciones y administración. Interfaz limpia, offline-first y sincronización de datos mediante APIs REST.",
    stack: ["Angular", "TypeScript", "RxJS", "SCSS"],
    repo: "https://github.com/tu-usuario/proyecto-2",
    demo: "https://demo.dev",
    year: "2024",
    accent: "#7C5CFF",
  },
  {
    id: "p03",
    name: "Sistema CMS",
    description:
      "Gestor de contenidos con composición por bloques y previsualización en tiempo real. Optimizado para cargas rápidas.",
    stack: ["Angular", "JavaScript", "HTML5", "CSS3"],
    repo: "https://github.com/tu-usuario/proyecto-3",
    demo: "https://demo.dev",
    year: "2023",
    accent: "#30E0A1",
  },
  {
    id: "p04",
    name: "UI de Finanzas",
    description:
      "Interfaz para el control de gastos. Manejo de estados eficiente, formateo de divisas y tablas de datos avanzadas.",
    stack: ["Angular", "RxJS", "CSS Grid"],
    repo: "https://github.com/tu-usuario/proyecto-4",
    demo: "https://demo.dev",
    year: "2023",
    accent: "#FFB84D",
  },
  {
    id: "p05",
    name: "Design System",
    description:
      "Librería de componentes reutilizables. Temas personalizables y optimizados para accesibilidad (a11y).",
    stack: ["Angular", "SCSS", "Componentes"],
    repo: "https://github.com/tu-usuario/proyecto-5",
    demo: "https://demo.dev",
    year: "2023",
    accent: "#FF6B9D",
  },
  {
    id: "p06",
    name: "Buscador de Datos",
    description:
      "Explorador de información filtrable. Manejo de peticiones asíncronas, rutas protegidas y diseño responsive.",
    stack: ["TypeScript", "Angular", "API REST"],
    repo: "https://github.com/tu-usuario/proyecto-6",
    demo: "https://demo.dev",
    year: "2022",
    accent: "#00D4FF",
  },
];

/** @type {SkillGroup[]} */
const SKILL_GROUPS = [
  {
    category: "Frontend",
    items: [
      { name: "Angular", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
    ],
  },
  {
    category: "UI / UX",
    items: [
      { name: "Responsive Design", level: 90 },
      { name: "Component-based architecture", level: 85 },
      { name: "PrimeNG", level: 80 },
    ],
  },
  {
    category: "Herramientas",
    items: [
      { name: "Git & GitHub", level: 85 },
      { name: "Consumo de APIs REST", level: 90 },
      { name: "Manejo de estados básico", level: 75 },
    ],
  },
  {
    category: "IA aplicada al desarrollo",
    items: [
      { name: "Generación de código base", level: 90 },
      { name: "Optimización y refactor", level: 85 },
      { name: "Debugging asistido", level: 85 },
      { name: "Análisis y comprensión", level: 90 },
    ],
  },
];

/** Case study — featured project deep-dive. */
const CASE_STUDY = {
  project: "Sistema de Gestión",
  tagline: "Modernización de una herramienta interna con enfoque en escalabilidad.",
  problem:
    "El sistema anterior era lento y no estaba optimizado para dispositivos móviles, lo que causaba cuellos de botella en la operativa diaria y dificultaba el entrenamiento de nuevos empleados.",
  solution:
    "Desarrollo de una Progressive Web App (PWA) en Angular con una arquitectura centrada en la eficiencia. Se implementó una interfaz limpia y componentes modulares que permiten visualizaciones de datos en tiempo real y mejoran la experiencia general del usuario.",
  decisions: [
    { label: "Angular + TypeScript", reason: "Para tipado seguro, estructura robusta y un ecosistema sólido en proyectos escalables." },
    { label: "Componentes Modulares", reason: "Creación de componentes aislados para reutilizar lógica en diferentes partes de la aplicación." },
    { label: "CSS Grid / Flexbox", reason: "Diseño completamente responsivo adaptado tanto a monitores de escritorio como a tabletas." },
    { label: "Optimización por IA", reason: "Uso de asistentes de código para refactorizar lógica pesada y asegurar un rendimiento óptimo." },
  ],
  results: [
    { metric: "-40%", label: "Reducción en tiempos de carga iniciales" },
    { metric: "100%", label: "Migración a una arquitectura de componentes" },
    { metric: "Mobile", label: "Soporte total para dispositivos móviles" },
    { metric: "A11y AA", label: "Cumplimiento de estándares de accesibilidad" },
  ],
};

/** Personal — about, socials. */
const PROFILE = {
  name: "Julio Mendoza",
  role: "Frontend Developer enfocado en Angular",
  location: "Colombia",
  years: 2,
  bio:
    "Desarrollo interfaces modernas, escalables y optimizadas, combinando buenas prácticas de desarrollo con el uso de herramientas de IA para mejorar la eficiencia y calidad del código. Soy desarrollador frontend con experiencia en Angular, enfocado en la creación de interfaces dinámicas, reutilizables y orientadas a una buena experiencia de usuario.<br><br>Actualmente trabajo en el desarrollo de aplicaciones donde combino conocimientos técnicos con herramientas de inteligencia artificial para acelerar procesos, generar soluciones base y optimizar código, siempre validando y adaptando cada implementación a buenas prácticas.<br><br>Me interesa seguir creciendo como desarrollador, fortalecer mis bases y construir soluciones cada vez más completas y eficientes.",
  differentiators: [
    {
      title: "UX orientado al usuario final",
      body: "Diseño para la persona que va a usar la plataforma todos los días, enfocándome en la usabilidad y la accesibilidad.",
    },
    {
      title: "Arquitectura escalable",
      body: "Uso de buenas prácticas, componentes reutilizables y código limpio para que el proyecto pueda crecer sin fricciones.",
    },
    {
      title: "Rendimiento y Optimización",
      body: "Aprovechando herramientas de IA y métricas reales para asegurar interfaces rápidas y eficientes.",
    },
  ],
  social: {
    github: "https://github.com/tu-usuario",
    linkedin: "https://linkedin.com/in/tu-usuario",
    email: "tu-correo@email.com",
  },
};

// Expose globals for script.js (no modules — GitHub Pages friendly).
window.PORTFOLIO_DATA = { PROJECTS, SKILL_GROUPS, CASE_STUDY, PROFILE };
