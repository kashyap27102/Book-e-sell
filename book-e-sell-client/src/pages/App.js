import Login from "./Login";
import "./App.css";
import ProductListing from "./ProductListing";
import EditProduct from "./EditProduct";
import Cart from "./Cart";
import Register from "../components/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ProductDetails from "../components/ProductDetails";
import { useSelector } from "react-redux";
import Orders from "../components/Orders";
import EditProfile from "./EditProfile";
import Sellbook from "./Sellbook";
import Topbar from "../components/Topbar";

function App() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  return (
    <Router>
      <div className="main-container"></div>
      <Topbar/>
      <Routes>
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/" /> : <Login />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/sell-book" element={isLoggedIn ? <Sellbook/> :<Navigate to="/" /> } />
        <Route
          exact
          path="*"
          element={isLoggedIn ? <ProductListing /> : <Navigate to="/login" />}
        />
        <Route
          path="/cart"
          element={isLoggedIn ? <Cart /> : <Navigate to="/login" />}
        />
        <Route
          path="/products"
          element={isLoggedIn ? <ProductDetails /> : <Navigate to="/login" />}
        />
        <Route
          path="/edit-product"
          element={isLoggedIn ? <EditProduct /> : <Navigate to="/login" />}
        />
        <Route
          path="/orders"
          element={isLoggedIn ? <Orders /> : <Navigate to="/login" />}
        />
        <Route
          path="/product/:id"
          element={isLoggedIn ? <ProductDetails /> : <Navigate to="/login" />}
        />
        <Route
          path="/edit-profile"
          element={isLoggedIn ? <EditProfile /> : <Navigate to="/login" />}
        />
        {/* <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/" element={<ProductListing/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/product" element={<ProductDetails/>}/>
        <Route path="/edit-product/:productID" element={<EditProduct/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
