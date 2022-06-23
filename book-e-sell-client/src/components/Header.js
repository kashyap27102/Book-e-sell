import React from "react";
import "./header.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const Header = () => {
  return (
    <div className="navbar">
      <div className="container">
          <div className="logo">
            <h2>E-BOOK STORE</h2>
          </div>
          <div className="cart-box">
            <ShoppingCartIcon />
            <span>0 Cart</span>
          </div>
          <AccountCircleIcon />
        
      </div>
    </div>
  );
};

export default Header;
