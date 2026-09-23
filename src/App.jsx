import React from 'react';
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
  return (
    <div className="app-container">
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
