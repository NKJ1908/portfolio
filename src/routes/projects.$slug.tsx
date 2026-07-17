import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { Section } from "@/components/Section";
import { PROJECTS, type Project } from "@/data/projects";
import { useT } from "@/i18n/LanguageProvider";
import type { dict } from "@/i18n/translations";

const CAT_KEY: Record<Project["category"], keyof typeof dict> = {
  "Web Apps": "projects.cat.WebApps",
  "E-commerce": "projects.cat.Ecom",
  Mobile: "projects.cat.Mobile",
  Websites: "projects.cat.Websites",
};

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = PROJECTS.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.project.title ?? "Project"} — Jean N'TCHOUGAN` },
      { name: "description", content: loaderData?.project.summary ?? "Project details." },
      { property: "og:title", content: loaderData?.project.title ?? "Project" },
      { property: "og:description", content: loaderData?.project.summary ?? "" },
      { property: "og:type", content: "article" },
    ],
  }),
  notFoundComponent: NotFound,
  errorComponent: ErrorView,
  component: ProjectDetail,
});

function NotFound() {
  const { t } = useT();
  return (
    <Section title={t("pd.notFound")}>
      <Link to="/projects" className="text-sm text-muted hover:text-foreground">{t("pd.backShort")}</Link>
    </Section>
  );
}

function ErrorView({ error }: { error: Error }) {
  const { t } = useT();
  return (
    <Section title={t("pd.loadError")}>
      <p className="text-muted text-sm">{error.message}</p>
    </Section>
  );
}

function ProjectDetail() {
  const { t, lang } = useT();
  const { project } = Route.useLoaderData();
  const p = project as Project;
  const title = lang === "fr" && p.titleFr ? p.titleFr : p.title;
  const summary = lang === "fr" && p.summaryFr ? p.summaryFr : p.summary;
  return (
    <Section eyebrow={t(CAT_KEY[p.category])} title={title} description={summary}>
      <Link to="/projects" className="inline-flex items-center gap-1 text-sm text-muted hover:text-foreground mb-8">
        <ArrowLeft size={14} /> {t("pd.back")}
      </Link>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 card-surface p-6 md:p-8">
          <h2 className="text-lg font-medium">{t("pd.overview")}</h2>
          <p className="mt-3 text-muted leading-relaxed">
            {summary} {t("pd.overviewBody")}
          </p>
          <h3 className="mt-8 text-lg font-medium">{t("pd.highlights")}</h3>
          <ul className="mt-3 space-y-2 text-muted text-sm list-disc list-inside">
            <li>{t("pd.h1")}</li>
            <li>{t("pd.h2")}</li>
            <li>{t("pd.h3")}</li>
            <li>{t("pd.h4")}</li>
          </ul>
        </div>
        <aside className="card-surface p-6 h-fit">
          <h3 className="text-sm uppercase tracking-[0.18em] text-muted">{t("pd.stack")}</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {p.stack.map((s: string) => (
              <span key={s} className="text-xs px-2 py-1 border border-border rounded-md">{s}</span>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-2">
            {p.demo && (
              <a href={p.demo} className="inline-flex items-center justify-between border border-border rounded-md px-3 py-2 text-sm hover:bg-background">
                {t("pd.liveDemo")} <ArrowUpRight size={14} />
              </a>
            )}
            {p.github && (
              <a href={p.github} className="inline-flex items-center justify-between border border-border rounded-md px-3 py-2 text-sm hover:bg-background">
                {t("pd.source")} <Github size={14} />
              </a>
            )}
          </div>
        </aside>
      </div>
    </Section>
  );
}
