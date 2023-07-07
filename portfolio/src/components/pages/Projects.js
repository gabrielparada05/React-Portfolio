import React from 'react';
import { projects } from "../../data.js";



export default function Projects() {
  return (
    <section id="projects" className="box-body bg-gray-600 body-font">
      <div className="container px-1 py-4 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-5">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            My Projects
          </h1>
          <p className="text-justify">
            As a web developer, I have worked on a diverse range of projects that showcase my skills and passion for creating exceptional web experiences. From developing interactive web applications to designing responsive websites, I have always strived for excellence in every project I undertake.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-wrap -m-4">
            {projects.map((project) => (
              <div className="sm:w-1/2 w-full p-4 relative" key={project.repo}>
                <div className="relative">
                  <img
                    alt="gallery"
                    className="w-100 h-100 object-cover object-center"
                    src={project.image}
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-5 hover:opacity-100 z-10">
                    <div className="px-8 py-10 bg-gray-600 bg-opacity-80 text-white ">
                      <h2 className="text-green-400 tracking-widest text-sm title-font font-medium mb-1">
                        {project.subtitle}
                      </h2>
                      <h1 className="text-white title-font text-lg font-medium mb-3">
                        {project.title}
                      </h1>
                      <p className="text-white object-cover leading-relaxed">{project.description}</p>
                      <div className='flex flex-row justify-center flex-wrap' >
                      <div className='flex flex-row justify-center'>
                        <a
                          href={project.link ? project.link : '#'}
                          key={project.image}
                          className={`sm:w-1/2 w-full p-4 relative ${!project.link && 'hidden'}`}
                        
                        >
                          <img
                            alt="gallery"
                            className="object-center w-7"
                            src={project.logoWww}
                          />
                        </a>
                        <a
                          href={project.repo}
                          className=" p-4"
                          key={project.title}
                        >
                          <img
                            alt="gallery"
                            className=" object-center w-7"
                            src={project.logoGit}
                          />
                        </a>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

