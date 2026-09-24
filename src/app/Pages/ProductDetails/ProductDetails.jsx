import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../../ReusedComponents/Navbar/Navbar";
import ProductHero from "./ProductHero/ProductHero";

import {
  products,
} from "../ProductsPage/Components/Collections/Plantify_Products/data";

import ProductSpecs from "./ProductSpecs/ProductSpecs";
import ProductStroy from "./ProductStory/ProductStroy";
import ProductRelated from "./ProductRelated/ProductRelated";
import SiteFooter from "./SiteFooter/SiteFooter";

function ProductDetails() {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const product = products.find(
    (item) => String(item.id) === String(id)
  );

  if (!product) {
    return (
      <div className="product-details">
        <Navbar />
        <p>Product not found.</p>
      </div>
    );
  }

  return (
    <div className="product-details">
      <Navbar />

      <ProductHero product={product} />

      <ProductSpecs />

      <ProductStroy />

      <ProductRelated />

      <SiteFooter />
    </div>
  );
}

export default ProductDetails;
