import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
function CartProduct() {

    var [count,setCount] = useState(1);
    const incrementProduct = ()=>{
        setCount(count+1);
    }
    const decrementProduct = ()=>{
        count==1 ? count : setCount(count-1);
    }
    return (
        <div className="cart-item">
            <div className="product-img-wrapper">
                <img src="" alt="" className='product-img' />
            </div>
            <div className="product-deatails-wrapper">
                <div className="product-deatails-wrapper-left">
                    <h4 className="product-title">Campus Sutra</h4>
                    <p className='product-desc'>cart item name</p>
                    <div className="product-quantity-wrapper">
                        <span onClick={incrementProduct} className='inc-quantity'>+</span>
                        <span className='product-quantity-count'>{count}</span>
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