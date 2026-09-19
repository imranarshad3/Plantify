import { Search, ShoppingBag, User, ChevronDown } from "lucide-react";
import React from "react";
import icon from "./Images/icon.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-section">
      <nav className="navbar">
        <div className="nav-links">
          <a href="/" className="link">Shop</a>

          <a href="/" className="link products-link">
            Products
            <ChevronDown size={14} />
          </a>

          <a href="/" className="link">Fertilizer</a>
          <a href="/" className="link">Guide</a>
        </div>

        <div className="frame">
          <img src={icon} alt="Plantify Garden" />
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

