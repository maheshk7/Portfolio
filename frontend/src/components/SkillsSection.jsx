import React, { useState } from 'react';
import { skills, advancedSkills } from '../data/mock';
import { 
  Code2, Server, Database, Wrench, Cloud, CheckCircle, 
  Layout, Shield, Layers, Users, Sparkles, ChevronDown, ChevronUp 
} from 'lucide-react';

const iconMap = {
  Server: Server,
  Cloud: Cloud,
  Database: Database,
  CheckCircle: CheckCircle,
  Layout: Layout,
  Shield: Shield,
  Layers: Layers,
  Users: Users,
  Sparkles: Sparkles
};

const SkillsSection = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const basicSkillCategories = [
    {
      title: 'Frontend',
      icon: Code2,
      skills: skills.frontend,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Backend',
      icon: Server,
      skills: skills.backend,
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Database',
      icon: Database,
      skills: skills.database,
      gradient: 'from-orange-500 to-amber-500'
    }
  ];

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-float-slow" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6 rounded-full" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            My technical expertise and proficiency levels
          </p>
        </div>

        {/* Basic Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {basicSkillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`glass rounded-2xl p-8 card-3d animate-fade-in-up stagger-${index + 1}`}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${category.gradient} shadow-lg`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-[#0a1628] font-bold text-xl">{category.title}</h3>
                </div>

                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-blue-500 font-semibold text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${category.gradient} rounded-full progress-animated transition-all duration-1000 ease-out`}
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
        <div className="glass-dark rounded-2xl p-8 mb-16 card-glow">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg">
              <Wrench className="text-white" size={24} />
            </div>
            <h3 className="text-white font-bold text-xl">Tools & Technologies</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.tools.map((tool, index) => (
              <span
                key={index}
                className={`px-5 py-2.5 bg-white/10 text-white rounded-full text-sm hover:bg-white/20 transition-all cursor-default font-medium hover:scale-105 animate-fade-in-up stagger-${(index % 6) + 1}`}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Advanced Skills Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-[#0a1628] mb-2 text-center">
            Advanced <span className="text-gradient">Expertise</span>
          </h3>
          <p className="text-gray-600 text-center mb-8">Senior-level skills that set me apart</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {advancedSkills.map((skill, index) => {
            const Icon = iconMap[skill.icon] || Server;
            const isExpanded = expandedCard === skill.id;
            
            return (
              <div
                key={skill.id}
                className={`glass rounded-xl overflow-hidden card-lift cursor-pointer animate-fade-in-up stagger-${(index % 6) + 1}`}
                onClick={() => toggleCard(skill.id)}
              >
                <div className={`p-6 bg-gradient-to-r ${skill.color}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Icon className="text-white" size={24} />
                      <h4 className="text-white font-semibold">{skill.title}</h4>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="text-white" size={20} />
                    ) : (
                      <ChevronDown className="text-white" size={20} />
                    )}
                  </div>
                  <p className="text-white/80 text-sm mt-2">{skill.description}</p>
                </div>
                
                <div className={`transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-96 p-4' : 'max-h-0'}`}>
                  <div className="space-y-3">
                    {skill.items.map((item, itemIndex) => (
                      <div key={itemIndex}>
                        <p className="text-[#0a1628] font-medium text-sm mb-1">{item.category}</p>
                        <div className="flex flex-wrap gap-1">
                          {item.skills.map((s, sIndex) => (
                            <span
                              key={sIndex}
                              className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
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

export default SkillsSection;
