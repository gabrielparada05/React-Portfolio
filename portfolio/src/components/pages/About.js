import React from 'react';
import Typical from 'react-typical'
import logo from '../../images/logo-png.png'

export default function About() {
  return (
    <section id="about">
      <div className="container flex  items-center h-screen flex-col px-1 py-4">
      <img src={logo} alt='logo' className='w-60'/>
        <div className="flex flex-col text-center">
          
        <Typical
     
      wrapper="h3"
      steps={[
        'Hi, I am a Junior Developer!',
        100,
      ]}
    />
    <Typical
      wrapper="h4"
      steps={[
        '📍Bradford, ON',
        100,
      ]}
    />
  
            <Typical
              
              wrapper="p"
              steps={[
                'I am a former Manager in Social Services',
                500, 
                'I have a strong foundation in leadership, strategic planning, and problem-solving',
                500, 
                'I am pursuing a new career path in Web Development',
                500, 
                'I have a solid understanding of full-stack web development',
                500, 
                'I am excited about the opportunity to learn and share my knowledge with you'
              ]}
            />
         
        </div>
      </div>
    </section>
  );
}




