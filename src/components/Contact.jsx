import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, CheckCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success
  const sectionRef = useRef(null);

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
            <h2 className="contact-title">Let's Grow Together</h2>
            <p className="contact-text">
              Have questions about our products or farming practices? We'd love to hear from you.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4>Visit Us</h4>
                  <p>Tamil Nadu, India</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <Phone size={20} />
                </div>
                <div>
                  <h4>Call Us</h4>
                  <p>+91 XXXXX XXXXX</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <Mail size={20} />
                </div>
                <div>
                  <h4>Email Us</h4>
                  <p>hello@uzhaveulaginuyir.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container reveal" style={{ transitionDelay: '0.2s' }}>
            {formStatus === 'success' ? (
              <div className="success-message">
                <CheckCircle size={64} className="success-icon" />
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. We will get back to you shortly.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" required placeholder="Your name" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" required placeholder="Your email address" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" placeholder="Your phone number" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" required rows="4" placeholder="How can we help you?"></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-primary submit-btn"
                  disabled={formStatus === 'submitting'}
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
