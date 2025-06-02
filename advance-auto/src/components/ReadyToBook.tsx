"use client";
import Link from "next/link";
import WhatsAppButton from "./ui/whatsappButton";
import { Button } from "./ui/button";

export default function ReadyTobook() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
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
