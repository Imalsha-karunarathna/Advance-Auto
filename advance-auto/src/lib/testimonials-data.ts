export interface Testimonial {
  id: string;
  customerName: string;
  serviceType: string;
  serviceDate: string;
  rating: number;
  review: string;
  verified: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    customerName: "Sarah Johnson",
    serviceType: "Engine Repair",
    serviceDate: "March 2024",
    rating: 5,
    review:
      "Excellent service! They diagnosed my engine problem quickly and fixed it at a fair price. The team was professional and kept me informed throughout the process.",
    verified: true,
  },
  {
    id: "2",
    customerName: "Mike Rodriguez",
    serviceType: "Regular Customer",
    serviceDate: "Since 2019",
    rating: 5,
    review:
      "Been bringing my car here for years. They always do quality work and stand behind their repairs. The WhatsApp booking system makes scheduling so convenient!",
    verified: true,
  },
  {
    id: "3",
    customerName: "Lisa Chen",
    serviceType: "Brake Service",
    serviceDate: "February 2024",
    rating: 5,
    review:
      "Professional, honest, and reliable. They took the time to explain what was wrong with my car and provided options that fit my budget. Highly recommend!",
    verified: true,
  },
  {
    id: "4",
    customerName: "James Wilson",
    serviceType: "Emergency Service",
    serviceDate: "January 2024",
    rating: 5,
    review:
      "Emergency breakdown on a weekend and they came through! Fast response, fair pricing, and got me back on the road quickly. True professionals.",
    verified: true,
  },
  {
    id: "5",
    customerName: "Amanda Taylor",
    serviceType: "Oil Change & Inspection",
    serviceDate: "March 2024",
    rating: 5,
    review:
      "Great experience from start to finish. Clean facility, knowledgeable staff, and they completed the work exactly when promised. Will definitely be back!",
    verified: true,
  },
  {
    id: "6",
    customerName: "Robert Garcia",
    serviceType: "Transmission Service",
    serviceDate: "February 2024",
    rating: 5,
    review:
      "Transparent pricing and excellent communication. They showed me exactly what needed to be done and why. No pressure, just honest advice. Trustworthy team!",
    verified: true,
  },
];

export const getAverageRating = (): number => {
  const totalRating = testimonials.reduce(
    (sum, testimonial) => sum + testimonial.rating,
    0
  );
  return Math.round((totalRating / testimonials.length) * 10) / 10;
};

export const getTotalReviewCount = (): number => {
  return testimonials.length;
};
