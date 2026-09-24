import React, { useEffect, useRef } from 'react';
import { Sprout, Handshake, Globe2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Introduction.css';

const Introduction = () => {
  const introRef = useRef(null);
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

    const elements = introRef.current.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section className="intro section-padding leaf-pattern" ref={introRef}>
      <div className="container">
        <div className="intro-header reveal">
          <h2 className="intro-title">{t('intro.title')}</h2>
          <p className="intro-text">
            {t('intro.desc')}
          </p>
        </div>

        <div className="intro-features">
          <div className="feature-card reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="feature-icon-wrapper">
              <Sprout className="feature-icon" size={32} />
            </div>
            <h3 className="feature-title">{t('intro.f1_title')}</h3>
            <p className="feature-desc">{t('intro.f1_desc')}</p>
          </div>

          <div className="feature-card reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="feature-icon-wrapper">
              <Handshake className="feature-icon" size={32} />
            </div>
            <h3 className="feature-title">{t('intro.f2_title')}</h3>
            <p className="feature-desc">{t('intro.f2_desc')}</p>
          </div>

          <div className="feature-card reveal" style={{ transitionDelay: '0.3s' }}>
            <div className="feature-icon-wrapper">
              <Globe2 className="feature-icon" size={32} />
            </div>
            <h3 className="feature-title">{t('intro.f3_title')}</h3>
            <p className="feature-desc">{t('intro.f3_desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
