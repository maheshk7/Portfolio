import React from 'react';
import { education } from '../data/mock';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const EducationSection = () => {
  const getIcon = (degree) => {
    if (degree.includes('B.Tech')) return GraduationCap;
    if (degree.includes('Intermediate')) return BookOpen;
    return Award;
  };

  const getGradient = (index) => {
    const gradients = [
      'from-blue-500 to-cyan-500',
      'from-purple-500 to-pink-500',
      'from-emerald-500 to-teal-500'
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-float" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6 rounded-full" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            My academic background and qualifications
          </p>
        </div>

        {/* Education cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((edu, index) => {
            const Icon = getIcon(edu.degree);
            const gradient = getGradient(index);
            return (
              <div
                key={index}
                className={`glass rounded-2xl overflow-hidden card-3d animate-fade-in-up stagger-${index + 1}`}
              >
                {/* Gradient header */}
                <div className={`p-6 bg-gradient-to-r ${gradient}`}>
                  <Icon className="text-white mb-4" size={32} />
                  <h3 className="text-white font-bold text-lg">{edu.degree}</h3>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-700 font-medium mb-2">{edu.institution}</p>
                  <p className="text-gray-500 text-sm mb-4">{edu.board}</p>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-xs uppercase tracking-wider">Aggregate</span>
                      <span className="text-[#0a1628] font-bold text-lg">{edu.aggregate}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
