import React from 'react';
import "./Navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div className='container'>
        <div className='wrapper'>
            <div className='left'>
                <span>EN</span>
                <div className='search-container'>
                    <input className="input" type="text" placeholder='Search'/>
                    <SearchIcon />
                </div>
            </div>
            <h1 className='centre'><Link style={{textDecoration: "none", color: "white"}} to="/">Lama</Link></h1>
            <div className='right'>
                <h1 className='menu-items'><Link style={{textDecoration: "none", color: "white"}} to="/register">Register</Link></h1>
                <h1 className='menu-items'><Link style={{textDecoration: "none", color: "white"}} to="/login">Sign In</Link></h1>
                <Badge badgeContent={2} color="secondary">
                    <Link style={{textDecoration: "none", color: "white"}} to="./cart"><ShoppingCartIcon /></Link>   
                </Badge>
            </div>
        </div>
    </div>
  )
}

export default Navbar;