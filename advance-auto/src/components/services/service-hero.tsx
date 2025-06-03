"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wrench, Shield, Clock } from "lucide-react";
import { useState, useEffect } from "react";

export default function ServiceHero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "/assets/4wd-service.jpg",
    "/assets/accessory-fitting.jpg",
    "/assets/logbook-services.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="relative bg-gradient-to-br from-primary to-[#005f70] text-white overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Images Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-10" : "opacity-10"
            }`}
          >
            <img
              src={image || "/assets/transmission.jpg"}
              alt={`Automotive service ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-[#005f70]/80 via-[#005f70]/70 to-[#005f70]/50"></div>
      </div>

      {/* Background pattern overlay */}

      <div className="container mx-auto px-4 py-20 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-[#f79406] rounded-full text-sm font-semibold animate-pulse">
                <Wrench className="w-4 h-4 mr-2" />
                PROFESSIONAL AUTO SERVICES
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Expert{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f79406] to-[#ff8c00]">
                  Automotive
                </span>{" "}
                Services
              </h1>

              <p className="text-xl md:text-xl opacity-90 leading-relaxed max-w-2xl">
                From routine maintenance to complex repairs, our certified
                technicians provide comprehensive care for all makes and models.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#logbook">
                <Button className="bg-[#f79406] hover:bg-[#e6850a] text-white transition-all duration-300 text-lg px-8 py-4 h-auto font-semibold group shadow-2xl hover:shadow-[#f79406]/25">
                  Explore Our Services
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>

              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-2 border-white text-black hover:bg-white hover:text-[#005f70] transition-all duration-300 text-lg px-8 py-4 h-auto font-semibold backdrop-blur-sm"
                >
                  Book a Service
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/20">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-[#f79406]" />
                <span className="text-sm opacity-90">Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-[#f79406]" />
                <span className="text-sm opacity-90">Same Day Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <Wrench className="w-5 h-5 text-[#f79406]" />
                <span className="text-sm opacity-90">Expert Technicians</span>
              </div>
            </div>
          </div>

          {/* Right Content - Featured Service Image */}
          <div className="relative">
            <div className="relative group">
              {/* Main featured image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/assets/transmission.jpg"
                  alt="Professional transmission service"
                  className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#005f70]/80 via-transparent to-transparent"></div>

                {/* Overlay content */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                    <h3 className="text-xl font-bold mb-2">
                      Transmission Specialists
                    </h3>
                    <p className="text-sm opacity-90 mb-4">
                      Expert diagnosis and repair for all transmission types
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-[#f79406] font-semibold">
                        From $150
                      </span>
                      <Link href="/services/transmission">
                        <Button
                          size="sm"
                          className="bg-[#f79406] hover:bg-[#e6850a] text-white"
                        >
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating service cards */}
              <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-xl animate-bounce">
                <div className="text-[#005f70] font-bold text-lg">⭐ 4.9/5</div>
                <div className="text-sm text-gray-600">Customer Rating</div>
              </div>

              {/* <div className="absolute -bottom-6 -left-6 bg-[#f79406] text-white rounded-xl p-4 shadow-xl">
                <div className="font-bold text-lg">24/7</div>
                <div className="text-sm opacity-90">Emergency Service</div>
              </div> */}
            </div>

            {/* Background decorative elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#f79406]/20 to-[#005f70]/20 rounded-3xl blur-xl -z-10"></div>
          </div>
        </div>
      </div>

      {/* Image carousel indicators */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? "bg-[#f79406] w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
