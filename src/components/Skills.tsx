
import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'JavaScript', level: 95 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'Git', level: 80 },
  ];

  return (
    <section id="skills" className="py-16 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-700 mb-4 relative inline-block">
            Habilidades Técnicas
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mt-2"></div>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50">
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold text-slate-700">{skill.name}</span>
                <span className="text-sm text-slate-600">{skill.level}%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
