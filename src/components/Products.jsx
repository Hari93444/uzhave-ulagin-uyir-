import React, { useEffect, useRef } from 'react';
import { ShoppingCart, Leaf } from 'lucide-react';
import './Products.css';

const productData = [
  {
    id: 1,
    name: "Organic Rice",
    description: "Wholesome rice grown with traditional farming practices.",
    price: "₹120 / kg",
    image: "/images/rice.jpg"
  },
  {
    id: 2,
    name: "Organic Millets",
    description: "Nutritious traditional grains packed with natural goodness.",
    price: "₹150 / kg",
    image: "/images/millets.jpg"
  },
  {
    id: 3,
    name: "Cold Pressed Oil",
    description: "Pure, naturally extracted oil made without unnecessary processing.",
    price: "₹280 / litre",
    image: "/images/oil.jpg"
  },
  {
    id: 4,
    name: "Organic Pulses",
    description: "Protein-rich pulses carefully grown and naturally processed.",
    price: "₹180 / kg",
    image: "/images/pulses.jpg"
  },
  {
    id: 5,
    name: "Natural Honey",
    description: "Pure honey collected from natural surroundings.",
    price: "₹350 / 500g",
    image: "/images/honey.jpg"
  },
  {
    id: 6,
    name: "Traditional Spices",
    description: "Aromatic spices grown and prepared with care.",
    price: "₹220 / pack",
    image: "/images/spices.jpg"
  }
];

const Products = () => {
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
          <h2 className="products-title">Nature's Finest, Carefully Grown</h2>
          <p className="products-subtitle">Wholesome organic products for a healthier way of living.</p>
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
                  <Leaf size={12} /> Organic
                </div>
                <div className="product-overlay">
                  <button className="btn btn-primary add-to-cart-overlay">
                    <ShoppingCart size={18} /> Add to Cart
                  </button>
                </div>
              </div>
              
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-desc">{product.description}</p>
                <div className="product-footer">
                  <span className="product-price">{product.price}</span>
                  <button className="btn-icon add-to-cart-btn" aria-label="Add to cart">
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="products-action reveal" style={{ transitionDelay: '0.6s' }}>
          <button className="btn btn-outline">View All Products</button>
        </div>
      </div>
    </section>
  );
};

export default Products;
