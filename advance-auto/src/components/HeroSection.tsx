"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import WhatsAppButton from "./ui/whatsappButton";
import SEOHead from "./ui/seo-head";

export default function HeroSection() {
  return (
    <>
      <SEOHead
        title="Professional Vehicle Service & Repair"
        description="Expert mechanics, quality parts, and reliable service. Your vehicle deserves the best care from certified professionals. Book your appointment via WhatsApp today."
        keywords="auto repair, vehicle service, car maintenance, engine repair, oil change, brake service, tire installation, AC repair, professional mechanics"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-[#005f70] text-white py-20 lg:py-32">
        <div className="absolute inset-0"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-[#f79406]">
            Professional Vehicle <br />
            <span className="text-gray-50 ">Service & Repair</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Expert mechanics, quality parts, and reliable service. Your vehicle
            deserves the best care from certified professionals.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <WhatsAppButton
              message="Hi, I'd like to book a service appointment"
              size="lg"
              className="text-lg px-8 py-4 shadow-lg"
            >
              Book Appointment
            </WhatsAppButton>
            <Link href="/services">
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 backdrop-blur text-white border-white/20 hover:bg-white/20 text-lg px-8 py-4"
              >
                View Services
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
              <div className="text-2xl font-bold text-[#f79406] mb-1">15+</div>
              <div className="text-sm opacity-90">Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
              <div className="text-2xl font-bold text-[#f79406] mb-1">
                2500+
              </div>
              <div className="text-sm opacity-90">Happy Customers</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
              <div className="text-2xl font-bold text-[#f79406] mb-1">8</div>
              <div className="text-sm opacity-90">Certified Mechanics</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
              <div className="text-2xl font-bold text-[#f79406] mb-1">24/7</div>
              <div className="text-sm opacity-90">Emergency Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <WhatsAppButton
          message="Hi, I need help with my vehicle"
          className="w-14 h-14 rounded-full animate-pulse shadow-lg"
          showIcon={true}
        >
          <span className="sr-only">WhatsApp</span>
        </WhatsAppButton>
      </div>
    </>
  );
}
