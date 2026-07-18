import type { Metadata } from "next";
import ProjectImage from "@/components/ProjectImage";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Lightbulb,
  Target,
  Trophy,
  Wrench,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import {
  getProjectBySlug,
  projects,
} from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Raghul Sayee",
    };
  }

  return {
    title: `${project.title} | Raghul Sayee`,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="px-6 pb-20 pt-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium theme-muted transition hover:text-violet-600 dark:hover:text-violet-400"
          >
            <ArrowLeft size={17} />
            Back to projects
          </Link>

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-600 dark:text-violet-400">
                {project.category}
              </p>

              <h1 className="mt-5 text-4xl font-bold leading-tight theme-text sm:text-5xl lg:text-6xl">
                {project.title}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 theme-muted">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="theme-surface-strong theme-border theme-muted rounded-full border px-3 py-1.5 text-sm"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap gap-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-500/20"
                  >
                    <FaGithub size={18} />
                    View GitHub
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border theme-border theme-surface px-5 py-3 font-semibold theme-text"
                  >
                    View live project
                    <ArrowUpRight size={18} />
                  </a>
                )}
              </div>
            </div>

            <div className="theme-border relative aspect-[3/2] w-full overflow-hidden rounded-2xl border">
              <ProjectImage
                src={project.image}
                alt={`${project.title} project`}
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                position="center"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t theme-border px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ProjectListSection
            title="Project highlights"
            description="The main capabilities and important parts of the project."
            items={project.highlights}
            icon={Target}
          />

          <ProjectListSection
            title="My responsibilities"
            description="The areas I designed, implemented, integrated, and evaluated."
            items={project.responsibilities}
            icon={Wrench}
          />

          <ProjectListSection
            title="Engineering challenges"
            description="The key technical problems that needed to be addressed."
            items={project.challenges}
            icon={Lightbulb}
          />

          <ProjectListSection
            title="Solutions"
            description="The technical approaches used to solve those challenges."
            items={project.solutions}
            icon={CheckCircle2}
          />

          <ProjectListSection
            title="Results and impact"
            description="The outcomes produced by the completed project."
            items={project.results}
            icon={Trophy}
          />
        </div>
      </section>
    </main>
  );
}

type ProjectListSectionProps = {
  title: string;
  description: string;
  items: string[];
  icon: React.ElementType;
};

function ProjectListSection({
  title,
  description,
  items,
  icon: Icon,
}: ProjectListSectionProps) {
  return (
    <article className="mb-8 grid gap-6 rounded-2xl border theme-border theme-surface p-7 last:mb-0 sm:p-9 lg:grid-cols-[0.8fr_2fr]">
      <div>
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400">
          <Icon size={23} />
        </div>

        <h2 className="mt-5 text-2xl font-semibold theme-text">
          {title}
        </h2>

        <p className="mt-3 leading-7 theme-muted">
          {description}
        </p>
      </div>

      <ul className="space-y-4">
        {items.map((item) => (
          <li
            key={item}
            className="theme-surface-strong theme-border theme-muted flex gap-3 rounded-xl border p-4 leading-7"
          >
            <CheckCircle2
              size={19}
              className="mt-1 shrink-0 text-violet-600 dark:text-violet-400"
            />

            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}