import ProjectImage from "@/components/ProjectImage";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { projects, type Project } from "@/data/projects";

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section
      id="projects"
      className="relative border-t theme-border px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-600 dark:text-violet-400">
              Projects
            </p>

            <h2 className="mt-4 text-3xl font-bold theme-text sm:text-4xl">
              Featured work
            </h2>

            <p className="mt-5 text-base leading-8 theme-muted">
              Selected projects covering agentic AI, backend engineering,
              computer vision, multimodal systems, and applied machine
              learning.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl theme-surface theme-border border transition duration-300 hover:-translate-y-2 hover:border-violet-500/50">
      <div className="relative h-64 overflow-hidden">
        <ProjectImage
        src={project.image}
        alt={`${project.title} project preview`}
        sizes="(max-width: 768px) 100vw, 50vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#080d1a] via-[#080d1a]/20 to-transparent" />

        <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border theme-border bg-[#080d1a]/80 px-3 py-1.5 text-xs font-medium text-violet-300 backdrop-blur-md">
          <Sparkles size={14} />
          {project.category}
        </div>

        <span className="absolute right-5 top-5 rounded-full border border-violet-400/30 bg-violet-500/15 px-3 py-1.5 text-xs font-medium text-violet-300 backdrop-blur-md">
          Featured
        </span>
      </div>

      <div className="p-6 sm:p-7">
        <h3 className="text-2xl font-semibold theme-text transition group-hover:text-violet-300">
          {project.title}
        </h3>

        <p className="mt-4 leading-7 theme-muted">{project.summary}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.slice(0, 6).map((technology) => (
            <span
              key={technology}
              className="rounded-full border theme-border theme-surface-strong px-3 py-1.5 text-xs font-medium theme-muted"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:shadow-lg hover:shadow-violet-500/20"
          >
            View Details
            <ArrowUpRight size={17} />
          </Link>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-violet-500/40 bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-violet-400 hover:bg-violet-500"
            >
              <FaGithub size={17} />
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}