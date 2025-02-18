"use client";

import React from "react";
import { motion } from "framer-motion";
import FloatingEmojis from "./FloatingEmojis"; // Import the floating emojis component

export default function Services() {
  const services = [
    {
      icon: "💼",
      title: "Financial Services",
      description:
        "Comprehensive financial solutions including accounting, bookkeeping, and financial analysis",
      features: [
        "Accounting",
        "Bookkeeping",
        "Financial Analysis",
        "Tax Planning",
      ],
      gradient: "from-[#4F46E5] to-[#7C3AED]",
    },
    {
      icon: "🚀",
      title: "Tech Solutions",
      description:
        "Cutting-edge technology solutions for business automation and digital transformation",
      features: [
        "Web Development",
        "Mobile Apps",
        "Cloud Solutions",
        "AI Integration",
      ],
      gradient: "from-[#4F46E5] to-[#7C3AED]",
    },
    {
      icon: "📊",
      title: "Data Services",
      description:
        "Data management and analytics services to drive informed business decisions",
      features: [
        "Data Analysis",
        "Business Intelligence",
        "Data Visualization",
        "Predictive Analytics",
      ],
      gradient: "from-[#4F46E5] to-[#7C3AED]",
    },
    {
      icon: "👥",
      title: "HR Solutions",
      description: "Complete HR management solutions for modern businesses",
      features: [
        "Recruitment",
        "Training",
        "Performance Management",
        "HR Analytics",
      ],
      gradient: "from-[#4F46E5] to-[#7C3AED]",
    },
  ];

  return (
    <section className="relative py-24 -mt-2 overflow-hidden bg-gradient-to-b from-[#151922] via-[#0B0F19] to-[#0B0F19]">
      {/* Floating Emojis Component */}
      <FloatingEmojis />

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

      {/* Floating Elements */}
      {/* Rotating Floating Shape */}
      <div className="shape-1" />

      {/* Floating Circle */}
      <div className="floating-circle" />

      {/* Additional Floating Square */}
      <div className="floating-square" />

      {/* New Floating Triangle */}
      <div className="floating-triangle" />

      {/* New Floating Star */}
      <div className="floating-star" />

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
          className="text-center mb-20"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-[#4F46E5]/20 to-[#7C3AED]/20 text-[#A5B4FC] font-semibold tracking-wider text-sm uppercase mb-4">
            Our Services
          </span>
          <h2 className="text-5xl font-bold mb-6 text-white font-heading">
            What We{" "}
            <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
              Offer
            </span>
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative transform transition hover:scale-105"
            >
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-2xl opacity-30 blur-xl transition duration-500 group-hover:opacity-50`}
                style={{ willChange: "opacity, transform" }}
              />
              <div className="relative bg-[#1E293B]/70 rounded-xl backdrop-blur-sm border border-[#4F46E5]/20 p-8 h-full shadow-lg transition-shadow hover:shadow-2xl">
                {/* Service Icon */}
                <div className="mb-5">
                  <div
                    className={`w-14 h-14 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center text-3xl`}
                  >
                    {service.icon}
                  </div>
                </div>

                {/* Service Content */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-[#94A3B8] mb-6">{service.description}</p>

                {/* Service Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-[#A5B4FC] text-base"
                    >
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <style jsx>{`
        /* Rotating floating shape similar to your .shape-1 */
        .shape-1 {
          position: absolute;
          width: 160px;
          height: 160px;
          border: 12px solid #7c3aed;
          transform: rotate(45deg);
          top: 30%;
          left: 5%;
          animation: rotate 25s linear infinite;
          will-change: transform;
        }
        @keyframes rotate {
          from {
            transform: rotate(45deg);
          }
          to {
            transform: rotate(405deg);
          }
        }

        /* Floating circle element */
        .floating-circle {
          position: absolute;
          bottom: 15%;
          right: 5%;
          width: 120px;
          height: 120px;
          border: 6px solid #4f46e5;
          border-radius: 50%;
          animation: float 6s ease-in-out infinite;
          will-change: transform;
        }

        /* Additional floating square for extra modern flair */
        .floating-square {
          position: absolute;
          top: 20%;
          right: 15%;
          width: 80px;
          height: 80px;
          background: linear-gradient(45deg, #4f46e5, #7c3aed);
          opacity: 0.6;
          animation: float 8s ease-in-out infinite;
          will-change: transform;
        }

        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0);
          }
        }

        /* New floating triangle element */
        .floating-triangle {
          position: absolute;
          top: 10%;
          left: 20%;
          width: 100px;
          height: 100px;
          background: linear-gradient(45deg, #4f46e5, #7c3aed);
          clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
          opacity: 0.6;
          animation: float 7s ease-in-out infinite;
          will-change: transform;
        }

        /* New floating star element */
        .floating-star {
          position: absolute;
          bottom: 25%;
          left: 10%;
          width: 80px;
          height: 80px;
          background: linear-gradient(45deg, #4f46e5, #7c3aed);
          clip-path: polygon(
            50% 0%,
            61% 35%,
            98% 35%,
            68% 57%,
            79% 91%,
            50% 70%,
            21% 91%,
            32% 57%,
            2% 35%,
            39% 35%
          );
          opacity: 0.6;
          animation: float 5s ease-in-out infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}
