"use client";

import { useState } from "react";
import { motion } from "motion/react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSending(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="px-6 py-24">
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
            Get in touch
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Contact Me
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-500 dark:text-gray-400">
            Have a project idea or want to connect? Feel free to reach out. I
            would love to hear from you.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-2xl rounded-2xl border border-gray-200 p-6 shadow-sm sm:p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block font-medium"
              >
                Name
              </label>

              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-medium"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block font-medium"
              >
                Message
              </label>

              <textarea
                id="message"
                rows={5}
                placeholder="Write your message..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value,
                  })
                }
                required
                className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
              ></textarea>
            </div>

            {/* Status Message */}
            {status && (
              <p className="text-center text-sm font-medium">
                {status}
              </p>
            )}

            {/* Button */}
            <button
              type="submit"
              disabled={isSending}
              className="w-full rounded-xl bg-black px-6 py-3 font-medium text-white transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>

          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;