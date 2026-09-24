import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Contact.css';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success
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
      { threshold: 0.2 }
    );

    const elements = sectionRef.current.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate network request for frontend-only demo
    setTimeout(() => {
      setFormStatus('success');
      e.target.reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact section-padding" ref={sectionRef}>
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-info reveal">
            <h2 className="contact-title">{t('contact.title')}</h2>
            <p className="contact-text">
              {t('contact.desc')}
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4>{t('contact.visit')}</h4>
                  <p>Gobichettipalayam, Tamil Nadu, India</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <Phone size={20} />
                </div>
                <div>
                  <h4>{t('contact.call')}</h4>
                  <p><strong>GANESAN K</strong></p>
                  <p>+91 94433 22446</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <Mail size={20} />
                </div>
                <div>
                  <h4>{t('contact.email')}</h4>
                  <p>hello@uzhaveulaginuyir.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container reveal" style={{ transitionDelay: '0.2s' }}>
            {formStatus === 'success' ? (
              <div className="success-message">
                <CheckCircle size={64} className="success-icon" />
                <h3>{t('contact.success_title')}</h3>
                <p>{t('contact.success_desc')}</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">{t('contact.form_name')}</label>
                  <input type="text" id="name" required placeholder={t('contact.form_name_ph')} />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">{t('contact.form_email')}</label>
                  <input type="email" id="email" required placeholder={t('contact.form_email_ph')} />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">{t('contact.form_phone')}</label>
                  <input type="tel" id="phone" placeholder={t('contact.form_phone_ph')} />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">{t('contact.form_msg')}</label>
                  <textarea id="message" required rows="4" placeholder={t('contact.form_msg_ph')}></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-primary submit-btn"
                  disabled={formStatus === 'submitting'}
                >
                  {formStatus === 'submitting' ? t('contact.form_submitting') : t('contact.form_submit')}
                </button>
              </form>
            )}
          </div>
        </div>
        
        <div className="contact-map reveal" style={{ transitionDelay: '0.4s', width: '100%', marginTop: '4rem', height: '400px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31317.842790176845!2d77.41908075!3d11.45524675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba93d7c3d223293%3A0x7d25e076735e5d1e!2sGobichettipalayam%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1709210000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Farm Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
