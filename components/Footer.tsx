
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-100 border-t border-slate-200">
      <div className="container mx-auto px-6 py-6 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Miłosz Szczucki Fizjoterapia. Wszelkie prawa zastrzeżone.</p>
        <p className="text-sm mt-1">NIP: 7123471580</p>
      </div>
    </footer>
  );
};

export default Footer;
