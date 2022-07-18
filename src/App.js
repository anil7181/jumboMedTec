import Home from './pages/home'
import About from './pages/about'
import Computer from './pages/computer'
import Product from './pages/products'
import ProductDetails from './pages/productDetails'
import Contacts from './pages/contact'
import { Routes, Route } from "react-router-dom";
import Footer from './layouts/footer'


export default function App() {
  return (
    <>
    <div className='main-layout'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/computer" element={<Computer />} />
          <Route path="/products" element={<Product />} />
          <Route path="/productDetails" element={<ProductDetails />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      <Footer />
        </div>
    </>
  );
}
