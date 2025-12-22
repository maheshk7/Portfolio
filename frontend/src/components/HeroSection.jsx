import React, { useState, useEffect } from 'react';
import { personalInfo, heroSlides } from '../data/mock';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
    <section id="home" className="relative h-screen pt-16 overflow-hidden">
      {/* Carousel */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-[#173F5F]/70" />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-white">
              <p className="text-sm tracking-[0.2em] uppercase mb-4 text-white/80 font-medium">
                Welcome to my portfolio
              </p>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                {personalInfo.name}
              </h1>
              <div className="h-1 w-20 bg-white mb-6" />
              <h2 className="text-xl md:text-2xl font-light mb-6 text-white/90">
                {personalInfo.title}
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-lg leading-relaxed">
                {personalInfo.tagline}
              </p>

              {/* Slide Caption */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-md">
                <h3 className="text-xl font-semibold mb-2">
                  {heroSlides[currentSlide].caption}
                </h3>
                <p className="text-white/80">
                  {heroSlides[currentSlide].description}
                </p>
              </div>
            </div>

            {/* Profile Image */}
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="w-80 h-96 rounded-lg overflow-hidden shadow-2xl border-4 border-white/20">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Experience Badge */}
                <div className="absolute -bottom-4 -right-4 bg-white text-[#173F5F] px-6 py-4 rounded-lg shadow-xl">
                  <p className="text-3xl font-bold">6+</p>
                  <p className="text-sm font-medium">Years Exp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
      >
        <ChevronRight size={24} />
      </button>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
