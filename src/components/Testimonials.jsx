import React, { useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    quote: "Knowing where our food comes from makes every meal feel more meaningful.",
    author: "Priya",
    location: "Chennai"
  },
  {
    id: 2,
    quote: "The freshness and quality are noticeably different. It feels like bringing the farm home.",
    author: "Arun",
    location: "Coimbatore"
  },
  {
    id: 3,
    quote: "Simple, natural and trustworthy products for our family.",
    author: "Meena",
    location: "Madurai"
  }
];

const Testimonials = () => {
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

  return (
    <section className="testimonials section-padding" ref={sectionRef}>
      <div className="container">
        <div className="testimonials-header reveal">
          <h2 className="testimonials-title">What Our Customers Say</h2>
        </div>

        <div className="testimonials-grid">
          {testimonialsData.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="testimonial-card reveal"
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <Quote className="quote-icon" size={32} />
              <p className="testimonial-quote">"{testimonial.quote}"</p>
              <div className="testimonial-author">
                <span className="author-name">— {testimonial.author}</span>
                <span className="author-location">, {testimonial.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
