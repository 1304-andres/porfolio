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

/** Professional challenges — real experience without exposing private projects. */
const PROFESSIONAL_CHALLENGES = {
  badge: "Experiencia real · Aprendizaje constante",
  intro:
    "Aunque algunos trabajos pertenecen a entornos privados o empresariales, mi experiencia me ha permitido enfrentar retos reales del desarrollo frontend: crear interfaces dinámicas, adaptar vistas a diferentes dispositivos, consumir datos desde APIs y mantener código claro mientras sigo fortaleciendo mis bases técnicas.",
  items: [
    {
      title: "Formularios dinámicos",
      body:
        "Trabajé en un formulario cuya estructura variaba según la industria seleccionada por el usuario. Esa estructura estaba almacenada en MongoDB y se exponía al frontend mediante una API, de modo que Angular recibía los campos correspondientes y los renderizaba dinámicamente sin tocar el código de la vista. El reto estuvo en interpretar correctamente esa respuesta y construir el formulario en tiempo de ejecución de forma confiable.",
    },
    {
      title: "Rediseño responsive",
      body:
        "Trabajé en el rediseño de una vista para adaptarla a diferentes tamaños de pantalla, desde móvil hasta escritorio. El reto estuvo en mantener una experiencia clara y usable en todos los breakpoints sin romper la estructura visual existente. Aprendí a priorizar qué información mostrar en cada contexto y a tomar decisiones de diseño pensando primero en el usuario.",
    },
    {
      title: "Escalabilidad de componentes",
      body:
        "He construido componentes reutilizables en Angular buscando mantener el código organizado y fácil de mantener. El desafío real estuvo en encontrar el equilibrio entre flexibilidad y simplicidad: que un componente sirva para varios casos sin volverse difícil de entender o modificar.",
    },
    {
      title: "Crecimiento técnico constante",
      body:
        "Mientras avanzo en proyectos reales, he profundizado en TypeScript, buenas prácticas de Angular y consumo de APIs REST. Cada reto nuevo me ha obligado a entender el porqué detrás de las decisiones técnicas, no solo a hacer que las cosas funcionen.",
    },
  ],
  highlights: [
    { metric: "Angular", label: "Interfaces y componentes dinámicos" },
    { metric: "TypeScript", label: "Código más claro y mantenible" },
    { metric: "APIs REST", label: "Conexión entre datos e interfaz" },
    { metric: "Responsive", label: "Experiencia adaptable por pantalla" },
  ],
};

/** Personal — about, socials. */
const PROFILE = {
  name: "Julio Mendoza",
  role: "Frontend Developer enfocado en Angular",
  location: "Colombia",
  experience: "Más de un año",
  bio: [
    "Desarrollador web en crecimiento, con más de un año de experiencia práctica construyendo interfaces web con Angular. Mi base principal está en frontend con Angular, TypeScript, HTML y CSS, pero también he tenido acercamiento a backend, bases de datos y servicios cloud.",
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
  contact: {
    formspreeEndpoint: "https://formspree.io/f/xkoyewkr",
  },
};

// Expose globals for script.js (no modules — GitHub Pages friendly).
window.PORTFOLIO_DATA = { PROJECTS, SKILL_GROUPS, PROFESSIONAL_CHALLENGES, PROFILE };
