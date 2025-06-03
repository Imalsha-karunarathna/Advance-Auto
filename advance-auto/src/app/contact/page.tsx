import ContactForm from "@/components/contactUs/ContactForm";
import ContactHero from "@/components/contactUs/ContactHero";
import ContactMap from "@/components/contactUs/ContactMap";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Advance Auto",
  description:
    "Get in touch with our team for all your automotive service needs",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactHero />
      <ContactForm />
      <ContactMap />
    </main>
  );
}
