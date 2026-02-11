"use client";
import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Footer from "../components/footer";
import StickyCTA from "../components/sticky-cta";

export default function AboutPage() {
  const values = [
    {
      icon: "mdi:lightbulb-on",
      title: "Innovation First",
      description: "Constantly seeking new ways to leverage technology for business growth"
    },
    {
      icon: "mdi:handshake",
      title: "Partnership Mindset",
      description: "Building long-term relationships based on mutual success and trust"
    },
    {
      icon: "mdi:target",
      title: "Results Driven",
      description: "Focused on delivering measurable outcomes and exceeding expectations"
    },
    {
      icon: "mdi:school",
      title: "Continuous Learning",
      description: "Staying ahead of industry trends and emerging technologies"
    }
  ];

  const timeline = [
    {
      year: "2024",
      title: "Senior Sales Director",
      company: "AI Financial Solutions",
      description: "Leading global sales strategy for AI-powered financial products"
    },
    {
      year: "2022",
      title: "VP of Partnerships",
      company: "FinTech Innovations",
      description: "Developed strategic partnerships resulting in 200% revenue growth"
    },
    {
      year: "2020",
      title: "Sales Manager",
      company: "Digital Banking Corp",
      description: "Built and led high-performing sales team for digital banking solutions"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Driving growth at the intersection of AI and Financial Services
          </p>

          {/* Values Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Core Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6"
                >
                  <Icon icon={value.icon} className="text-4xl text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Timeline Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Professional Journey</h2>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-24 text-blue-400 font-bold text-lg">
                    {item.year}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 mb-2">{item.company}</p>
                    <p className="text-gray-500">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>

      <StickyCTA />
      <Footer />
    </main>
  );
}
