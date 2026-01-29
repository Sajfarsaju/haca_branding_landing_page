import Hero from "@/components/Hero";
import ProgramAudience from "@/components/ProgramAudience";
import Modules from "@/components/Modules";
import Features from "@/components/Features";
import Flowchart from "@/components/Flowchart";
import CTA from "@/components/CTA";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import PopupForm from "@/components/PopupForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full overflow-x-hidden">
      <Hero />
      <ProgramAudience />
      <Modules />
      <Features />
      <Flowchart />
      <CTA />
      <Stats />
      <Testimonials />
      <Footer />
      {/* <PopupForm /> */}
    </main>
  );
}
