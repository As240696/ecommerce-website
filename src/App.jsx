import React from 'react';
import Home from "./Pages/Home.jsx";
import ProductList from './Pages/ProductList.jsx';
import Product from './Pages/Product';
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from './Pages/Cart';
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/productlist' element={<ProductList />} />
      <Route path='/product' element={<Product />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
  )
}

export default App;