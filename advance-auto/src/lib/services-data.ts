export interface Service {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  icon: string;
  priceRange: string;
  features: string[];
  benefits: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  estimatedTime: string;
  category: string;
}

export const services: Service[] = [
  {
    id: "engine-repair",
    title: "Engine Repair & Diagnostics",
    description:
      "Complete engine diagnostics and repair services using advanced equipment and genuine parts.",
    fullDescription:
      "Our comprehensive engine repair and diagnostics service uses state-of-the-art computer diagnostic equipment to identify and resolve engine issues quickly and accurately. Our ASE-certified technicians have extensive experience with all makes and models, ensuring your engine runs at peak performance.",
    icon: "cog",
    priceRange: "From $150",
    estimatedTime: "2-6 hours",
    category: "Engine Services",
    features: [
      "Advanced computer diagnostics",
      "Check engine light diagnosis",
      "Performance optimization",
      "Fuel system cleaning",
      "Timing belt/chain service",
      "Engine tune-ups",
    ],
    benefits: [
      "Improved fuel efficiency",
      "Enhanced engine performance",
      "Extended engine life",
      "Reduced emissions",
      "Peace of mind with warranty",
    ],
    faqs: [
      {
        question: "How long does engine diagnostics take?",
        answer:
          "Most diagnostic tests take 1-2 hours, depending on the complexity of the issue. We'll provide a detailed report with our findings.",
      },
      {
        question: "Do you work on all car makes and models?",
        answer:
          "Yes, our certified technicians are trained to work on all major automotive brands including domestic, import, and luxury vehicles.",
      },
      {
        question: "What's included in the diagnostic fee?",
        answer:
          "Our diagnostic fee includes a comprehensive computer scan, visual inspection, and detailed written report. This fee is applied toward any approved repairs.",
      },
    ],
  },
  {
    id: "oil-change",
    title: "Oil Change & Filter Service",
    description:
      "Quick and professional oil changes with high-quality synthetic and conventional oils.",
    fullDescription:
      "Regular oil changes are essential for engine longevity and performance. We offer quick, professional oil change services using premium motor oils and quality filters. Our service includes a comprehensive vehicle inspection to catch potential issues early.",
    icon: "droplet",
    priceRange: "From $45",
    estimatedTime: "30-45 minutes",
    category: "Maintenance",
    features: [
      "Synthetic and conventional oil options",
      "Premium oil filters",
      "Multi-point inspection",
      "Fluid level checks",
      "Battery and belt inspection",
      "Digital service records",
    ],
    benefits: [
      "Extended engine life",
      "Better fuel economy",
      "Improved engine performance",
      "Early problem detection",
      "Manufacturer warranty compliance",
    ],
    faqs: [
      {
        question: "How often should I change my oil?",
        answer:
          "Most vehicles need oil changes every 5,000-7,500 miles with synthetic oil, or 3,000-5,000 miles with conventional oil. Check your owner's manual for specific recommendations.",
      },
      {
        question:
          "What's the difference between synthetic and conventional oil?",
        answer:
          "Synthetic oil lasts longer, performs better in extreme temperatures, and provides superior engine protection. While it costs more upfront, it often saves money in the long run.",
      },
      {
        question: "Do you dispose of old oil properly?",
        answer:
          "Absolutely. We're committed to environmental responsibility and recycle all used oil and filters through certified recycling programs.",
      },
    ],
  },
  {
    id: "brake-service",
    title: "Brake System Service",
    description:
      "Complete brake inspection, pad replacement, and brake system maintenance for your safety.",
    fullDescription:
      "Your safety depends on properly functioning brakes. Our comprehensive brake service includes inspection, pad and rotor replacement, brake fluid service, and complete system testing. We use only high-quality brake components and back our work with a solid warranty.",
    icon: "stop-circle",
    priceRange: "From $120",
    estimatedTime: "1-3 hours",
    category: "Safety Systems",
    features: [
      "Complete brake inspection",
      "Brake pad replacement",
      "Rotor resurfacing/replacement",
      "Brake fluid service",
      "Caliper service",
      "ABS system diagnostics",
    ],
    benefits: [
      "Enhanced safety",
      "Improved stopping power",
      "Reduced brake noise",
      "Extended component life",
      "Better pedal feel",
    ],
    faqs: [
      {
        question: "How do I know if my brakes need service?",
        answer:
          "Warning signs include squealing or grinding noises, vibration when braking, longer stopping distances, or the brake warning light. We recommend annual brake inspections.",
      },
      {
        question: "How long do brake pads typically last?",
        answer:
          "Brake pad life varies based on driving habits and conditions, typically lasting 25,000-70,000 miles. City driving and aggressive braking reduce pad life.",
      },
      {
        question: "Can you service all types of brake systems?",
        answer:
          "Yes, we service all brake system types including disc brakes, drum brakes, and anti-lock brake systems (ABS) on all vehicle makes and models.",
      },
    ],
  },
  {
    id: "tire-service",
    title: "Tire Installation & Balancing",
    description:
      "Professional tire installation, balancing, and alignment services for optimal performance.",
    fullDescription:
      "Proper tire service is crucial for safety, fuel economy, and vehicle performance. Our tire services include professional installation, computerized balancing, wheel alignment, and tire rotation. We carry a wide selection of quality tires for all budgets and driving needs.",
    icon: "circle",
    priceRange: "From $80",
    estimatedTime: "1-2 hours",
    category: "Tires & Wheels",
    features: [
      "Professional tire installation",
      "Computerized wheel balancing",
      "Wheel alignment service",
      "Tire rotation",
      "Pressure monitoring system service",
      "Wide tire selection",
    ],
    benefits: [
      "Improved fuel economy",
      "Enhanced safety and traction",
      "Extended tire life",
      "Smoother ride quality",
      "Better handling",
    ],
    faqs: [
      {
        question: "How often should tires be rotated?",
        answer:
          "We recommend tire rotation every 5,000-8,000 miles or with every other oil change to ensure even tire wear and maximize tire life.",
      },
      {
        question: "When do I need wheel alignment?",
        answer:
          "Signs include uneven tire wear, vehicle pulling to one side, or steering wheel vibration. We recommend alignment checks annually or after hitting potholes or curbs.",
      },
      {
        question: "Do you offer tire warranties?",
        answer:
          "Yes, we offer various tire warranties including road hazard protection, mileage warranties, and manufacturer defect coverage depending on the tire brand.",
      },
    ],
  },
  {
    id: "ac-service",
    title: "AC System Repair",
    description:
      "Air conditioning system diagnostics, refrigerant recharge, and component replacement.",
    fullDescription:
      "Stay comfortable year-round with our comprehensive AC system services. We diagnose and repair all AC system components including compressors, condensers, evaporators, and refrigerant leaks. Our technicians are EPA-certified for proper refrigerant handling.",
    icon: "snowflake",
    priceRange: "From $95",
    estimatedTime: "1-4 hours",
    category: "Climate Control",
    features: [
      "Complete AC system diagnostics",
      "Refrigerant recharge",
      "Leak detection and repair",
      "Compressor replacement",
      "Condenser service",
      "Cabin air filter replacement",
    ],
    benefits: [
      "Optimal cooling performance",
      "Improved air quality",
      "Extended system life",
      "Energy efficiency",
      "Comfort in all weather",
    ],
    faqs: [
      {
        question: "Why is my AC not cooling properly?",
        answer:
          "Common causes include low refrigerant, refrigerant leaks, faulty compressor, clogged condenser, or electrical issues. Our diagnostic service will identify the exact problem.",
      },
      {
        question: "How often should AC refrigerant be recharged?",
        answer:
          "A properly functioning AC system shouldn't need regular recharging. If refrigerant is low, there's likely a leak that needs repair first.",
      },
      {
        question: "Can you service both R-134a and R-1234yf systems?",
        answer:
          "Yes, we're equipped to service all automotive refrigerant types and our technicians are EPA-certified for proper handling and disposal.",
      },
    ],
  },
  {
    id: "transmission-service",
    title: "Transmission Service",
    description:
      "Transmission fluid changes, repairs, and complete transmission overhauls by experts.",
    fullDescription:
      "Keep your transmission running smoothly with our expert transmission services. From routine fluid changes to complete rebuilds, our experienced technicians handle all types of transmissions including manual, automatic, and CVT systems.",
    icon: "settings",
    priceRange: "From $200",
    estimatedTime: "2-8 hours",
    category: "Drivetrain",
    features: [
      "Transmission fluid service",
      "Filter replacement",
      "Leak repair",
      "Transmission diagnostics",
      "Complete rebuilds",
      "CVT service",
    ],
    benefits: [
      "Smooth shifting",
      "Extended transmission life",
      "Improved fuel economy",
      "Prevented costly repairs",
      "Enhanced performance",
    ],
    faqs: [
      {
        question: "How often should transmission fluid be changed?",
        answer:
          "Most manufacturers recommend transmission service every 30,000-60,000 miles, but severe driving conditions may require more frequent service.",
      },
      {
        question: "What are signs of transmission problems?",
        answer:
          "Warning signs include rough or delayed shifting, slipping gears, unusual noises, fluid leaks, or burning smells. Early service can prevent major repairs.",
      },
      {
        question: "Do you service all transmission types?",
        answer:
          "Yes, we service manual transmissions, automatic transmissions, and continuously variable transmissions (CVT) for all makes and models.",
      },
    ],
  },
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find((service) => service.id === id);
};

export const getServicesByCategory = (category: string): Service[] => {
  return services.filter((service) => service.category === category);
};
