import React from 'react';
import { education } from '../data/mock';
import { GraduationCap, Award } from 'lucide-react';

const EducationSection = () => {
  const getIcon = (degree) => {
    if (degree.includes('B.Tech')) return GraduationCap;
    return Award;
  };

  return (
    <section id="education" className="py-32 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="mb-20">
          <p className="text-white/40 text-sm tracking-[0.3em] uppercase mb-4">Education</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Academic background
            <br />
            <span className="text-white/60">& qualifications</span>
          </h2>
        </div>

        {/* Education cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((edu, index) => {
            const Icon = getIcon(edu.degree);
            return (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:border-white/20"
              >
                {/* Icon */}
                <div className="p-4 bg-white/10 rounded-2xl w-fit mb-6 group-hover:bg-white/20 transition-colors">
                  <Icon className="text-white" size={24} />
                </div>

                {/* Content */}
                <h3 className="text-white font-semibold text-lg mb-2">{edu.degree}</h3>
                <p className="text-white/60 mb-4">{edu.institution}</p>
                
                <div className="pt-4 border-t border-white/10">
                  <p className="text-white/40 text-sm mb-1">{edu.board}</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-white/40 text-xs uppercase tracking-wider">Aggregate</span>
                    <span className="text-white font-semibold">{edu.aggregate}</span>
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
