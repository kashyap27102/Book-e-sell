import React, { useEffect } from 'react'
import './Cart.css'
import Topbar from '../components/Topbar'
import CartProduct from '../components/CartProduct';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrder } from '../Store/actions';
function Cart() {
    const orders = useSelector(state=>state.cart.orders);
    const totalItem = useSelector(state=>state.cart.totalItem);
    const dispatch = useDispatch();

    // const updateQuantity = (quantity,id)=>{
    //     const data = {
    //         quantity : quantity
    //     }
    //     axios.put(`/orders/${id}`,data);
    // }

    useEffect(()=>{
        dispatch(getAllOrder());
    },[dispatch])
    return (
        <>
            <Topbar/>
            <div className="container">
                <h2 className="pageTitle">Cart</h2>
                <div className="cart-details-wrapper">
                    <div className="cart-details-left">
                        <p style={{ paddingRight: '10px' }}>My Shopping Bag</p><span>({totalItem} items)</span>
                    </div>
                    <div className="cart-details-right">
                        <span>Total price: </span><span>1500</span>
                    </div>
                </div>
                <div className="cart-items-wrapper">
                    {
                        orders.map(order=>(
                            <CartProduct key={order._id} order={order}/>
                        ))
                    }
                    {/* <CartProduct/>
                    <CartProduct/> */}
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