import React from 'react';
import { experience } from '../data/mock';
import { Briefcase, ExternalLink, CheckCircle } from 'lucide-react';
import { Badge } from './ui/badge';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-[#EEEEEE]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#173F5F] mb-4">
            Work Experience
          </h2>
          <div className="h-1 w-16 bg-[#173F5F] mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey and key achievements
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#173F5F]/30 hidden md:block" />

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-8 top-8 w-4 h-4 bg-[#173F5F] rounded-full -translate-x-1/2 hidden md:block z-10 border-4 border-[#EEEEEE]" />

                {/* Card */}
                <div className="md:ml-20 bg-white rounded-lg p-8 shadow-md card-hover">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-[#173F5F] rounded-lg">
                          <Briefcase className="text-white" size={20} />
                        </div>
                        <h3 className="text-[#173F5F] font-bold text-xl">{exp.company}</h3>
                      </div>
                      <p className="text-gray-600 font-medium">{exp.role}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-[#173F5F] text-white hover:bg-[#173F5F]">
                        {exp.duration}
                      </Badge>
                      <Badge variant="outline" className="border-[#173F5F] text-[#173F5F]">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">{exp.description}</p>

                  {/* Projects */}
                  {exp.projects && exp.projects.length > 0 && (
                    <div className="mb-6">
                      <p className="text-[#173F5F] font-semibold uppercase tracking-wider text-sm mb-4">Key Projects</p>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {exp.projects.map((project, pIndex) => (
                          <div
                            key={pIndex}
                            className="bg-[#EEEEEE] rounded-lg p-5 hover:shadow-md transition-shadow"
                          >
                            <div className="flex items-center justify-between mb-3">
                              <h4 className="text-[#173F5F] font-semibold">{project.name}</h4>
                              {project.url && (
                                <a
                                  href={project.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[#173F5F] hover:text-[#173F5F]/70 transition-colors"
                                >
                                  <ExternalLink size={16} />
                                </a>
                              )}
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {project.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Achievements */}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <div>
                      <p className="text-[#173F5F] font-semibold uppercase tracking-wider text-sm mb-4">Key Contributions</p>
                      <div className="grid md:grid-cols-2 gap-3">
                        {exp.achievements.map((achievement, aIndex) => (
                          <div key={aIndex} className="flex items-start gap-3">
                            <CheckCircle className="text-[#173F5F] mt-0.5 flex-shrink-0" size={16} />
                            <span className="text-gray-600 text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
