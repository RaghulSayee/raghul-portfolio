import {
  Blocks,
  Bot,
  CloudCog,
  type LucideIcon,
} from "lucide-react";

type FocusArea = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  icon: LucideIcon;
};

const focusAreas: FocusArea[] = [
  {
    number: "01",
    title: "Build",
    subtitle: "Products and Platforms",
    description:
      "Developing complete products across responsive frontend interfaces, backend services, secure APIs, and databases.",
    technologies: [
      "React",
      "Angular",
      "Spring Boot",
      ".NET",
      "REST APIs",
      "SQL Server",
    ],
    icon: Blocks,
  },
  {
    number: "02",
    title: "Automate",
    subtitle: "Intelligent Workflows",
    description:
      "Creating AI agents, RAG pipelines, tool-enabled workflows, and locally deployed LLM systems for enterprise automation.",
    technologies: [
      "Generative AI",
      "RAG",
      "LangChain",
      "LangGraph",
      "Ollama",
      "Unsloth",
    ],
    icon: Bot,
  },
  {
    number: "03",
    title: "Scale",
    subtitle: "Reliable Engineering Systems",
    description:
      "Improving performance, deployment reliability, and application scalability through cloud, CI/CD, distributed systems, and optimization.",
    technologies: [
      "AWS",
      "Docker",
      "Jenkins",
      "CI/CD",
      "Microservices",
      "Linux",
    ],
    icon: CloudCog,
  },
];

export default function EngineeringFocus() {
  return (
    <section className="relative px-6 pb-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-600 dark:text-violet-400">
            Engineering Focus
          </p>

          <h2 className="mt-4 text-3xl font-bold theme-text sm:text-4xl">
            Build. Automate. Scale.
          </h2>

          <p className="mt-4 max-w-2xl leading-7 theme-muted">
            My engineering work combines product development, intelligent
            automation, and scalable systems.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {focusAreas.map((area) => {
            const Icon = area.icon;

            return (
              <article
                key={area.title}
                className="group relative overflow-hidden rounded-2xl theme-surface theme-border border p-7 transition duration-300 hover:-translate-y-2 hover:border-violet-500/50"
              >
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-violet-600/10 blur-3xl transition group-hover:bg-violet-600/20" />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-violet-500/30 bg-violet-500/10 text-violet-400">
                      <Icon size={28} />
                    </div>

                    <span className="text-5xl font-bold theme-text/[0.04]">
                      {area.number}
                    </span>
                  </div>

                  <p className="mt-7 text-sm font-medium uppercase tracking-wider text-violet-400">
                    {area.subtitle}
                  </p>

                  <h3 className="mt-2 text-3xl font-bold theme-text">
                    {area.title}
                  </h3>

                  <p className="mt-4 leading-7 theme-muted">
                    {area.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {area.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border theme-border theme-surface px-3 py-1.5 text-xs font-medium theme-muted"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}