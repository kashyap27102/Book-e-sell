import React, { useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../features/counterSlice'
import { Link } from 'react-router-dom'

function Product() {
    // const count = useSelector(state => state.counter.value)
    // const dispatch = useDispatch()
    const countHandler = () => {
        // dispatch(increment())
    }
    return (
        <div className="product-wrapper">
            <Link to='/product' style={{ textDecoration: 'none' }}>
                <div className="product-Img-wrapper">
                    <img className='product-listing-img' src="images/database.jpg" alt="" />
                </div>
            </Link>
            <div className="product-details">
                <h2 className="productTitle">Book Title</h2>
                <p className='authorName'>Author Name</p>
                <div className="price">
                    <span className="mrp">MRP</span>
                    <span className="realPrice">$1000</span>
                    <span className="disscount">20.00% OFF</span>
                </div>
                <div className="payvalue">$800</div>
                <button onClick={countHandler} className="addtocartbtn">ADD TO CART</button>
            </div>
        </div>
    )
}

export default Product