import React from "react";
import "./Topbar.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import Serchbar from "./Searchbar";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../Store/user-slice";

function Topbar() {
  const totalCartItem = useSelector(state=>state.cart.totalItem);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const logoutHandler = () => {
    dispatch(userActions.logout());
  };
  return (
    <>
      <div className="navbar">
        <div className="logo-wrapper">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h2 className="logo">E-BOOK STORE</h2>
        </Link>
        </div>
        <div className="authenticateArea">
          <div className="left-wrap">
            {isLoggedIn ? (
              <span onClick={logoutHandler} className="navbarLogin">
                Logout
              </span>
            ) : (
              <>
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <span className="navbarLogin">Login</span>
                </Link>
                <div className="vl"></div>
                <Link to="/register" style={{ textDecoration: "none" }}>
                  <span className="navbarRegister">Register</span>
                </Link>
              </>
            )}
          </div>
          <div className="right-wrap">
            {isLoggedIn && (
              <>
                <Link to="/cart" style={{ textDecoration: "none" }}>
                  <div className="icon-wrapper">
                    <ShoppingCartIcon className="icon" />
                    <span className="cartItemCount">
                      <span>{totalCartItem}</span> Cart
                    </span>
                  </div>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Topbar;
