
import React from 'react';

const Header = () => {
  const navLinks = [
    { href: '#o-mnie', label: 'O mnie' },
    { href: '#oferta', label: 'Jak pomagam' },
    { href: '#galeria', label: 'Galeria' },
    { href: '#kontakt', label: 'Kontakt' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-slate-800 hover:text-cyan-600 transition-colors">
          Miłosz Szczucki <span className="text-cyan-700 font-medium">Fizjoterapia</span>
        </a>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-cyan-600 font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a 
          href="#kontakt"
          className="hidden md:inline-block bg-cyan-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-cyan-700 transition-all shadow-sm"
        >
          Umów wizytę
        </a>
      </div>
    </header>
  );
};

export default Header;
