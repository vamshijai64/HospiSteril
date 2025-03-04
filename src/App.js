import React from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Footer from './pages/Home/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import About from './pages/About/About';
import Product from './pages/Product/product';

import ScrollToTop from './Components/ScrollTop/ScrollTop';

function App() {
  return(
    <BrowserRouter  basename="/HospiSteril">
    <ScrollToTop/>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/gallery" element={<Gallery />} /> */}
      <Route path="/product" element={<Product />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  
  );
}

export default App;