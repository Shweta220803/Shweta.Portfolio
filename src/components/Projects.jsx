"use client";

import { motion } from "motion/react";

function Projects() {
  const projects = [
    {
      title: "AI Whiteboard Notes",
      description:
        "A full-stack application that helps users organize whiteboards, create notes, and use AI to improve productivity.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "MongoDB",
        "Gemini AI",
      ],
      image: "/projects/ai-whiteboard.png",
      github: "https://github.com/Shweta220803/thinkboard-ai.git",
      demo: "https://thinkboard-ai.vercel.app/",
    },
    {
      title: "InkForge AI Blog App",
      description:
        "An AI-powered blogging platform for creating and managing blog posts, exploring articles by category, and enjoying a modern writing experience.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Gemini AI",
        "ImageKit",
      ],
      image: "/projects/inkforge-blog.png",
      github:
        "https://github.com/Shweta220803/Blog-App-using-MERN-and-GenAI.git",
      demo: "https://blog-app-using-mern-and-gen-ai-xt57.vercel.app/",
    },
    {
      title: "Developer Portfolio",
      description:
        "A modern, responsive portfolio showcasing my skills, projects, and development journey, with animated sections, dark mode, and an email contact form.",
      technologies: ["Next.js", "Tailwind CSS", "Motion", "Resend"],
      image: "/projects/portfolio.png",
      github: "https://github.com/Shweta220803/Shweta.Portfolio.git",
      demo: "https://shweta-portfolio-two.vercel.app/",
    },
  ];

  const isValidUrl = (url) =>
    url.startsWith("https://") || url.startsWith("http://");

  return (
    <section id="projects" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
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

          <h2 className="text-3xl font-bold sm:text-4xl">Featured Projects</h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600 dark:text-gray-400">
            A selection of projects where I turn ideas into practical and
            engaging web applications.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -8 }}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-xl dark:border-gray-700 dark:bg-gray-900"
            >
              {/* Project Screenshot */}
              <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                    const fallback = event.currentTarget.nextElementSibling;

                    if (fallback) {
                      fallback.style.display = "flex";
                    }
                  }}
                />

                <div className="absolute inset-0 hidden items-center justify-center text-sm text-gray-500 dark:text-gray-400">
                  Add project screenshot
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold">{project.title}</h3>

                <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800 dark:text-gray-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="mt-6 flex flex-wrap gap-3">
                  {isValidUrl(project.github) && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-black"
                    >
                      GitHub ↗
                    </a>
                  )}

                  {isValidUrl(project.demo) && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium transition hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
                    >
                      Live Demo ↗
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
