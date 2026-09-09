"use client";

import { motion } from "motion/react";

function Projects() {
  const projects = [
    {
      title: "AI Notes Generator",
      description:
        "An AI-powered web application that helps students generate structured and useful study notes.",
      technologies: ["Next.js", "Tailwind CSS", "AI"],
    },
    {
      title: "College Marketplace",
      description:
        "A marketplace platform where college students can buy, sell and discover useful products within their college community.",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Developer Portfolio",
      description:
        "A modern and responsive portfolio website showcasing my skills, projects and development journey.",
      technologies: ["Next.js", "Tailwind CSS", "Motion"],
    },
  ];

  return (
    <section id="projects" className="px-6 py-24">
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
            My work
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Featured Projects
          </h2>
        </motion.div>

        {/* Project Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -8 }}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900"            >
              {/* Project Image Placeholder */}
              <div className="flex h-48 items-center justify-center bg-gray-100 dark:bg-gray-800">
                <span className="text-gray-500 dark:text-gray-400">
                  Project Image
                </span>
              </div>

              {/* Project Content */}
              <div className="p-6">

                <h3 className="text-xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800 dark:text-gray-300"                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-6 flex gap-4">
                  <a
                    href="#"
                    className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition hover:scale-105"
                  >
                    GitHub
                  </a>

                  <a
                    href="#"
                    className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"                  >
                    Live Demo
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;