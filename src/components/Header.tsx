
import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-blue-100 px-8 py-4 flex justify-between items-center h-16 shadow-lg">
      <div className="text-xl font-bold text-slate-700 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
        Vinícius Becker
      </div>
      <div className="flex gap-4">
        <a
          href="https://github.com/ViniciusBecker"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-all duration-300 text-sm font-medium"
        >
          <Github size={16} />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/vinicius-becker-a2aba7233"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-xl hover:from-blue-500 hover:to-blue-700 transition-all duration-300 text-sm font-medium shadow-lg"
        >
          <Linkedin size={16} />
          LinkedIn
        </a>
      </div>
    </header>
  );
};

export default Header;
