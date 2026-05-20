import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { Section } from "@/components/Section";
import { PROJECTS } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = PROJECTS.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.project.title ?? "Project"} — Alex Mensah` },
      { name: "description", content: loaderData?.project.summary ?? "Project details." },
      { property: "og:title", content: loaderData?.project.title ?? "Project" },
      { property: "og:description", content: loaderData?.project.summary ?? "" },
      { property: "og:type", content: "article" },
    ],
  }),
  notFoundComponent: () => (
    <Section title="Project not found">
      <Link to="/projects" className="text-sm text-muted hover:text-foreground">← Back to projects</Link>
    </Section>
  ),
  errorComponent: ({ error }) => (
    <Section title="Couldn't load project"><p className="text-muted text-sm">{error.message}</p></Section>
  ),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project: p } = Route.useLoaderData();
  return (
    <Section eyebrow={p.category} title={p.title} description={p.summary}>
      <Link to="/projects" className="inline-flex items-center gap-1 text-sm text-muted hover:text-foreground mb-8">
        <ArrowLeft size={14} /> All projects
      </Link>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 card-surface p-6 md:p-8">
          <h2 className="text-lg font-medium">Overview</h2>
          <p className="mt-3 text-muted leading-relaxed">
            {p.summary} The system was designed around clear boundaries between domain logic, data access and
            presentation, with observability built in from day one.
          </p>
          <h3 className="mt-8 text-lg font-medium">Highlights</h3>
          <ul className="mt-3 space-y-2 text-muted text-sm list-disc list-inside">
            <li>Production-ready architecture with explicit module boundaries.</li>
            <li>Comprehensive test coverage on the critical paths.</li>
            <li>Observability: structured logs, metrics and traces.</li>
            <li>Performance budgets enforced in CI.</li>
          </ul>
        </div>
        <aside className="card-surface p-6 h-fit">
          <h3 className="text-sm uppercase tracking-[0.18em] text-muted">Stack</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {p.stack.map((s: string) => (
              <span key={s} className="text-xs px-2 py-1 border border-border rounded-md">{s}</span>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-2">
            {p.demo && (
              <a href={p.demo} className="inline-flex items-center justify-between border border-border rounded-md px-3 py-2 text-sm hover:bg-background">
                Live demo <ArrowUpRight size={14} />
              </a>
            )}
            {p.github && (
              <a href={p.github} className="inline-flex items-center justify-between border border-border rounded-md px-3 py-2 text-sm hover:bg-background">
                Source <Github size={14} />
              </a>
            )}
          </div>
        </aside>
      </div>
    </Section>
  );
}
