
import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'API REST completa com autenticação',
      author: 'Vinícius Becker',
      tags: ['Java', 'Spring Boot', '.NET', 'PostgreSQL'],
      description: 'API REST completa com autenticação de usuários e clientes e encriptação que garante total segurança na aplicação no GitHub para ser vi e reproduzida.',
      link: '#',
      linkText: 'Ver no GitHub'
    },
    {
      title: 'Sistema MVC completo com Entity Framework',
      author: 'Vinícius Becker', 
      tags: ['.NET Core', 'Entity Framework', 'SQL Server'],
      description: 'Sistema MVC desenvolvido utilizando .NET, arquitetura em camadas das aplicações no sistema de cadastro de clientes.',
      link: '#',
      linkText: 'Ver no GitHub'
    },
    {
      title: 'Plataforma com Integração RabbitMQ',
      author: 'Vinícius Becker',
      tags: ['Java', 'Spring Boot', 'RabbitMQ'],
      description: 'Plataforma com Integração RabbitMQ, a aplicação possui filas de mensageria na implementação simples. Confira os códigos no GitHub.',
      link: '#',
      linkText: 'Ver no GitHub'
    }
  ];

  return (
    <section id="projetos" className="py-16 px-8 bg-gradient-to-r from-blue-50/50 to-green-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-700 mb-4 relative inline-block">
            Projetos em Destaque
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mt-2"></div>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Todos os projetos estão disponíveis no GitHub para visualização do código fonte.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-slate-700 mb-2">{project.title}</h3>
                <p className="text-blue-600 font-medium text-sm mb-3">{project.author}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <p className="text-slate-600 mb-4 leading-relaxed text-sm">{project.description}</p>
              
              <a 
                href={project.link} 
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors"
              >
                {project.linkText} <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
