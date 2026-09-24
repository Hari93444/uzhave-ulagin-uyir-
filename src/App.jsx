import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Products from './components/Products';
import Story from './components/Story';
import WhyOrganic from './components/WhyOrganic';
import ProcessTimeline from './components/ProcessTimeline';
import Testimonials from './components/Testimonials';
import Statistics from './components/Statistics';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [toast, setToast] = useState(null);

  useEffect(() => {
    let timeoutId;
    const handleToast = (e) => {
      setToast(e.detail.message);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setToast(null);
      }, 3000);
    };
    window.addEventListener('show-toast', handleToast);
    return () => window.removeEventListener('show-toast', handleToast);
  }, []);

  return (
    <div className="app-container">
      {toast && (
        <div className="toast-notification">
          <div className="toast-content">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            <span>{toast}</span>
          </div>
        </div>
      )}
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <Products />
        <Story />
        <WhyOrganic />
        <ProcessTimeline />
        <Testimonials />
        <Statistics />
        <Contact />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;
