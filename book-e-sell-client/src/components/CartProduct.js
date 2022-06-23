import React, { useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { useDispatch } from "react-redux";
import { cartActions } from "../Store/cart-slice";
function CartProduct({ order }) {
  console.log(order);
  const dispatch = useDispatch();
  const incrementProduct = () => {
    dispatch(cartActions.incrementQuantity(order));
  };
  const decrementProduct = () => {
    dispatch(cartActions.decrementQuantity(order));
  };
  return (
    <div className="cart-item">
      <div className="product-img-wrapper">
        <img src={order.item.productImg} alt="" className="product-img" />
      </div>
      <div className="product-deatails-wrapper">
        <div className="product-deatails-wrapper-left">
          <h4 className="product-title">{order.item.title}</h4>
          <p className="product-desc">Book ID : {order.item.id}</p>
          <div className="product-quantity-wrapper">
            <span onClick={incrementProduct} className="inc-quantity">+</span>
            <span className="product-quantity-count">{order.quantity}</span>
            <span onClick={decrementProduct} className="dec-quantity">-</span>
          </div>
        </div>
        <div className="product-deatails-wrapper-right">
          <div className="payvalue">₹ {order.item.price}</div>
          <div className="discount" style={{ marginBottom: "10px" }}>
            <del className="realPrice">{order.item.price/0.8}</del>
            <span className="disscount">20% off</span>
          </div>
          <DeleteIcon className="deletebtn" />
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
