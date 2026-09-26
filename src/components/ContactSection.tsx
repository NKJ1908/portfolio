import { useState } from "react";
import { Download, Linkedin, Mail, MessageCircle, Send } from "lucide-react";
import { SITE } from "@/constants/site";
import { useReveal } from "@/hooks/use-reveal";
import { useT } from "@/i18n/LanguageProvider";

type FieldName = "name" | "email" | "message";
type FieldErrors = Partial<Record<FieldName, string>>;

export function ContactSection() {
  const { lang } = useT();
  const { ref, isVisible } = useReveal<HTMLElement>();

  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const clearFieldError = (field: FieldName) => {
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const validate = () => {
    const nextErrors: FieldErrors = {};

    if (!name.trim()) {
      nextErrors.name = lang === "fr" ? "Ce champ est obligatoire." : "Required field.";
    }
    if (!email.trim()) {
      nextErrors.email = lang === "fr" ? "Ce champ est obligatoire." : "Required field.";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      nextErrors.email = lang === "fr" ? "Email invalide." : "Invalid email.";
    }
    if (!message.trim()) {
      nextErrors.message = lang === "fr" ? "Ce champ est obligatoire." : "Required field.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSent(false);
    setSubmitError("");
    if (!validate()) return;

    setSending(true);

    try {
      const response = await fetch("https://mailer-ww17.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject: "Contact Portfolio",
          message,
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(data?.message || (lang === "fr" ? "Erreur d'envoi." : "Sending error."));
      }

      setSent(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setSubmitError(
        lang === "fr"
          ? "Impossible d'envoyer le message. Réessayez ou utilisez un canal direct."
          : "Could not send message. Please retry or use a direct channel.",
      );
    } finally {
      setSending(false);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted/60 transition-colors focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground";

  return (
    <section
      id="contact"
      ref={ref}
      aria-labelledby="contact-heading"
      className="py-20 md:py-28 border-t border-border/60"
    >
      <div className="container-x">
        <div className={`reveal max-w-2xl mb-12 ${isVisible ? "is-visible" : ""}`}>
          <div className="text-xs uppercase tracking-[0.22em] font-semibold text-muted mb-3">
            Contact
          </div>
          <h2
            id="contact-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-[1.2]"
          >
            {lang === "fr" ? "Construisons quelque chose ensemble." : "Let's build something."}
          </h2>
          <p className="mt-3 text-base text-muted">
            {lang === "fr"
              ? "Vous avez un projet ou une idée ? Parlons-en."
              : "Have a project or idea? Let's talk."}
          </p>
        </div>

        <div
          className={`reveal-stagger grid gap-10 lg:grid-cols-12 ${isVisible ? "is-visible" : ""}`}
        >
          {/* Compact Form */}
          <div className="lg:col-span-7">
            <form noValidate onSubmit={handleSubmit} className="card-surface p-6 sm:p-7 space-y-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-1 block text-xs font-semibold text-foreground"
                >
                  {lang === "fr" ? "Nom" : "Name"}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  placeholder={lang === "fr" ? "Votre nom" : "Your name"}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  onChange={(e) => {
                    setName(e.target.value);
                    clearFieldError("name");
                  }}
                  className={inputClass}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-xs text-red-500 font-medium" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-1 block text-xs font-semibold text-foreground"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={email}
                  placeholder="vous@entreprise.com"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    clearFieldError("email");
                  }}
                  className={inputClass}
                />
                {errors.email && (
                  <p
                    id="email-error"
                    className="mt-1 text-xs text-red-500 font-medium"
                    role="alert"
                  >
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1 block text-xs font-semibold text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={message}
                  placeholder={
                    lang === "fr"
                      ? "En quelques mots, que souhaitez-vous construire ?"
                      : "Briefly, what would you like to build?"
                  }
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    clearFieldError("message");
                  }}
                  className={`${inputClass} resize-none`}
                />
                {errors.message && (
                  <p
                    id="message-error"
                    className="mt-1 text-xs text-red-500 font-medium"
                    role="alert"
                  >
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <button
                  type="submit"
                  disabled={sending}
                  aria-busy={sending}
                  className="cta-button inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-xs hover:opacity-90 disabled:opacity-60 cursor-pointer"
                >
                  <Send size={14} aria-hidden="true" />
                  <span>
                    {sending
                      ? lang === "fr"
                        ? "Envoi..."
                        : "Sending..."
                      : lang === "fr"
                        ? "Envoyer"
                        : "Send"}
                  </span>
                </button>

                {sent && (
                  <p
                    role="status"
                    aria-live="polite"
                    className="text-xs font-medium text-emerald-500"
                  >
                    {lang === "fr"
                      ? "Message envoyé — je vous réponds rapidement."
                      : "Message sent — I'll reply promptly."}
                  </p>
                )}
                {submitError && (
                  <p role="alert" className="text-xs font-medium text-red-500">
                    {submitError}
                  </p>
                )}
              </div>
            </form>
          </div>

          {/* Direct channels & CV */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3">
            <a
              href={`mailto:${SITE.email}`}
              className="card-surface group flex items-center gap-3.5 p-4 transition-transform hover:-translate-y-0.5"
            >
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-raised text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Mail size={16} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[11px] text-muted">Email</div>
                <div className="truncate text-sm font-medium text-foreground">{SITE.email}</div>
              </div>
            </a>

            <a
              href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="card-surface group flex items-center gap-3.5 p-4 transition-transform hover:-translate-y-0.5"
            >
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-raised text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <MessageCircle size={16} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[11px] text-muted">WhatsApp</div>
                <div className="text-sm font-medium text-foreground">{SITE.whatsapp}</div>
              </div>
            </a>

            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="card-surface group flex items-center gap-3.5 p-4 transition-transform hover:-translate-y-0.5"
            >
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-raised text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Linkedin size={16} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[11px] text-muted">LinkedIn</div>
                <div className="text-sm font-medium text-foreground">Jean N'Tchougan</div>
              </div>
            </a>

            <a
              href="/Jean-N'TCHOUGAN.pdf"
              download
              className="card-surface group flex items-center gap-3.5 p-4 transition-transform hover:-translate-y-0.5 border-primary/20 hover:border-primary"
            >
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-primary text-primary-foreground">
                <Download size={16} />
              </div>
              <div className="flex-1">
                <div className="text-[11px] text-muted">Curriculum Vitae</div>
                <div className="text-sm font-medium text-foreground">
                  {lang === "fr" ? "Télécharger le CV (PDF)" : "Download Resume (PDF)"}
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
