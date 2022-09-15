import React from 'react';
import "./Slider.css";
import {sliderItems} from "../data";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
    transition: all 1.5s ease;
`;

function Slider(props) {
  return (
    <Wrapper slideIndex={props.slideIndex}>
              {
                sliderItems.map(
                  (item) => {return (
                    <div className='slider' style={{backgroundColor: item.bg}} key={item.id}>
                      <div className='banner-image'>
                        <img className='image' src={item.img} alt="" />
                      </div>
                      <div className='banner-info'>
                        <h1 className='title'>{item.title}</h1>
                        <p className='description'>{item.desc}</p>
                        <button className='button'><Link style={{textDecoration: "none", color: "black"}} to="/productlist">SHOP NOW</Link></button>
                      </div>
                    </div>
                  )
                  }
                )
              }
    </Wrapper>
  )
}

export default Slider;