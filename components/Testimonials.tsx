"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import FloatingEmojis from "./FloatingEmojis";

export default function Testimonials() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [0.4, 1]);
  const y = useTransform(scrollY, [0, 200], [50, 0]);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      icon: "👩‍💼",
      content:
        "Working with Hire Out India has been transformative for our business. Their expertise in financial services and technology solutions has helped us scale efficiently.",
      rating: 5,
      gradient: "from-[#4F46E5] to-[#7C3AED]",
    },
    {
      name: "Michael Chen",
      role: "CTO, DataFlow",
      icon: "👨‍💻",
      content:
        "The team's dedication to excellence and innovative approach to problem-solving sets them apart. They've been instrumental in our digital transformation journey.",
      rating: 5,
      gradient: "from-[#4F46E5] to-[#7C3AED]",
    },
    {
      name: "Emma Williams",
      role: "HR Director, GlobalCorp",
      icon: "👩‍🎨",
      content:
        "Their HR solutions have streamlined our processes significantly. The level of support and expertise they provide is exceptional.",
      rating: 5,
      gradient: "from-[#4F46E5] to-[#7C3AED]",
    },
  ];

  return (
    <section className="relative py-20 -mt-1 overflow-hidden bg-gradient-to-b from-[#151922] via-[#0B0F19] to-[#0B0F19]">
      {/* Background Layers */}
      <div className="absolute inset-0">
        {/* Quote Marks Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute text-[100px] font-serif text-[#4F46E5]"
              style={{
                top: `${i * 25}%`,
                left: `${(i % 2) * 70}%`,
                transform: "rotate(-10deg)",
                willChange: "transform",
              }}
            >
              "
            </div>
          ))}
        </div>

        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4F46E5]/5 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7C3AED]/5 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>
      </div>

      {/* Dynamic Floating Shapes in the Background */}
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
            Testimonials
          </span>
          <h2 className="text-4xl font-bold mb-4 text-white font-heading">
            What Our{" "}
            <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-[#94A3B8] text-base max-w-2xl mx-auto">
            Success stories from businesses we've empowered
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative"
            >
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${testimonial.gradient} rounded-2xl opacity-30 blur-xl transition duration-500 group-hover:opacity-50`}
                style={{ willChange: "opacity, transform" }}
              />

              <div className="relative bg-[#1E293B]/50 rounded-xl backdrop-blur-sm border border-[#4F46E5]/10 p-6">
                {/* Quote Icon */}
                <div className="absolute -top-4 right-6">
                  <div
                    className={`w-8 h-8 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center text-white text-xl font-serif`}
                  >
                    "
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="mb-6">
                  <div className="flex items-center">
                    <span className="text-4xl">{testimonial.icon}</span>
                    <div className="ml-4">
                      <h4 className="text-white font-semibold">
                        {testimonial.name}
                      </h4>
                      <p className="text-[#94A3B8] text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-[#A5B4FC] mt-2">{testimonial.content}</p>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-[#4F46E5]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
