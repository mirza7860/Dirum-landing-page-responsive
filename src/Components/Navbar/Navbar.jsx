import React from "react";
import { IoReorderThree } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="main">
      <div className="navbar">
        <div className="menu-icons">
          <IoReorderThree color="rgba(222, 154, 20, 0.951)" />
        </div>
        <div className="logo">
          <img
            src="https://dirums.com/images/logo%20and%20bird.webp"
            alt="Logo Image"
          />
        </div>
        <div className="cart-wishlist">
          <FaRegHeart color="rgba(222, 154, 20, 0.951)" />
          <MdOutlineShoppingBag color="rgba(222, 154, 20, 0.951)" />
        </div>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Search for artworks, artists, themes and many more"
          required="true"
          id="search"
        ></input>
        <FiSearch color="rgba(222, 154, 20, 0.951)" />
      </div>
    </div>
  );
};

export default Navbar;
