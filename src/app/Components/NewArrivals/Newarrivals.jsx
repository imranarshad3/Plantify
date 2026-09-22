import React from 'react';
import { newArrivals } from '../../../../Data/data';
import './Newarrivals.css';

function Newarrivals() {
  const handleProductClick = (productId) => {
    console.log(`Navigating to product details for ID: ${productId}`);
  };

  return (
    <section className="newarrivals-section">
      <div className="new-arrivals">
        <div className="nav-header">
          <h2>Colorful New Arrivals</h2>
          <a href="#view-all" className="view-all-link">view all</a>
        </div>

        <div className="images-grid">
          {newArrivals.map((pro, index) => (
            <button 
              type="button"
              className="product-card-btn" 
              key={index}
              onClick={() => handleProductClick(pro.id || index)}
            >
              <img src={pro.image} alt={pro.name || "Flower"} />
              <div className="product-overlay">
                <h3>{pro.name}</h3>
                <span className="more-info">more information &rarr;</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Newarrivals;

