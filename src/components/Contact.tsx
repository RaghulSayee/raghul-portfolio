"use client";

import { useState, type FormEvent } from "react";
import {
  CheckCircle2,
  LoaderCircle,
  Mail,
  MapPin,
  Phone,
  Send,
  TriangleAlert,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

type FormStatus =
  | {
      type: "idle";
      message: "";
    }
  | {
      type: "success";
      message: string;
    }
  | {
      type: "error";
      message: string;
    };

const contactDetails = [
  {
    label: "Email",
    value: "raghulchan1311@gmail.com",
    href: "mailto:raghulchan1311@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+1 (617) 238-8732",
    href: "tel:+16172388732",
    icon: Phone,
  },
  {
    label: "Location",
    value: "Boston, Massachusetts",
    href: undefined,
    icon: MapPin,
  },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/RaghulSayee",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href:
      "https://www.linkedin.com/in/raghul-sayee-kuppa-anandhachary-dhinakaran-94a33020a",
    icon: FaLinkedinIn,
  },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setIsSubmitting(true);

    setStatus({
      type: "idle",
      message: "",
    });

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as {
        message?: string;
        error?: string;
      };

      if (!response.ok) {
        throw new Error(
          result.error ?? "Unable to send your message.",
        );
      }

      setStatus({
        type: "success",
        message:
          result.message ??
          "Your message was sent successfully.",
      });

      form.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="theme-border relative border-t px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.3fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-500 dark:text-violet-400">
              Contact
            </p>

            <h2 className="theme-text mt-4 text-3xl font-bold sm:text-4xl">
              Let&apos;s build something meaningful
            </h2>

            <p className="theme-muted mt-5 max-w-xl leading-8">
              I&apos;m open to software engineering, backend,
              full-stack, and AI/ML opportunities. Reach out if
              you&apos;d like to discuss a role, collaboration,
              or project.
            </p>

            <div className="mt-9 space-y-4">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;

                const content = (
                  <div className="theme-surface theme-border flex items-center gap-4 rounded-xl border p-4 transition hover:border-violet-500/50">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-violet-500/10 text-violet-500 dark:text-violet-400">
                      <Icon size={20} />
                    </div>

                    <div>
                      <p className="theme-muted text-sm">
                        {detail.label}
                      </p>

                      <p className="theme-text mt-1 font-medium">
                        {detail.value}
                      </p>
                    </div>
                  </div>
                );

                return detail.href ? (
                  <a
                    key={detail.label}
                    href={detail.href}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={detail.label}>
                    {content}
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="theme-surface-soft theme-border theme-muted flex h-11 w-11 items-center justify-center rounded-lg border transition hover:-translate-y-1 hover:border-violet-500 hover:text-violet-500 dark:hover:text-violet-400"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="theme-surface theme-border rounded-2xl border p-7 sm:p-9"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <FormField
                id="name"
                label="Your Name"
                type="text"
                placeholder="Enter your name"
                autoComplete="name"
              />

              <FormField
                id="email"
                label="Your Email"
                type="email"
                placeholder="Enter your email"
                autoComplete="email"
              />
            </div>

            <div className="mt-6">
              <FormField
                id="subject"
                label="Subject"
                type="text"
                placeholder="What would you like to discuss?"
                autoComplete="off"
              />
            </div>

            <div className="mt-6">
              <label
                htmlFor="message"
                className="theme-text text-sm font-medium"
              >
                Your Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={7}
                required
                maxLength={5000}
                placeholder="Write your message here..."
                className="theme-surface-strong theme-border theme-text mt-2 w-full resize-none rounded-xl border px-4 py-3 outline-none transition placeholder:theme-subtle focus:border-violet-500"
              />
            </div>

            {status.type !== "idle" && (
              <div
                role="status"
                className={`mt-6 flex items-start gap-3 rounded-xl border p-4 ${
                  status.type === "success"
                    ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                    : "border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400"
                }`}
              >
                {status.type === "success" ? (
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0"
                  />
                ) : (
                  <TriangleAlert
                    size={20}
                    className="mt-0.5 shrink-0"
                  />
                )}

                <p className="text-sm leading-6">
                  {status.message}
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-6 py-3.5 font-semibold theme-text transition hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/20 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:w-auto"
            >
              {isSubmitting ? (
                <>
                  Sending
                  <LoaderCircle
                    size={18}
                    className="animate-spin"
                  />
                </>
              ) : (
                <>
                  Send Message
                  <Send size={18} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

type FormFieldProps = {
  id: string;
  label: string;
  type: "text" | "email";
  placeholder: string;
  autoComplete: string;
};

function FormField({
  id,
  label,
  type,
  placeholder,
  autoComplete,
}: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="theme-text text-sm font-medium"
      >
        {label}
      </label>

      <input
        id={id}
        name={id}
        type={type}
        required
        maxLength={200}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="theme-surface-strong theme-border theme-text mt-2 w-full rounded-xl border px-4 py-3 outline-none transition placeholder:theme-subtle focus:border-violet-500"
      />
    </div>
  );
}