import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="rounded-2xl border bg-white overflow-hidden flex flex-col
                 dark:bg-[#111] dark:border-white/10"
    >
      <img
        src={project.image}
        alt={project.name}
        className="h-44 w-full object-cover"
        loading="lazy"
      />
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
          {project.name}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 flex-1">
          {project.description}
        </p>

        <Link
          to={`/projects/${project.slug}`}
          className="mt-4 inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm
                     hover:bg-gray-50 dark:border-white/10 dark:hover:bg-white/5 dark:text-white"
        >
          View More / Details
        </Link>
      </div>
    </motion.div>
  );
}