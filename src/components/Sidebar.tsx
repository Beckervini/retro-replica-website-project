
import React from 'react';

const Sidebar = () => {
  const navItems = [
    { href: '#hero', label: 'Início' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#objetivos', label: 'Objetivos' },
    { href: '#skills', label: 'Skills' },
    { href: '#experiencia', label: 'Experiência' },
    { href: '#educacao', label: 'Educação' },
    { href: '#projetos', label: 'Projetos' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <aside className="hidden lg:block fixed left-0 top-16 w-280 h-[calc(100vh-4rem)] bg-white/95 backdrop-blur-lg border-r border-blue-100 overflow-y-auto z-40 shadow-lg">
      <nav className="p-6">
        <ul className="space-y-2">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="flex items-center px-5 py-3 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300 font-medium text-sm hover:translate-x-2 hover:shadow-md"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
