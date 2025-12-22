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
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4 animate-fade-in-up">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6 rounded-full" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Know more about my background and expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left side - Summary */}
          <div className="space-y-6">
            <div className="glass rounded-2xl p-8 card-3d">
              <h3 className="text-xl font-semibold text-[#0a1628] mb-4">Professional Summary</h3>
              <p className="text-gray-600 leading-relaxed">
                {summary}
              </p>
            </div>

            {/* Personal info cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass rounded-xl p-6 card-lift">
                <Globe className="text-blue-500 mb-3" size={24} />
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Languages</p>
                <p className="text-[#0a1628] font-semibold">
                  {personalDetails.languages.join(', ')}
                </p>
              </div>
              <div className="glass rounded-xl p-6 card-lift">
                <Calendar className="text-blue-500 mb-3" size={24} />
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Nationality</p>
                <p className="text-[#0a1628] font-semibold">{personalDetails.nationality}</p>
              </div>
            </div>
          </div>

          {/* Right side - Strengths */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-[#0a1628] mb-6">Core Strengths</h3>
            {strengths.map((strength, index) => {
              const Icon = iconMap[strength.title] || Target;
              return (
                <div
                  key={index}
                  className={`glass rounded-xl p-6 card-lift flex items-start gap-4 animate-fade-in-right stagger-${index + 1}`}
                >
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl shadow-lg shadow-blue-500/25">
                    <Icon className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-[#0a1628] font-semibold text-lg mb-1">
                      {strength.title}
                    </h4>
                    <p className="text-gray-600">{strength.description}</p>
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
