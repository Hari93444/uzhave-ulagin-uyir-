import React from 'react';
import { Camera, Share2, MonitorPlay, Phone as PhoneIcon, MapPin, Mail, Clock } from 'lucide-react';
import './Footer.css';

const Footer = () => {
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
                <span className="title">Uzhave Ulagin Uyir</span>
                <span className="subtitle tamil-text">உழவே உலகின் உயிர்</span>
              </div>
            </div>
            <p className="footer-tagline">Natural Products | Healthy Life | Sustainable Future</p>
            
            <div className="footer-about-text">
              <p>Bringing you the best of nature's goodness, supporting farmers and promoting a healthier, sustainable future.</p>
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
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#products">All Products</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#farmers">Our Farmers</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Categories</h4>
            <ul className="footer-links">
              <li><a href="#">Millets & Grains</a></li>
              <li><a href="#">Natural Foods</a></li>
              <li><a href="#">Herbal Products</a></li>
              <li><a href="#">Traditional Oils</a></li>
              <li><a href="#">Spices & Masala</a></li>
              <li><a href="#">Personal Care</a></li>
              <li><a href="#">Home & Living</a></li>
              <li><a href="#">Gift Packs</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="footer-contact-col">
            <h4 className="footer-heading">Contact Us</h4>
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
                  <span>Mon - Sat : 9.00 AM - 6.00 PM</span>
                  <span className="holiday-text">(Sunday Holiday)</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">&copy; 2024 Uzhave Ulagin Uyir. All Rights Reserved.</p>
          <div className="footer-legal-links">
            <a href="#">Privacy Policy</a>
            <span className="separator">|</span>
            <a href="#">Terms & Conditions</a>
            <span className="separator">|</span>
            <a href="#">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
