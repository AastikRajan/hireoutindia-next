"use client";

import FloatingEmojis from "./FloatingEmojis";

export default function InfoSection() {
  return (
    <section
      id="why-choose-us"
      className="relative py-20 overflow-hidden bg-gradient-to-b from-[#151922] via-[#0B0F19] to-[#151922] text-white"
    >
      {/* Dynamic Floating Shapes in the Background */}
      <FloatingEmojis />

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="font-semibold uppercase tracking-wider text-sm text-[#A5B4FC]">
            WHY CHOOSE US
          </span>
          <h2 className="mt-4 text-4xl font-bold">
            Empowering Your{" "}
            <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
              Business Growth
            </span>
          </h2>
          <p className="mt-4 text-lg text-[#94A3B8]">
            We deliver excellence through our comprehensive range of services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature Card 1 - Expert Team */}
          <div className="relative bg-[#1E293B]/50 rounded-xl p-6 backdrop-blur-sm border border-[#4F46E5]/10 shadow-lg transition-transform hover:scale-105">
            <div className="mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] rounded-full text-white text-2xl">
                <i className="fas fa-users"></i>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Expert Team</h3>
            <p className="text-base text-[#94A3B8]">
              Skilled professionals with years of industry experience.
            </p>
            <div className="mt-4">
              <span className="block text-3xl font-bold text-[#7C3AED]">
                50+
              </span>
              <span className="text-sm text-[#A5B4FC]">Team Members</span>
            </div>
          </div>

          {/* Feature Card 2 - Quick Turnaround */}
          <div className="relative bg-[#1E293B]/50 rounded-xl p-6 backdrop-blur-sm border border-[#4F46E5]/10 shadow-lg transition-transform hover:scale-105">
            <div className="mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] rounded-full text-white text-2xl">
                <i className="fas fa-clock"></i>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Quick Turnaround</h3>
            <p className="text-base text-[#94A3B8]">
              Fast and efficient project delivery timeline.
            </p>
            <div className="mt-4">
              <span className="block text-3xl font-bold text-[#7C3AED]">
                98%
              </span>
              <span className="text-sm text-[#A5B4FC]">On-time Delivery</span>
            </div>
          </div>

          {/* Feature Card 3 - Quality Assurance */}
          <div className="relative bg-[#1E293B]/50 rounded-xl p-6 backdrop-blur-sm border border-[#4F46E5]/10 shadow-lg transition-transform hover:scale-105">
            <div className="mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] rounded-full text-white text-2xl">
                <i className="fas fa-award"></i>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
            <p className="text-base text-[#94A3B8]">
              Commitment to excellence in every project.
            </p>
            <div className="mt-4">
              <span className="block text-3xl font-bold text-[#7C3AED]">
                99%
              </span>
              <span className="text-sm text-[#A5B4FC]">
                Client Satisfaction
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
