import React, { useRef } from "react";
import Topbar from "../components/Topbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../Store/user-slice";
import "./Login.css";

function Login() {
  const email = useRef();
  const password = useRef();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const userToken = useSelector((state) => state.user.token);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const submithandler = async (e) => {
    e.preventDefault();
    const user = {
      email: email.current.value,
      password: password.current.value,
    };
    await axios
      .post("/auth/login", user)
      .then((res) => {
        alert(res.data.message);
        console.log(res);
        const token = res.data.token;
        dispatch(userActions.login(token));
        // navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Topbar />
      <div className="container">
        <h2 className="pageTitle">Login</h2>
        <div className="line"></div>
        <div className="box">
          <div className="left">
            <h3 className="title">New Customer</h3>
            <hr className="hr" />
            <div className="subtitle">Registration is Free and easy</div>
            <ul className="listItems">
              <li className="listItem">Faster checkout</li>
              <li className="listItem">Save Multiple shipping address</li>
              <li className="listItem">view and track orders and more</li>
            </ul>
            <button className="createAccountBtn">Create an Account</button>
          </div>
          <div className="right">
            <h3 className="title">Registerd Customers</h3>
            <hr className="hr" />
            <div className="subtitle">
              If you have an account with us please login.
            </div>
            <form onSubmit={submithandler}>
              <label htmlFor="email" className="inputlabel">
                Email Address*
              </label>
              <input
                type="email"
                id="email"
                required
                className="inputfield"
                ref={email}
              />
              <label htmlFor="password" className="inputlabel">
                Password*
              </label>
              <input
                type="password"
                required
                id="password"
                className="inputfield"
                ref={password}
              />
              <button type="submit" className="loginbtn">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
