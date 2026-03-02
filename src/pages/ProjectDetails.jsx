import { Link, useParams } from "react-router-dom";
import { projects } from "../data/portfolioData";
import { motion } from "framer-motion";
import Navbar from "../component/Navbar";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#F6F3EE] text-gray-900 dark:bg-[#0B0B0B] dark:text-white">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <p className="text-gray-700 dark:text-gray-300">Project not found.</p>
          <Link className="underline text-gray-900 dark:text-white" to="/">
            Go back
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F6F3EE] text-gray-900 dark:bg-[#0B0B0B] dark:text-white">
        <Navbar/>
      <div className="mx-auto max-w-4xl px-4 py-8">
        <Link to="/" className="text-sm underline text-gray-900 dark:text-white">
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-6 rounded-2xl border bg-white overflow-hidden
                     dark:bg-[#111] dark:border-white/10"
        >
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-60 md:h-80 object-cover"
          />

          <div className="p-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              {project.name}
            </h1>
            <p className="text-gray-700 dark:text-gray-300 mt-3">
              {project.description}
            </p>

            <div className="mt-5">
              <h2 className="font-semibold text-gray-900 dark:text-white">
                Main Technology Stack
              </h2>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.stack.map((t) => (
                  <span
                    key={t}
                    className="text-xs rounded-full border px-3 py-1 bg-gray-50 text-gray-800
                               dark:bg-white/5 dark:border-white/10 dark:text-gray-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-black text-white px-4 py-2.5 text-sm text-center hover:opacity-90
                           dark:bg-white dark:text-black"
              >
                Live Project Link
              </a>
                
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border px-4 py-2.5 text-sm text-center hover:bg-gray-50
                           dark:border-white/10 dark:hover:bg-white/5 dark:text-white"
              >
                GitHub Repository (Client)
              </a>
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border p-5 dark:border-white/10">
                <h2 className="font-semibold text-gray-900 dark:text-white">
                  Challenges Faced
                </h2>
                <ul className="list-disc pl-5 mt-3 text-gray-700 dark:text-gray-300 space-y-1">
                  {project.challenges.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border p-5 dark:border-white/10">
                <h2 className="font-semibold text-gray-900 dark:text-white">
                  Future Plans / Improvements
                </h2>
                <ul className="list-disc pl-5 mt-3 text-gray-700 dark:text-gray-300 space-y-1">
                  {project.improvements.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}