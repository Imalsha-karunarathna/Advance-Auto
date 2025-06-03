import { Award, CheckCircle, Clock, Shield } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function WhyChooseUs() {
  const features = [
    {
      icon: CheckCircle,
      title: "Certified Professionals",
      description:
        "Our ASE-certified mechanics have years of experience and ongoing training in the latest automotive technologies.",
    },
    {
      icon: Shield,
      title: "Quality Parts & Warranty",
      description:
        "We use only OEM and high-quality aftermarket parts, backed by comprehensive warranties for your peace of mind.",
    },
    {
      icon: Award,
      title: "Transparent Pricing",
      description:
        "No hidden fees or surprise charges. We provide detailed estimates and explain all work before we begin.",
    },
    {
      icon: Clock,
      title: "Convenient Booking",
      description:
        "Easy appointment scheduling via WhatsApp with flexible timing to fit your busy schedule.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#005f70] to-[#f79406] rounded-2xl opacity-20 blur-lg"></div>
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600"
              alt="Professional mechanics working in clean garage"
              className="relative rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#f79406] text-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm opacity-90">Years Experience</div>
            </div>
          </div>

          <div>
            <div className="inline-block px-4 py-2 bg-[#005f70] text-white rounded-full text-sm font-semibold mb-6">
              WHY CHOOSE US
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#005f70] mb-8 leading-tight">
              Your Trusted Auto Care Partner
            </h2>

            <div className="space-y-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-6 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#005f70] to-[#004a5a] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:from-[#f79406] group-hover:to-[#e6850a] transition-all duration-300">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#005f70] mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Link href="/about">
                <Button
                  size="lg"
                  className="bg-[#005f70] hover:bg-[#004a5a] text-white px-8 py-4 text-lg font-semibold"
                >
                  Learn More About Us
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[#f79406] text-[#f79406] hover:bg-[#f79406] hover:text-white px-8 py-4 text-lg font-semibold"
                >
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
