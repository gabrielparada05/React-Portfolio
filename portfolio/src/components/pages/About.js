import React from 'react';
// import Typical from 'react-typical';
// import logo from '../../images/logo-png.png';
import gabriel from '../../images/gabriel.jpg';

export default function About() {
  return (
    <section id="home" className=" py-16">
      <div className="container mx-auto flex flex-col items-center space-y-8">
        {/* <img src={logo} alt="Logo" className="w-60" /> */}

        {/* <div className="text-center">
          <h3 className="text-3xl font-semibold">
            <Typical wrapper="span" steps={['Versatile Web Developer & Full Stack', 100]} />
          </h3>
          <h4 className="text-xl text-gray-600">
            <Typical wrapper="span" steps={['📍Bradford, ON', 100]} />
          </h4>
        </div> */}
      </div>
      
      <div className="container mx-auto flex flex-col lg:flex-row items-center text-center space-y-8 lg:space-y-0">
        <img src={gabriel} alt="Description" className="w-1/2 lg:w-1/3 rounded-full" />
        
        <div className="text-lg w-full lg:w-2/3">
        <h1 className="shadow1 text-4xl sm:text-5xl font-bold mb-4 text-blue-500 p-2">
           Hi, I am Gabriel!👋🏼
          </h1>

          

          <p className="text-justify text-xl p-5 leading-8">
          
          I'm a <span className="text-blue-500">dedicated professional</span> with a background in Social Services and a 
          Full Stack Bootcamp graduate from the University of Toronto. Passionate about creating
           <span className="text-blue-500"> positive change</span>, I leverage my technical skills to craft
            <span className="text-blue-500">💡innovative solutions</span> for real-world challenges. When not working, 
            I enjoy life with my <span className="text-blue-500">two kids</span>, explore new travel destinations, 
            indulge in culinary adventures as a <span className="text-blue-500">🥘foodie</span>, and savor 
            <span className="text-blue-500">🍷wine and cheese</span>. I'm also a sports enthusiast, with a love 
            for <span className="text-blue-500">⚾ baseball</span> and <span className="text-blue-500">⚽ soccer</span>.
             Let's connect for a brighter future!🌟

          </p>
        </div>
      </div>
    </section>
  );
}
