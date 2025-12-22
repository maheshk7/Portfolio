import React from 'react';
import { experience } from '../data/mock';
import { Briefcase, ExternalLink, CheckCircle } from 'lucide-react';
import { Badge } from './ui/badge';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6 rounded-full" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey and key achievements
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-500 hidden md:block" />

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={exp.id} className={`relative animate-fade-in-up stagger-${index + 1}`}>
                {/* Timeline dot */}
                <div className="absolute left-8 top-8 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full -translate-x-1/2 hidden md:block z-10 animate-pulse-glow" />

                {/* Card */}
                <div className="md:ml-20 glass rounded-2xl p-8 card-3d">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg shadow-lg">
                          <Briefcase className="text-white" size={20} />
                        </div>
                        <h3 className="text-[#0a1628] font-bold text-xl">{exp.company}</h3>
                      </div>
                      <p className="text-gray-600 font-medium">{exp.role}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0">
                        {exp.duration}
                      </Badge>
                      <Badge variant="outline" className="border-blue-500 text-blue-600">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">{exp.description}</p>

                  {/* Projects */}
                  {exp.projects && exp.projects.length > 0 && (
                    <div className="mb-6">
                      <p className="text-[#0a1628] font-semibold uppercase tracking-wider text-sm mb-4">Key Projects</p>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {exp.projects.map((project, pIndex) => (
                          <div
                            key={pIndex}
                            className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-5 card-lift border border-blue-100"
                          >
                            <div className="flex items-center justify-between mb-3">
                              <h4 className="text-[#0a1628] font-semibold">{project.name}</h4>
                              {project.url && (
                                <a
                                  href={project.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-500 hover:text-blue-600 transition-colors icon-bounce"
                                  onClick={(e) => e.stopPropagation()}
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
                      <p className="text-[#0a1628] font-semibold uppercase tracking-wider text-sm mb-4">Key Contributions</p>
                      <div className="grid md:grid-cols-2 gap-3">
                        {exp.achievements.map((achievement, aIndex) => (
                          <div key={aIndex} className="flex items-start gap-3">
                            <CheckCircle className="text-blue-500 mt-0.5 flex-shrink-0" size={16} />
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
