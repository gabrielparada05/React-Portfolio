import React from 'react';
import { projects } from "../../data.js";
import '../../styles/style.css'



export default function Projects() {
  return (
    <section id="projects" className="box-body body-font">
      <div className="container px-1 py-4 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-5">
          <h1 className="shadow1 text-4xl sm:text-5xl font-bold mb-4 text-blue-500 p-2">
            My Projects🌐
          </h1>
          <p className="text-justify text-xl leading-8">
          👩‍💻 As a web developer, I have worked on a diverse range of projects that showcase my 
          skills and passion for creating exceptional web experiences. From developing interactive 
          web applications to designing responsive websites, I have always strived for 
          excellence in every project I undertake. 💪🌟 </p>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-wrap -m-4">
            {projects.map((project) => (
              <div className="sm:w-1/2 w-full p-4 relative" key={project.repo}>
                <div className="relative">
                  <img
                    alt="gallery"
                    className="w-100 h-100 object-cover object-center"
                    src={process.env.PUBLIC_URL + project.image}
                  />
                  <div className="project absolute inset-0 flex items-center justify-center opacity-5 hover:opacity-100 z-10">
                    <div className="project_title px-8 py-10 bg-sky-300 bg-opacity-90 text-white w-100 h-100 ">
                      <h2 className="text-white tracking-widest text-sm title-font font-medium mb-1">
                        {project.subtitle}
                      </h2>
                      <h1 className="text-slate-700 title-font text-lg font-medium mb-3">
                        {project.title}
                      </h1>
                      <p className="text-slate-700 object-cover leading-relaxed">{project.description}</p>
                      <div className='flex flex-row justify-center flex-wrap' >
                        <div className='flex flex-row justify-center'>
                          {/* <a
                          href={project.link ? process.env.PUBLIC_URL + project.link : '#'}
                          key={project.image}
                          className={`sm:w-1/2 w-full p-4 relative ${!project.link && 'hidden'}`}
                        
                        >
                          <img
                            alt="gallery"
                            className="object-center w-7"
                            src={process.env.PUBLIC_URL + project.logoWww}
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
                            src={process.env.PUBLIC_URL + project.logoGit}
                          />
                        </a> */}

                          <a
                            href={project.link || '#'}
                            key={project.image}
                            className={`sm:w-1/2 w-full p-2 md:p-0 relative ${!project.link && 'hidden'}`}
                          >
                            <button
                            className="text-blue-500 hover:text-gray-800 transition duration-300 ease-in-out bg-blue-300 hover:bg-white text-slate-900 hover:text-blue-500 border border-blue-500 rounded px-4 py-2"
    >
                              Live
                            </button>
                          </a>
                          <a
                            href={project.repo}
                            className="p-2"
                            key={project.title}
                          >
                            <button
                            className="text-blue-500 hover:text-gray-800 transition duration-300 ease-in-out bg-blue-300 hover:bg-white text-slate-900 hover:text-blue-500 border border-blue-500 rounded px-4 py-2"
                            >
                              Github
                            </button>
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

