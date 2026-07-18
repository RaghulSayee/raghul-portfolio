import Image from "next/image";
import {
  ArrowRight,
  Download,
  ExternalLink,
  Mail,
} from "lucide-react";
import {
  SiDotnet,
  SiLangchain,
  SiPython,
  SiPytorch,
} from "react-icons/si";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const technologyBadges = [
  {
    name: "Python",
    icon: SiPython,
    position: "-right-10 top-10",
    iconClass: "text-yellow-500 dark:text-yellow-400",
  },
  {
    name: "LangChain",
    icon: SiLangchain,
    position: "-right-14 top-28",
    iconClass: "text-emerald-600 dark:text-emerald-400",
  },
  {
    name: "PyTorch",
    icon: SiPytorch,
    position: "-right-10 top-48",
    iconClass: "text-orange-600 dark:text-orange-500",
  },
  {
    name: ".NET 8.0",
    icon: SiDotnet,
    position: "-right-12 top-68",
    iconClass: "text-violet-600 dark:text-violet-400",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="theme-background relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32 lg:px-8"
    >
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/3 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-500/15 blur-[140px] dark:bg-violet-700/20" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left content */}
        <div>
          <div className="inline-flex rounded-full border border-violet-400/40 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-700 dark:border-violet-500/30 dark:text-violet-300">
            AI • ML • Full-Stack • Problem Solver
          </div>

          <h1 className="theme-text mt-6 max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent dark:from-violet-400 dark:to-blue-500">
              Raghul Sayee
            </span>
          </h1>

          <h2 className="theme-text mt-5 text-xl font-semibold sm:text-2xl">
            Software Engineer | AI/ML Engineer
          </h2>

          <p className="theme-muted mt-6 max-w-xl text-base leading-8 sm:text-lg">
            MSCS candidate at Northeastern University with experience building
            generative AI applications, agentic systems, full-stack products,
            and scalable backend services.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 px-6 py-3 font-semibold theme-text transition hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/25"
            >
              View My Work
              <ArrowRight size={18} />
            </a>

            <a
              href="/resume/Raghul_Sayee_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="theme-surface theme-border theme-text inline-flex items-center gap-2 rounded-lg border px-6 py-3 font-semibold transition hover:border-violet-500 hover:bg-violet-500/10"
            >
              View Resume
              <ExternalLink size={18} />
            </a>

            <a
              href="/resume/Raghul_Sayee_Resume.pdf"
              download="Raghul_Sayee_Resume.pdf"
              aria-label="Download Raghul Sayee resume"
              className="theme-surface theme-border theme-text flex h-12 w-12 items-center justify-center rounded-lg border transition hover:border-violet-500 hover:bg-violet-500/10"
            >
              <Download size={18} />
            </a>
          </div>

          {/* Social links */}
          <div className="mt-8 flex items-center gap-3">
            <SocialLink
              href="https://github.com/RaghulSayee"
              label="GitHub"
              icon={<FaGithub size={20} />}
            />

            <SocialLink
              href="https://www.linkedin.com/in/raghul-sayee-kuppa-anandhachary-dhinakaran-94a33020a"
              label="LinkedIn"
              icon={<FaLinkedinIn size={20} />}
            />

            <SocialLink
              href="mailto:raghulchan1311@gmail.com"
              label="Email"
              icon={<Mail size={20} />}
            />
          </div>
        </div>

        {/* Profile image */}
        <div className="relative mx-auto w-full max-w-lg">
          <div className="relative mx-auto flex h-80 w-80 items-center justify-center rounded-full border border-violet-400/50 bg-gradient-to-br from-violet-500/20 to-blue-500/15 p-4 shadow-[0_0_80px_rgba(124,58,237,0.25)] dark:from-violet-600/30 dark:to-blue-600/20 dark:shadow-[0_0_80px_rgba(124,58,237,0.35)] sm:h-96 sm:w-96">
            <div className="absolute inset-4 rounded-full border border-blue-400/30" />

            <div className="absolute inset-10 rounded-full bg-gradient-to-br from-violet-500/30 to-blue-500/20 blur-2xl dark:from-violet-500/40 dark:to-blue-500/30" />

            <div className="theme-surface-strong relative z-10 h-full w-full overflow-hidden rounded-full border-4 border-violet-400/60">
              <Image
                src="/profile/Raghul-portfolio_2.png"
                alt="Raghul Sayee"
                fill
                preload
                sizes="(max-width: 640px) 320px, 384px"
                className="object-cover object-[center_20%]"
              />
            </div>
          </div>

          {/* Technology badges */}
          {technologyBadges.map((technology) => {
            const Icon = technology.icon;

            return (
              <div
                key={technology.name}
                className={`theme-surface-strong theme-text theme-border absolute ${technology.position} hidden items-center gap-3 rounded-xl border px-4 py-3 text-sm font-medium shadow-xl backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-violet-500/50 sm:flex`}
              >
                <Icon
                  size={21}
                  className={technology.iconClass}
                  aria-hidden="true"
                />

                <span>{technology.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

type SocialLinkProps = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

function SocialLink({
  href,
  label,
  icon,
}: SocialLinkProps) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      aria-label={label}
      className="theme-surface theme-border theme-muted flex h-11 w-11 items-center justify-center rounded-lg border transition hover:-translate-y-1 hover:border-violet-500 hover:text-violet-600 dark:hover:text-violet-400"
    >
      {icon}
    </a>
  );
}