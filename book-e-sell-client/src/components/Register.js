import React, { useRef, useState } from "react";
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  let navigate = useNavigate();
  const [error, setError] = useState(false);
  const firstname = useRef();
  const lastname = useRef();
  const email = useRef();
  const mobile = useRef();
  const password = useRef();
  const conformpassword = useRef();

  const submithandler = async (e) => {
    e.preventDefault();
    if (password.current.value !== conformpassword.current.value)
      setError(true);
    else {
      const user = {
        firstName: firstname.current.value,
        lastName: lastname.current.value,
        email: email.current.value,
        mobileNo: mobile.current.value,
        password: password.current.value,
      };
      console.log(user);
      await axios
        .post("/auth/signup", user)
        .then((res) => {
          console.log(res);
          alert("New User Created");
          navigate("/login");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <>
      <div className="container">
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
                <input type="text" id="firstname" ref={firstname} required />
              </div>
              <div style={{ flex: "0.5" }}></div>
              <div className="name-right">
                <label htmlFor="lastname" className="inputlabel">
                  Last Name*
                </label>
                <input type="text" id="lastname" ref={lastname} required />
              </div>
            </div>
            <label htmlFor="email" className="inputlabel">
              Email Address*
            </label>
            <input type="email" id="email" ref={email} required />
            <label htmlFor="mobile" className="inputlabel">
              Mobile No*
            </label>
            <input type="mobile" id="mobile" ref={mobile} required />
          </div>
          {error && (
            <div className="error-message">
              <span>* Password and Conform Password is not same</span>
            </div>
          )}
          <div className="loginInfo">
            <div className="password">
              <div className="pass-left">
                <label htmlFor="password" className="inputlabel">
                  Password*
                </label>
                <input type="text" id="password" ref={password} required />
              </div>
              <div style={{ flex: "0.5" }}></div>
              <div className="pass-right">
                <label htmlFor="conformpass" className="inputlabel">
                  Conform Password*
                </label>
                <input
                  type="password"
                  id="conformpass"
                  ref={conformpassword}
                  required
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
