import React, { useEffect } from 'react'
import './ProductListing.css';
import Topbar from '../components/Topbar'
import Product from '../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBooks } from '../Store/actions';
import axios from 'axios';
import Serchbar from '../components/Searchbar';

function ProductListing() {
    const data = {
        "count": 4,
        "books": [{
                "id": 3160017,
                "title": "Theory Of Computation",
                "author": "I.A.Dathore",
                "price": 127.10
            },
            {
                "id": 3160018,
                "title": "Advance Java Programming",
                "author": "A.K.Patel",
                "price": 390.00
            },
            {
                "id": 3160019,
                "title": "Data Mining",
                "author": "Jigna Jadav",
                "price": 246.50
            },
            {
                "id": 3160020,
                "title": "Data Visulization",
                "author": "K.K.Rana",
                "price": 180
            }
        ]
    
    }
    const bookItems = useSelector(state => state.book.books);
    const totalBooks = useSelector(state => state.book.totalBooks);
    const dispatch = useDispatch();
    useEffect(async()=>{

        // dispatch(getAllBooks());
    },[])
    
    return (
        <>
            <Topbar />
            <div className="container">
                <h2 className="pageTitle">All Books</h2>
                <div className="product-info-wrapper">
                    <div className="product-info-left">
                        <h3 className="itemCount">Total Books - {totalBooks} Items</h3>
                    </div>
                    <Serchbar/>
                    <div className="product-info-right">
                        <span>Sort By</span>
                        <select name="" id="category" className='filter-btn'>
                            <option>Latest</option>
                            <option>Oldest</option>
                        </select>
                    </div>
                </div>
                <div className="product-container">
                {
                    data.books.map((book)=>(
                        <Product key={book.id} book={book}/>
                    ))
                }
                    {/* <Product/> */}
                </div>
                {/* <div className="pagination-navbar">
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
                </div> */}
            </div>
        </>
    );
}

export default ProductListing