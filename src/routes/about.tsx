import { Section } from "@/components/Section";
import { useT } from "@/i18n/LanguageProvider";

export default function About() {
  const { t } = useT();

  const pillars = [1, 2, 3].map((n) => ({
    title: t(`about.pillar${n}.t`),
    description: t(`about.pillar${n}.d`),
  }));

  const experiences = [1, 2].map((n) => ({
    company: t(`about.experience${n}.company`),
    role: t(`about.experience${n}.role`),
    period: t(`about.experience${n}.period`),
    location: t(`about.experience${n}.location`),
    description: t(`about.experience${n}.description`),
    technologies: t(`about.experience${n}.technologies`),
  }));

  return (
    <Section eyebrow={t("about.eyebrow")} title={t("about.title")} description={t("about.desc")}>
      <div className="space-y-20">
        {/* Principles */}
        <section aria-labelledby="about-principles-title">
          <div className="mb-8">
            <h2 id="about-principles-title" className="text-2xl font-semibold tracking-tight">
              {t("about.principlesTitle")}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className={`card-surface about-card-enter about-card-${index + 1} p-6`}
              >
                <h3 className="font-medium tracking-tight">{pillar.title}</h3>

                <p className="mt-3 text-sm leading-relaxed text-muted">{pillar.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section aria-labelledby="about-experience-title">
          <div className="mb-8">
            <h2 id="about-experience-title" className="text-2xl font-semibold tracking-tight">
              {t("about.experienceTitle")}
            </h2>
          </div>

          <div className="relative border-l border-border pl-6 md:pl-8">
            {experiences.map((experience, index) => (
              <article
                key={`${experience.company}-${experience.period}`}
                className={`relative pb-12 last:pb-0 about-timeline-enter about-timeline-${index + 1}`}
              >
                {/* Timeline marker */}
                <span
                  className="absolute -left-7.75 top-1 size-2.5 rounded-full border-2 border-background bg-white md:-left-9.25"
                  aria-hidden="true"
                />

                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-lg font-medium tracking-tight">{experience.role}</h3>

                    <p className="mt-1 text-muted">{experience.company}</p>
                  </div>

                  <div className="text-sm text-muted md:text-right">
                    <p>{experience.period}</p>
                    <p>{experience.location}</p>
                  </div>
                </div>

                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">
                  {experience.description}
                </p>

                <p className="mt-4 text-xs uppercase tracking-[0.15em] text-muted">
                  {experience.technologies}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Education */}
        <section aria-labelledby="about-education-title">
          <div className="mb-8">
            <h2 id="about-education-title" className="text-2xl font-semibold tracking-tight">
              {t("about.educationTitle")}
            </h2>
          </div>

          <article className="card-surface p-6 md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-lg font-medium tracking-tight">
                  {t("about.education.degree")}
                </h3>

                <p className="mt-2 text-muted">{t("about.education.school")}</p>
              </div>

              <div className="text-sm text-muted md:text-right">
                <p>{t("about.education.period")}</p>
                <p>{t("about.education.location")}</p>
              </div>
            </div>
          </article>
        </section>
      </div>
    </Section>
  );
}
