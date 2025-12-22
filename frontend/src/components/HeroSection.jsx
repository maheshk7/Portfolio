import React from 'react';
import { personalInfo, summary } from '../data/mock';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="text-left space-y-8">
            <div className="space-y-4">
              <p className="text-white/50 text-sm tracking-[0.3em] uppercase font-medium">
                Welcome to my portfolio
              </p>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                {personalInfo.name}
              </h1>
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-white/30" />
                <p className="text-xl md:text-2xl text-white/70 font-light">
                  {personalInfo.title}
                </p>
              </div>
            </div>

            <p className="text-white/50 text-lg leading-relaxed max-w-xl">
              {personalInfo.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-black hover:bg-white/90 px-8 py-6 rounded-full text-sm font-medium transition-all hover:scale-105"
              >
                Contact Me
              </Button>
              <Button
                onClick={() => {
                  const element = document.querySelector('#experience');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-6 rounded-full text-sm font-medium transition-all"
              >
                View Work
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-8">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
              >
                <Github size={20} />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={personalInfo.social.email}
                className="text-white/40 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Profile Image with Glass Card */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glass card background */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 transform rotate-6 scale-95" />
              <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 transform -rotate-3 scale-95" />
              
              {/* Main image container */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-3 shadow-2xl">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-72 h-80 md:w-80 md:h-96 object-cover rounded-2xl"
                />
                
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-3">
                  <p className="text-white font-bold text-lg">6+</p>
                  <p className="text-white/60 text-xs">Years Exp</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <button
            onClick={scrollToAbout}
            className="text-white/30 hover:text-white/60 transition-colors animate-bounce"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
