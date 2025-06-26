
import React from 'react';

const Objectives = () => {
  return (
    <section id="objetivos" className="py-16 px-8 bg-gradient-to-r from-blue-50/50 to-green-50/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-700 mb-4 relative inline-block">
            Objetivos Profissionais
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mt-2"></div>
          </h2>
        </div>
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
          <p className="text-slate-600 leading-relaxed text-lg text-center">
            Meu objetivo é crescer continuamente como desenvolvedor frontend, contribuindo para projetos inovadores 
            que façam a diferença na vida das pessoas. Busco oportunidades para aplicar minha criatividade e 
            conhecimento técnico em desafios estimulantes, sempre priorizando a qualidade do código e a 
            experiência do usuário.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Objectives;
