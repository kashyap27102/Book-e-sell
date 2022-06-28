import React, { useEffect, useState } from "react";
import "./ProductListing.css";
import Topbar from "../components/Topbar";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { bookActions } from "../Store/book-slice";
import axios from "axios";

function ProductListing() {
  const [fetch, isFetched] = useState(false);
  const dispatch = useDispatch();
  const books = useSelector((state) => state.book.books);
  useEffect(() => {
    const FetchData = async () => {
      await axios
        .get("/books")
        .then((res) => {
          dispatch(bookActions.addBooks(res.data.books));
          isFetched(true);
        })
        .catch((err) => console.log(err));
    };
    FetchData();
  }, []);
  return (
    <>
      <div className="container">
        {/* <h2 className="pageTitle">All Books</h2> */}
        {fetch && (
          <>
            <div className="product-info-wrapper">
              <div className="product-info-left">
                <h3 className="itemCount">
                  Total Books - {books.length} Items
                </h3>
              </div>
              <div className="product-info-right">
                <span>Sort By</span>
                <select name="" id="category" className="filter-btn">
                  <option>Latest</option>
                  <option>Oldest</option>
                </select>
              </div>
            </div>
            <div className="product-container">
              {books.length == 0 ? (
                <div className="no-item-found">
                  <h3>NO BOOKS FOUND</h3>
                </div>
              ) : (
                books.map((book) => <Product key={book.id} book={book} />)
              )}
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
          </>
        )}
      </div>
    </>
  );
}

export default ProductListing;
