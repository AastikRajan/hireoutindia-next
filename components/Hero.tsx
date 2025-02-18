"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-[#0B0F19] via-[#0B0F19] to-[#151922] -mb-1">
      {/* Hero Content */}
      <div className="container relative mx-auto px-6 py-24 flex justify-between items-center">
        {/* Left Side Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#4F46E5]/20 to-[#7C3AED]/20 text-[#A5B4FC] font-semibold tracking-wider text-sm uppercase mb-6"
          >
            Welcome to Hire Out India
          </motion.span>
          <h1 className="text-6xl font-bold mb-6 text-white font-heading leading-tight">
            Transform Your Business
            <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
              {" "}
              With Our Solutions
            </span>
          </h1>
          <p className="text-xl text-[#94A3B8] mb-8 leading-relaxed">
            Empowering businesses through innovative outsourcing solutions. We
            deliver excellence in financial services, technology, and business
            operations.
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#4F46E5]/25 hover:scale-105 flex items-center gap-2 group">
              Get Started
              <span className="transform group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
            <button className="px-8 py-4 rounded-lg bg-[#1E293B] text-white font-medium border border-[#4F46E5]/20 transition-all duration-300 hover:bg-[#1E293B]/70 hover:border-[#4F46E5]/50">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Right Side Image Box */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 2, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative bg-white/10 backdrop-blur-lg p-4 rounded-xl shadow-lg w-[500px] h-[350px] flex justify-center items-center overflow-hidden"
        >
          <Image
            src="/assets/images/hero/main.jpg"
            alt="Hero Image"
            layout="fill"
            className="rounded-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
