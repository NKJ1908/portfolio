import aniekgroup from "@/assets/aniekgroup.jpg";
import keinagroup from "@/assets/keinagroup.jpg";
import kbsconstruct from "@/assets/kbsconstruct.jpg";

export type ProjectCategory = "Web Apps" | "E-commerce" | "Mobile" | "Websites";

export type Project = {
  slug: string;
  title: string;
  titleFr?: string;
  summary: string;
  summaryFr?: string;
  category: ProjectCategory;
  stack: string[];
  image: string;
  imageAlt: string;
  demo?: string;
  github?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "anuba",
    title: "ANUBA — Industrial & Auto Parts App",
    titleFr: "ANUBA — App de pièces industrielles & auto",
    summary:
      "Mobile app to request quotes and order industrial or automotive parts from a reference or a photo. Available on the Play Store.",
    summaryFr:
      "Application mobile pour demander un devis et commander des pièces industrielles ou automobiles à partir d'une référence ou d'une photo. Disponible sur le Play Store.",
    category: "Mobile",
    stack: ["Flutter", "Dart", "Google AppScript"],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Mobile application interface",
  },
  {
    slug: "keinagroup",
    title: "KEINAGROUP — Corporate site & e-commerce",
    titleFr: "KEINAGROUP — Site vitrine & e-commerce",
    summary:
      "Corporate website and e-commerce platform presenting the company's activities and services.",
    summaryFr:
      "Site web d'entreprise et plateforme e-commerce présentant les activités et services de la société.",
    category: "E-commerce",
    stack: ["React", "Node.js", "Express", "Odoo"],
    image: keinagroup,
    imageAlt: "KEINAGROUP website preview",
    demo: "https://www.keinagroup.com",
  },
  {
    slug: "aniek-ayo",
    title: "ANIEK & AYO — Corporate site & e-commerce",
    titleFr: "ANIEK & AYO — Site vitrine & e-commerce",
    summary:
      "Corporate website with e-commerce capabilities, content managed and customized through Odoo.",
    summaryFr:
      "Site vitrine avec fonctionnalités e-commerce, contenu géré et personnalisé via Odoo.",
    category: "E-commerce",
    stack: ["Odoo Website Builder"],
    image: aniekgroup,
    imageAlt: "ANIEK & AYO website preview",
    demo: "https://www.aniekgroup.com",
  },
  {
    slug: "kbs-construct",
    title: "KBS Construct — Corporate site",
    titleFr: "KBS Construct — Site vitrine",
    summary:
      "A showcase website for a fire protection and safety solutions company based in Belgium.",
    summaryFr:
      "Site vitrine pour une entreprise de protection et solutions incendie basée en Belgique.",
    category: "Websites",
    stack: ["React", "Next.js", "Tailwind CSS"],
    image: kbsconstruct,
    imageAlt: "KBS Construct website preview",
    demo: "https://www.kbsconstruct.com",
  },
];

export const PROJECT_CATEGORIES = ["All", "Web Apps", "E-commerce", "Mobile", "Websites"] as const;
