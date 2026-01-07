import { motion } from "framer-motion";

const BoardDeveloper = () => {
  return (
    <motion.div
      className="w-full max-w-md"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.4,
        type: "spring",
        stiffness: 100,
      }}
    >
      <div className="relative">
        <motion.div
          className="absolute inset-0 animated-glow rounded-2xl"
          animate={{ rotate: [0, 6, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="relative p-6 rounded-2xl border-[3px] border-orange-300/60 dark:border-orange-800/40 bg-white dark:bg-neutral-900"
          style={{
            boxShadow:
              "0 15px 35px -5px rgba(255, 140, 60, 0.3), 0 10px 20px -5px rgba(255, 120, 50, 0.2)",
          }}
          whileHover={{
            y: -5,
            boxShadow:
              "0 25px 50px -12px rgba(255, 140, 60, 0.85), 0 0 30px rgba(255, 160, 100, 0.5)",
          }}
          transition={{ duration: 0.2 }}
        >
          {/* Window controls */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex space-x-2">
              <motion.div
                className="w-3 h-3 rounded-full bg-red-500"
                whileHover={{ scale: 1.2 }}
              />
              <motion.div
                className="w-3 h-3 rounded-full bg-yellow-500"
                whileHover={{ scale: 1.2 }}
              />
              <motion.div
                className="w-3 h-3 rounded-full bg-green-500"
                whileHover={{ scale: 1.2 }}
              />
            </div>
            <div className="text-xs text-neutral-400 dark:text-neutral-500 font-mono">
              developer.ts
            </div>
          </div>

          {/* Code content */}
          <div className="space-y-2 font-mono text-sm">
            <div className="text-neutral-400 dark:text-neutral-500">
              {"// Software Engineer"}
            </div>
            <div>
              <span className="text-pink-500 dark:text-pink-400">const</span>{" "}
              <span className="text-blue-600 dark:text-blue-400">
                developer
              </span>{" "}
              <span className="text-neutral-500">=</span>{" "}
              <span className="text-orange-500">{"{"}</span>
            </div>

            <motion.div
              className="pl-6"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.3 }}
            >
              <span className="text-purple-600 dark:text-purple-400">name</span>
              <span className="text-neutral-500">:</span>{" "}
              <span className="text-green-600 dark:text-green-400">
                &apos;Nguyen Mai Hoang Huy&apos;
              </span>
              <span className="text-neutral-500">,</span>
            </motion.div>

            <motion.div
              className="pl-6"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.3 }}
            >
              <span className="text-purple-600 dark:text-purple-400">role</span>
              <span className="text-neutral-500">:</span>{" "}
              <span className="text-green-600 dark:text-green-400">
                &apos;Full-Stack Developer&apos;
              </span>
              <span className="text-neutral-500">,</span>
            </motion.div>

            <motion.div
              className="pl-6"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.3 }}
            >
              <span className="text-purple-600 dark:text-purple-400">
                skills
              </span>
              <span className="text-neutral-500">:</span>{" "}
              <span className="text-orange-500">[</span>
            </motion.div>

            <motion.div
              className="pl-10"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.3 }}
            >
              <span className="text-green-600 dark:text-green-400">
                &apos;Next.js&apos;
              </span>
              <span className="text-neutral-500">,</span>{" "}
              <span className="text-green-600 dark:text-green-400">
                &apos;React&apos;
              </span>
              <span className="text-neutral-500">,</span>
            </motion.div>

            <motion.div
              className="pl-10"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.3 }}
            >
              <span className="text-green-600 dark:text-green-400">
                &apos;Spring Boot&apos;
              </span>
              <span className="text-neutral-500">,</span>{" "}
              <span className="text-green-600 dark:text-green-400">
                &apos;Java&apos;
              </span>
              <span className="text-neutral-500">,</span>{" "}
              <span className="text-green-600 dark:text-green-400">
                &apos;ASP.NET&apos;
              </span>
            </motion.div>

            <motion.div
              className="pl-6"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3, duration: 0.3 }}
            >
              <span className="text-orange-500">]</span>
              <span className="text-neutral-500">,</span>
            </motion.div>

            <motion.div
              className="pl-6"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.3 }}
            >
              <span className="text-purple-600 dark:text-purple-400">
                status
              </span>
              <span className="text-neutral-500">:</span>{" "}
              <span className="text-green-600 dark:text-green-400">
                &apos;Available for work&apos;
              </span>
            </motion.div>

            <div>
              <span className="text-orange-500">{"}"}</span>
              <span className="text-neutral-500">;</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BoardDeveloper;
