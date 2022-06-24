import React, { useEffect, useRef, useState } from "react";
import "./Searchbar.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { bookActions } from "../Store/book-slice";
import { cartActions } from "../Store/cart-slice";
import { v4 as uuidv4 } from "uuid";

function Serchbar() {
  const dispatch = useDispatch();
  const searchtext = useRef();
  const [text, setText] = useState("");
  const [books, setBooks] = useState([]);
  const [searchedBooks, getSerachedBoooks] = useState([]);

  useEffect(() => {
    const FetchData = async () => {
      await axios
        .get("/books")
        .then((res) => {
          console.log(res);
          setBooks(res.data.books);
        })
        .catch((err) => console.log(err));
    };
    FetchData();
  }, []);

  useEffect(() => {
    const newFilter = books.filter((book) => {
      return book.title.toLowerCase().includes(text);
    });
    getSerachedBoooks(newFilter);
    console.log(newFilter);
    dispatch(bookActions.addBooks(newFilter));
  }, [text]);

  const onChangeHandler = () => {
    console.log(searchtext.current.value);
    setText(searchtext.current.value);
    console.log(text);
  };
  function clickHandler(book) {
    const neworder = {
      id: uuidv4(),
      item: book,
      quantity: 1,
    };
    dispatch(cartActions.addItem(neworder));
  }
  return (
    <div className="searchbar-wrapper">
      <input
        ref={searchtext}
        type="text"
        placeholder="Search Book...."
        className="serachBox"
        onChange={onChangeHandler}
        value={text}
      />
      {text && (
        <div className="searchResults">
          {searchedBooks.length === 0 ? (
            <p style={{ fontWeight: "normal" }}>No Books is Matched</p>
          ) : (
            searchedBooks.map((book) => {
              return (
                <>
                  <div className="bookContainer">
                    <div className="left">
                      <p style={{ fontWeight: "bold" }}>{book.title}</p>
                      <p style={{ color: "gray" }}>{book.AuthorName}</p>
                    </div>
                    <div className="right">
                      <p>₹ {book.price}</p>
                      <p
                        onClick={() => clickHandler(book)}
                        className="addFromSearch"
                      >
                        Add to Cart
                      </p>
                    </div>
                  </div>
                </>
              );
            })
          )}
        </div>
      )}
    </div>
  );
}

export default Serchbar;
