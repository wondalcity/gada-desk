import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/Hero";
import HeadlineBand from "@/components/sections/HeadlineBand";
import FeatureCards from "@/components/sections/FeatureCards";
import FeatureGallery from "@/components/sections/FeatureGallery";
import BannerSection from "@/components/sections/BannerSection";
import FeatureDetail from "@/components/sections/FeatureDetail";
import ProcessSection from "@/components/sections/ProcessSection";
import FaqSection from "@/components/sections/FaqSection";
import FinalSection from "@/components/sections/FinalSection";
import MoreServices from "@/components/sections/MoreServices";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div id="top">
      <Navigation />
      <main className="pt-[60px]">
        <Hero />
        <HeadlineBand />
        <FeatureCards />
        <FeatureGallery />
        <BannerSection />
        <FeatureDetail />
        <ProcessSection />
        <FaqSection />
        <FinalSection />
        <MoreServices />
      </main>
      <Footer />
    </div>
  );
}
