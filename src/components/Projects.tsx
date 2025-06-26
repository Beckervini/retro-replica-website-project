
import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Pessoal',
      description: 'Site responsivo desenvolvido com React e TypeScript, apresentando minha trajetória profissional e habilidades técnicas.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      link: '#'
    },
    {
      title: 'API REST com Spring Boot',
      description: 'API completa desenvolvida com Spring Boot, incluindo autenticação JWT e integração com banco de dados.',
      technologies: ['Java', 'Spring Boot', 'JWT', 'PostgreSQL'],
      link: '#'
    },
    {
      title: 'Sistema Web .NET',
      description: 'Aplicação web desenvolvida com .NET Core, Entity Framework e SQL Server.',
      technologies: ['.NET Core', 'Entity Framework', 'SQL Server', 'Azure'],
      link: '#'
    }
  ];

  return (
    <section id="projetos" className="py-16 px-8 bg-gradient-to-r from-blue-50/50 to-green-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-700 mb-4 relative inline-block">
            Projetos
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mt-2"></div>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Aqui estão alguns dos meus projetos mais recentes, demonstrando minhas habilidades em 
            desenvolvimento e criação de soluções tecnológicas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-bold text-slate-700 mb-3">{project.title}</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              
              <a 
                href={project.link} 
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                Ver projeto <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
