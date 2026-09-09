"use client";

import { motion } from "motion/react";

function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git",
    "GitHub",
  ];

  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-gray-500 dark:text-gray-400">
            My expertise
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Skills & Technologies
          </h2>
        </motion.div>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{
                y: -6,
                scale: 1.03,
              }}
              className="rounded-xl border border-gray-200 bg-white px-6 py-3 font-medium shadow-sm transition-colors dark:border-gray-700 dark:bg-gray-900"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
