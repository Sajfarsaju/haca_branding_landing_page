import Hero from "@/components/Hero";
import ProgramAudience from "@/components/ProgramAudience";
import Modules from "@/components/Modules";
import Features from "@/components/Features";
import Flowchart from "@/components/Flowchart";
import WorkShowcase from "@/components/WorkShowcase";
import Review from "@/components/review";
import FaqSection from "@/components/FaqSection";
import CTA from "@/components/CTA";
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
      <WorkShowcase />
      <Review />
      <FaqSection />
      <CTA />
      <Footer />
      {/* <PopupForm /> */}
    </main>
  );
}
