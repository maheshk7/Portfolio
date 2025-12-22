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
    <section id="about" className="py-20 bg-[#EEEEEE]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#173F5F] mb-4">
            About Me
          </h2>
          <div className="h-1 w-16 bg-[#173F5F] mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Know more about my background and expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left side - Summary */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-semibold text-[#173F5F] mb-4">Professional Summary</h3>
              <p className="text-gray-600 leading-relaxed">
                {summary}
              </p>
            </div>

            {/* Personal info cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <Globe className="text-[#173F5F] mb-3" size={24} />
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Languages</p>
                <p className="text-[#173F5F] font-semibold">
                  {personalDetails.languages.join(', ')}
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <Calendar className="text-[#173F5F] mb-3" size={24} />
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Nationality</p>
                <p className="text-[#173F5F] font-semibold">{personalDetails.nationality}</p>
              </div>
            </div>
          </div>

          {/* Right side - Strengths */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-[#173F5F] mb-6">Core Strengths</h3>
            {strengths.map((strength, index) => {
              const Icon = iconMap[strength.title] || Target;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-md card-hover flex items-start gap-4"
                >
                  <div className="p-3 bg-[#173F5F] rounded-lg">
                    <Icon className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-[#173F5F] font-semibold text-lg mb-1">
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
