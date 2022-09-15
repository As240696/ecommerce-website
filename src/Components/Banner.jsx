import React, { useState } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import "./Banner.css";
import Slider from "./Slider.jsx";

function Banner() {
  
  const [slideIndex, setSlideIndex] = useState(0);

  function handleClick (direction) {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0);
    }
  }

  return (
    <div className='banner-container'>
          <div className='left-arrow' onClick={() => handleClick("left")}><KeyboardArrowLeftIcon /></div>
            <Slider slideIndex={slideIndex} />
          <div className='right-arrow' onClick={() => handleClick("right")}><KeyboardArrowRightIcon /></div>
    </div>
  )
}

export default Banner;