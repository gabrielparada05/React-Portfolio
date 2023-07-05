// import React from 'react';
import React from 'react';


export default function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-500">
    <nav className="bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="navbar">
        <ul className="flex items-center justify-start h-16">
          <li>
            <a
              href="#About"
              onClick={() => handlePageChange('About')}
              className="ml-6 no-underline text-gray-300 hover:text-white"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#Projects"
              onClick={() => handlePageChange('Projects')}
              className={`ml-6 no-underline text-gray-300 hover:text-white ${
                currentPage === 'Projects' ? 'nav-selected' : 'nav-link'
              }`}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#Resume"
              onClick={() => handlePageChange('Resume')}
              className={`ml-6 no-underline text-gray-300 hover:text-white ${
                currentPage === 'Resume' ? 'nav-selected' : 'nav-link'
              }`}
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="#Contact"
              onClick={() => handlePageChange('Contact')}
              className={`ml-6 no-underline text-gray-300 hover:text-white ${
                currentPage === 'Contact' ? 'nav-selected' : 'nav-link'
              }`}
            >
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
    </header>
  );
}






// export default function NavTabs({currentPage, handlePageChange}) {
//   const [openNav, setOpenNav] = useState(false);
 
//  useEffect(() => {
//     window.addEventListener(
//       "resize",
//       () => window.innerWidth >= 960 && setOpenNav(false)
//     );
//   }, []);
 
//   const navList = (
//     <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-normal"
//       >
//         <a href="#About" className="flex items-center">
//           About
//         </a>
//       </Typography>
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-normal"
//       >
//         <a href="#Projects" className="flex items-center">
//           Projects
//         </a>
//       </Typography>
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-normal"
//       >
//         <a href="#Resume" className="flex items-center">
//           Resume
//         </a>
//       </Typography>
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-normal"
//       >
//         <a href="#Contact" className="flex items-center">
//           Contact Me
//         </a>
//       </Typography>
//     </ul>
//   );
 
//   return (
//     <>
//       <Navbar className="sticky top z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
//         <div className="flex items-center justify-between text-blue-gray-900">
//           <Typography
//             as="a"
//             href="#"
            
            
// //           // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//           // className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
//             // className="mr-4 cursor-pointer py-1.5 font-medium"
//           >
//            {/* <div onClick={() => handlePageChange('About')}> Gabriel Parada </div> */}Gabriel Parada
//           </Typography>
//           <div className="flex items-center gap-4">
//             <div className="mr-4 hidden lg:block">{navList}</div>
//             <Button
//               variant="gradient"
//               size="sm"
//               className="hidden lg:inline-block"
//             >
//               <span>Buy Now</span>
//             </Button>
//             <IconButton
//               variant="text"
//               className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
//               ripple={false}
//               onClick={() => setOpenNav(!openNav)}
//             >
//               {openNav ? (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   className="h-6 w-6"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth={2}
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth={2}
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 </svg>
//               )}
//             </IconButton>
//           </div>
//         </div>
//         <MobileNav open={openNav}>
//           {navList}
      
//         </MobileNav>
//       </Navbar>
//     </>
//   );
// }


