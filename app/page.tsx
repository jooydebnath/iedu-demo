import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import QuickAccess from "@/components/QuickAccess";
import Features from "@/components/Features";
import Courses from "@/components/Courses";
import Books from "@/components/Books";
import FreeResources from "@/components/FreeResources";
import FreeVideos from "@/components/FreeVideos";
import Teachers from "@/components/Teachers";
import StudentReviews from "@/components/StudentReviews";
import Achievements from "@/components/Achievements";
import AppDownload from "@/components/AppDownload";
import AboutCTA from "@/components/AboutCTA";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-paper-100 text-body">
      <Navbar />
      <HeroSlider />
      <QuickAccess />
      <Features />
      <Courses />
      <Books />
      <FreeResources />
      <FreeVideos />
      <Teachers />
      <Achievements />
      <StudentReviews />
      <AppDownload />
      <AboutCTA />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
