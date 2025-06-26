
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce React',
      description: 'Aplicação de e-commerce completa desenvolvida com React, TypeScript e integração com API.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'API REST'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Dashboard Analytics',
      description: 'Dashboard interativo para visualização de dados com gráficos e métricas em tempo real.',
      tech: ['React', 'Chart.js', 'CSS Modules'],
      github: '#',
      demo: '#',
    },
    {
      title: 'App de Tarefas',
      description: 'Aplicativo de gerenciamento de tarefas com drag-and-drop e persistência de dados.',
      tech: ['React', 'Local Storage', 'Styled Components'],
      github: '#',
      demo: '#',
    },
  ];

  return (
    <section id="projetos" className="py-16 px-8 bg-gradient-to-r from-blue-50 to-green-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-700 mb-4 relative inline-block">
            Projetos em Destaque
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mt-2"></div>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-slate-700 mb-3">{project.title}</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href={project.github}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors text-sm font-medium"
                >
                  <Github size={16} />
                  Código
                </a>
                <a
                  href={project.demo}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white rounded-lg transition-colors text-sm font-medium"
                >
                  <ExternalLink size={16} />
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
