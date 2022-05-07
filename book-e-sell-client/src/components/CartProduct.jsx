import React, { useEffect } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
function CartProduct({order}) {
    console.log(order); 
    const incrementProduct = ()=>{
        const quantity = order.order.quantity + 1
        // updateQuantity(quantity,order.order._id);
    }
    const decrementProduct = ()=>{
        const quantity = order.order.quantity - 1
        // updateQuantity(quantity,order.order._id);
    }
    return (
        <div className="cart-item">
            <div className="product-img-wrapper">
                <img src="" alt="" className='product-img' />
            </div>
            <div className="product-deatails-wrapper">
                <div className="product-deatails-wrapper-left">
                    <h4 className="product-title">Title</h4>
                    <p className='product-desc'>cart item name</p>
                    <div className="product-quantity-wrapper">
                        <span onClick={incrementProduct} className='inc-quantity'>+</span>
                        <span className='product-quantity-count'>1</span>
                        <span onClick={decrementProduct} className='dec-quantity'>-</span>
                    </div>
                </div>
                <div className="product-deatails-wrapper-right">
                    <div className="payvalue">₹ 500</div>
                    <div className="discount" style={{ marginBottom: '10px' }}>
                        <del className='realPrice'>1000</del>
                        <span className='disscount'>50% off</span>
                    </div>
                    <DeleteIcon className='deletebtn' />
                </div>
            </div>
        </div>
    )
}

export default CartProduct