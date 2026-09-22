import React from "react";
import "./ProductCard.css"

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-info">
        <div className="title-price">
          <p className="title">{product.name}</p>
          <p className="price">${product.price}</p>
        </div>

        <p className="pot-color">Pot color</p>

        <div className="product-bottom">
          <div className="colors">
            <span className="color black"></span>
            <span className="color pink"></span>
            <span className="color cream"></span>
            <span className="color brown"></span>
          </div>

          <button className="buy-btn">Buy</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
