"use client";
import React from "react";
import { motion } from "framer-motion";
import experiences from "@/app/data/experiences";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-32 lg:py-40 bg-subtle">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Section label */}
          <p
            className="text-accent font-medium uppercase tracking-[0.05em] mb-6"
            style={{ fontSize: "var(--text-xs)" }}
          >
            Experience
          </p>

          <h2
            className="font-light tracking-[-0.02em] text-primary mb-20"
            style={{ fontSize: "var(--text-3xl)" }}
          >
            Professional journey
          </h2>
        </motion.div>

        <motion.div
          className="space-y-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {experiences.map((exp, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className="grid lg:grid-cols-12 gap-8 py-12 border-t border-edge"
            >
              {/* Left: period + company */}
              <div className="lg:col-span-4">
                <p
                  className="text-muted mb-1"
                  style={{ fontSize: "var(--text-sm)" }}
                >
                  {exp.period}
                </p>
                <p className="text-accent" style={{ fontSize: "var(--text-sm)" }}>
                  {exp.company}
                </p>
              </div>

              {/* Right: details */}
              <div className="lg:col-span-8">
                <h3
                  className="text-primary font-normal mb-4"
                  style={{ fontSize: "var(--text-xl)" }}
                >
                  {exp.title}
                </h3>

                <p
                  className="text-secondary leading-[1.7] mb-6"
                  style={{ fontSize: "var(--text-base)" }}
                >
                  {exp.description}
                </p>

                <ul className="space-y-2">
                  {exp.outcomes.map((outcome, i) => (
                    <li
                      key={i}
                      className="text-secondary flex items-start gap-3"
                      style={{ fontSize: "var(--text-sm)" }}
                    >
                      <span className="mt-1.5 flex-shrink-0 block w-1 h-1 rounded-full bg-accent" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
