import React, { useEffect, useRef } from 'react';
import { ShoppingCart, Leaf } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Products.css';

const Products = () => {
  const sectionRef = useRef(null);
  const { t } = useTranslation();

  const productData = [
    {
      id: 1,
      name: t('products.p1_name'),
      description: t('products.p1_desc'),
      price: "₹120 / kg",
      image: "/images/rice.jpg"
    },
    {
      id: 2,
      name: t('products.p2_name'),
      description: t('products.p2_desc'),
      price: "₹150 / kg",
      image: "/images/millets.jpg"
    },
    {
      id: 3,
      name: t('products.p3_name'),
      description: t('products.p3_desc'),
      price: "₹280 / litre",
      image: "/images/oil.jpg"
    },
    {
      id: 4,
      name: t('products.p4_name'),
      description: t('products.p4_desc'),
      price: "₹180 / kg",
      image: "/images/pulses.jpg"
    },
    {
      id: 5,
      name: t('products.p5_name'),
      description: t('products.p5_desc'),
      price: "₹350 / 500g",
      image: "/images/honey.jpg"
    },
    {
      id: 6,
      name: t('products.p6_name'),
      description: t('products.p6_desc'),
      price: "₹220 / pack",
      image: "/images/spices.jpg"
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
      { threshold: 0.1 }
    );

    const elements = sectionRef.current.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section id="products" className="products section-padding" ref={sectionRef}>
      <div className="container">
        <div className="products-header reveal">
          <h2 className="products-title">{t('products.title')}</h2>
          <p className="products-subtitle">{t('products.subtitle')}</p>
        </div>

        <div className="products-grid">
          {productData.map((product, index) => (
            <div 
              key={product.id} 
              className="product-card reveal" 
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-badge">
                  <Leaf size={12} /> {t('products.badge')}
                </div>
                <div className="product-overlay">
                  <button 
                    className="btn btn-primary add-to-cart-overlay"
                    onClick={() => alert('Item added to cart!')}
                  >
                    <ShoppingCart size={18} /> {t('products.addBtn')}
                  </button>
                </div>
              </div>
              
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-desc">{product.description}</p>
                <div className="product-footer">
                  <span className="product-price">{product.price}</span>
                  <button 
                    className="btn-icon add-to-cart-btn" 
                    aria-label="Add to cart"
                    onClick={() => alert('Item added to cart!')}
                  >
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="products-action reveal" style={{ transitionDelay: '0.6s' }}>
          <button 
            className="btn btn-outline"
            onClick={() => alert('Full product catalog coming soon!')}
          >
            {t('products.viewBtn')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
