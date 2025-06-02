import { Award, CheckCircle, Clock, Shield } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600"
              alt="Professional mechanics working in clean garage"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Choose AutoCare Pro?
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Certified Professionals
                  </h3>
                  <p className="text-muted-foreground">
                    Our ASE-certified mechanics have years of experience and
                    ongoing training in the latest automotive technologies.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Quality Parts & Warranty
                  </h3>
                  <p className="text-muted-foreground">
                    We use only OEM and high-quality aftermarket parts, backed
                    by comprehensive warranties for your peace of mind.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Transparent Pricing
                  </h3>
                  <p className="text-muted-foreground">
                    No hidden fees or surprise charges. We provide detailed
                    estimates and explain all work before we begin.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Convenient Booking
                  </h3>
                  <p className="text-muted-foreground">
                    Easy appointment scheduling via WhatsApp with flexible
                    timing to fit your busy schedule.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link href="/about">
                <Button size="lg" className="px-6 py-3">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
