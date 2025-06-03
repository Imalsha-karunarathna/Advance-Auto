"use client";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function ContactHero() {
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
                <Phone className="w-4 h-4 mr-2" />
                GET IN TOUCH
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Contact{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f79406] to-[#ff8c00]">
                  Us
                </span>
              </h1>

              <p className="text-xl md:text-xl opacity-90 leading-relaxed">
                Have questions or ready to book a service? Our team is here to
                help with all your automotive needs.
              </p>
            </div>

            {/* Quick Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-colors duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#f79406] rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm opacity-80">Call Us</div>
                    <div className="font-semibold">0415 327 809</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-colors duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#f79406] rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm opacity-80">Email Us</div>
                    <div className="font-semibold text-sm">
                      contact@advauto.com.au
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-colors duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#f79406] rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm opacity-80">Visit Us</div>
                    <div className="font-semibold text-sm">
                      1/5 Plunkett Road, Dandenong, VIC 3175
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-colors duration-300">
                <div className="flex items-start space-x-3">
                  {/* Icon */}
                  <div className="w-10 h-10 bg-[#f79406] rounded-full flex items-center justify-center mt-1">
                    <Clock className="w-5 h-5 text-white" />
                  </div>

                  {/* Content */}
                  <div>
                    <div className="text-sm opacity-80 mb-1">Open</div>
                    <ul className="text-sm font-semibold list-disc list-inside space-y-1">
                      <li>Monday – Friday: 8:30am – 5:30pm</li>
                      <li>Saturday: 9:00am – 12:00pm</li>
                      <li>Sunday: Closed</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Contact Image */}
          <div className="relative">
            <div
              className="relative group"
              onMouseEnter={() => setIsImageHovered(true)}
              onMouseLeave={() => setIsImageHovered(false)}
            >
              {/* Main contact image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/assets/contact-hero.png"
                  alt="Contact Advance Auto - Professional automotive service team"
                  className={`w-full h-[600px] object-cover transition-transform duration-700 ${
                    isImageHovered ? "scale-105" : "scale-100"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#005f70]/80 via-transparent to-transparent"></div>

                {/* Overlay content */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                    <h3 className="text-xl font-bold mb-2">
                      Ready to Get Started?
                    </h3>
                    <p className="text-sm opacity-90 mb-4">
                      Contact us today for expert automotive care
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-[#f79406] font-semibold">
                        Quick Response
                      </span>
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-[#f79406] rounded-full animate-ping"></div>
                        <span className="text-sm">Online Now</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating contact cards */}
              <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-xl animate-bounce">
                <div className="text-[#005f70] font-bold text-lg">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-[#f79406] text-white rounded-xl p-4 shadow-xl">
                <div className="font-bold text-lg">⚡ Fast</div>
                <div className="text-sm opacity-90">Response</div>
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
