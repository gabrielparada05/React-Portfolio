import React from 'react';
import Github from '../images/github.png';
import Linkedin from '../images/linkedin.png'

export default function FooterRender() {
  
    return (
    <footer className="bg-gray-900 text-gray-400 py-4 text-center">
      <div className="container mx-auto">
        <div className="flex justify-center mb-2">
          <img src={Github} alt="Logo Github" className="w-10 h-10 mr-4" />
          <img src={Linkedin} alt="Logo Linkedin" className="w-10 h-15 mr-4" />
        </div>
        <p>&copy; By Gabriel Parada</p>
      </div>
    </footer>
  );
};

  