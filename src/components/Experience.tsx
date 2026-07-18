import {
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Cpu,
  Database,
  Rocket,
  ServerCog,
  type LucideIcon,
} from "lucide-react";

type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  description: string;
  achievements: string[];
  technologies: string[];
  icon: LucideIcon;
};

const experiences: ExperienceItem[] = [
  {
    company: "Light & Wonder",
    role: "Senior Associate Software Engineer",
    duration: "Aug 2023 – Jul 2025",
    description:
      "Built enterprise AI systems, scalable backend services, full-stack product features, and deployment automation.",
    achievements: [
      "Designed Knowledge Retrieval, Code Assistance, and Log Analysis agents using locally deployed LLMs, RAG, and tool-enabled workflows.",
      "Improved engineering productivity by 40% through enterprise AI-assisted development and automated log diagnostics.",
      "Fine-tuned open-source LLMs using Unsloth and deployed them through Ollama for secure, low-latency local inference.",
      "Built and optimized full-stack product features using Angular, .NET 8, and SQL Server, improving response times by more than 60%.",
      "Designed secure REST APIs with role-based access control.",
      "Engineered a GPU-accelerated facial recognition system using DeepFace, OpenCV, Flask APIs, Angular, and Raspberry Pi.",
      "Automated CI/CD pipelines using Jenkins, reducing release cycles by 40%.",
    ],
    technologies: [
      "Generative AI",
      "RAG",
      "LangChain",
      "Ollama",
      "Unsloth",
      "Angular",
      ".NET 8",
      "SQL Server",
      "Flask",
      "OpenCV",
      "Jenkins",
    ],
    icon: Bot,
  },
  {
    company: "Light & Wonder",
    role: "Full Stack Java Developer Intern",
    duration: "Feb 2023 – Jul 2023",
    description:
      "Developed and optimized a full-stack application for casino-game discovery and navigation.",
    achievements: [
      "Built a Casino Game Guide web application using Angular and Spring Boot.",
      "Developed backend APIs for application data and frontend integration.",
      "Improved API workflows and UI behavior to enhance performance and user experience.",
      "Worked across frontend, backend, and database layers in a production-oriented environment.",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Angular",
      "REST APIs",
      "SQL",
      "TypeScript",
    ],
    icon: Code2,
  },
  {
    company: "MIT Square Services Pvt. Ltd.",
    role: "Data Science Intern",
    duration: "Dec 2021 – Jan 2022",
    description:
      "Developed machine-learning models and data pipelines for student-performance prediction.",
    achievements: [
      "Developed machine-learning models using Python and scikit-learn, achieving 92% prediction accuracy.",
      "Performed data cleaning, preprocessing, and exploratory analysis.",
      "Applied feature engineering and model evaluation techniques.",
      "Built reliable evaluation pipelines to generate predictive insights.",
    ],
    technologies: [
      "Python",
      "scikit-learn",
      "Machine Learning",
      "Data Cleaning",
      "Feature Engineering",
      "Model Evaluation",
    ],
    icon: BrainCircuit,
  },
];

const experienceHighlights = [
  {
    label: "AI Systems",
    value: "Enterprise agents",
    icon: Cpu,
  },
  {
    label: "Backend",
    value: "APIs and services",
    icon: ServerCog,
  },
  {
    label: "Data",
    value: "ML pipelines",
    icon: Database,
  },
  {
    label: "Delivery",
    value: "CI/CD automation",
    icon: Rocket,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative border-t theme-border px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_2fr]">
          <div>
            <div className="lg:sticky lg:top-28">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-600 dark:text-violet-400">
                Experience
              </p>

              <h2 className="mt-4 text-3xl font-bold theme-text sm:text-4xl">
                My professional journey
              </h2>

              <p className="mt-5 leading-8 theme-muted">
                Experience across enterprise AI, backend engineering,
                full-stack product development, computer vision, machine
                learning, and deployment automation.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {experienceHighlights.map((highlight) => {
                  const Icon = highlight.icon;

                  return (
                    <div
                      key={highlight.label}
                      className="rounded-xl theme-surface theme-border border p-4"
                    >
                      <Icon size={20} className="text-violet-400" />

                      <p className="mt-3 text-sm font-medium theme-text">
                        {highlight.label}
                      </p>

                      <p className="mt-1 text-xs leading-5 theme-muted">
                        {highlight.value}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute bottom-0 left-6 top-0 hidden w-px bg-gradient-to-b from-violet-500 via-blue-500/50 to-transparent sm:block" />

            <div className="space-y-8">
              {experiences.map((experience, index) => {
                const Icon = experience.icon;

                return (
                  <article
                    key={`${experience.company}-${experience.role}`}
                    className="relative sm:pl-20"
                  >
                    <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full border border-violet-400/50 bg-[#080d1a] text-violet-400 shadow-[0_0_25px_rgba(139,92,246,0.25)] sm:flex">
                      <Icon size={21} />
                    </div>

                    <div className="group rounded-2xl theme-surface theme-border border p-6 transition duration-300 hover:border-violet-500/50 sm:p-8">
                      <div className="flex flex-col gap-4 border-b theme-border pb-6 md:flex-row md:items-start md:justify-between">
                        <div>
                          <div className="flex items-center gap-3 sm:hidden">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-500/10 text-violet-400">
                              <Icon size={19} />
                            </div>

                            <span className="text-sm theme-muted">
                              Experience {index + 1}
                            </span>
                          </div>

                          <h3 className="mt-4 text-xl font-semibold theme-text sm:mt-0 sm:text-2xl">
                            {experience.role}
                          </h3>

                          <p className="mt-2 font-medium text-violet-400">
                            {experience.company}
                          </p>
                        </div>

                        <span className="w-fit rounded-full border theme-border theme-surface-strong px-4 py-2 text-sm theme-muted">
                          {experience.duration}
                        </span>
                      </div>

                      <p className="mt-6 leading-7 theme-muted">
                        {experience.description}
                      </p>

                      <ul className="mt-6 space-y-4">
                        {experience.achievements.map((achievement) => (
                          <li
                            key={achievement}
                            className="flex gap-3 leading-7 theme-muted"
                          >
                            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />

                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-7 flex flex-wrap gap-2">
                        {experience.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border theme-border theme-surface px-3 py-1.5 text-xs font-medium theme-muted transition hover:border-violet-400/50 hover:text-violet-300"
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
        </div>
      </div>
    </section>
  );
}