import {
  BookOpen,
  CalendarDays,
  GraduationCap,
  MapPin,
} from "lucide-react";

type EducationItem = {
  university: string;
  degree: string;
  location: string;
  graduation: string;
  gpa: string;
  description: string;
  focusAreas: string[];
};

const educationItems: EducationItem[] = [
  {
    university: "Northeastern University",
    degree: "Master of Science in Computer Science",
    location: "Boston, Massachusetts",
    graduation: "May 2027 Expected",
    gpa: "3.5 / 4.0",
    description:
      "Graduate studies focused on software engineering, machine learning, natural language processing, databases, algorithms, and scalable systems.",
    focusAreas: [
      "Machine Learning",
      "Natural Language Processing",
      "Algorithms",
      "Database Management Systems",
      "Programming Design Paradigm",
    ],
  },
  {
    university: "Anna University",
    degree: "Bachelor of Engineering in Computer Science and Engineering",
    location: "Chennai, India",
    graduation: "April 2023",
    gpa: "9.11 / 10",
    description:
      "Built a strong foundation in computer science, programming, data structures, software development, databases, and applied machine learning.",
    focusAreas: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Systems",
      "Computer Networks",
      "Machine Learning",
    ],
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative border-t theme-border px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-600 dark:text-violet-400">
            Education
          </p>

          <h2 className="mt-4 text-3xl font-bold theme-text sm:text-4xl">
            Academic background
          </h2>

          <p className="mt-5 text-base leading-8 theme-muted">
            My academic journey combines advanced computer-science study with a
            strong engineering foundation.
          </p>
        </div>

        <div className="mt-12 grid gap-7 lg:grid-cols-2">
          {educationItems.map((education) => (
            <article
              key={education.university}
              className="group relative overflow-hidden rounded-2xl theme-surface theme-border border p-7 transition duration-300 hover:-translate-y-2 hover:border-violet-500/50 sm:p-8"
            >
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-violet-600/10 blur-3xl transition group-hover:bg-violet-600/20" />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-violet-500/30 bg-violet-500/10 text-violet-400">
                  <GraduationCap size={28} />
                </div>

                <h3 className="mt-6 text-2xl font-semibold theme-text">
                  {education.university}
                </h3>

                <p className="mt-2 text-lg font-medium text-violet-400">
                  {education.degree}
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  <EducationMeta
                    icon={<MapPin size={18} />}
                    label="Location"
                    value={education.location}
                  />

                  <EducationMeta
                    icon={<CalendarDays size={18} />}
                    label="Graduation"
                    value={education.graduation}
                  />

                  <EducationMeta
                    icon={<BookOpen size={18} />}
                    label="GPA"
                    value={education.gpa}
                  />
                </div>

                <p className="mt-7 leading-7 theme-muted">
                  {education.description}
                </p>

                <div className="mt-7">
                  <p className="text-sm font-semibold uppercase tracking-wider theme-muted">
                    Areas of focus
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {education.focusAreas.map((focusArea) => (
                      <span
                        key={focusArea}
                        className="rounded-full border theme-border theme-surface-strong px-3 py-1.5 text-xs font-medium theme-muted"
                      >
                        {focusArea}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

type EducationMetaProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
};

function EducationMeta({
  icon,
  label,
  value,
}: EducationMetaProps) {
  return (
    <div className="rounded-xl border theme-border theme-surface-strong/70 p-4">
      <div className="flex items-center gap-2 text-violet-400">
        {icon}

        <span className="text-xs font-semibold uppercase tracking-wider">
          {label}
        </span>
      </div>

      <p className="mt-3 text-sm leading-6 theme-muted">
        {value}
      </p>
    </div>
  );
}