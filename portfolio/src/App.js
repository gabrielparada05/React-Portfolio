import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PortfolioContainer from './components/PortfolioContainer';
import About from './components/pages/About';
import Resume from './components/pages/Resume';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import './styles/style.css'

const App = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Router>
      <div>
        <button onClick={scrollToTop} className="scroll-to-top-button">
        {/* Scroll to Top */}
        </button>
      </div>
      <Routes>
        <Route path="/React-Portfolio" element={<PortfolioContainer />} />
        <Route path="/" element={<PortfolioContainer />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
