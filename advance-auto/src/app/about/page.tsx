import type { Metadata } from "next";

import AboutHero from "@/components/about/AboutHero";
import AboutOwner from "@/components/about/AboutOwner";
import AboutValues from "@/components/about/AboutValues";

export const metadata: Metadata = {
  title: "About Us | Advance Auto",
  description:
    "Learn about our experienced team and our commitment to quality automotive service",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <AboutOwner />
      <AboutValues />
    </main>
  );
}
