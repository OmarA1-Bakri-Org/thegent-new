"use client";
import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const areas = [
  {
    title: "Enterprise Sales & Partnerships",
    description:
      "Building and managing enterprise pipelines from first conversation to multi-stakeholder close. MEDDIC-qualified, Salesforce-disciplined, consistently exceeding targets.",
    icon: "mdi:handshake-outline",
  },
  {
    title: "Payments Infrastructure",
    description:
      "Deep domain expertise in real-time settlement, correspondent banking alternatives, PvP networks, and ISO20022 payment rails.",
    icon: "mdi:earth",
  },
  {
    title: "AI & Automation",
    description:
      "Building AI sales tools, multi-agent systems, and leveraging LLMs to optimise the funnel, improve forecast accuracy, and drive intelligent go-to-market strategies.",
    icon: "mdi:robot-outline",
  },
  {
    title: "C-Suite Engagement",
    description:
      "Engaging executives through business value, ROI storytelling, and regulatory insight. 15+ years of boardroom relationships across global banking and FinTech.",
    icon: "mdi:account-tie-outline",
  },
  {
    title: "Cross-border Payments",
    description:
      "Enabling atomic, borderless, instant money movement. Expertise across liquidity provision, FX, transaction fees, and global onshore liquidity pools.",
    icon: "mdi:swap-horizontal",
  },
  {
    title: "Revenue Growth",
    description:
      "Proven track record: \u00A31.53M in new fees at Marlin Hawk, \u00A31M deal at Convera, 20% above target at Banking Circle. Data-driven, repeatable playbooks that scale.",
    icon: "mdi:trending-up",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="py-32 lg:py-40">
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
            Expertise
          </p>

          <h2
            className="font-light tracking-[-0.02em] text-primary mb-6"
            style={{ fontSize: "var(--text-3xl)" }}
          >
            What I bring
          </h2>

          <p
            className="text-secondary max-w-2xl mb-20 leading-relaxed"
            style={{ fontSize: "var(--text-base)" }}
          >
            Combining deep FinTech domain knowledge with AI fluency to drive
            business outcomes that matter.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-edge"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {areas.map((area, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-base p-8 lg:p-10 group"
            >
              <Icon
                icon={area.icon}
                className="w-6 h-6 text-accent mb-6"
                aria-hidden="true"
              />

              <h3
                className="text-primary font-normal mb-3"
                style={{ fontSize: "var(--text-lg)" }}
              >
                {area.title}
              </h3>

              <p
                className="text-muted leading-relaxed"
                style={{ fontSize: "var(--text-sm)" }}
              >
                {area.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
