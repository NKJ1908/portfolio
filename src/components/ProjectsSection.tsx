import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { PROJECTS, PROJECT_CATEGORIES, type ProjectCategory } from "@/data/projects";
import { useReveal } from "@/hooks/use-reveal";
import { useT } from "@/i18n/LanguageProvider";

export function ProjectsSection() {
  const { lang } = useT();
  const { ref, isVisible } = useReveal<HTMLElement>();
  const [filter, setFilter] = useState<(typeof PROJECT_CATEGORIES)[number]>("All");

  const filteredList =
    filter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === (filter as ProjectCategory));

  const categoryLabels: Record<(typeof PROJECT_CATEGORIES)[number], string> = {
    All: lang === "fr" ? "Tous" : "All",
    "Web Apps": lang === "fr" ? "Applications" : "Web Apps",
    "E-commerce": "E-commerce",
    Mobile: "Mobile",
    Websites: lang === "fr" ? "Sites vitrine" : "Websites",
  };

  return (
    <section
      id="projects"
      ref={ref}
      aria-labelledby="projects-heading"
      className="py-20 md:py-28 border-t border-border/60"
    >
      <div className="container-x">
        <div className={`reveal max-w-2xl mb-8 ${isVisible ? "is-visible" : ""}`}>
          <div className="text-xs uppercase tracking-[0.22em] font-semibold text-muted mb-3">
            {lang === "fr" ? "Projets" : "Projects"}
          </div>
          <h2
            id="projects-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-[1.2]"
          >
            {lang === "fr" ? "Réalisations sélectionnées." : "Selected projects."}
          </h2>
        </div>

        {/* Category Filters */}
        <div
          role="group"
          aria-label="Filtrer les projets par catégorie"
          className="flex flex-wrap items-center gap-2 mb-10"
        >
          {PROJECT_CATEGORIES.map((cat) => {
            const isSelected = filter === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold tracking-tight transition-all cursor-pointer ${
                  isSelected
                    ? "bg-primary text-primary-foreground shadow-xs"
                    : "border border-border bg-surface text-muted hover:border-border-hover hover:text-foreground"
                }`}
                aria-pressed={isSelected}
              >
                {categoryLabels[cat]}
              </button>
            );
          })}
        </div>

        {/* 70/30 Visual Dominant Projects Grid */}
        <div
          className={`reveal-stagger grid gap-8 md:grid-cols-2 ${isVisible ? "is-visible" : ""}`}
        >
          {filteredList.map((project) => (
            <ProjectCard key={project.slug} p={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
