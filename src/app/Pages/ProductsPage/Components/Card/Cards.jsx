import React, { useState } from "react";
import { Heart, Eye, Star } from "lucide-react";
import "./Cards.css";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlistClick = (e) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  return (
    <article className="product-card">
      <div className="product-card-image">
        {product.badge && (
          <span className="product-badge">
            {product.badge}
          </span>
        )}

        <div className="product-actions">
          <button 
            className="action-btn" 
            aria-label="Add to wishlist"
            onClick={handleWishlistClick}
          >
            <Heart 
              size={18} 
              strokeWidth={1.5} 
              fill={isWishlisted ? "#ff4d4d" : "none"} 
              color={isWishlisted ? "#ff4d4d" : "currentColor"}
            />
          </button>
          <button className="action-btn" aria-label="Quick view">
            <Link to={`/product/${product.id}`}>
                <Eye size={18} strokeWidth={1.5} style={{color:"white"}} />
            </Link>
          </button>
        </div>

        <img
          src={product.images[0]}
          alt={product.name}
        />

        <Link to={`/product/${product.id}`}
        className="add-to-cart-btn">
            ADD TO CART — ${product.price}
        </Link>
        
      </div>

      <div className="product-card-content">
        <span className="product-category">
          {product.category}
        </span>

        <h2 className="product-name">
          {product.name}
        </h2>

        <div className="product-rating">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              size={15}
              strokeWidth={1.5}
              fill={index < product.rating ? "currentColor" : "none"}
            />
          ))}
        </div>

        <div className="product-card-bottom">
          <div className="product-price">
            <span>${product.price}</span>

            {product.oldPrice && (
              <del>${product.oldPrice}</del>
            )}
          </div>

          {product.colors?.length > 0 && (
            <div className="product-colors">
              {product.colors.map((color, index) => (
                <span
                  key={index}
                  className="product-color"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
