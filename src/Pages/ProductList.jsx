import React from 'react';
import Navbar from '../Components/Navbar';
import Announcement from '../Components/Announcement';
import Products from "../Components/Products";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import "./ProductList.css";

function ProductList() {
  return (
    <div>
        <Navbar />
        <Announcement />
        <h1 style={{margin: "20px"}}>Dresses</h1>
        <div className='filter-container'>
            <div className='filter'>
                <span>Filter Products:</span>
                <select>
                    <option disabled selected>Colour</option>
                    <option>White</option>
                    <option>Black</option>
                    <option>Red</option>
                    <option>Blue</option>
                    <option>Yellow</option>
                    <option>Green</option>
                </select>
                <select>
                    <option disabled selected>Size</option>
                    <option>XS</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                </select>
            </div>
            <div className='filter'>
                <span>Sort Products:</span>
                <select>
                    <option selected>Newest</option>
                    <option>Price (asc)</option>
                    <option>Price (desc)</option>
                </select>
            </div>
        </div>
        <Products />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default ProductList;
