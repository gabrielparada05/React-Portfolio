import React from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './Footer';
import '../styles/style.css';

export default function PortfolioContainer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home">
      
      <NavTabs scrollToSection={scrollToSection} />
      <div className="content">
        <About id="about" />
        <Projects id="projects" />
        <Resume id="resume" />
        <Contact id="contact" />
      </div>
      <Footer />
    </div>
  );
}
