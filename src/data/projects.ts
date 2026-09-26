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
  problem: string;
  problemFr: string;
  solution: string;
  solutionFr: string;
  role: string;
  roleFr: string;
  result: string;
  resultFr: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "anuba",
    title: "ANUBA — Industrial & Auto Parts Mobile App",
    titleFr: "ANUBA — Application mobile de pièces industrielles & auto",
    summary:
      "Mobile application enabling users to identify rare parts by reference or photo, request instant quotes, and place orders directly.",
    summaryFr:
      "Application mobile permettant d'identifier des pièces rares par référence ou photo, de demander un devis instantané et de passer commande.",
    category: "Mobile",
    stack: ["Flutter", "Dart", "Google AppScript", "Mobile UX"],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Interface de l'application mobile ANUBA",
    problem:
      "Finding and ordering specialized industrial or automotive spare parts is often cumbersome, slow, and prone to reference errors via traditional phone/counter channels.",
    problemFr:
      "Rechercher et commander des pièces détachées industrielles ou automobiles spécifiques est souvent lent et source d'erreurs de référence par les canaux physiques ou téléphoniques.",
    solution:
      "Developed a dedicated mobile app enabling clients to snap a photo or input a reference code, track quote validation in real time, and confirm orders smoothly.",
    solutionFr:
      "Conception d'une application mobile intuitive permettant aux clients de photographier une pièce ou renseigner une référence, de suivre l'avancement du devis et de valider leur commande rapidement.",
    role: "Full mobile engineering: UI/UX design, Flutter architecture, Google AppScript API integration, and Google Play Store deployment.",
    roleFr:
      "Développement mobile complet : conception ergonomique, architecture Flutter, intégration backend Google AppScript et déploiement sur le Google Play Store.",
    result:
      "Streamlined parts ordering workflow, reducing back-and-forth communication and turnaround time for customer inquiries.",
    resultFr:
      "Fluidification du parcours de commande, réduction significative des allers-retours et accélération du traitement des devis pour les clients.",
  },
  {
    slug: "keinagroup",
    title: "KEINAGROUP — Corporate Web Platform & E-commerce",
    titleFr: "KEINAGROUP — Plateforme web d'entreprise & e-commerce",
    summary:
      "Multi-activity corporate platform combining brand showcase with an integrated e-commerce catalog connected to enterprise management.",
    summaryFr:
      "Plateforme web combinant vitrine institutionnelle de marque et catalogue e-commerce connecté à la gestion d'entreprise.",
    category: "E-commerce",
    stack: ["React", "Node.js", "Express", "Odoo ERP"],
    image: keinagroup,
    imageAlt: "Aperçu du site et catalogue KEINAGROUP",
    demo: "https://www.keinagroup.com",
    problem:
      "The group needed to consolidate its multi-sector business activities on a credible digital portal while managing a synchronized commercial catalog.",
    problemFr:
      "Le groupe devait valoriser la diversité de ses activités sur une plateforme unifiée et crédible tout en gérant un catalogue commercial synchronisé.",
    solution:
      "Engineered a responsive React front-end paired with Node.js/Express services connected to Odoo ERP for centralized business operations.",
    solutionFr:
      "Développement d'un front-end réactif en React associé à des services Node.js/Express interconnectés avec l'ERP Odoo pour centraliser les opérations.",
    role: "Full-stack development, user experience design, API connections, and synchronization with Odoo business management.",
    roleFr:
      "Développement FullStack, conception des parcours utilisateurs, interconnexion d'API et synchronisation avec la gestion Odoo.",
    result:
      "High-credibility corporate presence facilitating partnership inquiries and commercial product exposure across targeted markets.",
    resultFr:
      "Présence digitale valorisante et structurée facilitant les prises de contact institutionnelles et la visibilité commerciale des produits.",
  },
  {
    slug: "aniek-ayo",
    title: "ANIEK & AYO — Corporate Showcase & Digital Store",
    titleFr: "ANIEK & AYO — Site vitrine & boutique e-commerce",
    summary:
      "Autonomous corporate and commercial platform engineered on Odoo, giving teams full autonomy over catalog, orders, and content.",
    summaryFr:
      "Plateforme vitrine et commerciale conçue sur Odoo, offrant aux équipes une totale autonomie sur le catalogue, les commandes et les contenus.",
    category: "E-commerce",
    stack: ["Odoo Website Builder", "Odoo ERP", "E-commerce", "CMS"],
    image: aniekgroup,
    imageAlt: "Aperçu de la vitrine ANIEK & AYO",
    demo: "https://www.aniekgroup.com",
    problem:
      "A rising brand required an elegant online showcase and shopping experience without heavy ongoing technical maintenance dependencies.",
    problemFr:
      "Une marque en expansion avait besoin d'une présence en ligne soignée et commerciale sans dépendre d'une infrastructure technique complexe à maintenir au quotidien.",
    solution:
      "Configured and customized Odoo Website & E-commerce, designing structured product hierarchies, custom layouts, and autonomous editorial workflows.",
    solutionFr:
      "Configuration et personnalisation avancée d'Odoo Website & E-commerce, structuration du catalogue produits et mise en place de flux d'administration autonomes.",
    role: "Platform architecture, Odoo customization, content structure, visual branding alignment, and launch support.",
    roleFr:
      "Architecture de la plateforme, personnalisation Odoo, organisation des contenus, alignement graphique et accompagnement au lancement.",
    result:
      "An operational e-commerce showcase managed 100% autonomously by the client's internal team.",
    resultFr:
      "Une boutique en ligne opérationnelle et administrée en toute autonomie par l'équipe interne du client.",
  },
  {
    slug: "kbs-construct",
    title: "KBS Construct — Fire Protection & Safety Corporate Site",
    titleFr: "KBS Construct — Site vitrine protection incendie (Belgique)",
    summary:
      "High-performance corporate showcase for a Belgian fire safety and protection company, built for speed, clarity, and institutional trust.",
    summaryFr:
      "Vitrine institutionnelle haute performance pour une entreprise belge spécialisée en sécurité et protection incendie.",
    category: "Websites",
    stack: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    image: kbsconstruct,
    imageAlt: "Aperçu du site corporate KBS Construct",
    demo: "https://www.kbsconstruct.com",
    problem:
      "A specialized fire safety provider in Belgium needed an authoritative, modern digital showcase to convince institutional and commercial property owners.",
    problemFr:
      "Un acteur spécialisé en sécurité incendie en Belgique avait besoin d'une vitrine moderne et rassurante pour convaincre les donneurs d'ordre et professionnels du bâtiment.",
    solution:
      "Built a modern, ultra-fast corporate website highlighting technical solutions, regulatory compliance expertise, and direct quote requests.",
    solutionFr:
      "Développement d'un site corporate ultra-rapide et structuré valorisant les solutions techniques, les normes de conformité et facilitant la prise de contact.",
    role: "Frontend engineering, responsive UI implementation, typography and performance optimization.",
    roleFr:
      "Développement Frontend, intégration responsive soignée, optimisation des performances web et de la hiérarchie visuelle.",
    result:
      "Professional and reassuring online identity strengthening business development with commercial contractors in Belgium.",
    resultFr:
      "Une présence digitale rassurante et professionnelle renforçant la crédibilité de l'entreprise auprès de ses partenaires en Belgique.",
  },
];

export const PROJECT_CATEGORIES = ["All", "Web Apps", "E-commerce", "Mobile", "Websites"] as const;
