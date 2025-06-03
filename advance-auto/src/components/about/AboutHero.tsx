"use client";
import { Award, Users, Wrench, Star } from "lucide-react";
import { useState } from "react";

export default function AboutHero() {
  const [isImageHovered, setIsImageHovered] = useState(false);

  return (
    <section className="relative bg-[#005f70] text-white overflow-hidden min-h-[80vh] flex items-center">
      {/* Background pattern */}

      <div className="container mx-auto px-4 py-20 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-[#f79406] rounded-full text-sm font-semibold animate-pulse">
                <Award className="w-4 h-4 mr-2" />
                ABOUT ADVANCE AUTO
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Quality Service with a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f79406] to-[#ff8c00]">
                  Personal Touch
                </span>
              </h1>

              <p className="text-lg md:text-xl opacity-90 leading-relaxed">
                Founded on expertise and driven by passion, we&apos;re committed
                to providing exceptional automotive care for every vehicle that
                comes through our doors.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-colors duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#f79406] rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Award Winning</div>
                    <div className="text-sm opacity-80">
                      Toyota&apos;s Best 2019
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-colors duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#f79406] rounded-full flex items-center justify-center">
                    <Wrench className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">20+ Years</div>
                    <div className="text-sm opacity-80">Experience</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-colors duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#f79406] rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">500+ Customers</div>
                    <div className="text-sm opacity-80">Satisfied</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-colors duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#f79406] rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">100% Quality</div>
                    <div className="text-sm opacity-80">Guarantee</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - About Image */}
          <div className="relative">
            <div
              className="relative group"
              onMouseEnter={() => setIsImageHovered(true)}
              onMouseLeave={() => setIsImageHovered(false)}
            >
              {/* Main about image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/assets/about-hero.png"
                  alt="Advance Auto Shop - Professional automotive service facility"
                  className={`w-full h-[600px] object-cover transition-transform duration-700 ${
                    isImageHovered ? "scale-105" : "scale-100"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#005f70]/80 via-transparent to-transparent"></div>

                {/* Overlay content */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                    <h3 className="text-xl font-bold mb-2">
                      Meet Our Expert Team
                    </h3>
                    <p className="text-sm opacity-90 mb-4">
                      Certified professionals dedicated to your vehicle&apos;s
                      care
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-[#f79406] fill-current"
                          />
                        ))}
                      </div>
                      <span className="text-[#f79406] font-semibold">
                        4.9/5 Rating
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating achievement cards */}
              <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-xl animate-bounce">
                <div className="text-[#005f70] font-bold text-lg">🏆</div>
                <div className="text-sm text-gray-600 font-semibold">
                  Award Winner
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-[#f79406] text-white rounded-xl p-4 shadow-xl">
                <div className="font-bold text-lg">Est. 2023</div>
                <div className="text-sm opacity-90">Family Owned</div>
              </div>

              {/* Experience badge */}
              <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md rounded-full p-3 border border-white/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#f79406]">20+</div>
                  <div className="text-xs opacity-90">Years</div>
                </div>
              </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#f79406]/20 to-[#005f70]/20 rounded-3xl blur-xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
