
import React from 'react';

const About = () => {
  return (
    <section id="sobre" className="py-16 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-700 mb-4 relative inline-block">
            Sobre Mim
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mt-2"></div>
          </h2>
        </div>
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
          <p className="text-slate-600 leading-relaxed mb-6 text-lg">
            Sou um desenvolvedor frontend dedicado, com experiência em criar interfaces web modernas e responsivas. 
            Minha paixão por tecnologia me impulsiona a estar sempre aprendendo e explorando novas ferramentas e frameworks.
          </p>
          <p className="text-slate-600 leading-relaxed text-lg">
            Atualmente, estou focado em aprimorar minhas habilidades em React, TypeScript e outras tecnologias do 
            ecossistema JavaScript, sempre buscando as melhores práticas de desenvolvimento e experiência do usuário.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
