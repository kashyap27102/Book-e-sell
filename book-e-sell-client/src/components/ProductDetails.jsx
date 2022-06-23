import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import Topbar from "./Topbar";

function ProductDetails() {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [seller, setSeller] = useState({});
  useEffect(() => {
    const FetchData = async () => {
      await axios
        .get(`/books/${id}`)
        .then((res) => {
          setBook(res.data.book);
          setSeller(res.data.book.seller);
        })
        .catch((err) => console.log(err));
    };
    FetchData();
  }, []);
  return (
    <div className="product-details-container">
      <Topbar user="kashyap" />
      {(<div className="Product-Details-Wrapper">
        <div className="Product-Details-Wrapper-Left">
          <div className="product-details-image-wrapper">
            <img src={book.productImg} alt="" className="product-details-img" />
          </div>
        </div>
        <div className="Product-Details-Wrapper-Right">
          <h3 className="product-details-title">{book.title}</h3>
          <hr style={{ marginBottom: "10px" }} />
          <div className="product-Author">
            <span style={{ color: "gray" }}>Author Name : </span>{" "}
            {book.AuthorName}
          </div>
          <div className="product-summary">
            <span style={{ color: "gray" }}>Book Discription : </span>
            {book.desc}
          </div>
          <div className="product-price">
            <span style={{ color: "gray" }}>Price : </span>
            {book.price}
          </div>
          <h4 style={{display : 'block',paddingBottom:'10px'}}>Seller Info</h4>
          <div className="seller-info">
            <span style={{display : 'block',color: "gray"}}>Name : {seller.firstName} {seller.lastName}</span>
            <span style={{ display : 'block',color: "gray" }}>Email : {seller.email}</span>
            <span style={{ display : 'block',color: "gray" }}>Mobile : {seller.mobileNo}</span>
          </div>
          <div className="product-details-addtocartbtn-wrapper">
            <button className="product-details-addtocartbtn">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>)}
    </div>
  );
}

export default ProductDetails;
