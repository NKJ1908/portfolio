import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";

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
  return (
    <>
      <Section
        eyebrow="About"
        title="Engineer first. Operator second."
        description="I build production software for teams that value craft. My focus is web applications, APIs and dashboards with clean architecture and honest performance."
      >
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { t: "Developer mindset", d: "I treat code as a long-term liability. The right abstraction beats clever code every time." },
            { t: "Clean architecture", d: "Layered, testable, with boundaries that hold under change. Domain logic stays free of frameworks." },
            { t: "Performance focus", d: "I profile before I optimize, and I optimize the actual bottleneck — not the imagined one." },
            { t: "Problem solving", d: "I work backwards from the constraint and avoid solutions in search of problems." },
            { t: "Professional discipline", d: "Clear writing, reliable timelines, predictable delivery. No theatrics." },
            { t: "Team posture", d: "Calm in incidents, generous in reviews, honest in trade-offs." },
          ].map((b) => (
            <div key={b.t} className="card-surface p-6">
              <h3 className="font-medium">{b.t}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>
      </Section>

    </>
  );
}
