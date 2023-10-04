import React from 'react';
import Github from '../images/github.png';
import Linkedin from '../images/linkedin.png'

export default function FooterRender() {

  return (
    <footer className="bg-sky-300 text-gray-400 py-4 text-center flex justify-center flex-col ">
      <div className="flex justify-center mb-2">
        <a href="https://github.com/gabrielparada05" className="text-blue-500 underline hover:text-blue-700">
          <img src={Github} alt="Logo Github" className="w-8 h-8 mr-4" />
        </a>
        <a href="https://www.linkedin.com/in/gabriel-parada-moreno-78b8083b/" className="text-blue-500 underline hover:text-blue-700">
          <img src={Linkedin} alt="Logo Linkedin" className="w-8 h-15 mr-4" />
        </a>
      </div>

      <div className='flex sm:justify-center'>
        <p>&copy; By Gabriel Parada</p>
      </div>
      
    </footer>
  );
};

