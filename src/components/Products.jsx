import React, { useEffect, useRef, useState } from 'react';
import { ShoppingCart, Leaf, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Products.css';

const Products = () => {
  const sectionRef = useRef(null);
  const { t } = useTranslation();
  
  const [showAll, setShowAll] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [orderStep, setOrderStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [paymentStatus, setPaymentStatus] = useState('waiting');

  const productData = [
    {
      id: 1,
      name: t('products.p1_name'),
      description: t('products.p1_desc'),
      price: "₹120",
      unit: "kg",
      image: "/images/rice.jpg"
    },
    {
      id: 2,
      name: t('products.p2_name'),
      description: t('products.p2_desc'),
      price: "₹150",
      unit: "kg",
      image: "/images/millets.jpg"
    },
    {
      id: 3,
      name: t('products.p3_name'),
      description: t('products.p3_desc'),
      price: "₹280",
      unit: "litre",
      image: "/images/oil.jpg"
    },
    {
      id: 4,
      name: t('products.p4_name'),
      description: t('products.p4_desc'),
      price: "₹180",
      unit: "kg",
      image: "/images/pulses.jpg"
    },
    {
      id: 5,
      name: t('products.p5_name'),
      description: t('products.p5_desc'),
      price: "₹350",
      unit: "500g",
      image: "/images/honey.jpg"
    },
    {
      id: 6,
      name: t('products.p6_name'),
      description: t('products.p6_desc'),
      price: "₹220",
      unit: "pack",
      image: "/images/spices.jpg"
    },
    {
      id: 7,
      name: "Organic Jaggery",
      description: "Natural cane sugar alternative.",
      price: "₹80",
      unit: "kg",
      image: "/images/spices.jpg"
    },
    {
      id: 8,
      name: "Pure Ghee",
      description: "Traditional bilona method ghee.",
      price: "₹800",
      unit: "litre",
      image: "/images/oil.jpg"
    },
    {
      id: 9,
      name: "Herbal Tea",
      description: "Blend of natural herbs and spices.",
      price: "₹150",
      unit: "pack",
      image: "/images/pulses.jpg"
    }
  ];

  const displayedProducts = showAll ? productData : productData.slice(0, 6);

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

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    if (elements) {
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (elements) {
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, [showAll]); // Re-run when showAll changes to animate new items

  const openOrderModal = (product) => {
    setSelectedProduct(product);
    setQuantity(1);
    setOrderStep(1);
  };

  const closeOrderModal = () => {
    setSelectedProduct(null);
    setOrderStep(1);
    setPaymentStatus('waiting');
  };

  const handleBookOrder = () => {
    window.dispatchEvent(
      new CustomEvent('show-toast', { 
        detail: { message: `Order booked successfully for ${quantity}x ${selectedProduct?.name}!` } 
      })
    );
    closeOrderModal();
  };

  useEffect(() => {
    let timeout1, timeout2;
    if (orderStep === 3) {
      setPaymentStatus('waiting');
      // Simulate automatic scanning and payment after 4 seconds
      timeout1 = setTimeout(() => {
        setPaymentStatus('success');
        // Wait 1.5s after showing success before closing the modal
        timeout2 = setTimeout(() => {
          handleBookOrder();
        }, 1500);
      }, 4000);
    }
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [orderStep]);

  return (
    <section id="products" className="products section-padding" ref={sectionRef}>
      <div className="container">
        <div className="products-header reveal">
          <h2 className="products-title">{t('products.title')}</h2>
          <p className="products-subtitle">{t('products.subtitle')}</p>
        </div>

        <div className="products-grid">
          {displayedProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="product-card reveal active" 
              style={{ transitionDelay: `${(index % 6) * 0.1}s` }}
            >
              <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-badge">
                  <Leaf size={12} /> {t('products.badge')}
                </div>
                <div className="product-overlay">
                  <button 
                    className="btn btn-primary add-to-cart-overlay"
                    onClick={() => openOrderModal(product)}
                  >
                    <ShoppingCart size={18} /> {t('products.addBtn')}
                  </button>
                </div>
              </div>
              
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-desc">{product.description}</p>
                <div className="product-footer">
                  <span className="product-price">{product.price} / {product.unit}</span>
                  <button 
                    className="btn-icon add-to-cart-btn" 
                    aria-label="Add to cart"
                    onClick={() => openOrderModal(product)}
                  >
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="products-action reveal active" style={{ transitionDelay: '0.6s' }}>
            <button 
              className="btn btn-outline"
              onClick={() => setShowAll(true)}
            >
              {t('products.viewBtn')}
            </button>
          </div>
        )}
      </div>

      {selectedProduct && (
        <div className="order-modal-overlay">
          <div className="order-modal">
            <button className="modal-close-btn" onClick={closeOrderModal}>
              <X size={24} />
            </button>
            <h3 className="modal-title">
              {orderStep === 1 ? 'Book Your Order' : 'Shipping Details'}
            </h3>
            
            {orderStep === 1 ? (
              <>
                <div className="modal-product-details">
                  <div className="modal-product-img">
                    <img src={selectedProduct.image} alt={selectedProduct.name} />
                  </div>
                  <div className="modal-product-info">
                    <h4>{selectedProduct.name}</h4>
                    <p className="modal-price">{selectedProduct.price} <span className="modal-unit">/ {selectedProduct.unit}</span></p>
                    <p className="modal-discount">✨ 10% Discount applied on checkout!</p>
                  </div>
                </div>

                <div className="modal-quantity">
                  <label htmlFor="quantity">Quantity ({selectedProduct.unit}):</label>
                  <div className="qty-input-group">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                    <input 
                      type="number" 
                      id="quantity"
                      min="1" 
                      value={quantity} 
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))} 
                    />
                    <button onClick={() => setQuantity(quantity + 1)}>+</button>
                  </div>
                </div>
                
                <div className="modal-total">
                  <span>Estimated Total:</span>
                  <span>₹{parseInt(selectedProduct.price.replace('₹', '')) * quantity}</span>
                </div>

                <div className="modal-actions">
                  <button className="btn btn-primary book-order-btn" onClick={() => setOrderStep(2)}>
                    Next: Shipping & Payment
                  </button>
                </div>
              </>
            ) : orderStep === 2 ? (
              <form 
                className="order-details-form" 
                onSubmit={(e) => { 
                  e.preventDefault(); 
                  if (paymentMethod === 'upi') {
                    setOrderStep(3);
                  } else {
                    handleBookOrder(); 
                  }
                }}
              >
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" required placeholder="Enter your name" />
                </div>
                
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" required placeholder="Enter your phone number" />
                </div>

                <div className="form-group">
                  <label>Delivery Address</label>
                  <textarea required placeholder="Enter your full delivery address" rows="2"></textarea>
                </div>

                <div className="form-group">
                  <label>Payment Method</label>
                  <div className="payment-options">
                    <label className="radio-label">
                      <input 
                        type="radio" 
                        name="payment" 
                        value="upi" 
                        checked={paymentMethod === 'upi'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        required 
                      />
                      <span>UPI Payment</span>
                    </label>
                    <label className="radio-label">
                      <input 
                        type="radio" 
                        name="payment" 
                        value="cod" 
                        checked={paymentMethod === 'cod'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        required 
                      />
                      <span>Cash on Delivery</span>
                    </label>
                  </div>
                </div>

                <div className="modal-actions form-actions">
                  <button type="button" className="btn btn-outline" onClick={() => setOrderStep(1)}>
                    Back
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Place Order
                  </button>
                </div>
              </form>
            ) : null}

            {orderStep === 3 && (
              <div className="upi-payment-step">
                {paymentStatus === 'waiting' ? (
                  <>
                    <div className="upi-qr-placeholder" onClick={() => setPaymentStatus('success')}>
                      <img 
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi://pay?pa=uzhaveulaginuyir@upi&pn=UzhaveUlaginUyir&am=${parseInt(selectedProduct.price.replace('₹', '')) * quantity}`} 
                        alt="Dummy UPI QR Code" 
                        className="dummy-qr-image"
                      />
                    </div>
                    <h4 className="upi-heading">Waiting for Payment...</h4>
                    <p className="upi-desc">Scan the QR code with any UPI app to complete your payment.</p>
                  </>
                ) : (
                  <>
                    <div className="payment-success-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#2e7d4f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <h4 className="upi-heading" style={{ color: 'var(--color-primary-dark)' }}>Payment Received!</h4>
                    <p className="upi-desc">Your order is being processed...</p>
                  </>
                )}
                
                <div className="upi-details-box">
                  <p><strong>UPI ID:</strong> uzhaveulaginuyir@upi</p>
                  <p><strong>Amount:</strong> ₹{parseInt(selectedProduct.price.replace('₹', '')) * quantity}</p>
                </div>
                
                {paymentStatus === 'waiting' && (
                  <div className="modal-actions form-actions">
                    <button type="button" className="btn btn-outline" onClick={() => setOrderStep(2)}>
                      Cancel Payment
                    </button>
                    <button type="button" className="btn btn-primary" onClick={() => { setPaymentStatus('success'); setTimeout(handleBookOrder, 1500); }}>
                      I have made the payment
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
