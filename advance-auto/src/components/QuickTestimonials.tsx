"use client";
import { Star, Users } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";
import { Button } from "./ui/button";
import { getAverageRating, testimonials } from "@/lib/testimonials-data";

export default function QuickTestimonials() {
  const featuredTestimonials = testimonials.slice(0, 3);
  const averageRating = getAverageRating();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied
            customers have to say about our service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredTestimonials.map((testimonial) => (
            <Card key={testimonial.id} className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  &apos;{testimonial.review}&apos;
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center mr-3">
                    <Users className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.customerName}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.serviceType} - {testimonial.serviceDate}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-card rounded-xl p-8 max-w-md mx-auto shadow-lg mb-8">
            <div className="text-4xl font-bold text-foreground mb-2">
              {averageRating}/5
            </div>
            <div className="flex justify-center space-x-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <div className="text-muted-foreground">
              Based on {testimonials.length}+ customer reviews
            </div>
          </div>
          <Link href="/testimonials">
            <Button variant="outline" size="lg">
              Read All Reviews
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
