import React, { useState } from "react";
import Navbar from "../../ReusedComponents/Navbar/Navbar";
import "./Productspage.css";

import Herosection from "./Components/Herosection/Herosection";
import ProductFilter from "./Components/Filter/ProductFilter";
import Toolsbar from "./Components/Toolsbar/Toolsbar";
import Collection from "./Components/Collections/Collection";
import Footer from "./Components/Footer/Footer";
import productsData from "./Components/Collections/Plantify_Products/data"; 

function Productspage() {
  const [sort, setSort] = useState("featured");
  const [view, setView] = useState("grid");

  const totalProducts = productsData.length;
  const currentDisplayedCount = 8; 
  return (
    <main className="products-page">

      <header className="products-navbar">
        <Navbar />
      </header>

      <section className="products-hero">
        <Herosection />
      </section>

      <section className="products-container">

        <div className="products-toolbar">
          <Toolsbar 
            productCount={currentDisplayedCount}
            totalProducts={totalProducts}
            sort={sort}
            setSort={setSort}
            view={view}
            setView={setView}
          />
        </div>

        <div className="products-content">

          <aside className="products-sidebar">
            <ProductFilter />
          </aside>

          <section className="products-collection">
            <Collection view={view} sort={sort} />
          </section>

        </div>

      </section>

      <div className="footer-part">
        <Footer />
      </div>

    </main>
  );
}

export default Productspage;
