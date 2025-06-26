
import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="pt-24 pb-12 px-8 text-center bg-gradient-to-br from-white/90 via-blue-50/80 to-green-50/90 backdrop-blur-sm min-h-auto flex flex-col justify-center rounded-3xl mx-4 my-4 shadow-xl border border-white/80 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 via-transparent to-green-400/5 animate-pulse"></div>
      <div className="relative z-10">
        <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-blue-400 to-green-400 bg-clip-text text-transparent mb-4 leading-tight">
          Vinícius Becker
        </h1>
        <p className="text-xl lg:text-2xl text-slate-600 font-medium mb-6">
          Desenvolvedor Frontend
        </p>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Apaixonado por criar experiências digitais excepcionais através de código limpo, 
          design responsivo e tecnologias modernas.
        </p>
      </div>
    </section>
  );
};

export default Hero;
