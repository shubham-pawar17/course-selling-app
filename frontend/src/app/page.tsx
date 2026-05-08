import CTA from "../components/CTA";
import FeatureCard from "../components/WhyCard";
import FeaturedCohorts from "../components/FeaturedCohorts";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Stats from "../components/Stats";
import WhyCard from "../components/WhyCard";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <WhyCard/>
      <FeaturedCohorts />
      <CTA />
      <Footer />
    </main>
  );
}