import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { userActions } from "../Store/user-slice";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const email = useRef();
  const password = useRef();
  const dispatch = useDispatch();
  const [error, setError] = useState(false);

  useEffect(() => {}, [error]);

  const submithandler = async (e) => {
    e.preventDefault();
    const user = {
      email: email.current.value,
      password: password.current.value,
    };
    await axios
      .post("/auth/login", user)
      .then((res) => {
        // alert(res.data.message);
        const data = {
          token: res.data.token,
          id: res.data.userId,
        };
        dispatch(userActions.login(data));
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  };
  return (
    <>
      <div className="container">
        {/* <h2 className="pageTitle">Login</h2> */}
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
            <Link to="/register">
              <button className="createAccountBtn">Create an Account</button>
            </Link>
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
              {error && (
                <div className="error-message">
                  <span>* Username and Password doesn't match</span>
                </div>
              )}
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
