import React from "react";

const OrderHistory = ({ order }) => {
  console.log(order);
  return (
    <div className="order-card">
      <div className="order-header">
        <span>ORDER# : {order._id}</span>
        <br />
        <span>ORDER PLACED : {order.orderDate}</span>
      </div>
      <div className="order-body">
        <div className="order-card-first">
          <div className="order-img-wrapper">
            <img src={order.book.productImg} alt="" className="orderimg" />
          </div>
        </div>
        <div className="order-card-second">
          <span>{order.book.title}</span>
          <span>Price : {order.book.price}</span>
          <span>Quantity : {order.quantity}</span>
        </div>
        <div className="order-card-third">
          {/* <button className="order-button" onClick={buyBookHandler}>Buy Again</button> */}
          <span>
            Amount : {order.book.price} x {order.quantity} ={" "}
            {order.book.price * order.quantity}
          </span>
        </div>
      </div>
      <div className="order-footer">
        <span>Total Amount : {order.book.price * order.quantity}</span>
      </div>
    </div>
  );
};

export default OrderHistory;
