import React, { useState} from 'react';
import Announcement from "../Components/Announcement";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./Cart.css";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Cart() {

  const [num, setNum] = useState(1);
  const [num1, setNum1] = useState(2);

  function handleChange (operator) {
    if (operator === "add") {
        setNum(num + 1);
    } else {
        setNum(num > 1 ? num-1 : 1)
    }
  }

  function handleChange1 (operator) {
    if (operator === "add") {
        setNum1(num1 + 1);
    } else {
        setNum1(num1 > 1 ? num1-1 : 1)
    }
  }
    
  return (
    <div className='Cart-container'>
        <Announcement />
        <Navbar />
        <div className='Cart-wrapper'>
            <h1>YOUR BAG</h1>
            <div className='top'>
                <button style={{backgroundColor: "tansparent", border: "1px solid"}}>CONTINUE SHOPPING</button>
                <div className='top-info'>
                    <ShoppingBagIcon />
                    <span>Shopping Bag (2)</span>
                    <FavoriteIcon />
                    <span>Your Wishlist (0)</span>
                </div>
                <button style={{backgroundColor: "black", border: "none", color: "white"}}>CHECKOUT NOW</button>
            </div>
            <div className='bottom'>
                <div className='info'>
                    <div className='Product'>
                        <div className='ProductDetail'>
                            <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" alt=''/>
                            <div className='Details'>
                                <span><b>Product:</b> JESSIE THUNDER SHOES</span>
                                <span><b>ID:</b> 65464613</span>
                                <div></div>
                                <span><b>Size:</b> 37.5</span>
                            </div>
                        </div>
                        <div className='PriceDetail'>
                            <div className='ProductAmountContainer'>     
                                <button onClick={() => handleChange("subtract")}><RemoveIcon /></button>
                                <span>{num}</span>
                                <button onClick={() => handleChange("add")}><AddIcon /></button>
                            </div>
                            <span className='ProductPrice'>$ {30*num}</span>
                        </div>
                    </div>
                    <br />
                    <div className='Product'>
                        <div className='ProductDetail'>
                            <img src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" alt=''/>
                            <div className='Details'>
                                <span><b>Product:</b> HAKURA T-SHIRT</span>
                                <span><b>ID:</b> 54654321</span>
                                <div></div>
                                <span><b>Size:</b> M</span>
                            </div>
                        </div>
                        <div className='PriceDetail'>
                            <div className='ProductAmountContainer'>     
                                <button onClick={() => handleChange1("subtract")}><RemoveIcon /></button>
                                <span>{num1}</span>
                                <button onClick={() => handleChange1("add")}><AddIcon /></button>
                            </div>
                            <span className='ProductPrice'>$ {15*num1}</span>
                        </div>
                    </div>
                </div>
                <div className='summary'>
                    <h1>ORDER SUMMARY</h1>
                    <div>
                        <span>Subtotal</span>
                        <span>$ {(30*num)+(15*num1)}</span>
                    </div>
                    <div>
                        <span>Shipping</span>
                        <span>$ 5</span>
                    </div>
                    <div>
                        <span>Discount</span>
                        <span>$ -2</span>
                    </div>
                    <div>
                        <span style={{fontWeight: "500", fontSize: "24px"}}><b>Total</b></span>
                        <span style={{fontWeight: "500", fontSize: "24px"}}><b>$ {(30*num)+(15*num1)-2}</b></span>
                    </div>
                    <button>CHECKOUT NOW</button>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Cart;