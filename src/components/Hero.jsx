import React, { useState, useEffect } from 'react';
import { Leaf } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Hero.css';

const bgImages = [
  '/images/hero.jpg',
  '/images/cta.jpg',
  '/images/spices.jpg'
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero">
      {bgImages.map((image, index) => (
        <div 
          key={index}
          className={`hero-background ${index === currentImageIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="hero-overlay"></div>
        </div>
      ))}
      
      <div className="hero-floating-leaves">
        <Leaf className="floating-leaf leaf-1" size={24} />
        <Leaf className="floating-leaf leaf-2" size={32} />
        <Leaf className="floating-leaf leaf-3" size={20} />
      </div>

      <div className="container hero-container">
        <div className="hero-content fade-up-enter">
          
          <h1 className="hero-title">{t('hero.title')}</h1>
          <h2 className="hero-subtitle">{t('hero.subtitle')}</h2>
          
          <p className="hero-description">
            {t('hero.desc')}
          </p>
          
          <div className="hero-actions">
            <button 
              className="btn btn-primary"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('hero.exploreBtn')}
            </button>
            <button 
              className="btn btn-outline" 
              style={{ color: 'white', borderColor: 'white' }}
              onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('hero.discoverBtn')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
