import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Target,
  Briefcase,
  Code,
  Database,
  Globe,
  Cpu,
} from "lucide-react";
import Link from "next/link";

interface EducationItem {
  degree: string;
  startYear: number;
  endYear: number;
  institution: string;
  institutionUrl: string;
}

interface ObjectiveItem {
  title: string;
  description: string;
}

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const educationItems: EducationItem[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    startYear: 2022,
    endYear: 2026,
    institution:
      "International University (IU), Vietnam National University – Ho Chi Minh City",
    institutionUrl: "https://hcmiu.edu.vn/",
  },
];

const objectives: ObjectiveItem[] = [
  {
    title: "Internship Goal",
    description:
      "Seeking a Full Stack Developer internship to apply my skills in real-world projects and gain hands-on experience in professional software development.",
  },
  {
    title: "Career Focus",
    description:
      "Aspiring to become a proficient Full Stack Developer, building end-to-end web applications with modern technologies.",
  },
  {
    title: "Continuous Learning",
    description:
      "Committed to expanding my knowledge in both frontend and backend technologies, best practices, and emerging trends.",
  },
];

const services: ServiceItem[] = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Web Development",
    description:
      "Building responsive, modern web applications using React, Next.js, and other cutting-edge technologies.",
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Frontend Development",
    description:
      "Creating intuitive user interfaces with attention to detail, performance, and accessibility.",
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Backend Development",
    description:
      "Developing robust server-side applications and RESTful APIs with Node.js, Python, or Java.",
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Problem Solving",
    description:
      "Analyzing complex problems and implementing efficient, scalable solutions with clean code.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        {/* Objectives & Services Section - Two Columns */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-4 font-sans">
            Goals & Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            What I&apos;m looking for and what I can offer
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Objectives Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-6 h-6 text-black dark:text-white" />
              <h3 className="text-2xl font-bold text-black dark:text-white">
                Objectives
              </h3>
            </div>
            <div className="space-y-4">
              {objectives.map((item, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <ObjectiveCard {...item} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-6 h-6 text-black dark:text-white" />
              <h3 className="text-2xl font-bold text-black dark:text-white">
                Services & Abilities
              </h3>
            </div>
            <div className="space-y-4">
              {services.map((item, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <ServiceCard {...item} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-4 font-sans">
            Education
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic journey
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {educationItems.map((item, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <EducationCard {...item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;

const ObjectiveCard = ({ title, description }: ObjectiveItem) => {
  return (
    <motion.div
      className="bg-gray-50 dark:bg-neutral-900/20 border border-gray-200 dark:border-gray-800 rounded-lg p-6 h-full transition-all duration-300 hover:shadow-lg"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <h3 className="text-lg font-semibold text-black dark:text-white mb-3">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

const ServiceCard = ({ icon, title, description }: ServiceItem) => {
  return (
    <motion.div
      className="bg-gray-50 dark:bg-neutral-900/20 border border-gray-200 dark:border-gray-800 rounded-lg p-6 transition-all duration-300 hover:shadow-lg"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-black dark:bg-white rounded-lg flex items-center justify-center text-white dark:text-black">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const EducationCard = ({
  startYear,
  endYear,
  degree,
  institution,
  institutionUrl,
}: EducationItem) => {
  return (
    <motion.div
      className="bg-gray-50 dark:bg-neutral-900/20 border border-gray-200 dark:border-gray-800 rounded-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-lg"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
        <div className="flex-1">
          <h3 className="text-xl sm:text-2xl font-semibold text-black dark:text-white mb-2">
            {degree}
          </h3>
        </div>

        <div className="flex items-center space-x-2 w-fit bg-black dark:bg-white text-white dark:text-black px-3 py-1 rounded-full text-sm font-medium">
          <Calendar className="w-fit h-fit" />
          <span>
            {startYear} - {endYear}
          </span>
        </div>
      </div>

      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0 mt-1">
          <div className="w-6 h-6 bg-black dark:bg-white rounded-full flex items-center justify-center">
            <MapPin className="w-3 h-3 text-white dark:text-black" />
          </div>
        </div>
        <div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed hover:underline underline-offset-4 cursor-pointer transition-all duration-300">
            <Link
              href={institutionUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {institution}
            </Link>
          </p>
        </div>
      </div>
    </motion.div>
  );
};
