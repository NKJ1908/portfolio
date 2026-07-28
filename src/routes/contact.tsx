import { useState } from "react";
import { Download, Linkedin, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { Section } from "@/components/Section";
import { SITE } from "@/constants/site";
import { useT } from "@/i18n/LanguageProvider";

export default function Contact() {
  const { t } = useT();

  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const inputClass =
    "input input-bordered w-full bg-transparent transition-colors focus:border-primary focus:outline-none";

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSending(true);
    setSent(false);

    try {
      const response = await fetch("https://mailer-ww17.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Une erreur est survenue.");
      }

      setSent(true);

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error("Erreur lors de l'envoi :", error);
    } finally {
      setSending(false);
    }
  };

  return (
    <Section
      eyebrow={t("contact.eyebrow")}
      title={t("contact.title")}
      description={t("contact.desc")}
    >
      <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
        {/* Contact form */}
        <div className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="card-surface space-y-6 p-6 md:p-8">
            <FormField
              id="name"
              label={t("contact.name")}
              placeholder={t("contact.namePh")}
              inputClass={inputClass}
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
            />

            <FormField
              id="email"
              label={t("contact.email")}
              placeholder={t("contact.emailPh")}
              inputClass={inputClass}
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />

            <FormField
              id="subject"
              label={t("contact.project")}
              placeholder={t("contact.projectPh")}
              inputClass={inputClass}
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
            />

            <div className="form-control">
              <label htmlFor="message" className="mb-2 block">
                <span className="label-text">{t("contact.message")}</span>
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className={`${inputClass} h-auto resize-none py-3`}
                placeholder={t("contact.messagePh")}
              />
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button type="submit" disabled={sending} className="btn btn-primary w-full sm:w-auto">
                <Send size={16} />

                {sending ? (
                  <span className="loading loading-spinner loading-xs" />
                ) : (
                  t("contact.send")
                )}
              </button>

              {sent && (
                <p role="status" aria-live="polite" className="text-sm text-muted">
                  {t("contact.sent")}
                </p>
              )}
            </div>
          </form>
        </div>

        {/* Contact information */}
        <aside className="space-y-4 lg:col-span-2">
          <ContactLink
            icon={Mail}
            label={t("contact.label.email")}
            value={SITE.email}
            href={`mailto:${SITE.email}`}
          />

          <ContactLink
            icon={MessageCircle}
            label={t("contact.label.whatsapp")}
            value={SITE.whatsapp}
            href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}`}
            external
          />

          <ContactInfo icon={MapPin} label={t("contact.label.location")} value={SITE.location} />

          <ContactLink
            icon={Linkedin}
            label={t("contact.label.linkedin")}
            value={t("contact.linkedinValue")}
            href={SITE.linkedin}
            external
          />

          <a
            href="/Jean-N'TCHOUGAN.pdf"
            download
            className="card-surface group flex items-center gap-4 p-5 transition-transform hover:-translate-y-0.5"
          >
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-base-content/10">
              <Download size={17} />
            </div>

            <div className="flex-1">
              <div className="text-xs text-muted">{t("contact.label.cv")}</div>

              <div className="text-sm font-medium">{t("contact.cvValue")}</div>
            </div>

            <Download size={16} className="opacity-50 transition-opacity group-hover:opacity-100" />
          </a>
        </aside>
      </div>
    </Section>
  );
}

function FormField({
  id,
  label,
  placeholder,
  inputClass,
  type = "text",
  required = false,
  value,
  onChange,
}: {
  id: string;
  label: string;
  placeholder: string;
  inputClass: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="form-control">
      <label htmlFor={id} className="mb-2 block">
        <span className="label-text">{label}</span>
      </label>

      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className={inputClass}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

function ContactLink({
  icon: Icon,
  label,
  value,
  href,
  external = false,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="card-surface group flex items-center gap-4 p-5 transition-transform hover:-translate-y-0.5"
    >
      <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-base-content/10">
        <Icon size={17} />
      </div>

      <div className="min-w-0 flex-1">
        <div className="text-xs text-muted">{label}</div>
        <div className="truncate text-sm font-medium">{value}</div>
      </div>
    </a>
  );
}

function ContactInfo({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
}) {
  return (
    <div className="card-surface flex items-center gap-4 p-5">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-base-content/10">
        <Icon size={17} />
      </div>

      <div>
        <div className="text-xs text-muted">{label}</div>
        <div className="text-sm font-medium">{value}</div>
      </div>
    </div>
  );
}
