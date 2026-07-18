import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import EngineeringFocus from "@/components/EngineeringFocus";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Highlights from "@/components/Highlights";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <EngineeringFocus />
      <Skills />
      <Experience />
      <Projects />
      <Highlights />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}