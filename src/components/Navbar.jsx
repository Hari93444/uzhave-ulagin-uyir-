import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X, Leaf, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLangMenuOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <Leaf className="logo-icon" size={28} />
          <div className="logo-text">
            <span className="logo-title">{t('navbar.logo_title')}</span>
            <span className="logo-subtitle">{t('navbar.logo_subtitle')}</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="navbar-links desktop-only">
          <a href="#home" className="nav-link">{t('navbar.home')}</a>
          <a href="#story" className="nav-link">{t('navbar.story')}</a>
          <a href="#products" className="nav-link">{t('navbar.products')}</a>
          <a href="#why-organic" className="nav-link">{t('navbar.whyOrganic')}</a>
          <a href="#farming" className="nav-link">{t('navbar.farming')}</a>
          <a href="#contact" className="nav-link">{t('navbar.contact')}</a>
        </nav>

        {/* Right Actions */}
        <div className="navbar-actions">
          {/* Language Switcher */}
          <div className="lang-switcher-container desktop-only">
            <button 
              className="action-btn lang-btn" 
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              aria-label="Change language"
            >
              <Globe size={20} />
              <span className="current-lang">{i18n.language === 'ta' ? 'தமிழ்' : i18n.language === 'hi' ? 'हिंदी' : 'EN'}</span>
            </button>
            
            {isLangMenuOpen && (
              <div className="lang-dropdown">
                <button 
                  className={`lang-option ${i18n.language === 'ta' ? 'active' : ''}`}
                  onClick={() => changeLanguage('ta')}
                >
                  தமிழ் (Tamil)
                </button>
                <button 
                  className={`lang-option ${i18n.language === 'en' ? 'active' : ''}`}
                  onClick={() => changeLanguage('en')}
                >
                  English
                </button>
                <button 
                  className={`lang-option ${i18n.language === 'hi' ? 'active' : ''}`}
                  onClick={() => changeLanguage('hi')}
                >
                  हिंदी (Hindi)
                </button>
              </div>
            )}
          </div>

          <button className="action-btn desktop-only" aria-label={t('navbar.search') || "Search"}>
            <Search size={20} />
          </button>
          <button className="action-btn" aria-label={t('navbar.cart') || "Cart"}>
            <ShoppingBag size={20} />
          </button>
          <button 
            className="btn btn-primary shop-now-btn desktop-only"
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('navbar.shopNow')}
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-btn mobile-only" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-links">
          <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>{t('navbar.home')}</a>
          <a href="#story" onClick={() => setIsMobileMenuOpen(false)}>{t('navbar.story')}</a>
          <a href="#products" onClick={() => setIsMobileMenuOpen(false)}>{t('navbar.products')}</a>
          <a href="#why-organic" onClick={() => setIsMobileMenuOpen(false)}>{t('navbar.whyOrganic')}</a>
          <a href="#farming" onClick={() => setIsMobileMenuOpen(false)}>{t('navbar.farming')}</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>{t('navbar.contact')}</a>
          
          <div className="mobile-lang-options">
            <p className="mobile-lang-title">Language / மொழி:</p>
            <div className="mobile-lang-buttons">
              <button 
                className={`mobile-lang-btn ${i18n.language === 'ta' ? 'active' : ''}`}
                onClick={() => changeLanguage('ta')}
              >
                தமிழ்
              </button>
              <button 
                className={`mobile-lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
                onClick={() => changeLanguage('en')}
              >
                English
              </button>
              <button 
                className={`mobile-lang-btn ${i18n.language === 'hi' ? 'active' : ''}`}
                onClick={() => changeLanguage('hi')}
              >
                हिंदी
              </button>
            </div>
          </div>
          
          <button 
            className="btn btn-primary shop-now-btn-mobile"
            onClick={() => {
              setIsMobileMenuOpen(false);
              document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {t('navbar.shopNow')}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
