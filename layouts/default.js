import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LayoutDefault = ({ children }) => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="flex-grow h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutDefault;
