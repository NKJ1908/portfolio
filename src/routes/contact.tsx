import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Download, Github, Linkedin, Mail, MessageCircle, MapPin, Send } from "lucide-react";
import { Section } from "@/components/Section";
import { SITE } from "@/constants/site";
import { useT } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Jean N'TCHOUGAN" },
      { name: "description", content: "Get in touch about software development engagements, agency work or general inquiries." },
      { property: "og:title", content: "Contact — Jean N'TCHOUGAN" },
      { property: "og:description", content: "Start a conversation." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const { t } = useT();
  const [sent, setSent] = useState(false);
  return (
    <Section
      eyebrow={t("contact.eyebrow")}
      title={t("contact.title")}
      description={t("contact.desc")}
    >
      <div className="grid md:grid-cols-5 gap-6">
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="md:col-span-3 card-surface p-6 md:p-8 space-y-5"
        >
          <Field label={t("contact.name")} id="name">
            <input id="name" required className="input-field" placeholder={t("contact.namePh")} />
          </Field>
          <Field label={t("contact.email")} id="email">
            <input id="email" type="email" required className="input-field" placeholder={t("contact.emailPh")} />
          </Field>
          <Field label={t("contact.project")} id="project">
            <input id="project" className="input-field" placeholder={t("contact.projectPh")} />
          </Field>
          <Field label={t("contact.message")} id="message">
            <textarea id="message" required rows={5} className="input-field resize-none" placeholder={t("contact.messagePh")} />
          </Field>
          <button type="submit" className="inline-flex items-center gap-2 bg-white text-[#0A192F] px-5 py-3 rounded-md text-sm font-medium hover:bg-white/90">
            <Send size={16} /> {t("contact.send")}
          </button>
          {sent && <p className="text-sm text-muted">{t("contact.sent")}</p>}
        </form>
        <aside className="md:col-span-2 space-y-3">
          <ContactLink icon={Mail} label={t("contact.label.email")} value={SITE.email} href={`mailto:${SITE.email}`} />
          <ContactLink icon={MessageCircle} label={t("contact.label.whatsapp")} value={SITE.whatsapp} href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}`} />
          <ContactLink icon={MessageCircle} label={t("contact.label.phoneAlt")} value={SITE.whatsappAlt} href={`tel:${SITE.whatsappAlt.replace(/\s/g, "")}`} />
          <ContactLink icon={MapPin} label={t("contact.label.location")} value={SITE.location} href="#" />
          <ContactLink icon={Linkedin} label={t("contact.label.linkedin")} value={t("contact.linkedinValue")} href={SITE.linkedin} />
          <a href="/cv.pdf" download className="card-surface p-5 flex items-center gap-4 hover:border-white/20 transition-colors">
            <div className="size-10 rounded-md border border-border flex items-center justify-center">
              <Download size={16} />
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-muted">{t("contact.label.cv")}</div>
              <div className="text-sm mt-0.5">{t("contact.cvValue")}</div>
            </div>
          </a>
          <a href={SITE.github} className="hidden"><Github size={14} /></a>
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
