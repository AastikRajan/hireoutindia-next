"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import FloatingEmojis from "./FloatingEmojis";

export default function Footer() {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Financial Services", href: "#financial" },
    { name: "Tech Solutions", href: "#tech" },
    { name: "Data Services", href: "#data" },
    { name: "HR Solutions", href: "#hr" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#0B0F19] via-[#0B0F19] to-[#151922] pt-20 pb-8 overflow-hidden">
      {/* Dynamic Floating Shapes in the Background */}
      <FloatingEmojis />

      {/* Gradient Border Top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4F46E5] to-transparent opacity-20" />

      {/* Background Glows */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#4F46E5]/5 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#7C3AED]/5 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>
      </div>

      <div className="relative container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-3xl font-bold text-white">
                Hire
                <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
                  Out
                </span>
              </span>
            </Link>
            <p className="text-[#94A3B8] mb-8 max-w-md">
              Empowering businesses through innovative solutions and expert
              services. Your trusted partner in digital transformation.
            </p>
            <div className="flex space-x-4">
              {["Twitter", "LinkedIn", "Facebook", "Instagram"].map(
                (social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 rounded-lg bg-[#1E293B]/50 backdrop-blur-sm border border-[#4F46E5]/10 flex items-center justify-center text-[#A5B4FC] hover:bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] transition-all duration-300 group"
                  >
                    <span className="group-hover:text-white transition-colors">
                      {social[0]}
                    </span>
                  </a>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-[#94A3B8] hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] mr-3 group-hover:w-2 group-hover:h-2 transition-all"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Our Services</h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-[#94A3B8] hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] mr-3 group-hover:w-2 group-hover:h-2 transition-all"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#4F46E5]/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#94A3B8] text-sm">
              © 2024 HireOut India. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <Link
                href="#privacy"
                className="text-[#94A3B8] hover:text-white transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </Link>
              <span className="text-[#4F46E5]/50">•</span>
              <Link
                href="#terms"
                className="text-[#94A3B8] hover:text-white transition-colors duration-300 text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
