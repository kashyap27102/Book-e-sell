import react, { createContext } from "react";
import Topbar from "../components/Topbar";
import Login from './Login'
import './App.css';
import Searchbar from "../components/Searchbar";
import ProductListing from "./ProductListing";
import Product from "./Product"
import EditProduct from "./EditProduct";
import Cart from "./Cart"
import Register from "../components/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "../components/ProductDetails";

function App() {
  return (
      <Router>
        <div className="App"></div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route exact path="*" element={<ProductListing />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/product" element={<ProductDetails />} />
          <Route exact path="/edit-product" element={<EditProduct />} />
        </Routes>
      </Router>
  );
}

export default App;
