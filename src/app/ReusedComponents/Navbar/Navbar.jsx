import React from "react";
import { Search, ShoppingBag, User, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import icon from "./Images/icon.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-section">
      <nav className="navbar">

        <div className="nav-links">
          <Link to="/" className="link">
            Shop
          </Link>

          <Link to="/products" className="link products-link">
            Products
            <ChevronDown size={14} />
          </Link>

          <Link to="/fertilizer" className="link">
            Fertilizer
          </Link>

          <Link to="/guide" className="link">
            Guide
          </Link>
        </div>

        <div className="frame">
          <Link to="/">
            <img src={icon} alt="Plantify Garden" />
          </Link>
        </div>

        <div className="actions">
          <Search size={21} strokeWidth={1.5} />
          <User size={21} strokeWidth={1.5} />
          <ShoppingBag size={21} strokeWidth={1.5} />
        </div>

      </nav>
    </div>
  );
}

export default Navbar;
