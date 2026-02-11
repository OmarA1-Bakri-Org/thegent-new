"use client";
import React, { memo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Icon } from "@iconify/react";

const features = [
  { icon: "mdi:robot", text: "AI-Powered" },
  { icon: "mdi:lightning-bolt", text: "Fast Integration" },
  { icon: "mdi:shield-check", text: "Enterprise Ready" },
] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const HeroSection = memo(function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8">
            <Icon icon="mdi:sparkles" className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-400 font-medium">AI-Powered Business Solutions</span>
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Transform Your Business
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              with AI Innovation
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p variants={itemVariants} className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Accelerate your digital transformation with custom AI solutions, intelligent automation, 
            and strategic consulting tailored to your business needs.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center space-x-2"
            >
              <span>Get Started</span>
              <Icon icon="mdi:arrow-right" className="w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Explore Services
            </Link>
          </motion.div>

          {/* Features */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-6 text-gray-400">
            {features.map(({ icon, text }) => (
              <div key={text} className="flex items-center space-x-2">
                <Icon icon={icon} className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-medium">{text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <Icon icon="mdi:chevron-down" className="w-8 h-8 text-gray-400" />
      </motion.div>
    </section>
  );
});

export default HeroSection;
