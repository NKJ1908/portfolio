import { createFileRoute, Outlet, useMatchRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { PROJECTS, PROJECT_CATEGORIES, type ProjectCategory } from "@/data/projects";
import { useT } from "@/i18n/LanguageProvider";
import type { dict } from "@/i18n/translations";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Jean N'TCHOUGAN" },
      { name: "description", content: "Selected web applications, dashboards, SaaS and APIs shipped to production." },
      { property: "og:title", content: "Projects — Jean N'TCHOUGAN" },
      { property: "og:description", content: "A selection of shipped software." },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

const CAT_KEY: Record<(typeof PROJECT_CATEGORIES)[number], keyof typeof dict> = {
  All: "projects.cat.all",
  "Web Apps": "projects.cat.WebApps",
  "E-commerce": "projects.cat.Ecom",
  Mobile: "projects.cat.Mobile",
  Websites: "projects.cat.Websites",
};

function ProjectsPage() {
  const { t } = useT();
  const matchRoute = useMatchRoute();
  const isChild = matchRoute({ to: "/projects/$slug" });
  const [filter, setFilter] = useState<(typeof PROJECT_CATEGORIES)[number]>("All");
  if (isChild) return <Outlet />;

  const list =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === (filter as ProjectCategory));

  return (
    <Section
      eyebrow={t("projects.eyebrow")}
      title={t("projects.title")}
      description={t("projects.desc")}
    >
      <div className="flex flex-wrap gap-2 mb-8">
        {PROJECT_CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`text-xs px-3 py-1.5 rounded-md border transition-colors ${
              filter === c
                ? "bg-white text-[#0A192F] border-white"
                : "border-border text-muted hover:text-foreground"
            }`}
          >
            {t(CAT_KEY[c])}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {list.map((p) => <ProjectCard key={p.slug} p={p} />)}
      </div>
    </Section>
  );
}
