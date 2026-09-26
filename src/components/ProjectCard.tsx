import { ArrowUpRight, Smartphone } from "lucide-react";
import type { Project } from "@/data/projects";
import { useT } from "@/i18n/LanguageProvider";

export function ProjectCard({ p }: { p: Project }) {
  const { lang } = useT();
  const title = lang === "fr" && p.titleFr ? p.titleFr : p.title;
  const summary = lang === "fr" && p.summaryFr ? p.summaryFr : p.summary;

  return (
    <article className="project-card group flex flex-col justify-between overflow-hidden">
      {/* 70% Visual Dominant Container */}
      <div className="relative aspect-16/10 overflow-hidden border-b border-border bg-surface-raised">
        <img
          src={p.image}
          alt={p.imageAlt}
          className="size-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          loading="lazy"
        />

        {/* Subtle Gradient & Category Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-80"
          aria-hidden="true"
        />

        <div className="absolute top-3.5 left-3.5">
          <span className="rounded-md border border-border/80 bg-background/85 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-foreground backdrop-blur-md">
            {p.category}
          </span>
        </div>
      </div>

      {/* 30% Compact Content */}
      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-lg font-bold tracking-tight text-foreground group-hover:text-foreground">
            {p.demo ? (
              <a
                href={p.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline underline-offset-4 decoration-border-hover inline-flex items-center gap-1.5"
              >
                <span>{title}</span>
                <ArrowUpRight
                  size={15}
                  className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            ) : (
              title
            )}
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed line-clamp-2">
            {summary}
          </p>
        </div>

        {/* Footer: Tech chips + Direct Link */}
        <div className="mt-5 pt-4 border-t border-border/70 flex items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {p.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border bg-surface-raised px-2 py-0.5 text-[11px] font-medium text-muted"
              >
                {tech}
              </span>
            ))}
          </div>

          {p.demo ? (
            <a
              href={p.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visiter ${title}`}
              className="inline-flex items-center gap-1 text-xs font-semibold text-foreground hover:underline underline-offset-4 shrink-0 cursor-pointer"
            >
              <span>{lang === "fr" ? "Voir" : "View"}</span>
              <ArrowUpRight size={13} />
            </a>
          ) : p.category === "Mobile" ? (
            <div className="flex items-center gap-1 text-xs font-medium text-muted shrink-0">
              <Smartphone size={13} />
              <span>Play Store</span>
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}
