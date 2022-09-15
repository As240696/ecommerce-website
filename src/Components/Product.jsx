import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import "./Product.css";
import {Link} from "react-router-dom";

function Product({item}) {
  return (
    <div className='Product-container'>
        <img className='Product-img' src={item.img} alt="" />
        <div className='Product-info'>
            <div className='Product-icon'>
                <Link style={{textDecoration: "none", color: "black"}} to="/product"><ShoppingCartIcon /></Link>
            </div>
            <div className='Product-icon'>
                <SearchIcon />
            </div>
            <div className='Product-icon'>
                <FavoriteBorderIcon />
            </div>
        </div>        
        
    </div>
  )
}

export default Product;
