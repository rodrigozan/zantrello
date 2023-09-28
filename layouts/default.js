import React from 'react';
import Header from './Header';
import Footer from './Footer';

const LayoutDefault = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutDefault;
