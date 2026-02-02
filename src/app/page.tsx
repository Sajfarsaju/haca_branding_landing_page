import WorkShowcase from "@/components/WorkShowcase";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import PopupForm from "@/components/PopupForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <WorkShowcase />
      <FaqSection />
      <Footer />
      {/* <PopupForm /> */}
    </main>
  );
}
