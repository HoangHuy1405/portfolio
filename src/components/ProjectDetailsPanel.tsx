import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { Project } from "./Projects";

export default function ProjectDetailsPanel({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-white dark:bg-neutral-900 rounded-2xl p-5 border border-neutral-200 dark:border-neutral-800 shadow-xl glass-card"
    >
      {/* Project Name */}
      <h3 className="text-xl font-bold text-black dark:text-white mb-2 font-sans">
        {project.details.name}
      </h3>

      {/* Description */}
      <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-4">
        {project.details.description}
      </p>

      {/* Bullet Points */}
      <div className="mb-5">
        <h4 className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2">
          Key Features
        </h4>
        <ul className="space-y-1.5">
          {project.details.bullets.map((bullet, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex items-start gap-2 text-neutral-700 dark:text-neutral-300 text-sm"
            >
              <span className="mt-1.5 w-1 h-1 rounded-full bg-orange-500 flex-shrink-0" />
              <span>{bullet}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Tech Stack */}
      <div className="mb-5">
        <h4 className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2">
          Tech Stack
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.details.techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center gap-1.5 px-2 py-1.5 bg-neutral-100 dark:bg-neutral-800 rounded-md"
            >
              <div className="w-4 h-4">{tech.icon}</div>
              <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        {project.liveDemoUrl && (
          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-lg transition-all duration-200 text-center shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40"
          >
            Live Demo
          </a>
        )}
        <a
          href={project.sourceCodeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "px-4 py-2 border-2 border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-600 text-neutral-700 dark:text-neutral-300 text-sm font-semibold rounded-lg transition-all duration-200 text-center",
            project.liveDemoUrl ? "flex-1" : "w-full"
          )}
        >
          View Source
        </a>
      </div>
    </motion.div>
  );
}
