import React, {useState} from 'react';
import Navbar from "../Components/Navbar";
import Announcement from "../Components/Announcement";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import "./Product.css";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {Link} from "react-router-dom";

function Product() {

  const [item, setItem] = useState(1);
  
  function handleChange (operator) {
    if (operator === "Subtract") {
        setItem(item > 1 ? item-1 : 0);
    } else {
        setItem(item+1);
    }
  }

  return (
    <div>
        <Navbar />
        <Announcement />
        <div className='Product-wrapper'>
           <div className='Product-image-container'>
                <img src='https://i.ibb.co/S6qMxwr/jean.jpg' alt=''/>
           </div>
           <div className='Product-info-container'>
                <h1>Denim Jumpsuit</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                   venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                   iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                   tristique tortor pretium ut. Curabitur elit justo, consequat id
                   condimentum ac, volutpat ornare.
                </p>
                <span>$ {20*item}</span>
                <div className='Product-filter-container'>
                    <div className='Product-filter'>
                        <span>Colour :</span>
                            <div className='Product-filter-color' style={{backgroundColor: "black"}} />
                            <div className='Product-filter-color' style={{backgroundColor: "lightblue"}} />
                            <div className='Product-filter-color' style={{backgroundColor: "lightgray"}} />
                        <span style={{marginLeft: "50px"}}>Size :</span>
                        <select>
                            <option>XS</option>
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                        </select>
                    </div>
                </div>
                <div className='addContainer'>
                    <div className='amountContainer'>
                        <button onClick={() => handleChange("Subtract")} style={{padding: "1px", margin: "3px"}}><RemoveIcon /></button>
                        <span>{item}</span>
                        <button onClick={() => handleChange("Add")} style={{padding: "1px", margin: "3px"}}><AddIcon /></button>
                    </div>
                    <button><Link style={{textDecoration: "none", color: "black"}} to="/cart">ADD TO CART</Link></button>
                </div>
           </div> 
        </div>
        <Newsletter />
        <Footer />
    </div>
  )
}

export default Product;