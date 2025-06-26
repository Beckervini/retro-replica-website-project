
import React from 'react';
import SkillCard from './SkillCard';

const Skills = () => {
  const skills = [
    { name: 'Java', category: 'Backend', level: 'Avançado' },
    { name: 'Spring Boot', category: 'Framework', level: 'Avançado' },
    { name: '.NET Core', category: 'Backend', level: 'Intermediário' },
    { name: 'Python', category: 'Backend', level: 'Intermediário' },
    { name: 'SQL Server', category: 'Database', level: 'Avançado' },
    { name: 'PostgreSQL', category: 'Database', level: 'Intermediário' },
    { name: 'Microsoft Azure', category: 'Cloud', level: 'Intermediário' },
    { name: 'RabbitMQ', category: 'Messaging', level: 'Intermediário' },
    { name: 'JWT', category: 'Security', level: 'Avançado' },
    { name: 'HTML/CSS', category: 'Frontend', level: 'Intermediário' },
    { name: 'Git', category: 'Version Control', level: 'Avançado' },
    { name: 'Entity Framework', category: 'ORM', level: 'Avançado' },
  ];

  return (
    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Competências Técnicas
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
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
