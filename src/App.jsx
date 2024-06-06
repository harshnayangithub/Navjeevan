import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Donate from './pages/Donate';
import Volunteer from './pages/Volunteer';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
