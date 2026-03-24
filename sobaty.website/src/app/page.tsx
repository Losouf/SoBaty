import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Pricing from "@/components/sections/Pricing";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
      {/* Other sections like Testimonials, etc. will go here */}
    </>
  );
}
