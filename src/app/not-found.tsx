import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
          Error 404
        </p>

        <h1 className="mt-5 text-5xl font-bold text-white">
          Project not found
        </h1>

        <p className="mt-5 leading-8 text-slate-400">
          The project you are trying to open does not exist or may have been
          moved.
        </p>

        <Link
          href="/#projects"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 px-6 py-3 font-semibold text-white"
        >
          <ArrowLeft size={18} />
          Return to projects
        </Link>
      </div>
    </main>
  );
}