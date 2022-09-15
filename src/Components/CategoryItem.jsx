import React from 'react';
import "./CategoryItem.css";

function CategoryItem({item}) {
  return (
    <div className='CategoryItem-container'>
      <img className='CategoryItem-img' src={item.img} alt=""/>
      <div className='CategoryItem-info'>
        <h1>{item.title}</h1>
        <button>SHOP NOW</button>
      </div>
    </div>
  )
}

export default CategoryItem;