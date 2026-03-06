import CoursesPreview from "../components/CoursesPreview";
import CTA from "../components/CTA";
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
      <CoursesPreview />
      <CTA />
      <Footer />
    </main>
  );
}