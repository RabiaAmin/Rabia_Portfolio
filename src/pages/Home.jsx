import React, { Suspense, lazy } from "react";
import ThemeToggle from "../component/ThemeToggle";
import Threads from "../component/ThreadsBackground";
import NavBar from "../component/NavBar";
import Footer from "./Footer";

// Lazy load heavy components
const HeroSection = lazy(() => import("./HeroSection"));
const AboutSection = lazy(() => import("./AboutSection"));
const SkillsSection = lazy(() => import("./SkillsSection"));
const Projects = lazy(() => import("../pages/Projects"));
const ContactSection = lazy(() => import("./ContactSection"));

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <Threads amplitude={3} distance={1.1} enableMouseInteraction={false} />
      <NavBar />

      <Suspense fallback={<div className=" bg-transparent text-center mt-10">Loading content...</div>}>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <Projects />
        <ContactSection />
      </Suspense>

      <Footer />
    </div>
  );
}

export default Home;
