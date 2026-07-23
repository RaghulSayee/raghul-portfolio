import Image from "next/image";
import {
  ArrowRight,
  Download,
  ExternalLink,
  Mail,
  Sparkles,
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
    position: "hero-tech-python",
    iconClass: "text-yellow-500 dark:text-yellow-400",
  },
  {
    name: "LangChain",
    icon: SiLangchain,
    position: "hero-tech-langchain",
    iconClass: "text-emerald-600 dark:text-emerald-400",
  },
  {
    name: "PyTorch",
    icon: SiPytorch,
    position: "hero-tech-pytorch",
    iconClass: "text-orange-600 dark:text-orange-500",
  },
  {
    name: ".NET 8.0",
    icon: SiDotnet,
    position: "hero-tech-dotnet",
    iconClass: "text-violet-600 dark:text-violet-400",
  },
];

const particlePositions = [
  "left-[8%] top-[18%]",
  "left-[22%] top-[72%]",
  "left-[38%] top-[25%]",
  "left-[54%] top-[82%]",
  "left-[66%] top-[14%]",
  "left-[82%] top-[68%]",
  "left-[92%] top-[32%]",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-ai-background relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32 lg:px-8"
    >
      {/* Technical background grid */}
      <div className="hero-grid pointer-events-none absolute inset-0" />

      {/* Large AI neural silhouette */}
      <div className="hero-neural-shape pointer-events-none absolute right-[-7rem] top-1/2 hidden -translate-y-1/2 lg:block">
        <div className="hero-neural-head" />

        <div className="hero-neural-lines">
          <span className="hero-neural-node hero-node-1" />
          <span className="hero-neural-node hero-node-2" />
          <span className="hero-neural-node hero-node-3" />
          <span className="hero-neural-node hero-node-4" />
          <span className="hero-neural-node hero-node-5" />
          <span className="hero-neural-node hero-node-6" />
        </div>
      </div>

      {/* Background glows */}
      <div className="pointer-events-none absolute left-[8%] top-[24%] h-[420px] w-[420px] rounded-full bg-violet-500/10 blur-[145px] dark:bg-violet-600/15" />

      <div className="pointer-events-none absolute right-[7%] top-[28%] h-[560px] w-[560px] rounded-full bg-blue-500/10 blur-[170px] dark:bg-blue-600/15" />

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0">
        {particlePositions.map((position, index) => (
          <span
            key={position}
            className={`hero-particle absolute ${position}`}
            style={{
              animationDelay: `${index * 0.45}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.12fr_0.88fr] xl:gap-20">
        {/* Left content */}
        <div className="relative max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/40 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-700 shadow-sm backdrop-blur-md dark:border-violet-500/30 dark:text-violet-300">
            <Sparkles size={15} />
            AI • ML • Full-Stack • Problem Solver
          </div>

          <h1 className="theme-text mt-7 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4rem] xl:text-[4.45rem]">
            Hi, I&apos;m{" "}
            <span className="hero-name-gradient whitespace-nowrap">
              Raghul Sayee
            </span>
          </h1>

          <h2 className="theme-text mt-6 text-xl font-semibold sm:text-2xl">
            Software Engineer{" "}
            <span className="text-violet-500 dark:text-violet-400">
              |
            </span>{" "}
            AI/ML Engineer
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
              className="hero-primary-button inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-white"
            >
              View My Work
              <ArrowRight size={18} />
            </a>

            <a
              href="/resume/Raghul_Sayee_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="theme-surface theme-border theme-text inline-flex items-center gap-2 rounded-xl border px-6 py-3 font-semibold backdrop-blur-md transition hover:-translate-y-1 hover:border-violet-500 hover:bg-violet-500/10"
            >
              View Resume
              <ExternalLink size={18} />
            </a>

            <a
              href="/resume/Raghul_Sayee_Resume.pdf"
              download="Raghul_Sayee_Resume.pdf"
              aria-label="Download Raghul Sayee resume"
              className="theme-surface theme-border theme-text flex h-12 w-12 items-center justify-center rounded-xl border backdrop-blur-md transition hover:-translate-y-1 hover:border-violet-500 hover:bg-violet-500/10"
            >
              <Download size={18} />
            </a>
          </div>

          {/* Social links */}
          <div className="mt-8">
            <p className="theme-subtle mb-3 text-xs font-semibold uppercase tracking-[0.18em]">
              Connect with me
            </p>

            <div className="flex items-center gap-3">
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
        </div>

        {/* Profile and AI orbit */}
        <div className="relative mx-auto w-full max-w-[600px]">
          <div className="hero-ai-stage relative mx-auto h-[400px] w-full sm:h-[490px] lg:h-[520px]">
            {/* Orbital rings */}
            <div className="hero-orbit hero-orbit-outer" />
            <div className="hero-orbit hero-orbit-middle" />
            <div className="hero-orbit hero-orbit-inner" />

            {/* Orbit nodes */}
            <span className="hero-orbit-node hero-orbit-node-1" />
            <span className="hero-orbit-node hero-orbit-node-2" />
            <span className="hero-orbit-node hero-orbit-node-3" />
            <span className="hero-orbit-node hero-orbit-node-4" />

            {/* Profile */}
            <div className="hero-profile-shell absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full p-[5px] sm:h-[320px] sm:w-[320px] lg:h-[330px] lg:w-[330px]">
              <div className="hero-profile-inner relative h-full w-full overflow-hidden rounded-full">
                <Image
                  src="/profile/Raghul-portfolio_2.png"
                  alt="Raghul Sayee"
                  fill
                  preload
                  sizes="(max-width: 640px) 256px, 330px"
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
                  className={`hero-tech-badge ${technology.position}`}
                >
                  <Icon
                    size={22}
                    className={technology.iconClass}
                    aria-hidden="true"
                  />

                  <span>{technology.name}</span>
                </div>
              );
            })}
          </div>
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
      className="theme-surface theme-border theme-muted flex h-11 w-11 items-center justify-center rounded-xl border backdrop-blur-md transition hover:-translate-y-1 hover:border-violet-500 hover:text-violet-600 hover:shadow-lg hover:shadow-violet-500/10 dark:hover:text-violet-400"
    >
      {icon}
    </a>
  );
}