export interface SkillDomain {
  id: string;
  domain: string;
  domainFr: string;
  role: string;
  roleFr: string;
  items: string[];
}

export const SKILL_DOMAINS: SkillDomain[] = [
  {
    id: "frontend",
    domain: "Frontend & Interfaces",
    domainFr: "Frontend & Interfaces",
    role: "Engineering responsive, accessible and high-performance interfaces that make digital products intuitive and enjoyable.",
    roleFr:
      "Conception d'interfaces web réactives, accessibles et performantes, rendant l'usage des produits numériques fluide et évident.",
    items: ["React", "TypeScript", "Tailwind CSS", "JavaScript (ES6+)", "HTML5 & CSS3"],
  },
  {
    id: "backend",
    domain: "Backend & Business Logic",
    domainFr: "Backend & Logique Métier",
    role: "Structuring robust APIs, business logic rules, authentication, and secure data handling to power web and mobile clients.",
    roleFr:
      "Structuration d'APIs robustes, règles métier, authentification et traitement sécurisé des données au service des applications.",
    items: ["Node.js", "Express.js", "REST APIs", "Authentication & Security", "Data Validation"],
  },
  {
    id: "mobile",
    domain: "Mobile Development",
    domainFr: "Développement Mobile",
    role: "Delivering native-feeling cross-platform applications for iOS and Android, adapted to field use and real-world network constraints.",
    roleFr:
      "Développement d'applications multiplateformes iOS & Android fluides, adaptées aux usages de terrain et contraintes réelles de réseau.",
    items: ["Flutter", "Dart", "iOS & Android", "Mobile UX", "Offline-ready patterns"],
  },
  {
    id: "database",
    domain: "Data & Storage",
    domainFr: "Bases de Données & Stockage",
    role: "Designing structured schemas, relational integrity, caching layers, and performant data retrieval pipelines.",
    roleFr:
      "Modélisation de schémas structurés, intégrité relationnelle, mise en cache et requêtes optimisées pour la pérennité des données.",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma ORM"],
  },
  {
    id: "tools-infra",
    domain: "Tools & Infrastructure",
    domainFr: "Outils, Cloud & Plateformes",
    role: "Reliable version control, containerization, cloud deployment, and business enterprise integration with Odoo ERP.",
    roleFr:
      "Gestion de versions rigoureuse, conteneurisation, déploiement cloud et intégration de gestion d'entreprise avec l'ERP Odoo.",
    items: ["Docker", "Linux", "Git & GitHub", "Vercel & Render", "Odoo ERP"],
  },
];
