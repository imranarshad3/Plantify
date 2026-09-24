import React from "react";
import "./ProductStory.css";
import image from "./image.png";

function ProductStory() {
  return (
    <section className="product-story">
      <div className="product-story-content">
        <span className="product-story-label">
          WHY YOU'LL LOVE IT
        </span>

        <h2 className="product-story-title">
          Bring a little jungle home.
        </h2>

        <p className="product-story-description">
          Large sculptural leaves, an elegant silhouette and forgiving care
          make the Monstera Deliciosa an effortless statement for living rooms,
          bedrooms and workspaces.
        </p>

        <div className="product-story-features">
          <div className="pd-feature">
            <span className="feature-number">01</span>
            <p>Air-purifying foliage</p>
          </div>

          <div className="pd-feature">
            <span className="feature-number">02</span>
            <p>Beginner-friendly care</p>
          </div>

          <div className="pd-feature">
            <span className="feature-number">03</span>
            <p>Hand-selected healthy plant</p>
          </div>
        </div>
      </div>

      <div className="pd-story-image">
        <img
          src={image}
          alt="Monstera Deliciosa plant"
        />
      </div>
    </section>
  );
}

export default ProductStory;
