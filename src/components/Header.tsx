
import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-blue-100 px-8 py-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          Vinícius Becker
        </div>
        <div className="flex gap-4">
          <a
            href="https://github.com/ViniciusBecker"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-all duration-300"
          >
            <Github size={20} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/vinicius-becker-a2aba7233"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
