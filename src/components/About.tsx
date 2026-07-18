import {
  BookOpen,
  BriefcaseBusiness,
  GraduationCap,
  MapPin,
  Trophy,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const statistics = [
  {
    value: "2+",
    label: "Years Experience",
    icon: BriefcaseBusiness,
  },
  {
    value: "5+",
    label: "Projects Completed",
    icon: GraduationCap,
  },
  {
    value: "1",
    label: "Patent Contribution",
    icon: Trophy,
  },
  {
    value: "1",
    label: "Research Publication",
    icon: BookOpen,
  },
];

const personalDetails = [
  {
    label: "Location",
    value: "Boston, Massachusetts",
    icon: MapPin,
  },
  {
    label: "Availability",
    value: "Open to Software Engineering and AI opportunities",
    icon: BriefcaseBusiness,
  },
  {
    label: "Education",
    value: "MSCS at Northeastern University",
    icon: GraduationCap,
  },
  {
    label: "Interests",
    value: "AI/ML, Backend Systems, Cloud, and Computer Vision",
    icon: Trophy,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="theme-border relative border-t px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div className="theme-surface theme-border rounded-2xl border p-7 sm:p-10">
            <Reveal>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-500 dark:text-violet-400">
                About Me
                </p>

                <h2 className="theme-text mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">
                Building intelligent and scalable solutions
                </h2>
            </Reveal>
            <p className="theme-muted mt-6 max-w-3xl text-base leading-8">
              I&apos;m a Software Engineer and MSCS candidate at Northeastern
              University with experience building generative AI applications,
              agentic workflows, full-stack products, and high-performance
              backend services.
            </p>

            <p className="theme-muted mt-4 max-w-3xl text-base leading-8">
              My work spans locally deployed LLMs, RAG systems, REST APIs,
              computer vision, cloud technologies, and production applications.
              I enjoy solving real-world engineering problems and transforming
              complex ideas into reliable products.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 xl:grid-cols-4">
            {statistics.map((statistic, index) => {
                const Icon = statistic.icon;

                return (
                <Reveal
                    key={statistic.label}
                    delay={index * 0.08}
                >
                    <article className="theme-surface-strong theme-border group rounded-xl border p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-violet-500/50">
                    <Icon
                        size={25}
                        className="mx-auto text-violet-500 transition duration-300 group-hover:scale-110 dark:text-violet-400"
                    />

                    <p className="theme-text mt-3 text-3xl font-bold">
                        {statistic.value}
                    </p>

                    <p className="theme-muted mt-1 text-sm">
                        {statistic.label}
                    </p>
                    </article>
                </Reveal>
                );
            })}
            </div>
          </div>

          <aside className="theme-surface-strong theme-border rounded-2xl border p-7 sm:p-8">
            <h3 className="theme-text text-xl font-semibold">
              Professional Profile
            </h3>

            <div className="mt-7 space-y-6">
              {personalDetails.map((detail) => {
                const Icon = detail.icon;

                return (
                  <div key={detail.label} className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-violet-500/15 text-violet-500 dark:text-violet-400">
                      <Icon size={20} />
                    </div>

                    <div>
                      <p className="theme-muted text-sm font-medium">
                        {detail.label}
                      </p>

                      <p className="theme-text mt-1 leading-6">
                        {detail.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}