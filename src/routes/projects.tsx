import { createFileRoute, Outlet, useMatchRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { PROJECTS, PROJECT_CATEGORIES } from "@/data/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Alex Mensah" },
      { name: "description", content: "Selected web applications, dashboards, SaaS and APIs shipped to production." },
      { property: "og:title", content: "Projects — Alex Mensah" },
      { property: "og:description", content: "A selection of shipped software." },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const matchRoute = useMatchRoute();
  const isChild = matchRoute({ to: "/projects/$slug" });
  if (isChild) return <Outlet />;

  const [filter, setFilter] = useState<(typeof PROJECT_CATEGORIES)[number]>("All");
  const list = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <Section
      eyebrow="Work"
      title="Projects."
      description="Filter by domain. Each card opens a brief project page."
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
            {c}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {list.map((p) => <ProjectCard key={p.slug} p={p} />)}
      </div>
    </Section>
  );
}
