import React from "react";
import "./App.css";
import { Toaster } from "./components/ui/toaster";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App bg-black min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
