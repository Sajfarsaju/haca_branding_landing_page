import { Suspense, lazy } from 'react';
import Hero from "@/components/Hero";
import ProgramAudience from "@/components/ProgramAudience";
import Modules from "@/components/Modules";
import Features from "@/components/Features";
import Flowchart from "@/components/Flowchart";
import CTA from "@/components/CTA";

// Lazy load below-fold sections for better initial page load
const WorkShowcase = lazy(() => import("@/components/WorkShowcase"));
const Review = lazy(() => import("@/components/review"));
const FaqSection = lazy(() => import("@/components/FaqSection"));
const Footer = lazy(() => import("@/components/Footer"));

// Simple loading fallback
const LoadingPlaceholder = () => (
  <div className="w-full h-screen bg-black flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-white/20 border-t-white/80 rounded-full animate-spin" />
  </div>
);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full overflow-x-hidden">
      <Hero />
      <ProgramAudience />
      <Modules />
      <Features />
      <Flowchart />
      <CTA />

      <Suspense fallback={<LoadingPlaceholder />}>
        <Review />
      </Suspense>

      <Suspense fallback={<LoadingPlaceholder />}>
        <WorkShowcase />
      </Suspense>

      <Suspense fallback={<LoadingPlaceholder />}>
        <FaqSection />
      </Suspense>

      <Suspense fallback={<LoadingPlaceholder />}>
        <Footer />
      </Suspense>
    </main>
  );
}
