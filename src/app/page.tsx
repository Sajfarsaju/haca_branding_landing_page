import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import PopupForm from "@/components/PopupForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <Hero />
      <Features />
      <Stats />
      <Testimonials />
      <CTA />
      <Footer />
      {/* <PopupForm /> */}
    </main>
  );
}
