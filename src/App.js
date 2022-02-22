import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import AboutMe from './components/pages/AboutMe';
import Projects from './components/pages/Projects';
import ContactMe from './components/pages/ContactMe';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/About-Me' element={<AboutMe />} />
          <Route path='/Contact-Me' element={<ContactMe />} />
          <Route path='/Projects' element={<Projects />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
