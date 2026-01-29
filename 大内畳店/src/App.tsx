import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Gallery from './components/Gallery';
import Price from './components/Price';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FixedPhoneButton from './components/FixedPhoneButton';

const App: React.FC = () => {
  return (
    <div className="font-gothic text-gray-800 bg-washi">
      <Header />
      <main>
        <Hero />
        <Products />
        <Gallery />
        <Price />
        <About />
        <Contact />
      </main>
      <Footer />
      <FixedPhoneButton />
    </div>
  );
};

export default App;
