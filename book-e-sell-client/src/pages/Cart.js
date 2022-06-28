import React, { useEffect, useState } from "react";
import "./Cart.css";
import Topbar from "../components/Topbar";
import CartProduct from "../components/CartProduct";
import { useSelector } from "react-redux";
import axios from 'axios';
import CheckOutModal from "../modals/CheckOutModal";

function Cart() {
  const [isOpen,setIsOpen] = useState(false);
  const items = useSelector((state) => state.cart.items);
  const totalItem = useSelector((state) => state.cart.totalItem);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const user = useSelector(state=>state.user.id);
  const onclickHandler = () => {
    setIsOpen(true);
    items.map(async(item)=>{
      const data = {
        productId : item.item.id,
        quantity : item.quantity,
        userId : user
      }
      console.log(data);
      await axios.post('/orders',data).then(res=>{
        console.log(res);
      }).catch(err=>console.log(err));
    })

  }

  return (
    <>
      <div className="container">
        {totalItem == 0 && (
          <div className="no-item-found">
            <h3>YOUR CART IS EMPTY</h3>
          </div>
        )}
        {totalItem !== 0 && (
          <>
            <div className="cart-details-wrapper">
              <div className="cart-details-left">
                <p style={{ paddingRight: "10px" }}>Total Items : </p>
                <span>{totalItem} items</span>
              </div>
              <div className="cart-details-right">
                <span>Total Amount : </span>
                <span>₹ {totalAmount}</span>
              </div>
            </div>
            <div className="cart-items-wrapper">
              {items.map((order) => (
                <CartProduct key={order.id} order={order} />
              ))}
            </div>
            <div className="place-order-button-wrapper">
              <button
                className="place-order-button"
                onClick={onclickHandler}
              >
                Place Order
              </button>
            </div>
          </>
        )}
      </div>
      {isOpen && <CheckOutModal setIsOpen={setIsOpen} items={items} totalAmount={totalAmount}/>}
    </>
  );
}

export default Cart;
