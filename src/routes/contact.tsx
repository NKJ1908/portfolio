import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Github, Linkedin, Mail, MessageCircle, Send } from "lucide-react";
import { Section } from "@/components/Section";
import { SITE } from "@/constants/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Alex Mensah" },
      { name: "description", content: "Get in touch about software development engagements, agency work or general inquiries." },
      { property: "og:title", content: "Contact — Alex Mensah" },
      { property: "og:description", content: "Start a conversation." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Section
      eyebrow="Contact"
      title="Let's talk."
      description="Tell me about the problem. Expect a thoughtful reply within two business days."
    >
      <div className="grid md:grid-cols-5 gap-6">
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="md:col-span-3 card-surface p-6 md:p-8 space-y-5"
        >
          <Field label="Name" id="name"><input id="name" required className="input-field" placeholder="Your name" /></Field>
          <Field label="Email" id="email"><input id="email" type="email" required className="input-field" placeholder="you@company.com" /></Field>
          <Field label="Project" id="project"><input id="project" className="input-field" placeholder="Brief subject" /></Field>
          <Field label="Message" id="message">
            <textarea id="message" required rows={5} className="input-field resize-none" placeholder="What are you building?" />
          </Field>
          <button type="submit" className="inline-flex items-center gap-2 bg-white text-[#0A192F] px-5 py-3 rounded-md text-sm font-medium hover:bg-white/90">
            <Send size={16} /> Send message
          </button>
          {sent && <p className="text-sm text-muted">Thanks — I'll be in touch shortly.</p>}
        </form>
        <aside className="md:col-span-2 space-y-3">
          <ContactLink icon={Mail} label="Email" value={SITE.email} href={`mailto:${SITE.email}`} />
          <ContactLink icon={MessageCircle} label="WhatsApp" value={SITE.whatsapp} href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}`} />
          <ContactLink icon={Github} label="GitHub" value="@mensah" href={SITE.github} />
          <ContactLink icon={Linkedin} label="LinkedIn" value="in/mensah" href={SITE.linkedin} />
        </aside>
      </div>
      <style>{`
        .input-field {
          width: 100%; background: transparent; border: 1px solid var(--border);
          border-radius: 0.5rem; padding: 0.65rem 0.85rem; font-size: 0.9rem; color: white;
          outline: none; transition: border-color .15s ease;
        }
        .input-field::placeholder { color: var(--muted); }
        .input-field:focus { border-color: rgba(255,255,255,0.5); }
      `}</style>
    </Section>
  );
}

function Field({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="text-xs uppercase tracking-[0.18em] text-muted">{label}</label>
      <div className="mt-2">{children}</div>
    </div>
  );
}

function ContactLink({
  icon: Icon, label, value, href,
}: { icon: typeof Mail; label: string; value: string; href: string }) {
  return (
    <a href={href} className="card-surface p-5 flex items-center gap-4 hover:border-white/20 transition-colors">
      <div className="size-10 rounded-md border border-border flex items-center justify-center">
        <Icon size={16} />
      </div>
      <div>
        <div className="text-xs uppercase tracking-[0.18em] text-muted">{label}</div>
        <div className="text-sm mt-0.5">{value}</div>
      </div>
    </a>
  );
}
