import React, { useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Testimonials.css';

const Testimonials = () => {
  const sectionRef = useRef(null);
  const { t } = useTranslation();

  const testimonialsData = [
    {
      id: 1,
      quote: t('testimonials.t1_quote'),
      author: "Priya",
      location: "Chennai"
    },
    {
      id: 2,
      quote: t('testimonials.t2_quote'),
      author: t('testimonials.author2', { defaultValue: 'Arun' }),
      location: t('testimonials.location2', { defaultValue: 'Coimbatore' })
    },
    {
      id: 3,
      quote: t('testimonials.t3_quote'),
      author: t('testimonials.author3', { defaultValue: 'Meena' }),
      location: t('testimonials.location3', { defaultValue: 'Madurai' })
    }
  ];

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
          <h2 className="testimonials-title">{t('testimonials.title')}</h2>
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
