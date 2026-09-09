"use client";

import Image from "next/image";
import { motion } from "motion/react";

function Hero() {
  return (
    <section
      id="home"
  className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20"
    >
      <motion.div
  className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl"
  animate={{
    x: [0, 50, 0],
    y: [0, 30, 0],
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>

<motion.div
  className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl"
  animate={{
    x: [0, -40, 0],
    y: [0, -30, 0],
  }}
  transition={{
    duration: 10,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        {/* Left Content */}
          <motion.div
  initial="hidden"
  animate="visible"
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }}
>

            <motion.p
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }}
    transition={{ duration: 0.6 }}
    className="mb-3 text-sm font-medium uppercase tracking-widest text-gray-500 dark:text-gray-400"
  >
    Hello, I'm Shweta
  </motion.p>

   <motion.h1
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 },
    }}
    transition={{ duration: 0.7 }}
    className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl"
  >
    Full Stack{" "}
    <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
      Developer
    </span>
  </motion.h1>

  <motion.p
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }}
    transition={{ duration: 0.6 }}
    className="mt-6 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-300"
  >
    I build modern, responsive and interactive web applications
    using modern technologies and clean development practices.
  </motion.p>

  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }}
    transition={{ duration: 0.6 }}
    className="mt-8 flex flex-wrap gap-4"
  >

            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-medium text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/20"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-gray-300 px-6 py-3 font-medium transition duration-300 hover:-translate-y-1 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"

              >
              Contact Me
            </a>

    </motion.div>
                          {/* </div> */}
          <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            React • Next.js • Node.js • MongoDB
          </p>


        </motion.div>
        {/* Right Side */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-xl overflow-hidden rounded-3xl shadow-2xl"
          >
            <Image
              src="/hero.png"
              alt="Developer working on a laptop"
              width={700}
              height={500}
              priority
              className="h-auto w-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
