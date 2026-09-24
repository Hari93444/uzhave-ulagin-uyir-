import React, { useEffect, useRef } from 'react';
import { Heart, Trees, Users, LeafyGreen } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './WhyOrganic.css';

const WhyOrganic = () => {
  const sectionRef = useRef(null);
  const { t } = useTranslation();

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
          <h2 className="why-title">{t('why.title')}</h2>
        </div>

        <div className="why-grid">
          <div className="why-card reveal" style={{ transitionDelay: '0.1s' }}>
            <Heart className="why-icon" size={40} />
            <h3 className="why-card-title">{t('why.c1_title')}</h3>
            <p className="why-card-text">{t('why.c1_desc')}</p>
          </div>

          <div className="why-card reveal" style={{ transitionDelay: '0.2s' }}>
            <Trees className="why-icon" size={40} />
            <h3 className="why-card-title">{t('why.c2_title')}</h3>
            <p className="why-card-text">{t('why.c2_desc')}</p>
          </div>

          <div className="why-card reveal" style={{ transitionDelay: '0.3s' }}>
            <Users className="why-icon" size={40} />
            <h3 className="why-card-title">{t('why.c3_title')}</h3>
            <p className="why-card-text">{t('why.c3_desc')}</p>
          </div>

          <div className="why-card reveal" style={{ transitionDelay: '0.4s' }}>
            <LeafyGreen className="why-icon" size={40} />
            <h3 className="why-card-title">{t('why.c4_title')}</h3>
            <p className="why-card-text">{t('why.c4_desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyOrganic;
