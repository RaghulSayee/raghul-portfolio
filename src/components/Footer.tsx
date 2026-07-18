import Image from "next/image";
import { ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

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
  {
    label: "Email",
    href: "mailto:raghulchan1311@gmail.com",
    icon: Mail,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="theme-surface-strong theme-border border-t px-6 py-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr_1fr_auto] lg:items-center">
          {/* Brand */}
          <div>
            <a
              href="/#home"
              className="group inline-flex items-center gap-1"
              aria-label="Go to homepage"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden">
                <Image
                  src="/logo/rs-logo-transparent_v2.png"
                  alt="Raghul Sayee logo"
                  width={80}
                  height={80}
                  unoptimized
                  className="h-16 w-16 max-w-none scale-[1.2] object-contain transition duration-300 group-hover:scale-[1.25]"
                />
              </div>

              <span className="theme-text text-base font-bold tracking-wide">
                Raghul Sayee
              </span>
            </a>

            <p className="theme-muted mt-2 max-w-md text-sm leading-6">
              Software Engineer building scalable backend systems, full-stack
              products, and intelligent AI applications.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              const isExternal = social.href.startsWith("http");

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  aria-label={social.label}
                  className="theme-surface-soft theme-border theme-muted flex h-10 w-10 items-center justify-center rounded-lg border transition hover:-translate-y-1 hover:border-violet-500 hover:text-violet-600 dark:hover:text-violet-400"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>

          {/* Contact */}
          <div>
            <h3 className="theme-text text-sm font-semibold">
              Get in touch
            </h3>

            <a
              href="mailto:raghulchan1311@gmail.com"
              className="mt-2 inline-block break-all text-sm font-medium text-violet-600 transition hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300"
            >
              raghulchan1311@gmail.com
            </a>
          </div>

          {/* Back to top */}
          <a
            href="/#home"
            aria-label="Back to top"
            className="theme-surface-soft theme-border theme-muted flex h-10 w-10 items-center justify-center rounded-full border transition hover:-translate-y-1 hover:border-violet-500 hover:text-violet-600 dark:hover:text-violet-400"
          >
            <ArrowUp size={18} />
          </a>
        </div>

        <div className="theme-border mt-5 border-t pt-4 text-center">
          <p className="theme-subtle text-xs sm:text-sm">
            © {currentYear} Raghul Sayee Kuppa Anandhachary Dhinakaran. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}