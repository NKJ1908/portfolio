export const LANGS = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
] as const;

export type Lang = (typeof LANGS)[number]["code"];

export type Translation = Record<Lang, string>;

export type Dict = Record<string, Translation>;

export const dict: Dict = {
  // Navigation

  "nav.home": {
    en: "Home",
    fr: "Accueil",
  },
  "nav.about": {
    en: "About",
    fr: "À propos",
  },
  "nav.services": {
    en: "Services",
    fr: "Services",
  },
  "nav.projects": {
    en: "Projects",
    fr: "Projets",
  },
  "nav.contact": {
    en: "Contact",
    fr: "Contact",
  },
  "nav.cta": {
    en: "Get in touch",
    fr: "Me contacter",
  },
  "nav.toggleMenu": {
    en: "Toggle menu",
    fr: "Ouvrir le menu",
  },
  "nav.langLabel": {
    en: "Language",
    fr: "Langue",
  },

  // Hero
  "hero.title": {
    en: "From bold ideas to digital products that matter.",
    fr: "Des idées ambitieuses aux produits numériques qui comptent.",
  },

  "hero.intro": {
    en: "I design and build scalable web and mobile applications, turning ideas into reliable products built for the real world.",
    fr: "Je conçois et développe des applications web et mobiles évolutives, transformant les idées en produits fiables pensés pour le monde réel.",
  },
  "hero.viewProjects": {
    en: "View Projects",
    fr: "Voir les projets",
  },
  "hero.contactMe": {
    en: "Contact Me",
    fr: "Me contacter",
  },
  "hero.downloadCV": {
    en: "Download CV",
    fr: "Télécharger mon CV",
  },

  // Home — About

  "home.aboutEyebrow": {
    en: "About",
    fr: "À propos",
  },
  "home.aboutTitle": {
    en: "I build reliable software, from idea to production.",
    fr: "Je conçois des logiciels fiables, de l'idée à la production.",
  },

  "home.aboutDesc": {
    en: "FullStack developer focused on web, mobile and scalable solutions.",
    fr: "Développeur FullStack spécialisé dans le web, le mobile et les solutions évolutives.",
  },

  "home.pillar1.t": {
    en: "Clean architecture",
    fr: "Architecture propre",
  },
  "home.pillar1.d": {
    en: "Well-structured systems designed to remain maintainable as products and teams grow.",
    fr: "Des systèmes bien structurés, conçus pour rester maintenables à mesure que les produits et les équipes évoluent.",
  },

  "home.pillar2.t": {
    en: "Performance & reliability",
    fr: "Performance & fiabilité",
  },
  "home.pillar2.d": {
    en: "I focus on building fast, stable and dependable experiences across web and mobile.",
    fr: "Je veille à construire des expériences rapides, stables et fiables sur le web comme sur mobile.",
  },

  "home.pillar3.t": {
    en: "Practical problem solving",
    fr: "Résolution pragmatique",
  },
  "home.pillar3.d": {
    en: "Understand the problem first, then choose the simplest technology that solves it well.",
    fr: "Comprendre le problème avant tout, puis choisir la technologie la plus simple pour le résoudre efficacement.",
  },

  "home.readBackground": {
    en: "Read my background",
    fr: "Découvrir mon parcours",
  },

  // Home — Services

  "home.servicesEyebrow": {
    en: "Services",
    fr: "Services",
  },
  "home.servicesTitle": {
    en: "Building software from idea to production.",
    fr: "Des idées jusqu'à la mise en production.",
  },
  "home.servicesDesc": {
    en: "Web applications, APIs, dashboards and integrations — built with clean architecture and reliable performance.",
    fr: "Applications web, APIs, tableaux de bord et intégrations — conçus avec une architecture propre et des performances fiables.",
  },
  "home.personalDev": {
    en: "Development",
    fr: "Développement",
  },
  "home.primary": {
    en: "Primary",
    fr: "Principal",
  },
  "home.agencyBrand": {
    en: "Agency — Brand & Design",
    fr: "Agence — Marque & Design",
  },
  "home.studio": {
    en: "Studio",
    fr: "Studio",
  },

  // Home — Projects

  "home.workEyebrow": {
    en: "Selected work",
    fr: "Sélection",
  },
  "home.projectsTitle": {
    en: "Recent projects.",
    fr: "Projets récents.",
  },
  "home.projectsDesc": {
    en: "A small selection of projects shipped to production for real users or teams.",
    fr: "Une sélection de projets réellement déployés en production pour des utilisateurs ou des équipes.",
  },
  "home.seeAll": {
    en: "See all projects",
    fr: "Voir tous les projets",
  },

  // Home — Stack

  "home.stackEyebrow": {
    en: "Stack",
    fr: "Stack",
  },
  "home.stackTitle": {
    en: "Tools I reach for.",
    fr: "Les outils que j'utilise.",
  },

  // Home — CTA

  // Home — CTA

  "home.ctaEyebrow": {
    en: "Let's work together",
    fr: "Travaillons ensemble",
  },

  "home.ctaTitle": {
    en: "Have an idea to build?",
    fr: "Une idée à concrétiser ?",
  },

  "home.ctaDesc": {
    en: "Tell me what you're building, and let's explore how I can help turn it into reality.",
    fr: "Parlez-moi de votre projet et voyons ensemble comment je peux vous aider à le concrétiser.",
  },

  "home.ctaButton": {
    en: "Let's talk",
    fr: "Parlons-en",
  },

  // About

  "about.eyebrow": {
    en: "About",
    fr: "À propos",
  },
  "about.title": {
    en: "I build reliable web and mobile applications.",
    fr: "Je conçois des applications web et mobiles fiables.",
  },

  "about.desc": {
    en: "FullStack developer focused on building practical, maintainable and scalable digital solutions.",
    fr: "Développeur FullStack spécialisé dans la création de solutions numériques pratiques, maintenables et évolutives.",
  },

  "about.principlesTitle": {
    en: "How I work",
    fr: "Ma façon de travailler",
  },

  "about.pillar1.t": {
    en: "Clean architecture",
    fr: "Architecture propre",
  },
  "about.pillar1.d": {
    en: "Well-structured systems designed to remain maintainable as products and teams grow.",
    fr: "Des systèmes bien structurés, conçus pour rester maintenables à mesure que les produits et les équipes évoluent.",
  },

  "about.pillar2.t": {
    en: "Performance & reliability",
    fr: "Performance & fiabilité",
  },
  "about.pillar2.d": {
    en: "I focus on building fast, stable and dependable experiences across web and mobile.",
    fr: "Je veille à construire des expériences rapides, stables et fiables sur le web comme sur mobile.",
  },

  "about.pillar3.t": {
    en: "Practical problem solving",
    fr: "Résolution pragmatique",
  },
  "about.pillar3.d": {
    en: "Understand the problem first, then choose the simplest technology that solves it well.",
    fr: "Comprendre le problème avant tout, puis choisir la technologie la plus simple pour le résoudre efficacement.",
  },

  // About — Experience

  "about.experienceTitle": {
    en: "Professional experience",
    fr: "Expérience professionnelle",
  },

  "about.experience1.role": {
    en: "FullStack Developer",
    fr: "Développeur FullStack",
  },
  "about.experience1.company": {
    en: "ANIEK & AYO / KEINAGROUP",
    fr: "ANIEK & AYO / KEINAGROUP",
  },
  "about.experience1.period": {
    en: "Oct 2025 — Jun 2026",
    fr: "Oct. 2025 — Juin 2026",
  },
  "about.experience1.location": {
    en: "Lomé, Togo",
    fr: "Lomé, Togo",
  },
  "about.experience1.description": {
    en: "Developed web and mobile applications, e-commerce platforms and backend features. Contributed to functional analysis, testing and continuous improvement while working with Flutter, React, Node.js, Express and Odoo.",
    fr: "Développement d'applications web et mobiles, de plateformes e-commerce et de fonctionnalités backend. Participation à l'analyse fonctionnelle, aux tests et à l'amélioration continue avec Flutter, React, Node.js, Express et Odoo.",
  },
  "about.experience1.technologies": {
    en: "Flutter · Dart · React · Node.js · Express · Odoo · PostgreSQL · Git · Prisma",
    fr: "Flutter · Dart · React · Node.js · Express · Odoo · PostgreSQL · Git · Prisma",
  },

  "about.experience2.role": {
    en: "FullStack Developer",
    fr: "Développeur FullStack",
  },
  "about.experience2.company": {
    en: "Numerum Dev Center",
    fr: "Numerum Dev Center",
  },
  "about.experience2.period": {
    en: "Aug 2025 — Oct 2025",
    fr: "Août 2025 — Oct. 2025",
  },
  "about.experience2.location": {
    en: "Lomé, Togo",
    fr: "Lomé, Togo",
  },
  "about.experience2.description": {
    en: "Developed FullStack web applications, designed and managed relational and NoSQL databases, and contributed to testing, debugging, performance optimization and application maintenance.",
    fr: "Développement d'applications web FullStack, conception et gestion de bases de données relationnelles et NoSQL, avec participation aux tests, au débogage, à l'optimisation des performances et à la maintenance applicative.",
  },
  "about.experience2.technologies": {
    en: "React · Node.js · Express · MongoDB · Git",
    fr: "React · Node.js · Express · MongoDB · Git",
  },

  // About — Education

  "about.educationTitle": {
    en: "Education",
    fr: "Formation",
  },
  "about.education.degree": {
    en: "Professional Bachelor's Degree in Software Engineering",
    fr: "Licence professionnelle en génie logiciel",
  },
  "about.education.school": {
    en: "ISSEC-Kouvahey",
    fr: "ISSEC-Kouvahey",
  },
  "about.education.period": {
    en: "2022 — 2025",
    fr: "2022 — 2025",
  },
  "about.education.location": {
    en: "Lomé, Togo",
    fr: "Lomé, Togo",
  },

  // Services — Categories

  "services.personal.eyebrow": {
    en: "Independent",
    fr: "Indépendant",
  },
  "services.personal.title": {
    en: "Development services.",
    fr: "Services de développement.",
  },
  "services.personal.desc": {
    en: "My core practice. Direct collaboration with founders, businesses and technical teams.",
    fr: "Mon activité principale. Une collaboration directe avec les fondateurs, les entreprises et les équipes techniques.",
  },

  "services.agency.eyebrow": {
    en: "Agency",
    fr: "Agence",
  },
  "services.agency.title": {
    en: "Brand & design services.",
    fr: "Services de marque & design.",
  },
  "services.agency.desc": {
    en: "Delivered through the studio. Useful when a project needs both engineering and identity working together.",
    fr: "Proposés via le studio. Pertinents lorsqu'un projet a besoin à la fois d'ingénierie et d'une identité visuelle cohérente.",
  },

  // Personal Services

  "svc.webapp.t": {
    en: "Web Application Development",
    fr: "Développement d'applications web",
  },
  "svc.webapp.d": {
    en: "Production-ready SPAs and full-stack applications.",
    fr: "Applications SPA et full-stack prêtes pour la production.",
  },

  "svc.bizsite.t": {
    en: "Business Websites",
    fr: "Sites vitrine professionnels",
  },
  "svc.bizsite.d": {
    en: "Fast, SEO-ready websites designed to present and grow your business.",
    fr: "Des sites rapides et optimisés pour le SEO, conçus pour présenter et développer votre activité.",
  },

  "svc.frontend.t": {
    en: "Frontend Development",
    fr: "Développement frontend",
  },
  "svc.frontend.d": {
    en: "Accessible, typed and maintainable React interfaces.",
    fr: "Des interfaces React accessibles, typées et maintenables.",
  },

  "svc.backend.t": {
    en: "Backend Development",
    fr: "Développement backend",
  },
  "svc.backend.d": {
    en: "APIs, authentication, data modeling and background processing.",
    fr: "APIs, authentification, modélisation des données et traitements en arrière-plan.",
  },

  "svc.api.t": {
    en: "API Integration",
    fr: "Intégration d'API",
  },
  "svc.api.d": {
    en: "Payments, CRMs, AI services and third-party systems.",
    fr: "Paiements, CRM, services d'IA et systèmes tiers.",
  },

  "svc.custom.t": {
    en: "Custom Solutions",
    fr: "Solutions sur mesure",
  },
  "svc.custom.d": {
    en: "Bespoke software tools built around specific business workflows.",
    fr: "Des outils logiciels sur mesure conçus autour de workflows métier spécifiques.",
  },

  "svc.ecom.t": {
    en: "E-commerce Systems",
    fr: "Systèmes e-commerce",
  },
  "svc.ecom.d": {
    en: "Online stores, checkout, inventory and order management.",
    fr: "Boutiques en ligne, paiement, gestion des stocks et des commandes.",
  },

  "svc.dash.t": {
    en: "Dashboards",
    fr: "Tableaux de bord",
  },
  "svc.dash.d": {
    en: "Analytics and operational interfaces for better decision-making.",
    fr: "Des interfaces analytiques et opérationnelles pour faciliter la prise de décision.",
  },
  // Agency Services

  "ag.branding.t": {
    en: "Branding",
    fr: "Identité de marque",
  },
  "ag.branding.d": {
    en: "Identity systems built to scale with your brand.",
    fr: "Des systèmes d'identité conçus pour accompagner la croissance de votre marque.",
  },

  "ag.graphic.t": {
    en: "Graphic Design",
    fr: "Design graphique",
  },
  "ag.graphic.d": {
    en: "Professional visual communication designed for clarity and impact.",
    fr: "Une communication visuelle professionnelle pensée pour la clarté et l'impact.",
  },

  "ag.logo.t": {
    en: "Logo Design",
    fr: "Création de logo",
  },
  "ag.logo.d": {
    en: "Distinctive marks crafted for clarity and longevity.",
    fr: "Des logos distinctifs conçus pour la clarté et la durée.",
  },

  "ag.flyers.t": {
    en: "Flyers",
    fr: "Flyers",
  },
  "ag.flyers.d": {
    en: "Print-ready event and campaign materials.",
    fr: "Des supports prêts à imprimer pour vos événements et campagnes.",
  },

  "ag.posters.t": {
    en: "Posters",
    fr: "Affiches",
  },
  "ag.posters.d": {
    en: "Large-format visuals designed to communicate with impact.",
    fr: "Des visuels grand format conçus pour communiquer avec impact.",
  },

  "ag.social.t": {
    en: "Social Media Design",
    fr: "Design pour les réseaux sociaux",
  },
  "ag.social.d": {
    en: "Cohesive visual templates designed for your social channels.",
    fr: "Des modèles visuels cohérents conçus pour vos différents réseaux sociaux.",
  },

  "ag.corp.t": {
    en: "Corporate Identity",
    fr: "Identité d'entreprise",
  },
  "ag.corp.d": {
    en: "Brand guidelines, stationery and visual assets.",
    fr: "Charte graphique, papeterie et supports de marque.",
  },

  // Projects

  "projects.eyebrow": {
    en: "Work",
    fr: "Réalisations",
  },
  "projects.title": {
    en: "Projects.",
    fr: "Projets.",
  },
  "projects.desc": {
    en: "Explore selected projects across web, mobile, e-commerce and digital products.",
    fr: "Découvrez une sélection de projets web, mobiles, e-commerce et de produits numériques.",
  },

  "projects.cat.all": {
    en: "All",
    fr: "Tous",
  },
  "projects.cat.WebApps": {
    en: "Web Apps",
    fr: "Applications web",
  },
  "projects.cat.Ecom": {
    en: "E-commerce",
    fr: "E-commerce",
  },
  "projects.cat.Mobile": {
    en: "Mobile",
    fr: "Mobile",
  },
  "projects.cat.Websites": {
    en: "Websites",
    fr: "Sites vitrine",
  },

  // Project Detail

  "pd.back": {
    en: "All projects",
    fr: "Tous les projets",
  },
  "pd.overview": {
    en: "Overview",
    fr: "Vue d'ensemble",
  },
  "pd.overviewBody": {
    en: "The system was designed around clear boundaries between business logic, data access and presentation, with a focus on maintainability and long-term evolution.",
    fr: "Le système a été conçu autour de frontières claires entre la logique métier, l'accès aux données et la présentation, avec un accent particulier sur la maintenabilité et l'évolution à long terme.",
  },
  "pd.highlights": {
    en: "Highlights",
    fr: "Points clés",
  },
  "pd.h1": {
    en: "Clear architecture designed for maintainability and scalability.",
    fr: "Une architecture claire conçue pour la maintenabilité et l'évolutivité.",
  },
  "pd.h2": {
    en: "Reliable application flows focused on user needs.",
    fr: "Des parcours applicatifs fiables et centrés sur les besoins des utilisateurs.",
  },
  "pd.h3": {
    en: "Performance and maintainability considered throughout development.",
    fr: "Les performances et la maintenabilité prises en compte tout au long du développement.",
  },
  "pd.h4": {
    en: "A solution designed to evolve with future requirements.",
    fr: "Une solution conçue pour évoluer avec les futurs besoins.",
  },
  "pd.stack": {
    en: "Stack",
    fr: "Stack",
  },
  "pd.liveDemo": {
    en: "Live demo",
    fr: "Démo en ligne",
  },
  "pd.source": {
    en: "Source",
    fr: "Code source",
  },
  "pd.notFound": {
    en: "Project not found",
    fr: "Projet introuvable",
  },
  "pd.backShort": {
    en: "← Back to projects",
    fr: "← Retour aux projets",
  },
  "pd.loadError": {
    en: "Couldn't load project",
    fr: "Impossible de charger le projet",
  },

  // Contact

  "contact.eyebrow": {
    en: "Contact",
    fr: "Contact",
  },
  "contact.title": {
    en: "Let's talk.",
    fr: "Discutons.",
  },
  "contact.desc": {
    en: "Tell me about your project or the problem you're trying to solve. Expect a thoughtful reply within two business days.",
    fr: "Parlez-moi de votre projet ou du problème que vous cherchez à résoudre. Vous recevrez une réponse réfléchie sous deux jours ouvrés.",
  },

  "contact.name": {
    en: "Name",
    fr: "Nom",
  },
  "contact.namePh": {
    en: "Your name",
    fr: "Votre nom",
  },

  "contact.email": {
    en: "Email",
    fr: "Email",
  },
  "contact.emailPh": {
    en: "you@company.com",
    fr: "vous@entreprise.com",
  },

  "contact.project": {
    en: "Project",
    fr: "Projet",
  },
  "contact.projectPh": {
    en: "Brief subject",
    fr: "Sujet en quelques mots",
  },

  "contact.message": {
    en: "Message",
    fr: "Message",
  },
  "contact.messagePh": {
    en: "What are you building?",
    fr: "Que construisez-vous ?",
  },

  "contact.send": {
    en: "Send message",
    fr: "Envoyer le message",
  },
  "contact.sent": {
    en: "Thanks — I'll be in touch shortly.",
    fr: "Merci — je reviens vers vous rapidement.",
  },

  "contact.label.email": {
    en: "Email",
    fr: "Email",
  },
  "contact.label.whatsapp": {
    en: "WhatsApp",
    fr: "WhatsApp",
  },
  "contact.label.phoneAlt": {
    en: "Phone (alt.)",
    fr: "Téléphone (alt.)",
  },
  "contact.label.location": {
    en: "Location",
    fr: "Localisation",
  },
  "contact.label.linkedin": {
    en: "LinkedIn",
    fr: "LinkedIn",
  },
  "contact.label.cv": {
    en: "Resume",
    fr: "CV",
  },

  "contact.cvValue": {
    en: "Download PDF",
    fr: "Télécharger le PDF",
  },
  "contact.linkedinValue": {
    en: "LinkedIn profile",
    fr: "Profil LinkedIn",
  },

  // Footer

  "footer.role": {
    en: "FullStack Developer",
    fr: "Développeur FullStack",
  },
  "footer.rights": {
    en: "All rights reserved.",
    fr: "Tous droits réservés.",
  },
  "footer.built": {
    en: "Built with intent.",
    fr: "Conçu avec intention.",
  },

  // 404 / Errors

  "err.notFoundTitle": {
    en: "Page not found",
    fr: "Page introuvable",
  },
  "err.notFoundDesc": {
    en: "The page you're looking for doesn't exist or has been moved.",
    fr: "La page recherchée n'existe pas ou a été déplacée.",
  },
  "err.goHome": {
    en: "Go home",
    fr: "Aller à l'accueil",
  },
  "err.didntLoad": {
    en: "This page didn't load",
    fr: "Cette page n'a pas pu se charger",
  },
  "err.somethingWrong": {
    en: "Something went wrong on our end.",
    fr: "Un problème est survenu de notre côté.",
  },
  "err.tryAgain": {
    en: "Try again",
    fr: "Réessayer",
  },
};
