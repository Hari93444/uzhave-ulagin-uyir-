import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './Statistics.css';

const Statistics = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
  const { t } = useTranslation();

  const statsData = [
    { value: 10, suffix: '+', label: t('stats.s1') },
    { value: 500, suffix: '+', label: t('stats.s2') },
    { value: 25, suffix: '+', label: t('stats.s3') },
    { value: 100, suffix: '%', label: t('stats.s4') }
  ];

  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          statsData.forEach((stat, index) => {
            const duration = 2000;
            const steps = 60;
            const stepTime = duration / steps;
            let currentStep = 0;
            
            const timer = setInterval(() => {
              currentStep++;
              const progress = currentStep / steps;
              // Easing function for smoother animation
              const easeProgress = 1 - Math.pow(1 - progress, 3);
              const currentVal = Math.floor(easeProgress * stat.value);
              
              setCounts(prev => {
                const newCounts = [...prev];
                newCounts[index] = currentVal;
                return newCounts;
              });

              if (currentStep >= steps) {
                clearInterval(timer);
                setCounts(prev => {
                  const newCounts = [...prev];
                  newCounts[index] = stat.value;
                  return newCounts;
                });
              }
            }, stepTime);
          });
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section className="statistics" ref={sectionRef}>
      <div className="container">
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-value-container">
                <span className="stat-value">{counts[index]}</span>
                <span className="stat-suffix">{stat.suffix}</span>
              </div>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
