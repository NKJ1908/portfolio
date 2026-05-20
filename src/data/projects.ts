export type ProjectCategory = "SaaS" | "Web Apps" | "Dashboards" | "APIs";

export type Project = {
  slug: string;
  title: string;
  titleFr?: string;
  summary: string;
  summaryFr?: string;
  category: ProjectCategory;
  stack: string[];
  demo?: string;
  github?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "ledger-saas",
    title: "Ledger — Finance SaaS",
    titleFr: "Ledger — SaaS financier",
    summary: "Multi-tenant accounting platform with real-time reporting and granular role-based access.",
    summaryFr: "Plateforme comptable multi-tenant avec reporting en temps réel et contrôle d'accès granulaire par rôle.",
    category: "SaaS",
    stack: ["React", "TypeScript", "Node", "PostgreSQL"],
    demo: "#", github: "#",
  },
  {
    slug: "atlas-dashboard",
    title: "Atlas Ops Dashboard",
    titleFr: "Atlas — Tableau de bord opérations",
    summary: "Operations dashboard consolidating logistics KPIs across 12 warehouses.",
    summaryFr: "Tableau de bord opérationnel consolidant les KPI logistiques de 12 entrepôts.",
    category: "Dashboards",
    stack: ["Next.js", "tRPC", "Prisma", "Recharts"],
    demo: "#", github: "#",
  },
  {
    slug: "north-api",
    title: "North Payments API",
    titleFr: "North — API de paiement",
    summary: "Idempotent payments API with webhook delivery, retries and signed receipts.",
    summaryFr: "API de paiement idempotente avec livraison de webhooks, retries et reçus signés.",
    category: "APIs",
    stack: ["Go", "Postgres", "Redis", "OpenAPI"],
    github: "#",
  },
  {
    slug: "studio-cms",
    title: "Studio CMS",
    titleFr: "Studio CMS",
    summary: "Headless CMS for editorial teams with content versioning and preview workflows.",
    summaryFr: "CMS headless pour équipes éditoriales, avec versioning de contenu et workflows de prévisualisation.",
    category: "Web Apps",
    stack: ["React", "Hono", "SQLite", "Cloudflare"],
    demo: "#",
  },
  {
    slug: "pulse-monitor",
    title: "Pulse Uptime Monitor",
    titleFr: "Pulse — Surveillance d'uptime",
    summary: "Distributed probes with anomaly detection and SLO-aware alerting.",
    summaryFr: "Sondes distribuées avec détection d'anomalies et alertes pilotées par SLO.",
    category: "SaaS",
    stack: ["TypeScript", "Workers", "Clickhouse"],
    demo: "#", github: "#",
  },
  {
    slug: "merchant-portal",
    title: "Merchant Portal",
    titleFr: "Portail marchand",
    summary: "Self-serve portal for B2B merchants: invoicing, disputes, payouts.",
    summaryFr: "Portail en libre-service pour marchands B2B : facturation, litiges, paiements.",
    category: "Web Apps",
    stack: ["React", "GraphQL", "PostgreSQL"],
    demo: "#",
  },
];

export const PROJECT_CATEGORIES = ["All", "SaaS", "Web Apps", "Dashboards", "APIs"] as const;
