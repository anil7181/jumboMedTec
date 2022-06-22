import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/home' 
import FirstHeader from './components/firstheader';
import HeaderMenu from './components/headermenu';
import Footer from './components/footer';
import ContactUs from './components/contactus';
import Products from './components/products';
import ProductDetails from './components/productdetails';
 
export default function App(){
    return(
    <div className="App">  
      <FirstHeader />
    <HeaderMenu />
          <Routes>
            <Route path = '/' element = {<Home />} /> 
            <Route path = '/products' element = {<Products />} /> 
            <Route path = '/products/:id' element = {<ProductDetails />} /> 
        </Routes>
        <ContactUs />
<Footer />
    </div>
  )
}

