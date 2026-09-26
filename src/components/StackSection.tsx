import { useReveal } from "@/hooks/use-reveal";
import { useT } from "@/i18n/LanguageProvider";

export function StackSection() {
  const { lang } = useT();
  const { ref, isVisible } = useReveal<HTMLElement>();

  const stack = [
    {
      category: "Frontend",
      tools: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    },
    {
      category: "Backend",
      tools: ["Node.js", "Express", "REST APIs", "Security"],
    },
    {
      category: "Mobile",
      tools: ["Flutter", "Dart", "iOS & Android"],
    },
    {
      category: "Data",
      tools: ["PostgreSQL", "Prisma", "Redis", "MongoDB"],
    },
    {
      category: "Tools & Cloud",
      tools: ["Docker", "Git", "Vercel", "Odoo ERP"],
    },
  ];

  return (
    <section
      id="stack"
      ref={ref}
      aria-labelledby="stack-heading"
      className="py-20 md:py-28 border-t border-border/60"
    >
      <div className="container-x">
        <div className={`reveal max-w-2xl mb-12 ${isVisible ? "is-visible" : ""}`}>
          <div className="text-xs uppercase tracking-[0.22em] font-semibold text-muted mb-3">
            Stack
          </div>
          <h2
            id="stack-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-[1.2]"
          >
            {lang === "fr" ? "Outils & Technologies." : "Tools & Technologies."}
          </h2>
        </div>

        {/* Compact Visual Matrix */}
        <div
          className={`reveal-stagger grid gap-4 sm:grid-cols-2 lg:grid-cols-5 ${isVisible ? "is-visible" : ""}`}
        >
          {stack.map((group) => (
            <div key={group.category} className="card-surface p-5 flex flex-col justify-between">
              <div className="text-xs uppercase tracking-wider font-bold text-foreground">
                {group.category}
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {group.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-md border border-border bg-surface-raised px-2 py-1 text-xs text-foreground/90 font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
