import React, { useState } from "react";
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
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="App min-h-screen relative">
      {/* Floating particles background */}
      <FloatingParticles />

      <Header onOpenChat={() => setIsChatOpen(true)} />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
      </main>
      <Footer />

      {/* Chatbot */}
      <Chatbot isOpen={isChatOpen} onToggle={() => setIsChatOpen(prev => !prev)} />

      <Toaster />
    </div>
  );
}

export default App;
