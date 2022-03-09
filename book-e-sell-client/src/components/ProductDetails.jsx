import React from 'react'
import './ProductDetails.css'
import { useState } from 'react';
import Topbar from './Topbar';

function ProductDetails() {
    var [count, setCount] = useState(1);
    const incrementProduct = () => {
        setCount(count + 1);
    }
    const decrementProduct = () => {
        count == 1 ? count : setCount(count - 1);
    }
    return (
        <div className="product-details-container">
            <Topbar user="kashyap"/>
            <div className='Product-Details-Wrapper'>
                <div className="Product-Details-Wrapper-Left">
                    <div className="product-details-image-wrapper">
                        <img src="images/database.jpg" alt="" className="product-details-img" />
                    </div>
                </div>
                <div className="Product-Details-Wrapper-Right">
                    <h3 className="product-details-title">Database Management Systems</h3>
                    <hr style={{ marginBottom: '10px' }} />
                    <div className="product-Author"><span style={{ color: 'gray' }}>Author Name : </span> R Paneerselvm</div>
                    <div className="product-summary"><span style={{ color: 'gray' }}>Book Discription : </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, iure vel aperiam quis magnam maiores voluptas quibusdam obcaecati? Doloribus officia officiis ducimus quod dolorum exercitationem reprehenderit non a nobis odit.</div>
                    <div className="seller-info"><span style={{ color: 'gray' }}>Seller Name : </span>Kashyap Patel</div>
                    <div className="product-quantity-wrapper">
                        <span onClick={incrementProduct} className='inc-quantity'>+</span>
                        <span className='product-quantity-count'>{count}</span>
                        <span onClick={decrementProduct} className='dec-quantity'>-</span>
                    </div>
                    <div className="product-details-addtocartbtn-wrapper">
                        <button className="product-details-addtocartbtn">ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails