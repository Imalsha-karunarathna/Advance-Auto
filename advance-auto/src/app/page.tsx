import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import OurServices from "@/components/OurServices";
import QuickTestimonials from "@/components/QuickTestimonials";
import ReadyTobook from "@/components/ReadyToBook";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <OurServices />
      <WhyChooseUs />
      <QuickTestimonials />
      <ReadyTobook />
    </>
  );
}
