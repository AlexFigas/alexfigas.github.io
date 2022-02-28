import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import AboutMe from './components/pages/AboutMe';
import Projects from './components/pages/Projects';
import ContactMe from './components/pages/ContactMe';
import Footer from './components/Footer';
import ScrollToTop from './tools/ScrollToTop'

function App() {

  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/About-Me' element={<AboutMe />} />
          <Route path='/Contact-Me' element={<ContactMe />} />
          <Route path='/Projects' element={<Projects />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
