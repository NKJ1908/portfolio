import { useState } from "react";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { PROJECTS, PROJECT_CATEGORIES, type ProjectCategory } from "@/data/projects";
import { useT } from "@/i18n/LanguageProvider";
import type { dict } from "@/i18n/translations";

const CAT_KEY: Record<(typeof PROJECT_CATEGORIES)[number], keyof typeof dict> = {
  All: "projects.cat.all",
  "Web Apps": "projects.cat.WebApps",
  "E-commerce": "projects.cat.Ecom",
  Mobile: "projects.cat.Mobile",
  Websites: "projects.cat.Websites",
};

export default function ProjectsPage() {
  const { t } = useT();
  const [filter, setFilter] = useState<(typeof PROJECT_CATEGORIES)[number]>("All");
  const list =
    filter === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === (filter as ProjectCategory));
  return (
    <Section
      eyebrow={t("projects.eyebrow")}
      title={t("projects.title")}
      description={t("projects.desc")}
    >
      <div className="flex flex-wrap gap-2 mb-8">
        {PROJECT_CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`btn btn-sm ${filter === category ? "btn-primary" : "btn-soft"}`}
          >
            {t(CAT_KEY[category])}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {list.map((project) => (
          <ProjectCard key={project.slug} p={project} />
        ))}
      </div>
    </Section>
  );
}
