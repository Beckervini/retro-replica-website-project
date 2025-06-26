
import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Tecnologia em Análise e Desenvolvimento de Sistemas',
      institution: 'Universidade Tecnológica Federal do Paraná (UTFPR)',
      period: '2022 - 2024',
      status: 'Em andamento',
      description: 'Curso superior focado no desenvolvimento de sistemas e aplicações, com ênfase em programação, análise de sistemas e metodologias de desenvolvimento.'
    }
  ];

  const certifications = [
    {
      title: 'JavaScript Completo',
      provider: 'Origamid',
      year: '2023',
      description: 'Curso completo de JavaScript moderno, incluindo ES6+, DOM, programação orientada a objetos e boas práticas.'
    },
    {
      title: 'React Completo',
      provider: 'Origamid',
      year: '2023',
      description: 'Desenvolvimento de aplicações React, incluindo hooks, context API, roteamento e integração com APIs.'
    },
    {
      title: 'TypeScript',
      provider: 'Origamid',
      year: '2024',
      description: 'Programação com TypeScript, tipagem estática, interfaces e integração com React.'
    }
  ];

  return (
    <section id="educacao" className="py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-700 mb-4 relative inline-block">
            Educação & Certificações
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mt-2"></div>
          </h2>
        </div>
        
        {/* Formação Acadêmica */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="text-blue-600" size={24} />
            <h3 className="text-2xl font-bold text-slate-700">Formação Acadêmica</h3>
          </div>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/50">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-slate-700 mb-2">{edu.degree}</h4>
                    <p className="text-blue-600 font-semibold mb-2">{edu.institution}</p>
                    <p className="text-slate-600 leading-relaxed">{edu.description}</p>
                  </div>
                  <div className="text-right mt-4 md:mt-0">
                    <span className="text-slate-600 font-medium bg-blue-100 px-3 py-1 rounded-full text-sm block mb-2">
                      {edu.status}
                    </span>
                    <span className="text-slate-600 text-sm">{edu.period}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificações */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Award className="text-blue-600" size={24} />
            <h3 className="text-2xl font-bold text-slate-700">Certificações</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50">
                <h4 className="text-lg font-bold text-slate-700 mb-2">{cert.title}</h4>
                <p className="text-blue-600 font-semibold mb-2">{cert.provider}</p>
                <span className="text-slate-600 font-medium bg-green-100 px-3 py-1 rounded-full text-sm mb-3 inline-block">
                  {cert.year}
                </span>
                <p className="text-slate-600 text-sm leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
