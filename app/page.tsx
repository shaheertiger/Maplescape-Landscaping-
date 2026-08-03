import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SurfaceWrapper from "@/components/SurfaceWrapper";
import About from "@/components/About";
import Services from "@/components/Services";
import Decks from "@/components/Decks";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Reviews from "@/components/Reviews";
import BannerCTA from "@/components/BannerCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SurfaceWrapper>
        <About />
        <Services />
        <Decks />
      </SurfaceWrapper>
      <Process />
      <Portfolio />
      <Reviews />
      <BannerCTA />
      <Footer />
    </main>
  );
}
