"use client";

import { motion } from "motion/react";

function Experience() {
  const journey = [
    {
      icon: "🎓",
      title: "B.Tech in Computer Science & Engineering",
      subtitle: "Computer Science",
      period: "2021-2025",
      description:
        "Built a strong foundation in programming, computer science fundamentals, databases, and software development.",
    },
    {
      icon: "💻",
      title: "Full Stack Development",
      subtitle: "MERN Stack",
      period: "Learning & Building",
      description:
        "Learning and building web applications using React, Node.js, Express.js and MongoDB.",
    },
    {
      icon: "⚛️",
      title: "React & Next.js",
      subtitle: "Frontend Development",
      period: "Currently Learning",
      description:
        "Developing modern, responsive and interactive user interfaces using React, Next.js and Tailwind CSS.",
    },
    {
      icon: "🚀",
      title: "Personal Projects",
      subtitle: "Practical Learning",
      period: "Ongoing",
      description:
        "Applying my knowledge by building real-world projects and continuously improving my development skills.",
    },
  ];

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-gray-500 dark:text-gray-400">
            My journey
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Education & Learning Journey
          </h2>
        </motion.div>

        {/* Journey Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {journey.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-900"
            >
              {/* Icon */}
              <div className="mb-5 text-4xl">{item.icon}</div>

              {/* Period */}
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {item.period}
              </p>

              {/* Title */}
              <h3 className="mt-2 text-xl font-bold">{item.title}</h3>

              {/* Subtitle */}
              <p className="mt-2 font-medium">{item.subtitle}</p>

              {/* Description */}
              <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
