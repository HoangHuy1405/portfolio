"use client";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  ReactIcon,
  NextJsIcon,
  TypeScriptIcon,
  TailwindIcon,
  MySQLIcon,
  SpringBootIcon,
  MaterialUIIcon,
  ASPNetIcon,
  MSSQLIcon,
  PostgresIcon,
  JavaIcon,
  SpringSecurityIcon,
} from "./ui/icons";
import ThumbnailCard from "./ThumbnailCard";
import ProjectDetailsPanel from "./ProjectDetailsPanel";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
export interface TechStackItem {
  name: string;
  icon: React.ReactNode;
}

export interface ProjectDetails {
  name: string;
  description: string;
  bullets: string[];
  techStack: TechStackItem[];
}

export interface Project {
  id: number;
  thumbnail: string;
  sourceCodeUrl: string;
  liveDemoUrl?: string;
  details: ProjectDetails;
}

const projects: Project[] = [
  {
    id: 1,
    thumbnail: "/img/coinsantra.png",
    sourceCodeUrl: "https://github.com/anhkhoa13-dev/Trade_Web_App",
    liveDemoUrl: "https://coinsantra.vercel.app/",
    details: {
      name: "CoinSantra",
      description:
        "A full-stack cryptocurrency trading platform incorporating AI-powered trading bots, real-time market data visualization, and automated trade execution.",
      bullets: [
        "Interactive AI trading bots with real-time analytics (PnL, ROI, Drawdown)",
        "Live market data visualization using TradingView charts and WebSocket",
        "Secure wallet management and payment processing via VNPay gateway",
        "Scalable serverless architecture using Azure Functions for data ingestion",
      ],
      techStack: [
        { name: "Next.js 15", icon: <NextJsIcon /> },
        { name: "TypeScript", icon: <TypeScriptIcon /> },
        { name: "Spring Boot", icon: <SpringSecurityIcon /> },
        { name: "Java 21", icon: <JavaIcon /> },
        { name: "Tailwind CSS", icon: <TailwindIcon /> },
        // { name: "Azure", icon: <AzureIcon /> },
      ],
    },
  },
  {
    id: 2,
    thumbnail: "/img/OLMS.png",
    sourceCodeUrl: "https://github.com/anhkhoa13/OLMS",
    liveDemoUrl: "",
    details: {
      name: "OLMS (Online Learning Management System)",
      description:
        "Full-stack LMS built with Clean Architecture and DDD principles for managing courses, quizzes, and assignments.",
      bullets: [
        "Clean Architecture with DDD for scalability and maintainability",
        "Course management, quizzes, assignments, and discussion forums",
        "JWT authentication with role-based access control (RBAC)",
      ],
      techStack: [
        { name: "React 19", icon: <ReactIcon /> },
        { name: ".NET 8", icon: <ASPNetIcon /> },
        { name: "SQL Server", icon: <MSSQLIcon /> },
        { name: "Tailwind CSS", icon: <TailwindIcon /> },
      ],
    },
  },
  {
    id: 3,
    thumbnail: "/img/KeyForge.png",
    sourceCodeUrl: "https://github.com/HoangHuy1405/KeyForge",
    liveDemoUrl: "",
    details: {
      name: "KeyForge",
      description:
        "B2C e-commerce marketplace for mechanical keyboard enthusiasts with seller dashboards and secure checkout.",
      bullets: [
        "Role-based access control (User, Seller, Admin)",
        "Seller dashboard for inventory and order management",
        "Product catalog with filtering and Cloudinary integration",
      ],
      techStack: [
        { name: "React", icon: <ReactIcon /> },
        { name: "TypeScript", icon: <TypeScriptIcon /> },
        { name: "Spring Boot", icon: <SpringBootIcon /> },
        { name: "PostgreSQL", icon: <PostgresIcon /> },
        { name: "Tailwind CSS", icon: <TailwindIcon /> },
        { name: "Material UI", icon: <MaterialUIIcon /> },
      ],
    },
  },
];

export function Projects() {
  const [activeProjectId, setActiveProjectId] = useState<number>(
    projects[0]?.id ?? 1
  );
  const sectionRef = useRef<HTMLElement>(null);
  const thumbnailsContainerRef = useRef<HTMLDivElement>(null);
  const detailsPanelRef = useRef<HTMLDivElement>(null);
  const thumbnailRefs = useRef<(HTMLDivElement | null)[]>([]);

  const activeProject =
    projects.find((p) => p.id === activeProjectId) ?? projects[0];

  // GSAP ScrollTrigger setup
  useGSAP(
    () => {
      // Only run on desktop (lg breakpoint = 1024px)
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        if (!thumbnailsContainerRef.current || !detailsPanelRef.current) return;

        // Pin the details panel - unpin when bottom of details would go below bottom of thumbnails
        const pinTrigger = ScrollTrigger.create({
          trigger: thumbnailsContainerRef.current,
          start: "top 20%",
          endTrigger: thumbnailsContainerRef.current,
          end: () => {
            const detailsHeight = detailsPanelRef.current?.offsetHeight || 0;
            // End when: thumbnails bottom = details bottom
            // This means: unpin when scrolled (thumbnailsHeight - detailsHeight) from start
            return `bottom bottom-=${detailsHeight}`;
          },
          pin: detailsPanelRef.current,
          pinSpacing: false,
          invalidateOnRefresh: true,
        });

        // Create scroll triggers for each thumbnail
        const thumbnailTriggers = thumbnailRefs.current.map(
          (thumbnail, index) => {
            if (!thumbnail) return null;

            return ScrollTrigger.create({
              trigger: thumbnail,
              start: "top 60%",
              end: "bottom 40%",
              onEnter: () => setActiveProjectId(projects[index].id),
              onEnterBack: () => setActiveProjectId(projects[index].id),
            });
          }
        );

        return () => {
          pinTrigger.kill();
          thumbnailTriggers.forEach((t) => t?.kill());
        };
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-4 font-sans">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-md max-w-2xl mx-auto">
            A selection of projects that showcase my skills in full-stack
            development, system design, and problem-solving.
          </p>
        </motion.div>

        {/* Desktop: Side by side layout */}
        <div className="hidden lg:grid lg:grid-cols-[1.4fr_1fr] lg:gap-12 relative">
          {/* Left: Scrollable Thumbnails */}
          <div ref={thumbnailsContainerRef} className="space-y-32">
            {projects.map((project, index) => (
              <div
                key={project.id}
                ref={(el) => {
                  thumbnailRefs.current[index] = el;
                }}
                className={cn(
                  "relative transition-all duration-300",
                  activeProjectId === project.id
                    ? "scale-100 opacity-100"
                    : "scale-95 opacity-50"
                )}
              >
                <ThumbnailCard
                  project={project}
                  isActive={activeProjectId === project.id}
                />
              </div>
            ))}
          </div>

          {/* Right: Pinned Details Panel */}
          <div ref={detailsPanelRef} className="h-fit">
            <AnimatePresence mode="wait">
              <ProjectDetailsPanel
                key={activeProject.id}
                project={activeProject}
              />
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile: Stacked layout */}
        <div className="lg:hidden space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <ThumbnailCard project={project} isActive={true} />
              <ProjectDetailsPanel project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
