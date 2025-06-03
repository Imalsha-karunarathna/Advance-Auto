"use client";
import { services } from "@/lib/services-data";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";
import { Button } from "./ui/button";
import WhatsAppButton from "./ui/whatsappButton";

export default function OurServices() {
  const featuredServices = services.slice(0, 6);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#f79406] text-white rounded-full text-sm font-semibold mb-4">
            OUR EXPERTISE
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#005f70] mb-6">
            Professional Auto Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive vehicle care from routine maintenance to complex
            repairs. We&apos;ve got your vehicle covered with expert service and
            quality parts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredServices.map((service, index) => (
            <Card
              key={service.id}
              className={`group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden ${
                index % 2 === 0 ? "hover:-translate-y-2" : "hover:scale-105"
              }`}
            >
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-[#005f70] to-[#004a5a] p-6 text-white rounded-xl opacity-90">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#f79406] transition-colors duration-300">
                    <div className="w-8 h-8 text-white">
                      {service.icon === "cog" && (
                        <svg fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                      {service.icon === "droplet" && (
                        <svg fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M5.05 6.05a7 7 0 119.9 9.9 7 7 0 01-9.9-9.9zM10 2a1 1 0 011 1v.01a1 1 0 01-2 0V3a1 1 0 011-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                      {service.icon === "stop-circle" && (
                        <svg fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                      {service.icon === "circle" && (
                        <svg fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                      {service.icon === "snowflake" && (
                        <svg fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V9a1 1 0 11-2 0V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                      {service.icon === "settings" && (
                        <svg fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                </div>
                <div className="p-6 bg-white">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#f79406]">
                      {service.priceRange}
                    </span>
                    <Link href={`/services/${service.id}`}>
                      <Button
                        className="bg-[#005f70] hover:bg-[#004a5a] text-white border-0 px-6"
                        size="sm"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center bg-white rounded-2xl p-12 shadow-lg">
          <h3 className="text-2xl font-bold text-[#005f70] mb-4">
            Need a specific service? We&apos;re here to help!
          </h3>
          <p className="text-gray-600 mb-8 text-lg">
            Get a personalized quote for your vehicle&apos;s needs
          </p>
          <WhatsAppButton
            message="Hi, I need information about your services"
            size="lg"
            className="bg-[#f79406] hover:bg-[#e6850a] text-white px-8 py-4 text-lg font-semibold"
          >
            Get Quote on WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
