import { ArrowRight, Mail } from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import { ThreeCanvas } from "@/components/ThreeCanvas";
import { SITE } from "@/constants/site";
import { useT } from "@/i18n/LanguageProvider";

export function Hero() {
  const { lang } = useT();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const elem = document.getElementById(targetId);
    if (elem) {
      const headerOffset = 76;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      window.history.pushState(null, "", `#${targetId}`);
    }
  };

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden"
    >
      <div className="container-x grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left: Minimal Text Content */}
        <div className="lg:col-span-6 flex flex-col items-start">
          <p className="text-xs uppercase tracking-[0.22em] font-semibold text-muted">
            {SITE.name}
          </p>

          <p className="mt-2 text-sm font-medium text-muted tracking-tight">
            Application Developer
          </p>

          <h1
            id="hero-title"
            className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.12] text-foreground"
          >
            {lang === "fr" ? (
              <>
                Je conçois et développe des{" "}
                <span className="text-foreground">solutions numériques</span> pour des besoins
                réels.
              </>
            ) : (
              <>
                I design and build <span className="text-foreground">digital solutions</span> for
                real-world problems.
              </>
            )}
          </h1>

          {/* Simple CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              onClick={(e) => handleScrollTo(e, "projects")}
              className="cta-button group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-xs hover:opacity-90 cursor-pointer"
            >
              <span>{lang === "fr" ? "Voir les projets" : "View Projects"}</span>
              <ArrowRight
                size={16}
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>

            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "contact")}
              className="cta-button inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-6 py-3 text-sm font-medium text-foreground hover:bg-surface-raised hover:border-border-hover cursor-pointer"
            >
              <Mail size={15} aria-hidden="true" />
              <span>{lang === "fr" ? "Discuter" : "Let's talk"}</span>
            </a>
          </div>

          {/* Discreet location marker */}
          <div className="mt-12 text-xs text-muted/80 tracking-wide">
            Lomé, Togo · Web, Mobile & ERP
          </div>
        </div>

        {/* Right: Three.js Interactive 3D System + Secondary Portrait Integration */}
        <div className="lg:col-span-6 relative flex items-center justify-center min-h-[360px] sm:min-h-[440px]">
          {/* 3D Canvas */}
          <div className="absolute inset-0 flex items-center justify-center">
            <ThreeCanvas />
          </div>

          {/* Secondary Integrated Portrait Badge */}
          <div className="relative z-10 sm:self-end sm:ml-auto p-2">
            <div className="group flex items-center gap-3 rounded-full border border-border/80 bg-background/80 p-1.5 pr-4 shadow-xl backdrop-blur-md transition-transform hover:scale-102">
              <div className="size-11 overflow-hidden rounded-full border border-border">
                <img
                  src={portrait}
                  alt={SITE.name}
                  className="size-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="text-left">
                <div className="text-xs font-semibold text-foreground">Jean N'Tchougan</div>
                <div className="text-[11px] text-muted">Application Developer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
