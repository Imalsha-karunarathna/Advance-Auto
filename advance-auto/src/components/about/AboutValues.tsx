import { Heart, Shield, Zap, Clock } from "lucide-react";

export default function AboutValues() {
  const values = [
    {
      icon: Shield,
      title: "Quality",
      description:
        "We use only the highest quality parts and follow manufacturer specifications for all services and repairs.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description:
        "Honest assessments, transparent pricing, and no unnecessary repairs or hidden fees.",
    },
    {
      icon: Zap,
      title: "Expertise",
      description:
        "Our team brings decades of experience and continuous training on the latest automotive technologies.",
    },
    {
      icon: Clock,
      title: "Reliability",
      description:
        "We value your time with prompt service, on-time appointments, and quick turnaround when possible.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#f79406] text-white rounded-full text-sm font-semibold mb-6">
            OUR VALUES
          </div>
          <h2 className="text-4xl font-bold text-[#005f70] mb-6">
            What Drives Us
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Advance Auto, we&apos;re guided by a set of core values that
            ensure we deliver the best possible service to every customer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#005f70] to-[#004a5a] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-[#f79406] group-hover:to-[#e6850a] transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#005f70] mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 bg-white rounded-2xl p-10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#005f70] to-[#f79406]"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#005f70] mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To provide high quality, reliable and comprehensive automobile
                service and repair at an affordable price, and most importantly
                to deliver services with 100% customer satisfaction.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#005f70] mb-4">
                Our Promise
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Use our friendly and professional services and feel the
                difference in your car! We stand behind our work with
                comprehensive warranties and a commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
