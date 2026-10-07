export interface PersonalInfo {
  name: string;
  role: string;
  yearsOfExperience: number;
  bio: string;
}
const yearsOfExperience = 2;

export const personalInfo: PersonalInfo = {
  name: "Ronald Puerto",
  role: "Ingeniero de Sistemas · Desarrollador · Soporte e Infraestructura",
  yearsOfExperience,
  bio: `Desarrollador con ${yearsOfExperience} años de experiencia en el área de tecnología. Inicié como analista de soporte técnico, lo que me dio una perspectiva integral de los sistemas, redes, hardware y software. La programación siempre fue mi verdadera pasión, así que en paralelo desarrollé proyectos propios. Hoy combino esa base en infraestructura y soporte técnico con el desarrollo Fullstack.`,
};
export interface Skill {
  name: string;
  detail?: string;
}

export interface SkillCategory {
  category: string;
  items: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    items: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "Next.js" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "PHP (Laravel)" },
      { name: "Python", detail: "IA, Machine Learning, Automatizaciones" },
      { name: "SQL" },
    ],
  },
  {
    category: "Herramientas",
    items: [{ name: "Git" }, { name: "Jira" }],
  },
];
export interface Project {
  title: string;
  description: string;
  technologies: string[];
  demoURL?: string;
  repoURL?: string;
}

export const projects: Project[] = [
  {
    title: "Proyecto Lorem Ipsum",
    description:
      "Este es un proyecto de ejemplo que utiliza Lorem Ipsum para demostrar la estructura de datos.",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoURL: "https://example.com/demo",
    repoURL: "https://github.com/example/repo",
  },
];

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialURL?: string;
}

export const certifications: Certification[] = [
  {
    name: "Inteligencia Artificial Nivel Integrador",
    issuer: "Universidad Sergio Arboleda",
    date: "Diciembre 2024",
    credentialURL: "https://explorer.perawallet.app/asset/2568929866/",
  },
];

export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
  instagram: string;
}

export const contactInfo: ContactInfo = {
  email: "ronaldpuerto65@gmail.com",
  github: "https://github.com/ronitald/",
  linkedin: "https://www.linkedin.com/in/ronald-puerto-7a67b731a/",
  instagram: "https://www.instagram.com/ronitald/",
};
