import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Safety from './components/Safety';
import Founders from './components/Founders';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-primary-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Safety />
        <Founders />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;