import React from 'react';
import { useTranslation } from 'react-i18next';
import './CallToAction.css';

const CallToAction = () => {
  const { t } = useTranslation();
  return (
    <section className="stay-connected-section section-padding">
      <div className="container">
        <div className="stay-connected-box reveal">
          <div className="stay-connected-content">
            <h2>{t('cta.title')}</h2>
            <p>{t('cta.desc')}</p>
          </div>
          
          <div className="stay-connected-form">
            <input type="email" placeholder={t('cta.placeholder')} />
            <button 
              className="subscribe-btn"
              onClick={() => window.dispatchEvent(new CustomEvent('show-toast', { detail: { message: 'Subscribed successfully!' } }))}
            >
              {t('cta.btn')}
            </button>
          </div>
          
          {/* Leaf decorations */}
          <div className="leaf-decoration leaf-top-left"></div>
          <div className="leaf-decoration leaf-bottom-right"></div>
          <div className="leaf-decoration leaf-bottom-left-small"></div>
          <div className="leaf-decoration leaf-top-right-small"></div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
