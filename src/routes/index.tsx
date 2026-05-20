import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { PERSONAL_SERVICES, AGENCY_SERVICES } from "@/data/services";
import { PROJECTS } from "@/data/projects";
import { SKILL_GROUPS } from "@/data/skills";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alex Mensah — Software Developer & Tech Entrepreneur" },
      { name: "description", content: "Software developer specializing in web applications, APIs and dashboards. Founder of a digital agency." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const featured = PROJECTS.slice(0, 3);
  return (
    <>
      <Hero />

      <Section
        id="about"
        eyebrow="About"
        title="A calm operator with engineering discipline."
        description="I build software the way good systems are built: deliberately, with clean boundaries, observable behavior and a bias toward simplicity. Every project earns its complexity."
      >
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { t: "Clean architecture", d: "Boundaries that survive feature pressure and team growth." },
            { t: "Performance focus", d: "Measured, profiled, and tuned — not assumed." },
            { t: "Problem solving", d: "Understand the constraint before reaching for a tool." },
          ].map((b) => (
            <div key={b.t} className="card-surface p-6">
              <h3 className="font-medium">{b.t}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link to="/about" className="text-sm inline-flex items-center gap-1 text-muted hover:text-foreground">
            Read full background <ArrowRight size={14} />
          </Link>
        </div>
      </Section>

      <Section
        id="services"
        eyebrow="Services"
        title="Engineering, with an agency on the side."
        description="My core work is software development. The agency handles brand and visual identity for teams that need both shipped together."
      >
        <div className="space-y-12">
          <div>
            <div className="flex items-baseline justify-between mb-6">
              <h3 className="text-lg font-medium">Personal — Development</h3>
              <span className="text-xs text-muted uppercase tracking-[0.18em]">Primary</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {PERSONAL_SERVICES.map((s) => <ServiceCard key={s.title} {...s} />)}
            </div>
          </div>
          <div>
            <div className="flex items-baseline justify-between mb-6">
              <h3 className="text-lg font-medium">Agency — Brand & Design</h3>
              <span className="text-xs text-muted uppercase tracking-[0.18em]">Studio</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {AGENCY_SERVICES.map((s) => <ServiceCard key={s.title} {...s} />)}
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="projects"
        eyebrow="Selected work"
        title="Recent projects."
        description="A small selection. Each shipped to production for paying users or teams."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((p) => <ProjectCard key={p.slug} p={p} />)}
        </div>
        <div className="mt-10">
          <Link to="/projects" className="text-sm inline-flex items-center gap-1 text-muted hover:text-foreground">
            See all projects <ArrowRight size={14} />
          </Link>
        </div>
      </Section>

      <Section
        id="skills"
        eyebrow="Stack"
        title="Tools I reach for."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((g) => (
            <div key={g.title} className="card-surface p-6">
              <h3 className="text-sm uppercase tracking-[0.18em] text-muted">{g.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <span key={i} className="text-xs px-2.5 py-1 border border-border rounded-md">{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="cta"
        eyebrow="Next step"
        title="Have a system to build?"
        description="Tell me about the problem. I'll respond with whether — and how — I can help."
      >
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-white text-[#0A192F] px-5 py-3 rounded-md text-sm font-medium hover:bg-white/90"
        >
          Start a conversation <ArrowRight size={16} />
        </Link>
      </Section>
    </>
  );
}
