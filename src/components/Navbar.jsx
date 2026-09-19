import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X, Leaf } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <Leaf className="logo-icon" size={28} />
          <div className="logo-text">
            <span className="logo-title">Uzhave Ulagin Uyir</span>
            <span className="logo-subtitle tamil-text">உழவே உலகின் உயிர்</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="navbar-links desktop-only">
          <a href="#home" className="nav-link">Home</a>
          <a href="#story" className="nav-link">Our Story</a>
          <a href="#products" className="nav-link">Products</a>
          <a href="#why-organic" className="nav-link">Why Organic</a>
          <a href="#farming" className="nav-link">Farming</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        {/* Right Actions */}
        <div className="navbar-actions">
          <button className="action-btn desktop-only" aria-label="Search">
            <Search size={20} />
          </button>
          <button className="action-btn" aria-label="Cart">
            <ShoppingBag size={20} />
          </button>
          <button className="btn btn-primary shop-now-btn desktop-only">
            Shop Now
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
          <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
          <a href="#story" onClick={() => setIsMobileMenuOpen(false)}>Our Story</a>
          <a href="#products" onClick={() => setIsMobileMenuOpen(false)}>Products</a>
          <a href="#why-organic" onClick={() => setIsMobileMenuOpen(false)}>Why Organic</a>
          <a href="#farming" onClick={() => setIsMobileMenuOpen(false)}>Farming</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          <button className="btn btn-primary shop-now-btn-mobile">Shop Now</button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
