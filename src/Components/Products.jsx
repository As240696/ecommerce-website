import React from 'react';
import Product from "./Product";
import { popularProducts } from "../data";
import "./Products.css";

function Products() {
  return (    
    <div className='Products-container'>
        {popularProducts.map((item) => {
            return <Product item={item} key={item.id} />
        })}
    </div>
  )
}

export default Products;