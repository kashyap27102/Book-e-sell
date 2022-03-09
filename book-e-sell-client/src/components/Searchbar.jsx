import React from 'react';
import './Searchbar.css'
function Serchbar() {
    return (
        <div className="searchbar-wrapper">
            <input type="text" placeholder='What are you looking for...' className="serachBox" />
            <button className="searchbtn">Search</button>
            <button className="cancleBtn">Cancle</button>
        </div>
    );
}

export default Serchbar;
