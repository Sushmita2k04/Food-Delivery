import React from "react";
import "./Navbar.css";
import profile from "../assets/profile-pic.png"
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
  return (
    <div className="navbar-container">

      {/* Logo */}
      <div className="navbar-logo">
        <MdFastfood size={18} />
      </div>

      {/* Search Bar */}
      <form className="navbar-search">

        <IoSearch
          size={18}
          className="search-icon"
        />

        <input
          type="text"
          className="search-input"
          placeholder="Search food..."
        />

      </form>

      {/* Cart */}

      <div className="cart-profile">
        <div className="cart-container">

          <span className="cart-badge">
            0
          </span>

          <FaShoppingCart size={22} />

        </div>
        <div className="account">

          <img src={profile} alt="Profile" />

        </div>
      </div>
    </div>
  );
}

export default Navbar;