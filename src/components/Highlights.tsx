import {
  Award,
  BookOpenCheck,
  ExternalLink,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";

type HighlightItem = {
  category: string;
  title: string;
  subtitle: string;
  description: string;
points: string[]; 
  icon: LucideIcon;
  link?: string;
};

const highlights: HighlightItem[] = [
  {
    category: "Research Publication",
    title: "Traffic Violation Detection",
    subtitle:
      "NCACT’23, IJIRSET, April 2023",
    description:
      "Published research on an automated computer-vision pipeline for traffic-violation detection and vehicle identification.",
    points: [
      "Designed a YOLOv4, CNN, and OCR pipeline.",
      "Supported real-time classification and reporting.",
      "Combined vehicle detection, violation recognition, and number-plate extraction.",
    ],
    icon: BookOpenCheck,
  },
  {
    category: "Patent",
    title: "Agentic Artificial Intelligence Gaming Platform",
    subtitle:
      "Co-Inventor, U.S. Patent Application, 2025",
    description:
      "Contributed to an enterprise agentic-AI platform focused on intelligent workflows and gaming applications.",
    points: [
      "Patent docket: P7969-US-ORG.",
      "Contributed to agentic system design and AI-enabled workflows.",
      "Worked on enterprise-focused AI capabilities.",
    ],
    icon: Lightbulb,
  },
  {
    category: "Achievement",
    title: "Hackathon Winner",
    subtitle:
      "L&W SYSrupt Season 4",
    description:
      "Received a Special Category Award for teamwork and innovative problem-solving.",
    points: [
      "Recognized for technical innovation.",
      "Collaborated in a fast-paced hackathon environment.",
      "Delivered a practical solution under time constraints.",
    ],
    icon: Award,
  },
];

export default function Highlights() {
  return (
    <section
      id="research"
      className="relative border-t theme-border px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-600 dark:text-violet-400">
            Research & Recognition
          </p>

          <h2 className="mt-4 text-3xl font-bold theme-text sm:text-4xl">
            Research, patent, and achievements
          </h2>

          <p className="mt-5 text-base leading-8 theme-muted">
            A selection of my work beyond product development, including
            published research, intellectual property, and technical
            recognition.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-2xl theme-surface theme-border border p-7 transition duration-300 hover:-translate-y-2 hover:border-violet-500/50"
              >
                <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-violet-600/10 blur-3xl transition group-hover:bg-violet-600/20" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-violet-500/30 bg-violet-500/10 text-violet-400">
                      <Icon size={27} />
                    </div>

                    <span className="rounded-full border border-violet-300 bg-violet-50 px-3 py-1.5 text-xs font-semibold text-violet-700 dark:border-violet-500/30 dark:bg-violet-500/10 dark:text-violet-300">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold theme-text">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-violet-400">
                    {item.subtitle}
                  </p>

                  <p className="mt-5 leading-7 theme-muted">
                    {item.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 leading-6 theme-muted"
                      >
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-violet-400 transition hover:text-violet-300"
                    >
                      View details
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}