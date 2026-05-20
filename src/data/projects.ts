export type Project = {
  slug: string;
  title: string;
  summary: string;
  category: "SaaS" | "Web Apps" | "Dashboards" | "APIs";
  stack: string[];
  demo?: string;
  github?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "ledger-saas",
    title: "Ledger — Finance SaaS",
    summary: "Multi-tenant accounting platform with real-time reporting and granular role-based access.",
    category: "SaaS",
    stack: ["React", "TypeScript", "Node", "PostgreSQL"],
    demo: "#", github: "#",
  },
  {
    slug: "atlas-dashboard",
    title: "Atlas Ops Dashboard",
    summary: "Operations dashboard consolidating logistics KPIs across 12 warehouses.",
    category: "Dashboards",
    stack: ["Next.js", "tRPC", "Prisma", "Recharts"],
    demo: "#", github: "#",
  },
  {
    slug: "north-api",
    title: "North Payments API",
    summary: "Idempotent payments API with webhook delivery, retries and signed receipts.",
    category: "APIs",
    stack: ["Go", "Postgres", "Redis", "OpenAPI"],
    github: "#",
  },
  {
    slug: "studio-cms",
    title: "Studio CMS",
    summary: "Headless CMS for editorial teams with content versioning and preview workflows.",
    category: "Web Apps",
    stack: ["React", "Hono", "SQLite", "Cloudflare"],
    demo: "#",
  },
  {
    slug: "pulse-monitor",
    title: "Pulse Uptime Monitor",
    summary: "Distributed probes with anomaly detection and SLO-aware alerting.",
    category: "SaaS",
    stack: ["TypeScript", "Workers", "Clickhouse"],
    demo: "#", github: "#",
  },
  {
    slug: "merchant-portal",
    title: "Merchant Portal",
    summary: "Self-serve portal for B2B merchants: invoicing, disputes, payouts.",
    category: "Web Apps",
    stack: ["React", "GraphQL", "PostgreSQL"],
    demo: "#",
  },
];

export const PROJECT_CATEGORIES = ["All", "SaaS", "Web Apps", "Dashboards", "APIs"] as const;
