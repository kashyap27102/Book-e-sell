import React, { useState, useEffect } from "react";
import "./profile.css";
import OrderHistory from "./OrderHistory";
import { useSelector } from "react-redux";
import axios from "axios";

const Orders = () => {

  // const orders = useSelector((state) => state.user.orders);
  const id = useSelector((state) => state.user.id);
  const [allorders,setAllOrders] = useState([]);
  const [fetched,setFetched] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      await axios.get('/orders').then(res=>{
        console.log(res.data.orders);
        const orderOfUser = res.data.orders.filter(order=>order.user===id);
        setAllOrders(orderOfUser);
        setFetched(true);
      }).catch(err=>{
        console.log(err);
      })
    };
    fetchOrders();
  }, []);
  console.log(allorders);
  return (
    <>
      <div className="container">
        <h2 className="pageTitle">YOUR ORDERS</h2>
        <div className="wrapper">
          {fetched && (<div className="right-sidebar">
            {allorders.map((o, index) => {
              return <OrderHistory key={index} order={o} />;
            })}
          </div>)}
        </div>
      </div>
    </>
  );
};

export default Orders;
