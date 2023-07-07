import React from 'react';
import Typical from 'react-typical'
import logo from '../../images/logo-png.png'

export default function About() {
  return (
    <section id="about">
      <div className="container flex  items-center h-screen flex-col px-1 py-4">
      <img src={logo} alt='logo' className='w-60'/>
        <div className="flex flex-col text-center">
          
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I am Gabriel!
          </h1>
         
           
            <Typical
              loop={Infinity}
              wrapper="p"
              steps={[
                'I am a former Manager in Social Services',
                1000,
                'I have strong foundation in leadership, strategic planning, and problem-solving,',
                1000,
                'I am pursuing a new career path in Web Development,',
                1000, 
                'I have a solid understanding of full-stack web development,',
                1000,
                'I am excited about the opportunity to learn and share my knowledge with you.'
              ]}
            />
         
        </div>
      </div>
    </section>
  );
}




