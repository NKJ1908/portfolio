import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/data/projects";
import { useT } from "@/i18n/LanguageProvider";
import type { dict } from "@/i18n/translations";

const CAT_KEY: Record<Project["category"], keyof typeof dict> = {
  "Web Apps": "projects.cat.WebApps",
  "E-commerce": "projects.cat.Ecom",
  Mobile: "projects.cat.Mobile",
  Websites: "projects.cat.Websites",
};

export function ProjectCard({ p }: { p: Project }) {
  const { t, lang } = useT();
  const title = lang === "fr" && p.titleFr ? p.titleFr : p.title;
  const summary = lang === "fr" && p.summaryFr ? p.summaryFr : p.summary;
  return (
    <article className="card-surface p-6 md:p-8 flex flex-col hover:border-white/20 transition-colors">
      <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-[0.18em] text-muted">{t(CAT_KEY[p.category])}</span>
        <div className="flex gap-2">
          {p.github && (
            <a href={p.github} aria-label="GitHub" className="p-1.5 border border-border rounded-md hover:bg-background">
              <Github size={14} />
            </a>
          )}
          {p.demo && (
            <a href={p.demo} aria-label="Live demo" className="p-1.5 border border-border rounded-md hover:bg-background">
              <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>
      <h3 className="mt-5 text-xl font-semibold">
        <Link to="/projects/$slug" params={{ slug: p.slug }} className="hover:underline underline-offset-4">
          {title}
        </Link>
      </h3>
      <p className="mt-2 text-sm text-muted leading-relaxed flex-1">{summary}</p>
      <div className="mt-5 flex flex-wrap gap-1.5">
        {p.stack.map((s) => (
          <span key={s} className="text-xs px-2 py-1 border border-border rounded-md text-muted">{s}</span>
        ))}
      </div>
    </article>
  );
}
