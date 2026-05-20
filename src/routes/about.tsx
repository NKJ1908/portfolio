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

const TIMELINE = [
  { y: "2026", t: "Founded the agency", d: "Brought brand and engineering under one roof for select clients." },
  { y: "2024", t: "Lead engineer roles", d: "Architected multi-tenant platforms in fintech and logistics." },
  { y: "2022", t: "Senior software developer", d: "Full-stack delivery, design systems, observability." },
  { y: "2020", t: "Started shipping for clients", d: "First production web apps. Learned discipline the hard way." },
];

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

      <Section eyebrow="Path" title="Career timeline.">
        <ol className="relative border-l border-border pl-8 space-y-10">
          {TIMELINE.map((s) => (
            <li key={s.y} className="relative">
              <span className="absolute -left-[37px] top-1.5 size-2.5 rounded-full bg-white" />
              <div className="text-xs text-muted uppercase tracking-[0.18em]">{s.y}</div>
              <h3 className="mt-1 font-medium">{s.t}</h3>
              <p className="mt-1 text-sm text-muted leading-relaxed max-w-2xl">{s.d}</p>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
