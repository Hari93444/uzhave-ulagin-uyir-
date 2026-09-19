import React, { useEffect, useRef } from 'react';
import { Heart, Trees, Users, LeafyGreen } from 'lucide-react';
import './WhyOrganic.css';

const WhyOrganic = () => {
  const sectionRef = useRef(null);

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

    const elements = sectionRef.current.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section id="why-organic" className="why-organic section-padding" ref={sectionRef}>
      <div className="container">
        <div className="why-header reveal">
          <h2 className="why-title">Good for You. Good for the Earth.</h2>
        </div>

        <div className="why-grid">
          <div className="why-card reveal" style={{ transitionDelay: '0.1s' }}>
            <Heart className="why-icon" size={40} />
            <h3 className="why-card-title">Healthy Living</h3>
            <p className="why-card-text">Food grown naturally with care and minimal unnecessary intervention.</p>
          </div>

          <div className="why-card reveal" style={{ transitionDelay: '0.2s' }}>
            <Trees className="why-icon" size={40} />
            <h3 className="why-card-title">Better Soil</h3>
            <p className="why-card-text">Encouraging farming practices that respect and protect the soil.</p>
          </div>

          <div className="why-card reveal" style={{ transitionDelay: '0.3s' }}>
            <Users className="why-icon" size={40} />
            <h3 className="why-card-title">Supporting Farmers</h3>
            <p className="why-card-text">Creating a stronger connection between farmers and consumers.</p>
          </div>

          <div className="why-card reveal" style={{ transitionDelay: '0.4s' }}>
            <LeafyGreen className="why-icon" size={40} />
            <h3 className="why-card-title">Sustainable Future</h3>
            <p className="why-card-text">Choosing farming practices that care for tomorrow's generations.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyOrganic;
