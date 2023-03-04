// import logo from './assets/logo.svg';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';

import './App.css';

import Header from './components/Header/Header';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/about';
import Projects from './components/pages/Projects/Projects';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/pages/Contact/Contact';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <>
    <Header />
    <Navbar />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;
