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
    <article className="project-card card-surface group flex flex-col overflow-hidden">
      <a
        href={p.demo}
        className="relative block aspect-video overflow-hidden border-b border-border bg-background"
        aria-label={title}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={p.image}
          alt={p.imageAlt}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
          loading="lazy"
        />
        <div
          className="absolute inset-0 bg-linear-to-t from-[#0A192F]/45 to-transparent"
          aria-hidden
        />
      </a>
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-[0.18em] text-muted">
            {t(CAT_KEY[p.category])}
          </span>
          <div className="flex gap-2">
            {p.github && (
              <a
                href={p.github}
                aria-label="GitHub"
                className="project-link p-1.5 border border-border rounded-md hover:bg-background"
              >
                <Github size={14} />
              </a>
            )}
            {p.demo && (
              <a
                href={p.demo}
                aria-label="Live demo"
                className="project-link p-1.5 border border-border rounded-md hover:bg-background"
              >
                <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </div>
        <h3 className="mt-5 text-xl font-semibold">
          <a
            href={p.demo}
            className="hover:underline underline-offset-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
          </a>
        </h3>
        <p className="mt-2 text-sm text-muted leading-relaxed flex-1">{summary}</p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {p.stack.map((s) => (
            <span key={s} className="text-xs px-2 py-1 border border-border rounded-md text-muted">
              {s}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
