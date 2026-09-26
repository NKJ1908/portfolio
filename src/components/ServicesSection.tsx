import { Boxes, Layers, Network, Smartphone } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { useT } from "@/i18n/LanguageProvider";

export function ServicesSection() {
  const { lang } = useT();
  const { ref, isVisible } = useReveal<HTMLElement>();

  const services = [
    {
      id: "applications",
      icon: Smartphone,
      title: lang === "fr" ? "APPLICATIONS" : "APPLICATIONS",
      subtitle: lang === "fr" ? "Produits web & mobiles" : "Web & mobile products",
      tags: "React · Flutter · TypeScript",
    },
    {
      id: "digitalization",
      icon: Layers,
      title: lang === "fr" ? "DIGITALISATION" : "DIGITALIZATION",
      subtitle: lang === "fr" ? "Processus métier → logiciels" : "Business processes → software",
      tags: lang === "fr" ? "Outils internes · Tableaux de bord" : "Internal tools · Dashboards",
    },
    {
      id: "integration",
      icon: Network,
      title: lang === "fr" ? "INTÉGRATION" : "INTEGRATION",
      subtitle: lang === "fr" ? "Systèmes qui communiquent" : "Systems that work together",
      tags: lang === "fr" ? "REST APIs · Webhooks · Paiements" : "REST APIs · Webhooks · Payments",
    },
    {
      id: "architecture",
      icon: Boxes,
      title: lang === "fr" ? "ARCHITECTURE" : "ARCHITECTURE",
      subtitle: lang === "fr" ? "Structures évolutives & ERP" : "Scalable application foundations",
      tags: lang === "fr" ? "Odoo ERP · Bases de données" : "Odoo ERP · Relational schemas",
    },
  ];

  return (
    <section
      id="services"
      ref={ref}
      aria-labelledby="services-heading"
      className="py-20 md:py-28 border-t border-border/60"
    >
      <div className="container-x">
        <div className={`reveal max-w-2xl mb-12 ${isVisible ? "is-visible" : ""}`}>
          <div className="text-xs uppercase tracking-[0.22em] font-semibold text-muted mb-3">
            Services
          </div>
          <h2
            id="services-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-[1.2]"
          >
            {lang === "fr" ? "Ce que je conçois et construis." : "What I design and build."}
          </h2>
        </div>

        {/* 4 Minimalist Service Cards */}
        <div
          className={`reveal-stagger grid gap-5 sm:grid-cols-2 lg:grid-cols-4 ${isVisible ? "is-visible" : ""}`}
        >
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                className="card-surface p-6 flex flex-col justify-between transition-all hover:border-border-hover group"
              >
                <div>
                  <div className="flex size-10 items-center justify-center rounded-lg border border-border bg-surface-raised text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon size={18} />
                  </div>

                  <h3 className="mt-5 text-sm font-bold uppercase tracking-wider text-foreground">
                    {svc.title}
                  </h3>

                  <p className="mt-2 text-sm text-foreground/90 font-medium leading-snug">
                    {svc.subtitle}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60 text-xs font-mono text-muted">
                  {svc.tags}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
