import React, { useEffect, useState } from "react";
import "./ProductListing.css";
import Topbar from "../components/Topbar";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { Books } from "../data/Books";
import { bookActions } from "../Store/book-slice";
import axios from "axios";

function ProductListing() {
  const [fetch, isFetched] = useState(false);
  const dispatch = useDispatch();
  const [booksdata,setbooksData] = useState({});
  useEffect(() => {
    const FetchData = async () => {
      await axios
        .get("/books")
        .then((res) => {
          console.log(res);
          setbooksData(res.data);
          dispatch(bookActions.addBooks(res.data.books));
          isFetched(true);
        })
        .catch((err) => console.log(err));
    };
    FetchData();
  }, []);
  console.log(booksdata);
  return (
    <>
      <Topbar />
      <div className="container">
        <h2 className="pageTitle">All Books</h2>
        {fetch && (
          <>
            <div className="product-info-wrapper">
              <div className="product-info-left">
                <h3 className="itemCount">Total Books - {booksdata.count} Items</h3>
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
              {booksdata.books.map((book) => (
                <Product key={book.id} book={book} />
              ))}
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
