"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-gray-200/20 bg-white/80 px-6 py-4 backdrop-blur-md dark:bg-black/80">
      <div className="mx-auto max-w-6xl">

        {/* Top Navbar */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a href="#home" className="text-2xl font-bold">
            Shweta
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">

            <ul className="flex gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="transition hover:text-blue-500"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <ThemeToggle />
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-3 md:hidden">

            <ThemeToggle />

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-lg border border-gray-300 px-3 py-2 text-xl dark:border-gray-700"
              aria-label="Toggle menu"
            >
              {menuOpen ? "✕" : "☰"}
            </button>

          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden md:hidden"
            >
              <ul className="flex flex-col gap-5 py-6">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block transition hover:text-blue-500"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </nav>
  );
}

export default Navbar;