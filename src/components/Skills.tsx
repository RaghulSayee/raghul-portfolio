import {
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  Layers3,
  ServerCog,
  type LucideIcon,
} from "lucide-react";

type SkillCategory = {
  title: string;
  description: string;
  icon: LucideIcon;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Languages used across backend, frontend, AI, and data systems.",
    icon: Code2,
    skills: [
      "Python",
      "Java",
      "C#",
      "C++",
      "JavaScript",
      "TypeScript",
      "R",
      "SQL",
    ],
  },
  {
    title: "AI / ML",
    description:
      "Technologies used for intelligent applications, agents, and computer vision.",
    icon: BrainCircuit,
    skills: [
      "Generative AI",
      "RAG",
      "LangChain",
      "LangGraph",
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "OpenCV",
      "YOLO",
      "OCR",
    ],
  },
  {
    title: "Backend & APIs",
    description:
      "Frameworks and patterns for building secure and scalable services.",
    icon: ServerCog,
    skills: [
      "Spring Boot",
      ".NET 8",
      "ASP.NET Core",
      "Flask",
      "REST APIs",
      "Microservices",
      "API Integration",
      "Backend Services",
    ],
  },
  {
    title: "Frontend",
    description:
      "Technologies used to create responsive and interactive applications.",
    icon: Layers3,
    skills: [
      "React",
      "Angular",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    title: "Cloud & DevOps",
    description:
      "Tools used for deployment, automation, version control, and reliability.",
    icon: Cloud,
    skills: [
      "AWS",
      "Docker",
      "Jenkins",
      "Git",
      "Linux",
      "Postman",
      "CI/CD",
      "Vercel",
    ],
  },
  {
    title: "Databases & Data",
    description:
      "Databases, analytics, and large-scale data processing technologies.",
    icon: Database,
    skills: [
      "SQL Server",
      "Apache Spark",
      "Hadoop",
      "MapReduce",
      "Tableau",
      "Vector Databases",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative border-t theme-border px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-600 dark:text-violet-400">
            Skills
          </p>

          <h2 className="mt-4 text-3xl font-bold theme-text sm:text-4xl">
            Technologies I work with
          </h2>

          <p className="mt-5 text-base leading-8 theme-muted">
            My technical background spans AI engineering, backend development,
            full-stack applications, cloud systems, and data technologies.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <article
                key={category.title}
                className="group relative overflow-hidden rounded-2xl theme-surface theme-border border p-7 transition duration-300 hover:-translate-y-2 hover:border-violet-500/50"
              >
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-violet-600/10 blur-3xl transition group-hover:bg-violet-600/20" />

                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-violet-500/30 bg-violet-500/10 text-violet-400">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold theme-text">
                    {category.title}
                  </h3>

                  <p className="mt-3 min-h-14 text-sm leading-6 theme-muted">
                    {category.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border theme-border theme-surface-strong px-3 py-1.5 text-sm theme-muted transition hover:border-violet-400/50 hover:text-violet-300"
                      >
                        {skill}
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