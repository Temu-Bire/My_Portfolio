import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";

// layout.tsx already sets the page background, text color and the flex column on <body>,
// so this page only needs the three parts: navbar, main content, footer.
export default function Home() {
  return (
    <>
      <Navbar />

      {/* id="main" is the target of the "Skip to content" link in layout.tsx */}
      <main id="main" className="container-page flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  );
}