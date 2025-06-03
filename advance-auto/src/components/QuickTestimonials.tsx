"use client";
import { Star, Users, Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";
import { Button } from "./ui/button";
import { getAverageRating, testimonials } from "@/lib/testimonials-data";

export default function QuickTestimonials() {
  const featuredTestimonials = testimonials.slice(0, 3);
  const averageRating = getAverageRating();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#f79406] text-white rounded-full text-sm font-semibold mb-4">
            TESTIMONIALS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#005f70] mb-6">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied
            customers have to say about our exceptional service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {featuredTestimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden hover:-translate-y-2"
            >
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-[#005f70] to-[#004a5a] p-6 text-white relative">
                  <Quote className="w-8 h-8 text-white/30 absolute top-4 right-4" />
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < testimonial.rating
                              ? "text-[#f79406] fill-current"
                              : "text-white/30"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-white/90 text-lg leading-relaxed">
                    &quot;{testimonial.review}&quot;
                  </p>
                </div>
                <div className="bg-white p-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#005f70] to-[#f79406] rounded-full flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-[#005f70] text-lg">
                        {testimonial.customerName}
                      </div>
                      <div className="text-gray-600">
                        {testimonial.serviceType}
                      </div>
                      <div className="text-sm text-[#f79406] font-semibold">
                        {testimonial.serviceDate}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white rounded-2xl p-12 max-w-md mx-auto shadow-2xl mb-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#005f70]/5 to-[#f79406]/5"></div>
            <div className="relative">
              <div className="text-6xl font-bold text-[#005f70] mb-4">
                {averageRating}/5
              </div>
              <div className="flex justify-center space-x-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-8 h-8 text-[#f79406] fill-current"
                  />
                ))}
              </div>
              <div className="text-gray-600 text-lg font-semibold">
                Based on {testimonials.length}+ customer reviews
              </div>
              <div className="w-20 h-1 bg-gradient-to-r from-[#005f70] to-[#f79406] mx-auto mt-4 rounded-full"></div>
            </div>
          </div>

          <Link href="/testimonials">
            <Button
              size="lg"
              className="bg-[#005f70] hover:bg-[#004a5a] text-white px-8 py-4 text-lg font-semibold"
            >
              Read All Reviews
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
