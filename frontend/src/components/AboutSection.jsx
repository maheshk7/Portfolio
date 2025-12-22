import React from 'react';
import { summary, strengths, personalDetails } from '../data/mock';
import { Target, Zap, Users, Sparkles, Globe, Calendar } from 'lucide-react';

const iconMap = {
  'Problem Solving': Target,
  'Quick Learner': Zap,
  'Team Collaboration': Users,
  'Adaptability': Sparkles
};

const AboutSection = () => {
  return (
    <section id="about" className="py-32 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-20">
          <p className="text-white/40 text-sm tracking-[0.3em] uppercase mb-4">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Passionate about building
            <br />
            <span className="text-white/60">digital experiences</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left side - Summary */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <p className="text-white/70 text-lg leading-relaxed">
                {summary}
              </p>
            </div>

            {/* Personal info cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <Globe className="text-white/40 mb-3" size={20} />
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Languages</p>
                <p className="text-white font-medium">
                  {personalDetails.languages.join(', ')}
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <Calendar className="text-white/40 mb-3" size={20} />
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Nationality</p>
                <p className="text-white font-medium">{personalDetails.nationality}</p>
              </div>
            </div>
          </div>

          {/* Right side - Strengths */}
          <div className="space-y-4">
            <p className="text-white/40 text-sm tracking-wider uppercase mb-6">Core Strengths</p>
            {strengths.map((strength, index) => {
              const Icon = iconMap[strength.title] || Target;
              return (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-white/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
                      <Icon className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-1">
                        {strength.title}
                      </h3>
                      <p className="text-white/50">{strength.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
