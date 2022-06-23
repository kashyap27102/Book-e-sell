import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../Store/cart-slice";

const OrderHistory = ({ orders }) => {
  console.log(orders);
  return (
    <div className="order-card">
      <div className="order-header">
        <span>ORDER# : {orders.id}</span>
        <br />
        <span>ORDER PLACED : {orders.date}</span>
      </div>
      {orders.items.map((item,index) => {
        return (
          <div key={index}>
            <div className="order-body">
              <div className="order-card-first">
                <div className="order-img-wrapper">
                  <img src={item.item.productImg} alt="" className="orderimg" />
                </div>
              </div>
              <div className="order-card-second">
                <span>{item.item.title}</span>
                <span>Price : {item.item.price}</span>
                <span>Quantity : {item.quantity}</span>
              </div>
              <div className="order-card-third">
                {/* <button className="order-button" onClick={buyBookHandler}>Buy Again</button> */}
                <span>Amount : {item.item.price} x {item.quantity} = {item.item.price*item.quantity}</span>
              </div>
            </div>
          </div>
        );
      })}
      <div className="order-footer">
        <span>Total Amount : {orders.totalAmount}</span>
      </div>
    </div>
  );
};

export default OrderHistory;
