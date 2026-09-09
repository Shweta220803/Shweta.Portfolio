"use client";

import { motion } from "motion/react";

function About() {
  return (
    <section
      id="about"
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-gray-500">
            Get to know me
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            About Me
          </h2>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
<p className="mb-2 text-sm font-medium uppercase tracking-widest text-gray-500 dark:text-gray-400" >
           I'm a passionate developer who enjoys building modern,
            responsive and user-friendly web applications. I love
            learning new technologies and turning ideas into real-world
            projects.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            My current focus is on building applications using React,
            Next.js, Node.js, MongoDB and Tailwind CSS while continuously
            improving my problem-solving and development skills.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default About;