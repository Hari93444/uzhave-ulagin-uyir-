import React from 'react';
import { Leaf, Camera, Share2, MonitorPlay, Phone as PhoneIcon } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <div className="footer-logo">
              <Leaf size={24} />
              <div className="footer-logo-text">
                <span className="title">Uzhave Ulagin Uyir</span>
                <span className="subtitle tamil-text">உழவே உலகின் உயிர்</span>
              </div>
            </div>
            <p className="footer-tagline">"Rooted in the soil. Connected to life."</p>
            
            <div className="footer-organic-image">
              <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80" alt="Fresh Organic Vegetables" />
            </div>
            
            <div className="social-icons">
              <a href="#" className="social-icon" aria-label="Instagram"><Camera size={20} /></a>
              <a href="#" className="social-icon" aria-label="Facebook"><Share2 size={20} /></a>
              <a href="#" className="social-icon" aria-label="YouTube"><MonitorPlay size={20} /></a>
              <a href="#" className="social-icon" aria-label="WhatsApp"><PhoneIcon size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#story">Our Story</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#farming">Farming</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Customer Care</h4>
            <ul className="footer-links">
              <li><a href="#">Shipping Policy</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Returns & Refunds</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Uzhave Ulagin Uyir. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
