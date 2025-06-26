
import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'HTML5', category: 'Markup', level: 'Avançado' },
    { name: 'CSS3', category: 'Styling', level: 'Avançado' },
    { name: 'JavaScript', category: 'Programming', level: 'Avançado' },
    { name: 'React', category: 'Framework', level: 'Intermediário' },
    { name: 'TypeScript', category: 'Programming', level: 'Intermediário' },
    { name: 'Git', category: 'Version Control', level: 'Avançado' },
    { name: 'Tailwind CSS', category: 'Styling', level: 'Intermediário' },
    { name: 'Responsive Design', category: 'Design', level: 'Avançado' },
    { name: 'Node.js', category: 'Backend', level: 'Intermediário' },
    { name: 'Vite', category: 'Build Tools', level: 'Intermediário' },
    { name: 'API Integration', category: 'Development', level: 'Intermediário' },
    { name: 'Frontend Optimization', category: 'Performance', level: 'Intermediário' },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-shadow duration-300">
              <h3 className="font-bold text-slate-700 text-lg mb-2">{skill.name}</h3>
              <p className="text-blue-600 font-medium mb-3">{skill.category}</p>
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                skill.level === 'Avançado' 
                  ? 'bg-green-100 text-green-700 border border-green-200' 
                  : 'bg-yellow-100 text-yellow-700 border border-yellow-200'
              }`}>
                {skill.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
