import React from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartActions } from "../Store/cart-slice";
import { userActions } from "../Store/user-slice";
import { v4 as uuidv4 } from 'uuid';
import "./modal.css";

const CheckOutModal = ({ setIsOpen, items,totalAmount }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  today = dd + "-" + mm + "-" + yyyy;
  console.log(today)
  const onClickHandler = () => {
    const newOrder = {
      id:uuidv4(),
      items:items,
      totalAmount : totalAmount,
      date:today
    };
    dispatch(cartActions.checkOut());
    console.log(newOrder);
    dispatch(userActions.AddOrder(newOrder));
    setIsOpen(false);
    navigate("/");
  };
  return (
    <Modal isOpen={true} className="modal-container"  ariaHideApp={false}>
      <div className="modal-wrapper">
        <div className="data-wrapper">
          <div className="img-wrapper">
            <img src="images/success.png" alt="" className="success-img" />
          </div>
          <h2 className="title">YOUR ORDER PLACED SUCCESSFULLY</h2>
          <p className="subtitle">
            You will be receving a conformation email with order details
          </p>
          <button className="outlined-button" onClick={onClickHandler}>
            Explore More Books
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CheckOutModal;
