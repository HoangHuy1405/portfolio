"use client";
import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import TextGenerateEffect from "./ui/text-generate-effect";

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const translateContent = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, -50]),
    {
      stiffness: 120,
      damping: 24,
      mass: 0.8,
    }
  );

  const opacityContent = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <motion.section
      ref={ref}
      style={{ opacity: opacityContent, y: translateContent }}
      id="about"
      className="mx-auto rounded-lg  flex flex-col gap-5 px-2 py-20 sm:px-10 md:px-20 lg:px-28 "
    >
      <h1 className="text-4xl sm:text-5xl  font-sans font-extrabold text-center ">
        About Me
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-18 py-10">
        <div className="md:block hidden scale-125">
          <DotLottieReact
            src="https://lottie.host/d5a0f83f-c830-462f-95f4-909615d40e2a/7PJLxol6Nz.lottie"
            loop
            autoplay
          />
        </div>

        <span className="font-sans w-full text-neutral-900 dark:text-neutral-100 font-semibold text-lg sm:text-base md:text-lg lg:text-xl leading-relaxed text-justify">
          <TextGenerateEffect text="I am a Senior Computer Science Student at International University (VNU-HCM) with a strong foundation in building stable, well-organized web applications." />
          <br />
          <TextGenerateEffect text="My expertise lies in full-stack development using Spring Boot, ASP.NET, and React/Next.js. I have a solid understanding of MVC patterns, RESTful API standards, and Clean Architecture, always striving to write clean, maintainable code." />
          <br />
          <TextGenerateEffect text="Currently, I am seeking an internship opportunity where I can leverage my skills in Java, TypeScript, and modern frameworks to contribute to real-world software products and continue growing as a developer." />
        </span>
      </div>
    </motion.section>
  );
};

export default About;
