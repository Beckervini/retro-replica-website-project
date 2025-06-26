
import React from 'react';
import { Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="py-16 px-8 bg-gradient-to-r from-blue-50 to-green-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-700 mb-4 relative inline-block">
            Vamos Conversar?
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mt-2"></div>
          </h2>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/50">
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            Estou sempre aberto a novas oportunidades e projetos interessantes. Vamos criar algo incrível juntos!
          </p>
          
          <a
            href="https://www.linkedin.com/in/vinicius-becker-a2aba7233"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Linkedin size={24} />
            <span>Conectar no LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
