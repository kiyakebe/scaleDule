import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScreenShots from "@/components/ScreenShots";
import Testimonial from "@/components/Testimonial";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <Features />
      <ScreenShots />
      <Testimonial />
      <DownloadCTA />
      <Footer />
    </div>
  );
}
