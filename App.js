import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Homepage';
import LoginForm from './LoginForm';
import Mainproject from './Mainproject';
import About from './About';
import Shop from './Shop';
import Service from './Service';
import Contact from './Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/"element={<Homepage />} />
        <Route index element={<Homepage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/Mainproject" element={<Mainproject/>} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}




