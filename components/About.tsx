"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import FloatingEmojis from "./FloatingEmojis";

export default function About() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [0.4, 1]);
  const y = useTransform(scrollY, [0, 200], [50, 0]);

  return (
    <section className="relative py-20 -mt-1 overflow-hidden bg-gradient-to-b from-[#151922] via-[#0B0F19] to-[#0B0F19]">
      {/* Dynamic Floating Shapes Background */}
      <FloatingEmojis />

      {/* Floating Circle */}
      <div className="floating-circle" />

      {/* Additional Floating Square */}
      <div className="floating-square" />

      {/* New Floating Gear */}
      <div className="floating-gear" />

      {/* New Floating Circuit Board */}
      <div className="floating-circuit" />

      {/* Custom background elements */}
      <div className="absolute inset-0">
        {/* Code-like pattern background */}
        <div className="absolute inset-0 opacity-[0.03]">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="text-[#4F46E5] font-mono text-sm opacity-50"
              style={{
                position: "absolute",
                top: `${i * 20}%`,
                left: `${(i % 2) * 60}%`,
                transform: "rotate(-15deg)",
                willChange: "transform",
              }}
            >
              {"{...}"}
            </div>
          ))}
        </div>

        {/* Glowing orbs */}
        <div
          className="absolute top-1/4 right-1/4 w-32 h-32 bg-[#4F46E5]/20 rounded-full blur-3xl animate-pulse"
          style={{ willChange: "opacity, transform" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-[#7C3AED]/20 rounded-full blur-3xl animate-pulse delay-1000"
          style={{ willChange: "opacity, transform" }}
        ></div>
      </div>

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
            About Us
          </span>
          <h2 className="text-4xl font-bold mb-4 text-white font-heading">
            Who We{" "}
            <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
              Are
            </span>
          </h2>
          <p className="text-[#94A3B8] text-base max-w-2xl mx-auto">
            Empowering businesses through innovative solutions and expertise
          </p>
        </motion.div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden w-full h-64">
              <div className="absolute inset-0 bg-gradient-to-r from-[#4F46E5]/30 to-[#7C3AED]/20 mix-blend-overlay"></div>
              <img
                src="/assets/images/about/team.jpg"
                alt="Our Team"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] rounded-2xl opacity-50 blur-2xl"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] rounded-full opacity-40 blur-2xl"></div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-[#1E293B]/50 rounded-xl p-6 backdrop-blur-sm border border-[#4F46E5]/10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Our Mission
              </h3>
              <p className="text-[#94A3B8]">
                To provide cutting-edge solutions that drive business growth and
                efficiency through innovative technology and expert services.
              </p>
            </div>

            <div className="bg-[#1E293B]/50 rounded-xl p-6 backdrop-blur-sm border border-[#4F46E5]/10">
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-[#94A3B8]">
                To be the leading force in digital transformation, empowering
                businesses to thrive in the modern economy.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#1E293B]/50 rounded-xl p-4 backdrop-blur-sm border border-[#4F46E5]/10">
                <h4 className="text-[#A5B4FC] font-semibold mb-2">
                  Experience
                </h4>
                <p className="text-3xl font-bold text-white">10+ Years</p>
              </div>
              <div className="bg-[#1E293B]/50 rounded-xl p-4 backdrop-blur-sm border border-[#4F46E5]/10">
                <h4 className="text-[#A5B4FC] font-semibold mb-2">Clients</h4>
                <p className="text-3xl font-bold text-white">500+</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <style jsx>{`
        /* Existing styles ... */

        /* New floating gear element */
        .floating-gear {
          position: absolute;
          top: 15%;
          right: 15%;
          width: 80px;
          height: 80px;
          background: linear-gradient(45deg, #4f46e5, #7c3aed);
          clip-path: polygon(
            50% 0%,
            65% 35%,
            100% 50%,
            65% 65%,
            50% 100%,
            35% 65%,
            0% 50%,
            35% 35%
          );
          opacity: 0.6;
          animation: float 6s ease-in-out infinite;
          will-change: transform;
        }

        /* New floating circuit board element */
        .floating-circuit {
          position: absolute;
          bottom: 20%;
          left: 5%;
          width: 100px;
          height: 60px;
          background: linear-gradient(45deg, #4f46e5, #7c3aed);
          border-radius: 10px;
          opacity: 0.6;
          animation: float 8s ease-in-out infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}
