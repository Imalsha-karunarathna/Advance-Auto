import ServiceCategory from "@/components/services/service-category";
import ServiceHero from "@/components/services/service-hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Advance Auto",
  description:
    "Comprehensive automotive services including logbook servicing, engine rebuilds, and 4WD maintenance",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <ServiceHero />

      <div className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-30">
          <ServiceCategory
            id="logbook"
            title="Logbook Servicing"
            description="Keep your warranty intact with our comprehensive manufacturer-specified logbook services. Our qualified technicians follow all requirements while using quality parts and fluids."
            image="/assets/logbook-services.jpg"
            imageAlt="Mechanic performing logbook service"
            services={[
              "Change engine oil and filter",
              "Check and replace air filters and fuel filters",
              "Check and replace spark plugs",
              "Inspect and adjust brakes",
              "Inspect and adjust suspension and steering",
              "Check and top up all fluid levels",
              "Inspect battery and charging system",
              "Inspect exhaust system",
              "Inspect and rotate / replace tyres",
              "Check headlights and brake lights",
              "Check and replace timing belt (if applicable)",
              "Other items as noted in the vehicle service manual",
            ]}
          />

          <ServiceCategory
            id="transmission"
            title="Transmission Repair & Maintenance"
            description="Your vehicle's transmission is crucial for power delivery and fuel efficiency. Our expert technicians can diagnose and repair all transmission issues to keep your vehicle running smoothly."
            image="/assets/transmission.jpg"
            imageAlt="Transmission repair service"
            isReversed={true}
            services={[
              "Transmission fluid drain and refill",
              "Transmission filter and gasket replacement",
              "General transmission system inspections",
              "General transmission repair",
            ]}
          />

          <ServiceCategory
            id="engine"
            title="Engine Servicing & Rebuild"
            description="From routine maintenance to complete rebuilds, our experienced technicians can handle all your engine needs with precision and care."
            image="/assets/engine-repair.jpg"
            imageAlt="Engine servicing and rebuild"
            services={[
              "Replace spark plugs and wires/coil boots",
              "Set ignition timing (if applicable)",
              "Replace engine air filter",
              "Replace fuel filter (if applicable)",
              "Clean the throttle body (if applicable)",
              "Perform fuel system clean",
              "Replace major wear components such as rings, pistons, bearings, exhaust valves, timing chain or belt, etc (if applicable for engine rebuild)",
            ]}
          />

          <ServiceCategory
            id="4wd"
            title="4WD Servicing"
            description="Specialized service for your 4WD vehicle to ensure it performs at its best both on and off-road. Our technicians understand the unique requirements of 4WD systems."
            image="/assets/4wd-service.jpg"
            imageAlt="4WD vehicle being serviced"
            isReversed={true}
            services={[
              "Engine oil and oil filter change",
              "Inspect fuel filter, air filter, belts (external only) and braking system",
              "Check park brake and tyre pressure",
              "Check fuel system, gearbox and transmission, lights, suspension and wiper blades",
              "Top up all fluids, battery, brake, clutch, power steering, radiator and windscreen washers",
              "Midas Inspection and Safety Check",
            ]}
          />

          <ServiceCategory
            id="accessories"
            title="Accessories Fitting"
            description="Enhance your vehicle's functionality and appearance with our professional accessories fitting service. We ensure all accessories are installed correctly and safely."
            image="/assets/accessory-fitting.jpg"
            imageAlt="Vehicle accessories being fitted"
            services={[
              "Nudge bar and bull bar fitting",
              "Tow bar fitting",
              "Winch installation",
              "Side steps",
              "Sway bars installation",
              "4WD high grade springs and suspension installation",
              "Any other accessories installation for standard and 4WD vehicles",
            ]}
          />
        </div>
      </div>
    </main>
  );
}
