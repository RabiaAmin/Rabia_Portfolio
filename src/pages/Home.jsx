import React, { Suspense, lazy,} from "react";
import ThemeToggle from "../component/ThemeToggle";

import NavBar from "../component/NavBar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";


const Threads = lazy(() => import("../component/ThreadsBackground"));
const SkillsSection = lazy(() => import("./SkillsSection"));
const Projects = lazy(() => import("../pages/Projects"));


function Home() {



  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
    <Suspense fallback={null}>
  <Threads amplitude={3} distance={1.1} enableMouseInteraction={false} />
</Suspense>
      <NavBar />

  <HeroSection />


  <AboutSection />


<Suspense fallback={null}>
  <SkillsSection />
  <Projects />
</Suspense>


  <ContactSection />


      <Footer />
    </div>
  );
}

export default Home;
