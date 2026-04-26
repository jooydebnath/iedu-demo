import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import Features from "@/components/Features";
import Courses from "@/components/Courses";
import Books from "@/components/Books";
import FreeResources from "@/components/FreeResources";
import Teachers from "@/components/Teachers";
import Testimonials from "@/components/Testimonials";
import AboutCTA from "@/components/AboutCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-paper-100 text-body">
      <Navbar />
      <HeroSlider />
      <Features />
      <Courses />
      <Books />
      <FreeResources />
      <Teachers />
      <Testimonials />
      <AboutCTA />
      <Footer />
    </main>
  );
}
