"use client";
import { useState } from "react";
import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-gradient-to-br from-[#005f70] to-[#004a5a] p-12 text-white relative">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                <p className="mb-8 opacity-90">
                  Fill out the form and our team will get back to you as soon as
                  possible.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-[#f79406]" />
                    </div>
                    <div>Quick Response Time</div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-[#f79406]" />
                    </div>
                    <div>Expert Technical Advice</div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-[#f79406]" />
                    </div>
                    <div>Detailed Service Quotes</div>
                  </div>
                </div>

                <div className="mt-12">
                  <div className="text-sm opacity-80">Prefer to call?</div>
                  <div className="text-xl font-bold">0415 327 809</div>
                </div>
              </div>
            </div>

            <div className="p-12">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#005f70] mb-4">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for contacting us. We&apos;ll get back to you as
                    soon as possible.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-[#005f70] hover:bg-[#004a5a] text-white"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="firstName"
                        className="text-sm font-medium text-gray-700"
                      >
                        First Name *
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        required
                        className="border-gray-300 focus:border-[#005f70] focus:ring-[#005f70]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="lastName"
                        className="text-sm font-medium text-gray-700"
                      >
                        Last Name *
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        required
                        className="border-gray-300 focus:border-[#005f70] focus:ring-[#005f70]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700"
                    >
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="border-gray-300 focus:border-[#005f70] focus:ring-[#005f70]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-gray-700"
                    >
                      Contact Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="border-gray-300 focus:border-[#005f70] focus:ring-[#005f70]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-gray-700"
                    >
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="border-gray-300 focus:border-[#005f70] focus:ring-[#005f70]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#005f70] hover:bg-[#004a5a] text-white py-2 h-auto text-lg font-semibold group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        Submit{" "}
                        <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
