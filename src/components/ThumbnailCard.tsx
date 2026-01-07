import { cn } from "@/lib/utils";
import { Project } from "./Projects";
import Image from "next/image";

export default function ThumbnailCard({
  project,
  isActive,
}: {
  project: Project;
  isActive: boolean;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 border-2 transition-all duration-300",
        isActive
          ? "border-orange-500 shadow-lg shadow-orange-500/20"
          : "border-transparent hover:border-neutral-300 dark:hover:border-neutral-700"
      )}
    >
      {/* Thumbnail Image */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.details.name}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Project Number Badge */}
        {/* <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/90 dark:bg-black/80 flex items-center justify-center font-bold text-sm text-black dark:text-white">
          {String(project.id).padStart(2, "0")}
        </div> */}

        {/* Project Name Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white drop-shadow-lg">
            {project.details.name}
          </h3>
        </div>
      </div>
    </div>
  );
}
