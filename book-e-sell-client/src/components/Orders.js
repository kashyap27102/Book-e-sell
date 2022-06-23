import React, { useState } from "react";
import Topbar from "./Topbar";
import "./profile.css";
import OrderHistory from "./OrderHistory";
import { useSelector } from "react-redux";

const Orders = () => {
  const orders = useSelector((state) => state.user.orders);
  return (
    <>
      <Topbar />
      <div className="container">
        <h2 className="pageTitle">YOUR ORDERS</h2>
        <div className="wrapper">
          <div className="right-sidebar">
            {orders.map((o, index) => {
              return <OrderHistory key={index} orders={o} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
