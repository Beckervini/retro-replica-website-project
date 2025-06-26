
import React from 'react';
import { Github, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-12 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Vinícius Becker
            </h3>
            <p className="text-slate-300 leading-relaxed">
              Desenvolvedor Frontend apaixonado por criar experiências digitais incríveis 
              e sempre em busca de novos desafios.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-slate-200">Navegação</h4>
            <ul className="space-y-2">
              <li><a href="#sobre" className="text-slate-300 hover:text-blue-400 transition-colors">Sobre</a></li>
              <li><a href="#skills" className="text-slate-300 hover:text-blue-400 transition-colors">Skills</a></li>
              <li><a href="#projetos" className="text-slate-300 hover:text-blue-400 transition-colors">Projetos</a></li>
              <li><a href="#contato" className="text-slate-300 hover:text-blue-400 transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-slate-200">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/ViniciusBecker"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/vinicius-becker-a2aba7233"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700 pt-8 text-center">
          <p className="text-slate-400 flex items-center justify-center gap-2">
            Feito com <Heart className="text-red-500" size={16} fill="currentColor" /> por Vinícius Becker
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
