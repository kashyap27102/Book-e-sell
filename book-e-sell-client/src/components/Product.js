import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { cartActions } from '../Store/cart-slice';
import { v4 as uuidv4 } from 'uuid';

function Product({book}) {
    const [load,setLoad] = useState(false);
    const dispatch = useDispatch();
    const onclickHandler = () => {
        setLoad(true);
        const neworder = {
            id:uuidv4(), 
            item : book,
            quantity : 1,
        }
        dispatch(cartActions.addItem(neworder));
        setLoad(false);
    }
    return (
        <div className="product-wrapper">
            <Link to={`/product/${book.id}`} style={{ textDecoration: 'none' }}>
                <div className="product-Img-wrapper">
                    <img className='product-listing-img' src={`${book.productImg}`} alt="" />
                </div>
            </Link>
            <div className="product-details">
                <h2 className="productTitle">{book.title}</h2>
                <p className='authorName'>{book.AuthorName}</p>
                <div className="price">
                    <span className="mrp">MRP</span>
                    <span className="realPrice"><strike>₹{book.price/0.8}</strike></span>
                </div>
                <div className="disscount">20.00% OFF</div>
                <div className="payvalue">₹{book.price}</div>
                <button className="addtocartbtn" onClick={onclickHandler}>
                    ADD TO CART
                </button>
            </div>
        </div>
    )
}

export default Product