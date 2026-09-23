import React from 'react';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <section className="stay-connected-section section-padding">
      <div className="container">
        <div className="stay-connected-box reveal">
          <div className="stay-connected-content">
            <h2>Stay Connected</h2>
            <p>Get updates on new products, health tips and special offers.</p>
          </div>
          
          <div className="stay-connected-form">
            <input type="email" placeholder="Enter your email address" />
            <button className="subscribe-btn">Subscribe</button>
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
