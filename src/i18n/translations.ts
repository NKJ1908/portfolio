export type Lang = "en" | "fr";

export const LANGS: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
];

type Dict = Record<string, { en: string; fr: string }>;

export const dict: Dict = {
  // Nav
  "nav.home": { en: "Home", fr: "Accueil" },
  "nav.about": { en: "About", fr: "À propos" },
  "nav.services": { en: "Services", fr: "Services" },
  "nav.projects": { en: "Projects", fr: "Projets" },
  "nav.contact": { en: "Contact", fr: "Contact" },
  "nav.cta": { en: "Get in touch", fr: "Me contacter" },
  "nav.toggleMenu": { en: "Toggle menu", fr: "Ouvrir le menu" },
  "nav.langLabel": { en: "Language", fr: "Langue" },

  // Hero
  "hero.available": { en: "Available for engagements", fr: "Disponible pour vos projets" },
  "hero.titleA": { en: "Software developer building", fr: "Développeur logiciel concevant des systèmes web" },
  "hero.titleB": { en: "calm, precise", fr: "calmes et précis" },
  "hero.titleC": { en: "web systems.", fr: "." },
  "hero.intro": {
    en: "Software developer focused on web applications, clean architecture and reliable systems.",
    fr: "Développeur logiciel spécialisé dans les applications web, l'architecture propre et les systèmes fiables.",
  },
  "hero.viewProjects": { en: "View Projects", fr: "Voir les projets" },
  "hero.contactMe": { en: "Contact Me", fr: "Me contacter" },

  // Home — About
  "home.aboutEyebrow": { en: "About", fr: "À propos" },
  "home.aboutTitle": {
    en: "A calm operator with engineering discipline.",
    fr: "Un opérateur calme, avec la discipline de l'ingénierie.",
  },
  "home.aboutDesc": {
    en: "I build software the way good systems are built: deliberately, with clean boundaries, observable behavior and a bias toward simplicity. Every project earns its complexity.",
    fr: "Je construis le logiciel comme on bâtit un bon système : avec intention, des frontières nettes, un comportement observable et un biais pour la simplicité. Chaque projet justifie sa complexité.",
  },
  "home.pillar1.t": { en: "Clean architecture", fr: "Architecture propre" },
  "home.pillar1.d": { en: "Boundaries that survive feature pressure and team growth.", fr: "Des frontières qui résistent à la pression des features et à la croissance de l'équipe." },
  "home.pillar2.t": { en: "Performance focus", fr: "Performance maîtrisée" },
  "home.pillar2.d": { en: "Measured, profiled, and tuned — not assumed.", fr: "Mesurée, profilée et ajustée — jamais supposée." },
  "home.pillar3.t": { en: "Problem solving", fr: "Résolution de problèmes" },
  "home.pillar3.d": { en: "Understand the constraint before reaching for a tool.", fr: "Comprendre la contrainte avant de saisir un outil." },
  "home.readBackground": { en: "Read full background", fr: "Lire le parcours complet" },

  // Home — Services
  "home.servicesEyebrow": { en: "Services", fr: "Services" },
  "home.servicesTitle": { en: "Engineering, end to end.", fr: "L'ingénierie, de bout en bout." },
  "home.servicesDesc": {
    en: "Web applications, APIs, dashboards and integrations — built with clean architecture and honest performance.",
    fr: "Applications web, APIs, tableaux de bord et intégrations — construits avec une architecture propre et une performance honnête.",
  },
  "home.personalDev": { en: "Development", fr: "Développement" },
  "home.primary": { en: "Primary", fr: "Principal" },
  "home.agencyBrand": { en: "Agency — Brand & Design", fr: "Agence — Marque & Design" },
  "home.studio": { en: "Studio", fr: "Studio" },

  // Home — Projects
  "home.workEyebrow": { en: "Selected work", fr: "Sélection" },
  "home.projectsTitle": { en: "Recent projects.", fr: "Projets récents." },
  "home.projectsDesc": {
    en: "A small selection. Each shipped to production for paying users or teams.",
    fr: "Une courte sélection. Chacun livré en production pour de vrais utilisateurs ou équipes.",
  },
  "home.seeAll": { en: "See all projects", fr: "Voir tous les projets" },

  // Home — Stack
  "home.stackEyebrow": { en: "Stack", fr: "Stack" },
  "home.stackTitle": { en: "Tools I reach for.", fr: "Les outils que j'utilise." },

  // Home — CTA
  "home.ctaEyebrow": { en: "Next step", fr: "Étape suivante" },
  "home.ctaTitle": { en: "Have a system to build?", fr: "Un système à construire ?" },
  "home.ctaDesc": {
    en: "Tell me about the problem. I'll respond with whether — and how — I can help.",
    fr: "Parlez-moi du problème. Je vous dirai si — et comment — je peux aider.",
  },
  "home.ctaButton": { en: "Start a conversation", fr: "Démarrer la conversation" },

  // About
  "about.eyebrow": { en: "About", fr: "À propos" },
  "about.title": { en: "Engineer, focused on the craft.", fr: "Ingénieur, concentré sur le métier." },
  "about.desc": {
    en: "I build production software for teams that value craft. My focus is web applications, APIs and dashboards with clean architecture and honest performance.",
    fr: "Je conçois des logiciels en production pour des équipes qui valorisent le métier. Mon focus : applications web, APIs et tableaux de bord, avec une architecture propre et une performance honnête.",
  },
  
  "about.card1.t": { en: "Developer mindset", fr: "Mentalité de développeur" },
  "about.card1.d": { en: "I treat code as a long-term liability. The right abstraction beats clever code every time.", fr: "Je traite le code comme un passif de long terme. La bonne abstraction l'emporte toujours sur le code malin." },
  "about.card2.t": { en: "Clean architecture", fr: "Architecture propre" },
  "about.card2.d": { en: "Layered, testable, with boundaries that hold under change. Domain logic stays free of frameworks.", fr: "En couches, testable, avec des frontières qui tiennent face au changement. La logique métier reste indépendante des frameworks." },
  "about.card3.t": { en: "Performance focus", fr: "Performance maîtrisée" },
  "about.card3.d": { en: "I profile before I optimize, and I optimize the actual bottleneck — not the imagined one.", fr: "Je profile avant d'optimiser, et j'optimise le vrai goulot d'étranglement — pas celui que j'imagine." },
  "about.card4.t": { en: "Problem solving", fr: "Résolution de problèmes" },
  "about.card4.d": { en: "I work backwards from the constraint and avoid solutions in search of problems.", fr: "Je remonte depuis la contrainte et j'évite les solutions en quête d'un problème." },
  "about.card5.t": { en: "Professional discipline", fr: "Discipline professionnelle" },
  "about.card5.d": { en: "Clear writing, reliable timelines, predictable delivery. No theatrics.", fr: "Une écriture claire, des délais fiables, une livraison prévisible. Sans esbroufe." },
  "about.card6.t": { en: "Team posture", fr: "Posture d'équipe" },
  "about.card6.d": { en: "Calm in incidents, generous in reviews, honest in trade-offs.", fr: "Calme en incident, généreux en revue, honnête sur les arbitrages." },

  // Services page
  "services.personal.eyebrow": { en: "Personal", fr: "Personnel" },
  "services.personal.title": { en: "Development services.", fr: "Services de développement." },
  "services.personal.desc": { en: "Primary practice. Direct work with founders and engineering teams.", fr: "Activité principale. Travail direct avec fondateurs et équipes techniques." },
  "services.agency.eyebrow": { en: "Agency", fr: "Agence" },
  "services.agency.title": { en: "Brand & design services.", fr: "Services de marque & design." },
  "services.agency.desc": { en: "Delivered through the studio. Useful when a project needs both engineering and identity in lockstep.", fr: "Livrés via le studio. Utile quand un projet a besoin d'ingénierie et d'identité en parallèle." },

  // Personal services
  "svc.webapp.t": { en: "Web Application Development", fr: "Développement d'applications web" },
  "svc.webapp.d": { en: "Production-grade SPAs and full-stack apps.", fr: "Applications SPA et full-stack prêtes pour la production." },
  "svc.bizsite.t": { en: "Business Websites", fr: "Sites vitrine professionnels" },
  "svc.bizsite.d": { en: "Fast, SEO-ready marketing sites.", fr: "Sites marketing rapides et optimisés SEO." },
  "svc.frontend.t": { en: "Frontend Development", fr: "Développement frontend" },
  "svc.frontend.d": { en: "Accessible, typed React interfaces.", fr: "Interfaces React typées et accessibles." },
  "svc.backend.t": { en: "Backend Development", fr: "Développement backend" },
  "svc.backend.d": { en: "APIs, auth, data modeling, queues.", fr: "APIs, authentification, modélisation, files d'attente." },
  "svc.api.t": { en: "API Integration", fr: "Intégration d'API" },
  "svc.api.d": { en: "Payments, CRMs, AI, third-party systems.", fr: "Paiements, CRM, IA, systèmes tiers." },
  "svc.custom.t": { en: "Custom Solutions", fr: "Solutions sur mesure" },
  "svc.custom.d": { en: "Bespoke tools for specific workflows.", fr: "Outils sur mesure pour des workflows précis." },
  "svc.ecom.t": { en: "E-commerce Systems", fr: "Systèmes e-commerce" },
  "svc.ecom.d": { en: "Stores, checkout, inventory, fulfillment.", fr: "Boutiques, paiement, stock, livraison." },
  "svc.dash.t": { en: "Dashboards", fr: "Tableaux de bord" },
  "svc.dash.d": { en: "Analytics and operations interfaces.", fr: "Interfaces analytiques et opérationnelles." },

  // Agency services
  "ag.branding.t": { en: "Branding", fr: "Identité de marque" },
  "ag.branding.d": { en: "Identity systems built to scale.", fr: "Systèmes d'identité conçus pour durer." },
  "ag.graphic.t": { en: "Graphic Design", fr: "Design graphique" },
  "ag.graphic.d": { en: "Editorial-grade visual communication.", fr: "Communication visuelle de niveau éditorial." },
  "ag.logo.t": { en: "Logo Design", fr: "Création de logo" },
  "ag.logo.d": { en: "Marks crafted for clarity and longevity.", fr: "Des marques pensées pour la clarté et la durée." },
  "ag.flyers.t": { en: "Flyers", fr: "Flyers" },
  "ag.flyers.d": { en: "Print-ready event and campaign assets.", fr: "Supports d'événement et de campagne prêts à imprimer." },
  "ag.posters.t": { en: "Posters", fr: "Affiches" },
  "ag.posters.d": { en: "Large-format visuals with intent.", fr: "Visuels grand format, pensés avec intention." },
  "ag.social.t": { en: "Social Media Design", fr: "Design réseaux sociaux" },
  "ag.social.d": { en: "Cohesive templates across channels.", fr: "Modèles cohérents sur tous les canaux." },
  "ag.corp.t": { en: "Corporate Identity", fr: "Identité d'entreprise" },
  "ag.corp.d": { en: "Guidelines, stationery, brand assets.", fr: "Charte graphique, papeterie, assets de marque." },

  // Projects page
  "projects.eyebrow": { en: "Work", fr: "Réalisations" },
  "projects.title": { en: "Projects.", fr: "Projets." },
  "projects.desc": { en: "Filter by domain. Each card opens a brief project page.", fr: "Filtrer par domaine. Chaque carte ouvre une fiche projet." },
  "projects.cat.all": { en: "All", fr: "Tous" },
  "projects.cat.SaaS": { en: "SaaS", fr: "SaaS" },
  "projects.cat.WebApps": { en: "Web Apps", fr: "Applications web" },
  "projects.cat.Dashboards": { en: "Dashboards", fr: "Tableaux de bord" },
  "projects.cat.APIs": { en: "APIs", fr: "APIs" },

  // Project detail
  "pd.back": { en: "All projects", fr: "Tous les projets" },
  "pd.overview": { en: "Overview", fr: "Vue d'ensemble" },
  "pd.overviewBody": {
    en: "The system was designed around clear boundaries between domain logic, data access and presentation, with observability built in from day one.",
    fr: "Le système a été conçu autour de frontières nettes entre logique métier, accès aux données et présentation, avec une observabilité intégrée dès le premier jour.",
  },
  "pd.highlights": { en: "Highlights", fr: "Points clés" },
  "pd.h1": { en: "Production-ready architecture with explicit module boundaries.", fr: "Architecture prête pour la production avec des frontières de modules explicites." },
  "pd.h2": { en: "Comprehensive test coverage on the critical paths.", fr: "Couverture de tests complète sur les chemins critiques." },
  "pd.h3": { en: "Observability: structured logs, metrics and traces.", fr: "Observabilité : logs structurés, métriques et traces." },
  "pd.h4": { en: "Performance budgets enforced in CI.", fr: "Budgets de performance contrôlés en CI." },
  "pd.stack": { en: "Stack", fr: "Stack" },
  "pd.liveDemo": { en: "Live demo", fr: "Démo en ligne" },
  "pd.source": { en: "Source", fr: "Code source" },
  "pd.notFound": { en: "Project not found", fr: "Projet introuvable" },
  "pd.backShort": { en: "← Back to projects", fr: "← Retour aux projets" },
  "pd.loadError": { en: "Couldn't load project", fr: "Impossible de charger le projet" },

  // Contact
  "contact.eyebrow": { en: "Contact", fr: "Contact" },
  "contact.title": { en: "Let's talk.", fr: "Discutons." },
  "contact.desc": { en: "Tell me about the problem. Expect a thoughtful reply within two business days.", fr: "Parlez-moi du problème. Réponse réfléchie sous deux jours ouvrés." },
  "contact.name": { en: "Name", fr: "Nom" },
  "contact.namePh": { en: "Your name", fr: "Votre nom" },
  "contact.email": { en: "Email", fr: "Email" },
  "contact.emailPh": { en: "you@company.com", fr: "vous@entreprise.com" },
  "contact.project": { en: "Project", fr: "Projet" },
  "contact.projectPh": { en: "Brief subject", fr: "Sujet en quelques mots" },
  "contact.message": { en: "Message", fr: "Message" },
  "contact.messagePh": { en: "What are you building?", fr: "Que construisez-vous ?" },
  "contact.send": { en: "Send message", fr: "Envoyer le message" },
  "contact.sent": { en: "Thanks — I'll be in touch shortly.", fr: "Merci — je reviens vers vous rapidement." },
  "contact.label.email": { en: "Email", fr: "Email" },
  "contact.label.whatsapp": { en: "WhatsApp", fr: "WhatsApp" },
  "contact.label.phoneAlt": { en: "Phone (alt)", fr: "Téléphone (alt.)" },
  "contact.label.location": { en: "Location", fr: "Localisation" },
  "contact.label.linkedin": { en: "LinkedIn", fr: "LinkedIn" },
  "contact.linkedinValue": { en: "LinkedIn profile", fr: "Profil LinkedIn" },

  // Footer
  "footer.role": { en: "Software Developer", fr: "Développeur logiciel" },
  "footer.rights": { en: "All rights reserved.", fr: "Tous droits réservés." },
  "footer.built": { en: "Built with intent.", fr: "Conçu avec intention." },

  // 404 / errors
  "err.notFoundTitle": { en: "Page not found", fr: "Page introuvable" },
  "err.notFoundDesc": { en: "The page you're looking for doesn't exist or has been moved.", fr: "La page recherchée n'existe pas ou a été déplacée." },
  "err.goHome": { en: "Go home", fr: "Aller à l'accueil" },
  "err.didntLoad": { en: "This page didn't load", fr: "Cette page n'a pas pu se charger" },
  "err.somethingWrong": { en: "Something went wrong on our end.", fr: "Un problème est survenu de notre côté." },
  "err.tryAgain": { en: "Try again", fr: "Réessayer" },
};
