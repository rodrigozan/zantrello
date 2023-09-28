import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-2 text-center">
      <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
