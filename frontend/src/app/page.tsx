import CTA from "../components/CTA";
import FeatureCard from "../components/FeatureCard";
import FeaturedCohorts from "../components/FeaturedCohorts";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Stats from "../components/Stats";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <FeatureCard
        feature={{
          title: "Learn by Doing",
          description: "Hands-on projects and real-world experience",
          active: true,
        }}
      />
      <FeaturedCohorts />
      <CTA />
      <Footer />
    </main>
  );
}