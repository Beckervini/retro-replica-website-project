
import React from 'react';
import SkillCard from './SkillCard';

const Skills = () => {
  const skills = [
    // Linha 1
    { name: 'Java', category: 'Backend', level: 'Avançado' },
    { name: 'Spring Boot', category: 'Framework', level: 'Avançado' },
    { name: '.NET Core', category: 'Backend', level: 'Intermediário' },
    
    // Linha 2
    { name: 'Python', category: 'Backend', level: 'Intermediário' },
    { name: 'SQL Server', category: 'Database', level: 'Avançado' },
    { name: 'PostgreSQL', category: 'Database', level: 'Intermediário' },
    
    // Linha 3
    { name: 'Microsoft Azure', category: 'Cloud', level: 'Intermediário' },
    { name: 'RabbitMQ', category: 'Messaging', level: 'Intermediário' },
    { name: 'JWT', category: 'Security', level: 'Avançado' },
    
    // Linha 4
    { name: 'HTML/CSS', category: 'Frontend', level: 'Intermediário' },
    { name: 'Git', category: 'Version Control', level: 'Avançado' },
    { name: 'Entity Framework', category: 'ORM', level: 'Avançado' },
  ];

  return (
    <section id="skills" className="py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-700 mb-4 relative inline-block">
            Competências Técnicas
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mt-2"></div>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
