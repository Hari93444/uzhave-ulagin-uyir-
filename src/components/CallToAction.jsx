import React, { useEffect, useRef } from 'react';
import { Leaf } from 'lucide-react';
import './CallToAction.css';

const CallToAction = () => {
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
      { threshold: 0.2 }
    );

    const elements = sectionRef.current.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section className="cta section-padding" ref={sectionRef}>
      <div className="cta-background">
        <div className="cta-overlay"></div>
      </div>
      
      <div className="cta-floating-leaves">
        <Leaf className="floating-leaf leaf-1" size={24} />
        <Leaf className="floating-leaf leaf-2" size={32} />
      </div>

      <div className="container cta-container">
        <div className="cta-content reveal">
          <h2 className="cta-title">Bring Nature Back to Your Table</h2>
          <p className="cta-text">
            Choose food that respects the soil, supports farmers and nourishes your family.
          </p>
          <button className="btn btn-primary cta-btn">Shop Organic Products</button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
