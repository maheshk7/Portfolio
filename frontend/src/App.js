import React from "react";
import "./App.css";
import { Toaster } from "./components/ui/toaster";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import Footer from "./components/Footer";
import FloatingParticles from "./components/FloatingParticles";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <div className="App min-h-screen relative">
      {/* Floating particles background */}
      <FloatingParticles />
      
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
      </main>
      <Footer />
      
      {/* Chatbot */}
      <Chatbot />
      
      <Toaster />
    </div>
  );
}

export default App;
