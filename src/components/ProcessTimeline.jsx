import React, { useEffect, useRef } from 'react';
import './ProcessTimeline.css';

const steps = [
  { id: '01', title: 'Nurture', text: 'Healthy soil and natural farming practices.' },
  { id: '02', title: 'Grow', text: 'Crops are grown with patience and care.' },
  { id: '03', title: 'Harvest', text: 'Products are harvested at the right time.' },
  { id: '04', title: 'Prepare', text: 'Carefully cleaned and prepared.' },
  { id: '05', title: 'Deliver', text: 'Fresh goodness reaches your home.' }
];

const ProcessTimeline = () => {
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
    <section className="process section-padding" ref={sectionRef}>
      <div className="container">
        <div className="process-header reveal">
          <h2 className="process-title">From Farm to Your Table</h2>
        </div>

        <div className="timeline">
          {steps.map((step, index) => (
            <div 
              key={step.id} 
              className="timeline-step reveal"
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="step-number">{step.id}</div>
              <div className="step-content">
                <h3 className="step-title">— {step.title}</h3>
                <p className="step-text">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
