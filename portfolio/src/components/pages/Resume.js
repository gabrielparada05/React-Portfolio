import React from 'react';
import '../../styles/style.css'
import { skills } from '../../data';

export default function Resume() {

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('resume.pdf').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'resume.pdf';
        alink.click();
      })
    })
  }

  return (
    <section id="skills">
      <div className="container px-1 py-4 ">
        <div className="text-center mb-5">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            My Skills
          </h1>
          <p className="text-justify text-xl">
            As a web developer, I have a diverse set of skills that enable me to
            create engaging and functional web applications. I am experienced in
            front-end, and also have knowledge of back-end development
            using Node.js and databases like MongoDB and SQL. With my problem-solving
            skills and passion for learning, I strive to deliver high-quality
            solutions that meet user needs and exceed expectations.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 skill-box">
          {skills.map((skill) => (
            <div key={skill.id} className="p-2 sm:w-1/3 w-full skill-box2">
              <div className="bg-gray-800 rounded flex p-2 h-full items-center space-x-14 justify-center">
                <span className="title-font font-medium text-white" key={skill.id}>
                  {skill.title}
                </span>
                <img src={process.env.PUBLIC_URL + skill.image} key={`${skill.id}-image`} alt='logo' className='w-10 flex' />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-row justify-center m-5'>
        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={onButtonClick}>
          Download my Resume
        </button>
      </div>
    </section>
  );
}
