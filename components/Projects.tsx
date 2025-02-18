"use client";

import { motion } from "framer-motion";
import FloatingEmojis from "./FloatingEmojis"; // This is our updated floating shapes component

export default function Projects() {
  const projects = [
    {
      title: "Financial Management System",
      category: "FinTech",
      description: "Advanced financial tracking and reporting platform",
      image: "/assets/images/projects/fintech.jpg",
      stats: ["50+ Users", "99.9% Uptime", "24/7 Support"],
      gradient: "from-[#4F46E5] to-[#7C3AED]",
    },
    {
      title: "HR Management Portal",
      category: "Enterprise",
      description: "Comprehensive HR and employee management solution",
      image: "/assets/images/projects/hr-portal.jpg",
      stats: ["100+ Companies", "500K+ Records", "AI-Powered"],
      gradient: "from-[#4F46E5] to-[#7C3AED]",
    },
    {
      title: "Data Analytics Dashboard",
      category: "Analytics",
      description: "Real-time data visualization and analytics platform",
      image: "/assets/images/projects/analytics.jpg",
      stats: ["1M+ Data Points", "Real-time", "Custom Reports"],
      gradient: "from-[#4F46E5] to-[#7C3AED]",
    },
  ];

  return (
    <section className="relative py-20 -mt-1 overflow-hidden bg-gradient-to-b from-[#0B0F19] via-[#0B0F19] to-[#151922]">
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, #4F46E5 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, #7C3AED 0%, transparent 50%)
            `,
          }}
        ></div>
      </div>

      {/* Dynamic Floating Shapes Background */}
      <FloatingEmojis />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container relative mx-auto px-6 max-w-6xl"
      >
        {/* Section Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#4F46E5]/20 to-[#7C3AED]/20 text-[#A5B4FC] font-semibold tracking-wider text-sm uppercase mb-4">
            Our Projects
          </span>
          <h2 className="text-4xl font-bold mb-4 text-white font-heading">
            Featured{" "}
            <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-[#94A3B8] text-base max-w-2xl mx-auto">
            Discover our successful implementations and solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative"
            >
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-2xl opacity-30 blur-xl transition duration-500 group-hover:opacity-50`}
                style={{ willChange: "opacity, transform" }}
              />
              <div className="relative bg-[#1E293B]/50 rounded-xl backdrop-blur-sm border border-[#4F46E5]/10 overflow-hidden">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1E293B]/90 z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-[#4F46E5]/20 to-[#7C3AED]/20 text-[#A5B4FC] text-xs font-semibold">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[#94A3B8] text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Project Stats */}
                  <div className="flex flex-wrap gap-3">
                    {project.stats.map((stat, statIndex) => (
                      <span
                        key={statIndex}
                        className="text-xs text-[#A5B4FC] px-2 py-1 rounded-md bg-[#4F46E5]/10"
                      >
                        {stat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#4F46E5]/80 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
