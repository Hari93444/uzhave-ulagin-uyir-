import React, { useEffect, useRef } from 'react';
import { Sprout, Handshake, Globe2 } from 'lucide-react';
import './Introduction.css';

const Introduction = () => {
  const introRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = introRef.current.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section className="intro section-padding leaf-pattern" ref={introRef}>
      <div className="container">
        <div className="intro-header reveal">
          <h2 className="intro-title">From Our Soil to Your Home</h2>
          <p className="intro-text">
            At Uzhave Ulagin Uyir, we believe that healthy food begins with healthy soil. We work with the spirit of traditional farming and the care of modern organic practices to bring nature's goodness directly to your home.
          </p>
        </div>

        <div className="intro-features">
          <div className="feature-card reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="feature-icon-wrapper">
              <Sprout className="feature-icon" size={32} />
            </div>
            <h3 className="feature-title">Naturally Grown</h3>
            <p className="feature-desc">Cultivated without harmful chemicals, respecting nature's rhythm.</p>
          </div>

          <div className="feature-card reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="feature-icon-wrapper">
              <Handshake className="feature-icon" size={32} />
            </div>
            <h3 className="feature-title">Farmer First</h3>
            <p className="feature-desc">Empowering traditional farmers with fair trade and direct connection.</p>
          </div>

          <div className="feature-card reveal" style={{ transitionDelay: '0.3s' }}>
            <div className="feature-icon-wrapper">
              <Globe2 className="feature-icon" size={32} />
            </div>
            <h3 className="feature-title">Earth Friendly</h3>
            <p className="feature-desc">Sustainable practices that enrich the soil for future generations.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
