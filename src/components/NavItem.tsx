
import React from 'react';

interface NavItemProps {
  href: string;
  label: string;
}

const NavItem = ({ href, label }: NavItemProps) => {
  return (
    <li>
      <a
        href={href}
        className="flex items-center px-5 py-3 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300 font-medium text-sm hover:translate-x-2 hover:shadow-md"
      >
        {label}
      </a>
    </li>
  );
};

export default NavItem;
