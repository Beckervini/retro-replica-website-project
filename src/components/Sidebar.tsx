
import React from 'react';
import NavItem from './NavItem';

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
    <aside className="hidden lg:block fixed left-0 top-16 w-80 h-[calc(100vh-4rem)] bg-white/95 backdrop-blur-lg border-r border-blue-100 overflow-y-auto z-40 shadow-lg">
      <nav className="p-6">
        <ul className="space-y-2">
          {navItems.map((item, index) => (
            <NavItem key={index} href={item.href} label={item.label} />
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
