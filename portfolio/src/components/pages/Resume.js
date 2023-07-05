import React from 'react';
import '../../styles/style.css'
import { skills } from '../../data';

export default function Resume() {
  return (
    <section id="skills">
    <div className="container px-5 py-10 mx-auto">
      <div className="text-center mb-20">
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
          My Skills
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
        As a web developer, I have a diverse set of skills that enable me to
        create engaging and functional web applications. I am experienced in
        front-end, and also have knowledge of back-end development
        using Node.js and databases like MongoDB and SQL. With my problem-solving
        skills and passion for learning, I strive to deliver high-quality
        solutions that meet user needs and exceed expectations.
        </p>
      </div>
      <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        {skills.map((skill) => (
          <div key={skill} className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <span className="title-font font-medium text-white">
                {skill}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
}
