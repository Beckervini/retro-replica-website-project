
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Desenvolvedor Full Stack',
      company: 'Projetos Pessoais',
      period: '2023 - Atual',
      description: 'Desenvolvimento de APIs REST com Java/Spring Boot, criação de MVCs com .NET, implementação de autenticação JWT e integração com mensageria RabbitMQ.',
      technologies: ['Java', 'Spring Boot', '.NET', 'SQL Server', 'JWT', 'RabbitMQ']
    },
    {
      title: 'Desenvolvedor Backend',
      company: 'Projetos Acadêmicos',
      period: '2022 - 2023',
      description: 'Criação de sistemas backend com Java, gerenciamento de banco de dados SQL Server, pontos de desafio e sistemas de gerenciamento de seções com arquiteturas de software.',
      technologies: ['Java', 'Spring Boot', 'Entity Framework', 'SQL', 'Azure']
    }
  ];

  return (
    <section id="experiencia" className="py-16 px-8 bg-gradient-to-r from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-700 mb-4 relative inline-block">
            Experiências
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mt-2"></div>
          </h2>
        </div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/50 border-l-4 border-l-blue-500">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-700 mb-2">{exp.title}</h3>
                  <p className="text-blue-600 font-semibold">{exp.company}</p>
                </div>
                <span className="text-slate-600 font-medium bg-blue-100 px-3 py-1 rounded-full text-sm mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
