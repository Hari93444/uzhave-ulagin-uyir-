import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './ProcessTimeline.css';

const ProcessTimeline = () => {
  const sectionRef = useRef(null);
  const { t } = useTranslation();

  const steps = [
    { id: '01', title: t('process.s1_title'), text: t('process.s1_desc') },
    { id: '02', title: t('process.s2_title'), text: t('process.s2_desc') },
    { id: '03', title: t('process.s3_title'), text: t('process.s3_desc') },
    { id: '04', title: t('process.s4_title'), text: t('process.s4_desc') },
    { id: '05', title: t('process.s5_title'), text: t('process.s5_desc') }
  ];

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
          <h2 className="process-title">{t('process.title')}</h2>
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
