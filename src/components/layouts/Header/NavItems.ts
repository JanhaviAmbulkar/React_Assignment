import React from 'react';

interface NavItemProps {
  label: string;
  href: string;
}

function NavItem({ label, href }: NavItemProps) {
  return React.createElement(
    'a',
    {
      href,
      className: 'text-sm font-medium text-slate-600 transition hover:text-indigo-600',
    },
    label,
  );
}

export default NavItem;