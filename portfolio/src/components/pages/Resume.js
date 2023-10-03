import React from 'react';
import '../../styles/style.css'
import { skills } from '../../data';

export default function Resume() {

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch(process.env.PUBLIC_URL + '/resume.pdf').then(response => {
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
    <section id="resume">
      <div className="container px-1 py-4 ">
        <div className="text-center mb-5">
        <h1 className="shadow1 text-4xl sm:text-5xl font-bold mb-4 text-blue-500 p-2">
            My Skills 🧰
          </h1>
          <p className="text-justify text-xl leading-8">
          👨‍💻 I have a diverse skill set for creating engaging web apps. 
          I do front-end and back-end. I aim for top-notch 
          solutions that exceed expectations. 🚀💻
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 skill-box">
          {skills.map((skill) => (
            <div key={skill.id} className="p-2 sm:w-1/3 w-full skill-box2">
              <div className="bg-sky-200 rounded flex p-2 h-full items-center space-x-14 justify-center">
                <span className="title-font font-bold text-slate-700" key={skill.id}>
                  {skill.title}
                </span>
                <img src={process.env.PUBLIC_URL + skill.image} key={`${skill.id}-image`} alt='logo' className='w-10 flex' />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-row justify-center m-5'>
        <button className="text-white bg-sky-300 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600 rounded text-lg" onClick={onButtonClick}>
          Download my Resume
        </button>
      </div>
    </section>
  );
}
