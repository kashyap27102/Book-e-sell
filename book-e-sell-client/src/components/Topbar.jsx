import React, { useState } from "react";
import "./Topbar.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import Serchbar from "./Searchbar";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../Store/user-slice";

function Topbar() {
  const totalCartItem = useSelector((state) => state.cart.totalItem);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const logoutHandler = () => {
    dispatch(userActions.logout());
  };
  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <div className="navbar-left">
            <Link to="/" style={{ textDecoration: "none" }}>
              <h2 className="logo">E-BOOK STORE</h2>
            </Link>
          </div>
          {/* <Serchbar/> */}
          <div className="navbar-right">
            {!isLoggedIn && (
              <>
                <div className="nav-item">
                  <Link to="/login">
                    <span>Login</span>
                  </Link>
                </div>
                <div className="nav-item">
                  <Link to="/register">
                    <span>Register</span>
                  </Link>
                </div>
              </>
            )}
            {isLoggedIn && (
              <>
                <div className="nav-item">
                  <Link to="/cart" style={{ textDecoration: "none" }}>
                    <div className="icon-wrapper">
                      <ShoppingCartIcon className="icon" />
                      <span className="cartItemCount">
                        <span>{totalCartItem}</span>
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="nav-item">
                  <AccountCircleIcon
                    style={{
                      fontSize: "35px",
                      color: "black",
                      display: "flex",
                      cursor: "pointer",
                    }}
                    onClick={() => setOpen(!open)}
                  />
                </div>
                {open && (
                  <div className="drop-down">
                    <ui className="dropdown-items">
                      
                      <Link to="/orders" className="link">
                        <li className="dorpdown-item">Your Orders</li>
                      </Link>
                      <hr />
                      <Link to="/sell-book" className="link">
                        <li className="dorpdown-item">Sell Book</li>
                      </Link>
                      <hr />
                      <Link to="/edit-profile">
                        <li className="dorpdown-item">Edit Profile</li>
                      </Link>
                      <hr />
                      <li className="dorpdown-item" onClick={logoutHandler}>
                        Logout
                      </li>
                    </ui>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Topbar;

{
  /* <div className="left-wrap">
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
          </div> */
}
