import React from 'react';
import Navbar from '../Components/Navbar';
import Announcement from '../Components/Announcement';
import Banner from "../Components/Banner";
import Categories from "../Components/Categories";
import Products from "../Components/Products";
import Newsletter from '../Components/Newsletter';
import Footer from '../Components/Footer';

function Home() {
  return (
    <div>
        <Announcement />
        <Navbar />              
        <Banner />
        <Categories />
        <Products />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default Home;