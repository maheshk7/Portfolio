import React from 'react';
import { skills } from '../data/mock';
import { Code2, Server, Database, Wrench } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code2,
      skills: skills.frontend,
      color: 'bg-blue-500'
    },
    {
      title: 'Backend',
      icon: Server,
      skills: skills.backend,
      color: 'bg-emerald-500'
    },
    {
      title: 'Database',
      icon: Database,
      skills: skills.database,
      color: 'bg-orange-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#173F5F] mb-4">
            Technical Skills
          </h2>
          <div className="h-1 w-16 bg-[#173F5F] mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            My technical expertise and proficiency levels
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-[#EEEEEE] rounded-lg p-8 card-hover"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-4 rounded-lg ${category.color}`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-[#173F5F] font-bold text-xl">{category.title}</h3>
                </div>

                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-[#173F5F] font-semibold text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-300 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#173F5F] rounded-full transition-all duration-1000 ease-out"
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
        <div className="bg-[#173F5F] rounded-lg p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 rounded-lg bg-white/20">
              <Wrench className="text-white" size={24} />
            </div>
            <h3 className="text-white font-bold text-xl">Tools & Technologies</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.tools.map((tool, index) => (
              <span
                key={index}
                className="px-5 py-2.5 bg-white/10 text-white rounded-full text-sm hover:bg-white/20 transition-all cursor-default font-medium"
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
