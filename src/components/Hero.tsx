import { Link } from "@tanstack/react-router";
import { ArrowRight, Mail } from "lucide-react";
import portrait from "@/assets/portrait.png";
import { SITE } from "@/constants/site";

export function Hero() {
  return (
    <section className="pt-16 md:pt-24 pb-20 md:pb-28">
      <div className="container-x grid md:grid-cols-12 gap-12 md:gap-16 items-center">
        <div className="md:col-span-7 order-2 md:order-1 fade-in-up">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted mb-6">
            <span className="size-1.5 rounded-full bg-white" />
            Available for engagements
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05]">
            Software developer building <span className="text-muted">calm, precise</span> web systems.
          </h1>
          <p className="mt-6 text-muted text-lg leading-relaxed max-w-xl">
            {SITE.intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 bg-white text-[#0A192F] px-5 py-3 rounded-md text-sm font-medium hover:bg-white/90 transition-colors"
            >
              View Projects <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-border px-5 py-3 rounded-md text-sm font-medium hover:bg-surface transition-colors"
            >
              <Mail size={16} /> Contact Me
            </Link>
          </div>
          <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { k: "6+", v: "Years building" },
              { k: "40+", v: "Shipped projects" },
              { k: "12", v: "Countries served" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="text-2xl font-semibold">{s.k}</dt>
                <dd className="text-xs text-muted mt-1">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="md:col-span-5 order-1 md:order-2 fade-in-up">
          <div className="relative">
            <div className="absolute -inset-3 border border-border rounded-2xl" aria-hidden />
            <img
              src={portrait}
              alt={`${SITE.name}, ${SITE.role}`}
              className="relative w-full h-auto rounded-xl object-cover shadow-2xl shadow-black/40 ring-1 ring-border"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
