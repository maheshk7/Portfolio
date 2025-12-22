import React from 'react';
import { skills } from '../data/mock';
import { Code2, Server, Database, Wrench } from 'lucide-react';
import { Progress } from './ui/progress';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code2,
      skills: skills.frontend,
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      title: 'Backend',
      icon: Server,
      skills: skills.backend,
      color: 'from-emerald-500/20 to-teal-500/20'
    },
    {
      title: 'Database',
      icon: Database,
      skills: skills.database,
      color: 'from-orange-500/20 to-amber-500/20'
    }
  ];

  return (
    <section id="skills" className="py-32 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="mb-20">
          <p className="text-white/40 text-sm tracking-[0.3em] uppercase mb-4">My Skills</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Technical expertise
            <br />
            <span className="text-white/60">& proficiency</span>
          </h2>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 group"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${category.color}`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-white font-semibold text-xl">{category.title}</h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white/70 text-sm">{skill.name}</span>
                        <span className="text-white/40 text-xs">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-white/50 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tools & Technologies */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20">
              <Wrench className="text-white" size={24} />
            </div>
            <h3 className="text-white font-semibold text-xl">Tools & Technologies</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.tools.map((tool, index) => (
              <span
                key={index}
                className="px-5 py-2.5 bg-white/10 text-white/70 rounded-full text-sm hover:bg-white/20 hover:text-white transition-all cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
