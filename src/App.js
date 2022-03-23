import React from 'react'
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/home/Home'
import Buy from './pages/buy/Buy'
import Wallet from './components/wallet/Wallet'
import Deal from './components/deal/Deal'
import More from './components/more/More'
import ProductDetails from './pages/product-details';
import SearchPage from './components/search';
import Reviews from './components/review';
import Cart from './pages/cart';

 const App = () => {

  return (
    <Routes>
    <Route exact path="/" element={<Buy />} />
       <Route exact path="/Home"  element={<Home />} />
        <Route exact path="/products/:id" element={<ProductDetails />} />
        <Route exact path="/review/:id" element={<Reviews />} />
        <Route path="/Deal"  element={<Deal/>} />
        <Route path="/Wallet"  element={<Wallet />} />
        <Route path="/More"  element={<More />} /> 
        <Route path="/Search"  element={<SearchPage />} /> 
        <Route path="/Cart"  element={<Cart />} /> 
    </Routes>
  )
}

export default App ;