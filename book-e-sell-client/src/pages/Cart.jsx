import React from 'react'
import './Cart.css'
import Topbar from '../components/Topbar'
import CartProduct from '../components/CartProduct';
function Cart() {
    return (
        <>
            <Topbar user='kashyap' />
            <div className="container">
                <h2 className="pageTitle">Cart</h2>
                <div className="cart-details-wrapper">
                    <div className="cart-details-left">
                        <p style={{ paddingRight: '10px' }}>My Shopping Bag</p><span>(3 items)</span>
                    </div>
                    <div className="cart-details-right">
                        <span>Total price: </span><span>1500</span>
                    </div>
                </div>
                <div className="cart-items-wrapper">
                    <CartProduct/>
                    <CartProduct/>
                    {/* <div className="cart-item">
                        <div className="product-img-wrapper">
                            <img src="" alt="" className='product-img' />
                        </div>
                        <div className="product-deatails-wrapper">
                            <div className="product-deatails-wrapper-left">
                                <h4 className="product-title">Campus Sutra</h4>
                                <p className='product-desc'>cart item name</p>
                                <div className="product-quantity-wrapper">
                                    <span className='inc-quantity'>+</span>
                                    <span className='product-quantity-count'>1</span>
                                    <span className='dec-quantity'>-</span>
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
                    <div className="cart-item">
                        <div className="product-img-wrapper">
                            <img src="" alt="" className='product-img' />
                        </div>
                        <div className="product-deatails-wrapper">
                            <div className="product-deatails-wrapper-left">
                                <h4 className="product-title">Campus Sutra</h4>
                                <p className='product-desc'>cart item name</p>
                                <div className="product-quantity-wrapper">
                                    <span className='inc-quantity'>+</span>
                                    <span className='product-quantity-count'>1</span>
                                    <span className='dec-quantity'>-</span>
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
                    <div className="cart-item">
                        <div className="product-img-wrapper">
                            <img src="" alt="" className='product-img' />
                        </div>
                        <div className="product-deatails-wrapper">
                            <div className="product-deatails-wrapper-left">
                                <h4 className="product-title">Campus Sutra</h4>
                                <p className='product-desc'>cart item name</p>
                                <div className="product-quantity-wrapper">
                                    <span className='inc-quantity'>+</span>
                                    <span className='product-quantity-count'>1</span>
                                    <span className='dec-quantity'>-</span>
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
                    </div> */}
                </div>
                <div className='place-order-button-wrapper' >
                    <button className="place-order-button">Place Order</button>
                </div>

            </div>
        </>
    )
}

export default Cart