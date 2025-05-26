import React from "react";
import ThemeToggle from "../component/ThemeToggle";
import Threads from "../component/ThreadsBackground";
import NavBar from "./NavBar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import Projects from "../component/Projects";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden ">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effeect */}

      <Threads amplitude={3} distance={1.1} enableMouseInteraction={false} />

      {/* Navbar */}
      <NavBar />
      {/* main content */}
      <HeroSection/>
      <AboutSection/>
      <SkillsSection/>
      <Projects/>
      <ContactSection/>
      {/* Footer*/}
      <Footer/> 
    </div>
  );
}

export default Home;
