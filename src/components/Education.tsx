
import React from 'react';

const Education = () => {
  const education = [
    {
      degree: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
      institution: 'Universidade Tecnológica',
      period: '2021 - 2023',
      status: 'Concluído',
    },
    {
      degree: 'Curso de React e TypeScript',
      institution: 'Plataforma Online',
      period: '2023',
      status: 'Certificado',
    },
  ];

  return (
    <section id="educacao" className="py-16 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-700 mb-4 relative inline-block">
            Formação Acadêmica
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mt-2"></div>
          </h2>
        </div>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/50">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-700 mb-2">{edu.degree}</h3>
                  <p className="text-blue-600 font-semibold">{edu.institution}</p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <span className="text-slate-600 font-medium bg-green-100 px-3 py-1 rounded-full text-sm block mb-1">
                    {edu.status}
                  </span>
                  <span className="text-slate-600 text-sm">{edu.period}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
