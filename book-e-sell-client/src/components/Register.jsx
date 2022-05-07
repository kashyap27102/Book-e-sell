import React, { useRef } from "react";
import "./Register.css";
import Topbar from "./Topbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// conform password implementation is panding 
function Register() {
    let navigate = useNavigate();
    const firstname = useRef();
    const lastname = useRef();
    const email = useRef();
    const mobile = useRef();
    const password = useRef();
    const conformpassword = useRef();
    const submithandler = async (e) => {
        e.preventDefault();
        const user = {
            firstName: firstname.current.value,
            lastName: lastname.current.value,
            email: email.current.value,
            mobileNo: mobile.current.value,
            password: password.current.value,
        };
        console.log(user)
        await axios
        .post("/auth/signup", user)
        .then((res) => {
            console.log(res);
            alert("New User Created");
            navigate('/login');
        })
        .catch((err) => {
            console.log(err);
        });
  };
  return (
    <>
      <Topbar />
      <div className="container">
        <h2 className="pageTitle">Create Account</h2>
        <form className="register-details-wrapper" onSubmit={submithandler}>
          <div className="personalInfo">
            <h3 className="title">Personal Information</h3>
            <hr className="r-hr" />
            <h4 className="desc">
              Plese enter the following information to create Account
            </h4>
            <div className="name">
              <div className="name-left">
                <label htmlFor="firstname" className="inputlabel">
                  First Name*
                </label>
                <input
                  type="text"
                  id="firstname"
                  className="r-inputfield"
                  ref={firstname}
                />
              </div>
              <div style={{ flex: "0.5" }}></div>
              <div className="name-right">
                <label htmlFor="lastname" className="inputlabel">
                  Last Name*
                </label>
                <input
                  type="text"
                  id="lastname"
                  className="r-inputfield"
                  ref={lastname}
                />
              </div>
            </div>
            <label htmlFor="email" className="inputlabel">
              Email Address*
            </label>
            <input
              type="email"
              id="email"
              className="r-inputfield"
              ref={email}
            />
            <label htmlFor="mobile" className="inputlabel">
              Mobile No*
            </label>
            <input
              type="mobile"
              id="mobile"
              className="r-inputfield"
              ref={mobile}
            />
          </div>
          <div className="loginInfo">
            <h3 className="title">Login Information</h3>
            <hr className="r-hr" />
            <div className="password">
              <div className="pass-left">
                <label htmlFor="password" className="inputlabel">
                  Password*
                </label>
                <input
                  type="text"
                  id="password"
                  className="r-inputfield"
                  ref={password}
                />
              </div>
              <div style={{ flex: "0.5" }}></div>
              <div className="pass-right">
                <label htmlFor="conformpass" className="inputlabel">
                  Conform Password*
                </label>
                <input
                  type="text"
                  id="conformpass"
                  className="r-inputfield"
                  ref={conformpassword}
                />
              </div>
            </div>
          </div>
          <button type="submit" className="registerbtn">
            Register
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;
