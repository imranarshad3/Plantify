import React from "react";
import "./ProductRelated.css";

import image from "./Images/image.png";
import image2 from "./Images/Image2.png"
import image3 from "./Images/Image3.png";
import { Link } from "react-router-dom";

function ProductRelatedCard({ product }) {
    
  return (
    <article className="pd-card">
      <div className="pd-card-image">
        <img
          src={product.image}
          alt={product.title}
        />
      </div>

      <div className="pd-card-content">
        <h2 className="pd-related-title">
          {product.title}
        </h2>

        <p className="pd-related-price">
          ${product.price}
        </p>
      </div>
    </article>
  );
}

function ProductRelated() {
  const relatedProducts = [
    {
      id: 1,
      title: "Bird of Paradise",
      price: 62,
      image: image,
    },
    {
      id: 2,
      title: "Fiddle Leaf Fig",
      price: 55,
      image: image2,
    },
    {
      id: 3,
      title: "Calathea Orbifolia",
      price: 44,
      image: image3,
    },
  ];

  return (
    <section className="product-related-section">
      <div className="pd-related-head">
        <p className="pd-related-label">
          YOU MAY ALSO LIKE
        </p>

        <div className="heading-link">
          <h3>
            Complete your green space
          </h3>

          <Link to={"/products"}>
             View all →
            </Link>
        </div>
      </div>

      <div className="pd-related-products">
        {relatedProducts.map((product) => (
          <ProductRelatedCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductRelated;
