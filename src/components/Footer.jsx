import React from 'react';
import { Camera, Share2, MonitorPlay, Phone as PhoneIcon, MapPin, Mail, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <div className="footer-logo">
              {/* Added a leaf icon as logo placeholder */}
              <div className="leaf-logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-leaf"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
              </div>
              <div className="footer-logo-text">
                <span className="title">{t('navbar.logo_title')}</span>
                <span className="subtitle">{t('navbar.logo_subtitle')}</span>
              </div>
            </div>
            <p className="footer-tagline">{t('footer.tagline')}</p>
            
            <div className="footer-about-text">
              <p>{t('footer.about')}</p>
            </div>
            
            <div className="social-icons">
              <a href="#" className="social-icon facebook" aria-label="Facebook"><Share2 size={16} /></a>
              <a href="#" className="social-icon instagram" aria-label="Instagram"><Camera size={16} /></a>
              <a href="#" className="social-icon youtube" aria-label="YouTube"><MonitorPlay size={16} /></a>
              <a href="#" className="social-icon whatsapp" aria-label="WhatsApp"><PhoneIcon size={16} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-heading">{t('footer.quickLinks')}</h4>
            <ul className="footer-links">
              <li><a href="#home">{t('navbar.home')}</a></li>
              <li><a href="#products">{t('footer.l_all')}</a></li>
              <li><a href="#about">{t('footer.l_about')}</a></li>
              <li><a href="#farmers">{t('footer.l_farmers')}</a></li>
              <li><a href="#blog">{t('footer.l_blog')}</a></li>
              <li><a href="#contact">{t('navbar.contact')}</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="footer-links-col">
            <h4 className="footer-heading">{t('footer.categories')}</h4>
            <ul className="footer-links">
              <li><a href="#">{t('footer.c1')}</a></li>
              <li><a href="#">{t('footer.c2')}</a></li>
              <li><a href="#">{t('footer.c3')}</a></li>
              <li><a href="#">{t('footer.c4')}</a></li>
              <li><a href="#">{t('footer.c5')}</a></li>
              <li><a href="#">{t('footer.c6')}</a></li>
              <li><a href="#">{t('footer.c7')}</a></li>
              <li><a href="#">{t('footer.c8')}</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="footer-contact-col">
            <h4 className="footer-heading">{t('navbar.contact')} Us</h4>
            <ul className="footer-contact-list">
              <li>
                <MapPin size={16} className="contact-icon" />
                <span>Coimbatore, Tamil Nadu, India</span>
              </li>
              <li>
                <PhoneIcon size={16} className="contact-icon" />
                <span>+91 98765 43210</span>
              </li>
              <li>
                <Mail size={16} className="contact-icon" />
                <span>info@uzhaveulaginuyir.com</span>
              </li>
              <li className="timing-info">
                <Clock size={16} className="contact-icon" />
                <div>
                  <span>{t('footer.timing')}</span>
                  <span className="holiday-text">{t('footer.holiday')}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">{t('footer.rights')}</p>
          <div className="footer-legal-links">
            <a href="#">{t('footer.privacy')}</a>
            <span className="separator">|</span>
            <a href="#">{t('footer.terms')}</a>
            <span className="separator">|</span>
            <a href="#">{t('footer.refund')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
