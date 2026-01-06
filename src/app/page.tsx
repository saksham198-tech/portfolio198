import About from "@/components/site/About";
import Certifications from "@/components/site/Certifications";
import Contact from "@/components/site/Contact";
import Education from "@/components/site/Education";
import Experience from "@/components/site/Experience";
import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Projects from "@/components/site/Projects";
import Skills from "@/components/site/Skills";
import Stats from "@/components/site/Stats";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Stats />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
