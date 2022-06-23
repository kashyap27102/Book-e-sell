import axios from "axios";
import React, { useRef, useState } from "react";
import Topbar from "../components/Topbar";

function Sellbook() {
  const userId = localStorage.getItem("id");
  const [file, setFile] = useState(null);
  const title = useRef();
  const AuthorName = useRef();
  const price = useRef();
  const desc = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    var data = new FormData();
    data.append("title", title.current.value);
    data.append("AuthorName", AuthorName.current.value);
    data.append("price", price.current.value);
    data.append("desc", desc.current.value);
    if (file) {
      data.append("productImg", file);
    }
    console.log(data);
    axios
      .post(`/books/${userId}`, data, {
        header: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
      
  };
  return (
    <>
      <Topbar />
      <form className="container" onSubmit={submitHandler} encType="multipart/form-data">
        <h2 className="pageTitle">ADD BOOK</h2>
        <div className="edit-profile-wrapper">
          <div className="left-wrapper">
            <label htmlFor="booktitle" className="inputlabel">
              Book Title
            </label>
            <input
              type="text"
              name="booktitle"
              className="inputfield"
              ref={title}
            />
            <label htmlFor="authorname" className="inputlabel">
              Author Name
            </label>
            <input
              type="text"
              name="authorname"
              className="inputfield"
              ref={AuthorName}
            />
            <label htmlFor="price" className="inputlabel">
              Price
            </label>
            <input
              type="text"
              name="price"
              className="inputfield"
              ref={price}
            />
          </div>
          <div className="right-wrapper">
            <label htmlFor="bookdesc" className="inputlabel">
              Book Description
            </label>
            <textarea
              type="text"
              name="bookdesc"
              rows="6"
              className="textarea"
              ref={desc}
            />
            <label htmlFor="coverphoto" className="inputlabel">
              Book Cover Photo
            </label>
            <input
              type="file"
              name="coverphoto"
              className="inputfield"
              accept=".png,.jpg,.jpeg"
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
            />
          </div>
        </div>
        <button className="sellbookbtn" type="submit">
          Add Book For Sell
        </button>
      </form>
    </>
  );
}

export default Sellbook;
