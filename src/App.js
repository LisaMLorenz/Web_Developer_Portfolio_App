import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './components/pages/Home';
import About from './components/pages/about';
import Projects from './components/pages/Projects';
import Navbar from './components/Navbar';
import Contact from './components/pages/Contact';
import Footer from './components/Footer'


function App() {
  return (
    <>
      <Navbar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      
    </>
  );
}

export default App;
