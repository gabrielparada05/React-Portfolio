import React from 'react';

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="flex items-center flex-wrap justify-center">
          <div className='flex flex-row justify-center w-auto'>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white flex justify-center">
              Hi, I am Gabriel!
            </h1>
          </div>

          <p className="text-justify">
            As a seasoned Manager in Social Services with years of experience leading teams and managing
            complex projects, I am now pursuing a new career path in Web Development. With a strong foundation in leadership,
            strategic planning, and problem-solving. I have completed a rigorous Web Development Bootcamp through the
            University of Toronto. This immersive program provided me with a solid understanding of full-stack web development,
            including front-end development with HTML, CSS, and JavaScript, as well as back-end development with Node.js, Express, and MongoDB.
            Through individual and team projects, I gained practical experience developing responsive and dynamic websites and web applications.
            The skills and knowledge I gained from this program have prepared me well for a successful transition to a career in Web Development.
          </p>
        </div>
      </div>
    </section>
  );
}
