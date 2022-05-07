import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Product(books) {
    console.log(books)
    
    return (
        <div className="product-wrapper">
            <Link to='/product' style={{ textDecoration: 'none' }}>
                <div className="product-Img-wrapper">
                    <img className='product-listing-img' src='images/database.jpg' alt="" />
                </div>
            </Link>
            <div className="product-details">
                <h2 className="productTitle">{books.book.title}</h2>
                <p className='authorName'>{books.book.author}</p>
                <div className="price">
                    <span className="mrp">MRP</span>
                    <span className="realPrice">$1000</span>
                    <span className="disscount">20.00% OFF</span>
                </div>
                <div className="payvalue">₹{books.book.price}</div>
                <button className="addtocartbtn">ADD TO CART</button>
            </div>
        </div>
    )
}

export default Product