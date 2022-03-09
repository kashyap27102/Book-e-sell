import React from 'react';
import Topbar from '../components/Topbar';
import { useRef } from 'react';
import axios from 'axios';
import './Login.css';
function Login() {
  const email = useRef();
  const password = useRef();

  const submithandler = (e) => {
    e.preventDefault();
    // axios.post('/api/login',)
    console.log(email.current.value);
    console.log(password.current.value);
  }
  return (
    <>
    <Topbar/>
      <div className="container">
        <h2 className="pageTitle">Login</h2>
        <div className="line"></div>
        <div className="box">
          <div className="left">
            <h3 className="title">New Customer</h3>
            <hr className='hr' />
            <div className='subtitle'>Registration is Free and easy</div>
            <ul className='listItems'>
              <li className='listItem'>Faster checkout</li>
              <li className='listItem'>Save Multiple shipping address</li>
              <li className='listItem'>view and track orders and more</li>
            </ul>
            <button className="createAccountBtn">Create an Account</button>
          </div>
          <div className="right">
            <h3 className="title">Registerd Customers</h3>
            <hr className='hr' />
            <div className='subtitle'>If you have an account with us please login.</div>
            <form onSubmit={submithandler}>
              <label htmlFor="email" className='inputlabel'>Email Address*</label>
              <input type="email" id='email' required className='inputfield' ref={email} />
              <label htmlFor="password" className='inputlabel'>Password*</label>
              <input type="password" required id='password' className='inputfield' ref={password} />
              <button type='submit' className="loginbtn">Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
