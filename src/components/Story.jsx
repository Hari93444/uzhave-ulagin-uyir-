import React, { useEffect, useRef, useState } from 'react';
import './Story.css';
import { Leaf } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Story = () => {
  const sectionRef = useRef(null);
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);

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

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    if (elements) {
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (elements) {
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, [isExpanded]); // re-run if isExpanded changes so new text gets animated

  return (
    <section id="story" className="story section-padding" ref={sectionRef}>
      <div className="container">
        <div className="story-wrapper">
          <div className="story-image-side reveal">
            <div className="story-image-container">
              <img src="/images/farmer.jpg" alt="Traditional Indian Farmer" className="story-image" />
              <div className="image-accent-border"></div>
            </div>
          </div>
          
          <div className="story-content-side reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="small-label">
              <Leaf size={14} /> {t('story.label')}
            </div>
            
            <h2 className="story-title">{t('story.title')}</h2>
            
            <p className="story-text">
              {t('story.text1')}
            </p>
            <p className="story-text">
              {t('story.text2')}
            </p>

            {isExpanded && (
              <div className="story-extra-text reveal active" style={{ marginTop: '1rem', animation: 'fadeUp 0.6s ease-out forwards' }}>
                <p className="story-text">
                  {t('story.text3')}
                </p>
                <p className="story-text">
                  {t('story.text4')}
                </p>
              </div>
            )}
            
            {!isExpanded && (
              <button 
                className="btn btn-outline story-btn"
                onClick={() => setIsExpanded(true)}
              >
                {t('story.btn')}
              </button>
            )}
            
            <div className="decorative-illustration">
              <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 100C50 100 50 60 20 50C20 50 40 40 50 60C50 60 60 40 80 50C80 50 50 60 50 100Z" fill="var(--color-primary-light)" opacity="0.2"/>
                <path d="M50 80C50 80 50 40 30 30C30 30 45 25 50 45C50 45 55 25 70 30C70 30 50 40 50 80Z" fill="var(--color-primary)" opacity="0.4"/>
                <path d="M50 60C50 60 50 20 40 10C40 10 50 5 50 25C50 25 50 5 60 10C60 10 50 20 50 60Z" fill="var(--color-primary-dark)" opacity="0.6"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
