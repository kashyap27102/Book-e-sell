import Login from './Login'
import './App.css';
import ProductListing from "./ProductListing";
import EditProduct from "./EditProduct";
import Cart from "./Cart"
import Register from "../components/Register";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ProductDetails from "../components/ProductDetails";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector(state=>state.user.isLoggedIn);
  return (
      <Router>  
        <div className="App"></div>
        <Routes>
          <Route path="/login" element={isLoggedIn ? <Navigate to='/'/> : <Login />} />
          <Route path="/register" element={<Register />} />
          <Route exact path="*" element={isLoggedIn ? <ProductListing /> :  <Navigate to='/login'/> }/>
          <Route path="/cart" element={isLoggedIn ? <Cart /> :  <Navigate to='/login'/> } />
          <Route path="/product" element={isLoggedIn ? <ProductDetails /> :  <Navigate to='/login'/> } />
          <Route path="/edit-product" element={isLoggedIn ? <EditProduct /> :  <Navigate to='/login'/> } />
        </Routes>
      </Router>
  );
}

export default App;
