import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { useT } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Jean N'TCHOUGAN" },
      { name: "description", content: "Developer mindset, clean architecture, performance and the path that got me here." },
      { property: "og:title", content: "About — Jean N'TCHOUGAN" },
      { property: "og:description", content: "Developer mindset and architecture principles." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  const { t } = useT();
  const cards = [
    { t: t("about.card1.t"), d: t("about.card1.d") },
    { t: t("about.card2.t"), d: t("about.card2.d") },
    { t: t("about.card3.t"), d: t("about.card3.d") },
    { t: t("about.card4.t"), d: t("about.card4.d") },
    { t: t("about.card5.t"), d: t("about.card5.d") },
    { t: t("about.card6.t"), d: t("about.card6.d") },
  ];
  return (
    <Section
      eyebrow={t("about.eyebrow")}
      title={t("about.title")}
      description={t("about.desc")}
    >
      <div className="grid md:grid-cols-2 gap-6">
        {cards.map((b) => (
          <div key={b.t} className="card-surface p-6">
            <h3 className="font-medium">{b.t}</h3>
            <p className="mt-2 text-sm text-muted leading-relaxed">{b.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
