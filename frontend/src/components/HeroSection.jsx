import React, { useState, useEffect } from 'react';
import { personalInfo, heroSlides } from '../data/mock';
import { ChevronLeft, ChevronRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="home" className="relative min-h-screen pt-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/90 via-[#1e3a5f]/80 to-[#0a1628]/90" />
          </div>
        ))}
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 right-20 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center min-h-[calc(100vh-4rem)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-white space-y-6">
              <p className="text-sm tracking-[0.2em] uppercase text-blue-300 font-medium animate-fade-in-up">
                Welcome to my portfolio
              </p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in-up stagger-1">
                <span className="text-gradient">{personalInfo.name}</span>
              </h1>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-fade-in-up stagger-2" />
              <h2 className="text-xl md:text-2xl font-light text-white/90 animate-fade-in-up stagger-2">
                {personalInfo.title}
              </h2>
              <p className="text-lg text-white/70 max-w-lg leading-relaxed animate-fade-in-up stagger-3">
                {personalInfo.tagline}
              </p>

              {/* Slide Caption */}
              <div className="glass rounded-xl p-6 max-w-md animate-fade-in-up stagger-4 card-glow">
                <h3 className="text-xl font-semibold mb-2 text-[#0a1628]">
                  {heroSlides[currentSlide].caption}
                </h3>
                <p className="text-[#0a1628]/70">
                  {heroSlides[currentSlide].description}
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 pt-4 animate-fade-in-up stagger-5">
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass rounded-full hover:bg-white/30 transition-all icon-bounce"
                >
                  <Github className="text-[#0a1628]" size={20} />
                </a>
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass rounded-full hover:bg-white/30 transition-all icon-bounce"
                >
                  <Linkedin className="text-[#0a1628]" size={20} />
                </a>
                <a
                  href={personalInfo.social.email}
                  className="p-3 glass rounded-full hover:bg-white/30 transition-all icon-bounce"
                >
                  <Mail className="text-[#0a1628]" size={20} />
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="hidden lg:flex justify-center animate-fade-in-right">
              <div className="relative">
                {/* Decorative rings */}
                <div className="absolute -inset-4 border-2 border-blue-500/30 rounded-full animate-pulse-glow" />
                <div className="absolute -inset-8 border border-cyan-500/20 rounded-full animate-rotate-slow" />
                
                <div className="relative w-80 h-96 rounded-2xl overflow-hidden shadow-2xl card-3d">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/50 to-transparent" />
                </div>
                
                {/* Experience Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-6 py-4 shadow-xl animate-bounce-subtle">
                  <p className="text-3xl font-bold text-gradient">6+</p>
                  <p className="text-sm font-medium text-[#0a1628]">Years Exp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 glass rounded-full text-[#0a1628] transition-all hover:scale-110 icon-bounce"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 glass rounded-full text-[#0a1628] transition-all hover:scale-110 icon-bounce"
      >
        <ChevronRight size={24} />
      </button>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-blue-500 w-8'
                : 'bg-white/50 w-2 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
