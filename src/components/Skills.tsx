
import React from 'react';
import SkillCard from './SkillCard';

const Skills = () => {
  const skills = [
    // Backend Technologies
    { name: 'Java', category: 'Backend', level: 'Avançado' },
    { name: 'Spring Boot', category: 'Framework', level: 'Avançado' },
    { name: '.NET Core', category: 'Backend', level: 'Intermediário' },
    { name: 'Python', category: 'Backend', level: 'Intermediário' },
    { name: 'Node.js', category: 'Backend', level: 'Intermediário' },
    
    // Database
    { name: 'SQL Server', category: 'Database', level: 'Avançado' },
    { name: 'PostgreSQL', category: 'Database', level: 'Intermediário' },
    { name: 'Entity Framework', category: 'ORM', level: 'Avançado' },
    
    // Frontend
    { name: 'HTML5', category: 'Frontend', level: 'Avançado' },
    { name: 'CSS3', category: 'Frontend', level: 'Avançado' },
    { name: 'JavaScript', category: 'Frontend', level: 'Avançado' },
    { name: 'React', category: 'Framework', level: 'Intermediário' },
    { name: 'TypeScript', category: 'Frontend', level: 'Intermediário' },
    { name: 'Tailwind CSS', category: 'Styling', level: 'Intermediário' },
    
    // Cloud & Tools
    { name: 'Microsoft Azure', category: 'Cloud', level: 'Intermediário' },
    { name: 'Git', category: 'Version Control', level: 'Avançado' },
    { name: 'RabbitMQ', category: 'Messaging', level: 'Intermediário' },
    { name: 'JWT', category: 'Security', level: 'Avançado' },
    
    // Build Tools
    { name: 'Vite', category: 'Build Tools', level: 'Intermediário' },
    { name: 'API Integration', category: 'Development', level: 'Intermediário' },
  ];

  return (
    <section id="skills" className="py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-700 mb-4 relative inline-block">
            Habilidades Técnicas
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mt-2"></div>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
