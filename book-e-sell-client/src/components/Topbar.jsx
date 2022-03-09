import React, { useContext } from 'react';
import './Topbar.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import Serchbar from './Searchbar';
import { color } from '@mui/system';
function Topbar({user}) {
  const UserLoggedin = () => {
    // const count = useContext(CountContext);
    return (
      <>
        <div className="logo-wrapper">
          <Link to='/' style={{ textDecoration: 'none' }}>
          <h2 className='logo'>E-BOOK STORE</h2>
          </Link>
        </div>
        <div >
          <Serchbar />
        </div>
        <div className="authenticateArea">
          <div className="left-wrap">
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <span className='navbarLogin'>Logout</span>
            </Link>
          </div>
          <div className='right-wrap'>
            <Link to="/cart" style={{ textDecoration: 'none' ,color:'black' }}>
            <div className="icon-wrapper">
              <ShoppingCartIcon className='icon' />
              <span className='cartItemCount'><span>0</span> Cart</span>
            </div>
            </Link>
          </div>
        </div>
      </>
    )
  }
  const UserLoggedout = () => {
    return (
      <>
        <div className="logo-wrapper">
          <h2 className='logo'>E-BOOK STORE</h2>
        </div>
        <div className="authenticateArea">
          <div className="left-wrap">
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <span className='navbarLogin'>Login</span>
            </Link>
            <div className="vl"></div>
            <Link to="/register" style={{ textDecoration: 'none' }}>
              <span className='navbarRegister'>Register</span>
            </Link>
          </div>
          <div className='right-wrap'>
            <div className="icon-wrapper">
              <ShoppingCartIcon className='icon' />
              <span className='cartItemCount'><span>0</span> Cart</span>
            </div>
          </div>
        </div>
      </>
    )
  }
  return (
    <>
      <div className="navbar">
        {user ? <UserLoggedin/> :<UserLoggedout/>}
      </div>
    </>
  )
}

export default Topbar;
