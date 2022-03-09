import React from 'react'
import './ProductListing.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Topbar from '../components/Topbar'
import Product from '../components/Product';

function ProductListing() {
    
    return (
        <>
            <Topbar user='kashyap' />
            <div className="container">
                <h2 className="pageTitle">All Books</h2>
                <div className="product-info-wrapper">
                    <div className="product-info-left">
                        <h3 className="itemCount">Total Books - 14366 Items</h3>
                    </div>
                    <div className="product-info-right">
                        <span>Sort By</span>
                        <select name="" id="category" className='filter-btn'>
                            <option>Latest</option>
                            <option>Oldest</option>
                        </select>
                    </div>
                </div>
                <div className="product-container">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
                <div className="pagination-navbar">
                    <ul className="pagination">
                        <li className="page-item arrow">
                            <ArrowBackIosIcon className='arrow disabled' />
                        </li>
                        <li className="page-item current">1</li>
                        <li className="page-item">2</li>
                        <li className="page-item">...</li>
                        <li className="page-item">10</li>

                        <li className="page-item arrow">
                            <ArrowForwardIosIcon className='arrow' />
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default ProductListing