import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MissionSection from "./components/MissionSection";
import VideoSection from "./components/VideoSection";
import VisionSection from "./components/VisionSection";
import WhoWeServe from "./components/WhoWeServe";
import GridLayout from "./components/GridLayout";
import BrandSection from "./components/BrandSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <MissionSection />
      <VideoSection />
      <WhoWeServe />
      <VisionSection />
      <GridLayout />
      <BrandSection />
      <Footer />
    </div>
  );
}
