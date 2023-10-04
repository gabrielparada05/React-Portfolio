// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function NavTabs() {
//   return (
//     <header className="bg-blue-800">
//       <nav className="header-nav shadow-lg fixed justify-center py-1 px-1 z-20 fixed top-0 w-full">
//         <div className="navbar">
//           <ul className="flex items-center justify-start h-16">
//             <li>
//               <Link to="/" className="ml-6 no-underline text-gray-300 hover:text-white">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="/projects" className="ml-6 no-underline text-gray-300 hover:text-white">
//                 Projects
//               </Link>
//             </li>
//             <li className='navHover'>
//               <Link to="/resume" className="ml-6 no-underline text-gray-300">
//                 Resume
//               </Link>
//             </li>
//             <li>
//               <Link to="/contact" className="ml-6 no-underline text-gray-300 hover:text-white">
//                 Contact Me
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </header>
//   );
// }


import React from 'react';

export default function NavTabs() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-blue-800">
      <nav className="header-nav bg-sky-300 shadow-lg fixed justify-center z-20 pt-2 fixed top-0 w-full">
        <div className="navbar">
          <ul className="flex items-center justify-start h-16 p-0">
            <li>
              <button
                onClick={() => scrollToSection('home')}
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-800 font-bold hover:bg-white hover:blue-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('projects')}
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-800 font-bold hover:bg-white hover:blue-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                Projects
              </button>
            </li>
            <li className='navHover'>
              <button
                onClick={() => scrollToSection('resume')}
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-800 font-bold hover:bg-white hover:blue-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                Resume
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-800 font-bold hover:bg-white hover:blue-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                Contact Me
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
