
import React from 'react';

const Hero = () => {
  return (
    <section className="py-20 px-8 text-center bg-gradient-to-br from-white via-blue-50 to-green-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-6">
          Vinícius Becker
        </h1>
        <p className="text-2xl text-slate-600 font-medium mb-8">
          Desenvolvedor com ♥ muito café
        </p>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Apaixonado por criar soluções tecnológicas através de código limpo, 
          arquiteturas robustas e tecnologias modernas.
        </p>
      </div>
    </section>
  );
};

export default Hero;
