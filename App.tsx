
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RateLimiter from './components/RateLimitter';

function App() {
  return (
    <RateLimiter delay={500}>
      <div className="min-h-screen bg-slate-50">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </RateLimiter>
  );
}

export default App;
