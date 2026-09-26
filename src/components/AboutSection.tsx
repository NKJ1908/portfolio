import { useReveal } from "@/hooks/use-reveal";
import { useT } from "@/i18n/LanguageProvider";

export function AboutSection() {
  const { lang } = useT();
  const { ref, isVisible } = useReveal<HTMLElement>();

  const pillars =
    lang === "fr"
      ? [
          {
            title: "Architecture Propre",
            desc: "Systèmes modulaires pensés pour durer.",
          },
          {
            title: "Performance & Fiabilité",
            desc: "Expériences rapides et stables sur tous supports.",
          },
          {
            title: "Pragmatisme Métier",
            desc: "La technologie la plus simple pour le problème réel.",
          },
        ]
      : [
          {
            title: "Clean Architecture",
            desc: "Modular systems engineered to last.",
          },
          {
            title: "Performance & Reliability",
            desc: "Fast, dependable experiences across all platforms.",
          },
          {
            title: "Pragmatic Mindset",
            desc: "The simplest technology that solves the real problem.",
          },
        ];

  return (
    <section
      id="about"
      ref={ref}
      aria-labelledby="about-heading"
      className="py-20 md:py-28 border-t border-border/60"
    >
      <div className="container-x">
        <div className={`reveal max-w-3xl ${isVisible ? "is-visible" : ""}`}>
          <div className="text-xs uppercase tracking-[0.22em] font-semibold text-muted mb-4">
            {lang === "fr" ? "À propos" : "About"}
          </div>

          <h2
            id="about-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-[1.25]"
          >
            {lang === "fr" ? (
              <>
                Je conçois des applications, connecte des systèmes et transforme des besoins réels
                en produits numériques.
              </>
            ) : (
              <>
                I build applications, connect systems, and turn business needs into digital
                products.
              </>
            )}
          </h2>
        </div>

        {/* 3 Pillars as clean minimalist cards */}
        <div
          className={`reveal-stagger mt-12 grid gap-4 sm:grid-cols-3 ${isVisible ? "is-visible" : ""}`}
        >
          {pillars.map((pillar, idx) => (
            <div key={pillar.title} className="card-surface p-6 flex flex-col justify-between">
              <div className="text-xs font-mono font-semibold text-muted">0{idx + 1}</div>
              <div className="mt-4">
                <h3 className="text-base font-semibold text-foreground tracking-tight">
                  {pillar.title}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-muted leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Compact Milestones Bar */}
        <div
          className={`reveal-stagger mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-border/70 ${isVisible ? "is-visible" : ""}`}
        >
          <div>
            <div className="text-xs text-muted">{lang === "fr" ? "Localisation" : "Location"}</div>
            <div className="text-sm font-semibold text-foreground mt-0.5">Lomé, Togo</div>
          </div>

          <div>
            <div className="text-xs text-muted">
              {lang === "fr" ? "Réalisations" : "Production"}
            </div>
            <div className="text-sm font-semibold text-foreground mt-0.5">
              {lang === "fr" ? "4+ Produits déployés" : "4+ Shipped Products"}
            </div>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <div className="text-xs text-muted">{lang === "fr" ? "Orientation" : "Focus"}</div>
            <div className="text-sm font-semibold text-foreground mt-0.5">Web · Mobile · ERP</div>
          </div>
        </div>
      </div>
    </section>
  );
}
