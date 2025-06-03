"use client";
import Link from "next/link";
import WhatsAppButton from "@/components/ui/whatsappButton";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <section className="bg-gradient-to-br from-[#005f70] to-[#004a5a] py-20 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-[#f79406] rounded-full filter blur-3xl opacity-10 -mr-48 -mt-48"></div>
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-[#f79406] rounded-full filter blur-3xl opacity-10 -ml-48 -mb-48"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Need a Custom Service?
          </h2>
          <p className="text-xl opacity-90 mb-10 leading-relaxed">
            Can&apos;t find exactly what you&apos;re looking for? We offer
            customized solutions for all your automotive needs. Contact us today
            to discuss your specific requirements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 hover:bg-white/20 transition-colors duration-300">
              <div className="text-[#f79406] font-bold text-4xl mb-2">20+</div>
              <p className="text-white/90">Years of Experience</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 hover:bg-white/20 transition-colors duration-300">
              <div className="text-[#f79406] font-bold text-4xl mb-2">500+</div>
              <p className="text-white/90">Satisfied Customers</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 hover:bg-white/20 transition-colors duration-300">
              <div className="text-[#f79406] font-bold text-4xl mb-2">100%</div>
              <p className="text-white/90">Quality Guarantee</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <WhatsAppButton
              message="Hi, I'd like to inquire about a custom service. Can you help me?"
              size="lg"
              className="bg-[#f79406] hover:bg-[#e6850a] text-white text-lg px-10 py-5 font-bold shadow-2xl hover:shadow-[#f79406]/25 transition-all duration-300"
            >
              Get a Custom Quote
            </WhatsAppButton>

            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 backdrop-blur text-white border-white/30 hover:bg-white hover:text-[#005f70] text-lg px-10 py-5 font-bold transition-all duration-300 group"
              >
                Contact Us{" "}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
