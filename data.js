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
    name: "Proyectos frontend en preparación",
    description:
      "Estoy organizando proyectos para mostrar mejor mi trabajo con Angular, TypeScript, HTML, CSS, consumo de APIs REST y diseño responsive. Esta sección se irá actualizando con repositorios y demos reales.",
    stack: ["Angular", "TypeScript", "HTML", "CSS", "APIs REST"],
    repo: "",
    demo: "",
    year: "En construcción",
    accent: "#00D4FF",
  },
];

/** @type {SkillGroup[]} */
const SKILL_GROUPS = [
  {
    category: "Frontend principal",
    items: [
      { name: "Angular", level: 75 },
      { name: "TypeScript", level: 70 },
      { name: "JavaScript", level: 70 },
      { name: "HTML5", level: 85 },
      { name: "CSS3", level: 80 },
    ],
  },
  {
    category: "Flujo de trabajo",
    items: [
      { name: "Git & GitHub", level: 75 },
      { name: "Scrum", level: 75 },
      { name: "Consumo de APIs REST", level: 70 },
      { name: "Responsive Design", level: 80 },
    ],
  },
  {
    category: "Angular y UI",
    items: [
      { name: "Componentes reutilizables", level: 75 },
      { name: "Formularios", level: 70 },
      { name: "Manejo de estado básico", level: 65 },
      { name: "PrimeNG", level: 60 },
    ],
  },
  {
    category: "Conocimientos complementarios",
    items: [
      { name: ".NET básico", level: 35 },
      { name: "MongoDB básico", level: 35 },
      { name: "AWS básico", level: 30 },
      { name: "IA como apoyo al desarrollo", level: 65 },
    ],
  },
];

/** Case study — featured project deep-dive. */
const CASE_STUDY = {
  project: "Aplicación Frontend en Angular",
  badge: "Destacado · 2024",
  tagline: "Proyecto frontend para practicar estructura de componentes, consumo de datos y diseño responsive.",
  problem:
    "El objetivo era construir una interfaz organizada que permitiera visualizar información de forma clara, mantener una navegación sencilla y adaptarse correctamente a diferentes tamaños de pantalla.",
  solution:
    "Desarrollo de una aplicación frontend con Angular, TypeScript, HTML y CSS, separando la interfaz en componentes reutilizables y manteniendo una estructura fácil de entender y extender.",
  decisions: [
    { label: "Angular + TypeScript", reason: "Para trabajar con una estructura clara, componentes organizados y tipado que ayuda a reducir errores." },
    { label: "Componentes reutilizables", reason: "Separación de secciones de la interfaz para facilitar mantenimiento y reutilización dentro del proyecto." },
    { label: "Responsive Design", reason: "Uso de CSS Grid, Flexbox y media queries para adaptar la experiencia a móvil, tablet y escritorio." },
    { label: "Consumo de APIs REST", reason: "Integración con datos externos o simulados para practicar flujos reales de carga, estados y presentación de información." },
  ],
  results: [
    { metric: "Angular", label: "Estructura basada en componentes" },
    { metric: "REST", label: "Consumo y presentación de datos" },
    { metric: "Responsive", label: "Adaptación a diferentes pantallas" },
    { metric: "Scrum", label: "Trabajo organizado por tareas" },
  ],
};

/** Personal — about, socials. */
const PROFILE = {
  name: "Julio Mendoza",
  role: "Frontend Developer enfocado en Angular",
  location: "Colombia",
  experience: "Cerca de 1 año y medio",
  bio: [
    "Desarrollador frontend en crecimiento, con cerca de año y medio de experiencia práctica construyendo interfaces web con Angular. Me enfoco principalmente en Angular, TypeScript, HTML y CSS para crear interfaces claras, responsivas y fáciles de usar, cuidando la experiencia visual, la organización del código y su mantenibilidad.",
    "He trabajado en el desarrollo de componentes reutilizables, formularios, consumo de APIs REST, manejo básico de estado y diseño adaptable a diferentes dispositivos.",
    "También he tenido contacto con metodologías ágiles como Scrum y conocimientos iniciales en tecnologías como .NET, MongoDB y AWS. Aunque mi enfoque principal es el frontend, este acercamiento me ha permitido entender mejor cómo se integran las diferentes partes de una aplicación.",
  ],
  differentiators: [
    {
      title: "Frontend claro y ordenado",
      body: "Construyo interfaces pensando en la persona que las va a usar y en que el código pueda mantenerse con facilidad.",
    },
    {
      title: "Componentes reutilizables",
      body: "Me enfoco en separar responsabilidades, reutilizar piezas de UI y mantener una estructura entendible dentro del proyecto.",
    },
    {
      title: "Aprendizaje y mejora continua",
      body: "Uso herramientas de apoyo, documentación y buenas prácticas para seguir fortaleciendo mis bases técnicas.",
    },
  ],
  social: {
    github: "",
    linkedin: "https://www.linkedin.com/in/julio-andres-mendoza-ba89151ab",
    email: "anjumendoza16@gmail.com",
  },
};

// Expose globals for script.js (no modules — GitHub Pages friendly).
window.PORTFOLIO_DATA = { PROJECTS, SKILL_GROUPS, CASE_STUDY, PROFILE };
