import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { PERSONAL_SERVICES } from "@/data/services";
import { PROJECTS } from "@/data/projects";
import { SKILL_GROUPS } from "@/data/skills";
import { useT } from "@/i18n/LanguageProvider";

export default function Home() {
  const { t } = useT();
  return (
    <>
      <Hero />
      <Section
        id="about"
        eyebrow={t("home.aboutEyebrow")}
        title={t("home.aboutTitle")}
        description={t("home.aboutDesc")}
      >
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <div key={n} className="card-surface p-6">
              <h3 className="font-medium">{t(`home.pillar${n}.t`)}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{t(`home.pillar${n}.d`)}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link
            to="/about"
            className="text-sm inline-flex items-center gap-1 text-muted hover:text-foreground"
          >
            {t("home.readBackground")} <ArrowRight size={14} />
          </Link>
        </div>
      </Section>
      <Section
        id="services"
        eyebrow={t("home.servicesEyebrow")}
        title={t("home.servicesTitle")}
        description={t("home.servicesDesc")}
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PERSONAL_SERVICES.map((service) => (
            <ServiceCard
              key={service.titleKey}
              icon={service.icon}
              title={t(service.titleKey)}
              desc={t(service.descKey)}
            />
          ))}
        </div>
      </Section>
      <Section
        id="projects"
        eyebrow={t("home.workEyebrow")}
        title={t("home.projectsTitle")}
        description={t("home.projectsDesc")}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.slice(0, 3).map((project) => (
            <ProjectCard key={project.slug} p={project} />
          ))}
        </div>
        <div className="mt-10">
          <Link
            to="/projects"
            className="text-sm inline-flex items-center gap-1 text-muted hover:text-foreground"
          >
            {t("home.seeAll")} <ArrowRight size={14} />
          </Link>
        </div>
      </Section>
      <Section id="skills" eyebrow={t("home.stackEyebrow")} title={t("home.stackTitle")}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group) => (
            <div key={group.title} className="card-surface p-6">
              <h3 className="text-sm uppercase tracking-[0.18em] text-muted">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="badge badge-outline">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section
        id="cta"
        eyebrow={t("home.ctaEyebrow")}
        title={t("home.ctaTitle")}
        description={t("home.ctaDesc")}
      >
        <Link to="/contact" className="btn btn-primary">
          {t("home.ctaButton")} <ArrowRight size={16} />
        </Link>
      </Section>
    </>
  );
}
