"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface ServiceCategoryProps {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  services: string[];
  isReversed?: boolean;
}

export default function ServiceCategory({
  id,
  title,
  description,
  image,
  imageAlt,
  services,
  isReversed = false,
}: ServiceCategoryProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div id={id} className="py-16 scroll-mt-20">
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
          isReversed ? "lg:flex-row-reverse" : ""
        }`}
      >
        <div className={`order-2 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
          <div
            className="relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-[#005f70] to-[#f79406] rounded-2xl opacity-20 blur-lg transition-opacity duration-300 group-hover:opacity-40"></div>
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={image || "/placeholder.svg"}
                alt={imageAlt}
                className={`w-full h-auto rounded-xl shadow-lg transition-transform duration-700 ${
                  isHovered ? "scale-105" : "scale-100"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#005f70]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>

        <div className={`order-1 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-[#005f70] mb-6">
            {title}
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            {description}
          </p>

          <div className="space-y-4 mb-8">
            {services.map((service, index) => (
              <div key={index} className="flex items-start space-x-3 group">
                <div className="w-6 h-6 bg-[#005f70] rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-[#f79406] transition-colors duration-300">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-700">{service}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/contact">
              <Button className="bg-[#005f70] hover:bg-[#f79406] text-white transition-colors duration-300">
                Book This Service
              </Button>
            </Link>

            <Link href={`/services/${id}`}>
              <Button
                variant="outline"
                className="border-[#005f70] text-[#005f70] hover:bg-[#005f70] hover:text-white transition-colors duration-300"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-16"></div>
    </div>
  );
}
