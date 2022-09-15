import React from 'react';
import "./Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function Footer() {
  return (
    <div className='Footer-container'>
        <div className='Footer-left'>
           <h1>LAMA.</h1>
           <p>
               There are many variations of passages of Lorem Ipsum available, but
               the majority have suffered alteration in some form, by injected
               humour, or randomised words which don't look even slightly believable.
           </p>
           <div className='Social-container'>
               <div className='icon-container' style={{backgroundColor: "#3B5999"}}>
                  <FacebookIcon />
               </div>
               <div className='icon-container' style={{backgroundColor: "#E4405F"}}>
                  <InstagramIcon />
               </div>
               <div className='icon-container' style={{backgroundColor: "#55ACEE"}}>
                  <TwitterIcon />
               </div>
               <div className='icon-container' style={{backgroundColor: "#E60023"}}>
                  <PinterestIcon />
               </div>    
           </div>
        </div>
        <div className='Footer-center'>
            <h3>Useful Links</h3>
            <ul>
                <li>Home</li>
                <li>Cart</li>
                <li>Men Fashion</li>
                <li>Women Fashion</li>
                <li>Accessories</li>
                <li>My Account</li>
                <li>Wishlist</li>
                <li>Order Tracking</li>
                <li>Wishlist</li>
                <li>Terms</li>
            </ul>
        </div>
        <div className='Footer-right'>
            <h3>Contact</h3>
            <div className='contact-item'>
                <LocationOnIcon style={{marginRight: "10px"}} />kjdbvk knsvlnd kclsdnvl
            </div>
            <div className='contact-item'>
                <PhoneIcon style={{marginRight: "10px"}} />+1 234 56789
            </div>
            <div className='contact-item'>
                <MailOutlineIcon style={{marginRight: "10px"}} />contact@email.com
            </div>
            <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />
        </div>
    </div>
  )
}

export default Footer;