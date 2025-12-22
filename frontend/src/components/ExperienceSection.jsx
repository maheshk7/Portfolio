import React from 'react';
import { experience } from '../data/mock';
import { Briefcase, ExternalLink, CheckCircle } from 'lucide-react';
import { Badge } from './ui/badge';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-20">
          <p className="text-white/40 text-sm tracking-[0.3em] uppercase mb-4">Experience</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Professional journey
            <br />
            <span className="text-white/60">& achievements</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-white/10 hidden md:block" />

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-8 top-8 w-3 h-3 bg-white rounded-full -translate-x-1/2 hidden md:block z-10">
                  <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-25" />
                </div>

                {/* Card */}
                <div className="md:ml-20 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-white/10 rounded-xl">
                          <Briefcase className="text-white" size={20} />
                        </div>
                        <h3 className="text-white font-semibold text-xl">{exp.company}</h3>
                      </div>
                      <p className="text-white/70">{exp.role}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-white/20 text-white/70">
                        {exp.duration}
                      </Badge>
                      <Badge className="bg-white/10 text-white/70 hover:bg-white/20">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/50 mb-6 leading-relaxed">{exp.description}</p>

                  {/* Projects */}
                  {exp.projects && exp.projects.length > 0 && (
                    <div className="mb-6">
                      <p className="text-white/40 text-sm uppercase tracking-wider mb-4">Key Projects</p>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {exp.projects.map((project, pIndex) => (
                          <div
                            key={pIndex}
                            className="bg-white/5 rounded-2xl p-5 border border-white/5 hover:border-white/20 transition-all"
                          >
                            <div className="flex items-center justify-between mb-3">
                              <h4 className="text-white font-medium">{project.name}</h4>
                              {project.url && (
                                <a
                                  href={project.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-white/40 hover:text-white transition-colors"
                                >
                                  <ExternalLink size={16} />
                                </a>
                              )}
                            </div>
                            <p className="text-white/40 text-sm leading-relaxed">
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
                      <p className="text-white/40 text-sm uppercase tracking-wider mb-4">Key Contributions</p>
                      <div className="grid md:grid-cols-2 gap-3">
                        {exp.achievements.map((achievement, aIndex) => (
                          <div key={aIndex} className="flex items-start gap-3">
                            <CheckCircle className="text-white/40 mt-0.5 flex-shrink-0" size={16} />
                            <span className="text-white/60 text-sm">{achievement}</span>
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
