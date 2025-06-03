"use client";
import Link from "next/link";
import WhatsAppButton from "./ui/whatsappButton";
import { Button } from "./ui/button";

export default function ReadyTobook() {
  return (
    <section className="bg-gradient-to-br from-[#005f70] to-[#004a5a] py-20 text-white relative overflow-hidden">
      <div className="absolute right-0 top-0 w-96 h-96 bg-[#f79406] rounded-full filter blur-3xl opacity-10 -mr-48 -mt-48"></div>
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-[#f79406] rounded-full filter blur-3xl opacity-10 -ml-48 -mb-48"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Book Your Service?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Get your vehicle serviced by certified professionals. Quick, reliable,
          and affordable automotive care.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <WhatsAppButton
            message="Hi, I'd like to schedule a service appointment. Can you help me with availability?"
            size="lg"
            className="text-lg px-8 py-4"
          >
            Book Now on WhatsApp
          </WhatsAppButton>
          <Link href="/contact">
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur text-white border-white/20 hover:bg-white/20 text-lg px-8 py-4"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
