import React from 'react';
import { education } from '../data/mock';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const EducationSection = () => {
  const getIcon = (degree) => {
    if (degree.includes('B.Tech')) return GraduationCap;
    if (degree.includes('Intermediate')) return BookOpen;
    return Award;
  };

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#173F5F] mb-4">
            Education
          </h2>
          <div className="h-1 w-16 bg-[#173F5F] mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            My academic background and qualifications
          </p>
        </div>

        {/* Education cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((edu, index) => {
            const Icon = getIcon(edu.degree);
            return (
              <div
                key={index}
                className="bg-[#EEEEEE] rounded-lg p-8 card-hover"
              >
                {/* Icon */}
                <div className="p-4 bg-[#173F5F] rounded-lg w-fit mb-6">
                  <Icon className="text-white" size={24} />
                </div>

                {/* Content */}
                <h3 className="text-[#173F5F] font-bold text-lg mb-2">{edu.degree}</h3>
                <p className="text-gray-600 mb-4">{edu.institution}</p>
                
                <div className="pt-4 border-t border-gray-300">
                  <p className="text-gray-500 text-sm mb-3">{edu.board}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-xs uppercase tracking-wider">Aggregate</span>
                    <span className="text-[#173F5F] font-bold text-lg">{edu.aggregate}</span>
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
